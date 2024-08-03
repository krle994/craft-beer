import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "./types";



export const useCartStore = create<AuthState>()(
  persist(
    set => ({
      isAuthenticated: false,
     
      login: () => {
        set(() => ({
          isAuthenticated: true
        }));
      },

      logout: () => {
        set(() => ({
          isAuthenticated: false
        }));
      },
    }),
    { name: "auth" }
  )
);
