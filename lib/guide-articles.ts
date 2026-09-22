import type { LucideIcon } from "lucide-react"
import {
  BookOpen, Sparkles, MapPin, Stethoscope, GitCompareArrows,
  Smile, Gem, TrendingDown, ShieldCheck, Car, ShieldAlert, SearchCheck, FileSearch, Lock, TrendingUp,
  Wallet, Receipt, Calculator, ListChecks, MonitorSmartphone, MessageSquareQuote, Gauge, Scale, Ruler, Braces, LayoutList, GitFork,
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
  /** 실제로 본문·제목을 고친 날. 없으면 date를 쓴다. 사이트맵 lastmod 근거 */
  updated?: string
  /** 이어 읽기 우선 노출 (큐레이션). 없으면 같은 카테고리에서 자동 선택 */
  related?: string[]
}

// 최신순 정렬 유지 — 가이드 목록의 "최신 글"이 이 순서를 따름
export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    href: "/guide/elevator-tv-ad-cost",
    category: "playbook",
    icon: MonitorSmartphone,
    kicker: "실전 전략 · 오프라인 매체",
    title: "아파트 엘리베이터 광고 비용은 무엇으로 정해지나: 엘리베이터TV 집행 기준",
    desc: "엘리베이터 광고 비용은 단가표가 아니라 단지 수·기간·소재로 정해집니다. 클릭이 없는 매체의 효과를 재는 4가지, 업체를 고를 때 확인할 것, 병원이라면 걸리는 의료광고 심의까지 정리했습니다.",
    date: "2026. 9. 20",
    related: ["/guide/slow-business-checks", "/guide/naver-place-checklist", "/guide/hospital-marketing-cost"],
  },
  {
    href: "/guide/slow-business-checks",
    category: "concern",
    icon: ListChecks,
    kicker: "마케팅 고민 진단 · 로컬 매장",
    title: "장사 안될 때 광고비부터 늘리면 안 되는 이유: 먼저 셀 숫자 3가지",
    desc: "광고를 올리기 전에 노출·유입·연락 세 숫자를 30분이면 확인할 수 있습니다. 광고를 늘려도 문의가 안 느는 세 가지 경우와, 돈 들이지 않고 오늘 할 수 있는 순서를 실제 사례로 정리했습니다.",
    date: "2026. 9. 19",
    updated: "2026. 9. 20",
    related: ["/guide/why-ads-stop-working", "/guide/naver-place-checklist", "/guide/case-mobile-carwash"],
  },
  {
    href: "/guide/hospital-marketing-cost",
    category: "concern",
    icon: Calculator,
    kicker: "마케팅 고민 진단 · 병원·의원",
    title: "병원 마케팅 비용: 견적서를 광고비·대행료·제작비로 나눠 보는 법",
    desc: "매달 나가는 병원 마케팅비가 적정한지 보려면 견적서부터 나눠야 합니다. 광고비·대행료·제작비가 한 줄로 묶인 견적서에서 확인할 6가지, 병원이라 더 헷갈리는 성과 측정 4단계, 의료광고 심의가 비용에 붙는 지점을 정리했습니다.",
    date: "2026. 9. 18",
    updated: "2026. 9. 20",
    related: ["/guide/case-orthopedic-chatgpt", "/guide/check-hospital-ai-visibility", "/guide/medical-geo"],
  },
  {
    href: "/guide/case-orthopedic-chatgpt",
    category: "case",
    icon: Stethoscope,
    kicker: "정형외과 사례 · 자체 실측",
    title: "네이버·제미나이엔 뜨는데 ChatGPT만 모르던 정형외과: 언급률 17%에서 93%까지",
    desc: "계약 전 네이버 AI·제미나이 질문 10개 모두에 나왔지만 ChatGPT는 4개뿐이었습니다. ChatGPT는 병원의 사실을 알면서 이름과 잇지 못하고 있었습니다. 39일 뒤 같은 방법으로 30번 다시 재자 언급률이 17%에서 93%로, 병원 사이트 인용이 0에서 16번으로 늘었습니다.",
    date: "2026. 9. 14",
    related: ["/guide/case-dental-llms-factsheet", "/guide/ai-engines-cite-differently", "/guide/check-hospital-ai-visibility"],
  },
  {
    href: "/guide/naver-blog-rank-compare",
    category: "naver",
    icon: Scale,
    kicker: "네이버 블로그 · 실측 비교",
    title: "네이버 블로그 상위노출, 1위 글은 뭐가 달랐나: 2위 글과 나란히 비교",
    desc: "발행 3일째인 저희 글이 5월 말 글에 밀려 2위입니다. 나란히 뜯어보니 1위 글은 네이버가 읽는 신호를 더 깔아 둔 쪽이었습니다. 다만 일부는 과하면 누락을 부르는 양날의 검이라, 시도해 볼 만한 것들로 정리했습니다.",
    date: "2026. 9. 14",
    related: ["/guide/case-blog-omission", "/guide/what-ai-quotes", "/guide/naver-place-checklist"],
  },
  {
    href: "/guide/what-ai-quotes",
    category: "basics",
    icon: MessageSquareQuote,
    kicker: "GEO 기초",
    title: "AI가 인용하는 문장은 따로 있습니다: 실제로 인용된 문장 분석",
    desc: "저희가 실제로 인용된 문장 세 개를 열어보니 공통점이 분명했습니다. 슬로건은 한 번도 인용되지 않았고, 검증 가능한 사실을 담은 짧은 문장만 그대로 발췌됐습니다. 무엇을 어떻게 바꿔야 하는지 예시로 정리했습니다.",
    date: "2026. 9. 11",
    related: ["/guide/what-is-llms-txt", "/guide/naver-ai-briefing", "/guide/case-dental-llms-factsheet"],
  },
  {
    href: "/guide/what-is-llms-txt",
    category: "basics",
    icon: Braces,
    kicker: "GEO 기초",
    title: "llms.txt란? AI에게 사이트를 안내하는 파일과 실제 인용 기록",
    desc: "검색엔진이 공식 지원을 발표한 표준이 아니라 2024년에 나온 제안입니다. 넣는다고 순위가 오르지도 않습니다. 그런데 저희 실측에서는 ChatGPT 답변 문장이 이 파일의 한 줄과 정확히 일치했습니다.",
    date: "2026. 9. 11",
    related: ["/guide/ai-crawler-names", "/guide/case-dental-llms-factsheet", "/guide/what-ai-quotes"],
  },
  {
    href: "/guide/ai-crawler-names",
    category: "basics",
    icon: SearchCheck,
    kicker: "GEO 기초",
    title: "AI 크롤러 이름과 역할: 무엇을 열고 무엇을 막아야 하나",
    desc: "답변에 우리를 띄우는 검색봇과 모델 학습에 쓰는 학습봇은 이름이 다르고 따로 설정합니다. 공식 문서 기준으로 봇 이름과 역할, 무엇을 열고 무엇을 막을지, 우리 사이트 상태를 확인하는 법을 정리했습니다.",
    date: "2026. 9. 11",
    related: ["/guide/what-is-llms-txt", "/guide/platform-ai-crawler-status", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/case-dental-llms-factsheet",
    category: "case",
    icon: FileSearch,
    kicker: "치과 사례 · 홈페이지 제작 + GEO",
    title: "3쪽짜리 사이트가 167쪽보다 먼저 인용됐습니다: 치과 홈페이지 GEO 51일",
    desc: "167쪽에 블로그 51건, FAQ 22문항을 갖추고도 ChatGPT에 인용되지 않았는데, 같은 지역의 3쪽짜리 사이트는 인용되고 있었습니다. 차이는 AI 안내 파일의 성격이었습니다. 목차를 팩트시트로 바꾼 뒤 ChatGPT 답변에 병원이 등장했고, 답변 속 한 문장으로 출처를 역추적했습니다.",
    date: "2026. 9. 10",
    related: ["/guide/dental-geo", "/guide/case-urology-clinic", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/naver-ai-briefing-vs-web-tab",
    category: "case",
    icon: GitCompareArrows,
    kicker: "실제 사례 · 자체 실측",
    title: "네이버 웹문서엔 없는데 AI 브리핑엔 첫 출처: 같은 검색어 결과가 갈리는 이유",
    desc: "'병원 GEO 대행'으로 네이버에서 검색하면 저희 페이지는 웹문서 탭에 없습니다. 그런데 같은 검색어의 AI 브리핑에서는 첫 번째 출처로 본문에 3번 인용됩니다. 두 결과가 왜 따로 움직이는지, 순위가 떨어졌다 싶을 때 무엇부터 확인해야 하는지 저희 사례로 정리했습니다.",
    date: "2026. 9. 9",
    updated: "2026. 9. 10",
    related: ["/guide/naver-ai-briefing", "/guide/check-hospital-ai-visibility", "/guide/ranked-but-not-in-chatgpt"],
  },
  {
    href: "/guide/geo-agency-recommendation-check",
    category: "case",
    icon: SearchCheck,
    kicker: "실제 사례 · 자체 실측",
    title: "GEO 대행사 추천 TOP5, 누가 쓴 글인지 확인해봤습니다",
    desc: "'GEO 대행사 추천' 검색 상위 글 9개를 전부 열어 누가 썼는지, 1위가 누구인지, 도메인 등록 정보는 어떤지 확인했습니다. 8개가 대행사 본인 글이었고 전부 자기 회사가 1위였습니다. 연구소 명칭 도메인 두 곳은 같은 날 같은 등록인이 만들었습니다. 저희도 이 검색어에는 없습니다.",
    date: "2026. 9. 2",
    related: ["/guide/how-to-choose-geo-agency", "/guide/geo-diy-or-agency", "/guide/bing-index-bottleneck"],
  },
  {
    href: "/guide/geo-diy-or-agency",
    category: "playbook",
    icon: GitFork,
    kicker: "실전 전략 · 판단 기준",
    title: "GEO 직접 할까 대행 맡길까: 시간과 비용으로 갈리는 지점",
    desc: "갈리는 기준은 예산이 아니라 매주 반복할 수 있느냐입니다. 세팅은 한 번이고 측정은 계속이기 때문입니다. 직접과 위탁의 실제 차이, 대행 유형 3가지, 직접 하다 전환할 때 무엇이 남는지를 정리했습니다.",
    date: "2026. 8. 27",
    updated: "2026. 8. 27",
    related: ["/guide/how-to-choose-geo-agency", "/guide/measure-ai-traffic", "/guide/get-cited-by-ai"],
  },
  {
    href: "/guide/structured-data-types",
    category: "playbook",
    icon: LayoutList,
    kicker: "실전 전략 · 설계 가이드",
    title: "구조화 데이터 종류와 페이지별 배치: 공통 3개 + 유형 1개",
    desc: "타입을 많이 넣는 작업이 아닙니다. 전 페이지에 Organization·WebSite·BreadcrumbList를 깔고 페이지 성격에 맞는 타입 하나만 더하면 됩니다. 페이지별 배치표와 JSON-LD 예시, 제작 과정 어느 시점에 넣어야 재작업이 없는지 정리했습니다.",
    date: "2026. 8. 26",
    related: ["/guide/structured-data-not-working", "/guide/get-cited-by-ai", "/guide/measure-ai-traffic"],
  },
  {
    href: "/guide/structured-data-not-working",
    category: "playbook",
    icon: Braces,
    kicker: "실전 전략 · 점검 절차",
    title: "구조화 데이터 넣었는데 AI 검색에 안 잡히는 7가지 이유",
    desc: "제작사가 구조화 데이터를 넣어줬는데 검색에도 AI 답변에도 안 나온다면 원인은 대개 7가지입니다. 색인 차단, 사이트맵 누락, 중복 URL, 문법 오류, 스키마 중복, 본문 근거 부재, FAQPage 남용. 점검은 색인부터 시작해야 하며 순서를 바꾸면 2~3주를 낭비합니다.",
    date: "2026. 8. 25",
    updated: "2026. 8. 26",
    related: ["/guide/measure-ai-traffic", "/guide/geo-measurement-tools", "/guide/get-cited-by-ai"],
  },
  {
    href: "/guide/geo-measurement-tools",
    category: "playbook",
    icon: Ruler,
    kicker: "실전 전략 · 자체 구축 기록",
    title: "GEO 측정 도구 고르는 법: 직접 만들어 돌려보고 알게 된 5가지",
    desc: "도구를 비교하기 전에 질문 세트, 엔진 범위, 언급과 인용의 구분을 먼저 정해야 합니다. 이 셋이 없으면 어떤 도구를 써도 매주 다른 숫자가 나옵니다. 손으로 재다 포기하고 사내 측정 시스템을 만들며 확인한 5가지와, 실제 발행한 주간 보고서를 공개합니다.",
    date: "2026. 8. 24",
    updated: "2026. 8. 27",
    related: ["/guide/measure-ai-traffic", "/guide/ranked-but-not-in-chatgpt", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/naver-google-share",
    category: "naver",
    icon: Scale,
    kicker: "시장 데이터 · 자체 정리",
    title: "구글 네이버 검색 점유율: 28%부터 65%까지, 왜 출처마다 다른가",
    desc: "구글 앱이 국내 MAU에서 처음 네이버를 넘어섰습니다. 그런데 같은 시기 다른 조사에선 네이버가 64%로 압도합니다. 네이버 점유율이 출처에 따라 28%~65%로 벌어지는 이유를 측정 기준별로 정리하고, 매장을 운영하는 분이 실제로 봐야 할 지표를 저희 실측과 함께 적었습니다.",
    date: "2026. 8. 21",
    related: ["/guide/measure-ai-traffic", "/guide/naver-blocks-ai-crawlers", "/guide/ranked-but-not-in-chatgpt"],
  },
  {
    href: "/guide/measure-ai-traffic",
    category: "playbook",
    icon: Gauge,
    kicker: "실전 전략 · 자체 실측",
    title: "AI 검색 유입 측정 방법: 4단계로 나눠 세기, 구글 76 vs 빙 32 실측",
    desc: "AI 검색 성과를 GA4 하나로 보면 틀립니다. 색인·노출·인용·유입은 서로 다른 층이고 앞 단계가 막히면 뒤 단계는 아예 생기지 않습니다. 2026년 8월 20일 저희 사이트를 재보니 같은 사이트맵을 냈는데 구글 약 76개, 빙 약 32개였습니다. 4단계 측정법과 저희 숫자를 그대로 공개합니다.",
    date: "2026. 8. 20",
    updated: "2026. 8. 27",
    related: ["/guide/bing-index-bottleneck", "/guide/how-to-choose-geo-agency", "/guide/ranked-but-not-in-chatgpt"],
  },
  {
    href: "/guide/naver-ai-briefing",
    category: "case",
    icon: MessageSquareQuote,
    kicker: "실제 사례 · 자체 실측",
    title: "네이버 AI 브리핑 노출 방법: 누락되던 블로그를 1위로 바꾼 글 구조",
    desc: "글이 누락되기 시작하면 대부분 저품질이나 지수 하락을 의심합니다. 6년째 운영 중인 매장의 사례에서 원인은 글 구조였습니다. 키워드 반복형을 경험형으로 바꾸자 '지역명+업종' 키워드 블로그 1위, 네이버 AI 브리핑 2순위 인용으로 이어졌습니다. 광고비는 쓰지 않았습니다.",
    date: "2026. 8. 20",
    updated: "2026. 8. 21",
    related: ["/guide/case-blog-omission", "/guide/naver-place-checklist", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/geo-cost",
    category: "playbook",
    icon: Receipt,
    kicker: "실전 전략 · 자체 실측",
    title: "GEO 비용: 견적서 뜯어보는 법과, 지금이 가장 쌀 때인 이유",
    desc: "GEO 비용은 구축비·운영비·콘텐츠비 세 갈래로 나뉩니다. 견적서에서 확인할 5가지와, 지금 드는 비용이 왜 나중보다 싼지를 저희 실측으로 정리했습니다. 외부 링크가 1곳뿐인 신생 도메인이 네이버 AI 브리핑 1위를 찍는 지금의 경쟁 밀도는 오래가지 않습니다.",
    date: "2026. 8. 14",
    updated: "2026. 8. 27",
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
    kicker: "실제 사례 · 메타 광고 실측",
    title: "펜션 릴스 광고 24일 실측: 클릭당 50원이 말해주지 않는 것",
    desc: "강원도 계곡 펜션의 메타 릴스 광고 24일 최종 기록. 광고비 131만원에 클릭 2만 6천 회, 클릭당 50원이었지만 좋아요는 99개였고 예약 기여는 광고 데이터로 셀 수 없었습니다. 펜션 광고 방법과 네이버 펜션 예약 수수료까지.",
    date: "2026. 8. 12",
    updated: "2026. 9. 22",
    related: ["/guide/case-third-party-citation", "/guide/geo", "/guide/naver-place-checklist"],
  },
  {
    href: "/guide/geo-vs-seo",
    category: "basics",
    icon: GitCompareArrows,
    kicker: "GEO 기초 · 자체 실측",
    title: "GEO와 SEO 차이: 검색 1위인데 ChatGPT엔 안 나온 이유",
    desc: "SEO는 목록에서 위로 올라가는 일, GEO는 AI 답변 안에 들어가는 일입니다. 저희 페이지는 네이버 AI 1위·구글 2위였는데도 ChatGPT엔 나오지 않았습니다. 목표·신호·측정이 어떻게 다른지, 왜 검색 상위가 AI 추천을 보장하지 못하는지 실측으로 정리했습니다.",
    date: "2026. 8. 6",
    updated: "2026. 8. 27",
    related: ["/guide/geo", "/guide/ranked-but-not-in-chatgpt", "/guide/bing-index-bottleneck"],
  },
  {
    href: "/guide/geo",
    category: "basics",
    icon: BookOpen,
    kicker: "GEO 완전 정리",
    title: "GEO란? 뜻부터 GEO 최적화 방법과 대행사·업체 선택까지",
    desc: "GEO는 ChatGPT·제미나이·네이버 AI가 답변에서 우리 브랜드를 인용·추천하게 만드는 작업입니다. 정확한 뜻, SEO와의 차이, 최적화 5단계, 진단법, 대행 판단 기준까지, 저희가 직접 실측하며 정리한 내용을 한 페이지에 모았습니다.",
    date: "2026. 8. 5",
    updated: "2026. 8. 21",
    related: ["/guide/what-is-geo", "/guide/get-cited-by-ai", "/guide/how-to-choose-geo-agency"],
  },
  {
    href: "/guide/bing-index-bottleneck",
    category: "case",
    icon: SearchCheck,
    kicker: "자체 실측 · 8일간의 기록",
    title: "IndexNow로 통보하고 8일: 빙은 아직 우리 글을 읽지 않았습니다 (ChatGPT 노출의 진짜 병목)",
    desc: "같은 글을 같은 날 올렸는데 구글은 3일 만에 크롤·색인했고, 빙은 8일이 지나도록 읽으러 오지 않았습니다. robots.txt·빙봇 접속·IndexNow·수동 제출 전부 정상인데도요. ChatGPT 검색이 빙 색인을 참고하는 이상 이건 곧 AI 노출의 병목입니다.",
    date: "2026. 8. 4",
    updated: "2026. 8. 21",
    related: ["/guide/ranked-but-not-in-chatgpt", "/guide/platform-ai-crawler-status", "/guide/case-urology-clinic"],
  },
  {
    href: "/guide/how-to-choose-geo-agency",
    category: "playbook",
    icon: ShieldCheck,
    kicker: "실전 전략 · 계약 가이드",
    title: "GEO 대행사 추천을 믿기 전에: 업체 고르는 법과 계약 전 7가지 질문",
    desc: "'AI 노출 보장', '업체 추천 TOP3': 어디까지 믿어야 할까요. 견적 단계에서 업체 수준이 드러나는 7가지 질문과, 검색에서 만나는 '추천 글'이 제3자 비교인지 업체의 자기 광고인지 10초 만에 확인하는 도메인 판별법까지 정리했습니다.",
    date: "2026. 7. 28",
    updated: "2026. 8. 21",
    related: ["/guide/is-geo-abuse", "/guide/ranked-but-not-in-chatgpt", "/guide/platform-ai-crawler-status"],
  },
  {
    href: "/guide/platform-ai-crawler-status",
    category: "naver",
    icon: SearchCheck,
    kicker: "자체 실측 · 현황판",
    title: "한국 플랫폼 15곳, AI가 읽을 수 있는 곳은 어디인가: robots.txt 전수 실측 현황판 (2026.7)",
    desc: "네이버 블로그·카카오맵·브런치·티스토리·다이닝코드·식신·배민·당근·인스타·유튜브까지 15곳의 robots.txt를 직접 전수 확인했습니다. 네이버 계열은 전부 차단, 브런치·다이닝코드는 '학습만 차단·AI 검색 허용', 식신·티스토리는 완전 개방: 원문 인용과 출처를 그대로 공개합니다.",
    date: "2026. 7. 27",
    updated: "2026. 8. 27",
    related: ["/guide/naver-blocks-ai-crawlers", "/guide/case-third-party-citation", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/case-third-party-citation",
    category: "case",
    icon: TrendingUp,
    kicker: "실제 사례 · 자체 실험",
    title: "홈페이지를 만들었더니 AI가 추천하기 시작했습니다. 정작 인용한 건 우리 홈페이지가 아니었습니다",
    desc: "웹 존재감 0이던 지방 중식당. 플레이스와 상세 홈페이지를 만들고 색인했더니 AI가 이 식당을 4순위로 추천하기 시작했습니다. 그런데 AI가 인용한 출처는 우리 홈페이지가 아니라 다이닝코드였습니다. 홈페이지는 인용되지 않아도 인용을 만들어낸다: 그 이유를 실측으로 공개합니다.",
    date: "2026. 7. 26",
    updated: "2026. 8. 21",
    related: ["/guide/ranked-but-not-in-chatgpt", "/guide/ai-engines-cite-differently", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/ranked-but-not-in-chatgpt",
    category: "case",
    icon: TrendingUp,
    kicker: "자체 실험",
    title: "네이버 AI 1위·구글 2위인데 ChatGPT엔 안 나옵니다: 우리 사이트로 직접 한 GEO 실험",
    desc: "'병원 GEO 대행'에서 우리 페이지는 공개 2일 만에 네이버 AI 브리핑 1위·구글 2위에 올랐습니다. 그런데 ChatGPT·제미나이·퍼플렉시티엔 아직 안 나옵니다. 같은 회사가 왜 검색엔진은 상위인데 생성형 AI에선 빠질까: 우리 사이트를 실험대에 올려 이유를 그대로 공개합니다.",
    date: "2026. 7. 25",
    updated: "2026. 8. 21",
    related: ["/guide/how-to-choose-geo-agency", "/guide/ai-engines-cite-differently", "/guide/naver-blocks-ai-crawlers"],
  },
  {
    href: "/guide/naver-blocks-ai-crawlers",
    category: "naver",
    icon: Lock,
    kicker: "네이버 · AI 검색",
    title: "네이버가 ChatGPT·구글 AI의 접근을 막았습니다. 그래서 홈페이지가 필수입니다",
    desc: "블로그·카페에 리뷰를 아무리 쌓아도 ChatGPT·퍼플렉시티·구글 AI는 그 안을 못 읽습니다. 네이버가 robots.txt에 'AI 학습·RAG 목적 접근 금지'를 명시하고 GPTBot·ClaudeBot 등을 이름까지 지정해 차단했기 때문입니다. AI가 읽는 건 열린 웹, 곧 우리 홈페이지입니다.",
    date: "2026. 7. 24",
    updated: "2026. 8. 21",
    related: ["/guide/ai-engines-cite-differently", "/guide/case-mobile-carwash", "/guide/case-urology-clinic"],
  },
  {
    href: "/guide/case-blog-omission",
    category: "case",
    icon: FileSearch,
    kicker: "블로그 누락 사례",
    title: "블로그 글이 자꾸 누락된다면: 저품질이 아니라 '키워드'가 문제였습니다",
    desc: "5~6회 연속 누락에 플레이스 리뷰에도 반영되지 않던 블로그. 저품질을 의심했지만 단계별 테스트로 확인한 원인은 달랐습니다. 블로그의 체급에 맞는 전략으로 바꾸자 누락 없이 다시 성장하기 시작했습니다.",
    date: "2026. 7. 19",
    updated: "2026. 8. 21",
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
    updated: "2026. 9. 8",
    related: ["/guide/medical-geo", "/guide/case-urology-clinic", "/guide/ai-engines-cite-differently"],
  },
  {
    href: "/guide/case-urology-clinic",
    category: "case",
    icon: ShieldAlert,
    kicker: "비뇨기과 사례",
    title: "ChatGPT에 아예 안 뜨던 비뇨기과: 원인은 홈페이지 방화벽이었습니다",
    desc: "콘텐츠 문제가 아니었습니다. 제작사가 기본값으로 남겨둔 보안 방화벽이 AI 크롤러까지 막고 있었습니다. 차단 해제와 홈페이지 전면 개선 후 6개월, ChatGPT·구글·네이버 모두에 안정적으로 노출되기까지의 실제 사례입니다.",
    date: "2026. 7. 17",
    updated: "2026. 8. 21",
    related: ["/guide/check-hospital-ai-visibility", "/guide/medical-geo", "/guide/case-mobile-carwash"],
  },
  {
    href: "/guide/case-mobile-carwash",
    category: "case",
    icon: Car,
    kicker: "출장세차 사례",
    title: "네이버만으로는 한계였던 출장세차: 2개월 만에 구글 AI 개요에 뜨기까지",
    desc: "네이버 플레이스·카페 홍보로 성장이 멈춰 있던 신도시 출장세차. 구글·카카오맵·네이버 정보 비대칭을 맞추고 홈페이지를 스키마 구조로 정비한 뒤, 2개월 만에 구글 AI 개요에 노출되고 이어서 ChatGPT 추천을 받기 시작한 실제 사례입니다.",
    date: "2026. 7. 17",
    updated: "2026. 8. 21",
    related: ["/guide/ai-engines-cite-differently", "/guide/case-urology-clinic", "/guide/get-cited-by-ai"],
  },
  {
    href: "/guide/is-geo-abuse",
    category: "concern",
    icon: ShieldCheck,
    kicker: "오해와 진실",
    title: "SEO·GEO는 어뷰징인가요? 검색 마케팅에 대한 5가지 오해와 진실",
    desc: "SEO·GEO를 편법·불법으로 오해하는 분들을 위해. 무엇이 정상적인 최적화이고 무엇이 진짜 어뷰징인지, 검색엔진과 AI가 공식 권장하는 정당한 마케팅 기술임을 정리했습니다.",
    date: "2026. 7. 15",
    updated: "2026. 8. 21",
    related: ["/guide/how-to-choose-geo-agency", "/guide/what-is-geo", "/guide/get-cited-by-ai"],
  },
  {
    href: "/guide/why-ads-stop-working",
    category: "concern",
    icon: TrendingDown,
    kicker: "마케팅 고민 진단",
    title: "네이버 광고비는 오르는데 문의는 그대로일 때: 지금 매장에 무슨 일이 일어나고 있나",
    desc: "광고를 늘려도 문의가 안 늘어난다면 매장 문제가 아니라 고객의 검색 방식이 바뀐 것일 수 있습니다. 5분이면 직접 확인해볼 수 있어요.",
    date: "2026. 7. 9",
    updated: "2026. 8. 27",
    related: ["/guide/what-is-geo", "/guide/how-to-choose-geo-agency", "/guide/case-mobile-carwash"],
  },
  {
    href: "/guide/medical-geo",
    category: "industry",
    icon: Stethoscope,
    kicker: "MEDICAL GEO",
    title: "병원 AI 검색 최적화(GEO): ChatGPT가 우리 병원을 추천하게 하려면",
    desc: "AI에 인용되려다 의료법에 걸리지 않도록. 치료후기와 방문후기의 차이, 피해야 할 표현, 안전한 콘텐츠 전략을 정리했습니다.",
    date: "2026. 7. 9",
    updated: "2026. 9. 8",
    related: ["/guide/check-hospital-ai-visibility", "/guide/case-urology-clinic", "/guide/dental-geo"],
  },
  {
    href: "/guide/dental-geo",
    category: "industry",
    icon: Smile,
    kicker: "DENTAL GEO",
    title: "치과 AI 검색 최적화(GEO): ChatGPT가 우리 치과를 추천하게 하려면",
    desc: "치과 특유의 GEO 실행 포인트. 시술별 페이지, 질문형 콘텐츠, 방문후기 설계까지 의료광고법 안에서 AI에 인용받는 법.",
    date: "2026. 7. 9",
    updated: "2026. 9. 8",
    related: ["/guide/medical-geo", "/guide/check-hospital-ai-visibility", "/guide/skincare-geo"],
  },
  {
    href: "/guide/skincare-geo",
    category: "industry",
    icon: Gem,
    kicker: "SKINCARE GEO",
    title: "피부·에스테틱 AI 검색 최적화(GEO) 가이드: 홈페이지가 인용을 가른다",
    desc: "에스테틱은 홈페이지 인용 의존도가 가장 큰 업종. AI가 읽을 수 있는 홈페이지를 만드는 것이 이 업종 GEO의 핵심입니다.",
    date: "2026. 7. 9",
    updated: "2026. 9. 8",
    related: ["/guide/medical-geo", "/guide/ai-engines-cite-differently", "/guide/dental-geo"],
  },
  {
    href: "/guide/ai-engines-cite-differently",
    category: "basics",
    icon: GitCompareArrows,
    kicker: "GEO INSIGHT",
    title: "ChatGPT와 네이버 AI는 왜 다른 가게를 추천할까: 엔진별 인용 출처의 차이",
    desc: "네이버 AI는 리뷰를, ChatGPT·구글은 홈페이지를 봅니다. 엔진마다 다른 출처와, 그래서 무엇을 준비해야 하는지 정리했습니다.",
    date: "2026. 7. 9",
    updated: "2026. 8. 21",
    related: ["/guide/what-is-geo", "/guide/get-cited-by-ai", "/guide/naver-place-checklist"],
  },
  {
    href: "/guide/what-is-geo",
    category: "basics",
    icon: Sparkles,
    kicker: "GEO BASICS",
    title: "자영업 AI 검색 최적화 입문: 우리 가게를 AI가 추천하게 만드는 법",
    desc: "손님이 ChatGPT·네이버 AI에게 가게를 물어보는 시대입니다. AI가 어떤 가게를 고르는지, 우리 가게가 그 답에 들어가려면 무엇부터 해야 하는지 자영업 사장님 눈높이로 정리했습니다.",
    date: "2026. 7. 8",
    updated: "2026. 8. 27",
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
    updated: "2026. 8. 27",
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
    updated: "2026. 8. 27",
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
