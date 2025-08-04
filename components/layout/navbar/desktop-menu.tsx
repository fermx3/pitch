import Button from "@/components/ui/button";
import { Session } from "next-auth";
import CartCountButton from "@/components/products/cart-count-button";

interface DesktopMenuProps {
  session: Session | null;
  signOut: () => void;
  status?: string;
}

const DesktopMenu = ({ session, signOut, status }: DesktopMenuProps) => {
  const role = session?.user.role;

  return (
    <div className="space-x-4 flex items-center hidden md:flex">
      {session && session.user && (
        <span className="text-white">
          Bienvenido, {session.user.name || session.user.email}!
        </span>
      )}
      {status !== "authenticated" ? (
        <>
        <Button variant="secondary" type="button" href="/auth/register">
          Registrarse
        </Button>
        <Button variant="primary" type="button" href="/auth/login">
          Login
        </Button>
        </>
      ) : (
        <>
          <Button href={`/dashboard/${session?.user.role}`}>Dashboard</Button>
          <Button onClick={() => signOut()} variant="secondary" type="button">
            Logout
          </Button>
        </>
      )}
      {status === "authenticated" && role === 'customer' && (
        <CartCountButton />
      )}
    </div>
  );
};

export default DesktopMenu;
