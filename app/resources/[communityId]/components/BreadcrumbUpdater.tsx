"use client";

import { useEffect } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useAction } from "next-safe-action/hooks";
import { getBreadCrumb } from "@/lib/actions";

interface BreadcrumbUpdaterProps {
  communityName: string;
  communityId: string;
  folderId?: string;
}

export default function BreadcrumbUpdater({
  communityName,
  communityId,
  folderId,
}: BreadcrumbUpdaterProps) {
  const { setCommunityName, setCommunityId, setFolderId } =
    useBreadcrumb();

  useEffect(() => {
    setFolderId(folderId || "");
    setCommunityName(communityName);
    setCommunityId(communityId);
  }, [
    communityName,
    communityId,
    setCommunityName,
    setCommunityId,
  ]);

  return null;
}

