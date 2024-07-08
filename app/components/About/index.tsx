import { useLang } from "@/hooks/useLang";
import CourseIcon from "@assets/course.svg";
import ScheduleIcon from "@assets/schedule.svg";
import SpecialistIcon from "@assets/specialist.svg";

const About = () => {
  const { lang, t } = useLang();

  return (
    <section
      className="flex flex-col items-center mb-24 scroll-mt-20 md:scroll-mt-28  px-4"
      id="about"
    >
      <h2 className="mb-7 lg:text-4xl text-center text-section-title font-open-sans font-extrabold tracking-wide text-2xl leading-9">
        {t[lang].about.title}
      </h2>
      <p className="mb-8 text-xs lg:text-[22px] max-w-[1500px] text-[#525151] lg:mb-12 text-center font-open-sans leading-5 lg:leading-8 tracking-wide ">
        {t[lang].about.paragraph}
      </p>
      <ul className="flex flex-col md:flex-row gap-7 md:gap-12 xl:gap-24 items-center md:items-start">
        <li className="max-w-[250px] md:max-w-[200px] lg:max-w-[300px] flex flex-col items-center">
          <ScheduleIcon className="w-[43px] md:w-[54px] lg:w-[64px] mb-3 lg:mb-6" />
          <h3 className="mb-2 uppercase font-poppins tracking-[.01em] text-base xl:text-xl leading-6 font-medium text-[#333333]">
            {t[lang].about.benefits.schedule.name}
          </h3>
          <p className="text-center text-[#909090] text-xs xl:text-base leading-4 font-poppins">
            {t[lang].about.benefits.schedule.description}
          </p>
        </li>
        <li className="max-w-[250px] md:max-w-[200px] lg:max-w-[300px] flex flex-col items-center">
          <SpecialistIcon className="w-[40px] md:w-[54px] lg:w-[64px] mb-3 lg:mb-6" />
          <h3 className="mb-2 uppercase font-poppins tracking-[.01em] text-base xl:text-xl leading-6 font-medium text-[#333333]">
            {t[lang].about.benefits.specialist.name}
          </h3>
          <p className="text-center text-[#909090] text-xs xl:text-base leading-4 font-poppins">
            {t[lang].about.benefits.specialist.description}
          </p>
        </li>
        <li className="max-w-[250px] md:max-w-[200px] lg:max-w-[300px] flex flex-col items-center">
          <CourseIcon className="w-[45px] md:w-[54px] lg:w-[64px]  mb-3 lg:mb-6" />
          <h3 className="mb-2 uppercase font-poppins tracking-[.01em] text-base xl:text-xl leading-6 font-medium text-[#333333]">
            {t[lang].about.benefits.course.name}
          </h3>
          <p className="text-center text-[#909090] text-xs xl:text-base leading-4 font-poppins">
            {t[lang].about.benefits.course.description}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
