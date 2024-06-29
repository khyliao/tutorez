"use client";
import { useUnit } from "effector-react";
import { $lang } from "@/app/context/lang";
import translationsJson from "@/public/translations/translations.json";

export const useLang = () => {
  const lang = useUnit($lang);
  const t = translationsJson;

  return { lang, t };
};
