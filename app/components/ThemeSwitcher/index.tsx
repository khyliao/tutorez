"use client";

import SunIcon from "@assets/sun.svg";
import MoonIcon from "@assets/moon.svg";
import { useAppDispatch } from "@hooks/reduxHooks";
import { toggleTheme, initTheme } from "@/lib/store/api/features/themeSlice";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    dispatch(initTheme(theme));

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    dispatch(toggleTheme());
  };

  return (
    <>
      <div
        className='flex scale-[0.8] md:scale-100 items-center bg-[#1F1F22] p-[2px] transition-colors rounded-[14px] w-14 h-8 cursor-pointer dark:bg-[#af9cfa]'
        onClick={handleThemeSwitch}
      >
        <div
          className={`transition-all bg-[#C8BCF6] dark:bg-[#080809] dark:translate-x-[22px] shadow-themeSwitcherLightBox duration-300 inline-block p-[2px] rounded-full`}
        >
          <SunIcon className='block dark:hidden' />
          <MoonIcon className='hidden dark:block' />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
