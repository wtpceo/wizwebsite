"use client"

import { useState, useEffect, memo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
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
}) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "p-5 sm:p-6",
        className,
      )}
    >
      <div className={`absolute inset-0 ${background}`} />
      
      <div className="relative z-10 flex flex-col gap-4 p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="rounded-xl bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-sm ring-1 ring-black/5">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700 transition-transform will-change-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900">{name}</h3>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600">{description}</p>
        <div className="mt-4 h-[36px]">
          {name === "전문 사진 촬영" && (
            <Link href="/portfolio" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200 hover:text-purple-800 transition-colors duration-200"
              >
                포트폴리오 보기
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {name === "네이버 마케팅" && (
            <Link href="/naver-marketing" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800 transition-colors duration-200"
              >
                상품 소개 보러가기
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
                className="pointer-events-auto text-sm font-medium bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-800 transition-colors duration-200"
              >
                포트폴리오 보기
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          )}
          {portfolio && name !== "영상 콘텐츠 제작" && (
            <Link href="/portfolio" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-800 transition-colors duration-200"
              >
                포트폴리오 보기
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {delivery && (
            <Link href="/delivery-service" className="pointer-events-auto">
              <Button 
                size="sm" 
                className="pointer-events-auto text-sm font-medium bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-800 transition-colors duration-200"
              >
                서비스 소개 보러가기
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

const services = [
  {
    name: "전문 사진 촬영",
    description: (
      <>
        메뉴, 인테리어등 전문 장비와 노하우로<br />
        고퀄리티 사진 촬영 서비스 제공
      </>
    ),
    icon: CameraIcon,
    color: "purple",
    background: "bg-gradient-to-br from-purple-100 via-purple-50 to-white",
    href: "#contact",
    cta: "상담 신청하기",
  },
  {
    name: "네이버 마케팅",
    description: (
      <>
        플레이스의 콘텐츠 마케팅과<br />
        리뷰관리로 순위 상승
      </>
    ),
    icon: BarChart3,
    color: "blue",
    background: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
    href: "#contact",
    cta: "상담 신청하기",
  },
  {
    name: "영상 콘텐츠 제작",
    description: (
      <>
        블로그, SNS, 웹사이트 등 다양한 채널에<br />
        최적화된 맞춤형 영상 콘텐츠 제작
      </>
    ),
    icon: FileTextIcon,
    color: "teal",
    background: "bg-gradient-to-br from-teal-100 via-teal-50 to-white",
    href: "#contact",
    cta: "상담 신청하기",
    portfolio: true,
  },
  {
    name: "배달앱 관리",
    description: (
      <>
        배달의민족, 요기요 등 배달앱 등록 및<br />
        최적화, 메뉴 관리, 프로모션 설정
      </>
    ),
    icon: SmartphoneIcon,
    color: "pink",
    background: "bg-gradient-to-br from-pink-100 via-pink-50 to-white",
    href: "#contact",
    cta: "상담 신청하기",
    delivery: true,
  },
  {
    name: "인쇄물 제작",
    description: (
      <>
        메뉴판, 전단지, 명함, 배너 등<br />
        다양한 인쇄물 디자인 및 제작
      </>
    ),
    icon: PrinterIcon,
    color: "amber",
    background: "bg-gradient-to-br from-amber-100 via-amber-50 to-white",
    href: "#contact",
    cta: "상담 신청하기",
    portfolio: true,
  },
  {
    name: "체험단 운영",
    description: (
      <>
        네이버 플레이스, 인스타그램 등<br />
        다양한 플랫폼에서 효과적인 체험단 모집 및 관리
      </>
    ),
    icon: UsersRound,
    color: "indigo",
    background: "bg-gradient-to-br from-indigo-100 via-indigo-50 to-white",
    href: "#contact",
    cta: "상담 신청하기",
  },
]

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 via-white to-purple-50"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center" 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2">
            <Badge
              className="w-fit mx-auto bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200 border-blue-200"
              variant="outline"
            >
              서비스 소개
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-700 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              <span className="hidden md:inline">자영업자를 위한 통합 마케팅 솔루션</span>
              <span className="block md:hidden">자영업자를 위한<br />통합 마케팅 솔루션</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              <span className="hidden md:inline">위즈더플래닝은 자영업자를 위한 모든 마케팅 서비스를 한 곳에서 제공합니다.</span>
              <span className="block md:hidden">위즈더플래닝은 자영업자를 위한<br />모든 마케팅 서비스를 한 곳에서 제공합니다.</span>
            </p>
          </div>
        </motion.div>
        
        {isVisible && (
          <motion.div
            className="mt-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <BentoGrid>
              {services.map((service) => (
                <BentoCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  Icon={service.icon}
                  background={service.background}
                  href={service.href}
                  cta={service.cta}
                  portfolio={service.portfolio}
                  delivery={service.delivery}
                  className="h-[300px]"
                />
              ))}
            </BentoGrid>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default memo(ServicesSection) 