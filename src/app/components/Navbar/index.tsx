"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useState } from "react";
import Hamburger from "hamburger-react";
import LangPicker from "../LangPicker";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMedia768 = useMediaQuery(768);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center py-2 px-4 xl:px-10 justify-between h-[60px] md:h-[90px] bg-[#2B2B2B]">
      <Link
        href="/"
        className="font-bungee z-20 tracking-wider text-2xl lg:text-3xl leading-5 text-white font-medium"
      >
        Tutor<span className="text-[#7000FF]">EZ</span>
      </Link>
      <aside
        className={`fixed z-10 top-0 pt-[100px] pl-4 right-0 h-screen w-screen bg-[#2B2B2B] transform  md:flex md:h-auto md:w-auto md:p-0  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }   md:sticky md:translate-x-0 transition-transform duration-300 ease-in-out lg:w-[74%] xl:w-[72%] justify-between`}
      >
        <nav className="flex flex-col gap-[40px] md:gap-4 lg:gap-8 xl:gap-10 2xl:gap-16 mb-10 md:mb-0 md:flex-row md:items-center md:mr-6">
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-base lg:text-xl  hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link-mobile md:hover:drop-shadow-nav-link"
            href="#about"
            onClick={handleToggleMenu}
          >
            {t("about")}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-base lg:text-xl  hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link-mobile"
            href="#team"
            onClick={handleToggleMenu}
          >
            {t("team")}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-base lg:text-xl  hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link-mobile"
            href="#advantages"
            onClick={handleToggleMenu}
          >
            {t("advantages")}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-base lg:text-xl  hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link-mobile"
            href="#reviews"
            onClick={handleToggleMenu}
          >
            {t("reviews")}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-base lg:text-xl  hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link-mobile"
            href="#contacts"
            onClick={handleToggleMenu}
          >
            {t("contacts")}
          </Link>
        </nav>
        <LangPicker />
      </aside>
      {isMedia768 && (
        <div className="z-20">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            color="white"
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
