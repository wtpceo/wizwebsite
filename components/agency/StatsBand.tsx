"use client"

import { motion, type Variants } from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const STATS = [
  {
    value: "7,000+",
    label: "누적 광고주",
    desc: "2016년부터 함께한 브랜드",
    accent: true,
  },
  {
    value: "1,000+",
    label: "메타 광고 캠페인",
    desc: "인스타그램·페이스북 퍼포먼스 집행",
    accent: false,
  },
  {
    value: "1,000+",
    label: "구글 광고 운영",
    desc: "검색·PMAX 세팅과 운영",
    accent: false,
  },
  {
    value: "100%",
    label: "자체 제작",
    desc: "외주 없는 촬영·편집·제작팀",
    accent: true,
  },
]

export default function StatsBand() {
  return (
    <section
      id="track-record"
      className="w-full border-y border-white/10 bg-[#0b1220] py-14 md:py-16"
    >
      <div className="container px-4 md:px-6">
        <h2 className="sr-only">위즈더플래닝 실적</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className={
                  stat.accent
                    ? "text-4xl font-extrabold tracking-tight text-[#00e5a0] md:text-5xl"
                    : "text-4xl font-extrabold tracking-tight text-white md:text-5xl"
                }
              >
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-slate-200 md:text-base">
                {stat.label}
              </span>
              <span className="mt-1 text-xs leading-relaxed text-slate-400 md:text-sm">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
