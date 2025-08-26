import Navbar from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Header from "./components/Header";
import ResourcesBreadCrumbs from "./components/ResourcesBreadCrumbs";
import { BreadcrumbProvider } from "./context/BreadcrumbContext";

export default async function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BreadcrumbProvider>
      <div className="min-h-screen bg-background ">
        <Navbar />
        <Header />
        <div className="container mx-auto px-6 mt-12 flex justify-between items-center flex-wrap gap-4">
          <ResourcesBreadCrumbs />
          <div className="flex items-center gap-4">
            <Button size="sm">
              Upload File <UploadIcon className="btn-icon" />
            </Button>
            <Button variant="outline" size="sm">
              Create Folder
            </Button>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </BreadcrumbProvider>
  );
}
