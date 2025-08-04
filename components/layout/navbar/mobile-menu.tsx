"use client";

import { Session } from "next-auth";
import Button from "@/components/ui/button";

interface MobileMenuProps {
  session: Session | null;
  status: string;
  menuOpen: boolean;
  signOut: () => void;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({
  session,
  status,
  signOut,
  setMenuOpen,
}: MobileMenuProps) => {
  return (
    <div className="md:hidden mt-2 px-4 pb-4 flex flex-col space-y-2 bg-gray-800">
      {session && session.user && (
        <span className="text-white">
          Bienvenido, {session.user.name || session.user.email}!
        </span>
      )}
      {status !== "authenticated" ? (
        <>
          <Button
            variant="secondary"
            type="button"
            href="/auth/register"
            onClick={() => setMenuOpen(false)}
          >
            Registrarse
          </Button>
          <Button
            variant="primary"
            type="button"
            fullWidth
            href="/auth/login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Button>
        </>
      ) : (
        <>
          <Button
            fullWidth
            href={`/dashboard/${session?.user.role}`}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => {signOut(); setMenuOpen(false);}}
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
