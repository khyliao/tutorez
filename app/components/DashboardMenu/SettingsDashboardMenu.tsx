import DashboardIcon from "@assets/dashboard.svg";
import NotificationIcon from "@assets/notification.svg";
import AnalyticsIcon from "@assets/analytics.svg";
import UsersIcon from "@assets/users.svg";

export const DASHBOARD_MENU_ITEMS = [
  {
    icon: <DashboardIcon />,
    link: "/platform/dashboard",
    label: "Дашборд",
    permission: ["Суперадміністратор", "Адміністратор", "Викладач"],
  },
  {
    icon: <UsersIcon />,
    link: "/platform/users",
    label: "Користувачі",
    permission: ["Суперадміністратор", "Адміністратор"],
  },
  {
    icon: <AnalyticsIcon />,
    link: "/platform/analytics",
    label: "Аналітика",
    permission: ["Суперадміністратор", "Адміністратор", "Викладач"],
    soon: true,
  },

  {
    icon: <NotificationIcon />,
    link: "/platform/notification",
    label: "Сповіщення",
    permission: ["Суперадміністратор", "Адміністратор", "Викладач"],
    soon: true,
  },
];
