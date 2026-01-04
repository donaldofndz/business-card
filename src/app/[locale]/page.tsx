import { getLocaleContent, languageOptions } from "@/content";
import { ResumeApp } from "@/components/ResumeApp";
import { DEFAULT_LOCALE, isLocale, SUPPORTED_LOCALES, type Locale } from "@/i18n/config";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocalePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale: Locale = isLocale(resolvedParams.locale)
    ? resolvedParams.locale
    : DEFAULT_LOCALE;
  const content = getLocaleContent(locale);

  return <ResumeApp content={content} languageOptions={languageOptions} locale={locale} />;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}
