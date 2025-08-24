import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ResourceFolder from "./ResourceFolder";
import { Folder } from "@/lib/types";

interface Props {
  folders: Folder[];
}

export default function ResourcesList({ folders }: Props) {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {folders.map((folder) => (
          <ResourceFolder key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
}
