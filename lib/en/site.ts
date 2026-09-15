// 영문 사이트 공통 정보. 대외 영문 브랜드는 WizThePlanning으로 통일한다 (2026-09-15 결정).
// 여기 적는 사실은 국문 사이트·공식 정보와 일치해야 한다. 확인되지 않은 수상·파트너·팀 규모는 쓰지 않는다.
export const EN_BASE = "https://wiztheplanning.com"

export const EN_ORG = {
  name: "WizThePlanning",
  nameKo: "주식회사 위즈더플래닝",
  email: "wiz@wiztheplanning.com",
  phoneKorea: "1670-0704",
  city: "Seoul, Republic of Korea",
  bizRegNo: "668-81-00391",
  founded: "2016",
}

export const EN_NAV: { label: string; href: string }[] = [
  { label: "Korea Market Entry", href: "/en/korea-market-entry" },
  { label: "For Agencies", href: "/en/agency-partners" },
  { label: "How We Measure", href: "/en/how-we-measure" },
  { label: "Insights", href: "/en/insights" },
  { label: "Businesses in Korea", href: "/en/business-owners-in-korea" },
]

export const EN_ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${EN_BASE}/en#organization`,
  name: EN_ORG.name,
  alternateName: ["위즈더플래닝", "Wiz The Planning"],
  url: `${EN_BASE}/en`,
  email: EN_ORG.email,
  foundingDate: EN_ORG.founded,
  address: { "@type": "PostalAddress", addressLocality: "Seoul", addressCountry: "KR" },
  areaServed: { "@type": "Country", name: "South Korea" },
  knowsLanguage: ["en", "ko"],
  description:
    "Seoul-based marketing agency since 2016. Naver marketing, AI search optimization (GEO), SEO, paid social and search, and Korean-language content for brands entering Korea.",
}
