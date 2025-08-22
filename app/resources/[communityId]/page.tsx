import db from "@/db";
import { communities, folders } from "@/db/schema";
import { eq, isNull } from "drizzle-orm";
import ResourcesList from "./components/ResourcesList";

interface Params {
  params: Promise<{ communityId: string }>;
}

export default async function CommunityPage({ params }: Params) {
  const communityId = await params.then(
    (p: { communityId: string }) => p.communityId,
  );
  console.log("Community Layout, communityId:", communityId);

  const community = await db.query.communities.findFirst({
    where: eq(communities.id, communityId),
    with: {
      folders: {
        where: isNull(folders.parentId)
      }
    }
  });

  if (!community) {
    return <div>Community not found</div>;
  }

  console.log("Community:", community);

  return <ResourcesList folders={community.folders} />;
}
