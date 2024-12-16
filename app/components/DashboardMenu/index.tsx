"use client";

import { DASHBOARD_MENU_ITEMS } from "./SettingsDashboardMenu";
import Link from "next/link";
import Image from "next/image";
import avatar from "@assets/avatar.webp";
import LogoutIcon from "@assets/logout.svg";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { useTheme } from "@hooks/useTheme";

const DashboardMenu = () => {
  const { isThemeDark } = useTheme();

  return (
    <div className="flex flex-col h-screen p-4 md:p-6 w-24 md:w-64 transition-colors border-[#EFEFEF] border-r dark:bg-[#09090A] dark:border-r-[#1F1F22]">
      <div className="flex gap-3 justify-center md:justify-start items-center mb-11">
        <Image src={avatar} width={56} height={56} alt="avatar" />
        <div className="hidden md:flex flex-col">
          <h2 className="text-lg font-montserrat font-bold dark:text-light-dashboard-menu">
            Поліна
          </h2>
          <span className="inline-block px-[6px] text-xs bg-[#FFCD71] rounded-md dark:">
            Викладач
          </span>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6">
          {DASHBOARD_MENU_ITEMS.map(({ icon, link, label }) => (
            <Link
              key={label}
              className="flex p-2 justify-center md:justify-start md:p-4 gap-4 items-center leading-5 font-montserrat font-medium dark:text-light-dashboard-menu"
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
            <span className="hidden md:block font-medium font-montserrat dark:text-light-dashboard-menu">
              {isThemeDark ? "Темна тема" : "Світла тема"}
            </span>
            <ThemeSwitcher />
          </div>
          <button
            className="flex w-full p-2 justify-center md:justify-start md:p-4 gap-4 items-center leading-5 font-montserrat font-medium"
            type="button"
          >
            <LogoutIcon className="text-[#1F1F22] stroke-[1.5] dark:text-light-dashboard-menu stroke-current" />
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
