import { useLang } from "@hooks/useLang";
import { Stat } from "@/types/stat";
import { motion } from "framer-motion";

const Stats = () => {
  const { t, lang } = useLang();

  return (
    <section className="mb-12 md:mb-16 lg:mb-32 py-10 px-6 md:px-10 2xl:bg-[#FCEFEB] 2xl:bg-opacity-40 brightness-40">
      <ul className="grid mx-auto max-w-[1200px] grid-cols-2 md:grid-cols-4 gap-4">
        {t[lang].stats.map(({ stat, desc }: Stat, index) => (
          <motion.li
            key={index}
            className="flex flex-col items-center"
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
            <p className="font-open-sans font-bold text-2xl leading-9 md:text-2xl md:mb-1 lg:text-3xl xl:text-4xl 2xl:text-[44px] lg:mb-2">
              {stat}
            </p>
            <span className="block text-center font-open-sans leading-6 text-base font-light md:text-lg lg:text-xl">
              {desc}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
``;
