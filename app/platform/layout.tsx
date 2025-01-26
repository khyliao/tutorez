import DashboardMenuLayout from "@components/DashboardMenuLayout";
import { Toaster } from "react-hot-toast";

interface IPlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: IPlatformLayoutProps) => {
  return (
    <>
      <DashboardMenuLayout>{children}</DashboardMenuLayout>
      <Toaster />
    </>
  );
};

export default PlatformLayout;
