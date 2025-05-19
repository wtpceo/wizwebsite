import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  Compass,
  DollarSign,
  Home,
  MapPin,
  Mountain,
  Star,
  Users,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/sections/Footer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"

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

export default function StrategyDetail() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-800">
          {/* 기하학적 패턴 요소들 */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-white"></div>
            <div className="absolute top-60 left-[30%] w-24 h-24 rounded-full border-4 border-white"></div>
            <div className="absolute top-20 right-[20%] w-32 h-32 rounded-full border-6 border-white"></div>
            <div className="absolute bottom-10 left-[20%] w-36 h-36 rounded-full border-8 border-white"></div>
            <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full border-4 border-white"></div>
          </div>

          {/* 물결 패턴 */}
          <div className="absolute inset-0 z-0 opacity-20">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0,800 C150,700 350,750 500,800 C650,850 850,800 1000,700 L1000,1000 L0,1000 Z" fill="white" />
              <path d="M0,900 C150,800 350,850 500,900 C650,950 850,900 1000,800 L1000,1000 L0,1000 Z" fill="white" />
            </svg>
          </div>

          {/* 산 모양 아이콘 패턴 */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="grid grid-cols-10 gap-4">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-emerald-800/50 z-[1]"></div>

          {/* 빛나는 원형 효과 */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl z-[1]"></div>
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl z-[1]"></div>

          {/* 콘텐츠 */}
          <div className="container relative z-10 py-28 md:py-36 lg:py-44 text-white">
            <AnimateOnScroll animation="fade-in">
              <div className="max-w-3xl space-y-8">
                <AnimateOnScroll animation="slide-up" delay={200}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <Mountain className="h-5 w-5 text-green-300" />
                    <span className="text-sm font-medium text-green-100">캠핑장 & 펜션 마케팅 솔루션</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight drop-shadow-lg">
                    당신의 숙소, 정말 잘 보이고 있나요?
                  </h1>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={400}>
                  <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md">
                    캠핑장과 펜션, 플레이스만으로는 고객의 마음을 사로잡기 어렵습니다.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={600}>
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white font-medium text-lg py-6 px-8 shadow-lg"
                    >
                      무료 상담받기
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-white hover:bg-white/20 text-lg py-6 px-8 shadow-lg backdrop-blur-sm bg-white/10"
                    >
                      성공 사례 보기
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>

            {/* 부유하는 아이콘 요소들 */}
            <div className="absolute top-20 right-20 md:right-40 animate-float-slow">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <Home className="h-10 w-10 text-green-200" />
              </div>
            </div>
            <div className="absolute bottom-20 right-10 md:right-80 animate-float-medium">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <Star className="h-8 w-8 text-yellow-200" />
              </div>
            </div>
            <div className="absolute bottom-40 left-10 md:left-40 animate-float-fast">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                <Compass className="h-7 w-7 text-blue-200" />
              </div>
            </div>
          </div>

          {/* 스크롤 다운 인디케이터 */}
          <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-[5]">
            <span className="text-white text-sm font-medium mb-2">더 알아보기</span>
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <ArrowDown className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* 웨이브 전환 효과 */}
          <div className="absolute bottom-0 left-0 right-0 z-[3]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,218.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* 문제점 섹션 */}
        <section id="problems" className="pt-0 pb-20 md:pb-28 bg-white relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-[url('/pattern-dots.png')] opacity-5 z-0"></div>
          <div className="container max-w-6xl relative z-10 pt-16 md:pt-20">
            <AnimateOnScroll animation="fade-in">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  캠핑장 & 펜션 사장님의 고민
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  이런 고민이 있으신가요?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  캠핑장과 펜션 사장님들이 자주 겪는 마케팅 문제들입니다.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="slide-up" delay={200}>
                <Card className="border-2 border-gray-200 hover:border-green-600 transition-all hover:shadow-xl shadow-md rounded-xl overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                  <CardHeader className="pb-2">
                    <div className="p-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white inline-block mb-4 transform group-hover:scale-110 transition-transform">
                      <Home className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl mb-2">홈페이지 제작의 어려움</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      홈페이지는 있어야 할 것 같은데, 어디에 맡겨야 할지 모르겠고 드론이니, 촬영이니 들어가면 금액이
                      너무 부담스럽죠?
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={400}>
                <Card className="border-2 border-gray-200 hover:border-green-600 transition-all hover:shadow-xl shadow-md rounded-xl overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                  <CardHeader className="pb-2">
                    <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-white inline-block mb-4 transform group-hover:scale-110 transition-transform">
                      <MapPin className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl mb-2">플레이스 정보의 한계</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      플레이스에 올릴 수 있는 사진은 몇 장뿐, 객실별 정보, 주변 시설, 사장님의 스토리까지 보여주긴
                      역부족입니다.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={600}>
                <Card className="border-2 border-gray-200 hover:border-green-600 transition-all hover:shadow-xl shadow-md rounded-xl overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <CardHeader className="pb-2">
                    <div className="p-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-white inline-block mb-4 transform group-hover:scale-110 transition-transform">
                      <DollarSign className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl mb-2">높은 수수료 부담</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      광고는 해도 잠깐 반짝하고, 수수료는 계속 빠져나갑니다. 예약 플랫폼에만 의존하신다면 수수료는
                      쌓이고, 고객은 '그 플랫폼의 고객'이지, 내 단골이 아닐 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* 솔루션 소개 */}
        <section
          id="solutions"
          className="py-20 md:py-28 bg-gradient-to-r from-green-600 to-emerald-500 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10 z-0"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="container text-center max-w-4xl relative z-10">
            <AnimateOnScroll animation="zoom-in">
              <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                해결책
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 leading-tight drop-shadow-md">
                이제는 "내 공간"으로 고객을 모셔올 시간입니다.
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                저희는 캠핑장과 펜션에 꼭 맞는 마케팅 솔루션을 제공합니다.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* 서비스 섹션 */}
        <section id="services" className="py-20 md:py-28 bg-white relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-[url('/pattern-dots.png')] opacity-5 z-0"></div>
          <div className="container max-w-6xl relative z-10">
            <AnimateOnScroll animation="fade-in">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  서비스
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 leading-tight bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  캠핑장 & 펜션 맞춤 마케팅 서비스
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  고객의 마음을 사로잡는 완벽한 마케팅 솔루션을 제공합니다.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-12">
              <AnimateOnScroll animation="slide-right" delay={200}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white flex-shrink-0 shadow-md">
                    <Compass className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-green-800">드론 항공 촬영 + 감성 실내/야경 사진</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      전문 촬영팀이 드론으로 숙소의 전경을 담아내고, 감성적인 실내 및 야경 사진으로 고객의 마음을
                      사로잡습니다.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={200}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex-shrink-0 shadow-md">
                    <Home className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-800">
                      객실 소개 + 예약 연결이 가능한 모바일 홈페이지
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      모바일에 최적화된 홈페이지로 객실 정보를 상세히 소개하고, 직접 예약까지 연결되는 시스템을
                      구축합니다.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={400}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-white flex-shrink-0 shadow-md">
                    <Star className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-800">블로그 리뷰 + 네이버 플레이스 최적화</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      전문적인 블로그 리뷰 작성과 네이버 플레이스 정보 최적화로 검색 노출을 극대화합니다.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={400}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white flex-shrink-0 shadow-md">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-800">
                      체험단 운영, 파워링크 광고까지 모두 한번에
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      체험단 운영으로 진정성 있는 리뷰를 확보하고, 효과적인 파워링크 광고로 타겟 고객에게 직접
                      도달합니다.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* 성과 지표 */}
        <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-[url('/pattern-dots.png')] opacity-5 z-0"></div>
          <div className="container max-w-6xl relative z-10">
            <AnimateOnScroll animation="fade-in">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  성과
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 leading-tight bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  검증된 성과
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  저희 마케팅 솔루션으로 이미 많은 캠핑장과 펜션이 성공했습니다.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-10">
              <AnimateOnScroll animation="slide-up" delay={200}>
                <Card className="text-center shadow-lg border-0 rounded-xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                  <CardHeader>
                    <div className="mx-auto p-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-md">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl mt-6 mb-2 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                      4배 이상
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xl text-gray-700">
                      숙소 1곳당 평균 4배 이상 콘텐츠 노출 증가
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={400}>
                <Card className="text-center shadow-lg border-0 rounded-xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                  <CardHeader>
                    <div className="mx-auto p-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl mt-6 mb-2 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                      50+ 리뷰
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xl text-gray-700">리뷰수 50개 이상 증가 사례 다수</CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={600}>
                <Card className="text-center shadow-lg border-0 rounded-xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-400"></div>
                  <CardHeader>
                    <div className="mx-auto p-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-md">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl mt-6 mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                      전환율 개선
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xl text-gray-700">
                      예약 전환율 개선 & 재방문 유입 보고됨
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>

            {/* 성공 사례 */}
            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="mt-20 bg-white p-10 rounded-xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <AnimateOnScroll animation="slide-right" className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent z-10"></div>
                      <Image
                        src="/images/portfolio/portfolio-4.jpg"
                        alt="성공 사례 이미지"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="slide-left" className="md:w-1/2 space-y-6">
                    <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      성공 사례
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">강원도 홍천 '숲속의 쉼터' 펜션</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      "플랫폼 수수료에만 의존하다 직접 마케팅을 시작한 후, 예약률이 30% 증가했습니다. 특히 재방문 고객이
                      늘어 안정적인 운영이 가능해졌어요."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400 drop-shadow-sm" />
                        ))}
                      </div>
                      <span className="font-medium text-lg">김철수 사장님</span>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-green-50 via-white to-emerald-50">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto mb-16">
                <div className="space-y-4">
                  <Badge
                    className="w-fit mx-auto bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 hover:from-green-200 hover:to-emerald-200 border-green-200"
                    variant="outline"
                  >
                    문의하기
                  </Badge>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                    <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                  </h2>
                  <p className="max-w-[800px] mx-auto text-gray-700 md:text-xl">
                    <span className="hidden md:inline">위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                    <span className="block md:hidden">위즈더플래닝의 전문가가<br />귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
              <AnimateOnScroll animation="slide-right" delay={200}>
                <div className="flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    {[
                      { icon: <Phone className="h-6 w-6 text-green-600" />, title: "전화 문의", content: "1670-0704" },
                      {
                        icon: <MessageCircle className="h-6 w-6 text-emerald-600" />,
                        title: "카카오톡 문의",
                        content: "@위즈더플래닝",
                      },
                      {
                        icon: <Mail className="h-6 w-6 text-green-600" />,
                        title: "이메일 문의",
                        content: "wiz@wiztheplanning.com",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div
                          className={`rounded-full ${
                            index === 0 ? "bg-green-100" : index === 1 ? "bg-emerald-100" : "bg-green-100"
                          } p-3`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-lg">{item.title}</p>
                          <p
                            className={`${
                              index === 0 ? "text-green-600" : index === 1 ? "text-emerald-600" : "text-green-600"
                            } text-lg`}
                          >
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="gap-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 text-lg px-8 py-6"
                    >
                      카카오톡 상담 바로가기
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-left" delay={200}>
                <div className="flex items-center">
                  <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8">
                    <ContactForm />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 