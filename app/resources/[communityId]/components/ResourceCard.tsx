import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Resource } from "@/lib/types";
import { FileText, ChevronRight } from "lucide-react";

export default function FolderCard({ resource }: { resource: Resource }) {
  return (
    <Card
      className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-border hover:border-secondary/50 dark:hover:border-blue-400/50 group hover:cursor-pointer"
      key={resource.id}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-secondary/50 dark:bg-blue-400/50 rounded-lg">
            <FileText className="h-8 w-8 text-secondary-foreground" />
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary dark:group-hover:text-blue-400/50 transition-colors" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-semibold text-foreground mb-2">
          {resource.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {resource.description}
        </p>
      </CardContent>
    </Card>
  );
}
