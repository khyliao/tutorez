import DashboardMenu from "@components/DashboardMenu";
import { useTheme } from "@hooks/useTheme";

const Users = () => {
  const { isThemeDark } = useTheme();

  return (
    <div className="flex">
      <DashboardMenu />
    </div>
  );
};

export default Users;
