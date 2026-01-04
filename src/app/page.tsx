"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { DEFAULT_LOCALE, isLocale, SUPPORTED_LOCALES } from "@/i18n/config";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("preferredLocale") : null;
    if (stored && isLocale(stored)) {
      router.replace(`/${stored}`);
      return;
    }

    const browserLanguage =
      typeof navigator !== "undefined" ? navigator.language.toLowerCase() : DEFAULT_LOCALE;

    const matched = SUPPORTED_LOCALES.find(
      (locale) => browserLanguage === locale || browserLanguage.startsWith(`${locale}-`)
    );

    router.replace(`/${matched ?? DEFAULT_LOCALE}`);
  }, [router]);

  return null;
}
