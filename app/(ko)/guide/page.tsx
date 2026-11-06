import type { Metadata } from "next"
import Link from "next/link"
import GuideGrid from "@/components/guide/GuideGrid"
import { DocShell, Crumb } from "@/components/shortform/DocParts"
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

// 2026-11-05 사장님 「인사이트도 새 디자인으로」 — 제목·검색 설명·주소는 그대로, 쪽 모양만 회사 홈 새 디자인으로
export default function GuidePage() {
  return (
    <DocShell>
      <section className="dp-hero gd-hero" aria-label="마케팅 칼럼">
        <div className="dp-w gd-hero-in">
          <Crumb items={[{ name: "홈", href: "/" }, { name: "마케팅 칼럼" }]} />
          <p className="dp-no">마케팅 칼럼 · {GUIDE_ARTICLES.length}편</p>
          <h1>저희가 직접 재고 쓴 글입니다.</h1>
          <p className="dp-lead">
            ChatGPT·네이버 AI·구글에 우리 브랜드가 어떻게 나오는지 직접 물어보고 잰 기록, 업체명을 가린 실제 사례, 업종별로 먼저 할 일을 올립니다.
          </p>
        </div>
      </section>

      {/* 상단 홍보 배너(PromoBanner)는 2026-11-03 기업 전용 전환으로 끈다 */}

      <GuideGrid />

      <p className="gd-note">
        궁금한 주제가 있으면 <Link href="/contact">무료 상담 신청</Link>에 적어 주세요.
      </p>
    </DocShell>
  )
}
