import { create } from "zustand";
import axios from "axios";
interface IAuth {
  isLoggedIn: boolean;
  email: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface ILogin {
  email: string;
  password: string;
}

export const useAuthZustand = create<IAuth>((set) => ({
  isLoggedIn: false,
  email: "",
  login: async (email: string, password: string) => {
    try {
      let isExist: boolean = false;
      const { data }: { data: ILogin[] } = await axios.get(
        "https://evidentbeginner-us.backendless.app/api/data/user"
      );

      for (const user of data) {
        if (user.email === email && user.password === password) {
          isExist = true;
          set({ isLoggedIn: true, email: user.email });
          break;
        }
      }

      if (isExist) {
        alert("Login success");
      } else {
        throw new Error("User not found");
      }
    } catch (err: any) {
      alert(err.message);
    }
  },
  logout: () => set({ isLoggedIn: false, email: "" }),
}));
