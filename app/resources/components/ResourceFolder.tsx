import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BicepsFlexed,
  FlaskConical,
  Folder,
  Laptop,
  Pi,
  Radiation
} from "lucide-react";

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
  return (
    <Card className="hover:scale-[1.03] transform transition-all cursor-pointer">
      <CardHeader className="flex flex-col items-center">
        <div className="mb-2">{getIconComponent(course)}</div>
        <CardTitle>{course}</CardTitle>
      </CardHeader>
    </Card>
  );
}
