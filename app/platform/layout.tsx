import DashboardMenuLayout from "@components/DashboardMenuLayout";

interface IPlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: IPlatformLayoutProps) => {
  return <DashboardMenuLayout>{children}</DashboardMenuLayout>;
};

export default PlatformLayout;
