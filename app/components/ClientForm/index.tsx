import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLang } from "@/hooks/useLang";
import FormApplication from "../FormApplication";
import Gift from "@assets/gift.svg";
import "./clientForm.css";
import { motion } from "framer-motion";

const TimerLazy = dynamic(() => import("@components/Timer"), {
  loading: () => <p>Loading footer...</p>,
});

const ClientForm = () => {
  const { t, lang } = useLang();
  const isMedia1024 = useMediaQuery(1024);

  return (
    <section
      className="md:flex pb-14 lg:pb-24 px-3 scroll-mt-24 md:scroll-mt-32 md:items-center md:gap-10 md:px-6 lg:max-w-[1300px] lg:mx-auto"
      id="contacts"
    >
      <div
        className={`${
          !isMedia1024 && "accent-news"
        } mb-10 md:max-w-[400px] lg:max-w-[550px]`}
      >
        <motion.div
          className="relative inline-block lg:mb-0"
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
          <span className="inline-block py-2 px-6 text-white uppercase font-open-sans tracking-wide font-bold text-base md:text-lg lg:text-2xl leading-5 bg-[#ec1e9a] rounded-[50px] ">
            {t[lang].form.promoNow}
          </span>
          <Gift
            width={isMedia1024 ? 30 : 44}
            height={isMedia1024 ? 34 : 48}
            className="absolute -top-5 -right-2 lg:-top-8 lg:-right-4"
          />
        </motion.div>
        <strong className="block -ml-1 mb-4 lg:mb-8 font-open-sans font-extrabold p-1">
          <motion.span
            className="block  gradient-first-text p-2 pb-0 pt-0 pr-0 text-[50px] lg:text-[70px] xl:text-[80px]"
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
            {t[lang].form.promoTitle[0]}
          </motion.span>
          <motion.span
            className="block gradient-second-text p-2 pt-0 pr-0 text-[56px] leading-[48px] md:leading-[50px] lg:text-[92px] xl:text-[102px] lg:leading-[78px] xl:leading-[86px]"
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.7,
              },
            }}
            viewport={{ once: true }}
          >
            {t[lang].form.promoTitle[1]}
          </motion.span>
        </strong>
        <motion.p
          className="mb-5 text-base md:text-base lg:text-2xl font-bold font-open-sans leading-5"
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          {t[lang].form.promoDetails}
        </motion.p>
        <TimerLazy />
      </div>
      <FormApplication />
    </section>
  );
};

export default ClientForm;
