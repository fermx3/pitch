import { getSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

type LoginState = {
  error: string | null;
}

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

  if (result?.error) {
    if (result.error === "CredentialsSignin") {
      return { error: "Invalid username or password" };
    } else {
      return { error: "An unknown error occurred. Please try again later." };
    }
  } else {
    const session = await getSession();
    redirect(`/dashboard/${session?.user.role}`);
  }
};
