import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CommunityCard from "./CommunityCard";
import { Folder, Resource } from "@/lib/types";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { FileText, ChevronRight } from "lucide-react";

interface Props {
  folders: Folder[];
  resources: Resource[];
}

export default function CommunityList({ folders, resources }: Props) {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Input
          placeholder="ابحث عن مقرر (مثال: MATH101)"
          className="max-w-sm text-right"
        />
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="نوع المورد" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="exam">اختبار</SelectItem>
              <SelectItem value="notes">ملاحظات</SelectItem>
              <SelectItem value="assignment">واجب</SelectItem>
              <SelectItem value="summary">ملخص</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="الفصل الدراسي" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="223">223</SelectItem>
              <SelectItem value="222">222</SelectItem>
              <SelectItem value="221">221</SelectItem>
              <SelectItem value="212">212</SelectItem>
              <SelectItem value="211">211</SelectItem>
              <SelectItem value="201">201</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {/*   {folders.map((folder) => ( */}
      {/*     <CommunityCard key={folder.id} folder={folder} /> */}
      {/*   ))} */}
      {/* </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {folders.length > 0 && (
          <>
            {folders.map((folder) => (
              <CommunityCard key={folder.id} folder={folder} />
            ))}
          </>
        )}

        {/* Resources Section */}
        {resources.length > 0 && (
          <>
            {resources.map((resource) => (
              <Card
                className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-border hover:border-secondary/50 dark:hover:border-blue-400/50 group"
                key={resource.id}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-secondary/50 dark:bg-blue-400/50 rounded-lg">
                      <FileText className="h-5 w-5 text-secondary-foreground" />
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
            ))}
          </>
        )}
      </div>
    </div>
  );
}
