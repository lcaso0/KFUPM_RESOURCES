import { Webhook } from "svix"; // Clerk uses Svix for webhooks
import db from "@/db";
import { users } from "@/db/schema";

export default async function handler(req, res) {
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  let evt;

  try {
    evt = wh.verify(JSON.stringify(payload), headers);
  } catch (err) {
    return res.status(400).json({ error: "Invalid webhook" });
  }

  const eventType = evt.type;
  const data = evt.data;

  if (eventType === "user.created") {
    await db.insert(users).values({
      clerkId: data.id,
      email: data.email_addresses[0].email_address,
      fullName: data.first_name + " " + data.last_name,
      imageUrl: data.image_url,
    });
  }

  if (eventType === "user.updated") {
    await db
      .update(users)
      .set({
        email: data.email_addresses[0].email_address,
        fullName: data.first_name + " " + data.last_name,
        imageUrl: data.image_url,
        updatedAt: new Date(),
      })
      .where(users.clerkId.eq(data.id));
  }

  if (eventType === "user.deleted") {
    await db.delete(users).where(users.clerkId.eq(data.id));
  }

  return res.json({ success: true });
}
