import type { Metadata } from "next"
import ShortformHome from "@/components/shortform/ShortformHome"
import { OG_TIMESTAMP as timestamp } from "@/lib/site-metadata"

// 2026-11-04 홈 리뉴얼: 숏폼 한 편처럼 넘겨 보는 46컷 홈(기획 intent/plan-회사홈페이지-리뉴얼-2026-11-04.md).
// 예전 홈 구역(숫자 띠·사례·후기·FAQ·가격)은 이 쪽에서 빠졌다 — 화면에 없는 FAQ 구조화 데이터도 같이 뺐다.
const TITLE = "위즈더플래닝 | 검색·광고·블로그·인플루언서·촬영까지 한 팀이 직접 하는 마케팅 회사"
const DESC =
  "나눠 맡기던 마케팅을 한 팀이 직접 합니다. AI·지도 검색 최적화, 네이버·메타·구글 광고, 블로그·체험단, 인플루언서, 촬영·숏폼, 샤오홍슈·LINE, 홈페이지 제작, 엘리베이터TV까지 재하청 없이 사내 팀이 맡고 담당 마케터 한 명이 끝까지 챙깁니다."

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
    images: [{ url: `/og-home.jpg?v=${timestamp}`, width: 1200, height: 630, alt: "나눠 맡기던 마케팅, 이제 한 팀이 직접 — 위즈더플래닝" }],
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
