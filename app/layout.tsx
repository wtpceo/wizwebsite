import './globals.css'
import type { Metadata } from 'next'

// 캐시 무효화를 위한 타임스탬프
const timestamp = Date.now();

export const metadata: Metadata = {
  metadataBase: new URL('https://wiztheplanning.com'),
  title: {
    default: '위즈더플래닝 | AI 검색 최적화(GEO) 전문 기업',
    template: '%s | 위즈더플래닝',
  },
  description: '위즈더플래닝은 대한민국 AI 검색 최적화(GEO) 전문 마케팅 기업입니다. ChatGPT·퍼플렉시티·네이버 AI가 당신의 가게를 추천하도록 만드는 GEO를 중심으로, 네이버 플레이스·콘텐츠 마케팅까지 2016년부터 7,000여 광고주와 함께합니다.',
  keywords: [
    'AI 검색 최적화',
    'GEO',
    'GEO 전문 기업',
    'AI 검색 최적화 전문 회사',
    'Generative Engine Optimization',
    'AI 마케팅 대행사',
    'AI 검색 마케팅',
    '생성형 AI 마케팅',
    '자영업 마케팅',
    '소상공인 마케팅',
    '네이버 플레이스 마케팅',
    '네이버 마케팅',
    '병원 마케팅',
    '엘리베이터TV 광고',
    '위즈더플래닝',
  ],
  alternates: {
    canonical: '/',
  },
  verification: {
    other: {
      'naver-site-verification': '9eab0615b13363708461a16fe6a3733fe44cf0e3',
    },
  },
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: '위즈더플래닝 | AI 검색 최적화(GEO) 전문 기업',
    description: '대한민국 AI 검색 최적화(GEO) 전문 마케팅 기업. ChatGPT·퍼플렉시티·네이버 AI가 당신의 가게를 추천하게 만듭니다. 2016년부터 7,000여 광고주와 함께.',
    url: 'https://wiztheplanning.com',
    siteName: '위즈더플래닝',
    images: [
      {
        url: `/thumbnail.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: '위즈더플래닝 — AI 검색 최적화(GEO) 전문 기업',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '위즈더플래닝 | AI 검색 최적화(GEO) 전문 기업',
    description: '대한민국 AI 검색 최적화(GEO) 전문 마케팅 기업. ChatGPT·퍼플렉시티·네이버 AI가 당신의 가게를 추천하게 만듭니다.',
    images: [`/thumbnail.png?v=${timestamp}`],
  },
}

// 구조화 데이터 (JSON-LD) — AI 검색 엔진과 검색 엔진이 회사 정보를 신뢰하고 인용하도록
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://wiztheplanning.com/#organization',
      name: '위즈더플래닝',
      alternateName: ['WizThePlanning', '위즈더플래닝 마케팅'],
      url: 'https://wiztheplanning.com',
      logo: 'https://wiztheplanning.com/thumbnail.png',
      image: 'https://wiztheplanning.com/thumbnail.png',
      slogan: 'AI에게 인용되는 매장을 만듭니다',
      description:
        '위즈더플래닝은 대한민국의 AI 검색 최적화(GEO, Generative Engine Optimization) 전문 마케팅 기업입니다. ChatGPT·퍼플렉시티·네이버 AI 같은 생성형 AI가 매장을 인용·추천하도록 만드는 GEO를 핵심으로, 네이버 플레이스 마케팅·콘텐츠 제작·엘리베이터TV 광고까지 통합 제공합니다. 2016년부터 7,000여 광고주와 함께했으며, 음식점·병원·학원·뷰티 등 지역 기반 자영업 마케팅에 특화되어 있습니다.',
      knowsAbout: [
        'AI 검색 최적화(GEO)',
        'Generative Engine Optimization',
        '생성형 AI 검색 마케팅',
        'ChatGPT 인용 최적화',
        '네이버 AI 브리핑 최적화',
        '네이버 플레이스 마케팅',
        '로컬 SEO',
        '구조화 데이터(스키마) 마크업',
        '병원·의원 GEO(의료광고법 준수)',
        '자영업·소상공인 마케팅',
      ],
      telephone: '1670-0704',
      email: 'wiz@wiztheplanning.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '가산디지털로 178, 2518-2519호',
        addressLocality: '금천구',
        addressRegion: '서울특별시',
        addressCountry: 'KR',
      },
      areaServed: {
        '@type': 'Country',
        name: '대한민국',
      },
      foundingDate: '2016',
      sameAs: [
        'https://blog.naver.com/marketingrecipe-',
        'https://www.instagram.com/matzip_town',
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '마케팅 서비스',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI 검색 최적화(GEO)', description: 'ChatGPT·퍼플렉시티·네이버 AI 답변에 매장이 인용·추천되도록 최적화하는 서비스' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '네이버 플레이스 마케팅', description: '플레이스 콘텐츠 관리와 리뷰 관리로 지역 검색 노출 강화' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '엘리베이터TV 광고', description: '포커스미디어 공식 총판 — 아파트 엘리베이터TV 지역 타겟 광고' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '전문 사진·영상 콘텐츠 제작', description: '매장 사진 촬영, 영상 콘텐츠, 브랜드 블로그 운영' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '배달앱 관리', description: '배달의민족·쿠팡이츠 등 7개 배달 플랫폼 통합 관리와 광고 효율화' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://wiztheplanning.com/#website',
      url: 'https://wiztheplanning.com',
      name: '위즈더플래닝',
      publisher: { '@id': 'https://wiztheplanning.com/#organization' },
      inLanguage: 'ko',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
