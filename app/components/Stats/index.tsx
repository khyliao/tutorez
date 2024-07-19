import { useLang } from "@hooks/useLang";
import { Stat } from "@/types/stat";

const Stats = () => {
  const { t, lang } = useLang();

  return (
    <section className="mb-12 md:mb-16 lg:mb-32 py-10 px-6 md:px-10 bg-[#c571eb]/60">
      <ul className="grid mx-auto max-w-[1200px] grid-cols-2 md:grid-cols-4 gap-4">
        {t[lang].stats.map(({ stat, desc }: Stat, index) => (
          <li key={index} className="flex flex-col items-center">
            <p className="font-open-sans font-bold text-2xl leading-9 md:text-2xl md:mb-1 lg:text-3xl lg:mb-2">
              {stat}
            </p>
            <span className="block text-center font-open-sans leading-6 text-base font-light md:text-lg lg:text-xl">
              {desc}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
``;
