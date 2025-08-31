import db from "@/db";
import { communities, folders, resources } from "@/db/schema";
import { eq, isNull } from "drizzle-orm";
import CommunityList from "./components/CommunityList";
import BreadcrumbUpdater from "./components/BreadcrumbUpdater";

interface Params {
  params: Promise<{ communityId: string }>;
}

export default async function CommunityPage({ params }: Params) {
  const { communityId } = await params;

  const community = await db.query.communities.findFirst({
    where: eq(communities.id, communityId),
    with: {
      folders: {
        where: isNull(folders.parentId),
      },
      resources: {
        where: isNull(resources.folderId), // Only fetch resources not in any folder
      },
    },
  });

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <>
      <BreadcrumbUpdater 
        communityName={community.name} 
        communityId={community.id} 
      />
      <CommunityList
        folders={community.folders}
        resources={community.resources ?? []}
      />
    </>
  );
}
