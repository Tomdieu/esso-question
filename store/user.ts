import { UserType } from "@/types";
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

type UserStore = {
    user?: UserType;
    setUser: (user: UserType) => void;
    logout: () => void;
};

export const useAuth = create<UserStore>()(
    persist(
        (set) => ({
            user: undefined,
            setUser: (user) => set({ user }),
            logout: () => set({ user: undefined }),
        }),
        {
            name: "auth",
            getStorage: () => AsyncStorage,
        }
    )
);
