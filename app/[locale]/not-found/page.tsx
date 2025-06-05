import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { useLocale } from 'next-intl'

// 별도의 컴포넌트를 생성하여 import/export 순환 참조 문제 해결
export default async function NotFoundPage() {
  const locale = useLocale()
  const t = await getTranslations('NotFound')

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">{t('pageNotFound')}</h2>
      <p className="mb-8 text-gray-600 max-w-md">{t('description')}</p>
      <Link 
        href={`/${locale}`} 
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {t('backToHome')}
      </Link>
    </main>
  )
} 