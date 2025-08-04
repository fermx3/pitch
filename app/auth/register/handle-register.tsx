"use server";

import { registerUser } from "@/lib/register-user";
import { registerSchema } from "@/lib/zod-schemas/register-schema";

type RegisterState = {
  error: string | null;
  success: string | null;
};

export const handleRegister = async (
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> => {
  const data = {
    username: formData.get("username") as string,
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = registerSchema.safeParse(data);

  // Si hay un problema de validacion retorna el primer error
  if(!result.success) {
    return { error: result.error.issues[0].message, success: null}
  }

  try {
    await registerUser(result.data);
    return {
      success: "Registro exitoso. Ahora puedes iniciar sesión.",
      error: null,
    };
  } catch (error: unknown) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message?: string }).message
        : undefined;
    return { error: errorMessage || "Error en el registro", success: null };
  }
};
