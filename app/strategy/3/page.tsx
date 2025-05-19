"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Search, Users, BookOpen, Trophy, MessageSquare, Phone, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StrategyDetail() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const noAnimation = { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  const getAnimation = (animation) => (prefersReducedMotion ? noAnimation : animation);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-emerald-50 py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div className="text-center space-y-6" initial="hidden" animate="visible" variants={getAnimation(fadeIn)}>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" variants={getAnimation(fadeInUp)}>
                "학부모는 소개만으로<br className="hidden sm:block" /> 등록하지 않습니다."
              </motion.h1>
              <motion.h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6" variants={getAnimation(fadeInUp)}>
                검색합니다. 비교합니다. 그리고 판단합니다.
              </motion.h2>
              <motion.p className="text-xl md:text-2xl text-gray-700 mt-8 max-w-3xl mx-auto" variants={getAnimation(fadeInUp)}>
                👉 지금 우리 학원, <span className="font-bold">검색하면 나오는 게 있나요?</span>
              </motion.p>
              <motion.div className="mt-10" variants={getAnimation(fadeInUp)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 h-auto">
                  무료 마케팅 진단 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Empathy Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2 className="text-3xl font-bold text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
              학부모의 실제 행동 패턴
            </motion.h2>
            <div className="flex flex-col space-y-8">
              <motion.div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl ml-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInLeft)}>
                <p className="text-xl md:text-2xl">"우리 반 친구가 다니는 학원이라고 소개받았어요"</p>
                <p className="text-gray-600 mt-4 text-lg">→ 그런데 학부모는 그 다음에 뭘 하죠?</p>
              </motion.div>
              <motion.div className="bg-emerald-100 rounded-2xl p-8 shadow-md max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInRight)}>
                <p className="text-xl md:text-2xl font-medium flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
                  <span>네이버에 학원 이름 검색합니다.</span>
                </p>
                <p className="mt-6 text-lg ml-9">그리고 가장 먼저 보는 건 <span className="font-bold">네이버 플레이스입니다.</span></p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Naver Place Role Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div className="max-w-4xl mx-auto text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                네이버 플레이스는 <span className="italic">"운영 중인 학원의<br className="hidden sm:block" /> 살아있는 분위기"</span>를 보여줍니다.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div className="bg-white rounded-xl shadow-md overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInLeft)}>
                <div className="relative h-72">
                  <Image src="/modern-academy-classroom.png" alt="학원 내부 모습" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">플레이스에 보여야 할 것</h3>
                  <motion.ul className="space-y-4" variants={getAnimation(staggerContainer)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-emerald-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">아이들이 공부하고 있는 사진</span>
                    </motion.li>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-emerald-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">쾌적한 인테리어, 교실 분위기</span>
                    </motion.li>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-emerald-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">학원 소식과 공지사항</span>
                    </motion.li>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-emerald-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">등록 안내, 수업 일정 등 기본 정보</span>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
              <motion.div className="bg-white rounded-xl shadow-md overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInRight)}>
                <div className="relative h-72">
                  <Image src="/confused-parent-phone.png" alt="정보가 없는 경우" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">이게 없다면?</h3>
                  <motion.div className="bg-red-50 p-6 rounded-lg" whileInView={{ scale: [1, 1.05, 1] }} transition={{ duration: 1, times: [0, 0.5, 1], repeat: 0 }} viewport={{ once: true }}>
                    <p className="flex items-center text-red-700 text-lg">
                      <span className="text-3xl mr-3">👎</span>
                      <span>"잘 안 하는 학원인가?"라는 인식이 생깁니다.</span>
                    </p>
                  </motion.div>
                  <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    학부모들은 정보가 부족한 학원에 대해 신뢰하기 어렵습니다. 첫인상이 중요한 만큼, 온라인 존재감은 필수입니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three Must-Show Elements Section */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
              학원이 반드시 보여줘야 할 세 가지
            </motion.h2>
            <motion.div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto" variants={getAnimation(staggerContainer)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <motion.div variants={getAnimation(staggerItem)}>
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-10 p-8 h-full">
                    <motion.div className="rounded-full bg-orange-100 w-20 h-20 flex items-center justify-center mb-8 mx-auto" whileInView={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, times: [0, 0.5, 1] }} viewport={{ once: true }}>
                      <Users className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-5">1. 운영 철학</h3>
                    <p className="text-center text-gray-600 text-lg">"우리는 어떤 학생을 어떻게 변화시키고 싶은가"</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={getAnimation(staggerItem)}>
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-10 p-8 h-full">
                    <motion.div className="rounded-full bg-orange-100 w-20 h-20 flex items-center justify-center mb-8 mx-auto" whileInView={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, times: [0, 0.5, 1], delay: 0.2 }} viewport={{ once: true }}>
                      <BookOpen className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-5">2. 커리큘럼</h3>
                    <p className="text-center text-gray-600 text-lg">체계적인 학습 로드맵 + 수업 방식 + 시간표 등 구체적인 시스템</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={getAnimation(staggerItem)}>
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="pt-10 p-8 h-full">
                    <motion.div className="rounded-full bg-orange-100 w-20 h-20 flex items-center justify-center mb-8 mx-auto" whileInView={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, times: [0, 0.5, 1], delay: 0.4 }} viewport={{ once: true }}>
                      <Trophy className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-5">3. 성과 자료</h3>
                    <p className="text-center text-gray-600 text-lg">수강생의 변화, 성적 향상 사례, 합격 사례 등</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div className="max-w-3xl mx-auto mt-20 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">🧩 이 세 가지는 어디에서 제대로 보여줄 수 있을까요?</h3>
              <motion.div className="bg-blue-600 text-white py-5 px-8 rounded-lg inline-block" whileInView={{ y: [10, -5, 0] }} transition={{ duration: 0.8, times: [0, 0.6, 1] }} viewport={{ once: true }}>
                <p className="text-2xl font-bold">→ 브랜드 블로그입니다.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Blog Marketing Strategy Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="max-w-4xl mx-auto">
              <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">블로그 마케팅 전략</h2>
                <p className="text-xl md:text-2xl leading-relaxed">
                  블로그는 단순한 글쓰기가 아닙니다.<br className="hidden sm:block" />
                  <motion.span className="inline-flex items-center bg-emerald-100 px-4 py-2 rounded-full mt-4" whileInView={{ scale: [1, 1.05, 1] }} transition={{ duration: 1, times: [0, 0.5, 1] }} viewport={{ once: true }}>
                    <CheckCircle className="text-emerald-600 mr-3 h-6 w-6" />
                    <span className="font-bold text-lg">검색 노출이 되도록 전략적으로 설계</span>
                  </motion.span>
                  해야 합니다.
                </p>
              </motion.div>
              <motion.div className="bg-white rounded-xl shadow-lg p-10 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeIn)}>
                <motion.ul className="space-y-6" variants={getAnimation(staggerContainer)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-emerald-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">브랜드형 스킨으로 정보 정돈</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-emerald-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">학부모들이 자주 찾는 키워드 중심 글 작성</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-emerald-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">[학원 위치 + 과목] 키워드 최적화</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-emerald-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">운영철학, 성과, 커리큘럼을 메인 메뉴로 구성</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div className="grid md:grid-cols-2 gap-8 mb-16" variants={getAnimation(staggerContainer)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <motion.div className="bg-gray-100 rounded-lg p-6" variants={getAnimation(staggerItem)} whileHover={{ y: -5 }}>
                  <div className="flex items-center mb-4">
                    <Search className="h-6 w-6 text-gray-500 mr-3" />
                    <p className="text-gray-700 font-medium text-lg">검색어 예시</p>
                  </div>
                  <p className="text-gray-800 text-xl">"수원 중등 수학학원 어디가 좋을까?"</p>
                </motion.div>
                <motion.div className="bg-gray-100 rounded-lg p-6" variants={getAnimation(staggerItem)} whileHover={{ y: -5 }}>
                  <div className="flex items-center mb-4">
                    <Search className="h-6 w-6 text-gray-500 mr-3" />
                    <p className="text-gray-700 font-medium text-lg">검색어 예시</p>
                  </div>
                  <p className="text-gray-800 text-xl">"수능 수학 학원 고르기 전 체크리스트"</p>
                </motion.div>
              </motion.div>
              <motion.div className="bg-emerald-50 rounded-xl p-8 border-l-4 border-emerald-500" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
                <p className="text-xl mb-5 leading-relaxed">이런 글들이 <span className="font-bold">동네 학부모 검색 결과 상단에 계속 노출</span>되면?</p>
                <motion.p className="flex items-center text-emerald-700 font-medium text-lg" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}>
                  <ArrowRight className="mr-3 h-6 w-6" />
                  "동네에서 진짜 신경 쓰는 학원이구나"라는 신뢰를 줍니다.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Flyer Timing Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInUp)}>
              전단지 광고? 타이밍이 중요합니다
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div className="bg-white rounded-xl shadow-md p-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInLeft)}>
                <div className="mb-8">
                  <Image src="/ignored-academy-flyer.png" alt="효과 없는 전단지" width={400} height={300} className="rounded-lg mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-5">아무 정보도 없는 상태에서 전단지를 돌리면?</h3>
                <motion.p className="flex items-center text-red-700 mb-5 text-lg" whileInView={{ x: [0, -5, 0, -5, 0] }} transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1] }} viewport={{ once: true }}>
                  <span className="text-3xl mr-3">👎</span>
                  <span>광고만 날리는 셈입니다.</span>
                </motion.p>
                <p className="text-gray-600 text-lg leading-relaxed">온라인에서 검색했을 때 정보가 없다면, 전단지는 단순한 종이 쓰레기가 될 뿐입니다.</p>
              </motion.div>
              <motion.div className="bg-white rounded-xl shadow-md p-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={getAnimation(fadeInRight)}>
                <div className="mb-8">
                  <Image src="/parent-searching-academy.png" alt="효과적인 전단지" width={400} height={300} className="rounded-lg mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-5">온라인 인프라가 탄탄한 상태에서 전단지를 돌리면?</h3>
                <motion.p className="flex items-center text-emerald-700 mb-5 text-lg" whileInView={{ x: [0, 5, 0] }} transition={{ duration: 0.8, times: [0, 0.5, 1] }} viewport={{ once: true }}>
                  <span className="text-3xl mr-3">👊</span>
                  <span>"검색하면 다 나오는 학원" → 등록률 상승</span>
                </motion.p>
                <p className="text-gray-600 text-lg leading-relaxed">전단지를 보고 온라인에서 검색했을 때 풍부한 정보가 나온다면 신뢰도와 등록률이 크게 높아집니다.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50">
          <div className="container mx-auto px-6 max-w-5xl">
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
                    className="w-fit bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 hover:from-emerald-200 hover:to-green-200 border-emerald-200"
                    variant="outline"
                  >
                    문의하기
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    <span className="hidden md:inline">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                    <span className="block md:hidden">지금 바로 상담받고<br />마케팅 고민을 해결하세요</span>
                  </h2>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    <span className="hidden md:inline">위즈더플래닝의 전문가가 귀하의 학원에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                    <span className="block md:hidden">위즈더플래닝의 전문가가<br />귀하의 학원에 맞는 최적의 마케팅 솔루션을 제안해드립니다.</span>
                  </p>
                </motion.div>
                <motion.div className="space-y-4" variants={staggerContainer}>
                  {[
                    { icon: <Phone className="h-5 w-5 text-emerald-600" />, title: "전화 문의", content: "1670-0704" },
                    {
                      icon: <MessageCircle className="h-5 w-5 text-green-600" />,
                      title: "카카오톡 문의",
                      content: "@위즈더플래닝",
                    },
                    {
                      icon: <Mail className="h-5 w-5 text-emerald-600" />,
                      title: "이메일 문의",
                      content: "wiz@wiztheplanning.com",
                    },
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-center gap-2" variants={fadeIn}>
                      <div
                        className={`rounded-full ${
                          index === 0 ? "bg-emerald-100" : index === 1 ? "bg-green-100" : "bg-emerald-100"
                        } p-2`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.title}</p>
                        <p
                          className={`${
                            index === 0 ? "text-emerald-600" : index === 1 ? "text-green-600" : "text-emerald-600"
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
                        className="h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
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
                        className="h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="storeName" className="text-sm font-medium text-gray-700">
                        학원명
                      </label>
                      <Input
                        id="storeName"
                        name="storeName"
                        placeholder="학원 이름을 입력해주세요"
                        required
                        className="h-12 bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
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
                        className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30"
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
    </div>
  );
} 