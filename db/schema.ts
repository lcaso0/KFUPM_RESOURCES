import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(), // Local Supabase ID
  clerkId: text("clerk_id").notNull().unique(), // Clerk's user ID
  email: text("email").notNull(),
  fullName: text("full_name"), // optional - depends on your app
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
