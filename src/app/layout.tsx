import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeSync } from "@/components/ThemeSync";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Morgan | Minimal Resume",
  description: "A minimalist, professional resume layout.",
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
