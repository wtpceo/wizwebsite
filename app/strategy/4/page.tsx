"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  Coffee,
  Compass,
  DollarSign,
  Home,
  MapPin,
  Star,
  Ticket,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const noAnimation = { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  const getAnimation = (animation: any) => (prefersReducedMotion ? noAnimation : animation);

  const problems = [
    {
      icon: Home,
      title: "과도한 비용의 홈페이지 제작",
      desc: "네이버 수요는 있는데 플레이스에 모든 정보를 담기에는 공간이 좁죠. 홈페이지를 만들자니 촬영비에 제작비까지 정말 높은 금액 그리고 예약 매출 쉐어링",
    },
    {
      icon: MapPin,
      title: "숙박 어플들의 수수료",
      desc: "숙박 어플을 통해 들어오는 손님은 우리 손님이 아니라 숙박 어플 손님입니다. 자체 마케팅 해야 합니다.",
    },
    {
      icon: DollarSign,
      title: "높은 수수료 부담",
      desc: "광고는 해도 잠깐 반짝하고, 수수료는 계속 빠져나갑니다. 예약 플랫폼에만 의존하신다면 수수료는 쌓이고, 고객은 '그 플랫폼의 고객'이지, 내 단골이 아닐 수 있습니다.",
    },
  ];

  const services = [
    {
      icon: Compass,
      title: "드론 항공 촬영 + 감성 실내/야경 사진",
      desc: "전문 촬영팀이 드론으로 숙소의 전경을 담아내고, 감성적인 실내 및 야경 사진으로 고객의 마음을 사로잡습니다.",
    },
    {
      icon: Home,
      title: "객실 소개 + 예약 연결이 가능한 모바일 홈페이지",
      desc: "모바일에 최적화된 홈페이지로 객실 정보를 상세히 소개하고, 직접 예약까지 연결되는 시스템을 구축합니다.",
    },
    {
      icon: Star,
      title: "블로그 리뷰 + 네이버 플레이스 최적화",
      desc: "전문적인 블로그 리뷰 작성과 네이버 플레이스 정보 최적화로 검색 노출을 극대화합니다.",
    },
    {
      icon: Users,
      title: "체험단 운영, 파워링크 광고까지 모두 한번에",
      desc: "체험단 운영으로 진정성 있는 리뷰를 확보하고, 효과적인 파워링크 광고로 타겟 고객에게 직접 도달합니다.",
    },
  ];

  const perks = [
    {
      icon: Coffee,
      title: "웰컴 드링크",
      desc: "오는 손님들에게 특별한 차 한잔 드립니다.",
    },
    {
      icon: Camera,
      title: "즉석 사진기",
      desc: "추억을 담을 사진기를 준비해드립니다.",
    },
    {
      icon: Ticket,
      title: "평일 숙박권",
      desc: "말도 안되는 가격의 평일 숙박권을 드릴 수 있습니다.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#070b14] py-24">
          <div className="geo-grid-bg absolute inset-0"></div>
          <div className="absolute -top-32 left-1/3 h-[360px] w-[560px] rounded-full bg-[#00e5a0]/[0.07] blur-3xl"></div>
          <div className="container mx-auto px-6 max-w-5xl relative">
            <motion.div
              className="text-center space-y-6"
              initial="hidden"
              animate="visible"
              variants={getAnimation(fadeIn)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">
                  CAMPING & PENSION STRATEGY
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
                variants={getAnimation(fadeInUp)}
              >
                언제까지 수수료<br className="hidden sm:block" /> 쉐어링 하시겠습니까?
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-[#00e5a0] mt-6"
                variants={getAnimation(fadeInUp)}
              >
                맞습니다. 숙박업은 플레이스만으로 정보를 다 담기 힘들죠.
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-slate-400 mt-8 max-w-3xl mx-auto"
                variants={getAnimation(fadeInUp)}
              >
                캠핑장 & 펜션 마케팅 솔루션
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
                  className="bg-[#00e5a0] text-[#070b14] font-bold hover:bg-[#3cf0bb] text-lg px-8 py-6 h-auto shadow-lg shadow-[#00e5a0]/25 hover:shadow-xl hover:shadow-[#00e5a0]/35 transition-all duration-300"
                >
                  대책 상담받기 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 문제점 섹션 */}
        <section id="problems" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimation(fadeInUp)}
            >
              <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">
                OWNER'S PAIN POINTS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                이런 고민이 있으신가요?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                캠핑장과 펜션 사장님들이 자주 겪는 마케팅 문제들입니다.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 items-stretch"
              variants={getAnimation(staggerContainer)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {problems.map((p, i) => (
                <motion.div key={p.title} variants={getAnimation(staggerItem)} className="flex">
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-8 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-fit rounded-xl bg-red-50 p-3 text-red-500">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-gray-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-gray-900">{p.title}</h3>
                    <p className="mt-3 text-gray-600 text-lg leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 솔루션 소개 (다크 잉크 전환) */}
        <section id="solutions" className="relative overflow-hidden py-20 bg-[#070b14]">
          <div className="geo-grid-bg absolute inset-0 opacity-60"></div>
          <div className="absolute -bottom-40 right-1/4 h-[320px] w-[480px] rounded-full bg-[#00e5a0]/[0.06] blur-3xl"></div>
          <div className="container relative mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimation(fadeInUp)}
            >
              <p className="text-center text-xs font-bold tracking-[0.25em] text-[#00e5a0] mb-3">
                OUR SOLUTION
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                이제는 숙박어플의 손님이 아니라<br className="hidden sm:block" />{" "}
                <span className="text-[#00e5a0]">내 손님</span>을 받아야 합니다.
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                저희는 캠핑장과 펜션에 꼭 맞는 마케팅 솔루션을 제공합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 서비스 섹션 */}
        <section id="services" className="py-20 bg-[#f6f8f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimation(fadeInUp)}
            >
              <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">
                MARKETING SERVICES
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                캠핑장 & 펜션 맞춤 마케팅 서비스
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                고객의 마음을 사로잡는 완벽한 마케팅 솔루션을 제공합니다.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 items-stretch"
              variants={getAnimation(staggerContainer)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((s, i) => (
                <motion.div key={s.title} variants={getAnimation(staggerItem)} className="flex">
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-8 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07] transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-fit rounded-xl bg-emerald-500/10 p-3 text-emerald-600">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-emerald-500/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl md:text-2xl font-bold text-gray-900">{s.title}</h3>
                    <p className="mt-3 text-gray-600 text-lg leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 성과 지표 */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimation(fadeInUp)}
            >
              <p className="text-center text-xs font-bold tracking-[0.25em] text-emerald-600 mb-3">
                WHAT YOU GET BACK
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                수수료를 아끼면
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                더 많은 서비스를 고객에게 돌려줄 수 있습니다.,
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 items-stretch"
              variants={getAnimation(staggerContainer)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {perks.map((p) => (
                <motion.div key={p.title} variants={getAnimation(staggerItem)} className="flex">
                  <div className="flex-1 rounded-2xl bg-[#0b1220] p-8 hover:shadow-xl hover:shadow-emerald-500/[0.12] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-fit rounded-xl bg-[#00e5a0]/15 p-3 text-[#00e5a0]">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                    </div>
                    <p className="mt-5 text-lg leading-relaxed text-slate-400">{p.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#00e5a0]">
                      <CheckCircle className="h-4 w-4" />
                      수수료 절감으로 가능
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 성공 사례 */}
            <motion.div
              className="mt-20 rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimation(fadeIn)}
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <motion.div
                  className="md:w-1/2 w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={getAnimation(fadeInLeft)}
                >
                  {/* 성과 지표 패널 */}
                  <div className="rounded-2xl bg-[#0b1220] p-8">
                    <div className="flex items-center gap-3">
                      <div className="w-fit rounded-xl bg-[#00e5a0]/15 p-2.5 text-[#00e5a0]">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-bold tracking-widest text-slate-400">예약률 변화</p>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div>
                        <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                          <span>플랫폼 의존 시기</span>
                          <span>100</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-white/[0.06]">
                          <div className="h-3 w-[62%] rounded-full bg-slate-600"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1.5 flex items-center justify-between text-xs">
                          <span className="text-slate-300">직접 마케팅 이후</span>
                          <span className="font-bold text-[#00e5a0]">130</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-white/[0.06]">
                          <div className="h-3 w-[81%] rounded-full bg-[#00e5a0]"></div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-7 text-2xl font-extrabold text-white">
                      예약률 <span className="text-[#00e5a0]">30% 증가!</span>
                    </p>
                    <p className="mt-1.5 text-slate-400">재방문 고객 증가 & 안정적 운영</p>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={getAnimation(fadeInRight)}
                >
                  <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">SUCCESS STORY</p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    강원도 홍천 '숲속의 쉼터' 펜션
                  </h3>
                  <div className="rounded-2xl rounded-tl-md bg-[#f6f8f7] border border-gray-200 px-6 py-5">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      "플랫폼 수수료에만 의존하다 직접 마케팅을 시작한 후, 예약률이 30% 증가했습니다. 특히 재방문 고객이
                      늘어 안정적인 운영이 가능해졌어요."
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">김철수 사장님</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact" ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
