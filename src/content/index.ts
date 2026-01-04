import enJson from "./locales/en.json";
import esJson from "./locales/es.json";

import { DEFAULT_LOCALE, type Locale, SUPPORTED_LOCALES } from "@/i18n/config";
import type { ResumeContent } from "./types";

const en = enJson as ResumeContent;
const es = esJson as ResumeContent;

const contentByLocale = {
  en,
  es,
} as const;

export type { ResumeContent } from "./types";

export function getLocaleContent(locale: Locale): ResumeContent {
  return contentByLocale[locale] ?? contentByLocale[DEFAULT_LOCALE];
}

export const languageOptions = SUPPORTED_LOCALES.map((locale) => ({
  locale,
  label: contentByLocale[locale].meta.languageName,
}));
