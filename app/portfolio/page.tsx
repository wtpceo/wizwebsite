"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PortfolioPage() {
  const categories = [
    { id: "all", name: "전체" },
    { id: "food", name: "음식" },
    { id: "interior", name: "인테리어" },
    { id: "product", name: "제품" },
  ]

  const photos = [
    {
      id: 1,
      category: "food",
      title: "한식 레스토랑",
      description: "전통 한식의 맛과 멋을 담은 푸드 포토그래피",
      image: "/portfolio/food-1.jpg",
    },
    {
      id: 2,
      category: "interior",
      title: "모던 카페",
      description: "세련된 공간을 담은 인테리어 촬영",
      image: "/portfolio/interior-1.jpg",
    },
    {
      id: 3,
      category: "product",
      title: "수제 디저트",
      description: "달콤한 디저트의 매력을 담은 제품 촬영",
      image: "/portfolio/product-1.jpg",
    },
    // 추가 사진들...
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-2">
              <Badge
                className="w-fit mx-auto bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 border-purple-200"
                variant="outline"
              >
                포트폴리오
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                위즈더플래닝 포토그래피
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                전문적인 장비와 노하우로 완성한 고퀄리티 포토그래피
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 mt-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-purple-700"
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{photo.title}</h3>
                  <p className="mt-2 text-gray-600">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
} 