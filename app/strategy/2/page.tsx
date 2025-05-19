"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart3, Smartphone, Users, Settings, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
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
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={aboutRef} className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div className="space-y-6" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-tight">
                  배달 플랫폼 관리의 <span className="text-rose-600">모든 것</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                  7개의 플랫폼 관리, 광고 효율화, 고객 데이터 기반 마케팅까지 - 위즈더플래닝이 도와드립니다.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      무료 상담 신청
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div className="flex justify-center" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <img src="/placeholder-0cz4y.png" alt="배달 플랫폼 관리 서비스" className="rounded-lg object-cover shadow-xl" width={550} height={450} />
              </motion.div>
            </div>
          </div>
        </section>
        {/* 이하 v0 코드와 동일하게 시장 현황, 광고 시스템 변화, 생존 전략, 서비스, 결론, 문의 폼, 푸터까지 전체 구현 */}
        {/* ... (위 v0 코드의 모든 섹션을 그대로 반영) ... */}

        {/* Detailed Ad System Changes (이미지처럼 수정) */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 font-medium mb-2">
                현재 배달 플랫폼 환경
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2">
                배달 시장의 변화와 도전
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
                2025년, 배달 시장은 급격한 변화를 맞이하고 있습니다. 점주님들이 직면한 현실을 살펴보세요.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* 배달의민족 매출 하락 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
                <div className="text-rose-600 text-xl font-bold mb-4">배달의민족 매출 하락</div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">수수료 인상으로 점주 수익성 약화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">대형 브랜드: 브이컷(V-Cut) 적용 또는 배달 가격 인상</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">중소상공인: 홀가와 배달가의 차별화로 소비자 반발</span>
                  </li>
                </ul>
              </div>
              {/* 소비자 행동 변화 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
                <div className="text-rose-600 text-xl font-bold mb-4">소비자 행동 변화</div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">가격 비교 습관화 (쿠팡이츠 vs 배민)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">배달비 포함 총액 기준으로 플랫폼 선택</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base">땡겨요의 성장 (낮은 수수료, 홀가 동일 적용)</span>
                  </li>
                </ul>
              </div>
              {/* 관리 플랫폼 폭증 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full items-center">
                <div className="text-rose-600 text-xl font-bold mb-4">관리 플랫폼 폭증</div>
                <div className="text-rose-600 text-6xl font-bold mb-2">7</div>
                <div className="text-gray-700 text-base mb-4 text-center">최대 7개 플랫폼을 동시에 관리해야 하는 부담</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['배민','쿠팡이츠','요기요','땡겨요','네이버','카카오','기타'].map((platform, idx) => (
                    <span key={platform} className="bg-rose-50 text-rose-600 rounded-full px-4 py-1 text-sm font-medium border border-rose-100">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Baemin Ad System Changes (이미지처럼 수정) */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 font-medium mb-3">
                광고 시스템 변화
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2">
                배민 광고 시스템의 변화
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
                2024~2025년 배달의민족 광고 시스템이 크게 변화하고 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 깃발 광고 폐지 카드 */}
              <div className="bg-white border-2 border-rose-200 rounded-2xl p-8 flex flex-col shadow-sm">
                <div className="text-rose-600 text-xl font-bold mb-1">깃발 광고 폐지</div>
                <div className="text-gray-600 text-base mb-4">2024~2025 중 단계적 종료</div>
                <img src="/baemin-flag-ad-closed.png" alt="깃발 광고 폐지" className="rounded-lg object-cover w-full max-w-xs mx-auto mb-6 border" style={{minHeight:'120px'}} />
                <div className="text-gray-700 text-base text-left md:text-center">
                  기존의 깃발 광고가 단계적으로 폐지되면서 새로운 광고 방식으로의 전환이 필요합니다.
                </div>
              </div>
              {/* 대체 광고 방식 카드 */}
              <div className="bg-white border-2 border-rose-200 rounded-2xl p-8 flex flex-col shadow-sm">
                <div className="text-rose-600 text-xl font-bold mb-1">대체 광고 방식</div>
                <div className="text-gray-600 text-base mb-4">새로운 광고 시스템 적용이 필수</div>
                <ul className="space-y-6 mt-2">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-rose-100 p-3 mt-1">
                      <BarChart3 className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-medium text-lg mb-1">오픈리스트 노출 강화</div>
                      <div className="text-gray-600 text-base">기본 노출 순위가 더욱 중요해지는 환경</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-rose-100 p-3 mt-1">
                      <TrendingUp className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-medium text-lg mb-1">우리가게 클릭 광고 (CPC 입찰제)</div>
                      <div className="text-gray-600 text-base">클릭당 비용을 지불하는 입찰 방식으로 변경</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Survival Strategy (이미지처럼 수정) */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 font-medium mb-3">
                생존 전략
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2">
                자영업자 생존 전략
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
                변화하는 환경에서 살아남기 위한 필수 관리 포인트
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* 플랫폼별 가격 전략 */}
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-8 flex flex-col items-center shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-50 mb-4">
                  <Settings className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-xl font-bold mb-2">플랫폼별 가격 전략</div>
                <div className="text-gray-700 text-base text-center">
                  홀가/배달가 구분 및 플랫폼별 최적화된 가격 전략 수립이 필요합니다.
                </div>
              </div>
              {/* 메뉴/사진 통일 관리 */}
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-8 flex flex-col items-center shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-50 mb-4">
                  <Smartphone className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-xl font-bold mb-2">메뉴/사진 통일 관리</div>
                <div className="text-gray-700 text-base text-center">
                  모든 플랫폼에서 일관된 메뉴와 고품질 사진으로 브랜드 이미지를 유지해야 합니다.
                </div>
              </div>
              {/* 리뷰 관리 */}
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-8 flex flex-col items-center shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-50 mb-4">
                  <Users className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-xl font-bold mb-2">리뷰 관리</div>
                <div className="text-gray-700 text-base text-center">
                  고객 리뷰에 대한 적극적인 대응과 이벤트 연동으로 충성 고객을 확보해야 합니다.
                </div>
              </div>
            </div>
            {/* 하단 강조 박스 */}
            <div className="bg-white border-2 border-rose-200 rounded-2xl p-8 max-w-2xl mx-auto flex flex-col items-center text-center">
              <div className="text-rose-600 text-lg font-bold mb-2">자동화 + 아웃소싱 전략 필요</div>
              <div className="text-gray-700 text-base mb-6">
                하나하나 수작업으로는 불가능한 시대입니다. 전문 대행사의 도움이 필요합니다.
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700 text-base font-semibold px-8 py-4 rounded-lg">
                위즈더플래닝 서비스 알아보기
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio/Case Studies (이미지처럼 수정) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full py-16 md:py-24 lg:py-32 bg-rose-50"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center mb-12"
              variants={fadeInUp}
            >
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600 font-medium mb-3">
                위즈더플래닝의 역할
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-2">
                위즈더플래닝이 제공하는 핵심 서비스
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                7개의 플랫폼 관리 + 광고 효율화 + 고객 데이터 기반 마케팅
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* 통합 플랫폼 관리 */}
              <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-md">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-rose-100 mb-6">
                  <Smartphone className="h-10 w-10 text-rose-500" />
                </div>
                <div className="text-xl md:text-2xl font-bold mb-2">통합 플랫폼 관리</div>
                <div className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
                  7개 플랫폼의 메뉴, 가격, 영업시간, 휴무일 등을 한 번에 관리해 드립니다.
                </div>
              </motion.div>
              {/* 광고 효율화 */}
              <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-md">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-rose-100 mb-6">
                  <BarChart3 className="h-10 w-10 text-rose-500" />
                </div>
                <div className="text-xl md:text-2xl font-bold mb-2">광고 효율화</div>
                <div className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
                  CPC 입찰 최적화, 광고 성과 분석, 비용 대비 효율 극대화를 지원합니다.
                </div>
              </motion.div>
              {/* 리뷰 및 고객 관리 */}
              <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-md">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-rose-100 mb-6">
                  <Users className="h-10 w-10 text-rose-500" />
                </div>
                <div className="text-xl md:text-2xl font-bold mb-2">리뷰 및 고객 관리</div>
                <div className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
                  고객 리뷰 대응, 이벤트 기획, 단골 고객 확보 전략을 제공합니다.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 선택이 아닌 필수의 시대 강조 섹션 (이미지처럼) */}
        <section className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              지금은 <span className="text-rose-500">"선택"이 아닌 "필수"</span>의 시대
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl">
              혼자서는 도저히 감당 불가한 구조, 전문 대행사와 협업하지 않으면 매출 유지조차 힘든 환경
            </p>
            <div className="text-2xl font-semibold text-gray-900 mb-10">
              위즈더플래닝 = 실무자의 일손 + 마케팅 전문가의 두뇌
            </div>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(244,63,94,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-rose-600 hover:bg-rose-700 text-lg md:text-xl font-semibold px-16 py-5 rounded-lg shadow-md mt-8"
            >
              무료 상담 신청하기
            </motion.button>
          </div>
        </section>

        {/* Contact Form (메인페이지와 동일하게) */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 