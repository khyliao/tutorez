"use client";

import { useRouter } from "next/navigation";
import { DASHBOARD_MENU_ITEMS } from "./SettingsDashboardMenu";
import Link from "next/link";
import Image from "next/image";
import avatar from "@assets/avatar.webp";
import LogoutIcon from "@assets/logout.svg";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import { getRoleName, roles } from "@/app/utils/roles";
import { useMemo } from "react";

const DashboardMenu = () => {
  const router = useRouter();
  const user = useAppSelector(selectCurrentUser);
  const roleName = useMemo(
    () => getRoleName(user.role as keyof typeof roles),
    [user.role]
  );

  if (!user) return <></>;

  const handleLogOut = () => {
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <div className='flex flex-col h-screen p-4 px-1 lg:p-4 w-20 lg:min-w-56 transition-colors duration-300 border-[#EFEFEF] border-r dark:bg-[#09090A] dark:border-r-[#1F1F22]'>
      <div className='flex gap-3 justify-center items-center mb-11'>
        <Image
          src={avatar}
          className='w-10 h-10 lg:w-14 lg:h-14'
          alt='avatar'
        />
        <div className='hidden lg:flex flex-col'>
          <h2 className='text-lg font-montserrat font-bold dark:text-light-dashboard-menu'>
            {user.name}
          </h2>
          <span className='max-w-fit px-[6px] text-xs bg-[#FFCD71] dark:text-black rounded-md'>
            {roleName}
          </span>
        </div>
      </div>
      <div className='flex flex-col h-full justify-between'>
        <div className='flex flex-col gap-6'>
          {DASHBOARD_MENU_ITEMS.map(
            ({ icon, link, label, soon, permission }) => {
              const isAvailable = permission.includes(user.role);

              if (isAvailable) {
                return (
                  <Link
                    key={label}
                    className={` relative flex p-1 hover:bg-[#eadaf9] dark:hover:bg-[#42255a]  rounded-md transition-colors justify-center md:justify-start md:p-4 gap-4 items-center leading-5 font-montserrat font-medium dark:text-light-dashboard-menu ${
                      soon && "hidden lg:flex"
                    }`}
                    href={link}
                  >
                    {icon && (
                      <span className='text-[#1F1F22] stroke-[1.5] dark:text-light-dashboard-menu stroke-current'>
                        {icon}
                      </span>
                    )}

                    <span className='hidden lg:block'>{label}</span>
                    {soon && (
                      <span className='hidden md:inline-block absolute -top-[1px] -right-[6px] text-[8px] px-1 py-[2px] transition-colors bg-[#12092c] text-white dark:bg-[#5b2686] rounded-md rotate-[25deg]'>
                        Soon
                      </span>
                    )}
                  </Link>
                );
              }
            }
          )}
        </div>
        <div>
          <div className='flex mb-1 lg:mb-0 justify-center lg:justify-start lg:p-4 gap-5 items-center'>
            <ThemeSwitcher />
          </div>
          <button
            onClick={handleLogOut}
            className='group flex w-full p-2 justify-center hover:bg-[#d43d23] hover:text-white rounded-lg transition-colors duration-200 lg:justify-start lg:p-4 gap-4 items-center leading-5 font-montserrat font-medium'
            type='button'
          >
            <LogoutIcon className='text-[#1F1F22] transition-colors group-hover:text-white stroke-[1.5] dark:text-light-dashboard-menu stroke-current' />
            <span className='hidden lg:block dark:text-light-dashboard-menu'>
              Вийти
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
