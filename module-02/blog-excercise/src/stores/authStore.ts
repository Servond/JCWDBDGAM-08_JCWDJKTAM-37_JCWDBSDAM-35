import { create } from "zustand";

import { IAuth } from "@/interfaces/auth.interface";

const useAuthStore = create<IAuth>((set) => ({
  user_id: "",
  email: "",
  isLogin: false,
  login: (email: string, user_id: string) =>
    set({ user_id: user_id, email: email, isLogin: true }),
  logout: () => set({ email: "", isLogin: false }),
}));

export default useAuthStore;
