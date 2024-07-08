"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import NextArrow from "@assets/nextArrow.svg";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const Hero = () => {
  const isMedia1024 = useMediaQuery(1024);
  const { lang, t } = useLang();

  return (
    <section className="mb-14 lg:mb-40 pt-24 md:pt-28 px-4 lg:pt-28 lg:px-12 xl:pt-32 xl:px-20">
      <div className="mb-7 md:mb-3 flex flex-col md:flex-row-reverse items-center md:justify-center lg:justify-between">
        <img
          className="mb-7 w-full max-w-[400px] md:ml-20 lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[800px] "
          src={isMedia1024 ? "heroMobile.webp" : "heroDesktop.webp"}
          alt="platform's placeholder"
        />
        <div className="flex flex-col ">
          <h1 className="text-3xl font-extrabold lg:text-5xl xl:text-7xl mb-6 lg:mb-9 xl:mb-11">
            <span className="text-[#9E00FF]">{t[lang].hero.accentWord}</span>{" "}
            {t[lang].hero.title}
          </h1>
          <p className="mb-6 text-sm lg:text-xl lg:mb-8 xl:text-2xl font-semibold font-open-sans text-[#333333]">
            {t[lang].hero.subtitle}
          </p>
          <Link
            href="#contacts"
            className="py-2 px-6 rounded-2xl m-auto md:m-0 md:mr-auto font-bold font-open-sans text-sm lg:text-base xl:text-xl text-white bg-hero-primary"
          >
            {t[lang].hero.reqBtn}
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link href="#about" className="flex flex-col items-center">
          <span className="inline-block text-[11px] text-[#363636] font-semibold font-open-sans mb-1 lg:mb-[2px] lg:text-sm xl:text-lg">
            {t[lang].hero.more}
          </span>
          <NextArrow className="animate-bounce fill-[#363636]" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
