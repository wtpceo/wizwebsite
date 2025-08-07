"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle2, XCircle, TrendingUp, MapPin, Package, ChefHat, Star, Award } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

interface ChecklistItem {
  id: string
  question: string
  category: "place" | "delivery"
  weight: number
  tip?: string
}

const checklistItems: ChecklistItem[] = [
  // 네이버 플레이스 항목
  {
    id: "place1",
    question: "업체명, 업종, 주소, 연락처가 정확하게 입력되어 있나요?",
    category: "place",
    weight: 3,  // 기본 중의 기본
    tip: "정확한 정보는 고객 신뢰도를 높입니다"
  },
  {
    id: "place2",
    question: "영업시간 및 휴무일 찾아오는 길이 정확하고 자주 업데이트되나요?",
    category: "place",
    weight: 3,  // 기본 설정
    tip: "영업시간 변경 시 즉시 업데이트하세요"
  },
  {
    id: "place3",
    question: "매력적인 사진(내부/외부/메뉴/요리 등)이 최소 5장 이상 등록되어 있나요?",
    category: "place",
    weight: 10,  // 전문적 촬영 필요, 매우 중요
    tip: "고화질의 음식 사진은 매출에 직접적인 영향을 줍니다"
  },
  {
    id: "place4",
    question: "메뉴판 이미지 또는 개별 메뉴명이 등록되어 있나요?",
    category: "place",
    weight: 4  // 기본에 가까운 작업
  },
  {
    id: "place5",
    question: "대표 메뉴 또는 인기 메뉴가 강조되어 있나요?",
    category: "place",
    weight: 6  // 전략적 판단 필요
  },
  {
    id: "place6",
    question: "예약/포장/주문 기능 설정 여부를 확인했나요?",
    category: "place",
    weight: 5  // 중간 난이도
  },
  {
    id: "place7",
    question: "별점 및 고객 리뷰 반응 체크와 응답을 하고 있나요?",
    category: "place",
    weight: 8,  // 지속적 관리와 전략 필요
    tip: "부정적 리뷰에도 정중하게 응답하면 이미지가 개선됩니다"
  },
  {
    id: "place8",
    question: "고객이 방문 할 만한 쿠폰은 설정되어 있나요?",
    category: "place",
    weight: 6  // 마케팅 전략 필요
  },
  {
    id: "place9",
    question: "업장의 최신 소식이 정기적으로 발행되고 있나요?",
    category: "place",
    weight: 7  // 콘텐츠 제작 능력 필요
  },
  {
    id: "place10",
    question: "체험단을 활용하여 최신 리뷰들을 쌓아 놓고 있나요?",
    category: "place",
    weight: 9  // 전문적 마케팅 활동
  },
  {
    id: "place11",
    question: "무료 마케팅 메세지를 활용하여 재방문 고객 유치를 하고 있나요?",
    category: "place",
    weight: 7  // 전략적 활용 필요
  },
  {
    id: "place12",
    question: "영상(클립)을 제작하여 플레이스에 등록하고 있나요?",
    category: "place",
    weight: 9  // 영상 제작 전문성 필요
  },
  {
    id: "place13",
    question: "네이버 자체 광고 스마트공인 광고, 플레이스 노출 광고, 파워 링크를 정기적으로 하고 있나요?",
    category: "place",
    weight: 10,  // 광고 전문 지식과 예산 필요
    tip: "예산에 맞는 광고 전략을 수립하세요"
  },
  {
    id: "place14",
    question: "매 월 플레이스 통계를 확인하여 유입 채널과 고객들을 파악하고 있나요?",
    category: "place",
    weight: 9,  // 데이터 분석 능력 필요
  },
  {
    id: "place15",
    question: "편의 시설등 상세 설명이 입체에 대한 특징을 잘 설명하고 있나요?",
    category: "place",
    weight: 5,  // 기본 정보 작성
    tip: "주차 가능 여부, 와이파이, 애견 동반 등 편의시설 정보를 상세히 기재하세요"
  },
  {
    id: "place16",
    question: "대표 키워드를 잘 설정 해놓았나요?",
    category: "place",
    weight: 6,  // SEO 전략
    tip: "고객이 검색할 만한 키워드를 선정하세요"
  },
  
  // 배달앱 편
  {
    id: "delivery1",
    question: "배달앱(배민/요기요/쿠팡이츠/땡겨요 등)에 모두 입점되어 있나요?",
    category: "delivery",
    weight: 4  // 기본적인 입점 작업
  },
  {
    id: "delivery2",
    question: "브랜드명, 메뉴 이름, 가격, 사진 등이 최신 정보로 유지되고 있나요?",
    category: "delivery",
    weight: 3  // 기본 정보 관리
  },
  {
    id: "delivery3",
    question: "대표 메뉴 또는 시그니처 메뉴가 썸네일과 상단에 노출되도록 설정되어 있나요?",
    category: "delivery",
    weight: 6  // 전략적 메뉴 배치
  },
  {
    id: "delivery4",
    question: "리뷰 수와 평점이 경쟁업체 대비 부족하지 않은가요?",
    category: "delivery",
    weight: 8  // 지속적 관리 필요
  },
  {
    id: "delivery5",
    question: "리뷰에 대한 답글(감사/사과 등)이 작성되고 있나요?",
    category: "delivery",
    weight: 7,  // 운영 노하우 필요
    tip: "24시간 내 응답이 이상적입니다"
  },
  {
    id: "delivery6",
    question: "배달시간, 영업시간, 배달 가능 지역 등이 정확하게 설정되어 있나요?",
    category: "delivery",
    weight: 3  // 기본 설정
  },
  {
    id: "delivery7",
    question: "신규고객 유치를 위한 할인 쿠폰이 설정되어 있나요? (첫 주문 쿠폰 등)",
    category: "delivery",
    weight: 7,  // 마케팅 전략 필요
    tip: "첫 주문 할인은 신규 고객 유치에 매우 효과적입니다"
  },
  {
    id: "delivery8",
    question: "재주문을 유도할 수 있는 리워드/쿠폰이 운영되고 있나요?",
    category: "delivery",
    weight: 8  // CRM 전략 필요
  },
  {
    id: "delivery9",
    question: "프로모션/이벤트 기간에 맞춰 배달앱 내 광고(울트라콜클광고, 오픈리스트 등)를 집행한 적이 있나요?",
    category: "delivery",
    weight: 10,  // 광고 전문 지식과 예산 필요
    tip: "특별한 날이나 이벤트 시즌에 광고 효과가 극대화됩니다"
  },
  {
    id: "delivery10",
    question: "배달 이미지(메뉴 사진, 대표 썸네일 등)가 고퀄리티로 구성되어 있나요?",
    category: "delivery",
    weight: 9  // 전문적 촬영 필요
  },
  {
    id: "delivery11",
    question: "포장/배달 패키징에 리뷰 요청 문구, 로고, 브랜딩 요소가 포함되어 있나요?",
    category: "delivery",
    weight: 6  // 브랜딩 전략 필요
  },
  {
    id: "delivery12",
    question: "리뷰 이벤트(리뷰 작성 시 음료/사이드 제공 등)를 진행하고 있나요?",
    category: "delivery",
    weight: 7  // 이벤트 기획 능력 필요
  },
  {
    id: "delivery13",
    question: "고객 민원이나 부정 리뷰 발생 시 빠르고 성의 있게 대응하고 있나요?",
    category: "delivery",
    weight: 8  // CS 전문성 필요
  },
  {
    id: "delivery14",
    question: "월별 배달앱 매출/리뷰/주문 데이터를 분석하고 있나요?",
    category: "delivery",
    weight: 9  // 데이터 분석 능력 필요
  },
  {
    id: "delivery15",
    question: "경쟁 매장의 리뷰, 별점, 쿠폰 등을 정기적으로 모니터링하고 있나요?",
    category: "delivery",
    weight: 8  // 시장 분석 능력 필요
  }
]

export default function MarketingAnalysisPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [placeScore, setPlaceScore] = useState(0)
  const [deliveryScore, setDeliveryScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  // 점수 계산
  useEffect(() => {
    const placeItems = checklistItems.filter(item => item.category === "place")
    const deliveryItems = checklistItems.filter(item => item.category === "delivery")
    
    const placeChecked = placeItems.filter(item => checkedItems[item.id])
    const deliveryChecked = deliveryItems.filter(item => checkedItems[item.id])
    
    const placeMaxScore = placeItems.reduce((sum, item) => sum + item.weight, 0)
    const deliveryMaxScore = deliveryItems.reduce((sum, item) => sum + item.weight, 0)
    
    const placeCurrentScore = placeChecked.reduce((sum, item) => sum + item.weight, 0)
    const deliveryCurrentScore = deliveryChecked.reduce((sum, item) => sum + item.weight, 0)
    
    const placePercentage = placeMaxScore > 0 ? Math.round((placeCurrentScore / placeMaxScore) * 100) : 0
    const deliveryPercentage = deliveryMaxScore > 0 ? Math.round((deliveryCurrentScore / deliveryMaxScore) * 100) : 0
    
    setPlaceScore(placePercentage)
    setDeliveryScore(deliveryPercentage)
    setTotalScore(Math.round((placePercentage + deliveryPercentage) / 2))
  }, [checkedItems])

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

  const getRecommendations = () => {
    const uncheckedItems = checklistItems.filter(item => !checkedItems[item.id])
    const priorityItems = uncheckedItems
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 5)
    
    return priorityItems
  }

  const ChecklistSection = ({ items, category }: { items: ChecklistItem[], category: "place" | "delivery" }) => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id={item.id}
                  checked={checkedItems[item.id] || false}
                  onCheckedChange={(checked) => handleCheckChange(item.id, checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <label
                    htmlFor={item.id}
                    className="text-sm font-medium cursor-pointer select-none block"
                  >
                    {item.question}
                  </label>
                  {item.tip && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {item.tip}
                    </p>
                  )}
                  <Badge variant="outline" className="mt-2">
                    가중치: {item.weight}점
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )

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
              음식점 마케팅 건강 체크
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            네이버 플레이스와 배달앱 마케팅 현황을 진단하고 개선점을 찾아보세요.
            각 항목을 체크하면 자동으로 점수가 계산됩니다.
          </p>
        </motion.div>

        {/* 점수 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className={`${getScoreLevel(placeScore).bgColor} border-0`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  네이버 플레이스
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`text-3xl font-bold ${getScoreLevel(placeScore).color}`}>
                    {placeScore}%
                  </span>
                  <Badge className="mb-1">{getScoreLevel(placeScore).label}</Badge>
                </div>
                <Progress value={placeScore} className="h-2" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className={`${getScoreLevel(deliveryScore).bgColor} border-0`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  배달앱
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`text-3xl font-bold ${getScoreLevel(deliveryScore).color}`}>
                    {deliveryScore}%
                  </span>
                  <Badge className="mb-1">{getScoreLevel(deliveryScore).label}</Badge>
                </div>
                <Progress value={deliveryScore} className="h-2" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className={`${getScoreLevel(totalScore).bgColor} border-0`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  종합 점수
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`text-3xl font-bold ${getScoreLevel(totalScore).color}`}>
                    {totalScore}%
                  </span>
                  <Badge className="mb-1">{getScoreLevel(totalScore).label}</Badge>
                </div>
                <Progress value={totalScore} className="h-2" />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 체크리스트 탭 */}
        <Tabs defaultValue="place" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="place" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              네이버 플레이스
            </TabsTrigger>
            <TabsTrigger value="delivery" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              배달앱
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="place" className="mt-6">
            <ChecklistSection 
              items={checklistItems.filter(item => item.category === "place")} 
              category="place"
            />
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-6">
            <ChecklistSection 
              items={checklistItems.filter(item => item.category === "delivery")} 
              category="delivery"
            />
          </TabsContent>
        </Tabs>

        {/* 분석 결과 버튼 */}
        <div className="text-center mb-8">
          <Button
            size="lg"
            onClick={() => setShowResults(!showResults)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {showResults ? "결과 숨기기" : "상세 분석 결과 보기"}
          </Button>
        </div>

        {/* 분석 결과 */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  맞춤형 개선 제안
                </CardTitle>
                <CardDescription>
                  우선적으로 개선이 필요한 항목들입니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getRecommendations().map((item, index) => (
                    <div key={item.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <Badge className="mt-0.5">{index + 1}</Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.question}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.category === "place" ? "네이버 플레이스" : "배달앱"} • 
                          개선 시 +{item.weight}점
                        </p>
                        {item.tip && (
                          <p className="text-xs text-blue-600 mt-1">💡 {item.tip}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">종합 평가</h4>
                  <p className="text-sm text-purple-700">
                    {totalScore >= 80 && "훌륭합니다! 마케팅 관리가 매우 잘 되고 있습니다. 지속적인 모니터링과 개선을 통해 최상위 수준을 유지하세요."}
                    {totalScore >= 60 && totalScore < 80 && "양호한 수준입니다. 몇 가지 개선점을 보완하면 더 좋은 성과를 얻을 수 있습니다."}
                    {totalScore >= 40 && totalScore < 60 && "개선이 필요합니다. 우선순위가 높은 항목부터 하나씩 개선해나가세요."}
                    {totalScore < 40 && "즉시 개선이 필요합니다. 기본적인 항목부터 체계적으로 정비가 필요합니다."}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    더 자세한 마케팅 전략이 필요하신가요?
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
          </motion.div>
        )}
      </div>
      
      <Footer />
    </main>
  )
}