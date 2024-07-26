"use client";
import { useMediaQuery } from "@hooks/useMediaQuery";
import NextArrow from "@assets/nextArrow.svg";
import Link from "next/link";
import { useLang } from "@hooks/useLang";
import { motion } from "framer-motion";

const Hero = () => {
  const isMedia1024 = useMediaQuery(1024);
  const { lang, t } = useLang();

  return (
    <section className="mb-14 lg:mb-40 pt-24 md:pt-28 px-4 lg:pt-28 lg:px-12 xl:pt-32 xl:px-20">
      <div className="mb-7 md:mb-3 flex flex-col md:flex-row-reverse items-center md:justify-center lg:justify-between">
        <motion.img
          initial={{
            y: -20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="mb-7 w-full max-w-[400px] md:ml-20 lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[760px] "
          src={isMedia1024 ? "heroMobile.webp" : "heroDesktop.webp"}
          alt="platform's placeholder"
        />
        <div className="flex flex-col ">
          <motion.h1
            className="text-3xl font-extrabold lg:text-5xl xl:text-7xl mb-6 lg:mb-9 xl:mb-11"
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            <span className="text-[#9E00FF]">{t[lang].hero.accentWord}</span>
            {", "}
            {t[lang].hero.title}
          </motion.h1>
          <motion.p
            className="mb-6 text-sm lg:text-xl lg:mb-8 xl:text-2xl font-semibold font-open-sans text-[#333333]"
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            {t[lang].hero.subtitle}
          </motion.p>
          <motion.div
            className="m-auto md:m-0 md:mr-auto"
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            <Link
              href="#contacts"
              className="py-2 px-6 lg:py-3 lg:px-8 rounded-2xl font-bold font-open-sans text-sm lg:text-base xl:text-xl transition-colors duration-200 text-white bg-hero-primary hover:bg-[#9000e9]"
            >
              {t[lang].hero.reqBtn}
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-col items-center"
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.8,
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <Link href="#about" className="flex flex-col items-center">
          <span className="inline-block text-[11px] text-[#363636] font-semibold font-open-sans mb-1 lg:mb-[2px] lg:text-sm xl:text-lg">
            {t[lang].hero.more}
          </span>
          <NextArrow className="animate-bounce fill-[#363636]" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
