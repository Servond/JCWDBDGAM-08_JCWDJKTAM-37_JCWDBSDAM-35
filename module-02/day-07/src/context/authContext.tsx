"use client";

import { createContext, useContext, useState } from "react";
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

const AuthContext = createContext<IAuth | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const login = async (email: string, password: string) => {
    try {
      let isExist: boolean = false;
      const { data }: { data: ILogin[] } = await axios.get(
        "https://evidentbeginner-us.backendless.app/api/data/user"
      );

      for (const user of data) {
        if (user.email === email && user.password === password) {
          isExist = true;
          setEmail(user.email);
          setIsLoggedIn(true);
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
  };

  const logout = () => {
    setEmail("");
    setIsLoggedIn(false);
  };

  const value: IAuth = { isLoggedIn, email, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): IAuth {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth Provider tidak ada");

  return context;
}
