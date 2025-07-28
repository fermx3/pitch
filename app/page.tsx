"use client";

import { useSession } from "next-auth/react";

import Button from "@/components/ui/button";

const Home = () => {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Pitch</h1>
      <p className="text-lg mb-8">
        El futuro de la gestion de inventarios y ventas mayoristas.
      </p>
      {session ? (
        <Button href={`/dashboard/${session.user.role}`}>
          Ir al Dashboard
        </Button>
      ) : (
        <Button href="/auth/login">Login</Button>
      )}
    </main>
  );
};

export default Home;
