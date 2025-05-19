"use client"

import React from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Search, Store, Users, ArrowRight, AlertCircle, Check, Utensils, Stethoscope, Dumbbell, GraduationCap, Image, Video, Globe, BarChart, TrendingUp, MessageCircle, ChevronRight } from 'lucide-react'
import ContactForm from "@/components/contact-form"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ImportanceSection />
        <ChannelInsightSection />
        <OnlineOfflineSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[500px] py-20 bg-gradient-to-b from-[#eaf6fb] to-[#f3faf7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 좌측 텍스트 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-[#d6f0ff] text-[#2bb3ff] font-medium text-sm mb-6">
              온라인 마케팅의 새로운 패러다임
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#6366f1] bg-clip-text text-transparent">
                온라인 마케팅,
              </span>
              <br />
              선택이 아닌 필수입<br className="sm:hidden" />니다
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              고객은 매장을 방문하기 전에 반드시 온라인에서 검색합니다.<br />
              첫인상을 결정하는 온라인 마케팅, 지금 시작하세요.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] hover:scale-105 transition">
                무료 온라인 진단 받기
              </button>
            </div>
          </div>
          {/* 우측 이미지 */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl w-[380px] h-[180px] flex items-center justify-center bg-white/30 backdrop-blur">
              <img
                src="/hero-image.png"
                alt="온라인 마케팅 추상 이미지"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImportanceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fafc] to-white">
      <div className="container mx-auto px-4">
        {/* 상단 라벨/제목/설명 */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#eaf6fb] text-[#2bb3ff] font-semibold text-sm mb-4">
            WHY ONLINE MARKETING
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            왜 온라인 마케팅이 필요한가?
          </h2>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] rounded-full" />
          <p className="text-lg text-gray-600 leading-relaxed mb-1">
            수천만 원을 들여 오프라인 매장을 완벽하게 꾸몄다 해도, 고객이 방문하기 전에는 온라인에서 먼저<br />
            당신의 비즈니스를 만납니다. 왜 온라인 마케팅이 필수일까요?
          </p>
        </div>

        {/* 강조 카드 */}
        <div className="mb-10">
          <div className="flex items-center bg-[#eaf6fb] rounded-2xl shadow-md px-8 py-7 max-w-3xl mx-auto">
            <div className="flex-shrink-0 mr-6">
              <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center">
                <Search className="h-8 w-8 text-[#2bb3ff]" />
              </div>
            </div>
            <div className="text-lg text-gray-800 font-medium leading-relaxed">
              고객은 전단지를 봐도,<br />
              친구에게 소개받아도,<br />
              매장을 지나가다 간판을 봐도…<br />
              <span className="text-[#2bb3ff] font-bold">
                한 번은 반드시 온라인에서 검색합니다.
              </span>
            </div>
          </div>
        </div>

        {/* 3개 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="bg-[#eaf6fb] rounded-2xl shadow p-7 flex flex-col items-center text-center">
            <div className="bg-white rounded-xl p-3 mb-4 shadow">
              <Store className="h-8 w-8 text-[#2bb3ff]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">고객의 의사결정</h3>
            <p className="text-gray-700 text-base">
              80%의 고객이 방문 전 온라인에서 정보를 찾습니다
            </p>
          </div>
          {/* 2 */}
          <div className="bg-[#f3f0fa] rounded-2xl shadow p-7 flex flex-col items-center text-center">
            <div className="bg-white rounded-xl p-3 mb-4 shadow">
              <Search className="h-8 w-8 text-[#a78bfa]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">첫인상의 중요성</h3>
            <p className="text-gray-700 text-base">
              온라인 첫인상이 실제 방문 결정에 결정적 영향을 미칩니다
            </p>
          </div>
          {/* 3 */}
          <div className="bg-[#eafaf3] rounded-2xl shadow p-7 flex flex-col items-center text-center">
            <div className="bg-white rounded-xl p-3 mb-4 shadow">
              <Users className="h-8 w-8 text-[#22c55e]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">경쟁 우위 확보</h3>
            <p className="text-gray-700 text-base">
              경쟁업체보다 더 나은 온라인 존재감이 매출 차이를 만듭니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChannelInsightSection() {
  const cards = [
    {
      icon: <Utensils className="h-8 w-8 text-white" />,
      title: "음식점",
      color: "from-[#b6e3fa] to-[#eaf6fb]",
      iconBg: "bg-[#2bb3ff]",
      channels: ["네이버 플레이스", "블로그"],
      dot: "bg-[#2bb3ff]",
      grid: "text-[#b6e3fa]",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "병원",
      color: "from-[#e6e0fa] to-[#f3f0fa]",
      iconBg: "bg-[#a78bfa]",
      channels: ["네이버", "카카오맵", "리뷰 사이트"],
      dot: "bg-[#a78bfa]",
      grid: "text-[#e6e0fa]",
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-white" />,
      title: "운동시설",
      color: "from-[#b6f7d1] to-[#eafaf3]",
      iconBg: "bg-[#22c55e]",
      channels: ["네이버", "인스타그램"],
      dot: "bg-[#22c55e]",
      grid: "text-[#b6f7d1]",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "학원",
      color: "from-[#fae0f3] to-[#f9eaf6]",
      iconBg: "bg-[#f472b6]",
      channels: ["네이버", "블로그 콘텐츠"],
      dot: "bg-[#f472b6]",
      grid: "text-[#fae0f3]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fafc] to-white">
      <div className="container mx-auto px-4">
        {/* 상단 라벨/제목/설명 */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#eaf6fb] text-[#2bb3ff] font-semibold text-sm mb-4">
            STRATEGIC APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            업종별 맞춤 전략의 중요성
          </h2>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] rounded-full" />
          <p className="text-lg text-gray-600 leading-relaxed">
            모든 업종에 동일한 마케팅 전략은 효과가 없습니다. 업종별로 고객이 정보를 찾는 채널과 방식이 다릅니다.
          </p>
        </div>

        {/* 2x2 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl shadow-lg p-7 flex flex-col min-h-[180px] relative bg-gradient-to-br ${card.color}`}
            >
              <div className="flex items-center mb-4">
                <div className={`${card.iconBg} rounded-xl p-3 mr-4 shadow`}>
                  {card.icon}
                </div>
                <span className="font-bold text-lg text-gray-900">{card.title}</span>
              </div>
              <ul className="ml-2">
                {card.channels.map((ch) => (
                  <li key={ch} className="flex items-center text-gray-700 mb-1">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${card.dot}`} />
                    {ch}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-4 right-4 opacity-30">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className={card.grid}>
                  <rect x="3" y="3" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="17" y="3" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="3" y="17" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="17" y="17" width="4" height="4" rx="1" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 강조 문구 */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border-2 border-[#22c55e] bg-white px-6 py-7 text-center shadow">
            <span className="text-lg font-bold text-[#2bb3ff]">
              "고객이 검색하는 곳에 전략적으로 노출되는 것"
            </span>
            <div className="text-gray-700 mt-2">
              그것이 효과적인 온라인 마케팅의 핵심입니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OnlineOfflineSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fafc] to-white">
      <div className="container mx-auto px-4">
        {/* 상단 라벨/제목/설명 */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#eafaf3] text-[#22c55e] font-semibold text-sm mb-4">
            SEAMLESS EXPERIENCE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            온라인과 오프라인의 일관성
          </h2>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] rounded-full" />
          <p className="text-lg text-gray-600 leading-relaxed">
            오프라인 매장에서 제공하는 정보와 온라인에서 고객이 찾을 수 있는 정보 사이의 불일치는 신뢰도 하락과 고객 이탈로 이어집니다.
          </p>
        </div>

        {/* 중간: 좌측 경고/우측 이미지 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          {/* 좌측 경고 카드 */}
          <div className="flex-1 w-full">
            <div className="bg-[#fef3f2] rounded-2xl shadow-md p-7 flex flex-col items-start max-w-md mx-auto mb-6 lg:mb-0">
              <div className="flex items-center mb-3">
                <div className="bg-white rounded-xl p-3 shadow mr-3">
                  <AlertCircle className="h-7 w-7 text-[#fb7185]" />
                </div>
                <span className="font-bold text-[#fb7185] text-lg">"정보가 부족하거나 일치하지 않네..."</span>
              </div>
              <div className="text-gray-700 text-base flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-[#fb7185]" />
                고객은 즉시 다른 경쟁업체로 넘어갑니다.
              </div>
            </div>
          </div>
          {/* 우측 이미지 */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl w-[380px] h-[180px] flex items-center justify-center bg-white/30 backdrop-blur">
              <img
                src="/online-search.png"
                alt="온라인 검색 추상 이미지"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* 하단 강조 문구 */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border-2 border-[#22c55e] bg-white px-6 py-7 text-center shadow">
            <div className="text-gray-800 text-base mb-1">
              고객의 구매 여정은 온라인에서 시작해 오프라인에서 완성됩니다.
            </div>
            <span className="text-lg font-bold text-[#2bb3ff]">
              이 두 경험의 일관성이 비즈니스 성공의 열쇠입니다.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fafc] to-white">
      <div className="container mx-auto px-4">
        {/* 상단 라벨/제목/설명 */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#ede9fe] text-[#a78bfa] font-semibold text-sm mb-4">
            SUSTAINABLE APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            지속 가능한 마케팅 철학
          </h2>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] rounded-full" />
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            단기적인 성과에 집중한 마케팅은 일시적 효과만 있을 뿐, 장기적으로는 비즈니스에 해를 끼칩니다. 저희는 9년간의 경험을 통해 <span className="text-[#2bb3ff] font-bold underline">어뷰징과 편법이 아닌, 진정성 있는 마케팅</span>이 지속적인 성장을 가져온다는 것을 확인했습니다.
          </p>
        </div>

        {/* 중간: 좌측 이미지/우측 카드 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 좌측 이미지 */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl w-[380px] h-[220px] flex items-center justify-center bg-white/30 backdrop-blur">
              <img
                src="/philosophy.png"
                alt="마케팅 철학 추상 이미지"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* 우측 카드 */}
          <div className="flex-1 w-full">
            <div className="bg-[#f3f8fd] rounded-2xl shadow-md p-8 max-w-md mx-auto">
              <div className="font-bold text-gray-900 mb-5 text-lg">반대로,</div>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-[#a7f3d0] rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">정직한 리뷰</div>
                    <div className="text-gray-600 text-base">
                      진실된 고객 경험을 바탕으로 한 신뢰 구축이 장기적 성공의 기반입니다
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#a7f3d0] rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">지속적인 콘텐츠</div>
                    <div className="text-gray-600 text-base">
                      꾸준한 정보 제공으로 고객과의 관계를 유지하고 검색 노출도를 높입니다
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#a7f3d0] rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">고객 중심 정보 구조</div>
                    <div className="text-gray-600 text-base">
                      고객이 찾는 정보를 쉽게 제공하는 것이 전환율을 높이는 핵심입니다
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-7 text-gray-500 text-base">
                이게 오히려 오래 가는 가게를 만듭니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fafc] to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#eaf6fb] text-[#2bb3ff] font-semibold text-sm mb-4">
            CONTACT
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] bg-clip-text text-transparent">
            지금 바로 문의하고<br className="sm:hidden" /> 마케팅 고민을 해결하세요
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            위즈더플래닝의 전문가가 귀하의 비즈니스에 맞는 최적의 마케팅 솔루션을 제안해드립니다.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* 좌측 연락처 */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              {[
                { icon: <Phone className="h-6 w-6 text-[#2bb3ff]" />, title: "전화 문의", content: "1670-0704" },
                { icon: <MessageCircle className="h-6 w-6 text-[#22c55e]" />, title: "카카오톡 문의", content: "@위즈더플래닝" },
                { icon: <Mail className="h-6 w-6 text-[#2bb3ff]" />, title: "이메일 문의", content: "wiz@wiztheplanning.com" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`rounded-full bg-[#eaf6fb] p-3`}>{item.icon}</div>
                  <div>
                    <p className="font-medium text-gray-800 text-lg">{item.title}</p>
                    <p className={`text-[#2bb3ff] text-lg`}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="https://pf.kakao.com/_xgCzjxb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg bg-gradient-to-r from-[#2bb3ff] via-[#5eead4] to-[#22c55e] hover:scale-105 transition"
              >
                카카오톡 상담 바로가기
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* 우측 폼 */}
          <div className="flex items-center">
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 