'use client';

import { useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n/locales';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  // 언어 이름 매핑
  const languageNames: Record<string, string> = {
    ko: '한국어',
    zh: '中文 (중국어)',
    vi: 'Tiếng Việt (베트남어)'
  };

  // 현재 경로에서 로케일 부분 제거
  const pathnameWithoutLocale = pathname.replace(/^\/[^\/]+/, '');

  // 언어 변경 핸들러
  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      // 기본 언어(한국어)인 경우 로케일 경로 없이 이동
      if (nextLocale === 'ko') {
        router.push(pathnameWithoutLocale || '/');
      } else {
        router.push(`/${nextLocale}${pathnameWithoutLocale || '/'}`);
      }
    });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full border-none bg-transparent"
          disabled={isPending}
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">언어 선택</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 min-w-[8rem]">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={locale === loc ? 'bg-gray-100 font-medium' : ''}
          >
            {languageNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 