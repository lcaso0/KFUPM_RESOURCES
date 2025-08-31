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
import { getBreadCrumb, getJoinedCommunities } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { PUBLIC_COMMUNITY_ID } from "@/lib/shared-variables";

export default function ResourcesBreadCrumbs() {
  const {
    breadcrumbs,
    communityName,
    communityId,
    folderId,
    truncateBreadcrumb,
    setBreadcrumbs,
  } = useBreadcrumb();
  const { executeAsync } = useAction(getJoinedCommunities);
  const breadcrumbAction = useAction(getBreadCrumb);
  const { user, isLoaded } = useUser();
  const [joinedCommunities, setJoinedCommunities] = useState<any[]>([]);

  useEffect(() => {
    if (folderId) {
      breadcrumbAction.executeAsync({ folderId }).then((res) => {
        if (res.data) {
          setBreadcrumbs(res.data);
        }
        else {
          setBreadcrumbs([]);
        }
      });
    }

    if (isLoaded && user) {
      executeAsync({ userId: user.id }).then((res) => {
        setJoinedCommunities(res.data ?? []);
      });
    }
    breadcrumbAction
  }, [isLoaded, user]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem onClick={() => setBreadcrumbs([])}>
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
                    <Link href={`/resources/${PUBLIC_COMMUNITY_ID}`}>
                      <DropdownMenuRadioItem value={PUBLIC_COMMUNITY_ID}>
                        Public
                      </DropdownMenuRadioItem>
                    </Link>
                    {joinedCommunities.length > 0 &&
                      joinedCommunities.map((c) => (
                        <Link key={c.id} href={`/resources/${c.id}`}>
                          <DropdownMenuRadioItem value={c.id}>
                            {c.name}
                          </DropdownMenuRadioItem>
                        </Link>
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
            <BreadcrumbItem onClick={() => truncateBreadcrumb(folder.id)}>
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
