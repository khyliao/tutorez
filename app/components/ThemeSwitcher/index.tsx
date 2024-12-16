"use client";

import SunIcon from "@assets/sun.svg";
import MoonIcon from "@assets/moon.svg";
import { useAppDispatch } from "@hooks/reduxHooks";
import { toggleTheme } from "@store/features/themeSlice";
import { useTheme } from "@hooks/useTheme";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { isThemeDark } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isThemeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isThemeDark]);

  const handleThemeSwitch = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div
        className={`flex items-center bg-[#1F1F22] p-[2px] transition-colors rounded-[14px] w-14 h-8 cursor-pointer ${
          isThemeDark && "bg-[#c8bcf6]"
        }`}
        onClick={handleThemeSwitch}
      >
        <div
          className={`transition-all bg-[#C8BCF6] shadow-themeSwitcherLightBox duration-300 inline-block p-[2px] rounded-full`}
          style={{
            backgroundColor: isThemeDark ? "#080809" : "#C8BCF6",
            transform: isThemeDark ? "translateX(22px)" : "none",
          }}
        >
          <SunIcon className={`${isThemeDark ? `hidden` : "block"}`} />
          <MoonIcon className={`${isThemeDark ? `block` : "hidden"}`} />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
