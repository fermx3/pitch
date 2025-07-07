"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="hover:text-gray-300">
            Pitch
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          {session && session.user && (
            <span className="text-white">
              Welcome, {session.user.name || session.user.email}!
            </span>
          )}
          {status !== "authenticated" ? (
            <Link
              href="/auth/login"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href={`/dashboard/${session.user.role}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition hover:cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
