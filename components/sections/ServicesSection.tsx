"use client"

import { useState, useEffect, memo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
// import { useTranslations } from 'next-intl'
import {
  Camera,
  Users,
  FileText,
  Smartphone,
  Printer,
  BarChart,
  ChevronRight,
  CameraIcon,
  UsersRound,
  FileTextIcon,
  SmartphoneIcon,
  PrinterIcon,
  BarChart3,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import GradientButton from "@/components/ui/button-1"
import Link from "next/link"

// 한국어 서비스 텍스트 정의
const SERVICES_TEXT = {
  title: "SERVICES",
  subtitle: "AI가 인용할 콘텐츠를 만드는 실행 서비스",
  description: "GEO는 데이터와 콘텐츠가 쌓여야 작동합니다. 9년간 검증된 실행 서비스가 그 기반을 만듭니다.",
  photo: {
    title: "전문 사진 촬영",
    description: "메뉴, 인테리어등 전문 장비와 노하우로 고퀄리티 사진 촬영 서비스 제공"
  },
  marketing: {
    title: "네이버 마케팅",
    description: "플레이스의 콘텐츠 마케팅과 리뷰관리로 순위 상승"
  },
  video: {
    title: "영상 콘텐츠 제작",
    description: "블로그, SNS, 웹사이트 등 다양한 채널에 최적화된 맞춤형 영상 콘텐츠 제작"
  },
  delivery: {
    title: "배달앱 관리",
    description: "배달의민족, 요기요 등 배달앱 등록 및 최적화, 메뉴 관리, 프로모션 설정"
  },
  print: {
    title: "인쇄물 제작",
    description: "메뉴판, 전단지, 명함, 배너 등 다양한 인쇄물 디자인 및 제작"
  },
  experience: {
    title: "체험단 운영",
    description: "네이버 플레이스, 인스타그램 등 다양한 플랫폼에서 효과적인 체험단 모집 및 관리"
  },
  portfolio: "포트폴리오 보기",
  intro: "상품 소개 보러가기",
  service_info: "서비스 소개 보러가기"
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const BentoGrid = memo(({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  )
})
BentoGrid.displayName = "BentoGrid"

const BentoCard = memo(({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  portfolio,
  delivery,
  portfolioText,
  introText,
  serviceInfoText
}: {
  name: string
  className: string
  background: string
  Icon: any
  description: React.ReactNode
  href: string
  cta: string
  portfolio?: boolean
  delivery?: boolean
  portfolioText: string
  introText: string
  serviceInfoText: string
}) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        "border border-gray-200 bg-white transition-all duration-300",
        "hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/[0.07]",
        "p-5 sm:p-6",
        className,
      )}
    >
      <div className="relative z-10 flex flex-col gap-4 p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="rounded-xl bg-emerald-50 p-2 sm:p-3 ring-1 ring-emerald-100">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 transition-transform will-change-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900">{name}</h3>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600">{description}</p>
        <div className="mt-4 h-[36px]">
          {name === "전문 사진 촬영" && (
            <Link href="/portfolio" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200"
              >
                {portfolioText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {name === "네이버 마케팅" && (
            <Link href="/naver-marketing" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200"
              >
                {introText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {name === "영상 콘텐츠 제작" && (
            <a
              href="https://www.instagram.com/matzip_town?igsh=NGpsYmg3bHA0Nmh4"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto"
            >
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200"
              >
                {portfolioText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          )}
          {portfolio && name !== "영상 콘텐츠 제작" && (
            <Link href="/portfolio" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200"
              >
                {portfolioText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {delivery && (
            <Link href="/delivery-service" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-200"
              >
                {serviceInfoText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  )
})
BentoCard.displayName = "BentoCard"

function ServicesSection({ locale }: { locale?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  // const t = useTranslations('services');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [locale]);

  const services = [
    {
      name: SERVICES_TEXT.photo.title,
      description: SERVICES_TEXT.photo.description,
      icon: CameraIcon,
      color: "purple",
      background: "bg-gradient-to-br from-purple-100 via-purple-50 to-white",
      href: "#contact",
      cta: "상담 신청하기",
    },
    {
      name: SERVICES_TEXT.marketing.title,
      description: SERVICES_TEXT.marketing.description,
      icon: BarChart3,
      color: "blue",
      background: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
      href: "#contact",
      cta: "상담 신청하기",
    },
    {
      name: SERVICES_TEXT.video.title,
      description: SERVICES_TEXT.video.description,
      icon: FileTextIcon,
      color: "teal",
      background: "bg-gradient-to-br from-teal-100 via-teal-50 to-white",
      href: "#contact",
      cta: "상담 신청하기",
      portfolio: true,
    },
    {
      name: SERVICES_TEXT.delivery.title,
      description: SERVICES_TEXT.delivery.description,
      icon: SmartphoneIcon,
      color: "pink",
      background: "bg-gradient-to-br from-pink-100 via-pink-50 to-white",
      href: "#contact",
      cta: "상담 신청하기",
      delivery: true,
    },
    {
      name: SERVICES_TEXT.print.title,
      description: SERVICES_TEXT.print.description,
      icon: PrinterIcon,
      color: "amber",
      background: "bg-gradient-to-br from-amber-100 via-amber-50 to-white",
      href: "#contact",
      cta: "상담 신청하기",
      portfolio: true,
    },
    {
      name: SERVICES_TEXT.experience.title,
      description: SERVICES_TEXT.experience.description,
      icon: UsersRound,
      color: "emerald",
      background: "bg-gradient-to-br from-emerald-100 via-emerald-50 to-white",
      href: "#contact",
      cta: "상담 신청하기",
    },
  ];

  return (
    <section id="services" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-3 text-center mb-8"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-600">
              {SERVICES_TEXT.title}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              {SERVICES_TEXT.subtitle}
            </h2>
            <p className="mx-auto max-w-[640px] text-gray-600 md:text-lg">
              {SERVICES_TEXT.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoGrid>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <BentoCard
                  name={service.name}
                  Icon={service.icon}
                  description={service.description}
                  background={service.background}
                  href={service.href}
                  className=""
                  cta={service.cta}
                  portfolio={service.portfolio}
                  delivery={service.delivery}
                  portfolioText={SERVICES_TEXT.portfolio}
                  introText={SERVICES_TEXT.intro}
                  serviceInfoText={SERVICES_TEXT.service_info}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 