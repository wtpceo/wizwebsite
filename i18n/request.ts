import {getRequestConfig} from 'next-intl/server';
import {locales} from './settings';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    throw new Error(`Locale '${locale}' not found`);
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale: locale
  };
}); 