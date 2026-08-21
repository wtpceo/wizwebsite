"use client"

import { motion, type Variants } from "framer-motion"
import { Instagram, Clapperboard, UtensilsCrossed, BadgeCheck, Check } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

// 맛집타운 피드 그리드 — 자체 촬영 음식 사진 재활용
const FEED = [
  { src: "/portfolio/DSC_5278.jpg", alt: "맛집타운 피드: 뚝배기 갈비찜 촬영 컷" },
  { src: "/portfolio/DSC_3462.jpg", alt: "맛집타운 피드: 곱창 모둠 플레이팅 촬영 컷" },
  { src: "/portfolio/DSC_5390.jpg", alt: "맛집타운 피드: 숯불 닭갈비 촬영 컷" },
  { src: "/portfolio/DSC_3467.jpg", alt: "맛집타운 피드: 배달 한상 세트 촬영 컷" },
  { src: "/portfolio/DSC_3443.jpg", alt: "맛집타운 피드: 매콤 곱창볶음 촬영 컷" },
  { src: "/portfolio/DSC_5399.jpg", alt: "맛집타운 피드: 고깃집 한상차림 촬영 컷" },
]

const POINTS = [
  "우리 채널에서 먼저 테스트하고, 통한 공식만 광고주에게 적용합니다",
  "어떤 앵글·자막·길이가 반응하는지 데이터로 알고 있습니다",
  "촬영부터 편집·업로드까지 전 과정을 자체 팀이 운영합니다",
]

export default function MatzipTown() {
  return (
    <section id="matziptown" className="w-full bg-white py-24 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 좌측: 카피 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
              OUR OWN CHANNEL
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              직접 운영해 봤으니,
              <br />
              뭐가 통하는지 압니다
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              위즈더플래닝이 직접 운영하는 맛집 콘텐츠 채널{" "}
              <strong className="text-gray-900">&lsquo;맛집타운&rsquo;</strong>. 남의 채널을
              대행만 하는 게 아니라, 우리 채널을 직접 키우며 검증한 콘텐츠 공식을 광고주 매장에
              그대로 적용합니다.
            </p>

            <ul className="mt-7 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed md:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 md:mt-1" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.instagram.com/matzip_town"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#070b14] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#0b1220]"
            >
              <Instagram className="h-5 w-5 text-[#00e5a0]" />
              인스타그램에서 보기
            </a>
          </motion.div>

          {/* 우측: 인스타그램 프로필 카드 목업 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.12 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/[0.06]">
              {/* 프로필 헤더 */}
              <div className="flex items-center gap-4 px-5 py-5 sm:px-6">
                {/* 그라데이션 아바타 */}
                <div className="rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[3px]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#070b14]">
                    <UtensilsCrossed className="h-7 w-7 text-[#00e5a0]" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 font-bold text-gray-900">
                    @matzip_town
                    <BadgeCheck className="h-4 w-4 shrink-0 text-sky-500" />
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500">맛집 콘텐츠 채널</p>
                  <p className="mt-0.5 text-xs text-gray-400">by 위즈더플래닝 자체 제작팀</p>
                </div>
              </div>

              {/* 텍스트 칩 */}
              <div className="flex flex-wrap gap-2 px-5 pb-4 sm:px-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  <Clapperboard className="h-3 w-3" />
                  릴스·맛집 콘텐츠
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  직접 촬영·편집
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  자체 운영 채널
                </span>
              </div>

              {/* 3x2 피드 그리드 */}
              <div className="grid grid-cols-3 gap-0.5 border-t border-gray-100">
                {FEED.map((item) => (
                  <div key={item.src} className="group relative aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[#070b14]/0 transition-colors duration-500 group-hover:bg-[#070b14]/25" />
                  </div>
                ))}
              </div>

              {/* 하단 캡션 */}
              <p className="px-5 py-4 text-center text-xs leading-relaxed text-gray-400 sm:px-6">
                피드의 모든 사진은 위즈더플래닝 제작팀이 매장에서 직접 촬영했습니다
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
