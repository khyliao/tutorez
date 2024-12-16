import DashboardIcon from "@assets/dashboard.svg";
import NotificationIcon from "@assets/notification.svg";
import AnalyticsIcon from "@assets/analytics.svg";
import UsersIcon from "@assets/users.svg";

export const DASHBOARD_MENU_ITEMS = [
  {
    icon: <DashboardIcon />,
    link: "/dashboard",
    label: "Дашборд",
  },
  {
    icon: <AnalyticsIcon />,
    link: "/analytics",
    label: "Аналітика",
  },
  {
    icon: <UsersIcon />,
    link: "/users",
    label: "Користувачі",
  },
  {
    icon: <NotificationIcon />,
    link: "/notification",
    label: "Сповіщення",
  },
];
