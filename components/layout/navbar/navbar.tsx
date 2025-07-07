"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import HamburguerIcon from "@/components/ui/hamburguer-icon";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

const NavBar = () => {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-md sticky w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="hover:text-gray-300">
            Pitch
          </Link>
        </div>
        <HamburguerIcon
          isOpen={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
        <DesktopMenu session={session} status={status} signOut={signOut} />
      </div>
      {menuOpen && (
        <MobileMenu
          session={session}
          status={status}
          signOut={signOut}
          menuOpen={menuOpen}
        />
      )}
    </nav>
  );
};

export default NavBar;
