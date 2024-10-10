import Link from "next/link";
import { motion } from "framer-motion";
import NextArrow from "@assets/nextArrow.svg";
import { useLang } from "@hooks/useLang";

const DetailBtn = () => {
  const { lang, t } = useLang();

  return (
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
          delay: 0.4,
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
  );
};

export default DetailBtn;
