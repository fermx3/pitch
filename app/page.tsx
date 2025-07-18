import { auth } from "@/auth";

import Button from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const session = await auth();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Pitch</h1>
      <p className="text-lg mb-8">
      El futuro de la gestion de inventarios y ventas mayoristas.
      </p>
      {session ? (
      <Button>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      ) : (
      <Button>
        <Link href="/auth/login">Login</Link>
      </Button>
      )}
    </main>
  );
};

export default Home;
