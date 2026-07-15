"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  Stethoscope,
  MessageSquareText,
  ShieldAlert,
} from "lucide-react"

const fadeUp = {
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
    desc: "친절·설명·대기시간 같은 실제 방문 경험이 담긴 리뷰와 후기 블로그를 근거로 병원을 추천합니다.",
  },
  {
    icon: Search,
    label: "ChatGPT · 구글 AI",
    title: "홈페이지 + 의료 디렉토리를 봅니다",
    desc: "병원 공식 홈페이지와 모두닥 같은 의료 디렉토리에 정리된 정보를 근거로 답변을 만듭니다.",
  },
  {
    icon: Stethoscope,
    label: "공통",
    title: "오정보가 있으면 틀리게 안내합니다",
    desc: "전화번호·위치·진료시간이 채널마다 다르거나 틀리면, AI는 환자에게 잘못된 정보를 그대로 안내합니다.",
  },
]

export default function WhyMedical() {
  return (
    <section id="why-medical" className="w-full bg-white py-24 md:py-28">
      <div className="container px-4 md:px-6">
        {/* 헤드라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
            WHY MEDICAL
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            AI는 병원을 추천할 때
            <br />
            <span className="text-emerald-600">어디를 보나요?</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            AI 엔진마다 병원을 판단하는 근거가 다릅니다. 어디를 보는지 알아야, 우리 병원이
            추천받도록 준비할 수 있습니다.
          </p>
        </motion.div>

        {/* 3개 카드 */}
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

        {/* 의료광고법 콜아웃 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 max-w-4xl rounded-3xl border border-emerald-500/30 bg-[#070b14] px-7 py-9 md:px-10"
        >
          <div className="flex items-start gap-4">
            <div className="hidden shrink-0 rounded-xl bg-[#00e5a0]/15 p-3 text-[#00e5a0] sm:block">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
                병원 GEO는 의료광고법과 정면으로 부딪힐 수 있습니다
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                치료후기·전후사진·&lsquo;무통&rsquo; 같은 표현은 AI에 인용은 될지 몰라도{" "}
                <span className="font-semibold text-slate-200">위반이 됩니다.</span>{" "}
                위즈더플래닝은 의료광고 기준을 반영해 진단합니다.
              </p>
              <Link
                href="/guide/medical-geo"
                className="mt-5 inline-block font-bold text-emerald-600 underline-offset-4 hover:underline"
              >
                병원·의원 GEO 가이드 자세히 보기 →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
