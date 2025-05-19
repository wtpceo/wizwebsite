import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '위즈더플래닝 | 전문가의 맞춤형 마케팅 솔루션',
  description: '위즈더플래닝에서 제공하는 맞춤형 마케팅 솔루션으로 비즈니스 성장을 경험하세요.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: '위즈더플래닝 | 전문가의 맞춤형 마케팅 솔루션',
    description: '위즈더플래닝에서 제공하는 맞춤형 마케팅 솔루션으로 비즈니스 성장을 경험하세요.',
    url: 'https://wiztheplanning.com',
    siteName: '위즈더플래닝',
    images: [
      {
        url: '/thumnail.png',
        width: 1200,
        height: 630,
        alt: '위즈더플래닝',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '위즈더플래닝 | 전문가의 맞춤형 마케팅 솔루션',
    description: '위즈더플래닝에서 제공하는 맞춤형 마케팅 솔루션으로 비즈니스 성장을 경험하세요.',
    images: ['/thumnail.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
