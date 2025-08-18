import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ResourceCardProps {
  title: string;
  course: string;
  type: string;
  semester: string;
}

export default function ResourceCard({ title, course, type, semester }: ResourceCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-48">
          <Image src="/file.svg" alt="File Icon" layout="fill" objectFit="contain" className="p-4" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Badge variant="secondary" className="mb-2">{course}</Badge>
        <CardTitle className="text-xl font-bold mb-2 text-right">{title}</CardTitle>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{type}</span>
          <span>{semester}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-gray-50">
        <Button className="w-full">تحميل</Button>
      </CardFooter>
    </Card>
  );
}
