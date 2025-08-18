'use client'

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BicepsFlexed,
  FlaskConical,
  Folder,
  Laptop,
  Pi,
  Radiation
} from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  course: string;
  description: string;
}

const getIconComponent = (course: string) => {
  switch (course.replace(/[0-9]/g, "")) {
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
      return <Folder className="text-gray-500" size={36} />;
  }
};

export default function ResourceFolder({ title, course, description }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {/* Desktop: Flip animation */}
      <div className="hidden md:block">
        <motion.div
          className="relative w-full h-48 cursor-pointer"
          style={{ perspective: 1000 }}
          onHoverStart={() => setIsFlipped(true)}
          onHoverEnd={() => setIsFlipped(false)}
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
                  <div className="mb-2">{getIconComponent(course)}</div>
                  <CardTitle className="text-lg font-semibold">{course}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Back of card */}
            <div
              className="absolute w-full h-full"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <Card className="w-full h-full flex items-center justify-center p-4">
                <CardHeader className="flex flex-col items-center text-center">
                  <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
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
            <div className="mb-2">{getIconComponent(course)}</div>
            <CardTitle className="text-lg font-semibold mb-3">{course}</CardTitle>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
