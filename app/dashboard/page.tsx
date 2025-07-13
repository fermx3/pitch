'use client';

import {  useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:min-h-[80dvh]">
      <p
        className="text-sm"
        style={{ color: session?.user.role === 'admin' ? 'red' : 'black' }}>
        {session?.user.role && (
          session.user.role
            .charAt(0).toUpperCase() + session.user.role.slice(1)
        )}
      </p>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg">Bienvenido a tu dashboard!</p>
    </div>
  );
}

export default DashboardPage;
