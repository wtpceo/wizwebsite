import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import BlueprintHero from "@/components/home/BlueprintHero"
import BlueprintChapters from "@/components/home/BlueprintChapters"
import { BlueprintWhy, BlueprintMedia, BlueprintRecords, BlueprintContact } from "@/components/home/BlueprintSections"
import BlueprintReveal from "@/components/home/BlueprintReveal"
import s from "@/components/home/blueprint.module.css"

// 홈(2026-11 리브랜딩, A안 색 챕터). 대표 결정 2026-11-03 밤: 메인의 중심은 철학이 아니라 '마케팅 설계도'다.
// 시안: 02.비즈니스/27.자사브랜딩/09_전체리브랜딩_2026-11/시안_개발세션_2026-11-03/A.html, 글: lib/home-blueprint.ts.
// 순서: 첫 화면(민트, 지도) → 설계도 다섯 챕터 → 이어서 진행하는 이유 → 다루는 광고 → 일한 기록 → 광고 상담 → 바닥.
// 메타데이터는 (ko)/layout.tsx의 것을 쓴다. 회사 소개(철학)는 '회사' 메뉴(/business)로 뺐다
export default function Home() {
  return (
    <>
      <Header tone="mint" />
      <main className={s.home}>
        <BlueprintHero />
        <BlueprintChapters />
        <BlueprintWhy />
        <BlueprintMedia />
        <BlueprintRecords />
        <BlueprintContact />
        <BlueprintReveal />
      </main>
      <Footer tone="dark" />
    </>
  )
}
