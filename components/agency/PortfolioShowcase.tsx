"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Camera, ChevronRight } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

// 자체 제작팀이 촬영한 실제 매장 사진 — 다양한 높이로 마소너리 느낌을 냅니다
const PHOTOS = [
  {
    src: "/portfolio/DSC02970.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 1: 바 인테리어",
    h: "h-72 md:h-80",
  },
  {
    src: "/portfolio/DSC_5278.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 2: 한식 요리 클로즈업",
    h: "h-52 md:h-60",
  },
  {
    src: "/portfolio/DSC02974.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 3: LP 바 공간",
    h: "h-60 md:h-72",
  },
  {
    src: "/portfolio/DSC_2576.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 4: 순대 요리 플레이팅",
    h: "h-52 md:h-56",
  },
  {
    src: "/portfolio/DSC02980.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 5: 칵테일 제조 장면",
    h: "h-56 md:h-64",
  },
  {
    src: "/portfolio/DSC01335.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 6: 필라테스 스튜디오",
    h: "h-72 md:h-80",
  },
  {
    src: "/portfolio/DSC_5390.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 7: 닭갈비 상차림",
    h: "h-52 md:h-60",
  },
  {
    src: "/portfolio/DSC_5399.jpg",
    alt: "위즈더플래닝 매장 촬영 포트폴리오 8: 고깃집 한상차림",
    h: "h-60 md:h-64",
  },
]

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="w-full bg-[#f6f8f7] py-24 md:py-28">
      <div className="container px-4 md:px-6">
        {/* 헤드라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">PORTFOLIO</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            우리 손으로 찍고, 만들고, 띄운 것들
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            매장 사진·영상·콘텐츠: 전부 자체 제작팀의 결과물입니다.
            <br className="hidden md:block" />
            외주 없이, 촬영감독 출신 팀이 직접 매장을 찾아가 만듭니다.
          </p>
        </motion.div>

        {/* 사진 그리드 — 2행 마소너리 느낌 */}
        <div className="mx-auto mt-14 max-w-6xl columns-2 gap-4 md:columns-4 [column-fill:_balance]">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.08 }}
              className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl ${photo.h}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              {/* 잉크 오버레이 */}
              <div className="pointer-events-none absolute inset-0 bg-[#070b14]/0 transition-colors duration-500 group-hover:bg-[#070b14]/35" />
              <figcaption className="pointer-events-none absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Camera className="h-3.5 w-3.5 text-[#00e5a0]" />
                자체 제작팀 촬영
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 text-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="gap-1 bg-[#070b14] px-8 font-bold text-white transition-colors hover:bg-[#0b1220]"
            >
              포트폴리오 전체 보기
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
