import { NextRequest, NextResponse } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import db from "@/db";
import { users } from "@/db/schema"; // your drizzle schema
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const evt: any = await verifyWebhook(req);

    const eventType: string = evt.type;

    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      await db
        .insert(users)
        .values({
          clerkId: id,
          email: email_addresses?.[0]?.email_address,
          fullName: `${first_name} ${last_name}`,
          imageUrl: image_url,
        })
    }

    if (eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      await db
        .update(users)
        .set({
          email: email_addresses?.[0]?.email_address,
          fullName: `${first_name} ${last_name}`,
          imageUrl: image_url,
        })
        .where(eq(users.clerkId, id));
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;

      await db.delete(users).where(eq(users.clerkId, id));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }
}
