import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import HomeWall from "@/components/home/HomeWall"
import HomeDepts from "@/components/home/HomeDepts"
import HomeStages from "@/components/home/HomeStages"
import HomeAds from "@/components/home/HomeAds"
import HomeShelf from "@/components/home/HomeShelf"
import HomeStats from "@/components/home/HomeStats"
import HomeContact from "@/components/home/HomeContact"
import HomeReveal from "@/components/home/HomeReveal"
import s from "@/components/home/home.module.css"

// 홈(2026-11 리브랜딩). 바탕은 09_전체리브랜딩_2026-11/프로토타입/index.html, 문구는 홈메인_원고_1차.md.
// 섹션 순서는 프로토타입 그대로이되, 2518·2519 소개 판(HomeIntro)은 대표 지시(2026-11-03)로 뺐다. 메타데이터는 (ko)/layout.tsx의 것을 쓴다.
// 카피 기준: 비유·격언 없이 확인된 사실만 평서문으로 쓴다
// 예전 홈 섹션(components/agency/*, components/sections/*)은 다른 페이지가 써서 지우지 않았다
export default function Home() {
  return (
    <>
      <Header />
      <main className={s.home}>
        <HomeWall />
        <HomeDepts />
        <HomeStages />
        <HomeAds />
        <HomeShelf />
        <HomeStats />
        <HomeContact />
        <HomeReveal />
      </main>
      <Footer />
    </>
  )
}
