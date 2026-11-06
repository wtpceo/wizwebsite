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
  /** false면 머리줄 드롭다운에는 넣지 않는다(홈 목록과 바닥에만). 기본은 넣는다 */
  inMenu?: boolean
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
    desc: "네이버 검색 광고를 세팅하고 운영합니다.",
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
    desc: "쇼츠와 릴스를 기획하고 촬영해 편집합니다.",
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
  // 소상공인 입구(대표 결정 2026-11-05). 구글 소상공인 광고가 /naver-marketing으로 가고 있어 같은 곳으로 묶는다.
  // 홈 목록 끝과 바닥에만 넣고 머리줄 메뉴에는 넣지 않는다(총괄 전달)
  {
    label: "매장 마케팅",
    title: "매장 마케팅",
    desc: "플레이스 정보와 사진, 블로그 글을 정비하고 매장 검색 노출을 확인합니다.",
    href: "/naver-marketing",
    inMenu: false,
  },
]
