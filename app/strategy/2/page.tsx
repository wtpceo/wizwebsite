"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart3, Smartphone, Users, Settings, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/sections/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";

// CounterAnimation 컴포넌트
const CounterAnimation = ({ target, duration = 2000, className = "" }: { target: string, duration?: number, className?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = Number.parseInt(target);
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);
  return <span ref={ref} className={className}>{count}</span>;
};

// 애니메이션 variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function StrategyDetail() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const problemsRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={aboutRef} className="relative w-full overflow-hidden bg-[#070b14] py-16 md:py-24 lg:py-28">
          <div className="geo-grid-bg absolute inset-0"></div>
          <div className="absolute -top-32 left-1/3 h-[360px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="space-y-6 order-1 md:order-none flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
                    DELIVERY PLATFORM STRATEGY
                  </span>
                </motion.div>
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight break-keep max-w-xs sm:max-w-lg mx-auto">
                  배달 플랫폼 관리의 <span className="bg-gradient-to-r from-[#00e5a0] to-sky-400 bg-clip-text text-transparent">모든 것</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xs sm:max-w-md md:max-w-lg mx-auto mt-2 break-keep">
                  7개의 플랫폼 관리, 광고 효율화, 고객 데이터 기반 마케팅까지<br className="block sm:hidden" />
                  위즈더플래닝이 도와드립니다.
                </p>
                <div className="flex justify-center mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] text-lg py-6 px-8 shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300"
                      onClick={() => scrollToSection(contactRef)}
                    >
                      무료 상담 신청
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-center order-2 md:order-none mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="geo-glow relative rounded-2xl border border-white/10 bg-[#0d1424]/90 p-10">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-[#00e5a0]/15 flex items-center justify-center">
                          <Smartphone className="h-12 w-12 text-[#00e5a0]" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white">배달 플랫폼 관리</h4>
                      <p className="text-slate-400">7개 플랫폼을 한 번에<br />효율적으로 관리하세요</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* 이하 v0 코드와 동일하게 시장 현황, 광고 시스템 변화, 생존 전략, 서비스, 결론, 문의 폼, 푸터까지 전체 구현 */}
        {/* ... (위 v0 코드의 모든 섹션을 그대로 반영) ... */}

        {/* Detailed Ad System Changes */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">MARKET SHIFT</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 text-gray-900">
                  배달 시장의 변화와 도전
                </h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                  2025년, 배달 시장은 급격한 변화를 맞이하고 있습니다.<br /> 점주님들이 직면한 현실을 살펴보세요.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* 배달의민족 매출 하락 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-emerald-50 p-2.5">
                    <BarChart3 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">배달의민족 매출 하락</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">수수료 인상으로 점주 수익성 약화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">대형 브랜드: 브이컷(V-Cut) 적용 또는 배달 가격 인상</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">중소상공인: 홀가와 배달가의 차별화로 소비자 반발</span>
                  </li>
                </ul>
              </motion.div>
              {/* 소비자 행동 변화 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-emerald-50 p-2.5">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">소비자 행동 변화</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">가격 비교 습관화 (쿠팡이츠 vs 배민)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">배달비 포함 총액 기준으로 플랫폼 선택</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">땡겨요의 성장 (낮은 수수료, 홀가 동일 적용)</span>
                  </li>
                </ul>
              </motion.div>
              {/* 관리 플랫폼 폭증 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-emerald-50 p-2.5">
                    <Settings className="h-6 w-6 text-emerald-600" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">관리 플랫폼 폭증</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-emerald-600 text-6xl font-extrabold leading-none">7</span>
                  <span className="text-gray-500 text-sm font-medium">개 플랫폼</span>
                </div>
                <div className="text-gray-700 text-base mb-4">최대 7개 플랫폼을 동시에 관리해야 하는 부담</div>
                <div className="flex flex-wrap gap-2">
                  {['배민','쿠팡이츠','요기요','땡겨요','네이버','당근','기타'].map((platform, idx) => (
                    <motion.span 
                      key={platform} 
                      className="bg-emerald-50 text-emerald-600 rounded-full px-4 py-1 text-sm font-medium border border-gray-200"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {platform}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Baemin Ad System Changes */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-[#f6f8f7]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">AD SYSTEM</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 text-gray-900">
                  배민 광고 시스템의 변화
                </h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                  2024~2025년 배달의민족 광고 시스템이 크게 변화하고 있습니다.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 깃발 광고 폐지 카드 */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="text-emerald-600 text-xl font-bold mb-1">깃발 광고 폐지</div>
                <div className="text-gray-600 text-base mb-4">2024~2025 중 단계적 종료</div>
                <div className="bg-[#f6f8f7] rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-4 text-center">
                      <span className="text-2xl">🚩</span>
                      <span className="font-medium text-gray-700">깃발 광고</span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gray-400" />
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-4 text-center">
                      <span className="text-2xl">🚫</span>
                      <span className="font-bold text-red-600">단계적 종료</span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gray-400" />
                    <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-4 text-center">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                      <span className="font-bold text-emerald-700">새 광고 방식</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm font-bold text-emerald-700">깃발 광고 종료 → 전환 필수</p>
                </div>
                <div className="text-gray-700 text-base">
                  기존의 깃발 광고가 단계적으로 폐지되면서 새로운 광고 방식으로의 전환이 필요합니다.
                </div>
              </motion.div>
              {/* 대체 광고 방식 카드 */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="text-emerald-600 text-xl font-bold mb-1">대체 광고 방식</div>
                <div className="text-gray-600 text-base mb-4">새로운 광고 시스템 적용이 필수</div>
                <ul className="space-y-6 mt-2">
                  <motion.li 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="rounded-xl bg-emerald-50 p-2.5 mt-1">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-lg mb-1">오픈리스트 노출 강화</div>
                      <div className="text-gray-600 text-base">기본 노출 순위가 더욱 중요해지는 환경</div>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="rounded-xl bg-emerald-50 p-2.5 mt-1">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-lg mb-1">우리가게 클릭 광고 (CPC 입찰제)</div>
                      <div className="text-gray-600 text-base">클릭당 비용을 지불하는 입찰 방식으로 변경</div>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Survival Strategy */}
        <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 bg-[#070b14]">
          <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <p className="text-center text-xs font-bold tracking-[0.25em] text-[#00e5a0] mb-3">SURVIVAL STRATEGY</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 text-white">
                  자영업자 생존 전략
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
                  변화하는 환경에서 살아남기 위한 필수 관리 포인트
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* 플랫폼별 가격 전략 */}
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 flex flex-col hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-[#00e5a0]/15 p-2.5">
                    <Settings className="h-6 w-6 text-[#00e5a0]" />
                  </div>
                  <span className="text-xl font-bold text-white">플랫폼별 가격 전략</span>
                </div>
                <div className="text-slate-400 text-base">
                  홀가/배달가 구분 및 플랫폼별 최적화된 가격 전략 수립이 필요합니다.
                </div>
              </motion.div>
              {/* 메뉴/사진 통일 관리 */}
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 flex flex-col hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-[#00e5a0]/15 p-2.5">
                    <Smartphone className="h-6 w-6 text-[#00e5a0]" />
                  </div>
                  <span className="text-xl font-bold text-white">메뉴/사진 통일 관리</span>
                </div>
                <div className="text-slate-400 text-base">
                  모든 플랫폼에서 일관된 메뉴와 고품질 사진으로 브랜드 이미지를 유지해야 합니다.
                </div>
              </motion.div>
              {/* 리뷰 관리 */}
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 flex flex-col hover:border-[#00e5a0]/30 hover:bg-white/[0.07] transition-all duration-300"
                whileHover={{ y: -5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-[#00e5a0]/15 p-2.5">
                    <Users className="h-6 w-6 text-[#00e5a0]" />
                  </div>
                  <span className="text-xl font-bold text-white">리뷰 관리</span>
                </div>
                <div className="text-slate-400 text-base">
                  고객 리뷰에 대한 적극적인 대응과 이벤트 연동으로 충성 고객을 확보해야 합니다.
                </div>
              </motion.div>
            </div>
            {/* 하단 강조 박스 */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 max-w-2xl mx-auto flex flex-col items-center text-center hover:border-[#00e5a0]/30 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-[#00e5a0] text-lg font-bold mb-2">자동화 + 아웃소싱 전략 필요</div>
              <div className="text-slate-300 text-base mb-6">
                하나하나 수작업으로는 불가능한 시대입니다. 전문 대행사의 도움이 필요합니다.
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] text-base font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  이제는 정말 전문가의 도움이 필요합니다.
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio/Case Studies */}
        <div className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-12">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">OUR SERVICE</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-2 max-w-xs sm:max-w-md md:max-w-2xl mx-auto break-keep text-gray-900">
                    위즈더플래닝이 제공하는<br className="block sm:hidden" /> 핵심 서비스
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl mx-auto break-keep">
                    7개의 플랫폼 관리 + 광고 효율화 +<br className="block sm:hidden" /> 고객 데이터 기반 마케팅
                  </p>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-emerald-50 p-2.5">
                      <Smartphone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold break-keep text-gray-900">통합 플랫폼 관리</span>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                    7개 플랫폼의 메뉴, 가격, 영업시간, 휴무일 등을 한 번에 관리해 드립니다.
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-emerald-50 p-2.5">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold break-keep text-gray-900">광고 효율화</span>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                    CPC 입찰 최적화, 광고 성과 분석, 비용 대비 효율 극대화를 지원합니다.
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-emerald-50 p-2.5">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold break-keep text-gray-900">리뷰 및 고객 관리</span>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                    고객 리뷰 대응, 이벤트 기획, 단골 고객 확보 전략을 제공합니다.
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* 선택이 아닌 필수의 시대 강조 섹션 */}
        <section className="w-full py-16 md:py-24 bg-[#f6f8f7]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-[#0b1220] px-6 py-16 md:px-16 md:py-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
              <div className="absolute -top-24 right-1/4 h-[280px] w-[420px] rounded-full bg-[#00e5a0]/[0.08] blur-3xl"></div>
              <div className="relative flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 break-keep">
                  지금은 <span className="text-[#00e5a0]">"선택"이 아닌 "필수"</span>의 시대
                </h2>
                <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl text-center mx-auto break-keep">
                  혼자서는 도저히 감당 불가한 구조, 전문 대행사와 협업하지 않으면 매출 유지조차 힘든 환경
                </p>
                <div className="text-xl md:text-2xl font-semibold text-white mb-10 break-keep">
                  위즈더플래닝 = 실무자의 일손 + 마케팅 전문가의 두뇌
                </div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    className="bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] text-lg md:text-xl px-16 py-5 rounded-lg shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300"
                    onClick={() => scrollToSection(contactRef)}
                  >
                    무료 상담 신청하기
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form (메인페이지와 동일하게) */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 