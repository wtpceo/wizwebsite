"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/layout/Header"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/Footer"

const images = [
  "/portfolio/DSC09449.jpg",
  "/portfolio/DSC09338.jpg",
  "/portfolio/DSC09279.jpg",
  "/portfolio/DSC02493.jpg",
  "/portfolio/DSC_9139.jpg",
  "/portfolio/DSC_5285.jpg",
  "/portfolio/DSC_5278.jpg",
  "/portfolio/DSC08654.jpg",
  "/portfolio/DSC08306.jpg",
  "/portfolio/DSC07887.jpg",
  "/portfolio/DSC07883.jpg",
  "/portfolio/DSC07636.jpg",
  "/portfolio/DSC07630.jpg",
  "/portfolio/DSC07322.jpg",
  "/portfolio/DSC07277.jpg",
  "/portfolio/DSC07271.jpg",
  "/portfolio/DSC07269.jpg",
  "/portfolio/DSC06677.jpg",
  "/portfolio/DSC06597.jpg",
  "/portfolio/DSC06563.jpg",
  "/portfolio/DSC06539.jpg",
  "/portfolio/DSC06450.jpg",
  "/portfolio/DSC06291.jpg",
  "/portfolio/DSC06285.jpg",
  "/portfolio/DSC06282.jpg",
  "/portfolio/DSC05406.jpg",
  "/portfolio/DSC04837.JPG",
  "/portfolio/DSC04127.jpg",
  "/portfolio/DSC04124.jpg",
  "/portfolio/DSC04120.jpg",
  "/portfolio/DSC04116.jpg",
  "/portfolio/DSC03525.jpg",
  "/portfolio/DSC03469.jpg",
  "/portfolio/DSC03468.jpg",
  "/portfolio/DSC03459.jpg",
  "/portfolio/DSC03452-2.jpg",
  "/portfolio/DSC03435.jpg",
  "/portfolio/DSC03168.jpg",
  "/portfolio/DSC03101.jpg",
  "/portfolio/DSC03094.jpg",
  "/portfolio/DSC03087.jpg",
  "/portfolio/DSC03080.jpg",
  "/portfolio/DSC03074.jpg",
  "/portfolio/DSC03072.jpg",
  "/portfolio/DSC03023.jpg",
  "/portfolio/DSC03017.jpg",
  "/portfolio/DSC02980.jpg",
  "/portfolio/DSC02974.jpg",
  "/portfolio/DSC02970.jpg",
  "/portfolio/DSC02958.jpg",
  "/portfolio/DSC02957.jpg",
  "/portfolio/DSC02045.jpg",
  "/portfolio/DSC02032.jpg",
  "/portfolio/DSC01738.jpg",
  "/portfolio/DSC01707.jpg",
  "/portfolio/DSC01697.jpg",
  "/portfolio/DSC01691.jpg",
  "/portfolio/DSC01335.jpg",
  "/portfolio/DSC01329.jpg",
  "/portfolio/DSC01325.jpg",
  "/portfolio/DSC00118.jpg",
  "/portfolio/DSC00072.jpg",
  "/portfolio/DSC_9532.jpg",
  "/portfolio/DSC_9451.jpg",
  "/portfolio/DSC_9359.jpg",
  "/portfolio/DSC_9345.jpg",
  "/portfolio/DSC_9342.jpg",
  "/portfolio/DSC_5555.jpg",
  "/portfolio/DSC_5547.jpg",
  "/portfolio/DSC_5545.jpg",
  "/portfolio/DSC_5401.jpg",
  "/portfolio/DSC_5399.jpg",
  "/portfolio/DSC_5390.jpg",
  "/portfolio/DSC_3467.jpg",
  "/portfolio/DSC_3462.jpg",
  "/portfolio/DSC_3443.jpg",
  "/portfolio/DSC_3023-2.jpg",
  "/portfolio/DSC_3007.jpg",
  "/portfolio/DSC_2713.jpg",
  "/portfolio/DSC_2595.jpg",
  "/portfolio/DSC_2578.jpg",
  "/portfolio/DSC_2576.jpg",
  "/portfolio/DSC_2457.jpg",
  "/portfolio/DSC_2451.jpg",
  "/portfolio/DSC_2446.jpg"
]

// Fisher-Yates shuffle 함수
function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function PortfolioPage() {
  const shuffledImages = shuffle(images)
  const [modal, setModal] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-b from-[#f7fafc] to-white">
          <div className="container mx-auto px-4">
            {/* 상단 메시지 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <div className="inline-block px-5 py-2 rounded-full bg-[#eaf6fb] text-[#2bb3ff] font-bold text-base mb-4 shadow-sm tracking-wide">
                100% 우리가 촬영한 사진입니다
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight tracking-tight">
                포트폴리오
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                위즈더플래닝이 직접 촬영한<br className="sm:hidden" /> 실제 사진 사례를 확인해보세요.
              </p>
            </motion.div>
            {/* 사진 그리드 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            >
              {shuffledImages.map((src, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(43,179,255,0.10)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                  className="rounded-2xl overflow-hidden shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-[#2bb3ff] transition group"
                  onClick={() => setModal(src)}
                  tabIndex={0}
                  aria-label={`포트폴리오 사진 ${idx + 1} 크게 보기`}
                >
                  <Image
                    src={src}
                    alt={`포트폴리오 사진 ${idx + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 sm:h-64 transition-transform duration-300 group-hover:scale-105"
                    priority={idx < 3}
                  />
                </motion.button>
              ))}
            </motion.div>
            {/* 이미지 클릭 시 모달 */}
            <AnimatePresence>
              {modal && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setModal(null)}
                >
                  <motion.div
                    className="relative max-w-3xl w-full mx-2"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e: any) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
                      onClick={() => setModal(null)}
                      aria-label="닫기"
                    >
                      <span className="text-2xl font-bold">×</span>
                    </button>
                    <Image
                      src={modal}
                      alt="확대된 포트폴리오 사진"
                      width={1200}
                      height={800}
                      className="object-contain w-full max-h-[80vh] rounded-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        {/* 문의 받기 섹션 */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
} 