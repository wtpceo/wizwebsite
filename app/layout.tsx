import './globals.css'
import type { Metadata } from 'next'
import DiagnosisPopup from '@/components/DiagnosisPopup'

// 캐시 무효화를 위한 타임스탬프
const timestamp = Date.now();

export const metadata: Metadata = {
  metadataBase: new URL('https://wiztheplanning.com'),
  title: {
    default: '위즈더플래닝 | AI 검색 최적화(GEO) 전문 에이전시',
    template: '%s | 위즈더플래닝',
  },
  description: '위즈더플래닝은 AI 검색 최적화(GEO) 전문 풀서비스 에이전시입니다. ChatGPT·퍼플렉시티·네이버 AI가 당신의 브랜드를 추천하게 만드는 GEO부터 SEO, 메타·구글 퍼포먼스 광고 수천 건, 자체 촬영·편집 제작팀, 홈페이지 제작까지 — 2016년부터 7,000여 광고주와 함께합니다.',
  keywords: [
    'AI 검색 최적화',
    'GEO',
    'GEO 전문 기업',
    'GEO 에이전시',
    'AI 검색 최적화 전문 회사',
    'Generative Engine Optimization',
    'AI 마케팅 대행사',
    'SEO 대행사',
    '메타 광고 대행사',
    '구글 광고 대행사',
    '퍼포먼스 마케팅',
    '콘텐츠 제작',
    '매장 촬영',
    '홈페이지 제작',
    '네이버 플레이스 마케팅',
    '병원 마케팅',
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
    title: '위즈더플래닝 | AI 검색 최적화(GEO) 전문 에이전시',
    description: 'AI 검색 최적화(GEO) 전문 풀서비스 에이전시. ChatGPT·퍼플렉시티·네이버 AI가 브랜드를 추천하게 만드는 GEO부터 SEO, 메타·구글 광고, 자체 촬영·편집 제작팀, 홈페이지 제작까지 — 2016년부터 7,000여 광고주와 함께.',
    url: 'https://wiztheplanning.com',
    siteName: '위즈더플래닝',
    images: [
      {
        url: `/thumbnail.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: '위즈더플래닝 — AI 검색 최적화(GEO) 전문 에이전시',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '위즈더플래닝 | AI 검색 최적화(GEO) 전문 에이전시',
    description: 'AI 검색 최적화(GEO) 전문 풀서비스 에이전시. GEO·SEO·메타/구글 광고·콘텐츠 제작·홈페이지 제작을 한 팀에서. 2016년부터 7,000여 광고주와 함께.',
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
      slogan: 'AI가 추천하는 브랜드를 만듭니다',
      description:
        '위즈더플래닝은 AI 검색 최적화(GEO, Generative Engine Optimization) 전문 풀서비스 에이전시입니다. ChatGPT·퍼플렉시티·네이버 AI 같은 생성형 AI가 브랜드를 인용·추천하도록 만드는 GEO를 핵심으로, SEO·메타 광고·구글 광고 퍼포먼스 캠페인 수천 건, 드라마·유명 채널 촬영감독 출신의 자체 촬영·편집 제작팀, AI가 읽는 구조의 홈페이지 제작까지 통합 제공합니다. 2016년부터 7,000여 광고주와 함께했으며, 음식점·병원·학원·뷰티 등 지역 기반 비즈니스 마케팅에 특화되어 있습니다.',
      knowsAbout: [
        'AI 검색 최적화(GEO)',
        'Generative Engine Optimization',
        '생성형 AI 검색 마케팅',
        'ChatGPT 인용 최적화',
        '네이버 AI 브리핑 최적화',
        'SEO(검색엔진 최적화)',
        '기술 SEO·구조화 데이터(스키마) 마크업',
        '메타 광고(인스타그램·페이스북) 운영',
        '구글 광고(검색·PMAX) 운영',
        '퍼포먼스 마케팅',
        '콘텐츠 촬영·편집·제작',
        '홈페이지·랜딩페이지 제작',
        '네이버 플레이스 마케팅',
        '병원·의원 GEO(의료광고법 준수)',
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI 검색 최적화(GEO)', description: 'ChatGPT·퍼플렉시티·네이버 AI 답변에 브랜드가 인용·추천되도록 최적화하는 대표 서비스. 무료 AI 검색 진단 리포트 제공' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO(검색엔진 최적화)', description: '검색 상위 노출을 위한 콘텐츠 SEO와 스키마·엔터티·서버렌더링까지 다루는 기술 SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '메타 광고 운영', description: '인스타그램·페이스북 퍼포먼스 광고 캠페인 수천 건 집행 경험 기반의 세팅·운영·최적화' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '구글 광고 운영', description: '구글 검색·디스플레이·PMAX 캠페인 수천 건 세팅·운영 경험 기반의 퍼포먼스 관리' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '콘텐츠 촬영·편집·제작', description: '드라마·유명 채널 촬영감독 출신의 자체 제작팀이 외주 없이 촬영부터 편집까지 직접 제작' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '홈페이지 제작', description: 'AI와 검색엔진이 읽을 수 있는 구조(서버 렌더링·구조화 데이터)로 설계하는 웹사이트 제작' } },
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
        <DiagnosisPopup />
      </body>
    </html>
  )
}
