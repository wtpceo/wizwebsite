import type { Metadata } from "next"
import Link from "next/link"
import GuideGrid from "@/components/guide/GuideGrid"
import { DocShell } from "@/components/shortform/DocParts"
import InsightHero from "@/components/shortform/InsightHero"
import { coverFor } from "@/lib/guide-cover"
import { GUIDE_ARTICLES } from "@/lib/guide-articles"

export const metadata: Metadata = {
  title: "마케팅 가이드: AI 검색 최적화·플레이스 실전 노하우",
  description:
    "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드. 위즈더플래닝이 쌓아 온 노하우를 사장님 눈높이로 정리했습니다.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "마케팅 가이드 | 위즈더플래닝",
    description:
      "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드 모음.",
    url: "https://wiztheplanning.com/guide",
  },
}

// 2026-11-05 사장님 「인사이트도 새 디자인으로」 → 11-08 대표 「인사이트 메뉴도 서비스 페이지와 디자인 통일」: 사진 벽 첫 화면 + 새 카드
export default function GuidePage() {
  const covers = GUIDE_ARTICLES.slice(0, 24).map((g) => coverFor(g.href))
  return (
    <DocShell>
      <div className="gx ix vx cx ig">
        <InsightHero
          label="마케팅 칼럼"
          kw="마케팅 칼럼"
          text={"저희가 직접 재고\n쓴 글입니다"}
          mark="직접 재고"
          era={`인사이트 리포트 ${GUIDE_ARTICLES.length}편`}
          lead={
            <>
              ChatGPT·네이버 AI·구글에 브랜드가 어떻게 나오는지 <span className="nw">직접 물어보고 잰 기록,</span>
              <br />
              업체명을 가린 실제 사례, <span className="nw">업종별로 먼저 할 일을 올립니다.</span>
            </>
          }
          imgs={covers}
          cue={{ href: "#list", label: "글 목록" }}
        />

        {/* 상단 홍보 배너(PromoBanner)는 2026-11-03 기업 전용 전환으로 끈다 */}
        <GuideGrid />

        <p className="gd-note">
          궁금한 주제가 있으면 <Link href="/contact">문의</Link>에 적어 주세요. 다음 글로 재서 올리겠습니다.
        </p>
      </div>
    </DocShell>
  )
}
