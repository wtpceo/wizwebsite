"use client";

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
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Image from "next/image"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/sections/ContactSection"
import { useRef } from "react"

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
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
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
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight drop-shadow-lg whitespace-nowrap max-w-none">
                    언제까지 수수료 쉐어링 하시겠습니까?
                  </h1>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={400}>
                  <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md">
                    맞습니다. 숙박업은 플레이스만으로 정보를 다 담기 힘들죠.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={600}>
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white font-medium text-lg py-6 px-8 shadow-lg"
                      onClick={scrollToContact}
                    >
                      대책 상담받기
                      <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white z-0"></div>
          <div className="container max-w-6xl relative z-10 pt-16 md:pt-20">
            <AnimateOnScroll animation="fade-in">
              <div className="text-center mb-20">
                <span className="inline-block px-5 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-5 shadow-sm">
                  캠핑장 & 펜션 사장님의 고민
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  이런 고민이 있으신가요?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed md:text-2xl">
                  캠핑장과 펜션 사장님들이 자주 겪는 마케팅 문제들입니다.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-10 items-stretch">
              <AnimateOnScroll animation="slide-up" delay={200} className="flex">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex-1 flex flex-col">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-5 flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Home className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white whitespace-nowrap">과도한 비용의 홈페이지 제작</h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      네이버 수요는 있는데 플레이스에 모든 정보를 담기에는 공간이 좁죠. 홈페이지를 만들자니 촬영비에 제작비까지 정말 높은 금액 그리고 예약 매출 쉐어링
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={400} className="flex">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex-1 flex flex-col">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 px-6 py-5 flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white whitespace-nowrap">숙박 어플들의 수수료</h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      숙박 어플을 통해 들어오는 손님은 우리 손님이 아니라 숙박 어플 손님입니다. 자체 마케팅 해야 합니다.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={600} className="flex">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex-1 flex flex-col">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 px-6 py-5 flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white whitespace-nowrap">높은 수수료 부담</h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      광고는 해도 잠깐 반짝하고, 수수료는 계속 빠져나갑니다. 예약 플랫폼에만 의존하신다면 수수료는
                      쌓이고, 고객은 '그 플랫폼의 고객'이지, 내 단골이 아닐 수 있습니다.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
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
          <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center relative z-10 text-center">
            <AnimateOnScroll animation="zoom-in">
              <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                해결책
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 leading-tight drop-shadow-md whitespace-nowrap">
                이제는 숙박어플의 손님이 아니라 내 손님을 받아야 합니다.
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

            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <AnimateOnScroll animation="slide-right" delay={200}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow h-full flex-col">
                  <div className="p-4 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white flex-shrink-0 shadow-md">
                    <Compass className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-800 whitespace-nowrap max-w-none">드론 항공 촬영 + 감성 실내/야경 사진</h3>
                  <p className="text-gray-700 text-lg leading-relaxed flex-1">
                    전문 촬영팀이 드론으로 숙소의 전경을 담아내고, 감성적인 실내 및 야경 사진으로 고객의 마음을
                    사로잡습니다.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={200}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow h-full flex-col">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex-shrink-0 shadow-md">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-800 whitespace-nowrap max-w-none">객실 소개 + 예약 연결이 가능한 모바일 홈페이지</h3>
                  <p className="text-gray-700 text-lg leading-relaxed flex-1">
                    모바일에 최적화된 홈페이지로 객실 정보를 상세히 소개하고, 직접 예약까지 연결되는 시스템을
                    구축합니다.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={400}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-shadow h-full flex-col">
                  <div className="p-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-white flex-shrink-0 shadow-md">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-800 whitespace-nowrap max-w-none">블로그 리뷰 + 네이버 플레이스 최적화</h3>
                  <p className="text-gray-700 text-lg leading-relaxed flex-1">
                    전문적인 블로그 리뷰 작성과 네이버 플레이스 정보 최적화로 검색 노출을 극대화합니다.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={400}>
                <div className="flex gap-6 items-start bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow h-full flex-col">
                  <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white flex-shrink-0 shadow-md">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-800 whitespace-nowrap max-w-none">체험단 운영, 파워링크 광고까지 모두 한번에</h3>
                  <p className="text-gray-700 text-lg leading-relaxed flex-1">
                    체험단 운영으로 진정성 있는 리뷰를 확보하고, 효과적인 파워링크 광고로 타겟 고객에게 직접
                    도달합니다.
                  </p>
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
                  수수료를 아끼면
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  더 많은 서비스를 고객에게 돌려줄 수 있습니다.,
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-10 items-stretch">
              <AnimateOnScroll animation="slide-up" delay={200}>
                <Card className="text-center shadow-lg border-0 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                  <CardHeader>
                    <div className="mx-auto p-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-md">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl mt-6 mb-2 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                      웰컴 드링크
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <CardDescription className="text-xl text-gray-700">
                      오는 손님들에게 특별한 차 한잔 드립니다.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={400}>
                <Card className="text-center shadow-lg border-0 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                  <CardHeader>
                    <div className="mx-auto p-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl mt-6 mb-2 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                      즉석 사진기
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <CardDescription className="text-xl text-gray-700">추억을 담을 사진기를 준비해드립니다.</CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={600}>
                <Card className="text-center shadow-lg border-0 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-400"></div>
                  <CardHeader>
                    <div className="mx-auto p-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-md">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl mt-6 mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                      평일 숙박권
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-end">
                    <CardDescription className="text-xl text-gray-700">
                      말도 안되는 가격의 평일 숙박권을 드릴 수 있습니다.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>

            {/* 성공 사례 */}
            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="mt-20 bg-white p-10 rounded-xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <AnimateOnScroll animation="slide-right" className="md:w-1/2 flex items-center justify-center">
                    {/* 인포그래픽/일러스트 대체 */}
                    <div className="w-full h-64 flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-emerald-50 rounded-xl shadow-inner">
                      <div className="flex items-center justify-center mb-4">
                        <Star className="h-16 w-16 text-emerald-400 drop-shadow-md" />
                        <TrendingUp className="h-16 w-16 text-green-400 drop-shadow-md ml-4" />
                      </div>
                      <div className="text-2xl font-bold text-green-700 mb-2">예약률 30% 증가!</div>
                      <div className="text-lg text-green-600">재방문 고객 증가 & 안정적 운영</div>
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

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
} 