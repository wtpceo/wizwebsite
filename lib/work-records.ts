// 홈 '일한 기록' 책등 목록. 위즈스튜디오 레퍼런스에서 업종과 맡은 일만 옮겼다(업체명은 적지 않는다).
// 출처: 09_전체리브랜딩_2026-11/프로토타입/index.html. 항목을 늘릴 때도 실제 기록에 있는 것만 넣는다.
// 링크는 /portfolio 개편 전까지 전부 /portfolio로 보낸다.

/** 작업 종류 코드. 책등 아래 작업 이름 칸의 바탕색을 가른다 */
export type WorkKind = "hp" | "sf" | "geo" | "ad"

export type WorkRecord = {
  /** 업종 */
  industry: string
  /** 맡은 일 */
  work: string
  kind: WorkKind
  href: string
}

const RAW: [string, string, WorkKind][] = [
  ["치과", "홈페이지", "hp"],
  ["한의원", "홈페이지", "hp"],
  ["정형외과", "GEO", "geo"],
  ["법률사무소", "홈페이지", "hp"],
  ["안과", "홈페이지", "hp"],
  ["결제 서비스", "메타 광고", "ad"],
  ["마취통증의학과", "홈페이지", "hp"],
  ["치과", "GEO", "geo"],
  ["피부과", "숏폼", "sf"],
  ["조달 컨설팅", "홈페이지", "hp"],
  ["법무사", "홈페이지", "hp"],
  ["정신건강의학과", "GEO", "geo"],
  ["에스테틱", "홈페이지", "hp"],
  ["수학 교육", "홈페이지", "hp"],
  ["한의원", "GEO", "geo"],
  ["헬스", "숏폼", "sf"],
  ["치과", "숏폼", "sf"],
  ["피트니스", "홈페이지", "hp"],
  ["골프 레슨", "홈페이지", "hp"],
  ["뷰티", "숏폼", "sf"],
  ["병원", "메타 광고", "ad"],
  ["태권도", "홈페이지", "hp"],
  ["한의원", "숏폼", "sf"],
  ["심리상담", "홈페이지", "hp"],
  ["치과", "메타 광고", "ad"],
  ["안과", "GEO", "geo"],
  ["피부 관리", "홈페이지", "hp"],
  ["정형외과", "숏폼", "sf"],
]

export const WORK_RECORDS: WorkRecord[] = RAW.map(([industry, work, kind]) => ({
  industry,
  work,
  kind,
  href: "/portfolio",
}))
