'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";

export default function ResourcesBreadCrumbs() {
  const { breadcrumbs, communityName, communityId } = useBreadcrumb();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/resources/${communityId}`}>{communityName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((folder) => (
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
      </BreadcrumbList>
    </Breadcrumb>
  );
}
