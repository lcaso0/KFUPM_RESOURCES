"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder } from "@/lib/types";
import { motion } from "framer-motion";
import {
  BicepsFlexed,
  FlaskConical,
  Folder as FolderIcon,
  Laptop,
  Pi,
  Radiation,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const getIconComponent = (course: string) => {
  switch (course.toUpperCase().replace(/[0-9]/g, "")) {
    case "ICS":
      return <Laptop className="text-blue-500" size={36} />;
    case "CHEM":
      return <FlaskConical className="text-green-500" size={36} />;
    case "MATH":
      return <Pi className="text-yellow-500" size={36} />;
    case "PHYS":
      return <Radiation className="text-red-500" size={36} />;
    case "PE":
      return <BicepsFlexed className="text-orange-500" size={36} />;
    default:
      return <FolderIcon className="text-gray-500" size={36} />;
  }
};

interface Props {
  folder: Folder;
}

export default function CommunityCard({ folder }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Link href={`/resources/${folder.communityId}/${folder.id}`}>
      {/* Desktop: Flip animation */}
      <div className="hidden md:block">
        <motion.div
          className="relative w-full h-48 cursor-pointer"
          style={{ perspective: 1000 }}
          onHoverStart={() => setIsFlipped(true)}
          onHoverEnd={() => setIsFlipped(false)}
          onTapStart={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            {/* Front of card */}
            <div
              className="absolute w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Card className="w-full h-full flex items-center justify-center">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="mb-2">{getIconComponent(folder.name)}</div>
                  <CardTitle className="text-lg font-semibold">
                    {folder.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Back of card */}
            <div
              className="absolute w-full h-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Card className="w-full h-full flex items-center justify-center p-4">
                <CardHeader className="flex flex-col items-center text-center w-full">
                  <CardTitle className="text-lg font-semibold mb-2 text-primary">
                    {folder.title}
                  </CardTitle>
                  <p className="text-sm text-foreground leading-relaxed">
                    {folder.description}
                  </p>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile/Tablet: Show title and description below course name */}
      <div className="md:hidden">
        <Card className="w-full">
          <CardHeader className="flex flex-col items-center text-center py-6">
            <div className="mb-2">{getIconComponent(folder.name)}</div>
            <CardTitle className="text-lg font-semibold mb-3 text-card-foreground">
              {folder.name}
            </CardTitle>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-primary">{folder.title}</h3>
              <p className="text-sm text-card-foreground leading-relaxed max-w-xs">
                {folder.description}
              </p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </Link>
  );
}
