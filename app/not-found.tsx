import Link from 'next/link'
import { defaultLocale } from '@/i18n/locales'

export default function GlobalNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">페이지를 찾을 수 없습니다</h2>
      <p className="mb-8 text-gray-600 max-w-md">찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link 
        href={`/${defaultLocale}`} 
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </main>
  )
} 