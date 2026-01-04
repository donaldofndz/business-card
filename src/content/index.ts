import en from "./locales/en.json";
import es from "./locales/es.json";

import { DEFAULT_LOCALE, type Locale, SUPPORTED_LOCALES } from "@/i18n/config";

const contentByLocale = {
  en,
  es,
} as const;

export type ResumeContent = typeof en;

export function getLocaleContent(locale: Locale): ResumeContent {
  return contentByLocale[locale] ?? contentByLocale[DEFAULT_LOCALE];
}

export const languageOptions = SUPPORTED_LOCALES.map((locale) => ({
  locale,
  label: contentByLocale[locale].meta.languageName,
}));
