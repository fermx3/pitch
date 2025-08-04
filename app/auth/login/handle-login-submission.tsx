import { getSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

type LoginState = {
  error: string | null;
};

export const handleLoginSubmission = async (
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const result = await signIn("credentials", {
    username,
    password,
    redirect: false,
  });

  console.log("Login result:", result);

  if (result?.error) {
    if (result.error === "CredentialsSignin") {
      return { error: "Usuario o contraseña incorrectos" };
    } else {
      return { error: result.error || "An unexpected error occurred" };
    }
  } else {
    const session = await getSession();
    redirect(`/dashboard/${session?.user.role}`);
  }
};
