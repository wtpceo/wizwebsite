import type { Metadata } from "next"
import HomeDoc from "@/components/shortform/HomeDoc"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 2026-11-04 홈 리뉴얼: 숏폼 한 편처럼 넘겨 보는 46컷 홈(기획 intent/plan-회사홈페이지-리뉴얼-2026-11-04.md).
// 예전 홈 구역(숫자 띠·사례·후기·FAQ·가격)은 이 쪽에서 빠졌다 — 화면에 없는 FAQ 구조화 데이터도 같이 뺐다.
// 2026-11-06 저녁 대표 뜻(docs/메시지설계-2026-11-06-대표뜻.md): 진단으로 시작해 성과로 보고하는 IMC 회사
// 2026-11-07 카피 개선안: 검색 결과에서 처음 보는 사람이 '무슨 회사인지' 읽을 수 있게 회사 성격을 앞에
const TITLE = "위즈더플래닝 마케팅 대행 | 당신의 브랜드를 분석한 제안서부터 받아 보세요"
const DESC =
  "IMC(통합 마케팅) 대행사 위즈더플래닝입니다. 2016년부터 광고주와 일했고, 지금 어디가 비어 있는지 먼저 분석해 제안서로 보내 드립니다. 캠페인 기획·인플루언서 섭외·촬영·광고·SEO·GEO·홈페이지까지 매체마다 전담 부서가 한 설계로 맡고, 보고는 전담 AE가 성과로 합니다."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  // 레이아웃의 alternates 를 통째로 덮으므로 hreflang 도 같이 적는다
  alternates: {
    canonical: "/",
    languages: {
      ko: "https://wiztheplanning.com/",
      en: "https://wiztheplanning.com/en/business-owners-in-korea",
      "zh-Hans": "https://wiztheplanning.com/zh",
      vi: "https://wiztheplanning.com/vi",
      "x-default": "https://wiztheplanning.com/",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://wiztheplanning.com",
    siteName: "위즈더플래닝",
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: "당신의 브랜드를 분석한 제안서부터 받아 보세요. 위즈더플래닝" }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [`/og-home.jpg?v=${timestamp}`],
  },
}

// 2026-11-08 대표 「메인을 함축해서 필요한 것만」: 45컷 숏폼 홈(ShortformHome) → 아홉 칸(HomeDoc). 옛 파일은 남겨 둠
export default function Home() {
  return <HomeDoc />
}
