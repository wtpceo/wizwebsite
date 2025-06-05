import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './app/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  defaultLocale: defaultLocale,
  // Used when no locale matches
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ko|en)/:path*']
}; 