"use client";

import useAuth from "@hooks/useAuth";
import DashboardMenu from "../DashboardMenu";

type Props = {
  children: React.ReactNode;
};

const DashboardMenuLayout = ({ children }: Props) => {
  const { isUserLoading } = useAuth();

  return (
    !isUserLoading && (
      <div className="flex">
        <DashboardMenu />
        {children}
      </div>
    )
  );
};

export default DashboardMenuLayout;
