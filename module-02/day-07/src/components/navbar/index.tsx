"use client";
import Link from "next/link";
// import { useAuth } from "@/context/authContext";
import { useAuthZustand } from "@/stores/useAuthZustand";

export default function Navbar() {
  const { email, isLoggedIn, logout } = useAuthZustand();
  //   const { email, isLoggedIn, logout } = useAuth();
  return (
    <div className="flex justify-between absolute top-0 w-full h-[50px] p-5">
      <span>LOGO</span>
      <span>{email || "User"}</span>
      <div className="flex gap-5">
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div className="flex gap-5">
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
