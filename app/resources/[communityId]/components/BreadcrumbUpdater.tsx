"use client";

import { useEffect } from "react";
import { useBreadcrumbStore } from "@/stores/useBreadCrumb";

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
  const setCommunityName = useBreadcrumbStore((s) => s.setCommunityName);
  const setCommunityId = useBreadcrumbStore((s) => s.setCommunityId);
  const setFolderId = useBreadcrumbStore((s) => s.setFolderId);

  useEffect(() => {
    setFolderId(folderId || "");
    setCommunityName(communityName);
    setCommunityId(communityId);
  }, [communityName, communityId, folderId]);

  return null;
}
