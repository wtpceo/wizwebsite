"use client"

import {
  AlertTriangle,
  ArrowRight,
  Camera,
  CheckCircle,
  Globe,
  MapPin,
  MessageSquare,
  Smartphone,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/app/components/AnimatedSection"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import ContactSection from "@/components/sections/ContactSection"
import { useRef } from "react"

export default function StrategyDetail() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#070b14] py-24 md:py-28">
          <div className="geo-grid-bg absolute inset-0"></div>
          <div className="absolute -top-32 left-1/3 h-[360px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl"></div>
          <div className="container relative z-10">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0] mb-6">BEAUTY STRATEGY</p>
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-slate-300 mb-6">
                  <span className="text-[#00e5a0] mr-1">뷰티 업종</span> 마케팅 전문가
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 break-keep">
                  뷰티 마케팅, 아무거나 올렸다다가<br /> <span className="text-[#00e5a0]">의료법에 걸릴 수 있습니다</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 break-keep">
                  효과 강조? 시술 사진? 글 하나에도 법적 리스크가 따릅니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gap-2 bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] text-lg px-8 py-6 h-auto shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    무료 상담 신청하기 <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Problem Recognition Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={200}>
                <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] p-10 min-h-[320px] flex flex-col justify-center">
                  <div className="geo-grid-bg absolute inset-0 opacity-40"></div>
                  <div className="absolute -top-12 right-0 h-44 w-44 rounded-full bg-[#00e5a0]/10 blur-3xl"></div>
                  <div className="relative z-10">
                    {/* 고객층 확대 비주얼 */}
                    <div className="mb-7 flex flex-wrap items-center gap-2">
                      {["피부", "헤어", "네일"].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {chip}
                        </span>
                      ))}
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#00e5a0]/40 bg-[#00e5a0]/10 px-3 py-1 text-xs font-bold text-[#00e5a0]">
                        <TrendingUp className="h-3.5 w-3.5" /> 남성 고객 증가
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">뷰티 산업의 변화</h3>
                    <div className="text-lg text-[#00e5a0] font-semibold mb-3">고객층 확대 & 마케팅 복잡성 증가</div>
                    <p className="text-slate-400 text-base leading-relaxed">
                      요즘은 남성들도 피부, 헤어, 네일에 적극적입니다.<br />
                      고객층은 넓어졌지만, 마케팅 환경은 더욱 복잡해졌습니다.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">MARKET SHIFT</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-6 break-keep">
                    고객은 많아졌지만,<br /> 마케팅은 점점 더 어렵고 위험해졌습니다
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    뷰티 업종의 마케팅 환경이 변화하면서 새로운 도전과 위험이 생겨났습니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                      <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">의료법 위반 리스크</h3>
                        <p className="text-gray-600">잘못된 표현 하나로 법적 제재를 받을 수 있습니다</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                      <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">경쟁 심화</h3>
                        <p className="text-gray-600">
                          비슷한 서비스를 제공하는 업체들 사이에서 차별화가 필요합니다
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                      <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900">높은 마케팅 비용</h3>
                        <p className="text-gray-600">효율적인 비용 관리 없이는 마케팅 ROI가 낮아집니다</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Problem Section (다크 잉크) */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-[#070b14]">
          <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
          <div className="absolute -bottom-32 right-1/4 h-[300px] w-[480px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl"></div>

          <div className="container relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-center text-xs font-bold tracking-[0.25em] text-[#00e5a0] mb-3">CORE ELEMENTS</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 break-keep">뷰티 마케팅에서 가장 중요한 건</h2>
                <p className="text-base sm:text-lg text-slate-400 break-keep">
                  성공적인 뷰티 마케팅을 위한 핵심 요소들을 효과적으로 전달해야 합니다.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: <Zap className="h-5 w-5 text-[#00e5a0]" />,
                  title: "의료 기기",
                  description: "최신 장비와 기술을 효과적으로 소개해야 합니다",
                },
                {
                  icon: <Sparkles className="h-5 w-5 text-[#00e5a0]" />,
                  title: "제품",
                  description: "사용하는 제품의 품질과 효과를 신뢰성 있게 전달해야 합니다",
                },
                {
                  icon: <Shield className="h-5 w-5 text-[#00e5a0]" />,
                  title: "노하우",
                  description: "전문적인 기술과 경험을 고객에게 어필해야 합니다",
                },
                {
                  icon: <Users className="h-5 w-5 text-[#00e5a0]" />,
                  title: "원장님의 철학",
                  description: "매장의 가치와 비전을 명확하게 전달해야 합니다",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={200 * (index + 1)}>
                  <Card className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all duration-300">
                    <CardContent className="p-6">
                      <span className="pointer-events-none absolute -right-2 -top-4 select-none text-6xl font-extrabold text-white/[0.06]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-fit rounded-xl bg-[#00e5a0]/15 p-2.5 mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 break-keep">{item.title}</h3>
                      <p className="text-sm sm:text-base text-slate-400 break-keep">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={1000}>
              <div className="mt-12 text-center">
                <p className="text-xl font-medium max-w-2xl mx-auto text-slate-200">
                  하지만 이걸 <span className="text-[#00e5a0] font-bold">어떻게 보여주느냐</span>에 따라 성패가 갈립니다
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24 bg-[#f6f8f7]">
          <div className="container">
            <AnimatedSection>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">OUR STRATEGY</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 break-keep">위즈더플래닝이 제안하는 전략</h2>
                <p className="text-base sm:text-lg text-gray-600 break-keep">
                  고객은 눈으로 확인하고, 검색해서 결정합니다.<br /> 이제는 감각적인 콘텐츠와 탄탄한 운영으로 신뢰를 쌓아야 할
                  때입니다.
                </p>
              </div>
            </AnimatedSection>

            <Tabs defaultValue="place" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto p-1 sm:p-2">
                <TabsTrigger value="place" className="py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
                  플레이스
                </TabsTrigger>
                <TabsTrigger value="blog" className="py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
                  블로그
                </TabsTrigger>
                <TabsTrigger value="photo" className="py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
                  사진 촬영
                </TabsTrigger>
                <TabsTrigger value="community" className="py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
                  체험단
                </TabsTrigger>
                <TabsTrigger value="website" className="py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
                  홈페이지
                </TabsTrigger>
              </TabsList>

              {/* TabsContent sections with animations */}
              {[
                {
                  value: "place",
                  icon: <MapPin className="h-6 w-6 text-emerald-600" />,
                  title: "네이버 플레이스 최적화",
                  description: "고객이 가장 먼저 접하는 매장 정보를\n매력적이고 전문적으로 구성합니다",
                  points: [
                    "검색 상위 노출을 위한 키워드 최적화",
                    "고객 리뷰 관리 및 평점 향상 전략",
                    "매장 정보, 사진, 지도 등 최신화",
                    "이벤트/프로모션 연동으로 방문 유도"
                  ],
                  visual: (
                    // 잘 관리된 뷰티샵 플레이스 목업
                    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-md">
                      <div className="grid grid-cols-3 gap-1.5 overflow-hidden rounded-lg">
                        <div className="h-16 bg-gradient-to-br from-emerald-300 to-emerald-400" />
                        <div className="h-16 bg-gradient-to-br from-teal-200 to-emerald-300" />
                        <div className="h-16 bg-gradient-to-br from-emerald-200 to-teal-300" />
                      </div>
                      <div className="mt-3 flex items-start justify-between">
                        <div>
                          <p className="font-bold text-gray-900">
                            OO뷰티샵 <span className="text-xs font-medium text-gray-400">피부관리</span>
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">⭐ 4.9 · 방문자 리뷰 214 · 소식 18</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-[#00e5a0]/15 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                          예약 가능
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {["매장 사진", "가격표", "이벤트", "후기"].map((chip) => (
                          <span key={chip} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] text-gray-600">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
                  value: "blog",
                  icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
                  title: "전문성 있는 블로그 콘텐츠",
                  description: "의료법을 준수하면서도 효과적인\nBefore & After 콘텐츠를 제작합니다",
                  points: [
                    "의료법 준수, 안전한 마케팅 콘텐츠",
                    "전문가가 직접 작성하는 신뢰도 높은 포스팅",
                    "Before & After, 후기, Q&A 등 다양한 포맷",
                    "검색 노출 극대화를 위한 키워드 전략"
                  ],
                  visual: (
                    // 브랜드 블로그 포스트 리스트 목업
                    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-md">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500" />
                          <div className="h-3 w-24 rounded bg-gray-200" />
                        </div>
                        <span className="rounded-full bg-[#00e5a0]/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                          의료법 준수
                        </span>
                      </div>
                      <div className="mt-3 space-y-3">
                        {[0, 1, 2].map((row) => (
                          <div key={row} className="flex items-center gap-3">
                            <div className={`h-12 w-12 shrink-0 rounded-lg ${row === 0 ? "bg-gradient-to-br from-emerald-200 to-teal-300" : "bg-gray-100"}`} />
                            <div className="flex-1 space-y-1.5">
                              <div className={`h-3 rounded ${row === 0 ? "w-11/12 bg-emerald-100" : "w-10/12 bg-gray-200"}`} />
                              <div className="h-2.5 w-7/12 rounded bg-gray-100" />
                            </div>
                            {row === 0 && <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
                  value: "photo",
                  icon: <Camera className="h-6 w-6 text-emerald-600" />,
                  title: "전문 사진 촬영",
                  description: "매장의 분위기와 전문성을\n고품질 이미지로 담아냅니다",
                  points: [
                    "매장/시술/제품 등 맞춤형 촬영 기획",
                    "고화질 이미지로 브랜드 신뢰도 상승",
                    "SNS/플레이스/홈페이지 등 멀티 활용",
                    "감각적인 연출로 차별화된 이미지 제공"
                  ],
                  visual: (
                    // 촬영 결과물 피드 그리드 목업
                    <div className="relative w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-md">
                      <div className="grid grid-cols-3 gap-1.5 overflow-hidden rounded-lg">
                        <div className="aspect-square bg-gradient-to-br from-emerald-300 to-emerald-500" />
                        <div className="aspect-square bg-gradient-to-br from-teal-200 to-emerald-300" />
                        <div className="aspect-square bg-gradient-to-br from-emerald-200 to-teal-400" />
                        <div className="aspect-square bg-gradient-to-br from-teal-300 to-emerald-400" />
                        <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-300" />
                        <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-300" />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-[#00e5a0]/15 p-1.5">
                            <Camera className="h-4 w-4 text-emerald-600" />
                          </div>
                          <div className="h-3 w-20 rounded bg-gray-200" />
                        </div>
                        <span className="text-[11px] font-bold text-emerald-600">고화질 원본 제공</span>
                      </div>
                    </div>
                  ),
                },
                {
                  value: "community",
                  icon: <Smartphone className="h-6 w-6 text-emerald-600" />,
                  title: "체험단 & 커뮤니티 활용",
                  description: "실제 고객의 생생한 후기로\n신뢰도를 높입니다",
                  points: [
                    "실제 고객 후기 기반 신뢰도 강화",
                    "다양한 커뮤니티/플랫폼 연계 노출",
                    "체험단 모집/운영/후기 관리 원스톱",
                    "바이럴 효과로 자연스러운 홍보"
                  ],
                  visual: (
                    // 실제 후기 말풍선 목업
                    <div className="flex w-full max-w-sm flex-col gap-3">
                      <div className="flex justify-start">
                        <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-gray-200 bg-white px-5 py-4 shadow-md">
                          <p className="text-xs font-bold text-emerald-600">⭐⭐⭐⭐⭐ 방문자 리뷰</p>
                          <div className="mt-2 space-y-1.5">
                            <div className="h-2.5 w-40 rounded bg-gray-200" />
                            <div className="h-2.5 w-32 rounded bg-gray-100" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[90%] rounded-2xl rounded-br-md bg-[#0b1220] px-5 py-4 shadow-md">
                          <p className="flex items-center gap-2 text-xs font-bold text-[#00e5a0]">
                            <CheckCircle className="h-4 w-4" /> 체험단 후기 등록 완료
                          </p>
                          <div className="mt-2 space-y-1.5">
                            <div className="h-2.5 w-36 rounded bg-white/15" />
                            <div className="h-2.5 w-24 rounded bg-white/10" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-gray-200 bg-white px-5 py-4 shadow-md">
                          <p className="text-xs font-bold text-emerald-600">⭐⭐⭐⭐⭐ 블로그 후기</p>
                          <div className="mt-2 space-y-1.5">
                            <div className="h-2.5 w-36 rounded bg-gray-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  value: "website",
                  icon: <Globe className="h-6 w-6 text-emerald-600" />,
                  title: "통합 홈페이지 구축",
                  description: "모든 마케팅 채널을 하나로 통합하여\n효율적인 관리가 가능합니다",
                  points: [
                    "모바일/PC 반응형 맞춤 디자인",
                    "예약, 문의, 후기 등 기능 통합",
                    "플레이스/블로그/SNS와 연동",
                    "브랜드 신뢰도와 정보 전달력 극대화"
                  ],
                  visual: (
                    // 브라우저 프레임 홈페이지 목업
                    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <div className="ml-2 h-4 flex-1 rounded-full bg-white ring-1 ring-gray-200" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-16 rounded bg-emerald-200" />
                          <div className="flex gap-2">
                            <div className="h-2.5 w-8 rounded bg-gray-200" />
                            <div className="h-2.5 w-8 rounded bg-gray-200" />
                            <div className="h-2.5 w-8 rounded bg-gray-200" />
                          </div>
                        </div>
                        <div className="mt-3 flex h-24 items-center justify-center rounded-lg bg-[#0b1220]">
                          <div className="space-y-1.5 text-center">
                            <div className="mx-auto h-3 w-32 rounded bg-white/20" />
                            <div className="mx-auto h-2.5 w-24 rounded bg-[#00e5a0]/40" />
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="flex h-9 items-center justify-center rounded-lg bg-[#00e5a0] text-xs font-bold text-[#070b14]">
                            예약하기
                          </div>
                          <div className="flex h-9 items-center justify-center rounded-lg border border-gray-200 text-xs font-medium text-gray-600">
                            문의하기
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ].map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <AnimatedSection delay={200}>
                      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                        {tab.visual}
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="rounded-xl bg-emerald-50 p-2.5">{tab.icon}</div>
                          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">{tab.title}</h3>
                        </div>
                        <p className="mb-6 whitespace-pre-line text-gray-600">{tab.description}</p>
                        <ul className="space-y-4">
                          {tab.points && tab.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-base text-gray-700">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">COST EFFICIENCY</p>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">비용 걱정? 필요 없습니다</h2>
                <p className="text-lg text-gray-600 mb-12">
                  홈페이지, 사진촬영, 블로그, 광고까지 천만 원이 넘는 견적서에 놀라셨다면…
                  <br />
                  이제 위즈더플래닝이 도와드립니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
                  {[
                    {
                      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
                      title: "저비용 시작",
                      description: "합리적인 비용으로 효과적인 마케팅을 시작할 수 있습니다",
                    },
                    {
                      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
                      title: "필요 요소만 선택",
                      description: "필요한 서비스만 선택하여 맞춤형 마케팅 전략을 구성할 수 있습니다",
                    },
                    {
                      icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
                      title: "업종별 템플릿 보유",
                      description: "모든 업종별 템플릿 및 콘텐츠 플랜을 보유하고 있습니다",
                    },
                  ].map((item, index) => (
                    <AnimatedSection key={item.title} delay={200 * (index + 1)}>
                      <Card className="h-full rounded-2xl border border-gray-200 bg-white hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                        <CardContent className="p-6 flex flex-col items-start text-left h-full">
                          <div className="rounded-xl bg-emerald-50 p-2.5 mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 flex-1">{item.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={800}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-8 py-12 shadow-xl flex flex-col items-center">
                    <div className="geo-grid-bg absolute inset-0 opacity-40"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4">법적 리스크 없이, 고객에게 선택받는 마케팅</h3>
                      <p className="text-3xl sm:text-4xl font-extrabold text-[#00e5a0] mb-8">지금 시작하세요</p>
                      <Button
                        size="lg"
                        onClick={scrollToContact}
                        className="gap-2 bg-[#00e5a0] px-8 font-bold text-[#070b14] hover:bg-[#3cf0bb] shadow-lg shadow-[#00e5a0]/25"
                      >
                        무료 상담 신청하기 <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
