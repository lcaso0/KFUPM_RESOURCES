"use server";

import { z } from "zod";
import { actionClient } from "./safe-action";
import db from "@/db";
import { communities, usersToCommunities, users } from "@/db/schema";
import { eq } from "drizzle-orm";

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
