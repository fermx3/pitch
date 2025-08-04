import Button from "@/components/ui/button";

const RegisterSuccessPage = () => {
  return (
    <div className="flex items-center justify-center p-6 sm:min-h-[80dvh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registro exitoso
        </h2>
        <p className="text-green-600 mb-4">
          ¡Gracias por registrarte! Ahora puedes iniciar sesión.
        </p>
        <div className="flex justify-center">
          <Button type="button" className="rounded-lg mt-4" href="/auth/login">
            Ir a Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccessPage;
