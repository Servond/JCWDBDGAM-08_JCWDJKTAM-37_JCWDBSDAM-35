"use client";
import Link from "next/link";
import useAuthStore from "@/stores/authStore";
export default function Navbar() {
  const { email, isLogin, logout } = useAuthStore();
  return (
    <div className="w-full text-gray-500 border-b-gray-200 border-b">
      <div className="flex items-center justify-between mx-14 py-2">
        <Link className="text-3xl" href={"/"}>
          BLOG EXCERCISE
        </Link>
        <div className="flex gap-3 hover:text-blue-400">
          <Link href={"/article"}>Create Article</Link>
        </div>
        {isLogin ? (
          <div className="flex gap-12">
            <span>Welcome, {email}</span>
            <button className="hover:text-blue-400" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              className="p-2 w-20 hover:text-blue-400 hover:cursor-pointer"
              href={"/login"}
            >
              <button>Login</button>
            </Link>
            <Link
              className="p-2 w-20 hover:text-blue-400 hover:cursor-pointer"
              href={"/register"}
            >
              <button>Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
