"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Monitor, LayoutDashboard, Sparkles, Link as LinkIcon, Globe } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import ContactSection from "@/components/sections/ContactSection"

export default function MarketingStrategyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-purple-50/30">
      <Header />
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50/50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 break-keep">
                  온라인 매장도,<br className="hidden sm:block" /> 인테리어가 필요합니다.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed break-keep">
                  훌륭한 우리 매장<br className="sm:hidden" /> 내 매장에 큰 돈 들여 인테리어 한 이유가 무엇인가요?
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 온라인 인테리어의 중요성 섹션 */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-6"
              >
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm text-white shadow-lg shadow-purple-500/20">
                  온라인 인테리어의 중요성
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
                    <p className="text-base sm:text-lg text-gray-700 break-keep">
                      수천만 원 들여 인테리어를 완성한 사장님, 원장님.<br className="sm:hidden" /><br /> 인테리어에 정성과 큰 돈을 쏟은 이유가 무엇인가요?
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
                    <p className="text-base sm:text-lg text-gray-700 break-keep">
                      매장 앞을 지나다니는 유동인구 때문 아닌가요?,
                      <br />
                      온라인에는,
                      <br />
                      더 많은 유동인구가 있습니다.
                      <br />
                      <span className="font-bold text-purple-600">온라인 첫인상은 오프라인 첫인상과 같습니다.</span>
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 via-blue-50 to-white flex flex-col items-center justify-center w-full max-w-xl h-[320px]">
                  <div className="flex items-center justify-center mb-4">
                    <LayoutDashboard className="h-20 w-20 text-purple-400 drop-shadow-md" />
                    <Monitor className="h-20 w-20 text-blue-400 drop-shadow-md ml-4" />
                  </div>
                  <div className="text-2xl font-bold text-purple-700 mb-2">온라인 인테리어의 힘</div>
                  <div className="text-lg text-blue-600">오프라인만큼 중요한<br/>온라인 첫인상!</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 채널 선택에 대한 인사이트 섹션 */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50/30">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm text-white shadow-lg shadow-purple-500/20">
                  채널 선택 인사이트
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 break-keep">
                  업종마다 검색 유입이<br className="sm:hidden" /> 집중되는 플랫폼은 다릅니다.
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed break-keep">
                "고객이 검색하는 곳에 노출되는 것"<br className="sm:hidden" /> 그게 마케팅의 시작입니다.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "음식점",
                  description: "네이버 플레이스 + 체험단",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M17.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M6 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                      <path d="M8.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M17 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                      <path d="M6.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                  ),
                  color: "from-orange-500 to-red-500",
                  borderColor: "border-orange-200",
                  hoverBorderColor: "hover:border-orange-300",
                  textColor: "text-orange-700"
                },
                {
                  title: "학원",
                  description: "네이버 플레이스 + 브랜드 블로그",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  ),
                  color: "from-blue-500 to-indigo-500",
                  borderColor: "border-blue-200",
                  hoverBorderColor: "hover:border-blue-300",
                  textColor: "text-blue-700"
                },
                {
                  title: "운동시설",
                  description: "네이버 플레이스 + 인스타그램 + 브랜드 블로그",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 4.24 4.24" />
                      <path d="m14.83 9.17 4.24-4.24" />
                      <path d="m14.83 14.83 4.24 4.24" />
                      <path d="m9.17 14.83-4.24 4.24" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  ),
                  color: "from-green-500 to-emerald-500",
                  borderColor: "border-green-200",
                  hoverBorderColor: "hover:border-green-300",
                  textColor: "text-green-700"
                },
                {
                  title: "뷰티",
                  description: "네이버 플레이스 + 블로그 콘텐츠",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                      <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                      <path d="M12 12v6" />
                      <path d="M8 17h8" />
                      <path d="M12 3v4" />
                    </svg>
                  ),
                  color: "from-pink-500 to-rose-500",
                  borderColor: "border-pink-200",
                  hoverBorderColor: "hover:border-pink-300",
                  textColor: "text-pink-700"
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full border-2 ${item.borderColor} ${item.hoverBorderColor} bg-white/50 backdrop-blur-sm transition-all hover:shadow-xl overflow-hidden`}>
                    <div className={`h-2 bg-gradient-to-r w-full ${item.color}`}></div>
                    <CardContent className="flex flex-col items-center p-6 pt-8">
                      <div className={`mb-4 rounded-full bg-gradient-to-r ${item.color} p-3 text-white shadow-lg`}>
                        {item.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${item.textColor} mb-3`}>{item.title}</h3>
                      <p className="text-sm text-gray-600 text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 오프라인과 온라인의 연결 강조 섹션 */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center justify-center order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 via-purple-50 to-white flex flex-col items-center justify-center w-full max-w-xl h-[320px]">
                  <div className="flex items-center justify-center mb-4">
                    <LinkIcon className="h-20 w-20 text-blue-400 drop-shadow-md" />
                    <Globe className="h-20 w-20 text-purple-400 drop-shadow-md ml-4" />
                  </div>
                  <div className="text-2xl font-bold text-blue-700 mb-2">오프라인과 온라인의 연결</div>
                  <div className="text-lg text-purple-600">고객의 여정, 온라인에서 완성!</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm text-white shadow-lg shadow-purple-500/20">
                  오프라인과 온라인의 연결
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
                    <p className="text-base sm:text-lg text-gray-700 break-keep">
                      오프라인 배너에 적은 할인, 혜택, 안내사항.<br className="sm:hidden" /><br /> 그 정보를 온라인에 왜 적지 않을까요?
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
                    <p className="text-base sm:text-lg text-gray-700 break-keep">
                      온라인은 오프라인보다
                      <br />더 많은 사람들이 보게 됩니다.
                    </p>
                  </div>
                  <div className="rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
                    <p className="text-base sm:text-lg text-gray-700 break-keep">
                      고객이 매장 문을 열기 전에 머무르는 곳,
                      <br />
                      <span className="font-bold text-purple-600">그게 온라인입니다.</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 철학 선언: 마케팅의 진심 섹션 */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50/50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm text-white shadow-lg shadow-purple-500/20">
                  마케팅의 진심
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 break-keep">
                  철학 선언
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed break-keep">
                저희는 9년간 자영업 마케팅을 해오면서
                <br />
                <span className="font-bold text-purple-600">어뷰징과 편법이 잠깐 효과는 있어도,<br className="sm:hidden" /> 오래가지 못한다</span>는 걸 몸으로
                배웠습니다.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[
                {
                  title: "정직한 리뷰",
                  description: "진실된 고객 경험을 바탕으로 한 리뷰가 신뢰를 만듭니다",
                },
                {
                  title: "지속적인 콘텐츠",
                  description: "꾸준한 콘텐츠 업데이트로 고객과의 관계를 유지합니다",
                },
                {
                  title: "쉬운 정보 구조",
                  description: "고객이 찾기 쉬운 정보 구조로 접근성을 높입니다",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-4 rounded-2xl border bg-white/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
                >
                  <div className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-white shadow-lg">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 마무리 CTA 섹션 */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-8 text-center"
            >
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 break-keep">
                  지금 우리가 함께 정리해두면,
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed break-keep">
                  언제 전단지를 뿌리든, 누가 소개하든,
                  <br />
                  검색했을 때 <span className="font-bold text-purple-600">"오, 여긴 뭔가 다르다"</span> 싶은 매장이 됩니다.
                </p>
              </div>
              <div className="mx-auto max-w-[600px] space-y-6">
                <p className="text-base sm:text-lg text-gray-700 break-keep">
                  저희는 <span className="font-bold text-purple-600">매장의 첫인상</span>을 바꾸는 일을 합니다.
                  <br />
                  고객을 한 번 더 잡는, <span className="font-bold text-purple-600">온라인 인테리어 전문가</span>입니다.
                </p>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 px-8 py-6 text-lg">
                  이제 망설이지 말고 시작 하세요.
                  
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 문의하기 섹션 */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
} 