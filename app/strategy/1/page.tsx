"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, Palette, Globe, Ticket, Key, Calendar, Phone, MessageCircle, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { AnimateInView } from "@/components/animate-in-view"
import ContactForm from "@/components/contact-form"
import { useState, useRef, useEffect } from "react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function MarketingStrategyPage() {
  // 애니메이션 및 inView 훅 정의
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: strategyRef, inView: strategyInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      backgroundRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-bold">
            <Image
              src="/water-polo-action.png"
              alt="위즈더플래닝 로고"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>위즈더플래닝</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#" className="text-sm font-medium">
              서비스 소개
            </Link>
            <Link href="#" className="text-sm font-medium">
              마케팅 전략
            </Link>
            <Link href="#" className="text-sm font-medium">
              성공 사례
            </Link>
            <Link href="#" className="text-sm font-medium">
              문의하기
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            상담 신청
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">메뉴 열기</span>
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8D6E63]/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  온라인 매장도, 인테리어가 필요합니다.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  매장을 어떻게 꾸몄든, 고객은 온라인에서 한 번 더 검색합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 온라인 인테리어의 중요성 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#8D6E63] px-3 py-1 text-sm text-white">
                  온라인 인테리어의 중요성
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 shadow-sm">
                    <p className="text-lg">
                      수천만 원 들여 인테리어를 완성한 사장님, 원장님. 그 정성만큼, 온라인도 '깔끔하고 신뢰감 있게'
                      꾸며야 합니다. 왜냐고요?
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 shadow-sm">
                    <p className="text-lg">
                      고객은 전단지를 봐도,
                      <br />
                      친구에게 소개받아도,
                      <br />
                      매장을 지나가다 간판을 봐도…
                      <br />
                      <span className="font-bold">한 번은 반드시 검색합니다.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/store-online-comparison.png"
                  alt="온라인과 오프라인 인테리어 비교"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 채널 선택에 대한 인사이트 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#8D6E63] px-3 py-1 text-sm text-white">
                  채널 선택 인사이트
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  업종마다 검색 유입이 집중되는 플랫폼은 다릅니다.
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "고객이 검색하는 곳에 노출되는 것" 그게 마케팅의 시작입니다.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#8D6E63]/10 p-2">
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
                      className="h-6 w-6 text-[#8D6E63]"
                    >
                      <path d="M17.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M6 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                      <path d="M8.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M17 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                      <path d="M6.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">음식점</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">네이버 플레이스 + 블로그</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#8D6E63]/10 p-2">
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
                      className="h-6 w-6 text-[#8D6E63]"
                    >
                      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                      <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                      <path d="M12 12v6" />
                      <path d="M8 17h8" />
                      <path d="M12 3v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">병원</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">네이버 + 카카오맵 + 리뷰 사이트</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#8D6E63]/10 p-2">
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
                      className="h-6 w-6 text-[#8D6E63]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 4.24 4.24" />
                      <path d="m14.83 9.17 4.24-4.24" />
                      <path d="m14.83 14.83 4.24 4.24" />
                      <path d="m9.17 14.83-4.24 4.24" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">운동시설</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">네이버 + 인스타그램</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-[#8D6E63]/10 p-2">
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
                      className="h-6 w-6 text-[#8D6E63]"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">학원</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">네이버 + 블로그 콘텐츠</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 오프라인과 온라인의 연결 강조 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/online-offline-connection.png"
                  alt="오프라인과 온라인 연결"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#8D6E63] px-3 py-1 text-sm text-white">
                  오프라인과 온라인의 연결
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 shadow-sm">
                    <p className="text-lg">
                      오프라인 배너에 적은 할인, 혜택, 안내사항. 그 정보가 온라인에는 없으면 무슨 일이 벌어질까요?
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 shadow-sm">
                    <p className="text-lg">
                      "정보가 부족하네..."
                      <br />→ 다른 곳으로 넘어갑니다.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 shadow-sm">
                    <p className="text-lg">
                      고객이 매장 문을 열기 전에 머무르는 곳,
                      <br />
                      <span className="font-bold">그게 온라인입니다.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 철학 선언: 마케팅의 진심 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8D6E63]/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#8D6E63] px-3 py-1 text-sm text-white">마케팅의 진심</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">철학 선언</h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                저희는 9년간 자영업 마케팅을 해오면서
                <br />
                <span className="font-bold">어뷰징과 편법이 잠깐 효과는 있어도, 오래가지 못한다</span>는 걸 몸으로
                배웠습니다.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm">
                <CheckCircle className="h-8 w-8 text-[#8D6E63]" />
                <h3 className="text-xl font-bold">정직한 리뷰</h3>
                <p className="text-sm text-gray-500 text-center">
                  진실된 고객 경험을 바탕으로 한 리뷰가 신뢰를 만듭니다
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm">
                <CheckCircle className="h-8 w-8 text-[#8D6E63]" />
                <h3 className="text-xl font-bold">지속적인 콘텐츠</h3>
                <p className="text-sm text-gray-500 text-center">꾸준한 콘텐츠 업데이트로 고객과의 관계를 유지합니다</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm">
                <CheckCircle className="h-8 w-8 text-[#8D6E63]" />
                <h3 className="text-xl font-bold">쉬운 정보 구조</h3>
                <p className="text-sm text-gray-500 text-center">고객이 찾기 쉬운 정보 구조로 접근성을 높입니다</p>
              </div>
            </div>
          </div>
        </section>

        {/* 마무리 CTA 섹션 */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">지금 우리가 함께 정리해두면,</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  언제 전단지를 뿌리든, 누가 소개하든,
                  <br />
                  검색했을 때 <span className="font-bold">"오, 여긴 뭔가 다르다"</span> 싶은 매장이 됩니다.
                </p>
              </div>
              <div className="mx-auto max-w-[600px] space-y-4">
                <p className="text-lg">
                  저희는 <span className="font-bold">매장의 첫인상</span>을 바꾸는 일을 합니다.
                  <br />
                  고객을 한 번 더 잡는, <span className="font-bold">온라인 인테리어 전문가</span>입니다.
                </p>
                <Button className="bg-[#8D6E63] hover:bg-[#6D4C41]">
                  지금 우리 매장, 온라인 상태 진단받기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/water-polo-action.png"
                alt="위즈더플래닝 로고"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-lg font-bold">위즈더플래닝</span>
            </div>
            <nav className="flex gap-4 md:gap-6">
              <Link href="#" className="text-sm font-medium">
                서비스 소개
              </Link>
              <Link href="#" className="text-sm font-medium">
                마케팅 전략
              </Link>
              <Link href="#" className="text-sm font-medium">
                성공 사례
              </Link>
              <Link href="#" className="text-sm font-medium">
                문의하기
              </Link>
            </nav>
          </div>
          <div className="text-sm text-gray-500">© 2024 위즈더플래닝. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
} 