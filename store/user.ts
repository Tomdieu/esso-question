import { UserType } from "@/types";
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

type UserStore = {
  user?: UserType;
  setUser: (user: UserType) => void;
  logout: () => void;
};

export const useAuth = create(
  persist<UserStore>(
    (set) => ({
      user: undefined,
      isLogin: false,
      setUser: (user) => set({ user }),
      logout: () => {
        set({ user: undefined });
      },
    }),
    {
      name: "auth", // unique name for your storage
      storage: createJSONStorage(() => AsyncStorage), // use `storage` instead of `getStorage`
    }
  )
);
