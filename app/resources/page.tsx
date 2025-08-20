import Navbar from "@/components/Navigation";
import Header from "./components/Header";
import ResourcesList from "./components/ResourcesList";
import ResourcesBreadCrumbs from "./components/ResourcesBreadCrumbs";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navbar />
      <Header />
      <main>
        <div className="container mx-auto px-6 mt-12 flex justify-between items-center flex-wrap gap-4">
          <ResourcesBreadCrumbs />

          <div className="flex items-center gap-4">
            <Button size="sm">Upload File <UploadIcon className="btn-icon"/></Button>
            <Button variant="outline" size="sm">Create Folder</Button>
          </div>
        </div>
        <ResourcesList />
      </main>
    </div>
  );
}
