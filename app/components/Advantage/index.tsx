import Image from "next/image";
import Link from "next/link";
import { useLang } from "@hooks/useLang";
import { useMediaQuery } from "@hooks/useMediaQuery";

const Advantage = () => {
  const { t, lang } = useLang();
  const isMedia1024 = useMediaQuery(1024);

  return (
    <section
      className="mb-24 md:mb-32 scroll-mt-20  md:scroll-mt-28"
      id="advantages"
    >
      <h2 className="mb-7 lg:mb-12 lg:text-4xl text-center text-[#333] font-open-sans font-extrabold tracking-wide text-2xl leading-9">
        {t[lang].advantages.title}
      </h2>
      <ul>
        <li className="flex flex-col px-6 py-4 drop-shadow-first-advantage md:py-0 md:flex-row items-center mb-14 bg-[#FFFBF5] md:pl-16 md:pr-24 lg:pl-20 lg:pr-38 xl:pl-32 xl:pr-64">
          <Image
            className="mb-7 md:mb-0 md:mr-16 md:max-w-[320px] lg:max-w-none lg:mr-20 xl:mr-28"
            src="/advantage-1.webp"
            width={isMedia1024 ? 500 : 480}
            height={isMedia1024 ? 230 : 360}
            alt="benefit"
          />
          <div className="flex flex-col items-start md:block">
            <h3 className="mb-4 font-open-sans font-semibold text-xl md:text-2xl lg:text-3xl leading-5 md:mb-4 lg:mb-6 ">
              {t[lang].advantages.benefits[0].name}
            </h3>
            <p className="mb-4 md:text-start font-open-sans leading-7 opacity-50 md:text-base md:mb-8 lg:mb-6 xl:mb-8">
              {t[lang].advantages.benefits[0].description}
            </p>
            <Link
              href="#contacts"
              className="py-[10px] px-6 text-white bg-[#53519CB3] lg:border-2 lg:border-[#FFFBF5] transition-colors duration-200 hover:text-[#353535] hover:bg-[#ffffffb3] hover:border-black rounded-3xl"
              type="button"
            >
              {t[lang].advantages.benefits[0].commonBtn}
            </Link>
          </div>
        </li>
        <li className="flex flex-col px-6 py-4 drop-shadow-second-advantage md:py-0items-center md:flex-row-reverse bg-[#EBF8FF] md:pl-16 md:pr-24 lg:pl-24 lg:pr-38 xl:pl-32 xl:pr-64">
          <Image
            className="mb-7 md:mb-0 md:max-w-[320px] lg:max-w-none"
            src="/advantage-2.webp"
            width={isMedia1024 ? 500 : 480}
            height={isMedia1024 ? 230 : 360}
            alt="benefit"
          />
          <div className="flex flex-col items-start  md:block md:mr-16 lg:mr-20 xl:mr-28">
            <h3 className="mb-4 font-open-sans font-semibold text-xl md:text-2xl lg:text-3xl leading-5 md:mb-4 lg:mb-6">
              {t[lang].advantages.benefits[1].name}
            </h3>
            <p className="mb-4 md:text-start font-open-sans leading-7 opacity-50 md:text-base md:mb-8 lg:mb-6 xl:mb-8">
              {t[lang].advantages.benefits[1].description}
            </p>
            <Link
              href="#contacts"
              className="py-[8px] px-6 border-solid border-2 transition-colors duration-200 border-[#B3ADA4] hover:text-white hover:bg-[#53519CB3] hover:border-transparent  rounded-3xl"
              type="button"
            >
              {t[lang].advantages.benefits[1].commonBtn}
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Advantage;
