// 위즈 극장 — 캐릭터 '위즈'가 GEO를 보여주는 영상 시리즈
// 새 에피소드 추가 시: 여기에 항목 추가 + app/theater/<slug>/page.tsx 생성 + sitemap 등록

export type TheaterEpisode = {
  slug: string
  ep: number
  title: string
  logline: string
  date: string
  poster: string
  /** 이 에피소드가 영상화한 원작 가이드 글 */
  basedOn: { href: string; label: string }[]
  status: "published" | "coming"
}

export const EPISODES: TheaterEpisode[] = [
  {
    slug: "ep1-closed-door",
    ep: 1,
    title: "닫힌 문 — 네이버에 쌓은 글을 AI는 읽지 못합니다",
    logline:
      "밤마다 웹을 읽으러 다니는 AI 부엉이 '위즈'. 오늘 밤 위즈가 초록색 대문 앞에서 겪은 일.",
    date: "2026-07-30",
    poster: "/theater/ep1-poster1.png",
    basedOn: [
      { href: "/guide/naver-blocks-ai-crawlers", label: "네이버가 AI 접근을 막은 이유" },
      { href: "/guide/platform-ai-crawler-status", label: "한국 플랫폼 15곳 크롤러 실측 현황판" },
    ],
    status: "published",
  },
  {
    slug: "ep2-half-open-door",
    ep: 2,
    title: "반쪽 문 — 다이닝코드의 영리한 선택",
    logline: "“학습은 안 돼. 하지만 읽고 추천하는 건 환영이야.” 위즈가 식당 골목에서 만난 이상한 문.",
    date: "2026-07-31",
    poster: "/theater/ep2-poster1.png",
    basedOn: [
      { href: "/guide/case-third-party-citation", label: "다이닝코드 인용 사례 (중식당 GEO 실험)" },
      { href: "/guide/platform-ai-crawler-status", label: "한국 플랫폼 15곳 크롤러 실측 현황판" },
    ],
    status: "published",
  },
  {
    slug: "ep3-invisible-wall",
    ep: 3,
    title: "보이지 않는 벽 — 문은 열려 있는데 위즈만 튕겨 나간다",
    logline:
      "ChatGPT에 아예 안 뜨던 병원. 원인은 나도 모르게 켜져 있던 홈페이지 방화벽이었습니다.",
    date: "2026-08-04",
    poster: "/theater/ep3-poster1.png",
    basedOn: [
      { href: "/guide/case-urology-clinic", label: "비뇨기과 6개월 GEO 사례" },
      { href: "/guide/check-hospital-ai-visibility", label: "우리 병원 ChatGPT 노출 셀프 체크" },
    ],
    status: "published",
  },
  {
    slug: "ep4-doorless-shop",
    ep: 4,
    title: "문이 없는 가게 — 출장세차의 역전",
    logline:
      "찾아갈 문이 아예 없는 출장 서비스. 홈페이지가 생기자 허공에 문이 나타났습니다.",
    date: "2026-08-06",
    poster: "/theater/ep4-poster1.png",
    basedOn: [
      { href: "/guide/case-mobile-carwash", label: "출장세차 2개월 GEO 사례" },
      { href: "/guide/get-cited-by-ai", label: "AI 답변에 나오는 7가지 방법" },
    ],
    status: "published",
  },
  {
    slug: "ep5-unread-invitation",
    ep: 5,
    title: "읽지 않는 초대장 — ChatGPT의 느린 관문, 빙",
    logline:
      "초대장을 보낸 지 8일, 아직 읽지 않은 서고가 있습니다. 줄을 앞당기는 건 반복 제출이 아니라 추천 도장입니다.",
    date: "2026-08-12",
    poster: "/theater/ep5-poster1.png",
    basedOn: [
      { href: "/guide/bing-index-bottleneck", label: "IndexNow 통보 8일 실측 기록" },
      { href: "/guide/ranked-but-not-in-chatgpt", label: "검색 1위인데 ChatGPT엔 안 나온 실험" },
    ],
    status: "published",
  },
  {
    slug: "ep6-picky-guests",
    ep: 6,
    title: "입맛이 다른 손님들 — AI마다 인용하는 곳이 다르다 (예고)",
    logline: "같은 질문에 ChatGPT·제미나이·퍼플렉시티가 서로 다른 답을 내놓는 이유.",
    date: "",
    poster: "/theater/ep5-poster2.png",
    basedOn: [{ href: "/guide/ai-engines-cite-differently", label: "엔진별 인용 출처 실측 비교" }],
    status: "coming",
  },
]

export const SERIES_NAME = "위즈 극장"
export const SERIES_DESC =
  "밤마다 웹을 읽으러 다니는 AI 부엉이 '위즈'의 이야기로 GEO(AI 검색 최적화)를 쉽게 풀어내는 영상 시리즈. 모든 에피소드는 위즈더플래닝이 직접 실측한 사실을 원작으로 합니다."
