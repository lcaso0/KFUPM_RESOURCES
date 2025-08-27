import { PUBLIC_COMMUNITY_ID } from "@/lib/shared-variables";
import { redirect } from "next/navigation";

export default function ResourcesRootPage() {
  redirect(`/resources/${PUBLIC_COMMUNITY_ID}`);
}
