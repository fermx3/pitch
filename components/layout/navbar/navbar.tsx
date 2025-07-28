"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import HamburguerIcon from "@/components/ui/hamburguer-icon";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import CartCountButton from "@/components/products/cart-count-button";

const NavBar = () => {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const role = session?.user?.role;

  return (
    <nav className="bg-gray-800 p-4 shadow-md sticky w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="hover:text-gray-300">
            Pitch
          </Link>
        </div>
        <div className="md:hidden flex space-x-4">
          <HamburguerIcon
            isOpen={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          {status === "authenticated" && role === "customer" && (
            <CartCountButton />
          )}
        </div>
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
