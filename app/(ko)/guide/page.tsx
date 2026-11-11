import type { Metadata } from "next"
import Link from "next/link"
import GuideGrid from "@/components/guide/GuideGrid"
import { DocShell } from "@/components/shortform/DocParts"
import InsightHero from "@/components/shortform/InsightHero"
import { coverFor } from "@/lib/guide-cover"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"
import { hreflangFor } from "@/lib/i18n/config"
import { share } from "@/lib/share-meta"

export const metadata: Metadata = share({
  title: "마케팅 가이드: AI 검색 최적화·플레이스 실전 노하우",
  description:
    "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드. 위즈더플래닝이 축적한 실측 데이터와 캠페인 운영 노하우를 정리했습니다.",
  alternates: { canonical: "/guide", languages: hreflangFor("/guide") },
  openGraph: {
    // 11-10 SEO 점검: 공유 미리보기 그림이 비어 있어 홈과 같은 표지를 쓴다
    images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "위즈더플래닝" }],
    title: "마케팅 가이드 | 위즈더플래닝",
    description:
      "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드 모음.",
    url: "https://wiztheplanning.com/guide",
  },
})

// 2026-11-05 사장님 「인사이트도 새 디자인으로」 → 11-08 대표 「인사이트 메뉴도 서비스 페이지와 디자인 통일」: 사진 벽 첫 화면 + 새 카드
export default function GuidePage() {
  const covers = GUIDE_ARTICLES.slice(0, 24).map((g) => coverFor(g.href))
  return (
    <DocShell>
      <div className="gx ix vx cx ig">
        <InsightHero
          label="마케팅 칼럼"
          kw="마케팅 칼럼"
          text={"직접 측정하고 검증한\n실전 마케팅 기록"}
          mark="직접 측정하고"
          era={`인사이트 리포트 ${GUIDE_ARTICLES.length}편`}
          lead={
            <>
              ChatGPT·네이버 AI·구글에서 브랜드가 인용되는 현황을 <span className="nw">직접 측정한 데이터와</span>
              <br />
              익명 처리한 실제 캠페인 사례, <span className="nw">업종별 실행 우선순위를 다룹니다.</span>
            </>
          }
          imgs={covers}
          cue={{ href: "#list", label: "글 목록" }}
        />

        {/* 상단 홍보 배너(PromoBanner)는 2026-11-03 기업 전용 전환으로 끈다 */}
        <GuideGrid />

        <p className="gd-note">
          다루어 주기를 희망하는 주제가 있다면 <Link href="/contact">문의하기</Link>로 남겨 주세요. 실측 데이터를 바탕으로 다음 칼럼에서 다루겠습니다.
        </p>
      </div>
    </DocShell>
  )
}
