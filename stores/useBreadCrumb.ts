import { create } from 'zustand';

interface BreadcrumbItem {
  id: string;
  name: string;
}

interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
  communityName: string;
  communityId: string;
  folderId: string;

  // setters
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  setCommunityName: (name: string) => void;
  setCommunityId: (id: string) => void;
  setFolderId: (id: string) => void;

  // helpers
  addBreadcrumb: (item: BreadcrumbItem) => void;
  truncateBreadcrumb: (id: string) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  breadcrumbs: [],
  communityName: 'Public',
  communityId: '',
  folderId: '',

  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  setCommunityName: (name) => set({ communityName: name }),
  setCommunityId: (id) => set({ communityId: id }),
  setFolderId: (id) => set({ folderId: id }),

  addBreadcrumb: (item) =>
    set((state) => {
      if (state.breadcrumbs.some((b) => b.id === item.id)) return state;
      return { breadcrumbs: [...state.breadcrumbs, item] };
    }),

  truncateBreadcrumb: (id) =>
    set((state) => {
      const index = state.breadcrumbs.findIndex((b) => b.id === id);
      if (index === -1) return state;
      return { breadcrumbs: state.breadcrumbs.slice(0, index + 1) };
    }),
}));
