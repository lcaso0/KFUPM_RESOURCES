"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, DoorOpen, SlashIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useAction } from "next-safe-action/hooks";
import { getJoinedCommunities } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { PUBLIC_COMMUNITY_ID } from "@/lib/shared-variables";

export default function ResourcesBreadCrumbs() {
  const { breadcrumbs, communityName, communityId } = useBreadcrumb();
  const { executeAsync } = useAction(getJoinedCommunities);
  const { user, isLoaded } = useUser();
  const [joinedCommunities, setJoinedCommunities] = useState<any[]>([]);

  useEffect(() => {
    if (isLoaded && user) {
      executeAsync({ userId: user.id }).then((res) => {
        setJoinedCommunities(res.data ?? []);
      });
    }
  }, [isLoaded, user]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/resources/${communityId}`}>
              <DropdownMenu>
                <div className="flex items-center gap-1">
                  {communityName}
                  <DropdownMenuTrigger className="flex items-center gap-1 font-bold">
                    <ChevronDown className="size-5" />
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Communities</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={communityId}>
                    {joinedCommunities.length === 0 && (
                      <DropdownMenuRadioItem value={PUBLIC_COMMUNITY_ID}>
                        <Link
                          href={`/resources/${PUBLIC_COMMUNITY_ID}`}
                        >
                          Public
                        </Link>
                      </DropdownMenuRadioItem>
                    )}
                    {joinedCommunities.length > 0 &&
                      joinedCommunities.map((c) => (
                        <DropdownMenuRadioItem key={c.id} value={c.id}>
                          <Link href={`/resources/${c.id}`}>{c.name}</Link>
                        </DropdownMenuRadioItem>
                      ))}
                  </DropdownMenuRadioGroup>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-2"
                    asChild
                  >
                    <Link href="/resources/join">
                      Join Community <DoorOpen className="btn-icon" />
                    </Link>
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
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
