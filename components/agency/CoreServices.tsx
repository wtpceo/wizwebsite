"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Search,
  Megaphone,
  MousePointerClick,
  Clapperboard,
  Globe,
  ChevronRight,
  ArrowRight,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const SERVICES = [
  {
    icon: Search,
    title: "SEO: 기술 검색엔진 최적화",
    desc: "검색엔진과 AI가 함께 읽는 기술 SEO. 스키마 마크업·엔터티 설계부터 SSR 렌더링 구조까지, 코드 레벨에서 최적화합니다.",
    tag: "스키마 · 엔터티 · SSR까지",
  },
  {
    icon: Megaphone,
    title: "메타 광고",
    desc: "인스타그램·페이스북 퍼포먼스 광고. 크리에이티브 테스트와 데이터 기반 운영으로 전환을 만드는 캠페인을 설계합니다.",
    tag: "캠페인 1,000+ 집행",
  },
  {
    icon: MousePointerClick,
    title: "구글 광고",
    desc: "구글 검색·PMAX 캠페인의 세팅과 운영. 키워드 설계부터 전환 추적, 예산 최적화까지 담당 마케터가 직접 관리합니다.",
    tag: "세팅 · 운영 1,000+",
  },
  {
    icon: Clapperboard,
    title: "콘텐츠 제작",
    desc: "드라마·유명 채널 촬영감독 출신으로 구성된 자체 팀이 기획부터 촬영·편집까지. 외주 없이 우리 손으로 만듭니다.",
    tag: "100% 자체 제작팀",
  },
  {
    icon: Globe,
    title: "홈페이지 제작",
    desc: "AI가 읽고 인용할 수 있는 구조로 설계하는 웹사이트. 브랜드 디자인과 검색 성능, 두 가지를 처음부터 함께 잡습니다.",
    tag: "AI가 읽는 구조로 설계",
  },
]

export default function CoreServices() {
  return (
    <section id="services" className="w-full bg-white py-24 md:py-28">
      <div className="container px-4 md:px-6">
        {/* 헤드라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">SERVICES</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            여섯 가지를,
            <br className="sm:hidden" /> 한 팀이 해냅니다
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            AI 검색 진단부터 광고 운영, 콘텐츠 제작, 웹사이트 구축까지, 
            <br className="hidden md:block" />
            흩어진 외주 대신 <strong className="text-gray-900">하나의 팀, 하나의 전략</strong>으로 움직입니다.
          </p>
        </motion.div>

        {/* 서비스 그리드 */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* GEO — 대표 서비스 (featured) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-2xl bg-[#0b1220] p-8 md:col-span-2 lg:row-span-2 lg:p-10"
          >
            <div className="geo-grid-bg absolute inset-0" />
            <div className="absolute -right-20 -top-24 h-[280px] w-[280px] rounded-full bg-[#00e5a0]/[0.08] blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#00e5a0] px-3.5 py-1 text-xs font-bold text-[#070b14]">
                  대표 서비스
                </span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
                  GEO
                </span>
              </div>

              <div className="mt-6 w-fit rounded-xl bg-[#00e5a0]/15 p-3 text-[#00e5a0]">
                <Sparkles className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                GEO: AI 검색 최적화
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 md:text-base">
                고객은 이제 검색창이 아니라 AI에게 묻습니다. ChatGPT·퍼플렉시티·네이버 AI가
                답변할 때 <strong className="font-semibold text-slate-200">우리 브랜드를 인용하고 추천하도록</strong> 데이터
                구조부터 콘텐츠까지 설계합니다. 시작은 무료 AI 검색 진단 리포트부터.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#00e5a0]/25 bg-[#00e5a0]/10 px-3 py-1 text-xs font-medium text-[#7ef0c8]">
                  무료 AI 검색 진단 리포트
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-400">
                  ChatGPT · 퍼플렉시티 · 네이버 AI
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 pt-2 min-[400px]:flex-row min-[400px]:items-center lg:mt-auto">
                <Link href="/#contact">
                  <Button className="gap-1 bg-[#00e5a0] px-6 font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                    무료 AI 검색 진단 신청
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="/guide/what-is-geo"
                  className="inline-flex items-center gap-1 px-2 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-[#00e5a0]"
                >
                  GEO가 무엇인가요? 자세히 보기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 나머지 5개 서비스 */}
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]"
            >
              <div className="w-fit rounded-xl bg-emerald-50 p-2.5 text-emerald-600 ring-1 ring-emerald-100">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              <div className="mt-4 pt-1">
                <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {s.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 신뢰 라인 */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-500"
        >
          2016년부터 7,000+ 광고주와 함께한 실행력 위에, AI 검색 시대의 전략을 더했습니다.
        </motion.p>
      </div>
    </section>
  )
}
