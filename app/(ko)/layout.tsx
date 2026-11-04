import '../globals.css'
import type { Metadata } from 'next'
import RootShell from '@/components/layout/RootShell'
import { BASE_METADATA, OG_TIMESTAMP as timestamp } from '@/lib/site-metadata'

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: {
    default: '위즈더플래닝 | 검색·광고·블로그·인플루언서·촬영까지 한 팀이 직접 하는 마케팅 회사',
    template: '%s | 위즈더플래닝',
  },
  description: '나눠 맡기던 마케팅을 한 팀이 직접 합니다. 검색 최적화(GEO·SEO·네이버 플레이스), 네이버·메타·구글 광고, 블로그·체험단, 인플루언서, 촬영·숏폼, 샤오홍슈·LINE, 홈페이지 제작, 엘리베이터TV까지 재하청 없이 사내 팀이 맡고 담당 마케터 한 명이 끝까지 챙깁니다.',
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
    '블로그 체험단',
    '인플루언서 마케팅',
    '숏폼 제작',
    '샤오홍슈 마케팅',
    '엘리베이터TV 광고',
    '마케팅 대행사',
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
    title: '위즈더플래닝 | 검색·광고·블로그·인플루언서·촬영까지 한 팀이 직접 하는 마케팅 회사',
    description: '나눠 맡기던 마케팅을 한 팀이 직접 합니다. 검색 최적화(GEO·SEO·네이버 플레이스), 네이버·메타·구글 광고, 블로그·체험단, 인플루언서, 촬영·숏폼, 샤오홍슈·LINE, 홈페이지 제작, 엘리베이터TV까지 재하청 없이 사내 팀이 맡고 담당 마케터 한 명이 끝까지 챙깁니다.',
    url: 'https://wiztheplanning.com',
    siteName: '위즈더플래닝',
    images: [
      {
        url: `/og-home.jpg?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: '위즈더플래닝: 나눠 맡기던 마케팅, 이제 한 팀이 직접',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '위즈더플래닝 | 검색·광고·블로그·인플루언서·촬영까지 한 팀이 직접 하는 마케팅 회사',
    description: '나눠 맡기던 마케팅을 한 팀이 직접 합니다. 검색 최적화(GEO·SEO·네이버 플레이스), 네이버·메타·구글 광고, 블로그·체험단, 인플루언서, 촬영·숏폼, 샤오홍슈·LINE, 홈페이지 제작, 엘리베이터TV까지 재하청 없이 사내 팀이 맡고 담당 마케터 한 명이 끝까지 챙깁니다.',
    images: [`/og-home.jpg?v=${timestamp}`],
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
      alternateName: ['WIZ THE PLANNING', 'WizThePlanning', '위즈더플래닝 마케팅'],
      url: 'https://wiztheplanning.com',
      logo: 'https://wiztheplanning.com/thumbnail.png',
      image: 'https://wiztheplanning.com/thumbnail.png',
      slogan: '나눠 맡기던 마케팅, 이제 한 팀이 직접',
      description:
        '위즈더플래닝은 검색 최적화(GEO·SEO·네이버 플레이스), 퍼포먼스 광고(네이버·메타·구글·유튜브·카카오·당근), 블로그·체험단·기자단 바이럴, 인플루언서, 촬영·숏폼 콘텐츠, 샤오홍슈·도우인·LINE 글로벌 마케팅, 홈페이지 제작, 엘리베이터TV 같은 오프라인 미디어까지 재하청 없이 사내 팀이 직접 실행하는 마케팅 회사입니다. 손님 한 분에 담당 마케터 한 명이 붙어 진단·제안·실행·주간 리포트·개선을 끝까지 맡습니다.',
      knowsAbout: [
        'AI 검색 최적화(GEO)',
        'Generative Engine Optimization',
        'SEO(검색엔진 최적화)',
        '네이버 플레이스 마케팅',
        '네이버 검색광고(SA·DA)',
        '메타 광고(인스타그램·페이스북) 운영',
        '구글·유튜브 광고 운영',
        '카카오 모먼트·당근 광고',
        '블로그 상위노출·체험단·기자단',
        '인플루언서 마케팅·공동구매',
        '숏폼·바이럴 영상 제작',
        '샤오홍슈·도우인·LINE 마케팅',
        '홈페이지 제작',
        '엘리베이터TV(포커스미디어) 광고',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '마케팅 서비스',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '검색 최적화', url: 'https://wiztheplanning.com/services/search', description: 'AI가 추천할 때, 지도에서 고를 때 우리 업체가 먼저 나오게 합니다. GEO·SEO·네이버 플레이스 광고·순위 관리·지도 앱 등록·리뷰 관리.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '퍼포먼스', url: 'https://wiztheplanning.com/services/performance', description: '네이버·메타·구글·당근 광고를 담당 마케터가 직접 운영합니다. 네이버 SA·DA·메타·구글·유튜브·카카오 모먼트·당근·타겟핏 문자 광고.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '바이럴', url: 'https://wiztheplanning.com/services/viral', description: '블로그·체험단·기자단·언론 기사로 검색 맨 위를 잡습니다. 커뮤니티 바이럴·보도자료·비방 리뷰 게시중단 요청까지.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '인플루언서', url: 'https://wiztheplanning.com/services/influencer', description: '업종에 맞는 계정이 우리 업체를 소개합니다. 유튜버 섭외·쇼츠·릴스·틱톡·공동구매·릴스 체험단.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '콘텐츠·미디어', url: 'https://wiztheplanning.com/services/content', description: '촬영팀이 가서 찍고 자막·음악까지 넣어 릴스·쇼츠로 올립니다. 바이럴 영상·숏폼·미디어 PPL·셀러·모델 섭외·SNS 운영·사진 촬영.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '글로벌', url: 'https://wiztheplanning.com/services/global', description: '한국에 오기 전에 손님이 보는 샤오홍슈·도우인·LINE에 업체를 올립니다. 왕홍 공동구매·일본 인스타 인플루언서·LINE 공식계정·LINE 광고.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '홈페이지 제작', url: 'https://wiztheplanning.com/services/homepage', description: 'AI와 검색이 읽기 쉬운 홈페이지를 새로 만들거나 지금 홈페이지 속 정보만 고칩니다. 매달 관리·글 올리기.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '오프라인 미디어', url: 'https://wiztheplanning.com/services/offline', description: '엘리베이터TV(포커스미디어 공식 총판)·택배차·극장·카카오T·인쇄물·배달앱 관리까지 동네 손님 눈에 띄는 곳에 광고합니다.' } },
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
