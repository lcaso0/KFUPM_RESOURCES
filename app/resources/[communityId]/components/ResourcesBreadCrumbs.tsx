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
import { getBreadCrumb, getJoinedCommunities } from "@/lib/actions";
import { PUBLIC_COMMUNITY_ID } from "@/lib/shared-variables";
import { useBreadcrumbStore } from "@/stores/useBreadCrumb";
import { useUser } from "@clerk/nextjs";
import { ChevronDown, DoorOpen, SlashIcon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function ResourcesBreadCrumbs() {
  const {
    breadcrumbs,
    communityName,
    communityId,
    truncateBreadcrumb,
    setBreadcrumbs,
  } = useBreadcrumbStore();
  const { executeAsync } = useAction(getJoinedCommunities);
  const breadcrumbAction = useAction(getBreadCrumb);
  const { user, isLoaded } = useUser();
  const [joinedCommunities, setJoinedCommunities] = useState<any[]>([]);
  const params = useParams();

  useEffect(() => {
    if (params.folderId && params.communityId) {
      breadcrumbAction
        .executeAsync({
          folderId: params.folderId as string,
          communityId: params.communityId as string,
        })
        .then((res) => {
          if (res.data) {
            setBreadcrumbs(res.data);
          } else {
            setBreadcrumbs([]);
          }
        });
    } else {
      setBreadcrumbs([]);
    }

    if (isLoaded && user) {
      executeAsync({ userId: user.id }).then((res) => {
        setJoinedCommunities(res.data ?? []);
      });
    }
    breadcrumbAction;
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
                        <Link
                          key={c.id}
                          onClick={() => setBreadcrumbs([])}
                          href={`/resources/${c.id}`}
                        >
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
