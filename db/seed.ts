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
  const userEmail = "s202458760@kfupm.edu.sa"; // change this to an existing email
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, userEmail));

  if (!user) {
    throw new Error(`No user found with email: ${userEmail}`);
  }
  console.log("Found user:", user.fullName);

  // 2. Create a new community
  // const [community] = await db
  //   .insert(communities)
  //   .values({
  //     name: "Public Community",
  //     code: "PUB", // make random in prod
  //     description: "Default public community",
  //     authorId: user.id,
  //   })
  //   .returning();

  // console.log("Created community:", community.name);
  const [community] = await db
    .select()
    .from(communities)
    .where(eq(communities.code, "PUB"));

  // 3. Join the user into the community as admin
  // await db.insert(usersToCommunities).values({
  //   userId: user.id,
  //   communityId: community.id,
  //   role: "admin",
  // });

  console.log("User joined community as admin");

  // 4. Create folders (nested example)
  const [parentFolder] = await db
    .insert(folders)
    .values({
      title: "First Year Physics Course",
      name: "PHYS101",
      description: "All lecture notes for the semester",
      communityId: community.id,
    })
    .returning();

  const [childFolder] = await db
    .insert(folders)
    .values({
      name: "Lecture Notes",
      title: "Lecture Notes for PHYS101",
      description: "Notes from all lectures",
      communityId: community.id,
      parentId: parentFolder.id,
    })
    .returning();

  const [subChildFolder] = await db
    .insert(folders)
    .values({
      name: "Chapter 1",
      title: "Lecture Notes for PHYS101 Chapter 1",
      description: "Notes from all lectures in Chapter 1",
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
      content: "This is the syllabus text...",
      communityId: community.id,
    },
    {
      title: "week 1 notes",
      description: "intro to the course",
      content: "content of week 1 notes...",
      communityId: community.id,
      folderId: childFolder.id,
    },
    {
      title: "Chapter 1 first note",
      description: "First chapter lecture note",
      content: "content of the first chapter note",
      communityId: community.id,
      folderId: subChildFolder.id,
    },
  ]);

  console.log("Seed data inserted successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
