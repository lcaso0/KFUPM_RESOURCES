"use server";

import { z } from "zod";
import { actionClient } from "./safe-action";
import db from "@/db";
import { communities, usersToCommunities, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

const getJoinedCommunitiesSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
});

export const getJoinedCommunities = actionClient
  .inputSchema(getJoinedCommunitiesSchema)
  .action(async ({ parsedInput }) => {
    try {
      const user = await db.query.users.findFirst({
        where: eq(users.clerkId, parsedInput.userId),
      });

      if (!user) {
        throw new Error("User not found");
      }

      const joinedCommunities = await db
        .select({ id: communities.id, name: communities.name })
        .from(communities)
        .innerJoin(
          usersToCommunities,
          eq(usersToCommunities.communityId, communities.id),
        )
        .where(eq(usersToCommunities.userId, user.id));

      return joinedCommunities;
    } catch (error) {
      throw new Error("Failed to fetch joined communities");
    }
  });

export const getBreadCrumb = actionClient
  .inputSchema(
    z.object({
      folderId: z.string().min(1, "Folder ID is required"),
      communityId: z.string().min(1, "Community ID is required"),
    }),
  )
  .action(async ({ parsedInput }) => {
    try {
      const rawFolders = await db.execute(sql`
      WITH RECURSIVE folder_path AS (
        SELECT id, folder_name, parent_id
        FROM folders
        WHERE id = ${parsedInput.folderId}
        AND community_id = ${parsedInput.communityId}

        UNION ALL

        SELECT f.id, f.folder_name, f.parent_id
        FROM folders f
        INNER JOIN folder_path fp ON f.id = fp.parent_id
      )
      SELECT * FROM folder_path;
    `);

      return rawFolders.reverse().map((f: any) => ({
        id: f.id,
        name: f.folder_name,
      }));
    } catch (error) {
      throw new Error("Failed to fetch breadcrumb");
    }
  });
