import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import db from "@/db"; 
import { users } from "@/db/schema"; // your drizzle schema
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  // 1. Get headers for svix verification
  const svix_id = req.headers.get("svix-id");
  const svix_timestamp = req.headers.get("svix-timestamp");
  const svix_signature = req.headers.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  // 2. Read the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // 3. Verify webhook
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");
  let evt: any;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // 4. Handle event types from Clerk
  const eventType: string = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    await db
      .insert(users)
      .values({
        clerkId: id,
        email: email_addresses?.[0]?.email_address,
        fullName: `${first_name} ${last_name}`,
        imageUrl: image_url,
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: email_addresses?.[0]?.email_address,
          fullName: `${first_name} ${last_name}`,
          imageUrl: image_url,
        },
      });
  }

  if (eventType === "user.updated") {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    await db
      .update(users)
      .set({
        email: email_addresses?.[0]?.email_address,
        fullName: `${first_name} ${last_name}`,
        imageUrl: image_url,
      })
      .where(eq(users.id, id));
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;

    await db.delete(users).where(eq(users.id, id));
  }

  return NextResponse.json({ success: true });
}
