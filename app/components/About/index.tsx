import { useLang } from "@hooks/useLang";
import CourseIcon from "@assets/course.svg";
import ScheduleIcon from "@assets/schedule.svg";
import SpecialistIcon from "@assets/specialist.svg";
import { motion } from "framer-motion";

const About = () => {
  const { lang, t } = useLang();

  return (
    <section
      className="flex flex-col items-center mb-24 scroll-mt-20 md:scroll-mt-28 px-4"
      id="about"
    >
      <div>
        <motion.h2
          className="mb-7 lg:text-4xl text-center text-section-title font-open-sans font-extrabold tracking-wide text-2xl leading-9"
          initial={{
            y: -10,
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
        >
          {t[lang].about.title}
        </motion.h2>
        <motion.p
          className="mb-8 text-sm lg:text-[22px] md:max-w-[640px] lg:max-w-[1200px] max-w-[1500px] text-[#525151] lg:mb-12 text-center font-open-sans leading-5 lg:leading-8 tracking-wide "
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.4,
            },
          }}
          viewport={{ once: true }}
        >
          {t[lang].about.paragraph}
        </motion.p>
      </div>
      <ul className="flex flex-col md:flex-row gap-7 md:gap-12 xl:gap-24 items-center md:items-start">
        <motion.li
          initial={{
            y: 50,
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
          className="max-w-[250px] md:max-w-[210px] lg:max-w-[300px] flex flex-col items-center"
        >
          <ScheduleIcon className="w-[43px] md:w-[54px] lg:w-[64px] mb-3 lg:mb-6" />
          <h3 className="mb-2 uppercase tracking-[.01em] text-base md:text-sm lg:text-lg xl:text-xl leading-6 font-medium text-[#333333]">
            {t[lang].about.benefits.schedule.name}
          </h3>
          <p className="text-center text-[#909090] text-xs lg:text-base xl:text-base leading-4">
            {t[lang].about.benefits.schedule.description}
          </p>
        </motion.li>
        <motion.li
          initial={{
            y: 50,
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
          className="max-w-[250px] md:max-w-[210px] lg:max-w-[300px] flex flex-col items-center"
        >
          <SpecialistIcon className="w-[40px] md:w-[54px] lg:w-[64px] mb-3 lg:mb-6" />
          <h3 className="mb-2 uppercase tracking-[.01em] text-base md:text-sm lg:text-lg  xl:text-xl leading-6 font-medium text-[#333333]">
            {t[lang].about.benefits.specialist.name}
          </h3>
          <p className="text-center text-[#909090] text-xs lg:text-base xl:text-base leading-4">
            {t[lang].about.benefits.specialist.description}
          </p>
        </motion.li>
        <motion.li
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="max-w-[250px] md:max-w-[210px] lg:max-w-[300px] flex flex-col items-center"
        >
          <CourseIcon className="w-[45px] md:w-[54px] lg:w-[64px]  mb-3 lg:mb-6" />
          <h3 className="mb-2 uppercase tracking-[.01em] text-base md:text-sm lg:text-lg xl:text-xl leading-6 font-medium text-[#333333]">
            {t[lang].about.benefits.course.name}
          </h3>
          <p className="text-center text-[#909090] text-xs lg:text-base xl:text-base leading-4">
            {t[lang].about.benefits.course.description}
          </p>
        </motion.li>
      </ul>
    </section>
  );
};

export default About;
