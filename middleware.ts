import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { DEFAULT_LOCALE, isLocale, SUPPORTED_LOCALES } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(acceptLanguage: string | null) {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const languages = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const locale of SUPPORTED_LOCALES) {
    if (languages.some((language) => language === locale || language.startsWith(`${locale}-`))) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];

  if (isLocale(pathLocale)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", pathLocale);
    return response;
  }

  const locale = getPreferredLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("NEXT_LOCALE", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
