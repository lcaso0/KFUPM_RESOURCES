import db from "@/db";
import { folders, communities, resources } from "@/db/schema";
import { eq, and, isNull } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder as FolderIcon, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import ResourcesBreadCrumbs from "../components/ResourcesBreadCrumbs";

interface Params {
  params: Promise<{ communityId: string; folderId: string }>;
}

export default async function FolderPage({ params }: Params) {
  const { communityId, folderId } = await params;

  // Fetch the current folder
  const currentFolder = await db.query.folders.findFirst({
    where: eq(folders.id, folderId),
    with: {
      community: true,
      parentFolder: true,
      children: true,
    },
  });
  
  // Fetch resources in the current folder
  const folderResources = await db.query.resources.findMany({
    where: and(
      eq(resources.communityId, communityId),
      eq(resources.folderId, folderId),
    )
  });


  if (!currentFolder) {
    return <div className="container mx-auto px-6 py-12">Folder not found</div>;
  }

  const subFolders = currentFolder.children;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
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

        {/* Sub-folders Section */}
        {subFolders.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subFolders.map((folder) => (
                <Link
                  key={folder.id}
                  href={`/resources/${communityId}/${folder.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-border hover:border-primary/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FolderIcon className="h-6 w-6 text-primary" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg font-semibold text-foreground mb-2">
                        {folder.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {folder.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Resources Section */}
        {folderResources.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {folderResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-secondary/50 rounded-lg">
                        <FileText className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {resource.title}
                        </CardTitle>
                        {resource.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {resource.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Click to view</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

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
