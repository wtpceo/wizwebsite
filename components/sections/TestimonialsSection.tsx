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
              <span className="hidden md:inline">7,000여 광고주의 선택</span>
              <span className="block md:hidden">7,000여<br />광고주의 선택</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
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
                "사진 촬영부터 SNS 관리까지 릴스 메타 광고로 손님이 꽉 차서 너무 좋아요!",
              rating: 5,
              color: "purple",
            },
            {
              name: "이OO",
              business: "부천 중동 뷰티샵",
              content: "인쇄물 제작 부터 저는 이벤트만 기획해도 온라인 전역에 퍼져 대응이 빨라요.",
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
              content: "맛집 키워드에 그렇게 들어가고 싶었는데, 어뷰징이 아닌 다른 방법으로 해야한다는걸 알았어요.",
              rating: 5,
              color: "amber",
            },
            {
              name: "강OO",
              business: "고깃집 사장님",
              content: "위즈더플래닝 남긴 하나요? 네이버부터 당근 배달까지 진짜 너무 좋아요.",
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