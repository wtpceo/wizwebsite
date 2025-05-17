import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-white to-teal-50"
    >
      <div className="container px-4 md:px-6">
        <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={fadeIn}>
          <div className="space-y-2">
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 hover:from-purple-200 hover:to-teal-200 border-purple-200"
              variant="outline"
            >
              포트폴리오
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              <span className="hidden md:inline">성공적인 마케팅 사례</span>
              <span className="block md:hidden">성공적인<br />마케팅 사례</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              <span className="hidden md:inline">위즈더플래닝과 함께한 다양한 업종의 성공 사례를 확인하세요.</span>
              <span className="block md:hidden">위즈더플래닝과 함께한<br />다양한 업종의 성공 사례를 확인하세요.</span>
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center">
              <TabsList className="bg-gradient-to-r from-purple-100/50 to-teal-100/50">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  전체
                </TabsTrigger>
                <TabsTrigger
                  value="restaurant"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  음식점
                </TabsTrigger>
                <TabsTrigger
                  value="cafe"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  카페/베이커리
                </TabsTrigger>
                <TabsTrigger
                  value="retail"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  소매/판매
                </TabsTrigger>
                <TabsTrigger
                  value="service"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  서비스업
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-6">
              <motion.div
                className="grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div key={item} variants={fadeIn}>
                    <Card className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 group p-4 sm:p-6">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=포트폴리오 ${item}`}
                          alt={`포트폴리오 ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${
                            item % 3 === 0
                              ? "from-purple-900/30 to-transparent"
                              : item % 3 === 1
                                ? "from-blue-900/30 to-transparent"
                                : "from-teal-900/30 to-transparent"
                          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </div>
                      <CardContent className="p-3 sm:p-4 bg-white">
                        <h3 className="font-medium text-gray-800 text-base sm:text-lg">프로젝트 {item}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {item % 3 === 0 ? "음식점 마케팅" : item % 3 === 1 ? "카페 브랜딩" : "소매점 마케팅"} 프로젝트
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="restaurant" className="mt-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[1, 3, 5].map((item) => (
                  <motion.div key={item} variants={fadeIn}>
                    <Card className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 group">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=음식점 ${item}`}
                          alt={`음식점 ${item}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="p-4 bg-white">
                        <h3 className="font-medium text-gray-800">음식점 프로젝트 {item}</h3>
                        <p className="text-sm text-gray-600">음식점 마케팅 프로젝트</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
} 