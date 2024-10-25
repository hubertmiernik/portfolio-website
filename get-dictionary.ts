import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./messages/en.json").then((module) => module.default),
  pl: () => import("./messages/pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
