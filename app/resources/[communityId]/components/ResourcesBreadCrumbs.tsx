import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DoorOpen, SlashIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";

export default function ResourcesBreadCrumbs({
  data,
  communityName = "Public",
  communityId,
  isRoot = false
}: {
  data?: Array<{ id: string; name: string }>;
  communityName?: string;
  communityId: string;
  isRoot?: boolean;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            {isRoot ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    {communityName} <DoorOpen className="btn-icon" />{" "}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Current Community: {communityName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={`/resources/${communityId}`}>{communityName}</Link>
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {data &&
          data.map((folder) => (
            <Fragment key={folder.id}>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/resources/${communityId}/${folder.id}`}>
                    {folder.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        {/* <BreadcrumbItem> */}
        {/*   <BreadcrumbLink asChild> */}
        {/*     <Link href="/components">ICS104</Link> */}
        {/*   </BreadcrumbLink> */}
        {/* </BreadcrumbItem> */}
        {/* </BreadcrumbSeparator> */}
        {/* <BreadcrumbItem> */}
        {/*   <BreadcrumbPage>Old Exams</BreadcrumbPage> */}
        {/* </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
