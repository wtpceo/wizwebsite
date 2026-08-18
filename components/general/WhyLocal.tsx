"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import {
  Search,
  MapPin,
  MessageSquareText,
  Wallet,
} from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const SOURCES = [
  {
    icon: MessageSquareText,
    label: "네이버 AI",
    title: "플레이스 리뷰·후기 블로그를 봅니다",
    desc: "맛·분위기·주차·재방문 같은 실제 방문 경험이 담긴 리뷰와 후기 글을 근거로 가게를 추천합니다.",
  },
  {
    icon: Search,
    label: "ChatGPT · 구글 AI",
    title: "홈페이지 + 업종 디렉토리를 봅니다",
    desc: "가게 공식 홈페이지와 지도·예약·업종별 디렉토리에 정리된 정보를 근거로 답변을 만듭니다.",
  },
  {
    icon: MapPin,
    label: "공통",
    title: "정보가 어긋나면 틀리게 안내합니다",
    desc: "영업시간·전화번호·위치가 채널마다 다르면, AI는 손님에게 잘못된 정보를 그대로 안내합니다.",
  },
]

export default function WhyLocal() {
  return (
    <section id="why-local" className="w-full bg-white py-24 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
            WHY NOW
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            AI는 가게를 추천할 때
            <br />
            <span className="text-emerald-600">어디를 보나요?</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            AI 엔진마다 가게를 판단하는 근거가 다릅니다.
            <br />
            어디를 보는지 알아야, 우리 가게가 추천받도록 준비할 수 있습니다.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {SOURCES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]"
            >
              <div className="w-fit rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-bold tracking-[0.15em] text-emerald-600">
                {s.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 콜아웃 — 이 페이지의 축: 플랫폼 의존 대신 직접 유입
            ⚠️ 플랫폼 실명(배민·야놀자 등)을 쓰지 않는다. 근거 없는 비교광고 리스크 +
               자사가 해당 플랫폼 광고도 대행할 수 있다 (_shared/05_COPY_RULES.md 안전장치) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 max-w-4xl rounded-3xl border border-emerald-500/30 bg-[#070b14] px-7 py-9 md:px-10"
        >
          <div className="flex items-start gap-4">
            <div className="hidden shrink-0 rounded-xl bg-[#00e5a0]/15 p-3 text-[#00e5a0] sm:block">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
                예약도 주문도 앱으로만 들어온다면
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                손님이 늘어도 수수료를 빼면 남는 게 크지 않습니다. AI 답변과 검색에 쌓아둔
                것은{" "}
                <span className="font-semibold text-slate-200">
                  앱을 거치지 않고 손님이 직접 찾아오는 길
                </span>
                이 됩니다. 광고를 끈 뒤에도 남는 유입입니다.
              </p>
              <Link
                href="/guide"
                className="mt-5 inline-block font-bold text-emerald-600 underline-offset-4 hover:underline"
              >
                AI 검색 최적화 가이드 보기 →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
