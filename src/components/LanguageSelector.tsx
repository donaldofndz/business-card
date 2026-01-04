"use client";

import type { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/i18n/config";

export interface LanguageOption {
  locale: Locale;
  label: string;
}

interface LanguageSelectorProps {
  label: string;
  currentLocale: Locale;
  options: LanguageOption[];
}

export function LanguageSelector({ label, currentLocale, options }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    const segments = pathname.split("/");

    if (segments.length > 1) {
      segments[1] = nextLocale;
    } else {
      segments.push(nextLocale);
    }

    const nextPath = segments.join("/") || "/";
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/`;
    router.replace(nextPath);
  };

  return (
    <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
      <span>{label}</span>
      <select
        className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700"
        value={currentLocale}
        onChange={handleChange}
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option.locale} value={option.locale}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
