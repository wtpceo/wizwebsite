import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './locales';

export default getRequestConfig(async ({ locale }) => {
  // locale이 유효하지 않은 경우 확인
  if (!locale || !locales.includes(locale)) {
    notFound();
  }
  
  // 요청된 언어에 대한 번역 파일 로드
  return {
    locale: locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
}); 