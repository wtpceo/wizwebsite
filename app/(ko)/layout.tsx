import '../globals.css'
import type { Metadata, Viewport } from 'next'
import RootShell from '@/components/layout/RootShell'
import { BASE_METADATA, OG_TIMESTAMP as timestamp } from '@/lib/site-metadata'

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: {
    default: '광고·마케팅 대행사 위즈더플래닝 | 브랜드를 분석한 제안서부터 받아 보세요',
    template: '%s | 위즈더플래닝',
  },
  description: '광고·마케팅 대행사 위즈더플래닝입니다. 2016년부터 광고주와 일했고 지금 어디가 비어 있는지 먼저 분석해 제안서로 보내 드립니다. 캠페인 기획부터 인플루언서 섭외·촬영·광고·SEO·GEO·홈페이지까지 매체마다 전담 부서가 한 설계로 맡습니다.',
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
    '마케팅 대행사',
    '위즈더플래닝',
  ],
  // alternates(canonical·hreflang)는 여기 두지 않는다. 레이아웃에 두면 자기 것을 안 적은 쪽(404 등)에 홈 주소가 딸려 나간다. 각 page 가 적는다.
  openGraph: {
    title: '광고·마케팅 대행사 위즈더플래닝 | 브랜드를 분석한 제안서부터 받아 보세요',
    description: '광고·마케팅 대행사 위즈더플래닝입니다. 2016년부터 광고주와 일했고 지금 어디가 비어 있는지 먼저 분석해 제안서로 보내 드립니다. 캠페인 기획부터 인플루언서 섭외·촬영·광고·SEO·GEO·홈페이지까지 매체마다 전담 부서가 한 설계로 맡습니다.',
    url: 'https://wiztheplanning.com',
    siteName: '위즈더플래닝',
    images: [
      {
        url: `/og-home.jpg?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: '광고비를 쓰기 전에 새는 곳부터 찾습니다. 위즈더플래닝',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '광고·마케팅 대행사 위즈더플래닝 | 브랜드를 분석한 제안서부터 받아 보세요',
    description: '광고·마케팅 대행사 위즈더플래닝입니다. 2016년부터 광고주와 일했고 지금 어디가 비어 있는지 먼저 분석해 제안서로 보내 드립니다. 캠페인 기획부터 인플루언서 섭외·촬영·광고·SEO·GEO·홈페이지까지 매체마다 전담 부서가 한 설계로 맡습니다.',
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
      // 11-10: 옛 공유 이미지(thumbnail.png, 3MB) 대신 새 심볼 아이콘과 홈 표지
      logo: 'https://wiztheplanning.com/icon.png',
      image: 'https://wiztheplanning.com/og-home.jpg',
      // 11-11 대표 「맡긴 곳이 직접 합니다 카피 너무 구려」: Gemini 4 Carbon 이 다시 쓴 문구(공유 이미지 og-home.jpg 와 같은 문장)
      slogan: '광고비를 쓰기 전에 새는 곳부터 찾습니다',
      description:
        '위즈더플래닝은 AI 검색 최적화(GEO·SEO·네이버 플레이스), 퍼포먼스 광고(네이버·메타·구글·유튜브·카카오·당근), 바이럴·평판 관리, 인플루언서·MCN, 콘텐츠 프로덕션, 샤오홍슈·도우인·LINE 글로벌 마케팅, 웹사이트 구축, 택배차량·극장 같은 오프라인 미디어까지 재위탁 없이 자체 전문팀이 직접 수행하는 IMC 통합 마케팅 에이전시입니다. 고객사마다 전담 AE를 배정해 진단·전략·실행·주간 리포트·최적화를 맡습니다.',
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
        '인플루언서 마케팅·PPL',
        '숏폼·바이럴 영상 제작',
        '샤오홍슈·도우인·LINE 마케팅',
        '홈페이지 제작',
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI 검색 최적화 (GEO)', url: 'https://wiztheplanning.com/services/search', description: '생성형 AI와 지도 검색에서 브랜드가 정확히 언급되도록 정보 구조를 설계하고 매주 측정합니다. GEO·SEO·네이버 플레이스 광고·순위 관리·멀티 지도 플랫폼·리뷰 관리.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '퍼포먼스 광고', url: 'https://wiztheplanning.com/services/performance', description: '주요 매체를 전담 AE가 직접 운영합니다. 네이버 검색광고·디스플레이광고·메타·구글·유튜브·카카오 모먼트·당근·타겟핏 문자 광고.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '바이럴·평판 관리', url: 'https://wiztheplanning.com/services/viral', description: '검색 결과 첫 화면을 설계합니다. 블로그 상위노출·블로그 체험단·기자단·커뮤니티 바이럴·언론 보도자료 배포·온라인 평판 관리.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '인플루언서 · 유튜브 · 인스타그램 · 틱톡 · PPL 마케팅', url: 'https://wiztheplanning.com/services/influencer', description: '타깃이 신뢰하는 크리에이터를 통해 브랜드를 알립니다. 유튜브 크리에이터 캐스팅·숏폼 콘텐츠·PPL·릴스 체험단.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '콘텐츠 프로덕션', url: 'https://wiztheplanning.com/services/content', description: '기획·촬영·편집·배포를 자체 팀이 수행합니다. 브랜디드 바이럴 영상·숏폼 제작·방송·드라마 PPL·모델 캐스팅·SNS 채널 운영·제품·공간 포토그래피.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '글로벌 마케팅 (중국·일본)', url: 'https://wiztheplanning.com/services/global', description: '현지 플랫폼에서 방한 소비자에게 브랜드를 알립니다. 샤오홍슈·도우인·콰이쇼우·따중디엔핑·왕홍 라이브커머스·일본 인스타그램 인플루언서·LINE 공식계정·LINE 광고.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '웹사이트 구축', url: 'https://wiztheplanning.com/services/homepage', description: '사람도, AI도 정확히 읽는 웹사이트를 신규 구축하거나 기존 사이트의 정보를 고도화합니다. 월간 유지관리·FAQ·콘텐츠 발행.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '오프라인 미디어', url: 'https://wiztheplanning.com/services/offline', description: '택배차량·극장·카카오T·인쇄 매체·배달앱 운영 관리까지 생활 동선 위에 집행합니다.' } },
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

// 휴대폰 브라우저 주소창 색. 사이트 머리글과 같은 남색(11-10)
export const viewport: Viewport = { themeColor: "#0A1A33" }

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
