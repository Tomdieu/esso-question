import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  IdeoGrammeType,
} from "@/schema/index.schema";

// Zustand store to handle the ideogram data with persistence
type IdeoGramStore = {
  ideograms: IdeoGrammeType[];
  addIdeogram: (ideogram: IdeoGrammeType) => void;
  updateIdeogram: (id: string, updatedData: Partial<IdeoGrammeType>) => void;
  deleteIdeogram: (id: string) => void;
  getIdeogramById: (id: string) => IdeoGrammeType | undefined;
};

export const useIdeoGramStore = create(
  persist<IdeoGramStore>(
    (set, get) => ({
      ideograms: [],

      addIdeogram: (ideogram) =>
        set((state) => ({
          ideograms: [...state.ideograms, ideogram],
        })),

      updateIdeogram: (id, updatedData) =>
        set((state) => ({
          ideograms: state.ideograms.map((ig) =>
            ig.id === id ? { ...ig, ...updatedData } : ig
          ),
        })),

      deleteIdeogram: (id) =>
        set((state) => ({
          ideograms: state.ideograms.filter((ig) => ig.id !== id),
        })),

      getIdeogramById: (id) => get().ideograms.find((ig) => ig.id === id),
    }),
    {
      name: "ideogram-storage", // Unique name for storage
      storage: createJSONStorage(() => AsyncStorage), // Use AsyncStorage for persistence
    }
  )
);