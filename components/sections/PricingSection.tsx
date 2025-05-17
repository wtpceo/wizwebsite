import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import PricingComparison from "@/components/pricing-comparison"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 via-white to-amber-50"
    >
      <div className="container px-4 md:px-6">
        <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={fadeIn}>
          <div className="space-y-2">
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-teal-100 to-amber-100 text-teal-700 hover:from-teal-200 hover:to-amber-200 border-teal-200"
              variant="outline"
            >
              가격 비교
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-teal-700 via-blue-600 to-amber-500 bg-clip-text text-transparent">
              합리적인 가격, 전문적인 서비스
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              재능마켓과 비교해보세요. 위즈더플래닝은 전문성과 품질을 보장합니다.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <PricingComparison />
        </motion.div>
      </div>
    </section>
  )
} 