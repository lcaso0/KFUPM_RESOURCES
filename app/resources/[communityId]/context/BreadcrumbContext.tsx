'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BreadcrumbItem {
  id: string;
  name: string;
}

interface BreadcrumbContextType {
  breadcrumbs: BreadcrumbItem[];
  communityName: string;
  communityId: string;
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  setCommunityName: (name: string) => void;
  setCommunityId: (id: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [communityName, setCommunityName] = useState<string>('Public');
  const [communityId, setCommunityId] = useState<string>('');

  return (
    <BreadcrumbContext.Provider
      value={{
        breadcrumbs,
        communityName,
        communityId,
        setBreadcrumbs,
        setCommunityName,
        setCommunityId,
      }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
}