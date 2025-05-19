"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, Palette, Globe, Ticket, Key, Calendar, Phone, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { AnimateInView } from "@/components/animate-in-view"
import ContactForm from "@/components/contact-form"
import { useState } from "react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
        <section className="w-full py-10 md:py-24 lg:py-32 bg-[#FFF6F7]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
              {/* 좌측 텍스트 */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black">
                  "요즘 음식점, 맛만 좋다고 손님 오는 시대 아닙니다."
                </h1>
                <div className="text-xl md:text-2xl font-extrabold text-rose-600">
                  노출, 사진, 리뷰… 전부 '전략'입니다.
                </div>
                <div className="text-base md:text-lg text-gray-500 font-semibold">
                  온라인 마케팅, 이제는 선택이 아니라 <span className="font-bold text-gray-700">필수입니다.</span>
                </div>
                <div className="pt-4">
                  <div className="text-lg md:text-xl font-extrabold text-rose-600 mb-1">
                    이제 그만 망설이고 결정하세요.
                  </div>
                  <div className="text-base md:text-lg text-gray-500 font-semibold">
                    변할 것인지 방치할 것인지
                  </div>
                </div>
              </div>
              {/* 우측 이미지 */}
              <div className="flex items-center justify-center">
                <Image
                  src="/restaurant-marketing.png"
                  width={550}
                  height={450}
                  alt="음식점 마케팅 이미지"
                  className="rounded-xl shadow-xl w-full max-w-xl object-cover"
                  priority
                />
              </div>
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
                    ✅ 데이트 앱? 예약 앱? 배달 앱?<br />❗ <span className="font-bold">결국엔 네이버 검색입니다.</span>
                  </p>
                </div>
              </div>
            </AnimateInView>
            <div className="mx-auto mt-12 md:mt-16 max-w-3xl">
              <AnimateInView animation="fadeIn" delay={0.2}>
                <h3 className="mb-6 md:mb-8 text-center text-lg md:text-xl font-semibold">고객은 이렇게 움직입니다:</h3>
              </AnimateInView>
              <ul className="space-y-6 mt-6">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-rose-500 mr-2 mt-1">1.</span>
                  <div>
                    <strong>네이버에서 지역 + 키워드 검색</strong><br />
                    <span className="text-sm text-muted-foreground">예: "강남 파스타", "홍대 이자카야"</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-rose-500 mr-2 mt-1">2.</span>
                  <div>
                    <strong>플레이스 보고 위치/사진/리뷰 체크</strong><br />
                    <span className="text-sm text-muted-foreground">사진과 리뷰가 첫인상을 결정합니다</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-rose-500 mr-2 mt-1">3.</span>
                  <div>
                    <strong>블로그에서 실제 후기/메뉴 확인 후 방문 결정</strong><br />
                    <span className="text-sm text-muted-foreground">신뢰할 수 있는 정보가 방문을 유도합니다</span>
                  </div>
                </li>
              </ul>
              <div className="mt-8 text-center text-rose-600 font-semibold">
                💡 이 흐름을 <span className="underline">잡아야</span> 손님이 들어옵니다.
              </div>
            </div>
          </div>
        </section>

        {/* 핵심 마케팅 전략 섹션 */}
        <section id="strategy" className="w-full py-10 md:py-24 lg:py-32 bg-[#F7F8FA]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-rose-100 px-4 py-1 text-base font-semibold text-rose-600 mb-2">핵심 전략</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black">음식점 온라인 마케팅 6가지 전략</h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium">맛있는 음식만으로는 부족합니다. 고객이 찾고, 선택하게 만드는 전략이 필요합니다.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {/* 카드 1 */}
              <div className="bg-white rounded-xl border border-rose-100 p-8 text-left shadow-none">
                <h3 className="font-bold text-xl text-black mb-2">전문 음식 사진이 첫인상을 결정합니다</h3>
                <p className="text-gray-500 mb-4">사진 한 장이, 가게의 '맛'을 대신합니다.<br/>스마트폰 사진으론 부족합니다.</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>메뉴별 사진</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>공간 인테리어</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>손님 시선 고려한 연출컷</li>
                </ul>
              </div>
              {/* 카드 2 */}
              <div className="bg-white rounded-xl border border-rose-100 p-8 text-left shadow-none">
                <h3 className="font-bold text-xl text-black mb-2">정보는 풍성하게, 클릭할 이유를 만들자</h3>
                <p className="text-gray-500 mb-4">고객이 보고 "여기 괜찮다" 느끼는 건 이런 것들입니다:</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>할인 쿠폰</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>신메뉴 알림</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>예약 시 혜택</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>영업시간, 위치, 주차 정보</li>
                </ul>
              </div>
              {/* 카드 3 */}
              <div className="bg-white rounded-xl border border-rose-100 p-8 text-left shadow-none">
                <h3 className="font-bold text-xl text-black mb-2">대표 키워드로 노출되게 해야 합니다</h3>
                <p className="text-gray-500 mb-4">"○○동 파스타 맛집", "○○역 이자카야"<br/>이런 키워드에 노출되면 유입이 달라집니다.</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>타겟 키워드 도출</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>키워드 중심 콘텐츠 제작</li>
                  <li className="flex items-center text-base text-gray-800"><span className="text-rose-500 mr-2">✔</span>노출 결과 리포트 제공</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 사진 갤러리 섹션 */}
        <section id="gallery" className="w-full py-10 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            {/* 상단 뱃지/타이틀/서브타이틀 */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block rounded-full bg-rose-100 px-4 py-1 text-base font-semibold text-rose-600 mb-2">포트폴리오</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black">우리의 작업 결과물을 확인하세요</h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium">전문 사진작가와 디자이너가 만든 고품질 콘텐츠로 고객의 시선을 사로잡습니다.</p>
            </div>
            {/* 탭 */}
            {(() => {
              const [tab, setTab] = useState<'food'|'interior'|'banner'>('food');
              const tabList = [
                { key: 'food', label: '음식 사진' },
                { key: 'interior', label: '인테리어' },
                { key: 'banner', label: '배너/디자인' },
              ];
              const images = {
                food: [
                  '/gallery/food1.jpg',
                  '/gallery/food2.jpg',
                  '/gallery/food3.jpg',
                  '/gallery/food4.jpg',
                  '/gallery/food5.jpg',
                  '/gallery/food6.jpg',
                ],
                interior: [
                  '/gallery/interior1.jpg',
                  '/gallery/interior2.jpg',
                  '/gallery/interior3.jpg',
                ],
                banner: [
                  '/gallery/banner1.jpg',
                  '/gallery/banner2.jpg',
                  '/gallery/banner3.jpg',
                ],
              };
              return (
                <>
                  <div className="flex justify-center gap-2 mb-8">
                    {tabList.map(t => (
                      <button
                        key={t.key}
                        onClick={() => setTab(t.key as typeof tab)}
                        className={`px-6 py-2 rounded-lg font-semibold text-lg transition border ${tab === t.key ? 'bg-white border-rose-200 text-black shadow' : 'bg-gray-100 border-transparent text-gray-400'}`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {images[tab].map((src, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-2xl group aspect-[4/3]">
                        <Image
                          src={src}
                          alt="포트폴리오 이미지"
                          fill
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-lg font-bold">확대보기</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )
            })()}
          </div>
        </section>

        {/* 서비스 소개 섹션 */}
        <section id="services" className="w-full py-16 md:py-28 bg-[#FFE9ED]">
          <div className="container px-4 md:px-6">
            {/* 상단 뱃지/타이틀/서브타이틀 */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block rounded-full bg-rose-100 px-4 py-1 text-base font-semibold text-rose-600 mb-2">서비스 소개</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black">음식점 마케팅의 모든 것을 제공합니다</h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium">전문적인 서비스로 귀하의 음식점을 온라인에서 빛나게 만들어 드립니다.</p>
            </div>
            {/* 6개 카드 */}
            <div className="grid gap-6 md:grid-cols-3 mb-10">
              {/* 카드 1 */}
              <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-rose-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Camera className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg text-black mb-2">전문 사진 촬영</h3>
                <p className="text-gray-500 text-base">전문 장비와 조명으로 음식의 맛이 보이는 사진을 촬영합니다</p>
              </div>
              {/* 카드 2 */}
              <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-rose-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Palette className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg text-black mb-2">전문 사진 편집</h3>
                <p className="text-gray-500 text-base">색감과 구도를 최적화하여 음식의 매력을 극대화합니다</p>
              </div>
              {/* 카드 3 */}
              <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-rose-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Globe className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg text-black mb-2">온라인 플랫폼에 일괄 등록</h3>
                <p className="text-gray-500 text-base">네이버, 카카오, 구글 등 주요 플랫폼에 정보를 일괄 등록합니다</p>
              </div>
              {/* 카드 4 */}
              <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-rose-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Ticket className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg text-black mb-2">쿠폰, 소식 발행</h3>
                <p className="text-gray-500 text-base">정기적인 쿠폰과 소식으로 고객의 재방문을 유도합니다</p>
              </div>
              {/* 카드 5 */}
              <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-rose-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Key className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg text-black mb-2">대표키워드 세팅</h3>
                <p className="text-gray-500 text-base">지역과 특성에 맞는 키워드로 검색 노출을 최적화합니다</p>
              </div>
              {/* 카드 6 */}
              <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-rose-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg text-black mb-2">예약 관리</h3>
                <p className="text-gray-500 text-base">온라인 예약 시스템 구축 및 효율적인 예약 관리를 지원합니다</p>
              </div>
            </div>
            {/* 하단 CTA */}
            <div className="flex flex-col items-center justify-center mt-8">
              <div className="bg-rose-600 rounded-xl px-8 py-8 text-center w-full max-w-xl">
                <div className="text-white text-lg md:text-xl font-bold mb-2">이게 다가 아닙니다.</div>
                <div className="text-white text-base md:text-lg mb-4">음식점마다 필요한 맞춤형 마케팅 전략을 제공합니다.</div>
                <button className="bg-white text-rose-600 font-bold rounded-lg px-6 py-3 text-base md:text-lg shadow hover:bg-rose-50 transition">
                  자세한 상담 받아보세요 &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div className="space-y-2" variants={fadeIn}>
                  <Badge
                    className="w-fit bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 hover:from-rose-200 hover:to-pink-200 border-rose-200"
                    variant="outline"
                  >
                    문의하기
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                    <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                    <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                  </h2>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    <span className="hidden md:inline">위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                    <span className="block md:hidden">위즈더플래닝의 전문가가<br />귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                  </p>
                </motion.div>
                <motion.div className="space-y-4" variants={staggerContainer}>
                  {[
                    { icon: <Phone className="h-5 w-5 text-rose-600" />, title: "전화 문의", content: "1670-0704" },
                    {
                      icon: <MessageCircle className="h-5 w-5 text-pink-600" />,
                      title: "카카오톡 문의",
                      content: "@위즈더플래닝",
                    },
                    {
                      icon: <Mail className="h-5 w-5 text-rose-600" />,
                      title: "이메일 문의",
                      content: "wiz@wiztheplanning.com",
                    },
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-center gap-2" variants={fadeIn}>
                      <div
                        className={`rounded-full ${
                          index === 0 ? "bg-rose-100" : index === 1 ? "bg-pink-100" : "bg-rose-100"
                        } p-2`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.title}</p>
                        <p
                          className={`${
                            index === 0 ? "text-rose-600" : index === 1 ? "text-pink-600" : "text-rose-600"
                          }`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8">
                  <form className="space-y-4" onSubmit={async (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const data = {
                      name: formData.get('name'),
                      phone: formData.get('phone'),
                      storeName: formData.get('storeName'),
                      message: formData.get('message')
                    }

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      })

                      if (response.ok) {
                        alert('문의가 성공적으로 접수되었습니다.')
                        e.currentTarget.reset()
                      } else {
                        alert('문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.')
                      }
                    } catch (error) {
                      console.error('문의 처리 중 오류:', error)
                      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.')
                    }
                  }}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        이름
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="홍길동"
                        required
                        className="h-12 bg-gray-50 border-gray-200 focus:border-rose-500 focus:ring-rose-500/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        연락처
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="010-0000-0000"
                        required
                        className="h-12 bg-gray-50 border-gray-200 focus:border-rose-500 focus:ring-rose-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="storeName" className="text-sm font-medium text-gray-700">
                        가게명
                      </label>
                      <Input
                        id="storeName"
                        name="storeName"
                        placeholder="가게 이름을 입력해주세요"
                        required
                        className="h-12 bg-gray-50 border-gray-200 focus:border-rose-500 focus:ring-rose-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        문의사항
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="문의하실 내용을 자유롭게 작성해주세요"
                        className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-rose-500 focus:ring-rose-500/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-medium shadow-lg shadow-rose-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/30"
                    >
                      무료 상담 신청하기
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
} 