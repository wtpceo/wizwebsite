"use client"

import { useRef } from "react"
import { ArrowRight, CheckCircle, Search } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import ContactSection from "@/components/sections/ContactSection"

export default function MarketingStrategyPage() {
  const contactRef = useRef<HTMLDivElement>(null)
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="relative overflow-hidden bg-[#070b14] py-24 md:py-32">
          <div className="geo-grid-bg absolute inset-0"></div>
          <div className="absolute -top-32 left-1/3 h-[360px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
                FITNESS STRATEGY
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight break-keep">
                온라인 매장도,<br className="hidden sm:block" /> 인테리어가 필요합니다.
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl font-bold text-[#00e5a0] break-keep">
                훌륭한 우리 매장<br className="sm:hidden" /> 내 매장에 큰 돈 들여 인테리어 한 이유가 무엇인가요?
              </p>
              <motion.div
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] text-lg px-8 py-6 h-auto shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300"
                >
                  무료 마케팅 진단 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 온라인 인테리어의 중요성 섹션 */}
        <section className="w-full py-20 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-6"
              >
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">ONLINE INTERIOR</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 break-keep">
                    온라인 인테리어의 중요성
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                    <p className="text-base sm:text-lg text-gray-600 break-keep">
                      수천만 원 들여 인테리어를 완성한 사장님, 원장님.<br className="sm:hidden" /><br /> 인테리어에 정성과 큰 돈을 쏟은 이유가 무엇인가요?
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                    <p className="text-base sm:text-lg text-gray-600 break-keep">
                      매장 앞을 지나다니는 유동인구 때문 아닌가요?,
                      <br />
                      온라인에는,
                      <br />
                      더 많은 유동인구가 있습니다.
                      <br />
                      <span className="font-bold text-emerald-600">온라인 첫인상은 오프라인 첫인상과 같습니다.</span>
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
                {/* 온라인 첫인상 플레이스 목업 */}
                <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#0b1220] p-8 md:p-10">
                  <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
                  <div className="relative">
                    <div className="mx-auto w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                      <div className="grid grid-cols-3 gap-1.5 overflow-hidden rounded-lg">
                        <div className="h-16 bg-gradient-to-br from-emerald-300 to-emerald-400" />
                        <div className="h-16 bg-gradient-to-br from-sky-200 to-emerald-200" />
                        <div className="h-16 bg-gradient-to-br from-emerald-200 to-teal-300" />
                      </div>
                      <div className="mt-3 flex items-start justify-between">
                        <div>
                          <p className="font-bold text-gray-900">
                            OO피트니스 <span className="text-xs font-medium text-gray-400">운동시설</span>
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">⭐ 4.9 · 방문자 리뷰 128 · 소식 12</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-[#00e5a0]/15 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                          예약 가능
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["시설 사진", "이용 안내", "이벤트", "가격표"].map((chip) => (
                          <span key={chip} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] text-gray-600">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-xl font-bold text-white">온라인 인테리어의 힘</p>
                      <p className="mt-1 text-base text-[#00e5a0]">오프라인만큼 중요한 온라인 첫인상!</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 채널 선택에 대한 인사이트 섹션 */}
        <section className="w-full py-20 md:py-24 bg-[#f6f8f7]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">CHANNEL INSIGHT</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 break-keep">
                  업종마다 검색 유입이<br className="sm:hidden" /> 집중되는 플랫폼은 다릅니다.
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed break-keep">
                "고객이 검색하는 곳에 노출되는 것"<br className="sm:hidden" /> 그게 마케팅의 시작입니다.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
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
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 break-keep">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 오프라인과 온라인의 연결 강조 섹션 */}
        <section className="relative w-full overflow-hidden py-20 md:py-24 bg-[#070b14]">
          <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center justify-center order-2 lg:order-1"
              >
                {/* 고객 여정 플로우 다이어그램 */}
                <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-4 text-center">
                      <span className="text-2xl">🏪</span>
                      <span className="font-medium text-slate-300">오프라인 배너</span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-500" />
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-4 text-center">
                      <Search className="h-6 w-6 text-slate-300" />
                      <span className="font-medium text-slate-300">온라인 검색</span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-500" />
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-[#00e5a0]/40 bg-[#00e5a0]/10 px-3 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-[#00e5a0]" />
                      <span className="font-bold text-[#00e5a0]">방문 결정</span>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-xl font-bold text-white">오프라인과 온라인의 연결</p>
                    <p className="mt-1 text-base text-[#00e5a0]">고객의 여정, 온라인에서 완성!</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0] mb-3">OFFLINE × ONLINE</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white break-keep">
                    오프라인과 온라인의 연결
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all">
                    <p className="text-base sm:text-lg text-slate-400 break-keep">
                      오프라인 배너에 적은 할인, 혜택, 안내사항.<br className="sm:hidden" /><br /> 그 정보를 온라인에 왜 적지 않을까요?
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all">
                    <p className="text-base sm:text-lg text-slate-400 break-keep">
                      온라인은 오프라인보다
                      <br />더 많은 사람들이 보게 됩니다.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all">
                    <p className="text-base sm:text-lg text-slate-400 break-keep">
                      고객이 매장 문을 열기 전에 머무르는 곳,
                      <br />
                      <span className="font-bold text-[#00e5a0]">그게 온라인입니다.</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 철학 선언: 마케팅의 진심 섹션 */}
        <section className="w-full py-20 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">OUR PHILOSOPHY</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 break-keep">
                  철학 선언
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed break-keep">
                저희는 9년간 자영업 마케팅을 해오면서
                <br />
                <span className="font-bold text-emerald-600">어뷰징과 편법이 잠깐 효과는 있어도,<br className="sm:hidden" /> 오래가지 못한다</span>는 걸 몸으로
                배웠습니다.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
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
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 break-keep">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 마무리 CTA 섹션 */}
        <section className="w-full py-20 md:py-24 bg-[#f6f8f7]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-8 text-center"
            >
              <div className="space-y-4">
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">START NOW</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 break-keep">
                  지금 우리가 함께 정리해두면,
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl/relaxed break-keep">
                  언제 전단지를 뿌리든, 누가 소개하든,
                  <br />
                  검색했을 때 <span className="font-bold text-emerald-600">"오, 여긴 뭔가 다르다"</span> 싶은 매장이 됩니다.
                </p>
              </div>
              <div className="mx-auto max-w-[600px] space-y-6">
                <p className="text-base sm:text-lg text-gray-600 break-keep">
                  저희는 <span className="font-bold text-emerald-600">매장의 첫인상</span>을 바꾸는 일을 합니다.
                  <br />
                  고객을 한 번 더 잡는, <span className="font-bold text-emerald-600">온라인 인테리어 전문가</span>입니다.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full sm:w-auto bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300 px-8 py-6 text-lg h-auto"
                  >
                    이제 망설이지 말고 시작 하세요. <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 문의하기 섹션 */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
