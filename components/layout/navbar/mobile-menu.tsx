'use client';

import Button from "@/components/ui/button";
import { Session } from "next-auth";
import Link from "next/link";

interface MobileMenuProps {
  session: Session | null;
  status: string;
  menuOpen: boolean;
  signOut: () => void;
}

const MobileMenu = ({session, status, signOut}: MobileMenuProps) => {
  return (
        <div className="md:hidden mt-2 px-4 pb-4 flex flex-col space-y-2 bg-gray-800">
          {session && session.user && (
            <span className="text-white">
              Bienvenido, {session.user.name || session.user.email}!
            </span>
          )}
          {status !== "authenticated" ? (
            <Button variant="primary" type="button" className="w-full">
              <Link href="/auth/login">Login</Link>
            </Button>
          ) : (
            <>
              <Button className="w-full">
                <Link href={`/dashboard/${session?.user.role}`}>Dashboard</Link>
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
      )}


export default MobileMenu;
