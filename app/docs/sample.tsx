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
import { Timeline, TimelineItem } from "@/components/timeline"
import { PhotoGallery } from "@/components/photo-gallery"
import ContactForm from "@/components/contact-form"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { AnimateInView } from "@/components/animate-in-view"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-rose-500 flex items-center justify-center text-white">F</div>
            푸드마케팅
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#strategy" className="text-sm font-medium hover:text-rose-600 transition-colors">
              마케팅 전략
            </Link>
            <Link href="#process" className="text-sm font-medium hover:text-rose-600 transition-colors">
              고객 행동 흐름
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-rose-600 transition-colors">
              서비스 소개
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-rose-600 transition-colors">
              포트폴리오
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-rose-600 hover:bg-rose-700 hidden sm:flex">
              무료 진단 받기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
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

        {/* 공감 유도 섹션 */}
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

        {/* 핵심 마케팅 전략 섹션 */}
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
            <div className="mx-auto grid gap-4 sm:gap-6 py-8 md:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <AnimateInView animation="fadeIn" delay={0.2}>
                <Card className="border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg md:text-xl">전문 음식 사진이 첫인상을 결정합니다</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="mb-4 text-muted-foreground text-sm md:text-base">
                      사진 한 장이, 가게의 '맛'을 대신합니다. 스마트폰 사진으론 부족합니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">메뉴별 사진</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">공간 인테리어</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">손님 시선 고려한 연출컷</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateInView>
              <AnimateInView animation="fadeIn" delay={0.3}>
                <Card className="border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg md:text-xl">정보는 풍성하게, 클릭할 이유를 만들자</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="mb-4 text-muted-foreground text-sm md:text-base">
                      고객이 보고 "여기 괜찮다" 느끼는 건 이런 것들입니다:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">할인 쿠폰</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">신메뉴 알림</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">예약 시 혜택</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">영업시간, 위치, 주차 정보</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateInView>
              <AnimateInView animation="fadeIn" delay={0.4}>
                <Card className="border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg md:text-xl">대표 키워드로 노출되게 해야 합니다</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="mb-4 text-muted-foreground text-sm md:text-base">
                      "○○동 파스타 맛집", "○○역 이자카야" 이런 키워드에 노출되면 유입이 달라집니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">타겟 키워드 도출</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">키워드 중심 콘텐츠 제작</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">노출 결과 리포트 제공</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateInView>
              <AnimateInView animation="fadeIn" delay={0.5}>
                <Card className="border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg md:text-xl">리뷰는 최신 + 질 좋은 걸로</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="mb-4 text-muted-foreground text-sm md:text-base">
                      오래된 리뷰만 보이면? 고객은 불안해합니다.
                    </p>
                    <p className="mb-2 font-medium text-sm md:text-base">🎯 우리가 관리하는 건:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">방문자 리뷰 요청/유도</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">블로그 체험단 구성</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">낮은 평점 리뷰 대비 방어 전략</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateInView>
              <AnimateInView animation="fadeIn" delay={0.6}>
                <Card className="border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg md:text-xl">배너 디자인은 워크인 손님까지 책임진다</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="mb-4 text-muted-foreground text-sm md:text-base">
                      가게 앞을 지나는 사람에게, 한 번 더 끌리는 요소는 '디자인'입니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">외부용 POP</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">네이버 예약 배너</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">카카오 지도용 썸네일</span>
                      </li>
                    </ul>
                    <p className="mt-4 font-medium text-rose-600 text-sm md:text-base">→ 우리가 디자인합니다.</p>
                  </CardContent>
                </Card>
              </AnimateInView>
              <AnimateInView animation="fadeIn" delay={0.7}>
                <Card className="border-2 border-rose-100 transition-all hover:border-rose-300 hover:shadow-md h-full flex flex-col">
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg md:text-xl">확장은 네이버 밖에서도 이뤄져야 합니다</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="mb-4 text-muted-foreground text-sm md:text-base">
                      요즘 고객은 '데이트 앱', '예약 플랫폼', '당근마켓'에서도 가게를 봅니다.
                    </p>
                    <p className="mb-2 font-medium text-sm md:text-base">우리는 이곳까지 대응합니다.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">당근마켓 동네 마케팅</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">데이트앱 식당 프로모션</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">타 플랫폼 연동 관리</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* 사진 갤러리 섹션 */}
        <section id="gallery" className="w-full py-10 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateInView animation="fadeIn">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">포트폴리오</div>
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
                    우리의 작업 결과물을 확인하세요
                  </h2>
                  <p className="max-w-[900px] text-gray-500 text-sm md:text-base">
                    전문 사진작가와 디자이너가 만든 고품질 콘텐츠로 고객의 시선을 사로잡습니다.
                  </p>
                </div>
              </div>
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={0.3}>
              <Tabs defaultValue="food" className="mt-8 md:mt-12">
                <TabsList className="mx-auto mb-6 md:mb-8 grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="food">음식 사진</TabsTrigger>
                  <TabsTrigger value="interior">인테리어</TabsTrigger>
                  <TabsTrigger value="banner">배너/디자인</TabsTrigger>
                </TabsList>
                <TabsContent value="food">
                  <PhotoGallery
                    photos={[
                      {
                        src: "/gourmet-food.png",
                        alt: "파스타 요리",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/steak-dish.png",
                        alt: "스테이크 요리",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/dessert-photography.png",
                        alt: "디저트",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/vibrant-salad-dish.png",
                        alt: "샐러드",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/vibrant-cocktail.png",
                        alt: "음료",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/main-course-photography.png",
                        alt: "메인 요리",
                        width: 600,
                        height: 400,
                      },
                    ]}
                  />
                </TabsContent>
                <TabsContent value="interior">
                  <PhotoGallery
                    photos={[
                      {
                        src: "/modern-restaurant-interior.png",
                        alt: "레스토랑 내부",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/elegant-restaurant-table.png",
                        alt: "테이블 세팅",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/restaurant-bar-area.png",
                        alt: "바 공간",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/restaurant-private-room.png",
                        alt: "프라이빗 룸",
                        width: 600,
                        height: 400,
                      },
                    ]}
                  />
                </TabsContent>
                <TabsContent value="banner">
                  <PhotoGallery
                    photos={[
                      {
                        src: "/restaurant-banner.png",
                        alt: "네이버 예약 배너",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/placeholder.svg?height=400&width=600&query=restaurant map thumbnail",
                        alt: "카카오맵 썸네일",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/placeholder.svg?height=400&width=600&query=restaurant POP design",
                        alt: "POP 디자인",
                        width: 600,
                        height: 400,
                      },
                      {
                        src: "/placeholder.svg?height=400&width=600&query=restaurant menu design",
                        alt: "메뉴판 디자인",
                        width: 600,
                        height: 400,
                      },
                    ]}
                  />
                </TabsContent>
              </Tabs>
            </AnimateInView>
          </div>
        </section>

        {/* 서비스 소개 섹션 */}
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

            <div className="mx-auto mt-8 md:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <AnimateInView animation="fadeIn" delay={0.2}>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">전문 사진 촬영</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    전문 장비와 조명으로 음식의 맛이 보이는 사진을 촬영합니다
                  </p>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.3}>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Edit className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">전문 사진 편집</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    색감과 구도를 최적화하여 음식의 매력을 극대화합니다
                  </p>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.4}>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">온라인 플랫폼에 일괄 등록</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    네이버, 카카오, 구글 등 주요 플랫폼에 정보를 일괄 등록합니다
                  </p>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.5}>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Ticket className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">쿠폰, 소식 발행</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    정기적인 쿠폰과 소식으로 고객의 재방문을 유도합니다
                  </p>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.6}>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Key className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">대표키워드 세팅</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    지역과 특성에 맞는 키워드로 검색 노출을 최적화합니다
                  </p>
                </div>
              </AnimateInView>

              <AnimateInView animation="fadeIn" delay={0.7}>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">예약 관리</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    온라인 예약 시스템 구축 및 효율적인 예약 관리를 지원합니다
                  </p>
                </div>
              </AnimateInView>
            </div>

            <AnimateInView animation="fadeIn" delay={0.8}>
              <div className="mt-10 md:mt-16 text-center px-4">
                <div className="inline-block rounded-lg bg-rose-600 px-4 md:px-6 py-4 text-white max-w-2xl mx-auto shadow-md">
                  <p className="text-lg md:text-xl font-semibold mb-2">이게 다가 아닙니다.</p>
                  <p className="mb-4 text-sm md:text-base">음식점마다 필요한 맞춤형 마케팅 전략을 제공해 드립니다.</p>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-rose-600 w-full sm:w-auto"
                  >
                    자세한건 상담 받아보세요
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="w-full py-10 md:py-24 lg:py-32 bg-rose-600 text-white">
          <div className="container px-4 md:px-6">
            <AnimateInView animation="fadeIn">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
                    우리 가게도 노출되게 만들고 싶다면?
                  </h2>
                  <p className="max-w-[900px] text-rose-100 text-sm md:text-base">
                    지금 무료로 마케팅 상태 진단 받아보세요.
                  </p>
                </div>
              </div>
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={0.3}>
              <div className="w-full max-w-sm mx-auto space-y-2 mt-6">
                <ContactForm />
              </div>
            </AnimateInView>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-7 w-7 rounded-full bg-rose-500 flex items-center justify-center text-white text-sm">
              F
            </div>
            푸드마케팅
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} 푸드마케팅. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              이용약관
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  )
}
