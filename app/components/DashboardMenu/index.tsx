"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { DASHBOARD_MENU_ITEMS } from "./SettingsDashboardMenu";
import Link from "next/link";
import Image from "next/image";
import avatar from "@assets/avatar.webp";
import LogoutIcon from "@assets/logout.svg";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";

const getUserRoleField = (role: string) => {
  switch (role) {
    case "root":
      return "Суперадміністратор";
    case "admin":
      return "Адміністратор";
    case "tutor":
      return "Викладач";
    case "student":
      return "Студент";
    default:
      return "Невизначено";
  }
};

const DashboardMenu = () => {
  const router = useRouter();
  const user = useAppSelector(selectCurrentUser);

  const role = useMemo(() => {
    return getUserRoleField(user.role);
  }, [user.role]);

  const handleLogOut = () => {
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <div className="flex flex-col h-screen p-4 px-1 md:p-4 w-20 md:w-56 transition-colors border-[#EFEFEF] border-r dark:bg-[#09090A] dark:border-r-[#1F1F22]">
      <div className="flex gap-3 justify-center items-center mb-11">
        <Image src={avatar} width={56} height={56} alt="avatar" />
        <div className="hidden md:flex flex-col">
          <h2 className="text-lg font-montserrat font-bold dark:text-light-dashboard-menu">
            {user.name}
          </h2>
          <span className="max-w-fit px-[6px] text-xs bg-[#FFCD71] rounded-md">
            {role}
          </span>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6">
          {DASHBOARD_MENU_ITEMS.map(({ icon, link, label }) => (
            <Link
              key={label}
              className="flex p-2 hover:bg-[#eadaf9] focus:bg-[#eadaf9] dark:hover:bg-[#42255a] dark:focus:bg-[#42255a] rounded-md transition-colors justify-center md:justify-start md:p-4 gap-4 items-center leading-5 font-montserrat font-medium dark:text-light-dashboard-menu"
              href={link}
            >
              <span className="text-[#1F1F22] stroke-[1.5] dark:text-light-dashboard-menu stroke-current">
                {icon}
              </span>

              <span className="hidden md:block">{label}</span>
            </Link>
          ))}
        </div>
        <div>
          <div className="flex p-2 justify-center md:justify-start md:p-4 gap-5 items-center">
            <ThemeSwitcher />
          </div>
          <button
            onClick={handleLogOut}
            className="flex w-full p-2 justify-center hover:bg-[#f9d3cc] focus:bg-[#f9d3cc] dark:hover:bg-[#843838] dark:focus:bg-[#843838] rounded-md transition-colors md:justify-start md:p-4 gap-4 items-center leading-5 font-montserrat font-medium"
            type="button"
          >
            <LogoutIcon className="text-[#1F1F22]  stroke-[1.5] dark:text-light-dashboard-menu stroke-current" />
            <span className="hidden md:block dark:text-light-dashboard-menu">
              Вийти
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
