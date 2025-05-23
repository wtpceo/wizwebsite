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
import { useRef } from "react";
import ContactSection from "@/components/sections/ContactSection";

export default function StrategyDetail() {
  const prefersReducedMotion = useReducedMotion();
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

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
  const getAnimation = (animation: any) => (prefersReducedMotion ? noAnimation : animation);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="container mx-auto px-6 max-w-5xl relative">
            <motion.div 
              className="text-center space-y-6" 
              initial="hidden" 
              animate="visible" 
              variants={getAnimation(fadeIn)}
            >
              <motion.div
                className="inline-block rounded-full bg-gradient-to-r from-emerald-100 to-green-100 px-4 py-1.5 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-emerald-700 font-medium">학원 마케팅 솔루션</span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600" 
                variants={getAnimation(fadeInUp)}
              >
                "학부모는 소개만으로<br className="hidden sm:block" /> 등록하지 않습니다."
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6" 
                variants={getAnimation(fadeInUp)}
              >
                검색합니다. 비교합니다. 그리고 판단합니다.
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 mt-8 max-w-3xl mx-auto" 
                variants={getAnimation(fadeInUp)}
              >
                👉 지금 우리 학원, <span className="font-bold text-emerald-600">검색하면 어떻게 나오고 있나요?</span>
              </motion.p>
              <motion.div 
                className="mt-10" 
                variants={getAnimation(fadeInUp)} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-lg px-8 py-6 h-auto shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  무료 마케팅 진단 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Empathy Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={getAnimation(fadeInUp)}
            >
              학부모의 실제 행동 패턴
            </motion.h2>
            <div className="flex flex-col space-y-8">
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl ml-auto border border-amber-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInLeft)}
              >
                <p className="text-xl md:text-2xl text-gray-800">"우리 반 친구가 다니는 학원이라고 소개받았어요"</p>
                <p className="text-gray-600 mt-4 text-lg">→ 그런데 학부모는 그 다음에 뭘 할까요?</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg max-w-2xl border border-emerald-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInRight)}
              >
                <p className="text-xl md:text-2xl font-medium flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
                  <span>네이버에 학원 이름 검색합니다.</span>
                </p>
                <p className="mt-6 text-lg ml-9">그리고 가장 먼저 나오는 건 <span className="font-bold text-emerald-600">네이버 플레이스입니다.</span></p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Naver Place Role Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={getAnimation(fadeInUp)}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                네이버 플레이스는<br /> <span className="italic text-yellow-500">"운영 중인 학원의<br className="hidden sm:block" /> 살아있는 분위기"</span>를 보여줍니다.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInLeft)}
              >
                <div className="relative h-72 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center shadow-lg">
                        <Users className="h-12 w-12 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-700">학원 내부 모습</h4>
                    <p className="text-blue-600">학생들이 공부하는 분위기와<br />쾌적한 환경을 보여주세요</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-700">플레이스에 보여야 할 것</h3>
                  <motion.ul className="space-y-4" variants={getAnimation(staggerContainer)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-blue-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">아이들이 공부하고 있는 사진</span>
                    </motion.li>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-blue-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">쾌적한 인테리어, 교실 분위기</span>
                    </motion.li>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-blue-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">학원 소식과 공지사항</span>
                    </motion.li>
                    <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                      <CheckCircle className="text-blue-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">등록 안내, 수업 일정 등 기본 정보</span>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInRight)}
              >
                <div className="relative h-72 bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-100 to-rose-100 flex items-center justify-center shadow-lg">
                        <Search className="h-12 w-12 text-red-600" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-red-700">정보가 없는 경우</h4>
                    <p className="text-red-600">정보가 부족한 경우<br />잠시라도 망설여 질 수 밖에 없습니다.</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-700">정보가 없다면?</h3>
                  <motion.div 
                    className="bg-red-50 p-6 rounded-lg border border-red-100" 
                    whileInView={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 1, times: [0, 0.5, 1], repeat: 0 }} 
                    viewport={{ once: true }}
                  >
                    <p className="flex items-center text-red-700 text-lg">
                      <span className="text-3xl mr-3"></span>
                      <span>"어떻게 운영되는 학원인가 궁금할 수 밖에 없습니다."</span>
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
        <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={getAnimation(fadeInUp)}
            >
              학원이 반드시 보여줘야 할 세 가지
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto" 
              variants={getAnimation(staggerContainer)} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={getAnimation(staggerItem)}>
                <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-orange-50">
                  <CardContent className="pt-10 p-8 h-full">
                    <motion.div 
                      className="rounded-full bg-gradient-to-r from-orange-100 to-amber-100 w-20 h-20 flex items-center justify-center mb-8 mx-auto" 
                      whileInView={{ scale: [1, 1.1, 1] }} 
                      transition={{ duration: 1, times: [0, 0.5, 1] }} 
                      viewport={{ once: true }}
                    >
                      <Users className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-5 text-orange-700">1. 운영 철학</h3>
                    <p className="text-center text-gray-600 text-lg">"우리는 어떤 학생을 어떻게 변화시키고 싶은가"</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={getAnimation(staggerItem)}>
                <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-orange-50">
                  <CardContent className="pt-10 p-8 h-full">
                    <motion.div 
                      className="rounded-full bg-gradient-to-r from-orange-100 to-amber-100 w-20 h-20 flex items-center justify-center mb-8 mx-auto" 
                      whileInView={{ scale: [1, 1.1, 1] }} 
                      transition={{ duration: 1, times: [0, 0.5, 1], delay: 0.2 }} 
                      viewport={{ once: true }}
                    >
                      <BookOpen className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-5 text-orange-700">2. 커리큘럼</h3>
                    <p className="text-center text-gray-600 text-lg">체계적인 학습 로드맵 + 수업 방식 + 시간표 등 구체적인 시스템</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={getAnimation(staggerItem)}>
                <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-orange-50">
                  <CardContent className="pt-10 p-8 h-full">
                    <motion.div 
                      className="rounded-full bg-gradient-to-r from-orange-100 to-amber-100 w-20 h-20 flex items-center justify-center mb-8 mx-auto" 
                      whileInView={{ scale: [1, 1.1, 1] }} 
                      transition={{ duration: 1, times: [0, 0.5, 1], delay: 0.4 }} 
                      viewport={{ once: true }}
                    >
                      <Trophy className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center mb-5 text-orange-700">3. 성과 자료</h3>
                    <p className="text-center text-gray-600 text-lg">수강생의 변화, 성적 향상 사례, 합격 사례 등</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div 
              className="max-w-3xl mx-auto mt-20 text-center" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={getAnimation(fadeInUp)}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">이 세 가지는 어디에서 제대로 보여줄 수 있을까요?</h3>
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-8 rounded-lg inline-block shadow-lg hover:shadow-xl transition-shadow duration-300" 
                whileInView={{ y: [10, -5, 0] }} 
                transition={{ duration: 0.8, times: [0, 0.6, 1] }} 
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold">→ 브랜드 블로그입니다.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Blog Marketing Strategy Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-16" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInUp)}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">블로그 마케팅 전략</h2>
                <p className="text-xl md:text-2xl leading-relaxed">
                  블로그는 단순한 글쓰기가 아닙니다.<br className="hidden sm:block" />
                  <motion.span 
                    className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-green-100 px-4 py-2 rounded-full mt-4 shadow-sm" 
                    whileInView={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 1, times: [0, 0.5, 1] }} 
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-emerald-600 mr-3 h-6 w-6" />
                    <span className="font-bold text-lg text-emerald-700">검색 노출이 되도록 전략적으로 설계</span>
                  </motion.span>
                  해야 합니다.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-10 mb-16 border border-blue-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeIn)}
              >
                <motion.ul className="space-y-6" variants={getAnimation(staggerContainer)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-blue-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">브랜드형 스킨으로 정보 정돈</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-blue-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">학부모들이 자주 찾는 키워드 중심 글 작성</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-blue-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">[학원 위치 + 과목] 키워드 최적화</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={getAnimation(staggerItem)}>
                    <CheckCircle className="text-blue-600 mr-4 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">운영철학, 성과, 커리큘럼을 메인 메뉴로 구성</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-16" 
                variants={getAnimation(staggerContainer)} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300" 
                  variants={getAnimation(staggerItem)} 
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <Search className="h-6 w-6 text-blue-600 mr-3" />
                    <p className="text-gray-700 font-medium text-lg">검색어 예시</p>
                  </div>
                  <p className="text-gray-800 text-xl">"수원 중등 수학학원 어디가 좋을까?"</p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300" 
                  variants={getAnimation(staggerItem)} 
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <Search className="h-6 w-6 text-blue-600 mr-3" />
                    <p className="text-gray-700 font-medium text-lg">검색어 예시</p>
                  </div>
                  <p className="text-gray-800 text-xl">"수능 수학 학원 고르기 전 체크리스트"</p>
                </motion.div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border-l-4 border-emerald-500 shadow-md hover:shadow-lg transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInUp)}
              >
                <p className="text-xl mb-5 leading-relaxed">이런 글들이 <span className="font-bold text-emerald-700">동네 학부모 검색 결과 상단에 계속 노출</span>되면?</p>
                <motion.p 
                  className="flex items-center text-emerald-700 font-medium text-lg" 
                  initial={{ x: -20, opacity: 0 }} 
                  whileInView={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.3, duration: 0.5 }} 
                  viewport={{ once: true }}
                >
                  <ArrowRight className="mr-3 h-6 w-6" />
                  "학부모와 학생들은 이 학원의 존재를 잊을 수 없을 것입니다."
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Flyer Timing Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-rose-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={getAnimation(fadeInUp)}
            >
              전단지 광고? 타이밍이 중요합니다
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInLeft)}
              >
                <div className="mb-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-100 to-rose-100 flex items-center justify-center shadow-lg">
                        <span className="text-4xl">📄</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-red-700">효과 없는 전단지</h4>
                    <p className="text-red-600">정보가 없는 상태에서는<br />단순한 종이 조각일 뿐입니다</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-5 text-red-700">아무 정보도 없는 상태에서 전단지를 돌리면?</h3>
                <motion.p 
                  className="flex items-center text-red-700 mb-5 text-lg" 
                  whileInView={{ x: [0, -5, 0, -5, 0] }} 
                  transition={{ duration: 1, times: [0, 0.25, 0.5, 0.75, 1] }} 
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mr-3"></span>
                  <span>광고만 날리는 셈입니다.</span>
                </motion.p>
                <p className="text-gray-600 text-lg leading-relaxed">전단지에서 학원을 보더라도 온라인에서 반드시 검색해봅니다.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-shadow duration-300" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={getAnimation(fadeInRight)}
              >
                <div className="mb-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center shadow-lg">
                        <span className="text-4xl">🔍</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-700">효과적인 전단지</h4>
                    <p className="text-emerald-600">온라인 인프라가 구축된 상태에서는<br />강력한 마케팅 도구가 됩니다</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-5 text-emerald-700">온라인 인프라가 탄탄한 상태에서 전단지를 돌리면?</h3>
                <motion.p 
                  className="flex items-center text-emerald-700 mb-5 text-lg" 
                  whileInView={{ x: [0, 5, 0] }} 
                  transition={{ duration: 0.8, times: [0, 0.5, 1] }} 
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mr-3"></span>
                  <span>"검색하면 다 나오는 학원" → 더 알아볼 확률이 상승합니다.</span>
                </motion.p>
                <p className="text-gray-600 text-lg leading-relaxed">전단지를 보고 온라인에서 검색했을 때 풍부한 정보가 나온다면 신뢰도와 등록률이 크게 높아집니다.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 