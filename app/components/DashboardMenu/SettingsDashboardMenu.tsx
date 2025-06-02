import DashboardIcon from "@assets/dashboard.svg";
import NotificationIcon from "@assets/notification.svg";
import AnalyticsIcon from "@assets/analytics.svg";
import UsersIcon from "@assets/users.svg";

export const DASHBOARD_MENU_ITEMS = [
  {
    icon: <DashboardIcon />,
    link: "/platform/dashboard",
    label: "Дашборд",
    permission: ["superadmin", "admin", "tutor"],
  },
  {
    icon: <UsersIcon />,
    link: "/platform/users",
    label: "Користувачі",
    permission: ["superadmin", "admin"],
  },
  {
    icon: <AnalyticsIcon />,
    link: "/platform/analytics",
    label: "Аналітика",
    permission: ["superadmin", "admin", "tutor"],
  },
  {
    icon: <NotificationIcon />,
    link: "/platform/notification",
    label: "Сповіщення",
    permission: ["superadmin", "admin", "tutor"],
    soon: true,
  },
  {
    icon: <DashboardIcon />,
    link: "/platform/dashboard",
    label: "Дашборд",
    permission: ["student"],
  },
  {
    icon: <AnalyticsIcon />,
    link: "/platform/dashboard/courses",
    label: "Предмети",
    permission: ["student"],
  },
  {
    // icon: <AnalyticsIcon />,
    link: "/platform/logs",
    label: "Логи",
    permission: ["superadmin"],
  },
  {
    // icon: <AnalyticsIcon />,
    link: "/platform/suspicious-activity",
    label: "Підозріла активність",
    permission: ["superadmin"],
  },
];
