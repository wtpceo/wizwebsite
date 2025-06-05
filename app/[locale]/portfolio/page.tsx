"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/sections/Header"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

const images = [
  "/portfolio/DSC09449.webp",
  "/portfolio/DSC09338.webp",
  "/portfolio/DSC09279.webp",
  "/portfolio/DSC02493.webp",
  "/portfolio/DSC_9139.webp",
  "/portfolio/DSC_5285.webp",
  "/portfolio/DSC_5278.webp",
  "/portfolio/DSC08654.webp",
  "/portfolio/DSC08306.webp",
  "/portfolio/DSC07887.webp",
  "/portfolio/DSC07883.webp",
  "/portfolio/DSC07636.webp",
  "/portfolio/DSC07630.webp",
  "/portfolio/DSC07322.webp",
  "/portfolio/DSC07277.webp",
  "/portfolio/DSC07271.webp",
  "/portfolio/DSC07269.webp",
  "/portfolio/DSC06677.webp",
  "/portfolio/DSC06597.webp",
  "/portfolio/DSC06563.webp",
  "/portfolio/DSC06539.webp",
  "/portfolio/DSC06450.webp",
  "/portfolio/DSC06291.webp",
  "/portfolio/DSC06285.webp",
  "/portfolio/DSC06282.webp",
  "/portfolio/DSC05406.webp",
  "/portfolio/DSC04837.webp",
  "/portfolio/DSC04127.webp",
  "/portfolio/DSC04124.webp",
  "/portfolio/DSC04120.webp",
  "/portfolio/DSC04116.webp",
  "/portfolio/DSC03525.webp",
  "/portfolio/DSC03469.webp",
  "/portfolio/DSC03468.webp",
  "/portfolio/DSC03459.webp",
  "/portfolio/DSC03452-2.webp",
  "/portfolio/DSC03435.webp",
  "/portfolio/DSC03168.webp",
  "/portfolio/DSC03101.webp",
  "/portfolio/DSC03094.webp",
  "/portfolio/DSC03087.webp",
  "/portfolio/DSC03080.webp",
  "/portfolio/DSC03074.webp",
  "/portfolio/DSC03072.webp",
  "/portfolio/DSC03023.webp",
  "/portfolio/DSC03017.webp",
  "/portfolio/DSC02980.webp",
  "/portfolio/DSC02974.webp",
  "/portfolio/DSC02970.webp",
  "/portfolio/DSC02958.webp",
  "/portfolio/DSC02957.webp",
  "/portfolio/DSC02045.webp",
  "/portfolio/DSC02032.webp",
  "/portfolio/DSC01738.webp",
  "/portfolio/DSC01707.webp",
  "/portfolio/DSC01697.webp",
  "/portfolio/DSC01691.webp",
  "/portfolio/DSC01335.webp",
  "/portfolio/DSC01329.webp",
  "/portfolio/DSC01325.webp",
  "/portfolio/DSC00118.webp",
  "/portfolio/DSC00072.webp",
  "/portfolio/DSC_9532.webp",
  "/portfolio/DSC_9451.webp",
  "/portfolio/DSC_9359.webp",
  "/portfolio/DSC_9345.webp",
  "/portfolio/DSC_9342.webp",
  "/portfolio/DSC_5555.webp",
  "/portfolio/DSC_5547.webp",
  "/portfolio/DSC_5545.webp",
  "/portfolio/DSC_5401.webp",
  "/portfolio/DSC_5399.webp",
  "/portfolio/DSC_5390.webp",
  "/portfolio/DSC_3467.webp",
  "/portfolio/DSC_3462.webp",
  "/portfolio/DSC_3443.webp",
  "/portfolio/DSC_3023-2.webp",
  "/portfolio/DSC_3007.webp",
  "/portfolio/DSC_2713.webp",
  "/portfolio/DSC_2595.webp",
  "/portfolio/DSC_2578.webp",
  "/portfolio/DSC_2576.webp",
  "/portfolio/DSC_2457.webp",
  "/portfolio/DSC_2451.webp",
  "/portfolio/DSC_2446.webp"
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
                    loading={idx < 3 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT01RW2NhYF9iZ1NXX1L/2wBDARUXFx4aHR4eHVJBNkFSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
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