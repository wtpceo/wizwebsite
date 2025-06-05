import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './locales';

// 경로 정의
export const pathnames = {
  '/': '/',
  '/portfolio': '/portfolio',
  '/strategy': '/strategy',
  '/delivery-service': '/delivery-service',
  '/naver-marketing': '/naver-marketing'
};

export const { Link, redirect, useRouter, usePathname } = 
  createLocalizedPathnamesNavigation({ locales, defaultLocale }); 