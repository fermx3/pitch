import { auth } from "@/auth";
import { redirect } from "next/navigation";

const LoginLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (session) {
    redirect(`/dashboard/${session?.user.role}`);
  }

  return <>{children}</>;
};

export default LoginLayout;
