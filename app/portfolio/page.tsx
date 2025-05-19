import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "/portfolio/DSC_0140 중간.jpeg",
  "/portfolio/DSC_0165 중간.jpeg",
  "/portfolio/DSC_0171 중간.jpeg",
  "/portfolio/DSC_0175 중간.jpeg",
  "/portfolio/DSC_0177 중간.jpeg",
  "/portfolio/DSC_2293 중간.jpeg",
  "/portfolio/DSC_2302 중간.jpeg",
  "/portfolio/DSC_4040 중간.jpeg",
  "/portfolio/DSC_4043 중간.jpeg",
  "/portfolio/DSC_4060 중간.jpeg",
  "/portfolio/DSC_4067 중간.jpeg",
  "/portfolio/DSC_6854 중간.jpeg",
  "/portfolio/DSC_6870 중간.jpeg",
  "/portfolio/DSC_6872 중간.jpeg",
  "/portfolio/DSC_6873 중간.jpeg",
  "/portfolio/DSC_6874 중간.jpeg",
  "/portfolio/DSC_6883 중간.jpeg",
  "/portfolio/DSC_6887 중간.jpeg",
  "/portfolio/DSC_6954 중간.jpeg",
  "/portfolio/DSC_6959 중간.jpeg",
  "/portfolio/DSC_6962 중간.jpeg",
  "/portfolio/DSC_6964 중간.jpeg",
  "/portfolio/DSC_6969 중간.jpeg",
  "/portfolio/DSC_6974 중간.jpeg",
  "/portfolio/DSC_8519 중간.jpeg",
  "/portfolio/DSC_8520 중간.jpeg",
  "/portfolio/DSC_8523 중간.jpeg",
  "/portfolio/DSC_8526 중간.jpeg",
  "/portfolio/DSC00805 중간.jpeg",
  "/portfolio/DSC00814 중간.jpeg",
  "/portfolio/DSC00917 중간.jpeg",
  "/portfolio/DSC00923 중간.jpeg",
  "/portfolio/DSC00931 중간.jpeg",
  "/portfolio/DSC01144 중간.jpeg",
  "/portfolio/DSC03326 중간.jpeg",
  "/portfolio/DSC05733 중간.jpeg",
  "/portfolio/DSC05765 중간.jpeg",
  "/portfolio/DSC05767 중간.jpeg",
  "/portfolio/DSC05773 중간.jpeg",
  "/portfolio/DSC05780 중간.jpeg",
  "/portfolio/DSC06029 중간.jpeg",
  "/portfolio/DSC07582 중간.jpeg",
  "/portfolio/DSC07602 중간.jpeg",
  "/portfolio/DSC09528 중간.jpeg",
  "/portfolio/DSC09533 중간.jpeg",
  "/portfolio/DSC09535 중간.jpeg",
  "/portfolio/KakaoTalk_Photo_2024-11-25-18-07-05_13_ 중간.jpeg",
  "/portfolio/portfolio-1.jpg",
  "/portfolio/portfolio-2.jpg",
  "/portfolio/portfolio-3.jpg"
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
    <section className="min-h-screen py-12 sm:py-20 bg-gradient-to-b from-[#f7fafc] to-white">
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
  )
} 