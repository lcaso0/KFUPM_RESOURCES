// scripts/seed.ts
import "dotenv/config";
import {
  users,
  communities,
  usersToCommunities,
  folders,
  resources,
} from "./schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  // 1. Find existing user by email
  const userEmail = "s202458760@kfupm.edu.sa"; // change if needed
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, userEmail));

  if (!user) {
    throw new Error(`No user found with email: ${userEmail}`);
  }
  console.log("Found user:", user.fullName);

  // 2. Create a new community named "Qatif"
  const [community] = await db
    .insert(communities)
    .values({
      name: "Qatif",
      code: "QATIF123", // make random or unique in prod
      description: "Community for Qatif students",
      authorId: user.clerkId,
    })
    .returning();

  console.log("Created community:", community.name);

  // 3. Join the user into the community as admin
  await db.insert(usersToCommunities).values({
    userId: user.clerkId,
    communityId: community.id,
    role: "admin",
  });

  console.log("User joined community as admin");

  // 4. Create folders (nested example)
  const [parentFolder] = await db
    .insert(folders)
    .values({
      title: "Engineering 101",
      name: "ENG101",
      description: "All lecture notes for Engineering 101",
      communityId: community.id,
    })
    .returning();

  const [childFolder] = await db
    .insert(folders)
    .values({
      name: "Lecture Notes",
      title: "Lecture Notes for ENG101",
      description: "Notes from all lectures",
      communityId: community.id,
      parentId: parentFolder.id,
    })
    .returning();

  const [subChildFolder] = await db
    .insert(folders)
    .values({
      name: "Chapter 1",
      title: "Lecture Notes for ENG101 Chapter 1",
      description: "Notes from Chapter 1",
      communityId: community.id,
      parentId: childFolder.id,
    })
    .returning();

  console.log(
    "Created folders:",
    parentFolder.name,
    "->",
    childFolder.name,
    "->",
    subChildFolder.name,
  );

  // 5. Add resources
  await db.insert(resources).values([
    {
      title: "Syllabus",
      description: "Course syllabus document",
      content: "This is the syllabus text for ENG101...",
      communityId: community.id,
    },
    {
      title: "Week 1 Notes",
      description: "Introduction to engineering",
      content: "Content of week 1 notes...",
      communityId: community.id,
      folderId: childFolder.id,
    },
    {
      title: "Chapter 1 First Note",
      description: "First chapter lecture note",
      content: "Content of the first chapter note...",
      communityId: community.id,
      folderId: subChildFolder.id,
    },
  ]);

  console.log("Seed data for 'Qatif' inserted successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
