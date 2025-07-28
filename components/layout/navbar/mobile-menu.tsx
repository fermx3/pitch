"use client";

import { Session } from "next-auth";
import Button from "@/components/ui/button";

interface MobileMenuProps {
  session: Session | null;
  status: string;
  menuOpen: boolean;
  signOut: () => void;
}

const MobileMenu = ({ session, status, signOut }: MobileMenuProps) => {
  return (
    <div className="md:hidden mt-2 px-4 pb-4 flex flex-col space-y-2 bg-gray-800">
      {session && session.user && (
        <span className="text-white">
          Bienvenido, {session.user.name || session.user.email}!
        </span>
      )}
      {status !== "authenticated" ? (
        <Button variant="primary" type="button" fullWidth href="/auth/login">
          Login
        </Button>
      ) : (
        <>
          <Button fullWidth href={`/dashboard/${session?.user.role}`}>
            Dashboard
          </Button>
          <Button
            onClick={() => signOut()}
            variant="secondary"
            type="button"
            className="w-full"
          >
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
