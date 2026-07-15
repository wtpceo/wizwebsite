"use client"

import { motion } from "framer-motion"
import { Camera, Film, MonitorSmartphone } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const CAPABILITIES = [
  {
    icon: Camera,
    title: "전문 장비·조명 촬영",
    desc: "드라마·유명 채널 콘텐츠를 찍어온 촬영감독 출신 팀이 시네마 카메라와 전문 조명으로 브랜드의 결을 담아냅니다.",
  },
  {
    icon: Film,
    title: "시네마틱 편집",
    desc: "촬영한 사람이 편집까지 책임집니다. 컷 편집·컬러·사운드까지, 광고가 아니라 작품처럼 다듬습니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "채널 맞춤 포맷",
    desc: "릴스·쇼츠·플레이스·블로그 — 같은 촬영본도 채널의 문법에 맞게 다시 설계해 발행합니다.",
  },
]

export default function ProductionTeam() {
  return (
    <section id="team" className="relative w-full overflow-hidden bg-[#070b14] py-24 md:py-28">
      {/* 배경 레이어 */}
      <div className="geo-grid-bg absolute inset-0" />
      <div className="absolute -left-24 top-1/3 h-[360px] w-[520px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-[280px] w-[420px] rounded-full bg-sky-500/[0.05] blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 좌측: 카피 + 불릿 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
              IN-HOUSE PRODUCTION
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] tracking-tight text-white md:text-5xl">
              외주가 아닙니다.
              <br />
              전부 자체 제작팀입니다.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
              위즈더플래닝의 촬영팀은 드라마·유명 채널 콘텐츠를 만들어온 촬영감독 출신으로
              구성되어 있습니다. 기획 → 촬영 → 편집 → 발행이 한 팀 안에서 끝나기 때문에,
              <strong className="font-semibold text-slate-200"> 빠르면서도 퀄리티가 일정합니다.</strong>
            </p>

            <div className="mt-8 space-y-4">
              {CAPABILITIES.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-[#00e5a0]/30 hover:bg-white/[0.07]"
                >
                  <div className="shrink-0 rounded-xl bg-[#00e5a0]/15 p-2.5 text-[#00e5a0]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 우측: 스튜디오 이미지 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="geo-glow relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/images/agency/production-team.jpg"
                alt="위즈더플래닝 자체 콘텐츠 제작팀 스튜디오"
                className="aspect-video w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070b14]/90 to-transparent px-6 pb-5 pt-16">
                <p className="text-sm font-semibold text-white">
                  촬영부터 편집까지, 전 과정 인하우스
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  드라마·유명 채널 촬영감독 출신 제작팀
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 하단 신뢰 라인 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-8 text-center"
        >
          <p className="text-base font-semibold text-slate-300 md:text-lg">
            촬영·편집·제작 전 과정 내재화 —{" "}
            <span className="text-[#00e5a0]">외주 마진 없이, 우리 손으로 만듭니다.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
