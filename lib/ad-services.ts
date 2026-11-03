// 다루는 광고 7개. 헤더 드롭다운, 홈 '광고' 목록, 바닥 타일이 같은 목록을 쓴다(사이트구성안 v1 §02).
// 새 주소 5개(/search-ai, /meta-ads, /google-ads, /shortform, /website)는 매체 페이지가 생기기 전까지 404다.

export type AdService = {
  /** 메뉴·바닥에 쓰는 이름 */
  label: string
  /** 홈 목록 막대에 쓰는 이름 */
  title: string
  /** 홈 목록을 열면 보이는 한 줄 */
  desc: string
  href: string
}

export const AD_SERVICES: AdService[] = [
  {
    label: "검색·AI 노출",
    title: "검색·AI 노출 (SEO·GEO)",
    desc: "네이버·구글 검색 순위와 ChatGPT, 제미나이, 네이버 AI 답변에 우리 브랜드가 나오는지 재고 고칩니다.",
    href: "/search-ai",
  },
  {
    label: "네이버 광고",
    title: "네이버 광고",
    desc: "파워링크, 플레이스, 브랜드 검색까지 네이버 안의 광고를 운영합니다.",
    href: "/naver-marketing",
  },
  {
    label: "메타 광고",
    title: "메타 광고",
    desc: "인스타그램과 페이스북 광고를 소재 제작부터 집행, 리포트까지 맡습니다.",
    href: "/meta-ads",
  },
  {
    label: "구글·유튜브 광고",
    title: "구글·유튜브 광고",
    desc: "구글 검색 광고와 유튜브 영상 광고를 운영합니다.",
    href: "/google-ads",
  },
  {
    label: "숏폼·촬영",
    title: "숏폼·촬영",
    desc: "쇼츠와 릴스를 기획부터 촬영, 편집까지 저희 촬영팀이 합니다.",
    href: "/shortform",
  },
  {
    label: "인플루언서 섭외",
    title: "인플루언서 섭외",
    desc: "후보 리스트를 먼저 받아 보고 고르세요. 섭외, 계약, 광고 활용까지 챙깁니다.",
    href: "/influencer",
  },
  {
    label: "홈페이지 제작",
    title: "홈페이지 제작",
    desc: "광고와 검색이 도착하는 홈페이지를 만들고, 반응을 보며 고칩니다.",
    href: "/website",
  },
]
