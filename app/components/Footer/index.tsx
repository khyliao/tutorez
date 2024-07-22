import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const Footer = () => {
  const { t, lang } = useLang();
  const [email, setEmail] = useState<string>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmitSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail("");
  };

  return (
    <footer className="bg-footer pt-5 pb-4">
      <div className="px-4 lg:px-6 xl:px-8 lg:flex lg:flex-row">
        <div className="flex flex-col mb-5 md:mb-7 lg:mr-4 xl:mr-20 2xl:mr-32">
          <Link
            href="/"
            className="mb-4 font-bungee tracking-wider text-2xl md:text-3xl md:mb-2 lg:mb-4 lg:text-4xl leading-5 text-white font-medium"
          >
            Tutor<span className="text-[#7000FF]">EZ</span>
          </Link>
          <p className="text-white md:max-w-[420px] lg:text-lg">
            {t[lang].footer.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <form
            className="flex flex-col mb-8 md:mb-0 max-w-[260px] xl:max-w-none md:w-[260px] xl:w-[350px] md:mr-36 lg:mr-20 xl:mr-28 2xl:mr-40"
            onSubmit={handleSubmitSubscribe}
          >
            <label
              className="text-white font-roboto font-bold lg:text-lg leading-5 mb-3"
              htmlFor="subscription"
            >
              {t[lang].footer.subscriptionBlock.ctaText}
            </label>
            <input
              onChange={handleInput}
              className="mb-4 border border-[#CCCCCC] rounded-[6px] p-[6px] pl-2 font-noto-sans text-base leading-8"
              placeholder="Email"
              type="email"
              value={email}
              id="subscription"
            />
            <button
              className="inline-flex items-center justify-center w-40 px-6 py-1 lg:px-8 lg:py-2 text-white border-2 md:text-lg rounded border-white transition-colors duration-300 hover:text-black hover:bg-white"
              type="submit"
            >
              {t[lang].footer.subscriptionBlock.followBtn}
            </button>
          </form>
          <div className="mb-10 flex pr-2 justify-between text-white md:gap-36 lg:gap-24 xl:flex xl:gap-36 2xl:gap-44">
            <div className="">
              <p className="mb-5 text-base lg:text-lg leading-5 font-bold">
                {t[lang].footer.socialMedia.title}
              </p>
              <ul className="flex flex-col gap-4">
                {t[lang].footer.socialMedia.medias.map((media) => (
                  <li key={media} className="text-sm lg:text-base">
                    <Link
                      className="block w-full h-full lg:hover:underline"
                      href=""
                    >
                      {media}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="mb-5 text-base lg:text-lg leading-5 font-bold">
                {t[lang].footer.company.title}
              </p>
              <ul className="flex flex-col gap-4">
                {t[lang].footer.company.companies.map((block) => (
                  <li key={block[0]} className="text-sm lg:text-base">
                    <Link
                      className="block w-full h-full lg:hover:underline"
                      href={`#${block[1]}`}
                    >
                      {block[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4 border-[#E5E7EB]" />
      <span className="block text-center text-white font-light text-xs md:text-sm lg:text-base xl:text-lg">
        &copy; 2024 {t[lang].footer.copyright}
      </span>
    </footer>
  );
};

export default Footer;
