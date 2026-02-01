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
  metadataBase: new URL("https://donaldofndz.com"),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: `${enContent.header.name} | ${enContent.header.role}`,
    description: enContent.about,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Rocket icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${enContent.header.name} | ${enContent.header.role}`,
    description: enContent.about,
    images: ["/og.svg"],
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
