"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function StrategySection() {
  return (
    <section
      id="strategy"
      className="w-full py-12 md:py-24 lg:py-28 bg-[#f6f8f7]"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center animate-fade-in">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
              INDUSTRY STRATEGY
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="hidden md:inline">업종별 맞춤 전략</span>
              <span className="block md:hidden">업종별<br />맞춤 전략</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              <span className="hidden md:inline">각 업종의 특성을 고려한 맞춤형 마케팅 전략을 확인하세요.</span>
              <span className="block md:hidden">각 업종의 특성을 고려한<br />맞춤형 마케팅 전략을 확인하세요.</span>
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: 1, title: "홀판매 음식점 전략", category: "음식점 마케팅", link: "/strategy/1" },
              { id: 2, title: "배달 전문 음식점 전략", category: "배달매장 마케팅", link: "/strategy/2" },
              { id: 3, title: "학원 마케팅 전략", category: "학원 마케팅", link: "/strategy/3" },
              { id: 4, title: "캠핑/팬션 마케팅 전략", category: "숙박업 마케팅", link: "/strategy/4" },
              { id: 5, title: "뷰티 업종 마케팅 전략", category: "뷰티 업종 마케팅", link: "/strategy/5" },
              { id: 6, title: "운동 및 기타 업종 전략", category: "운동 및 기타 업종 마케팅", link: "/strategy/6" },
            ].map((item, index) => (
              <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Link href={item.link}>
                  <Card className="overflow-hidden rounded-2xl border-gray-200 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] group p-4 sm:p-6 cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={`/images/strategy/strategy-${item.id}.jpg`}
                        alt={`업종별 전략 ${item.id}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-3 sm:p-4 bg-white">
                      <h3 className="font-bold tracking-tight text-lg sm:text-xl text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {item.category} 전략
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
