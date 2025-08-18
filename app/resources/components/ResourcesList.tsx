import ResourceCard from "./ResourceCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const resources = [
  { title: "ملخص الوحدة الأولى", course: "MATH101", type: "ملخص", semester: "212" },
  { title: "اختبار فصلي أول", course: "PHYS101", type: "اختبار", semester: "201" },
  { title: "واجب بيتي محلول", course: "ICS108", type: "واجب", semester: "223" },
  { title: "ملاحظات المحاضرة", course: "CHEM101", type: "ملاحظات", semester: "192" },
  { title: "ملخص الوحدة الثانية", course: "MATH101", type: "ملخص", semester: "212" },
  { title: "اختبار فصلي ثاني", course: "PHYS101", type: "اختبار", semester: "201" },
];

export default function ResourcesList() {
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
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}
