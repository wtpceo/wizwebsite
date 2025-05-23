"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function StrategySection() {
  return (
    <section
      id="strategy"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-white to-teal-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
          <div className="space-y-2">
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 hover:from-purple-200 hover:to-teal-200 border-purple-200"
              variant="outline"
            >
              업종별 전략
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              <span className="hidden md:inline">업종별 맞춤 전략</span>
              <span className="block md:hidden">업종별<br />맞춤 전략</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
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
                  <Card className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 group p-4 sm:p-6 cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={`/images/strategy/strategy-${item.id}.jpg`}
                        alt={`업종별 전략 ${item.id}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          item.id % 3 === 0
                            ? "from-purple-900/30 to-transparent"
                            : item.id % 3 === 1
                              ? "from-blue-900/30 to-transparent"
                              : "from-teal-900/30 to-transparent"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                    </div>
                    <CardContent className="p-3 sm:p-4 bg-white">
                      <h3 className="font-bold tracking-tight text-lg sm:text-xl bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
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
