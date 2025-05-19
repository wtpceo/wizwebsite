"use client"

import Link from "next/link"
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
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/app/components/AnimatedSection"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import ContactForm from "@/components/contact-form"
import { useRef } from "react"

export default function StrategyDetail() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
          <div className="container relative z-10">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6">
                  <span className="text-rose-500 mr-1">뷰티 업종</span> 마케팅 전문가
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6 break-keep">
                  뷰티 마케팅, 아무거나 올렸다가 <span className="text-rose-500">의료법에 걸릴 수 있습니다</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 break-keep">
                  효과 강조? 시술 사진? 글 하나에도 법적 리스크가 따릅니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" onClick={scrollToContact}>
                    무료 상담 신청하기 <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-rose-100/50 blur-3xl"></div>
          <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-pink-100/50 blur-3xl"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        </section>

        {/* Problem Recognition Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={200}>
                <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-white p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
                  <div className="absolute top-4 right-8 w-32 h-32 bg-rose-200/40 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-8 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center mb-6">
                      <Sparkles className="h-20 w-20 text-rose-400 drop-shadow-lg" />
                    </div>
                    <h3 className="text-2xl font-bold text-rose-500 mb-2">뷰티 산업의 변화</h3>
                    <div className="text-lg text-gray-700 font-semibold mb-2">고객층 확대 & 마케팅 복잡성 증가</div>
                    <p className="text-center text-gray-500 text-base max-w-xs">
                      요즘은 남성들도 피부, 헤어, 네일에 적극적입니다.<br />
                      고객층은 넓어졌지만, 마케팅 환경은 더욱 복잡해졌습니다.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 whitespace-nowrap max-w-none">
                    고객은 많아졌지만, 마케팅은 점점 더 어렵고 위험해졌습니다
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    뷰티 업종의 마케팅 환경이 변화하면서 새로운 도전과 위험이 생겨났습니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-rose-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">의료법 위반 리스크</h3>
                        <p className="text-muted-foreground">잘못된 표현 하나로 법적 제재를 받을 수 있습니다</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-rose-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">경쟁 심화</h3>
                        <p className="text-muted-foreground">
                          비슷한 서비스를 제공하는 업체들 사이에서 차별화가 필요합니다
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-rose-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">높은 마케팅 비용</h3>
                        <p className="text-muted-foreground">효율적인 비용 관리 없이는 마케팅 ROI가 낮아집니다</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Problem Section */}
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="container relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 break-keep">뷰티 마케팅에서 가장 중요한 건</h2>
                <p className="text-base sm:text-lg text-muted-foreground break-keep">
                  성공적인 뷰티 마케팅을 위한 핵심 요소들을 효과적으로 전달해야 합니다.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />,
                  title: "기기",
                  description: "최신 장비와 기술을 효과적으로 소개해야 합니다",
                },
                {
                  icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />,
                  title: "제품",
                  description: "사용하는 제품의 품질과 효과를 신뢰성 있게 전달해야 합니다",
                },
                {
                  icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />,
                  title: "노하우",
                  description: "전문적인 기술과 경험을 고객에게 어필해야 합니다",
                },
                {
                  icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />,
                  title: "원장님의 철학",
                  description: "매장의 가치와 비전을 명확하게 전달해야 합니다",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={200 * (index + 1)}>
                  <Card className="border-none shadow-lg bg-white">
                    <CardContent className="p-4 sm:p-6 flex flex-col items-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 sm:mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-center break-keep">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground text-center break-keep">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={1000}>
              <div className="mt-12 text-center">
                <p className="text-xl font-medium max-w-2xl mx-auto">
                  하지만 이걸 <span className="text-rose-500 font-bold">어떻게 보여주느냐</span>에 따라 성패가 갈립니다
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <AnimatedSection>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 break-keep">위즈더플래닝이 제안하는 전략</h2>
                <p className="text-base sm:text-lg text-muted-foreground break-keep">
                  고객은 눈으로 확인하고, 검색해서 결정합니다. 이제는 감각적인 콘텐츠와 탄탄한 운영으로 신뢰를 쌓아야 할
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
                  icon: <MapPin className="h-16 w-16 text-rose-400 mb-6" />,
                  title: "네이버 플레이스 최적화",
                  description: "고객이 가장 먼저 접하는 매장 정보를\n매력적이고 전문적으로 구성합니다",
                  points: [
                    "검색 상위 노출을 위한 키워드 최적화",
                    "고객 리뷰 관리 및 평점 향상 전략",
                    "매장 정보, 사진, 지도 등 최신화",
                    "이벤트/프로모션 연동으로 방문 유도"
                  ]
                },
                {
                  value: "blog",
                  icon: <MessageSquare className="h-16 w-16 text-rose-400 mb-6" />,
                  title: "전문성 있는 블로그 콘텐츠",
                  description: "의료법을 준수하면서도 효과적인\nBefore & After 콘텐츠를 제작합니다",
                  points: [
                    "의료법 준수, 안전한 마케팅 콘텐츠",
                    "전문가가 직접 작성하는 신뢰도 높은 포스팅",
                    "Before & After, 후기, Q&A 등 다양한 포맷",
                    "검색 노출 극대화를 위한 키워드 전략"
                  ]
                },
                {
                  value: "photo",
                  icon: <Camera className="h-16 w-16 text-rose-400 mb-6" />,
                  title: "전문 사진 촬영",
                  description: "매장의 분위기와 전문성을\n고품질 이미지로 담아냅니다",
                  points: [
                    "매장/시술/제품 등 맞춤형 촬영 기획",
                    "고화질 이미지로 브랜드 신뢰도 상승",
                    "SNS/플레이스/홈페이지 등 멀티 활용",
                    "감각적인 연출로 차별화된 이미지 제공"
                  ]
                },
                {
                  value: "community",
                  icon: <Smartphone className="h-16 w-16 text-rose-400 mb-6" />,
                  title: "체험단 & 커뮤니티 활용",
                  description: "실제 고객의 생생한 후기로\n신뢰도를 높입니다",
                  points: [
                    "실제 고객 후기 기반 신뢰도 강화",
                    "다양한 커뮤니티/플랫폼 연계 노출",
                    "체험단 모집/운영/후기 관리 원스톱",
                    "바이럴 효과로 자연스러운 홍보"
                  ]
                },
                {
                  value: "website",
                  icon: <Globe className="h-16 w-16 text-rose-400 mb-6" />,
                  title: "통합 홈페이지 구축",
                  description: "모든 마케팅 채널을 하나로 통합하여\n효율적인 관리가 가능합니다",
                  points: [
                    "모바일/PC 반응형 맞춤 디자인",
                    "예약, 문의, 후기 등 기능 통합",
                    "플레이스/블로그/SNS와 연동",
                    "브랜드 신뢰도와 정보 전달력 극대화"
                  ]
                },
              ].map((tab, index) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <AnimatedSection delay={200}>
                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl flex flex-col items-center justify-center min-h-[300px]">
                        {tab.icon}
                        <h3 className="text-xl font-bold mb-4 text-center">{tab.title}</h3>
                        <p className="text-center text-muted-foreground whitespace-pre-line">
                          {tab.description}
                        </p>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          {tab.icon}
                          <h3 className="text-2xl font-bold">{tab.title}</h3>
                        </div>
                        <ul className="space-y-4">
                          {tab.points && tab.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-base text-gray-700">
                              <CheckCircle className="h-5 w-5 text-rose-400 mt-1 flex-shrink-0" />
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
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="container relative z-10">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">비용 걱정? 필요 없습니다</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  홈페이지, 사진촬영, 블로그, 광고까지 천만 원이 넘는 견적서에 놀라셨다면…
                  <br />
                  이제 위즈더플래닝이 도와드립니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
                  {[
                    {
                      icon: <TrendingUp className="h-6 w-6 text-rose-500" />,
                      title: "저비용 시작",
                      description: "합리적인 비용으로 효과적인 마케팅을 시작할 수 있습니다",
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6 text-rose-500" />,
                      title: "필요 요소만 선택",
                      description: "필요한 서비스만 선택하여 맞춤형 마케팅 전략을 구성할 수 있습니다",
                    },
                    {
                      icon: <Sparkles className="h-6 w-6 text-rose-500" />,
                      title: "업종별 템플릿 보유",
                      description: "모든 업종별 템플릿 및 콘텐츠 플랜을 보유하고 있습니다",
                    },
                  ].map((item, index) => (
                    <AnimatedSection key={item.title} delay={200 * (index + 1)}>
                      <Card className="border-none shadow-lg bg-white h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col items-center flex-1">
                          <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-center flex-1">{item.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={800}>
                  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-6">법적 리스크 없이, 고객에게 선택받는 마케팅</h3>
                    <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-8 animate-pulse drop-shadow-md">지금 시작하세요</p>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-16 md:py-24 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="container relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6">
                  <span className="text-rose-500 mr-1">문의하기</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 break-keep">
                  지금 바로 상담받고<br className="block sm:hidden" />마케팅 고민을 해결하세요
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground break-keep">
                  위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
              <AnimatedSection delay={200}>
                <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />, title: "전화 문의", content: "1670-0704" },
                      {
                        icon: <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />,
                        title: "카카오톡 문의",
                        content: "@위즈더플래닝",
                      },
                      {
                        icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500" />,
                        title: "이메일 문의",
                        content: "wiz@wiztheplanning.com",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 sm:gap-4">
                        <div className="rounded-full bg-rose-100 p-2 sm:p-3">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-base sm:text-lg">{item.title}</p>
                          <p className="text-rose-500 text-base sm:text-lg break-keep">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 sm:pt-4">
                    <Button
                      size="lg"
                      className="gap-1 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/30 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                    >
                      카카오톡 상담 바로가기
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="flex items-center">
                  <div className="w-full max-w-md mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
                    <ContactForm />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 