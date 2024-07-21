import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const Footer = () => {
  const { t, lang } = useLang();
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="bg-footer py-4">
      <div className="px-4">
        <div className="flex flex-col mb-6">
          <Link
            href="/"
            className="mb-3 font-bungee z-20 tracking-wider text-2xl lg:text-3xl xl:text-4xl leading-5 text-white font-medium"
          >
            Tutor<span className="text-[#7000FF]">EZ</span>
          </Link>
          <p className="text-white">{t[lang].footer.description}</p>
        </div>
        <form className="flex flex-col mb-8 max-w-[250px]">
          <label
            className="text-white font-roboto font-bold leading-5 mb-3"
            htmlFor="subscription"
          >
            {t[lang].footer.subscriptionBlock.ctaText}
          </label>
          <input className="mb-4" type="email" id="subscription" />
          <button
            className="inline-flex items-center justify-center w-40 px-6 py-1 text-white border-2 border-white"
            type="submit"
          >
            {t[lang].footer.subscriptionBlock.followBtn}
          </button>
        </form>
        <div>
          <div className="">
            <p className="">{t[lang].footer.socialMedia.title}</p>
            <ul>
              {t[lang].footer.socialMedia.medias.map((media) => (
                <li key={media} className="">
                  {media}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="">{t[lang].footer.company.title}</p>
            <ul>
              {t[lang].footer.company.companies.map((link) => (
                <li key={link} className="">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
