import Link from "next/link";

const Home = () => {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Pitch</h1>
        <p className="text-lg mb-8">
          El futuro de la gestion de inventarios y ventas mayoristas.
        </p>
        <Link
          href="/auth/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </Link>
      </main>
  );
}

export default Home;
