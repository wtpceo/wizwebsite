"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  AlertCircle, CheckCircle2, XCircle, TrendingUp, MapPin, Package, 
  ChefHat, Star, Award, Users, Building, ShoppingBag, ArrowRight,
  Store, Home, Coffee, Pizza, Globe, Smartphone, Hash, Megaphone,
  Search, Camera, Instagram, Youtube, FileText, Lightbulb
} from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

// 마케팅 채널 정의
const marketingChannels = {
  naver: {
    name: "네이버 포털",
    icon: Search,
    subChannels: [
      { id: "smart_place", name: "스마트 플레이스", icon: MapPin },
      { id: "power_link", name: "파워링크 (홈페이지)", icon: FileText },
      { id: "small_biz_ad", name: "소상공인 광고", icon: Megaphone },
      { id: "seo", name: "SEO 마케팅", icon: Hash }
    ]
  },
  experience: {
    name: "체험단 마케팅",
    icon: Users,
    subChannels: [
      { id: "blog_review", name: "네이버 블로그 체험단", icon: FileText },
      { id: "sns_feed", name: "SNS 피드 체험단", icon: Camera },
      { id: "sns_reels", name: "SNS 릴스 체험단", icon: Youtube }
    ]
  },
  google: {
    name: "구글",
    icon: Globe,
    subChannels: [
      { id: "google_business", name: "구글 비즈니스 프로필", icon: Building },
      { id: "google_maps", name: "구글 맵스", icon: MapPin }
    ]
  },
  delivery: {
    name: "배달앱",
    icon: Package,
    subChannels: [
      { id: "baemin", name: "배달앱", icon: Smartphone },
      { id: "coupang", name: "쿠팡이츠", icon: Smartphone },
      { id: "yogiyo", name: "요기요", icon: Smartphone },
      { id: "ddangyo", name: "땡겨요", icon: Smartphone },
      { id: "local_app", name: "지역 배달앱", icon: Smartphone }
    ]
  },
  sns: {
    name: "SNS 마케팅",
    icon: Instagram,
    subChannels: [
      { id: "instagram", name: "인스타그램", icon: Instagram },
      { id: "facebook", name: "페이스북", icon: Users },
      { id: "youtube", name: "유튜브", icon: Youtube }
    ]
  }
}

// 규모별 필수 채널 매핑
const requiredChannelsByType = {
  "소형": {
    essential: ["naver.smart_place", "delivery.baemin", "delivery.coupang"],
    recommended: ["google.google_business", "experience.blog_review", "delivery.yogiyo"]
  },
  "중소형": {
    essential: ["naver.smart_place", "delivery.baemin", "delivery.coupang", "experience.blog_review"],
    recommended: ["naver.small_biz_ad", "sns.instagram", "google.google_business"]
  },
  "중대형": {
    essential: ["naver.smart_place", "naver.power_link", "experience.blog_review", "sns.instagram", "delivery.baemin"],
    recommended: ["naver.seo", "experience.sns_feed", "google.google_business", "sns.youtube"]
  },
  "브랜드": {
    essential: ["naver.smart_place", "naver.power_link", "naver.seo", "experience.blog_review", "experience.sns_reels", "sns.instagram", "sns.youtube"],
    recommended: ["naver.small_biz_ad", "google.google_business", "delivery.baemin"]
  }
}

// 채널별 체크리스트 질문
const channelChecklists: Record<string, any[]> = {
  "naver.smart_place": [
    { question: "업체명, 업종, 주소, 연락처가 정확하게 입력되어 있나요?", weight: 3 },
    { question: "영업시간 및 휴무일 찾아오는 길이 정확하고 자주 업데이트되나요?", weight: 3 },
    { question: "매력적인 사진(내부/외부/메뉴/요리 등)이 최소 5장 이상 등록되어 있나요?", weight: 10 },
    { question: "메뉴판 이미지 또는 개별 메뉴명이 등록되어 있나요?", weight: 5 },
    { question: "대표 메뉴 또는 인기 메뉴가 강조되어 있나요?", weight: 6 },
    { question: "예약/포장/주문 기능 설정 여부를 확인했나요?", weight: 6 },
    { question: "별점 및 고객 리뷰 반응 체크와 응답을 하고 있나요?", weight: 8 },
    { question: "고객이 방문 할 만한 쿠폰을 설정되어 있나요?", weight: 7 },
    { question: "업장의 최신 소식이 정기적으로 발행되고 있나요?", weight: 5 },
    { question: "체험단을 활용하여 최신 리뷰들을 쌓아 놓고 있나요?", weight: 8 },
    { question: "무료 마케팅 메세지를 활용하여 재방문 고객 유치를 하고 있나요?", weight: 9 },
    { question: "영상(클립)을 제작하여 플레이스에 등록하고 있나요?", weight: 10 },
    { question: "네이버 지체 광고 소상공인 광고, 플레이스 노출 광고, 파워 링크를 정기적으로 하고 있나요?", weight: 10 },
    { question: "매 월 플레이스 통계를 확인하여 유입 채널과 고객들을 파악하고 있나요?", weight: 9 },
    { question: "편의 시설등 상세 설명이 업체에 대한 특징을 잘 설명하고 있나요?", weight: 5 },
    { question: "대표 키워드를 잘 설정 해놓았나요?", weight: 7 }
  ],
  "naver.power_link": [
    { question: "홈페이지가 반응형으로 최적화 되어 있나요?", weight: 8 },
    { question: "파워링크 광고를 정기적으로 집행하나요?", weight: 10 },
    { question: "광고 키워드를 효율적으로 선정했나요?", weight: 9 },
    { question: "파워링크에 노출되는 사진 한 줄 설정을 해놓으셨나요?", weight: 7 },
    { question: "광고 효과를 측정하고 개선하나요?", weight: 8 }
  ],
  "naver.small_biz_ad": [
    { question: "스마트공인 광고를 활용하고 있나요?", weight: 10 },
    { question: "타겟팅을 적절히 설정했나요?", weight: 8 },
    { question: "광고 예산을 효율적으로 관리하나요?", weight: 7 }
  ],
  "naver.seo": [
    { question: "매장 관련 키워드로 검색 시 상위에 노출되나요?", weight: 9 },
    { question: "매장명으로 검색시 1달 안쪽의 콘텐츠들이 노출되나요?", weight: 8 },
    { question: "블로그나 카페에 꾸준히 콘텐츠를 발행하나요?", weight: 7 },
    { question: "키워드 최적화를 고려한 콘텐츠를 작성하나요?", weight: 8 }
  ],
  "experience.blog_review": [
    { question: "네이버 블로그 체험단을 정기적으로 진행하나요?", weight: 9 },
    { question: "체험단들에게 키워드나 정확한 정보를 포스팅해달라고 요청하나요?", weight: 8 },
    { question: "블로거들의 블로그 지수를 체크하고 선정하나요?", weight: 7 },
    { question: "체험단 리뷰의 품질을 관리하나요?", weight: 8 },
    { question: "체험단 리뷰가 검색에 잘 노출되나요?", weight: 7 }
  ],
  "experience.sns_feed": [
    { question: "SNS 피드 체험단을 활용하나요?", weight: 8 },
    { question: "인플루언서와 협업하고 있나요?", weight: 9 },
    { question: "체험단 콘텐츠를 재활용하나요?", weight: 6 }
  ],
  "experience.sns_reels": [
    { question: "릴스/숏폼 콘텐츠를 제작하나요?", weight: 10 },
    { question: "트렌드에 맞는 콘텐츠를 기획하나요?", weight: 8 },
    { question: "정기적으로 업로드하나요?", weight: 7 }
  ],
  "google.google_business": [
    { question: "구글 비즈니스 프로필을 등록했나요?", weight: 5 },
    { question: "정보를 최신으로 유지하나요?", weight: 4 },
    { question: "구글 리뷰에 답변하나요?", weight: 6 },
    { question: "사진을 정기적으로 업로드하나요?", weight: 7 }
  ],
  "google.google_maps": [
    { question: "구글 맵스에 정확히 표시되나요?", weight: 4 },
    { question: "영업시간이 정확하게 표시되나요?", weight: 3 },
    { question: "길찾기 기능이 제대로 작동하나요?", weight: 5 }
  ],
  "delivery.baemin": [
    { question: "배달앱(배민/요기요/쿠팡이츠/땡겨요 등)에 모두 입점되어 있나요?", weight: 5 },
    { question: "브랜드명, 메뉴 이름, 가격, 사진 등이 최신 정보로 유지되고 있나요?", weight: 4 },
    { question: "대표 메뉴 또는 시그니처 메뉴가 썸네일과 상단에 노출되도록 설정되어 있나요?", weight: 7 },
    { question: "리뷰 수와 평점이 경쟁업체 대비 부족하지 않은가?", weight: 8 },
    { question: "리뷰에 대한 답글(감사/사과 등)이 작성되고 있나요?", weight: 6 },
    { question: "배달시간, 영업시간, 배달 가능 지역 등이 정확하게 설정되어 있나요?", weight: 4 },
    { question: "신규고객 유치를 위한 할인 쿠폰이 설정되어 있나요? (첫 주문 쿠폰 등)", weight: 7 },
    { question: "재주문을 유도할 수 있는 리워드/쿠폰이 운영되고 있나요?", weight: 8 },
    { question: "프로모션/이벤트 기간에 맞춰 배달앱 내 광고(우리가게클릭광고, 오픈리스트 등)를 집행한 적이 있나요?", weight: 10 },
    { question: "배달 이미지(메뉴 사진, 대표 썸네일 등)가 고퀄리티로 구성되어 있나요?", weight: 9 },
    { question: "포장/배달 패키징에 리뷰 요청 문구, 로고, 브랜딩 요소가 포함되어 있나요?", weight: 7 },
    { question: "리뷰 이벤트(리뷰 작성 시 음료/사이드 제공 등)를 진행하고 있나요?", weight: 8 },
    { question: "고객 민원이나 부정 리뷰 발생 시 빠르고 성의 있게 대응하고 있나요?", weight: 8 },
    { question: "월별 배달앱 매출/리뷰/주문 데이터를 분석하고 있나요?", weight: 9 },
    { question: "경쟁 매장의 리뷰, 별점, 쿠폰 등을 정기적으로 모니터링하고 있나요?", weight: 9 }
  ],
  "delivery.coupang": [
    { question: "배달앱(배민/요기요/쿠팡이츠/땡겨요 등)에 모두 입점되어 있나요?", weight: 5 },
    { question: "브랜드명, 메뉴 이름, 가격, 사진 등이 최신 정보로 유지되고 있나요?", weight: 4 },
    { question: "대표 메뉴 또는 시그니처 메뉴가 썸네일과 상단에 노출되도록 설정되어 있나요?", weight: 7 },
    { question: "리뷰 수와 평점이 경쟁업체 대비 부족하지 않은가?", weight: 8 },
    { question: "리뷰에 대한 답글(감사/사과 등)이 작성되고 있나요?", weight: 6 },
    { question: "배달시간, 영업시간, 배달 가능 지역 등이 정확하게 설정되어 있나요?", weight: 4 },
    { question: "신규고객 유치를 위한 할인 쿠폰이 설정되어 있나요? (첫 주문 쿠폰 등)", weight: 7 },
    { question: "재주문을 유도할 수 있는 리워드/쿠폰이 운영되고 있나요?", weight: 8 },
    { question: "프로모션/이벤트 기간에 맞춰 배달앱 내 광고(우리가게클릭광고, 오픈리스트 등)를 집행한 적이 있나요?", weight: 10 },
    { question: "배달 이미지(메뉴 사진, 대표 썸네일 등)가 고퀄리티로 구성되어 있나요?", weight: 9 },
    { question: "포장/배달 패키징에 리뷰 요청 문구, 로고, 브랜딩 요소가 포함되어 있나요?", weight: 7 },
    { question: "리뷰 이벤트(리뷰 작성 시 음료/사이드 제공 등)를 진행하고 있나요?", weight: 8 },
    { question: "고객 민원이나 부정 리뷰 발생 시 빠르고 성의 있게 대응하고 있나요?", weight: 8 },
    { question: "월별 배달앱 매출/리뷰/주문 데이터를 분석하고 있나요?", weight: 9 },
    { question: "경쟁 매장의 리뷰, 별점, 쿠폰 등을 정기적으로 모니터링하고 있나요?", weight: 9 }
  ],
  "delivery.yogiyo": [
    { question: "배달앱(배민/요기요/쿠팡이츠/땡겨요 등)에 모두 입점되어 있나요?", weight: 5 },
    { question: "브랜드명, 메뉴 이름, 가격, 사진 등이 최신 정보로 유지되고 있나요?", weight: 4 },
    { question: "대표 메뉴 또는 시그니처 메뉴가 썸네일과 상단에 노출되도록 설정되어 있나요?", weight: 7 },
    { question: "리뷰 수와 평점이 경쟁업체 대비 부족하지 않은가?", weight: 8 },
    { question: "리뷰에 대한 답글(감사/사과 등)이 작성되고 있나요?", weight: 6 },
    { question: "배달시간, 영업시간, 배달 가능 지역 등이 정확하게 설정되어 있나요?", weight: 4 },
    { question: "신규고객 유치를 위한 할인 쿠폰이 설정되어 있나요? (첫 주문 쿠폰 등)", weight: 7 },
    { question: "재주문을 유도할 수 있는 리워드/쿠폰이 운영되고 있나요?", weight: 8 },
    { question: "프로모션/이벤트 기간에 맞춰 배달앱 내 광고(우리가게클릭광고, 오픈리스트 등)를 집행한 적이 있나요?", weight: 10 },
    { question: "배달 이미지(메뉴 사진, 대표 썸네일 등)가 고퀄리티로 구성되어 있나요?", weight: 9 },
    { question: "포장/배달 패키징에 리뷰 요청 문구, 로고, 브랜딩 요소가 포함되어 있나요?", weight: 7 },
    { question: "리뷰 이벤트(리뷰 작성 시 음료/사이드 제공 등)를 진행하고 있나요?", weight: 8 },
    { question: "고객 민원이나 부정 리뷰 발생 시 빠르고 성의 있게 대응하고 있나요?", weight: 8 },
    { question: "월별 배달앱 매출/리뷰/주문 데이터를 분석하고 있나요?", weight: 9 },
    { question: "경쟁 매장의 리뷰, 별점, 쿠폰 등을 정기적으로 모니터링하고 있나요?", weight: 9 }
  ],
  "delivery.ddangyo": [
    { question: "배달앱(배민/요기요/쿠팡이츠/땡겨요 등)에 모두 입점되어 있나요?", weight: 5 },
    { question: "브랜드명, 메뉴 이름, 가격, 사진 등이 최신 정보로 유지되고 있나요?", weight: 4 },
    { question: "대표 메뉴 또는 시그니처 메뉴가 썸네일과 상단에 노출되도록 설정되어 있나요?", weight: 7 },
    { question: "리뷰 수와 평점이 경쟁업체 대비 부족하지 않은가?", weight: 8 },
    { question: "리뷰에 대한 답글(감사/사과 등)이 작성되고 있나요?", weight: 6 },
    { question: "배달시간, 영업시간, 배달 가능 지역 등이 정확하게 설정되어 있나요?", weight: 4 },
    { question: "신규고객 유치를 위한 할인 쿠폰이 설정되어 있나요? (첫 주문 쿠폰 등)", weight: 7 },
    { question: "재주문을 유도할 수 있는 리워드/쿠폰이 운영되고 있나요?", weight: 8 },
    { question: "프로모션/이벤트 기간에 맞춰 배달앱 내 광고(우리가게클릭광고, 오픈리스트 등)를 집행한 적이 있나요?", weight: 10 },
    { question: "배달 이미지(메뉴 사진, 대표 썸네일 등)가 고퀄리티로 구성되어 있나요?", weight: 9 },
    { question: "포장/배달 패키징에 리뷰 요청 문구, 로고, 브랜딩 요소가 포함되어 있나요?", weight: 7 },
    { question: "리뷰 이벤트(리뷰 작성 시 음료/사이드 제공 등)를 진행하고 있나요?", weight: 8 },
    { question: "고객 민원이나 부정 리뷰 발생 시 빠르고 성의 있게 대응하고 있나요?", weight: 8 },
    { question: "월별 배달앱 매출/리뷰/주문 데이터를 분석하고 있나요?", weight: 9 },
    { question: "경쟁 매장의 리뷰, 별점, 쿠폰 등을 정기적으로 모니터링하고 있나요?", weight: 9 }
  ],
  "delivery.local_app": [
    { question: "배달앱(배민/요기요/쿠팡이츠/땡겨요 등)에 모두 입점되어 있나요?", weight: 5 },
    { question: "브랜드명, 메뉴 이름, 가격, 사진 등이 최신 정보로 유지되고 있나요?", weight: 4 },
    { question: "대표 메뉴 또는 시그니처 메뉴가 썸네일과 상단에 노출되도록 설정되어 있나요?", weight: 7 },
    { question: "리뷰 수와 평점이 경쟁업체 대비 부족하지 않은가?", weight: 8 },
    { question: "리뷰에 대한 답글(감사/사과 등)이 작성되고 있나요?", weight: 6 },
    { question: "배달시간, 영업시간, 배달 가능 지역 등이 정확하게 설정되어 있나요?", weight: 4 },
    { question: "신규고객 유치를 위한 할인 쿠폰이 설정되어 있나요? (첫 주문 쿠폰 등)", weight: 7 },
    { question: "재주문을 유도할 수 있는 리워드/쿠폰이 운영되고 있나요?", weight: 8 },
    { question: "프로모션/이벤트 기간에 맞춰 배달앱 내 광고(우리가게클릭광고, 오픈리스트 등)를 집행한 적이 있나요?", weight: 10 },
    { question: "배달 이미지(메뉴 사진, 대표 썸네일 등)가 고퀄리티로 구성되어 있나요?", weight: 9 },
    { question: "포장/배달 패키징에 리뷰 요청 문구, 로고, 브랜딩 요소가 포함되어 있나요?", weight: 7 },
    { question: "리뷰 이벤트(리뷰 작성 시 음료/사이드 제공 등)를 진행하고 있나요?", weight: 8 },
    { question: "고객 민원이나 부정 리뷰 발생 시 빠르고 성의 있게 대응하고 있나요?", weight: 8 },
    { question: "월별 배달앱 매출/리뷰/주문 데이터를 분석하고 있나요?", weight: 9 },
    { question: "경쟁 매장의 리뷰, 별점, 쿠폰 등을 정기적으로 모니터링하고 있나요?", weight: 9 }
  ],
  "sns.instagram": [
    { question: "인스타그램 계정을 운영하나요?", weight: 6 },
    { question: "주 3회 이상 포스팅하나요?", weight: 7 },
    { question: "스토리를 활용하나요?", weight: 5 },
    { question: "릴스를 제작하나요?", weight: 9 },
    { question: "해시태그를 전략적으로 사용하나요?", weight: 8 }
  ],
  "sns.facebook": [
    { question: "페이스북 페이지를 운영하나요?", weight: 5 },
    { question: "정기적으로 포스팅하나요?", weight: 6 },
    { question: "페이스북 광고를 활용하나요?", weight: 8 }
  ],
  "sns.youtube": [
    { question: "유튜브 채널을 운영하나요?", weight: 7 },
    { question: "정기적으로 영상을 업로드하나요?", weight: 8 },
    { question: "쇼츠를 활용하나요?", weight: 9 }
  ]
}

interface StoreProfile {
  type: string
  location: string
  deliveryRatio: string
  essentialChannels: string[]
  recommendedChannels: string[]
}

// 매장 프로파일링 질문
const profilingQuestions = [
  {
    id: "seats",
    question: "매장 좌석 수는 몇 개입니까?",
    type: "radio",
    options: [
      { value: "small", label: "5석 이하 (포장/배달 위주)", icon: Home },
      { value: "medium", label: "5-15석", icon: Coffee },
      { value: "large", label: "15-30석", icon: Store },
      { value: "xlarge", label: "30석 이상", icon: Building }
    ]
  },
  {
    id: "daily_revenue",
    question: "일 평균 매출은 어느 정도입니까?",
    type: "radio",
    options: [
      { value: "under_1m", label: "100만원 미만" },
      { value: "1m_2m", label: "100-200만원" },
      { value: "2m_5m", label: "200-500만원" },
      { value: "over_5m", label: "500만원 이상" }
    ]
  },
  {
    id: "location",
    question: "매장이 위치한 상권은 어디입니까?",
    type: "radio",
    options: [
      { value: "residential", label: "주택가/아파트 단지" },
      { value: "university", label: "대학가" },
      { value: "office", label: "오피스/상업지구" },
      { value: "downtown", label: "번화가/유동인구 많은 곳" }
    ]
  },
  {
    id: "delivery_ratio",
    question: "전체 매출 중 배달/포장 비율은?",
    type: "radio",
    options: [
      { value: "under_30", label: "30% 미만" },
      { value: "30_50", label: "30-50%" },
      { value: "50_70", label: "50-70%" },
      { value: "over_70", label: "70% 이상" }
    ]
  },
  {
    id: "operation_years",
    question: "운영 기간은 얼마나 되셨나요?",
    type: "radio",
    options: [
      { value: "new", label: "1년 미만 (신규)" },
      { value: "growing", label: "1-3년" },
      { value: "stable", label: "3-5년" },
      { value: "established", label: "5년 이상" }
    ]
  }
]

export default function MarketingAnalysisPage() {
  const [step, setStep] = useState<"profiling" | "channels" | "analysis">("profiling")
  const [profileAnswers, setProfileAnswers] = useState<Record<string, string>>({})
  const [storeProfile, setStoreProfile] = useState<StoreProfile | null>(null)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [channelScores, setChannelScores] = useState<Record<string, number>>({})
  const [totalScore, setTotalScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  // 매장 프로필 분석
  const analyzeStoreProfile = () => {
    const { seats, daily_revenue, location, delivery_ratio, operation_years } = profileAnswers
    
    let type = "소형"
    
    // 매장 규모 판단
    if (seats === "xlarge" || daily_revenue === "over_5m") {
      type = "브랜드"
    } else if (seats === "large" || daily_revenue === "2m_5m") {
      type = "중대형"
    } else if (seats === "medium" || daily_revenue === "1m_2m") {
      type = "중소형"
    } else {
      type = "소형"
    }
    
    // 필수 및 권장 채널 설정
    const channels = requiredChannelsByType[type as keyof typeof requiredChannelsByType]
    const essentialChannels = [...channels.essential]
    const recommendedChannels = [...channels.recommended]
    
    // 상권별 추가 채널
    if (location === "university") {
      if (!essentialChannels.includes("sns.instagram")) {
        essentialChannels.push("sns.instagram")
      }
    } else if (location === "office") {
      if (!essentialChannels.includes("naver.smart_place")) {
        essentialChannels.push("naver.smart_place")
      }
    }
    
    // 배달 비중에 따른 채널 조정
    if (delivery_ratio === "over_70" || delivery_ratio === "50_70") {
      if (!essentialChannels.includes("delivery.yogiyo")) {
        essentialChannels.push("delivery.yogiyo")
      }
      if (!essentialChannels.includes("delivery.ddangyo")) {
        recommendedChannels.push("delivery.ddangyo")
      }
    }
    
    // 신규 매장 추가 채널
    if (operation_years === "new") {
      if (!essentialChannels.includes("experience.blog_review")) {
        essentialChannels.push("experience.blog_review")
      }
    }
    
    setStoreProfile({
      type,
      location: location || "",
      deliveryRatio: delivery_ratio || "",
      essentialChannels,
      recommendedChannels
    })
    
    setStep("channels")
  }

  // 점수 계산
  useEffect(() => {
    if (!storeProfile) return
    
    const scores: Record<string, number> = {}
    let totalMaxScore = 0
    let totalCurrentScore = 0
    
    // 각 채널별 점수 계산
    storeProfile.essentialChannels.forEach(channelKey => {
      const questions = channelChecklists[channelKey] || []
      const maxScore = questions.reduce((sum, q) => sum + q.weight, 0)
      const currentScore = questions.reduce((sum, q, index) => {
        const itemKey = `${channelKey}_${index}`
        return sum + (checkedItems[itemKey] ? q.weight : 0)
      }, 0)
      
      if (maxScore > 0) {
        scores[channelKey] = Math.round((currentScore / maxScore) * 100)
        totalMaxScore += maxScore
        totalCurrentScore += currentScore
      }
    })
    
    setChannelScores(scores)
    setTotalScore(totalMaxScore > 0 ? Math.round((totalCurrentScore / totalMaxScore) * 100) : 0)
  }, [checkedItems, storeProfile])

  const handleCheckChange = (itemId: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }))
  }

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { label: "우수", color: "text-green-600", icon: CheckCircle2, bgColor: "bg-green-50" }
    if (score >= 60) return { label: "양호", color: "text-blue-600", icon: TrendingUp, bgColor: "bg-blue-50" }
    if (score >= 40) return { label: "개선필요", color: "text-yellow-600", icon: AlertCircle, bgColor: "bg-yellow-50" }
    return { label: "위험", color: "text-red-600", icon: XCircle, bgColor: "bg-red-50" }
  }

  const getChannelName = (channelKey: string) => {
    const [main, sub] = channelKey.split('.')
    const mainChannel = marketingChannels[main as keyof typeof marketingChannels]
    if (!mainChannel) return channelKey
    const subChannel = mainChannel.subChannels.find(sc => sc.id === sub)
    return subChannel?.name || channelKey
  }

  const getChannelIcon = (channelKey: string) => {
    const [main, sub] = channelKey.split('.')
    const mainChannel = marketingChannels[main as keyof typeof marketingChannels]
    if (!mainChannel) return Hash
    const subChannel = mainChannel.subChannels.find(sc => sc.id === sub)
    return subChannel?.icon || mainChannel.icon
  }

  // 체크리스트 섹션 컴포넌트
  const ChannelChecklist = ({ channelKey }: { channelKey: string }) => {
    const questions = channelChecklists[channelKey] || []
    const ChannelIcon = getChannelIcon(channelKey)
    
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <ChannelIcon className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-lg">{getChannelName(channelKey)}</h3>
          {channelScores[channelKey] !== undefined && (
            <Badge className={`ml-auto ${getScoreLevel(channelScores[channelKey]).bgColor}`}>
              {channelScores[channelKey]}%
            </Badge>
          )}
        </div>
        {questions.map((q, index) => {
          const itemKey = `${channelKey}_${index}`
          return (
            <Card key={itemKey} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={itemKey}
                    checked={checkedItems[itemKey] || false}
                    onCheckedChange={(checked) => handleCheckChange(itemKey, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={itemKey}
                      className="text-sm font-medium cursor-pointer select-none block"
                    >
                      {q.question}
                    </label>
                    <Badge variant="outline" className="mt-2">
                      가중치: {q.weight}점
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      <div className="container py-8 px-4 md:px-6 lg:px-8">
        {/* 페이지 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              우리 식당 'SNS마케팅 건강' 진단표_N스마트플레이스
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {step === "profiling" && "먼저 매장 정보를 입력하여 맞춤형 마케팅 전략을 확인하세요."}
            {step === "channels" && "귀하의 매장에 필요한 마케팅 채널을 확인하세요."}
            {step === "analysis" && "각 채널별 마케팅 현황을 체크해주세요."}
          </p>
          
          {/* 주관 정보 배너 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">
              청운대학교 정현우 교수 주관
            </span>
          </div>
        </motion.div>

        {/* 진행 단계 표시 */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === "profiling" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
              <span className="text-sm font-medium">1. 매장 정보</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === "channels" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
              <span className="text-sm font-medium">2. 채널 안내</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === "analysis" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
              <span className="text-sm font-medium">3. 현황 분석</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === "profiling" ? (
            // STEP 1: 매장 프로파일링
            <motion.div
              key="profiling"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    매장 정보 입력
                  </CardTitle>
                  <CardDescription>
                    매장 규모와 상권을 파악하여 맞춤형 마케팅 전략을 제공합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {profilingQuestions.map((q, index) => (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <Label className="text-base font-semibold">
                        {index + 1}. {q.question}
                      </Label>
                      <RadioGroup
                        value={profileAnswers[q.id] || ""}
                        onValueChange={(value) => 
                          setProfileAnswers(prev => ({ ...prev, [q.id]: value }))
                        }
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {q.options.map(option => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                              <Label 
                                htmlFor={`${q.id}-${option.value}`}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                {option.icon && <option.icon className="w-4 h-4" />}
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </motion.div>
                  ))}
                  
                  <div className="pt-6">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      onClick={analyzeStoreProfile}
                      disabled={Object.keys(profileAnswers).length < profilingQuestions.length}
                    >
                      매장 분석 시작
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : step === "channels" ? (
            // STEP 2: 필수 채널 안내
            <motion.div
              key="channels"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    {storeProfile?.type} 매장 맞춤 마케팅 채널 가이드
                  </CardTitle>
                  <CardDescription>
                    귀하의 매장 규모와 상권에 최적화된 마케팅 채널을 안내해드립니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 매장 정보 요약 */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold">매장 프로필</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>규모: <Badge variant="outline">{storeProfile?.type} 매장</Badge></div>
                      <div>배달 비중: <Badge variant="outline">{profileAnswers.delivery_ratio?.replace('_', '-')}</Badge></div>
                    </div>
                  </div>

                  {/* 필수 채널 */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      필수 마케팅 채널
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {storeProfile?.essentialChannels.map(channelKey => {
                        const Icon = getChannelIcon(channelKey)
                        return (
                          <div key={channelKey} className="flex items-center gap-3 p-3 border rounded-lg bg-white">
                            <Icon className="w-5 h-5 text-purple-600" />
                            <span className="font-medium">{getChannelName(channelKey)}</span>
                            <Badge className="ml-auto bg-purple-100 text-purple-700">필수</Badge>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* 권장 채널 */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      권장 마케팅 채널
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {storeProfile?.recommendedChannels.map(channelKey => {
                        const Icon = getChannelIcon(channelKey)
                        return (
                          <div key={channelKey} className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50">
                            <Icon className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">{getChannelName(channelKey)}</span>
                            <Badge variant="outline">권장</Badge>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      위 채널들은 {storeProfile?.type} 매장의 성공적인 마케팅을 위해 꼭 필요한 채널들입니다. 
                      다음 단계에서 각 채널별 현황을 체크해주세요.
                    </AlertDescription>
                  </Alert>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setStep("profiling")}
                      className="flex-1"
                    >
                      이전 단계
                    </Button>
                    <Button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      onClick={() => setStep("analysis")}
                    >
                      마케팅 현황 체크하기
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            // STEP 3: 마케팅 현황 분석
            <motion.div
              key="analysis"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* 점수 카드 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className={`${getScoreLevel(totalScore).bgColor} border-0 md:col-span-3`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="w-6 h-6" />
                      종합 마케팅 점수
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-3 mb-3">
                      <span className={`text-4xl font-bold ${getScoreLevel(totalScore).color}`}>
                        {totalScore}%
                      </span>
                      <Badge className="mb-1 text-lg px-3 py-1">{getScoreLevel(totalScore).label}</Badge>
                    </div>
                    <Progress value={totalScore} className="h-3" />
                  </CardContent>
                </Card>
              </div>

              {/* 채널별 체크리스트 탭 */}
              <Card>
                <CardHeader>
                  <CardTitle>채널별 마케팅 현황 체크</CardTitle>
                  <CardDescription>
                    각 탭을 클릭하여 채널별 마케팅 현황을 체크해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={storeProfile?.essentialChannels[0]} className="w-full">
                    <TabsList className="flex flex-wrap h-auto gap-2 p-2 bg-gray-100">
                      {storeProfile?.essentialChannels.map(channelKey => {
                        const Icon = getChannelIcon(channelKey)
                        return (
                          <TabsTrigger 
                            key={channelKey} 
                            value={channelKey}
                            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{getChannelName(channelKey)}</span>
                            {channelScores[channelKey] !== undefined && (
                              <Badge 
                                variant="outline" 
                                className="ml-1 text-xs"
                              >
                                {channelScores[channelKey]}%
                              </Badge>
                            )}
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>
                    
                    {storeProfile?.essentialChannels.map(channelKey => (
                      <TabsContent key={channelKey} value={channelKey} className="mt-6">
                        <ChannelChecklist channelKey={channelKey} />
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* 분석 결과 버튼 */}
              <div className="flex gap-3 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep("channels")}
                  className="flex-1"
                >
                  이전 단계
                </Button>
                <Button
                  size="lg"
                  onClick={() => setShowResults(!showResults)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {showResults ? "결과 숨기기" : "상세 분석 결과 보기"}
                </Button>
              </div>

              {/* 분석 결과 */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        {storeProfile?.type} 매장 마케팅 종합 분석
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* 채널별 점수 요약 */}
                      <div>
                        <h4 className="font-semibold mb-3">채널별 점수</h4>
                        <div className="space-y-2">
                          {storeProfile?.essentialChannels.map(channelKey => {
                            const score = channelScores[channelKey] || 0
                            const Icon = getChannelIcon(channelKey)
                            const level = getScoreLevel(score)
                            
                            return (
                              <div key={channelKey} className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-gray-600" />
                                <span className="flex-1 text-sm font-medium">
                                  {getChannelName(channelKey)}
                                </span>
                                <div className="flex items-center gap-2">
                                  <Progress value={score} className="w-24 h-2" />
                                  <span className={`text-sm font-bold ${level.color}`}>
                                    {score}%
                                  </span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* 종합 평가 */}
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">종합 평가</h4>
                        <p className="text-sm text-purple-700">
                          {totalScore >= 80 && `훌륭합니다! ${storeProfile?.type} 매장에 필요한 마케팅 채널들을 매우 잘 관리하고 있습니다.`}
                          {totalScore >= 60 && totalScore < 80 && `양호한 수준입니다. 몇 가지 채널의 개선을 통해 더 좋은 성과를 얻을 수 있습니다.`}
                          {totalScore >= 40 && totalScore < 60 && `개선이 필요합니다. 점수가 낮은 채널부터 우선적으로 개선해야 합니다.`}
                          {totalScore < 40 && `즉시 개선이 필요합니다. 기본적인 마케팅 채널 관리부터 시작해야 합니다.`}
                        </p>
                      </div>

                      {/* 개선 우선순위 */}
                      <div>
                        <h4 className="font-semibold mb-3">개선 우선순위</h4>
                        <div className="space-y-2">
                          {storeProfile?.essentialChannels
                            .filter(channelKey => (channelScores[channelKey] || 0) < 60)
                            .sort((a, b) => (channelScores[a] || 0) - (channelScores[b] || 0))
                            .slice(0, 3)
                            .map((channelKey, index) => (
                              <div key={channelKey} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                                <Badge className="bg-yellow-600">{index + 1}</Badge>
                                <span className="flex-1 font-medium">
                                  {getChannelName(channelKey)}
                                </span>
                                <span className="text-sm text-gray-600">
                                  현재 {channelScores[channelKey] || 0}%
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          전문가의 도움이 필요하신가요?
                        </p>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="font-semibold"
                          asChild
                        >
                          <a href="/#contact">
                            무료 상담 신청하기 →
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* 주관 정보 */}
                  <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">이 마케팅 건강 체크리스트는</p>
                        <p className="text-lg font-semibold text-purple-900">
                          청운대학교 정현우 교수
                        </p>
                        <p className="text-sm text-gray-600 mt-1">책임 교수 주관으로 개발되었습니다</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <Footer />
    </main>
  )
}