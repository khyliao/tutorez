import Link from "next/link";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <header className="height-[60px] bg-[#2B2B2B]">
      <Link href="/" className="">
        Tutor<span className="text-[#7000FF]">EZ</span>
      </Link>
      <nav>
        <Link
          className="text-white hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link"
          href="#about"
        >
          {t("about")}
        </Link>
        <Link
          className="text-white hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link"
          href="#team"
        >
          {t("team")}
        </Link>
        <Link
          className="text-white hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link"
          href="#advantages"
        >
          {t("advantages")}
        </Link>
        <Link
          className="text-white hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link"
          href="#reviews"
        >
          {t("reviews")}
        </Link>
        <Link
          className="text-white hover:text-nav-active focus:text-nav-active duration-200 transition-colors hover:drop-shadow-nav-link"
          href="#contacts"
        >
          {t("contacts")}
        </Link>
      </nav>
      <ul>
        <li>UA</li>
        <li>EN</li>
      </ul>
    </header>
  );
};

export default Navbar;
