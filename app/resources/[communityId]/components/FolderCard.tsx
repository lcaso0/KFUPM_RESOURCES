"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Folder } from "@/lib/types";
import { FolderIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useBreadcrumb } from "../context/BreadcrumbContext";

interface Props {
  communityId: string;
  folder: Folder;
}

export default function FolderCard({ communityId, folder }: Props) {
  const { addBreadcrumb } = useBreadcrumb();

  return (
    <Link
      key={folder.id}
      href={`/resources/${communityId}/${folder.id}`}
      className="group"
      onClick={() => {
        addBreadcrumb({ id: folder.id, name: folder.name });
      }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-border hover:border-primary/50 hover:cursor-pointer flex flex-col justify-between">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FolderIcon className="h-8 w-8 text-primary" />
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
  );
}
