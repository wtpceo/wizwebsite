import type { LucideIcon } from "lucide-react"
import {
  BookOpen, Sparkles, MapPin, Stethoscope, GitCompareArrows,
  Smile, Gem, TrendingDown, ShieldCheck, Car, ShieldAlert, SearchCheck, FileSearch, Lock,
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
    related: ["/guide/what-is-geo", "/guide/get-cited-by-ai", "/guide/why-ads-stop-working"],
  },
  {
    href: "/guide/why-ads-stop-working",
    category: "concern",
    icon: TrendingDown,
    kicker: "마케팅 고민 진단",
    title: "네이버 광고비는 오르는데 문의는 그대로일 때 — 지금 매장에 무슨 일이 일어나고 있나",
    desc: "광고를 늘려도 문의가 안 늘어난다면 매장 문제가 아니라 고객의 검색 방식이 바뀐 것일 수 있습니다. 5분이면 직접 확인해볼 수 있어요.",
    date: "2026. 7. 9",
    related: ["/guide/what-is-geo", "/guide/case-mobile-carwash", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/medical-geo",
    category: "industry",
    icon: Stethoscope,
    kicker: "MEDICAL GEO",
    title: "병원·의원 AI 검색 최적화(GEO) 가이드 — 의료광고법 지키면서 인용받는 법",
    desc: "AI에 인용되려다 의료법에 걸리지 않도록. 치료후기와 방문후기의 차이, 피해야 할 표현, 안전한 콘텐츠 전략을 정리했습니다.",
    date: "2026. 7. 9",
    related: ["/guide/check-hospital-ai-visibility", "/guide/case-urology-clinic", "/guide/dental-geo"],
  },
  {
    href: "/guide/dental-geo",
    category: "industry",
    icon: Smile,
    kicker: "DENTAL GEO",
    title: "치과 AI 검색 최적화(GEO) 가이드 — 의료광고법 지키면서 인용받는 치과의 조건",
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
    related: ["/guide/get-cited-by-ai", "/guide/ai-engines-cite-differently", "/guide/is-geo-abuse"],
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
