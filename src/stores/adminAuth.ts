import { create } from "zustand";

interface AdminAuthState {
  isAuthenticated: boolean;
  login: (id: string, password: string) => boolean;
  logout: () => void;
}

const ADMIN_ID = "Admin";
const ADMIN_PASSWORD = "B9cd3013";

export const useAdminAuth = create<AdminAuthState>((set) => ({
  isAuthenticated: sessionStorage.getItem("admin_auth") === "true",
  login: (id, password) => {
    if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => {
    sessionStorage.removeItem("admin_auth");
    set({ isAuthenticated: false });
  },
}));
