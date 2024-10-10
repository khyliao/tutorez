import Link from "next/link";
import { useLang } from "@hooks/useLang";
import dynamic from "next/dynamic";

const DetailBtnLazy = dynamic(() => import("./components/DetailBtn"), {
  loading: () => <p>Loading detail...</p>,
});

const GreetingPictureLazy = dynamic(
  () => import("./components/GreetingPicture"),
  {
    loading: () => <p>Loading detail...</p>,
  }
);

const Hero = () => {
  const { lang, t } = useLang();

  return (
    <section className="mb-14 lg:mb-40 pt-24 md:pt-28 px-4 lg:pt-28 lg:px-12 xl:pt-32 xl:px-20">
      <div className="mb-7 md:mb-3 flex flex-col md:flex-row-reverse items-center md:justify-center lg:justify-between">
        <GreetingPictureLazy />
        <div className="flex flex-col ">
          <h1 className="text-3xl font-extrabold lg:text-5xl xl:text-7xl mb-6 lg:mb-9 xl:mb-11">
            <span className="text-[#9E00FF]">{t[lang].hero.accentWord}</span>
            {", "}
            {t[lang].hero.title}
          </h1>
          <p className="mb-6 text-sm lg:text-xl lg:mb-8 xl:text-2xl font-semibold font-open-sans text-[#333333]">
            {t[lang].hero.subtitle}
          </p>
          <div className="m-auto md:m-0 md:mr-auto">
            <Link
              href="#contacts"
              className="py-2 px-6 lg:py-3 lg:px-8 rounded-2xl font-bold font-open-sans text-sm lg:text-base xl:text-xl transition duration-500 text-white bg-hero-primary hover:bg-[#9700e9] shadow-[0_4px_8px_rgba(118,10,255,0.4)] hover:shadow-[0_6px_12px_rgba(96,0,221,0.6)]"
            >
              {t[lang].hero.reqBtn}
            </Link>
          </div>
        </div>
      </div>
      <DetailBtnLazy />
    </section>
  );
};

export default Hero;
