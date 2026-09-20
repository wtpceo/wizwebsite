// 기업(B2B) 경로 전용 글 목록. 자영업용 lib/guide-articles.ts 와 분리한다.
// 교차 링크를 걸지 않는 것이 정책이라 목록도 따로 관리한다(CLAUDE.md 기업 경로 정책).
export type BizArticle = {
  href: string
  kicker: string
  title: string
  desc: string
  date: string
  /** 실제로 본문을 고친 날. 사이트맵 lastmod 근거 */
  updated?: string
  cover: string
}

export const BUSINESS_ARTICLES: BizArticle[] = [
  {
    href: "/business/insights/marketing-agency-rfp",
    kicker: "대행사 선정",
    title: "마케팅 대행사 RFP에 넣어야 할 12가지: 제안을 받는 쪽에서 본 기준",
    desc: "RFP가 비어 있으면 제안서도 비어서 돌아옵니다. 비교 가능한 제안을 받으려면 과제 정의부터 계정 소유권, 보고 체계, 평가 배점까지 적혀 있어야 합니다. 제안을 받는 대행사 입장에서 무엇이 있으면 정확한 견적이 나오는지 정리했습니다.",
    date: "2026. 9. 20",
    updated: "2026. 9. 20",
    cover: "/covers/business-rfp.jpg",
  },
]

export function relatedBizArticles(href: string, limit = 2) {
  return BUSINESS_ARTICLES.filter((a) => a.href !== href).slice(0, limit)
}
