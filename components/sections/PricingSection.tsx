import { Badge } from "@/components/ui/badge"
import PricingComparison from "@/components/pricing-comparison"

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 via-white to-amber-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
          <div className="space-y-2">
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-teal-100 to-amber-100 text-teal-700 hover:from-teal-200 hover:to-amber-200 border-teal-200"
              variant="outline"
            >
              가격 비교
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-teal-700 via-blue-600 to-amber-500 bg-clip-text text-transparent">
              <span className="hidden md:inline">합리적인 가격, 전문적인 서비스</span>
              <span className="block md:hidden">합리적인 가격,<br />전문적인 서비스</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              <span className="hidden md:inline">재능마켓과 비교해보세요. 위즈더플래닝은 전문성과 품질을 보장합니다.</span>
              <span className="block md:hidden">재능마켓과 비교해보세요.<br />위즈더플래닝은 전문성과 품질을 보장합니다.</span>
            </p>
          </div>
        </div>
        <div className="mt-12 animate-fade-in">
          <PricingComparison />
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-block animate-pulse-slow">
            <div className="bg-gradient-to-r from-teal-100 to-amber-100 p-6 rounded-2xl shadow-lg">
              <p className="text-2xl md:text-3xl font-bold text-teal-700">
                재능마켓 총 비용 <span className="text-amber-600">500만원 이상</span>
              </p>
              <p className="text-lg text-gray-600 mt-2">위즈더플래닝과 함께라면 더 합리적인 비용으로 시작할 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 