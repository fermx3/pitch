import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  console.log("Session in DashboardLayout:", session);

  if (!session) {
    redirect("/auth/login");
  }

  return <>{children}</>;
};

export default DashboardLayout;
