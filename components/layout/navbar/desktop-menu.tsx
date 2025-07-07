import Button from "@/components/ui/button";
import { Session } from "next-auth";
import Link from "next/link";

interface DesktopMenuProps {
  session: Session | null;
  signOut: () => void;
  status?: string;
}

const DesktopMenu = ({ session, signOut, status }: DesktopMenuProps) => {
  return (
    <div className="space-x-4 flex items-center hidden md:flex">
      {session && session.user && (
        <span className="text-white">
          Bienvenido, {session.user.name || session.user.email}!
        </span>
      )}
      {status !== "authenticated" ? (
        <Button variant="primary" type="button">
          <Link href="/auth/login">Login</Link>
        </Button>
      ) : (
        <>
          <Button>
            <Link href={`/dashboard/${session?.user.role}`}>Dashboard</Link>
          </Button>
          <Button onClick={() => signOut()} variant="secondary" type="button">
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default DesktopMenu;
