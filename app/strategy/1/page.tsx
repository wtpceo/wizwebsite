"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  MapPin,
  Search,
  Users,
  Camera,
  Edit,
  Globe,
  Ticket,
  Key,
  Calendar,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhotoGallery } from "@/components/photo-gallery"
import { AnimateInView } from "../../docs/1/components/animate-in-view"
import { EqualHeightCards } from "../../docs/1/components/equer-hegiht-card"
import { MobileMenu } from "../../docs/1/components/mobile-menu"
import { ScrollToTopButton } from "../../docs/1/components/scrolltopbutten"
import { Timeline, TimelineItem } from "../../docs/1/components/timline"
import Header from "@/components/layout/Header"
import Footer from "@/components/Footer"
import ContactSection from "@/components/sections/ContactSection"

export default function Page() {
  // 전략 카드 데이터
  const strategyCards = [
    {
      title: "전문 음식 사진이 첫인상을 결정합니다",
      desc: "사진 한 장이, 가게의 '맛'을 대신합니다. 스마트폰 사진으론 부족합니다.",
      items: ["메뉴별 사진", "공간 인테리어", "손님 시선 고려한 연출컷"],
    },
    {
      title: "정보는 풍성하게, 클릭할 이유를 만들자",
      desc: "고객이 보고 '여기 괜찮다' 느끼는 건 이런 것들입니다:",
      items: ["할인 쿠폰", "신메뉴 알림", "예약 시 혜택", "영업시간, 위치, 주차 정보"],
    },
    {
      title: "대표 키워드로 노출되게 해야 합니다",
      desc: '"○○동 파스타 맛집", "○○역 이자카야" 이런 키워드에 노출되면 유입이 달라집니다.',
      items: ["타겟 키워드 도출", "키워드 중심 콘텐츠 제작", "노출 결과 리포트 제공"],
    },
    {
      title: "리뷰는 최신 + 질 좋은 걸로",
      desc: "오래된 리뷰만 보이면? 고객은 불안해합니다.",
      items: ["방문자 리뷰 요청/유도", "블로그 체험단 구성", "낮은 평점 리뷰 대비 방어 전략"],
    },
    {
      title: "배너 디자인은 워크인 손님까지 책임진다",
      desc: "가게 앞을 지나는 사람에게, 한 번 더 끌리는 요소는 '디자인'입니다.",
      items: ["외부용 POP", "네이버 예약 배너", "카카오 지도용 썸네일"],
      extra: "→ 우리가 디자인합니다.",
    },
    {
      title: "확장은 네이버 밖에서도 이뤄져야 합니다",
      desc: "요즘 고객은 '데이트 앱', '예약 플랫폼', '당근마켓'에서도 가게를 봅니다.",
      items: ["당근마켓 동네 마케팅", "데이트앱 식당 프로모션", "타 플랫폼 연동 관리"],
      extra: "우리는 이곳까지 대응합니다.",
    },
  ]

  // 서비스 카드 데이터
  const serviceCards = [
    {
      icon: <Camera className="h-6 w-6 text-rose-600" />, title: "전문 사진 촬영", desc: "전문 장비와 조명으로 음식의 맛이 보이는 사진을 촬영합니다",
    },
    {
      icon: <Edit className="h-6 w-6 text-rose-600" />, title: "전문 사진 편집", desc: "색감과 구도를 최적화하여 음식의 매력을 극대화합니다",
    },
    {
      icon: <Globe className="h-6 w-6 text-rose-600" />, title: "온라인 플랫폼에 일괄 등록", desc: "네이버, 카카오, 구글 등 주요 플랫폼에 정보를 일괄 등록합니다",
    },
    {
      icon: <Ticket className="h-6 w-6 text-rose-600" />, title: "쿠폰, 소식 발행", desc: "정기적인 쿠폰과 소식으로 고객의 재방문을 유도합니다",
    },
    {
      icon: <Key className="h-6 w-6 text-rose-600" />, title: "대표키워드 세팅", desc: "지역과 특성에 맞는 키워드로 검색 노출을 최적화합니다",
    },
    {
      icon: <Calendar className="h-6 w-6 text-rose-600" />, title: "예약 관리", desc: "온라인 예약 시스템 구축 및 효율적인 예약 관리를 지원합니다",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        {/* 히어로 섹션 */}
        <section className="w-full py-10 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <AnimateInView animation="fadeIn" delay={0.2}>
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                      "요즘 음식점, 맛만 좋다고 손님 오는 시대 아닙니다."
                    </h1>
                    <h2 className="text-lg font-semibold text-rose-600 md:text-xl lg:text-2xl">
                      노출, 사진, 리뷰… 전부 '전략'입니다.
                    </h2>
                    <p className="max-w-[600px] text-gray-500 text-base md:text-lg">
                      온라인 마케팅, 이제는 선택이 아니라 <span className="font-bold">필수입니다.</span>
                    </p>
                  </div>
                </AnimateInView>
                <AnimateInView animation="slideUp" delay={0.4}>
                  <div className="mt-6 space-y-2">
                    <p className="text-lg font-semibold text-rose-600 md:text-xl">이제 그만 망설이고 결정하세요.</p>
                    <p className="text-base font-medium md:text-lg">변할것인지 방치할 것인지</p>
                  </div>
                </AnimateInView>
                <div className="mt-6 sm:hidden">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    무료 진단 받기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <AnimateInView animation="slideLeft" delay={0.3}>
                <div className="flex items-center justify-center mt-6 lg:mt-0">
                  <Image
                    src="/restaurant-marketing.png"
                    width={550}
                    height={450}
                    alt="음식점 마케팅 이미지"
                    className="rounded-lg object-cover shadow-md w-full max-w-md mx-auto"
                    priority
                  />
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* 고객 행동 흐름(타임라인) */}
        <section id="process" className="w-full py-10 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateInView animation="fadeIn">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">현실 인식</div>
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
                    "맛집 찾을 때, 대부분 어디서 검색하세요?"
                  </h2>
                  <p className="max-w-[900px] text-gray-500 text-base md:text-lg">
                    ✅ 데이트 앱? 예약 앱? 배달 앱?
                    <br />❗ <span className="font-bold">결국엔 네이버 검색입니다.</span>
                  </p>
                </div>
              </div>
            </AnimateInView>
            <div className="mx-auto mt-12 md:mt-16 max-w-3xl">
              <AnimateInView animation="fadeIn" delay={0.2}>
                <h3 className="mb-6 md:mb-8 text-center text-lg md:text-xl font-semibold">고객은 이렇게 움직입니다:</h3>
              </AnimateInView>
              <Timeline>
                <AnimateInView animation="slideRight" delay={0.3}>
                  <TimelineItem icon={<Search className="h-5 w-5" />} title="검색">
                    <p>네이버에서 지역 + 키워드 검색</p>
                    <p className="text-sm text-muted-foreground">예: "강남 파스타", "홍대 이자카야"</p>
                  </TimelineItem>
                </AnimateInView>
                <AnimateInView animation="slideRight" delay={0.5}>
                  <TimelineItem icon={<MapPin className="h-5 w-5" />} title="확인">
                    <p>플레이스 보고 위치/사진/리뷰 체크</p>
                    <p className="text-sm text-muted-foreground">사진과 리뷰가 첫인상을 결정합니다</p>
                  </TimelineItem>
                </AnimateInView>
                <AnimateInView animation="slideRight" delay={0.7}>
                  <TimelineItem icon={<Users className="h-5 w-5" />} title="결정">
                    <p>블로그에서 실제 후기/메뉴 확인 후 방문 결정</p>
                    <p className="text-sm text-muted-foreground">신뢰할 수 있는 정보가 방문을 유도합니다</p>
                  </TimelineItem>
                </AnimateInView>
              </Timeline>
              <AnimateInView animation="fadeIn" delay={0.9}>
                <p className="mt-8 text-center font-medium text-rose-600">
                  💡 이 흐름을 <span className="font-bold">잡아야</span>, 손님이 들어옵니다.
                </p>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* 마케팅 전략 카드 */}
        <section id="strategy" className="w-full py-10 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <AnimateInView animation="fadeIn">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">핵심 전략</div>
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
                    음식점 온라인 마케팅 6가지 전략
                  </h2>
                  <p className="max-w-[900px] text-gray-500 text-base md:text-lg">
                    맛있는 음식만으로는 부족합니다. 고객이 찾고, 선택하게 만드는 전략이 필요합니다.
                  </p>
                </div>
              </div>
            </AnimateInView>
            <EqualHeightCards selector=".strategy-card" />
            <div className="mx-auto grid gap-4 sm:gap-6 py-8 md:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {strategyCards.map((card, idx) => (
                <AnimateInView animation="fadeIn" delay={0.2 + idx * 0.1} key={card.title}>
                  <Card className="strategy-card border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                    <CardHeader className="pb-2 flex-shrink-0">
                      <CardTitle className="text-lg md:text-xl">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <p className="mb-4 text-muted-foreground text-sm md:text-base">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.items.map(item => (
                          <li className="flex items-start" key={item}>
                            <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {card.extra && <p className="mt-4 font-medium text-rose-600 text-sm md:text-base">{card.extra}</p>}
                    </CardContent>
                  </Card>
                </AnimateInView>
              ))}
            </div>
          </div>
        </section>

        {/* 서비스 소개 카드 */}
        <section id="services" className="w-full py-10 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <AnimateInView animation="fadeIn">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">서비스 소개</div>
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
                    음식점 마케팅의 모든 것을 제공합니다
                  </h2>
                  <p className="max-w-[900px] text-gray-500 text-sm md:text-base">
                    전문적인 서비스로 귀하의 음식점을 온라인에서 빛나게 만들어 드립니다
                  </p>
                </div>
              </div>
            </AnimateInView>
            <EqualHeightCards selector=".service-card" />
            <div className="mx-auto mt-8 md:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card, idx) => (
                <AnimateInView animation="fadeIn" delay={0.2 + idx * 0.1} key={card.title}>
                  <div className="service-card flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{card.desc}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </section>

        {/* 문의 받기 섹션 */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
} 