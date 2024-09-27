import { create } from "zustand";

type RefreshStore = {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
};

export const useRefresh = create<RefreshStore>((set) => ({
  refresh: false,
  setRefresh: (refresh) => set({ refresh }),
}));
