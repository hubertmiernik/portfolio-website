// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
//
// import { i18n } from "./i18n-config";
//
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
//
// function getLocale(request: NextRequest): string | undefined {
//   // Negotiator expects plain object so we need to transform headers
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
//
//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales;
//
//   // Read the saved language from cookies
//   const savedLanguage = request.cookies.get("lang");
//
//   // Use negotiator and intl-localematcher to get best locale
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales,
//   );
//
//   return (
//     savedLanguage?.value || matchLocale(languages, locales, i18n.defaultLocale)
//   );
// }
//
// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//
//   // Check if there is any supported locale in the pathname
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) =>
//       !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
//   );
//
//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//
//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//         request.url,
//       ),
//     );
//   }
// }
//
// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import createMiddleware from "next-intl/middleware";
import { localePrefix, defaultLocale, locales, pathnames } from "./config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|pl)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*|api).*)",
  ],
};
