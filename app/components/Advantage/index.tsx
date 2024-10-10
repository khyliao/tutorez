import { motion } from "framer-motion";
import AdvantageItem from "@components/AdvantageItem";
import { useLang } from "@hooks/useLang";

const Advantage = () => {
  const { t, lang } = useLang();

  return (
    <section
      className="mb-24 px-6 md:mb-32 scroll-mt-20  md:scroll-mt-28"
      id="advantages"
    >
      <div>
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
          {t[lang].advantages.title}
        </motion.h2>
        <ul className="flex flex-col gap-2 md:gap-6">
          {t[lang].advantages.benefits.map(
            ({ imageUrl, name, description, commonBtn }, index) => (
              <AdvantageItem
                key={index}
                rtl={index % 2 === 0 ? false : true}
                btnMode={index % 2 === 0 ? 1 : 2}
                imageUrl={imageUrl}
                title={name}
                description={description}
                btnCaption={commonBtn}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Advantage;
