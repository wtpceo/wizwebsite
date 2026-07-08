import { Badge } from "@/components/ui/badge"
import PricingComparison from "@/components/pricing-comparison"

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-28 bg-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center animate-fade-in">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
              PRICING
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="hidden md:inline">합리적인 가격, 전문적인 서비스</span>
              <span className="block md:hidden">합리적인 가격,<br />전문적인 서비스</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              <span className="hidden md:inline">재능마켓과 비교해보세요. 위즈더플래닝은 전문성과 품질을 보장합니다.</span>
              <span className="block md:hidden">재능마켓과 비교해보세요.<br />위즈더플래닝은 전문성과 품질을 보장합니다.</span>
            </p>
          </div>
        </div>
        <div className="mt-12 animate-fade-in">
          <PricingComparison />
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-block">
            <div className="rounded-2xl bg-[#0b1220] px-8 py-6 shadow-xl">
              <p className="text-2xl md:text-3xl font-extrabold text-white">
                재능마켓 총 비용 <span className="text-[#00e5a0]">500만원 이상</span>
              </p>
              <p className="text-lg text-slate-400 mt-2">위즈더플래닝과 함께라면 더 합리적인 비용으로 시작할 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 