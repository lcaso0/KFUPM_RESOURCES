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
  folderId: string;
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  setCommunityName: (name: string) => void;
  setCommunityId: (id: string) => void;
  setFolderId: (id: string) => void;
  addBreadcrumb: (item: BreadcrumbItem) => void;
  truncateBreadcrumb: (id: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [communityName, setCommunityName] = useState<string>('Public');
  const [communityId, setCommunityId] = useState<string>('');
  const [folderId, setFolderId] = useState<string>('');

  const addBreadcrumb = (item: BreadcrumbItem) => {
    setBreadcrumbs((prev) => {
      // Prevent duplicates (important for React StrictMode)
      if (prev.some((b) => b.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const truncateBreadcrumb = (id: string) => {
    setBreadcrumbs((prev) => {
      const index = prev.findIndex((b) => b.id === id);
      if (index === -1) return prev;
      return prev.slice(0, index + 1);
    });
  };

  return (
    <BreadcrumbContext.Provider
      value={{
        breadcrumbs,
        communityName,
        communityId,
        setBreadcrumbs,
        setCommunityName,
        setCommunityId,
        addBreadcrumb,
        truncateBreadcrumb,
        folderId,
        setFolderId
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
