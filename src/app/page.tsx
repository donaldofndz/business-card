"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { getLocaleContent, languageOptions } from "@/content";
import { DEFAULT_LOCALE, isLocale, SUPPORTED_LOCALES, type Locale } from "@/i18n/config";

export default function Page() {
  const router = useRouter();
  const [displayLocale, setDisplayLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem("preferredLocale") : null;
    const storedLocale = stored && isLocale(stored) ? stored : null;

    const browserLanguage =
      typeof navigator !== "undefined" ? navigator.language.toLowerCase() : DEFAULT_LOCALE;

    const matched = SUPPORTED_LOCALES.find(
      (locale) => browserLanguage === locale || browserLanguage.startsWith(`${locale}-`)
    );

    const targetLocale = storedLocale ?? matched ?? DEFAULT_LOCALE;
    setDisplayLocale(targetLocale);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferredLocale", targetLocale);
    }

    router.replace(`/${targetLocale}`);
  }, [router]);

  const content = useMemo(() => getLocaleContent(displayLocale), [displayLocale]);

  const handleSelect = (locale: Locale) => () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferredLocale", locale);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl font-semibold">{content.root.title}</h1>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300">
            {content.root.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {languageOptions.map((option) => (
            <a
              key={option.locale}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors underline underline-offset-4"
              href={`/${option.locale}/`}
              onClick={handleSelect(option.locale)}
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
