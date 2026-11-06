import type { Metadata } from "next"
import ShortformHome from "@/components/shortform/ShortformHome"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 2026-11-04 홈 리뉴얼: 숏폼 한 편처럼 넘겨 보는 46컷 홈(기획 intent/plan-회사홈페이지-리뉴얼-2026-11-04.md).
// 예전 홈 구역(숫자 띠·사례·후기·FAQ·가격)은 이 쪽에서 빠졌다 — 화면에 없는 FAQ 구조화 데이터도 같이 뺐다.
const TITLE = "위즈더플래닝 | IMC 통합 마케팅 에이전시: GEO·퍼포먼스·인플루언서·콘텐츠"
const DESC =
  "퍼포먼스 광고, AI 검색 최적화(GEO), 인플루언서·MCN, 콘텐츠 제작, 오프라인 미디어까지. 인하우스 전문팀이 전략 수립부터 성과 리포트까지 직접 수행하는 통합 마케팅 파트너, 위즈더플래닝."

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
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: "맡긴 곳이, 직접 합니다. 위즈더플래닝" }],
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

export default function Home() {
  return <ShortformHome />
}
