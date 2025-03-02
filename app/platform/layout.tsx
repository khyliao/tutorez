import DashboardMenuLayout from "@components/DashboardMenuLayout";
import { Toaster } from "react-hot-toast";

interface IPlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: IPlatformLayoutProps) => {
  return (
    <>
      <DashboardMenuLayout>
        <div className="ml-[80px] md:ml-[224px] w-calc-full-minus-80 md:w-calc-full-minus-256">
          {children}
        </div>
      </DashboardMenuLayout>
      <Toaster />
    </>
  );
};

export default PlatformLayout;
