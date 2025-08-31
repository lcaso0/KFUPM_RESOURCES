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
import { useBreadcrumb } from "../context/BreadcrumbContext";

const getIconComponent = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return <Laptop className="text-cyan-500 h-8 w-8" />;
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

const getHoverBorderColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "hover:border-cyan-500/30";
    case "CHEM":
      return "hover:border-green-500/30";
    case "MATH":
      return "hover:border-yellow-500/30";
    case "PHYS":
      return "hover:border-red-500/30";
    case "PE":
      return "hover:border-orange-500/30";
    default:
      return "hover:border-primary/30";
  }
};

const getHoverTextColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "group-hover:text-cyan-500";
    case "CHEM":
      return "group-hover:text-green-500";
    case "MATH":
      return "group-hover:text-yellow-500";
    case "PHYS":
      return "group-hover:text-red-500";
    case "PE":
      return "group-hover:text-orange-500";
    default:
      return "group-hover:text-primary";
  }
};

const getTextColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "text-cyan-500";
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
};

const getBgColor = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return "bg-cyan-500/30";
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
};

interface Props {
  folder: Folder;
}

export default function CommunityCard({ folder }: Props) {
  const { addBreadcrumb } = useBreadcrumb();

  return (
    <Link
      href={`/resources/${folder.communityId}/${folder.id}`}
      onClick={() => addBreadcrumb(folder)}
    >
      <Card
        className={`h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-border ${getHoverBorderColor(folder.name)} group hover:cursor-pointer flex flex-col justify-between`}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-lg ${getBgColor(folder.name)}`}>
              {getIconComponent(folder.name)}
            </div>
            <ChevronRight
              className={`h-5 w-5 text-muted-foreground ${getHoverTextColor(folder.name)} transition-colors`}
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle
            className={`text-lg font-semibold text-foreground mb-2 ${getTextColor(folder.name)}`}
          >
            {folder.name}
          </CardTitle>
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
