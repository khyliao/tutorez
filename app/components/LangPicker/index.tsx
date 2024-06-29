"use client";
import { useState, useEffect } from "react";
import Flag from "react-flagkit";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { setLang } from "@context/lang";
import { AllowedLangs } from "@/constants/lang";

const LangPicker = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("UA");
  const isMedia768 = useMediaQuery(768);
  const isMedia1024 = useMediaQuery(1024);

  const getLangSize = () => {
    if (isMedia768) {
      return 26;
    } else if (isMedia1024) {
      return 24;
    } else {
      return 26;
    }
  };

  const getBtnSize = () => {
    if (isMedia768) {
      return "h-12 w-12";
    } else if (isMedia1024) {
      return "h-12 w-12";
    } else {
      return "h-12 w-12";
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLangChange = (lang: string) => {
    const currentLang = lang === "UA" ? "uk" : "en";

    setLang(currentLang as AllowedLangs);
    setSelectedLang(lang);

    setIsMenuOpen(false);

    localStorage.setItem("userLang", currentLang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("userLang") ?? null;
    if (lang === "en") {
      setLang("en" as AllowedLangs);
      setSelectedLang("GB");
    }
  }, []);

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center justify-center rounded-full bg-[#5f8ef4] focus:outline-none ${getBtnSize()}`}
        onClick={handleMenuToggle}
      >
        <Flag country={selectedLang} size={getLangSize()} />
      </button>
      <ul
        className={clsx(
          "opacity-0 pointer-events-none absolute top-14 left-0 w-40 p-2 bg-gray-700 transition-opacity duration-500 rounded-lg shadow-lg",
          {
            "opacity-100 pointer-events-auto": isMenuOpen,
            "-translate-x-[70%]": !isMedia768,
          }
        )}
      >
        <li
          className={`p-2 -translate-y-10 ${
            isMenuOpen && "translate-y-0"
          } flex items-center cursor-pointer duration-500 rounded-lg hover:bg-gray-600 ${
            selectedLang === "UA" && "bg-blue-500"
          }`}
          onClick={() => handleLangChange("UA")}
        >
          <Flag country="UA" />
          <span className="ml-2 text-white">Українська</span>
        </li>
        <li
          className={`p-2 -translate-y-10 ${
            isMenuOpen && "translate-y-0"
          }   flex items-center cursor-pointer duration-[450ms] rounded-lg hover:bg-gray-600 ${
            selectedLang === "GB" && "bg-blue-500"
          }`}
          onClick={() => handleLangChange("GB")}
        >
          <Flag country="GB" />
          <span className="ml-2 text-white">English</span>
        </li>
      </ul>
    </div>
  );
};

export default LangPicker;
