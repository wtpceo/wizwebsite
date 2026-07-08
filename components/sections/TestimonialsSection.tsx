"use client"

import { motion } from "framer-motion"
import TestimonialCard from "@/components/testimonial-card"

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

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-28 bg-[#f6f8f7]"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
              REVIEWS
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="hidden md:inline">7,000여 광고주의 선택</span>
              <span className="block md:hidden">7,000여<br />광고주의 선택</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              <span className="hidden md:inline">위즈더플래닝과 함께한 고객들의 생생한 후기를 확인하세요.</span>
              <span className="block md:hidden">위즈더플래닝과 함께한<br />고객들의 생생한 후기를 확인하세요.</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            {
              name: "김OO",
              business: "서울 미아사거리 술집",
              content:
                "플레이스 꾸미고 영상 촬영하고 릴스 메타 광고를 했는데 평일에도 손님이 꽉 찼어요. 너무 좋아요!",
              rating: 5,
              color: "purple",
            },
            {
              name: "이OO",
              business: "부천 중동 뷰티샵",
              content: "제가 이벤트만 기획하면 인쇄물 제작 부터 온라인 전역에 빠르게 퍼트려줘요. 대응이 빨라요.",
              rating: 5,
              color: "blue",
            },
            {
              name: "박OO",
              business: "배달 전문점",
              content: "위즈더플래닝과 몇 년 하고 혼자 할 수 있을 줄 알았는데 아니어서 다시 돌아왔어요.",
              rating: 5,
              color: "teal",
            },
            {
              name: "최OO",
              business: "캠핑장 운영",
              content: "드론 촬영부터 홈페이지 제작까지 진짜 말도 안되는 가격입니다. 저는 그동안 속았어요.",
              rating: 5,
              color: "pink",
            },
            {
              name: "정OO",
              business: "시흥 한정식",
              content: "맛집 키워드에 그렇게 들어가고 싶었는데, 어뷰징끊으니까 오래걸렸지만 2등입니다. 이제 어뷰징 안해요.",
              rating: 5,
              color: "amber",
            },
            {
              name: "강OO",
              business: "고깃집 사장님",
              content: "위즈더플래닝 남긴 하나요? 블로그 퀄리티 진짜 미쳤어요.",
              rating: 5,
              color: "indigo",
            },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn}>
              <TestimonialCard
                name={testimonial.name}
                business={testimonial.business}
                content={testimonial.content}
                rating={testimonial.rating}
                color={testimonial.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 