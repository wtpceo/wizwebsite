import '../globals.css'
import type { Metadata } from 'next'
import RootShell from '@/components/layout/RootShell'
import { BASE_METADATA, OG_TIMESTAMP as timestamp } from '@/lib/site-metadata'

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: {
    default: '위즈더플래닝 | 빈틈 없는 마케팅을 설계하고 실행합니다',
    template: '%s | 위즈더플래닝',
  },
  description: '인플루언서 섭외와 촬영, 광고 소재, GEO와 SEO, 홈페이지까지 위즈더플래닝이 맡아 한 흐름으로 진행합니다. 2016년에 시작해 광고주 7,000여 곳과 일했습니다.',
  // 매체별 키워드(SEO 대행사·메타 광고 대행사·구글 광고 대행사·홈페이지 제작)는 공통 목록에서 빼고 각 매체 페이지에만 둔다(검색광고 세션 제안, 2026-11-03)
  keywords: [
    'AI 검색 최적화',
    'GEO',
    'GEO 전문 기업',
    'GEO 에이전시',
    'AI 검색 최적화 전문 회사',
    'Generative Engine Optimization',
    'AI 마케팅 대행사',
    '퍼포먼스 마케팅',
    '콘텐츠 제작',
    '매장 촬영',
    '네이버 플레이스 마케팅',
    '병원 마케팅',
    '위즈더플래닝',
  ],
  alternates: {
    canonical: '/',
    languages: {
      ko: 'https://wiztheplanning.com/',
      en: 'https://wiztheplanning.com/en/business-owners-in-korea',
      'zh-Hans': 'https://wiztheplanning.com/zh',
      vi: 'https://wiztheplanning.com/vi',
      'x-default': 'https://wiztheplanning.com/',
    },
  },
  openGraph: {
    title: '위즈더플래닝 | 빈틈 없는 마케팅을 설계하고 실행합니다',
    description: '인플루언서 섭외와 촬영, 광고 소재, GEO와 SEO, 홈페이지까지 위즈더플래닝이 맡아 한 흐름으로 진행합니다. 2016년에 시작해 광고주 7,000여 곳과 일했습니다.',
    url: 'https://wiztheplanning.com',
    siteName: '위즈더플래닝',
    images: [
      {
        url: `/og-image.jpg?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: '위즈더플래닝: 빈틈 없는 마케팅을 설계하고 실행합니다',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '위즈더플래닝 | 빈틈 없는 마케팅을 설계하고 실행합니다',
    description: '인플루언서 섭외와 촬영, 광고 소재, GEO와 SEO, 홈페이지까지 위즈더플래닝이 맡아 한 흐름으로 진행합니다. 2016년에 시작해 광고주 7,000여 곳과 일했습니다.',
    images: [`/og-image.jpg?v=${timestamp}`],
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
      slogan: '빈틈 없는 마케팅을 설계하고 실행합니다',
      description:
        '인플루언서 섭외와 촬영, 광고 소재, GEO와 SEO, 홈페이지까지 위즈더플래닝이 맡아 한 흐름으로 진행합니다. 2016년에 시작해 광고주 7,000여 곳과 일했습니다. 기업과 병원·의원의 마케팅을 맡습니다.',
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
        streetAddress: '디지털로 178 퍼블릭가산 A동 2518호·2519호',
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
      // '캠페인 1,000건 이상'은 근거가 확인되지 않아 뺐다(2026-11-03). 근거가 오면 되살린다
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '마케팅 서비스',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI 검색 최적화(GEO)', description: 'ChatGPT·퍼플렉시티·네이버 AI 답변에 브랜드가 인용·추천되도록 최적화하는 대표 서비스. 무료 AI 검색 진단 리포트 제공' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO(검색엔진 최적화)', description: '검색 상위 노출을 위한 콘텐츠 SEO와 스키마·엔터티·서버렌더링까지 다루는 기술 SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '메타 광고 운영', description: '인스타그램·페이스북 퍼포먼스 광고의 세팅·운영·최적화' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '구글 광고 운영', description: '구글 검색·디스플레이·PMAX 캠페인의 세팅·운영' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '콘텐츠 촬영·편집·제작', description: '촬영과 편집은 사내 촬영·제작 부서가 합니다.' } },
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
    <RootShell lang="ko" jsonLd={jsonLd}>
      {children}
    </RootShell>
  )
}
