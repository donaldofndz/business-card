import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeSync } from "@/components/ThemeSync";
import enContent from "@/content/locales/en.json";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${enContent.header.name} | ${enContent.header.role}`,
  description: enContent.about,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
