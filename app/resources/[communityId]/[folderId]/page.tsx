import db from "@/db";
import { folders } from "@/db/schema";
// import { getBreadcrumb } from "@/lib/functions";
import { and, eq } from "drizzle-orm";
import { Folder as FolderIcon } from "lucide-react";
import BreadcrumbUpdater from "../components/BreadcrumbUpdater";
import FolderCard from "../components/FolderCard";
import ResourceCard from "../components/ResourceCard";
import { Separator } from "@/components/ui/separator";

interface Params {
  params: Promise<{ communityId: string; folderId: string }>;
}

export default async function FolderPage({ params }: Params) {
  const { communityId, folderId } = await params;

  // Fetch the current folder
  const currentFolder = await db.query.folders.findFirst({
    where: and(eq(folders.id, folderId), eq(folders.communityId, communityId)),
    with: {
      community: true,
      // parentFolder: true,
      children: true,
      resources: true,
    },
  });

  if (!currentFolder) {
    return <div className="container mx-auto px-6 py-12">Folder not found</div>;
  }

  const subFolders = currentFolder.children;
  const folderResources = currentFolder.resources;

  // Breadcrumbs
  // const breadcrumbs = await getBreadcrumb(currentFolder.id);

  return (
    <div className="bg-background">
      <BreadcrumbUpdater
        communityName={currentFolder.community.name}
        communityId={currentFolder.community.id}
        folderId={currentFolder.id}
      />
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {currentFolder.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {currentFolder.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span>Community: {currentFolder.community.name}</span>
            <span>•</span>
            <span>{subFolders.length} folders</span>
            <span>•</span>
            <span>{folderResources.length} resources</span>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Sub-folders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subFolders.length > 0 && (
            <>
              {subFolders.map((folder) => (
                <FolderCard
                  key={folder.id}
                  communityId={currentFolder.communityId}
                  folder={folder}
                />
              ))}
            </>
          )}

          {/* Resources Section */}
          {folderResources.length > 0 && (
            <>
              {folderResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </>
          )}
        </div>

        {/* Empty State */}
        {subFolders.length === 0 && folderResources.length === 0 && (
          <div className="text-center py-16">
            <FolderIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Empty Folder
            </h3>
            <p className="text-muted-foreground">
              This folder doesn't contain any sub-folders or resources yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
