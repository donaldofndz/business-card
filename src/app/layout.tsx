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
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E",
  },
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
