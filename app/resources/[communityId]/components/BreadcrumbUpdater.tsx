'use client';

import { useEffect } from 'react';
import { useBreadcrumb } from '../context/BreadcrumbContext';

interface BreadcrumbUpdaterProps {
  breadcrumbs: Array<{ id: string; name: string }>;
  communityName: string;
  communityId: string;
}

export default function BreadcrumbUpdater({
  breadcrumbs,
  communityName,
  communityId,
}: BreadcrumbUpdaterProps) {
  const { setBreadcrumbs, setCommunityName, setCommunityId } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
    setCommunityName(communityName);
    setCommunityId(communityId);
  }, [breadcrumbs, communityName, communityId, setBreadcrumbs, setCommunityName, setCommunityId]);

  return null;
}