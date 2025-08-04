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
        <div className="flex flex-col items-center shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4">Inicia sesión o regístrate</h2>
        <p className="text-gray-600 mb-4">
          Para acceder a todas las funcionalidades de Pitch.
        </p>
        <Button href="/auth/login" className="mb-2">
          Login
        </Button>
        <Button variant="cta" href="/auth/register">Registrarse</Button>
      </div>
      )}
    </main>
  );
};

export default Home;
