import { useLang } from "@hooks/useLang";
import "./team.css";
import { motion } from "framer-motion";

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
        initial={{
          y: 20,
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
        {t[lang].team.tutors.map(({ photo, name, bio, subject }, index) => (
          <li
            key={index}
            className="team-card max-w-[320px] bg-[#e9e1ff] ease-in-out shadow-lg rounded-lg overflow-hidden relative transition-all duration-300 transform"
          >
            <div className="inline-block overflow-hidden">
              <img
                src={`/${photo}`}
                alt={`${name}'s photo`}
                className="team-card-img object-cover"
              />
            </div>
            <div className="p-3 px-6 md:p-6 text-center">
              <h3 className="team-card-title text-lg leading-4 font-bold md:leading-5 md:text-xl mb-2 text-[#333]">
                {name}
              </h3>
              <p className="team-card-subject text-[#373a41] text-base leading-4 font-regular md:leading-5 md:text-base mb-2 md:mb-4">
                {subject}
              </p>
              <p className="team-card-bio text-sm leading-4 md:leading-5 md:text-base text-[#2b3036]">
                {bio}
              </p>
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Team;
