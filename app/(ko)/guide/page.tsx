import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import GuideGrid from "@/components/guide/GuideGrid"
import s from "@/components/guide/guide.module.css"

export const metadata: Metadata = {
  title: "마케팅 가이드: AI 검색 최적화·플레이스 실전 노하우",
  description:
    "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드. 위즈더플래닝이 7,000여 광고주와 쌓은 노하우를 사장님 눈높이로 정리했습니다.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "마케팅 가이드 | 위즈더플래닝",
    description:
      "AI 검색 최적화(GEO), 네이버 플레이스, 업종별 마케팅 실전 가이드 모음.",
    url: "https://wiztheplanning.com/guide",
  },
}

// 2026-11 리브랜딩: 네이비 머리·그러데이션을 걷고 흰 바탕 큰 제목 + 면 막대 목록으로. 스타일은 guide.module.css
export default function GuidePage() {
  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <header className={s.listHead}>
          <h1 className={s.listTitle}>마케팅 가이드</h1>
          <p className={s.listLede}>
            AI 검색 최적화(GEO)부터 네이버 플레이스, 업종별 전략까지, 7,000여 광고주와 쌓은 노하우를 사장님 눈높이로
            정리했습니다.
          </p>
        </header>

        {/* 상단 홍보 배너(PromoBanner)는 2026-11-03 기업 전용 전환으로 끈다 */}

        <GuideGrid />

        <p className={s.listNote}>
          새 가이드가 매주 추가됩니다. 궁금한 주제가 있다면{" "}
          <Link href="/#contact" className={s.textLink}>
            문의하기
          </Link>
          로 알려주세요.
        </p>
      </main>
      <div className={s.footGap} />
      <Footer />
    </div>
  )
}
