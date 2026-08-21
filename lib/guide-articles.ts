import type { LucideIcon } from "lucide-react"
import {
  BookOpen, Sparkles, MapPin, Stethoscope, GitCompareArrows,
  Smile, Gem, TrendingDown, ShieldCheck, Car, ShieldAlert, SearchCheck, FileSearch, Lock, TrendingUp,
  Wallet, Receipt, MessageSquareQuote, Gauge, Scale,
} from "lucide-react"

// 가이드 카테고리 (표시 순서 + 스캔용 짧은 라벨/색상)
export const CATEGORIES = [
  { key: "concern", label: "이런 고민, 있으세요?", short: "고민 진단", tile: "bg-amber-50 text-amber-600 ring-amber-100" },
  { key: "case", label: "실제 사례", short: "실제 사례", tile: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  { key: "basics", label: "GEO 기초", short: "GEO 기초", tile: "bg-sky-50 text-sky-600 ring-sky-100" },
  { key: "playbook", label: "실전 전략", short: "실전 전략", tile: "bg-violet-50 text-violet-600 ring-violet-100" },
  { key: "industry", label: "업종별 가이드", short: "업종별", tile: "bg-rose-50 text-rose-600 ring-rose-100" },
  { key: "naver", label: "네이버·플랫폼", short: "네이버", tile: "bg-lime-50 text-lime-700 ring-lime-100" },
] as const

export type CategoryKey = (typeof CATEGORIES)[number]["key"]

export type GuideArticle = {
  href: string
  category: CategoryKey
  icon: LucideIcon
  kicker: string
  title: string
  desc: string
  date: string
  /** 이어 읽기 우선 노출 (큐레이션). 없으면 같은 카테고리에서 자동 선택 */
  related?: string[]
}

// 최신순 정렬 유지 — 가이드 목록의 "최신 글"이 이 순서를 따름
export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    href: "/guide/naver-google-share",
    category: "naver",
    icon: Scale,
    kicker: "시장 데이터 · 자체 정리",
    title: "구글 네이버 검색 점유율 — 28%부터 65%까지, 왜 출처마다 다른가",
    desc: "구글 앱이 국내 MAU에서 처음 네이버를 넘어섰습니다. 그런데 같은 시기 다른 조사에선 네이버가 64%로 압도합니다. 네이버 점유율이 출처에 따라 28%~65%로 벌어지는 이유를 측정 기준별로 정리하고, 매장을 운영하는 분이 실제로 봐야 할 지표를 저희 실측과 함께 적었습니다.",
    date: "2026. 8. 21",
    related: ["/guide/measure-ai-traffic", "/guide/naver-blocks-ai-crawlers", "/guide/ranked-but-not-in-chatgpt"],
  },
  {
    href: "/guide/measure-ai-traffic",
    category: "playbook",
    icon: Gauge,
    kicker: "실전 전략 · 자체 실측",
    title: "AI 검색 유입 측정 방법 — 4단계로 나눠 세기, 구글 76 vs 빙 32 실측",
    desc: "AI 검색 성과를 GA4 하나로 보면 틀립니다. 색인·노출·인용·유입은 서로 다른 층이고 앞 단계가 막히면 뒤 단계는 아예 생기지 않습니다. 2026년 8월 20일 저희 사이트를 재보니 같은 사이트맵을 냈는데 구글 약 76개, 빙 약 32개였습니다. 4단계 측정법과 저희 숫자를 그대로 공개합니다.",
    date: "2026. 8. 20",
    related: ["/guide/bing-index-bottleneck", "/guide/how-to-choose-geo-agency", "/guide/ranked-but-not-in-chatgpt"],
  },
  {
    href: "/guide/naver-ai-briefing",
    category: "case",
    icon: MessageSquareQuote,
    kicker: "실제 사례 · 자체 실측",
    title: "네이버 AI 브리핑 노출 방법 — 누락되던 블로그를 1위로 바꾼 글 구조",
    desc: "글이 누락되기 시작하면 대부분 저품질이나 지수 하락을 의심합니다. 6년째 운영 중인 매장의 사례에서 원인은 글 구조였습니다. 키워드 반복형을 경험형으로 바꾸자 '지역명+업종' 키워드 블로그 1위, 네이버 AI 브리핑 2순위 인용으로 이어졌습니다. 광고비는 쓰지 않았습니다.",
    date: "2026. 8. 20",
    related: ["/guide/case-blog-omission", "/guide/naver-place-checklist", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/geo-cost",
    category: "playbook",
    icon: Receipt,
    kicker: "실전 전략 · 자체 실측",
    title: "GEO 비용 — 견적서 뜯어보는 법과, 지금이 가장 쌀 때인 이유",
    desc: "GEO 비용은 구축비·운영비·콘텐츠비 세 갈래로 나뉩니다. 견적서에서 확인할 5가지와, 지금 드는 비용이 왜 나중보다 싼지를 저희 실측으로 정리했습니다. 외부 링크가 1곳뿐인 신생 도메인이 네이버 AI 브리핑 1위를 찍는 지금의 경쟁 밀도는 오래가지 않습니다.",
    date: "2026. 8. 14",
    related: [
      "/guide/how-to-choose-geo-agency",
      "/guide/case-pension-direct-booking",
      "/guide/ranked-but-not-in-chatgpt",
    ],
  },
  {
    href: "/guide/case-pension-direct-booking",
    category: "case",
    icon: Wallet,
    kicker: "실제 사례 · 자체 실측",
    title: "펜션 예약 수수료 10.45% — 자체 사이트로 만실 채운 8일 광고비 18만원",
    desc: "네이버 펜션예약은 부가세 포함 10.45%, 야놀자·여기어때 중개수수료는 10%(공정위 자율규제 기준). 이 돈은 '손님을 데려다주는 값'이라, 예약 시스템만 자체로 바꾸면 수수료는 줄어도 예약이 같이 줄어듭니다. 수도권 근교 펜션 한 곳의 랜딩·소재·광고를 한 묶음으로 만든 8일치 실측을 공개합니다.",
    date: "2026. 8. 12",
    related: ["/guide/case-third-party-citation", "/guide/geo", "/guide/naver-place-checklist"],
  },
  {
    href: "/guide/geo-vs-seo",
    category: "basics",
    icon: GitCompareArrows,
    kicker: "GEO 기초 · 자체 실측",
    title: "GEO와 SEO 차이 — 검색 1위인데 ChatGPT엔 안 나온 이유",
    desc: "SEO는 목록에서 위로 올라가는 일, GEO는 AI 답변 안에 들어가는 일입니다. 저희 페이지는 네이버 AI 1위·구글 2위였는데도 ChatGPT엔 나오지 않았습니다. 목표·신호·측정이 어떻게 다른지, 왜 검색 상위가 AI 추천을 보장하지 못하는지 실측으로 정리했습니다.",
    date: "2026. 8. 6",
    related: ["/guide/geo", "/guide/ranked-but-not-in-chatgpt", "/guide/bing-index-bottleneck"],
  },
  {
    href: "/guide/geo",
    category: "basics",
    icon: BookOpen,
    kicker: "GEO 완전 정리",
    title: "GEO란? 뜻부터 GEO 최적화 방법·업체 선택까지 총정리",
    desc: "GEO는 ChatGPT·제미나이·네이버 AI가 답변에서 우리 브랜드를 인용·추천하게 만드는 작업입니다. 정확한 뜻, SEO와의 차이, 최적화 5단계, 진단법, 대행 판단 기준까지 — 저희가 직접 실측하며 정리한 내용을 한 페이지에 모았습니다.",
    date: "2026. 8. 5",
    related: ["/guide/what-is-geo", "/guide/get-cited-by-ai", "/guide/how-to-choose-geo-agency"],
  },
  {
    href: "/guide/bing-index-bottleneck",
    category: "case",
    icon: SearchCheck,
    kicker: "자체 실측 · 8일간의 기록",
    title: "IndexNow로 통보하고 8일 — 빙은 아직 우리 글을 읽지 않았습니다 (ChatGPT 노출의 진짜 병목)",
    desc: "같은 글을 같은 날 올렸는데 구글은 3일 만에 크롤·색인했고, 빙은 8일이 지나도록 읽으러 오지 않았습니다. robots.txt·빙봇 접속·IndexNow·수동 제출 전부 정상인데도요. ChatGPT 검색이 빙 색인을 참고하는 이상 이건 곧 AI 노출의 병목입니다.",
    date: "2026. 8. 4",
    related: ["/guide/ranked-but-not-in-chatgpt", "/guide/platform-ai-crawler-status", "/guide/case-urology-clinic"],
  },
  {
    href: "/guide/how-to-choose-geo-agency",
    category: "playbook",
    icon: ShieldCheck,
    kicker: "실전 전략 · 계약 가이드",
    title: "GEO 대행사 고르는 법 — 계약 전 7가지 질문과 'TOP3 추천 글' 판별법",
    desc: "'AI 노출 보장', '업체 추천 TOP3' — 어디까지 믿어야 할까요. 견적 단계에서 업체 수준이 드러나는 7가지 질문과, 검색에서 만나는 '추천 글'이 제3자 비교인지 업체의 자기 광고인지 10초 만에 확인하는 도메인 판별법까지 정리했습니다.",
    date: "2026. 7. 28",
    related: ["/guide/is-geo-abuse", "/guide/ranked-but-not-in-chatgpt", "/guide/platform-ai-crawler-status"],
  },
  {
    href: "/guide/platform-ai-crawler-status",
    category: "naver",
    icon: SearchCheck,
    kicker: "자체 실측 · 현황판",
    title: "한국 플랫폼 15곳, AI가 읽을 수 있는 곳은 어디인가 — robots.txt 전수 실측 현황판 (2026.7)",
    desc: "네이버 블로그·카카오맵·브런치·티스토리·다이닝코드·식신·배민·당근·인스타·유튜브까지 15곳의 robots.txt를 직접 전수 확인했습니다. 네이버 계열은 전부 차단, 브런치·다이닝코드는 '학습만 차단·AI 검색 허용', 식신·티스토리는 완전 개방 — 원문 인용과 출처를 그대로 공개합니다.",
    date: "2026. 7. 27",
    related: ["/guide/naver-blocks-ai-crawlers", "/guide/case-third-party-citation", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/case-third-party-citation",
    category: "case",
    icon: TrendingUp,
    kicker: "실제 사례 · 자체 실험",
    title: "홈페이지를 만들었더니 AI가 추천하기 시작했습니다 — 정작 인용한 건 우리 홈페이지가 아니었습니다",
    desc: "웹 존재감 0이던 지방 중식당. 플레이스와 상세 홈페이지를 만들고 색인했더니 AI가 이 식당을 4순위로 추천하기 시작했습니다. 그런데 AI가 인용한 출처는 우리 홈페이지가 아니라 다이닝코드였습니다. 홈페이지는 인용되지 않아도 인용을 만들어낸다 — 그 이유를 실측으로 공개합니다.",
    date: "2026. 7. 26",
    related: ["/guide/ranked-but-not-in-chatgpt", "/guide/ai-engines-cite-differently", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/ranked-but-not-in-chatgpt",
    category: "case",
    icon: TrendingUp,
    kicker: "자체 실험",
    title: "네이버 AI 1위·구글 2위인데 ChatGPT엔 안 나옵니다 — 우리 사이트로 직접 한 GEO 실험",
    desc: "'병원 GEO 대행'에서 우리 페이지는 공개 2일 만에 네이버 AI 브리핑 1위·구글 2위에 올랐습니다. 그런데 ChatGPT·제미나이·퍼플렉시티엔 아직 안 나옵니다. 같은 회사가 왜 검색엔진은 상위인데 생성형 AI에선 빠질까 — 우리 사이트를 실험대에 올려 이유를 그대로 공개합니다.",
    date: "2026. 7. 25",
    related: ["/guide/how-to-choose-geo-agency", "/guide/ai-engines-cite-differently", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/naver-blocks-ai-crawlers",
    category: "naver",
    icon: Lock,
    kicker: "네이버 · AI 검색",
    title: "네이버가 ChatGPT·구글 AI의 접근을 막았습니다 — 그래서 홈페이지가 필수입니다",
    desc: "블로그·카페에 리뷰를 아무리 쌓아도 ChatGPT·퍼플렉시티·구글 AI는 그 안을 못 읽습니다. 네이버가 robots.txt에 'AI 학습·RAG 목적 접근 금지'를 명시하고 GPTBot·ClaudeBot 등을 이름까지 지정해 차단했기 때문입니다. AI가 읽는 건 열린 웹, 곧 우리 홈페이지입니다.",
    date: "2026. 7. 24",
    related: ["/guide/ai-engines-cite-differently", "/guide/case-mobile-carwash", "/guide/case-urology-clinic"],
  },
  {
    href: "/guide/case-blog-omission",
    category: "case",
    icon: FileSearch,
    kicker: "블로그 누락 사례",
    title: "블로그 글이 자꾸 누락된다면 — 저품질이 아니라 '키워드'가 문제였습니다",
    desc: "5~6회 연속 누락에 플레이스 리뷰에도 반영되지 않던 블로그. 저품질을 의심했지만 단계별 테스트로 확인한 원인은 달랐습니다. 블로그의 체급에 맞는 전략으로 바꾸자 누락 없이 다시 성장하기 시작했습니다.",
    date: "2026. 7. 19",
    related: ["/guide/naver-place-checklist", "/guide/ai-engines-cite-differently", "/guide/case-mobile-carwash"],
  },
  {
    href: "/guide/check-hospital-ai-visibility",
    category: "industry",
    icon: SearchCheck,
    kicker: "병원 GEO 셀프 체크",
    title: "우리 병원이 ChatGPT에 나오는지 5분 만에 확인하는 법",
    desc: "환자는 이제 AI에게 병원을 묻습니다. 우리 병원이 그 답변에 나오는지, 정보가 틀리게 안내되진 않는지 원장님이 직접 확인하는 3단계와, 결과별로 무엇을 해야 하는지 정리했습니다.",
    date: "2026. 7. 18",
    related: ["/guide/medical-geo", "/guide/case-urology-clinic", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/case-urology-clinic",
    category: "case",
    icon: ShieldAlert,
    kicker: "비뇨기과 사례",
    title: "ChatGPT에 아예 안 뜨던 비뇨기과 — 원인은 홈페이지 방화벽이었습니다",
    desc: "콘텐츠 문제가 아니었습니다. 제작사가 기본값으로 남겨둔 보안 방화벽이 AI 크롤러까지 막고 있었습니다. 차단 해제와 홈페이지 전면 개선 후 6개월, ChatGPT·구글·네이버 모두에 안정적으로 노출되기까지의 실제 사례입니다.",
    date: "2026. 7. 17",
    related: ["/guide/check-hospital-ai-visibility", "/guide/medical-geo", "/guide/case-mobile-carwash"],
  },
  {
    href: "/guide/case-mobile-carwash",
    category: "case",
    icon: Car,
    kicker: "출장세차 사례",
    title: "네이버만으로는 한계였던 출장세차 — 2개월 만에 구글 AI 개요에 뜨기까지",
    desc: "네이버 플레이스·카페 홍보로 성장이 멈춰 있던 신도시 출장세차. 구글·카카오맵·네이버 정보 비대칭을 맞추고 홈페이지를 스키마 구조로 정비한 뒤, 2개월 만에 구글 AI 개요에 노출되고 이어서 ChatGPT 추천을 받기 시작한 실제 사례입니다.",
    date: "2026. 7. 17",
    related: ["/guide/ai-engines-cite-differently", "/guide/case-urology-clinic", "/guide/get-cited-by-ai"],
  },
  {
    href: "/guide/is-geo-abuse",
    category: "concern",
    icon: ShieldCheck,
    kicker: "오해와 진실",
    title: "SEO·GEO는 어뷰징인가요? — 검색 마케팅에 대한 5가지 오해와 진실",
    desc: "SEO·GEO를 편법·불법으로 오해하는 분들을 위해. 무엇이 정상적인 최적화이고 무엇이 진짜 어뷰징인지, 검색엔진과 AI가 공식 권장하는 정당한 마케팅 기술임을 정리했습니다.",
    date: "2026. 7. 15",
    related: ["/guide/how-to-choose-geo-agency", "/guide/what-is-geo", "/guide/get-cited-by-ai"],
  },
  {
    href: "/guide/why-ads-stop-working",
    category: "concern",
    icon: TrendingDown,
    kicker: "마케팅 고민 진단",
    title: "네이버 광고비는 오르는데 문의는 그대로일 때 — 지금 매장에 무슨 일이 일어나고 있나",
    desc: "광고를 늘려도 문의가 안 늘어난다면 매장 문제가 아니라 고객의 검색 방식이 바뀐 것일 수 있습니다. 5분이면 직접 확인해볼 수 있어요.",
    date: "2026. 7. 9",
    related: ["/guide/what-is-geo", "/guide/how-to-choose-geo-agency", "/guide/case-mobile-carwash"],
  },
  {
    href: "/guide/medical-geo",
    category: "industry",
    icon: Stethoscope,
    kicker: "MEDICAL GEO",
    title: "병원 AI 검색 최적화(GEO) — ChatGPT가 우리 병원을 추천하게 하려면",
    desc: "AI에 인용되려다 의료법에 걸리지 않도록. 치료후기와 방문후기의 차이, 피해야 할 표현, 안전한 콘텐츠 전략을 정리했습니다.",
    date: "2026. 7. 9",
    related: ["/guide/check-hospital-ai-visibility", "/guide/case-urology-clinic", "/guide/dental-geo"],
  },
  {
    href: "/guide/dental-geo",
    category: "industry",
    icon: Smile,
    kicker: "DENTAL GEO",
    title: "치과 AI 검색 최적화(GEO) — ChatGPT가 우리 치과를 추천하게 하려면",
    desc: "치과 특유의 GEO 실행 포인트. 시술별 페이지, 질문형 콘텐츠, 방문후기 설계까지 의료광고법 안에서 AI에 인용받는 법.",
    date: "2026. 7. 9",
    related: ["/guide/medical-geo", "/guide/check-hospital-ai-visibility", "/guide/skincare-geo"],
  },
  {
    href: "/guide/skincare-geo",
    category: "industry",
    icon: Gem,
    kicker: "SKINCARE GEO",
    title: "피부·에스테틱 AI 검색 최적화(GEO) 가이드 — 홈페이지가 인용을 가른다",
    desc: "에스테틱은 홈페이지 인용 의존도가 가장 큰 업종. AI가 읽을 수 있는 홈페이지를 만드는 것이 이 업종 GEO의 핵심입니다.",
    date: "2026. 7. 9",
    related: ["/guide/medical-geo", "/guide/ai-engines-cite-differently", "/guide/dental-geo"],
  },
  {
    href: "/guide/ai-engines-cite-differently",
    category: "basics",
    icon: GitCompareArrows,
    kicker: "GEO INSIGHT",
    title: "ChatGPT와 네이버 AI는 왜 다른 가게를 추천할까 — 엔진별 인용 출처의 차이",
    desc: "네이버 AI는 리뷰를, ChatGPT·구글은 홈페이지를 봅니다. 엔진마다 다른 출처와, 그래서 무엇을 준비해야 하는지 정리했습니다.",
    date: "2026. 7. 9",
    related: ["/guide/what-is-geo", "/guide/get-cited-by-ai", "/guide/naver-place-checklist"],
  },
  {
    href: "/guide/what-is-geo",
    category: "basics",
    icon: Sparkles,
    kicker: "GEO BASICS",
    title: "AI 검색 최적화(GEO)란? 자영업 사장님을 위한 쉬운 설명",
    desc: "SEO와 뭐가 다른지, AI는 어떤 매장을 추천하는지, 왜 지금 시작해야 하는지 — GEO의 기본을 정리했습니다.",
    date: "2026. 7. 8",
    related: ["/guide/how-to-choose-geo-agency", "/guide/get-cited-by-ai", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/get-cited-by-ai",
    category: "playbook",
    icon: BookOpen,
    kicker: "GEO PLAYBOOK",
    title: "우리 가게가 AI 답변에 나오게 하는 7가지 방법",
    desc: "실제 진단 데이터에서 확인된, AI에게 추천받는 매장들의 공통점 7가지를 실행 순서대로 담았습니다.",
    date: "2026. 7. 8",
    related: ["/guide/what-is-geo", "/guide/naver-place-checklist", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/naver-place-checklist",
    category: "naver",
    icon: MapPin,
    kicker: "NAVER PLACE",
    title: "네이버 플레이스 상위 노출 체크리스트 10가지",
    desc: "오늘 바로 점검할 수 있는 플레이스 관리 체크리스트. 지역 검색과 AI 인용의 공통 기반입니다.",
    date: "2026. 7. 8",
    related: ["/guide/get-cited-by-ai", "/guide/ai-engines-cite-differently", "/guide/why-ads-stop-working"],
  },
]

/**
 * 글 끝에 붙일 "이어서 읽기" 목록을 만든다.
 * 우선순위: 큐레이션한 related → 같은 카테고리 → 최신 글
 */
export function getRelatedArticles(currentHref: string, limit = 3): GuideArticle[] {
  const current = GUIDE_ARTICLES.find((a) => a.href === currentHref)
  const picked: GuideArticle[] = []
  const seen = new Set<string>([currentHref])

  const add = (article?: GuideArticle) => {
    if (!article || seen.has(article.href) || picked.length >= limit) return
    seen.add(article.href)
    picked.push(article)
  }

  // 1) 큐레이션된 연결
  current?.related?.forEach((href) => add(GUIDE_ARTICLES.find((a) => a.href === href)))

  // 2) 같은 카테고리
  if (current) {
    GUIDE_ARTICLES.filter((a) => a.category === current.category).forEach(add)
  }

  // 3) 최신 글로 채우기
  GUIDE_ARTICLES.forEach(add)

  return picked
}

export function getArticle(href: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find((a) => a.href === href)
}

export function getCategory(key: CategoryKey) {
  return CATEGORIES.find((c) => c.key === key)
}
