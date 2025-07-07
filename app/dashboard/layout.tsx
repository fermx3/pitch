import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return <>{children}</>;
};

export default DashboardLayout;
