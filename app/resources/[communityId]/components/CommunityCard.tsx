"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder } from "@/lib/types";
import {
  BicepsFlexed,
  ChevronRight,
  FlaskConical,
  Folder as FolderIcon,
  Laptop,
  Pi,
  Radiation,
} from "lucide-react";
import Link from "next/link";

const getIconComponent = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return <Laptop className="text-blue-500 h-8 w-8" />;
    case "CHEM":
      return <FlaskConical className="text-green-500 h-8 w-8" />;
    case "MATH":
      return <Pi className="text-yellow-500 h-8 w-8" />;
    case "PHYS":
      return <Radiation className="text-red-500 h-8 w-8" />;
    case "PE":
      return <BicepsFlexed className="text-orange-500 h-8 w-8" />;
    default:
      return <FolderIcon className="text-primary h-6 w-6" />;
  }
};

const getBgColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "bg-blue-500/30";
    case "CHEM":
      return "bg-green-500/30";
    case "MATH":
      return "bg-yellow-500/30";
    case "PHYS":
      return "bg-red-500/30";
    case "PE":
      return "bg-orange-500/30";
    default:
      return "bg-primary/30";
  }
}

const getBorderColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "border-blue-500/30";
    case "CHEM":
      return "border-green-500/30";
    case "MATH":
      return "border-yellow-500/30";
    case "PHYS":
      return "border-red-500/30";
    case "PE":
      return "border-orange-500/30";
    default:
      return "border-primary/30";
  }
}

const getTextColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "text-blue-500";
    case "CHEM":
      return "text-green-500";
    case "MATH":
      return "text-yellow-500";
    case "PHYS":
      return "text-red-500";
    case "PE":
      return "text-orange-500";
    default:
      return "text-primary";
  }
}

interface Props {
  folder: Folder;
}

export default function CommunityCard({ folder }: Props) {
  return (
    <Link href={`/resources/${folder.communityId}/${folder.id}`}>
      <Card className={`h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-border hover:${getBorderColor(folder.name)} group`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-lg ${getBgColor(folder.name)}`}>
              {getIconComponent(folder.name)}
            </div>
            <ChevronRight className={`h-5 w-5 text-muted-foreground group-hover:${getTextColor(folder.name)} transition-colors`} />
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
