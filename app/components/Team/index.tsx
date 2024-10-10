import { useLang } from "@hooks/useLang";
import "./team.css";
import { motion } from "framer-motion";
import TeamMember from "@components/TeamMember";

const Team = () => {
  const { lang, t } = useLang();

  return (
    <section
      className="px-4 flex mb-24 flex-col items-center scroll-mt-20 md:scroll-mt-28"
      id="team"
    >
      <motion.h2
        className="mb-7 lg:mb-12 lg:text-4xl text-center text-[#333] font-open-sans font-extrabold tracking-wide text-2xl leading-9"
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
        {t[lang].team.title}
      </motion.h2>
      <motion.ul
        className="flex flex-wrap justify-center gap-8"
        viewport={{ once: true }}
        initial={{
          y: -10,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
      >
        {t[lang].team.tutors.map((tutor, index) => (
          <TeamMember key={index} tutor={tutor} />
        ))}
      </motion.ul>
    </section>
  );
};

export default Team;
