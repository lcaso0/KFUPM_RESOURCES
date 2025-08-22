import db from "@/db";
import { communities } from "@/db/schema";
import { eq } from "drizzle-orm";
import ResourcesList from "./components/ResourcesList";

interface Params {
  children: React.ReactNode;
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
      folders: true
    }
  });

  if (!community) {
    return <div>Community not found</div>;
  }

  console.log("Community:", community);

  return <ResourcesList />;
}
