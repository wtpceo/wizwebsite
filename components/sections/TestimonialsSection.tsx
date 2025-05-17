import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
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
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 via-white to-pink-50"
    >
      <div className="container px-4 md:px-6">
        <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={fadeIn}>
          <div className="space-y-2">
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-amber-100 to-pink-100 text-amber-700 hover:from-amber-200 hover:to-pink-200 border-amber-200"
              variant="outline"
            >
              고객 후기
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-amber-700 via-pink-600 to-purple-500 bg-clip-text text-transparent">
              7,000여 광고주의 선택
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              위즈더플래닝과 함께한 고객들의 생생한 후기를 확인하세요.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            {
              name: "김OO",
              business: "서울 강남 카페",
              content:
                "사진 촬영부터 SNS 관리까지 한 번에 해결해주셔서 정말 편했습니다. 매출이 30% 이상 증가했어요!",
              rating: 5,
              color: "purple",
            },
            {
              name: "이OO",
              business: "부산 해운대 레스토랑",
              content: "배달앱 최적화 후 주문량이 크게 늘었습니다. 전문적인 사진과 메뉴 설명이 큰 도움이 되었어요.",
              rating: 5,
              color: "blue",
            },
            {
              name: "박OO",
              business: "인천 부평 베이커리",
              content: "체험단 운영으로 신규 고객이 많이 유입되었고, 인스타그램 팔로워도 크게 늘었습니다.",
              rating: 4,
              color: "teal",
            },
            {
              name: "최OO",
              business: "대구 중구 옷가게",
              content: "온라인 광고와 SNS 마케팅을 통해 매장 방문객이 2배 이상 증가했습니다. 감사합니다!",
              rating: 5,
              color: "pink",
            },
            {
              name: "정OO",
              business: "광주 동구 미용실",
              content: "전문적인 사진 촬영과 콘텐츠 제작으로 브랜드 이미지가 크게 개선되었습니다.",
              rating: 5,
              color: "amber",
            },
            {
              name: "강OO",
              business: "대전 서구 피트니스",
              content: "인쇄물 디자인부터 온라인 마케팅까지 모든 서비스가 만족스러웠습니다. 추천해요!",
              rating: 4,
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