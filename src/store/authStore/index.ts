import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "./types";


export const  useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => {
        set(() => ({
          isAuthenticated: true,
        }));
      },

      logout: () => {
        set(() => ({
          isAuthenticated: false,
        }));
      },
        }),
    { name: 'auth' }
  )
);