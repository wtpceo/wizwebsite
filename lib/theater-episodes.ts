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
    title: "반쪽 문 — 다이닝코드의 영리한 선택 (예고)",
    logline: "“학습은 안 돼. 하지만 읽고 추천하는 건 환영이야.” 위즈가 만난 이상한 문.",
    date: "",
    poster: "/theater/ep1-poster2.png",
    basedOn: [{ href: "/guide/case-third-party-citation", label: "다이닝코드 인용 사례" }],
    status: "coming",
  },
]

export const SERIES_NAME = "위즈 극장"
export const SERIES_DESC =
  "밤마다 웹을 읽으러 다니는 AI 부엉이 '위즈'의 이야기로 GEO(AI 검색 최적화)를 쉽게 풀어내는 영상 시리즈. 모든 에피소드는 위즈더플래닝이 직접 실측한 사실을 원작으로 합니다."
