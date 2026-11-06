import type { Metadata } from "next"
import ShortformHome from "@/components/shortform/ShortformHome"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 2026-11-04 홈 리뉴얼: 숏폼 한 편처럼 넘겨 보는 46컷 홈(기획 intent/plan-회사홈페이지-리뉴얼-2026-11-04.md).
// 예전 홈 구역(숫자 띠·사례·후기·FAQ·가격)은 이 쪽에서 빠졌다 — 화면에 없는 FAQ 구조화 데이터도 같이 뺐다.
// 2026-11-06 저녁 대표 뜻(docs/메시지설계-2026-11-06-대표뜻.md): 진단으로 시작해 성과로 보고하는 IMC 회사
const TITLE = "위즈더플래닝 | 진단으로 시작해 성과로 보고하는 IMC 마케팅 회사"
const DESC =
  "문의가 오면 먼저 홈페이지·검색·AI 노출·채널 상태를 진단해 퍼널의 빈 곳을 찾습니다. 인플루언서·유튜버 섭외, 퍼포먼스 광고, SEO·GEO, 촬영, 개발까지 자체 팀이 직접 실행하고 전담 AE가 찾아뵙고 성과로 보고합니다."

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
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: "진단으로 시작해, 성과로 보고합니다. 위즈더플래닝" }],
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
