import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";

import { ThemeSync } from "@/components/ThemeSync";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Morgan | Minimal Resume",
  description: "A minimalist, professional resume layout.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
