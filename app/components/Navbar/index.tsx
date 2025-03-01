"use client";
import Link from "next/link";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import LangPicker from "@components/LangPicker";
import { useLang } from "@hooks/useLang";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMedia1024 = useMediaQuery(1024);
  const { lang, t } = useLang();
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMedia1024) {
      if (isMenuOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      return () => {
        document.body.classList.remove("no-scroll");
      };
    }
  }, [isMenuOpen, isMedia1024]);

  return (
    <header className="fixed w-full z-20 flex items-center py-2 px-4 xl:px-10 justify-between h-[70px] lg:h-[90px] bg-[#2B2B2B]">
      <Link
        href="/"
        className="font-bungee z-20 tracking-wider text-2xl md:text-4xl lg:text-3xl xl:text-4xl leading-5 text-white font-medium"
      >
        Tutor<span className="text-[#7000FF]">EZ</span>
      </Link>
      <aside
        className={`fixed z-10 top-0 pt-20 md:pt-28 px-4 left-0 h-screen w-screen bg-[#2B2B2B] -translate-y-full lg:translate-y-0 lg:flex lg:h-auto lg:w-auto lg:p-0  ${
          isMedia1024 && (isMenuOpen ? "translate-y-0" : "-translate-y-full")
        }   lg:sticky lg:translate-x-0 transition-transform duration-300 ease-in-out lg:w-[80%] 2xl:w-[74%] justify-between`}
      >
        <nav className="flex flex-col gap-[40px] md:gap-12 lg:gap-4 xl:gap-10 2xl:gap-10 mb-10 lg:mb-0 lg:flex-row lg:items-center lg:mr-6 xl:mr-10">
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-4xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl hover:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link  "
            href="#about"
            onClick={handleToggleMenu}
          >
            {t[lang].navbar.about}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-4xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl hover:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link "
            href="#team"
            onClick={handleToggleMenu}
          >
            {t[lang].navbar.team}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-4xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl hover:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link "
            href="#advantages"
            onClick={handleToggleMenu}
          >
            {t[lang].navbar.advantages}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-4xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl hover:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link "
            href="#reviews"
            onClick={handleToggleMenu}
          >
            {t[lang].navbar.reviews}
          </Link>
          <Link
            className="text-white font-extrabold text-2xl leading-6 font-open-sans md:text-4xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl hover:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link "
            href="#contacts"
            onClick={handleToggleMenu}
          >
            {t[lang].navbar.contacts}
          </Link>
        </nav>
        <div className="inline-flex flex-col lg:items-center lg:flex-row gap-4 md:gap-6 lg:gap-4 2xl:gap-8">
          <Link
            href="/login"
            className="rounded-3xl hover:shadow-purpleShadow tracking-wide bg-[#760AFF] transition-all duration-200 hover:bg-[#740affd8] p-2 px-5 text-lg md:text-2xl md:px-6 md:py-3 lg:text-base lg:px-5 lg:py-2 font-extrabold text-white"
            type="button"
          >
            {t[lang].navbar.login}
          </Link>
          <LangPicker />
        </div>
      </aside>
      {isMedia1024 && (
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
