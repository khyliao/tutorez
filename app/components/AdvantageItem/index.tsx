import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Button } from "@mui/material";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  btnCaption: string;
  rtl: boolean;
  btnMode?: number;
};

const AdvantageItem: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  btnCaption,
  rtl = false,
  btnMode = 1,
}) => {
  const isMedia1024 = useMediaQuery(1024);

  const currentBtnMode = () => {
    if (btnMode === 1) {
      return "bg-[#2F2F2F] text-[#F4F3F8] hover:text-white hover:bg-[#000000] transition-all shadow-[0_6px_8px_rgba(47,47,47,0.4)] hover:shadow-[0_8px_12px_rgba(47,47,47,0.6)]";
    }

    if (btnMode === 2) {
      return "bg-[#760AFF] text-[#F4F3F8] hover:text-white hover:bg-[#6000dd] shadow-[0_4px_8px_rgba(118,10,255,0.4)] hover:shadow-[0_6px_12px_rgba(96,0,221,0.6)]";
    }
  };

  return (
    <motion.li
      className={`flex flex-col  md:gap-16 lg:gap-20 xl:gap-28 py-4 drop-shadow-second-advantage md:py-0 items-center md:flex-row md:pl-16 md:pr-24 lg:pl-24 lg:pr-38 xl:pl-32 xl:pr-64 ${
        rtl && "md:flex-row-reverse"
      }`}
      initial={{
        transform: rtl ? "translateX(-100px)" : "translateX(100px)",
        opacity: 0,
      }}
      whileInView={{
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 1.6,
        },
      }}
      viewport={{ once: true }}
    >
      <Image
        className="mb-7 md:mb-0 md:max-w-[320px] lg:max-w-none"
        src={`/${imageUrl}`}
        width={isMedia1024 ? 500 : 480}
        height={isMedia1024 ? 230 : 360}
        alt="benefit"
      />
      <div className="flex flex-col items-start md:block">
        <h3 className="mb-4 font-open-sans font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-5 md:mb-4 lg:mb-6">
          {title}
        </h3>
        <p
          className="mb-4 md:text-start font-medium font-open-sans leading-7 md:text-base xl:text-lg md:mb-8 lg:mb-6 xl:mb-8"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>

        <Link
          href="#contacts"
          className={`py-[8px] px-6 border-solid xl:text-lg font-medium font-open-sans transition duration-500 rounded-[32px] ${currentBtnMode()}`}
          type="button"
        >
          {btnCaption}
        </Link>
      </div>
    </motion.li>
  );
};

export default AdvantageItem;
