import db from "@/db";
import { communities } from "@/db/schema";
import Navbar from "@/components/Navigation";
import Header from "./components/Header";
import { eq } from "drizzle-orm";
import { UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResourcesBreadCrumbs from "./components/ResourcesBreadCrumbs";
import ResourcesList from "./components/ResourcesList";

interface Params {
  children: React.ReactNode;
  params: Promise<{ communityId: string }>;
}

export default async function CommunityLayout({ children, params }: Params) {
  const communityId = await params.then(
    (p: { communityId: string }) => p.communityId,
  );
  console.log("Community Layout, communityId:", communityId);

  const community = await db.query.communities.findFirst({
    where: eq(communities.id, communityId),
  });

  console.log("Community:", community);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Header />
      <main>
        <div className="container mx-auto px-6 mt-12 flex justify-between items-center flex-wrap gap-4">
          <ResourcesBreadCrumbs communityName={community.name} />

          <div className="flex items-center gap-4">
            <Button size="sm">
              Upload File <UploadIcon className="btn-icon" />
            </Button>
            <Button variant="outline" size="sm">
              Create Folder
            </Button>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
