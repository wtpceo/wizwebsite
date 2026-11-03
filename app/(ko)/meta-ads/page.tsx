import type { Metadata } from "next"
import MediaPage, { type MediaPageData } from "@/components/media/MediaPage"

// 메타 광고 매체 페이지. 1차 원고: 20_글/원고/2026-11-03_meta-ads_매체페이지_원고.md(2026-11-03). 틀은 components/media/MediaPage
// - 숫자는 모두 /business/insights/case-payment-meta-ads 범위. 출처는 원고 상단 주석에 있다
// - layout.tsx 구조화 데이터의 '캠페인 1,000건 이상'은 근거를 못 찾아 쓰지 않았다(원고 [확인])
// - 4절의 '홈페이지 제작 페이지'는 lib/ad-services.ts의 주소로 걸었다
// - 부서 이름 '광고 부서'는 구성안 §09-2(대표 확인 전)
// - 첫 화면 사진은 실제 운영 화면이 오기 전까지 자리만 둔다. 운영 화면이 아니라서 alt는 비웠다
// - 대표 승인 전이라 noindex. 사이트맵·llms.txt에 넣지 않았다
const TITLE = "메타 광고 대행사: 인스타그램·페이스북 광고 운영과 보고 | 위즈더플래닝"
const DESC =
  "위즈더플래닝 광고 부서가 메타 광고 대행을 맡아 인스타그램·페이스북 광고를 세팅하고 운영합니다. 광고 소재는 촬영 부서와 제작 부서가 만들고, 광고 관리자 숫자와 광고주 쪽 숫자를 맞춰 보고합니다. 대행료는 월 300만 원부터입니다."
const HERO_IMG = "/home/m-meta.jpg"
const HERO_ALT = ""

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ["메타 광고 대행사", "메타 광고 대행", "인스타 광고 대행", "인스타그램 광고 대행", "페이스북 광고 대행"],
  alternates: { canonical: "/meta-ads" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://wiztheplanning.com/meta-ads",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
    type: "website",
    images: [{ url: HERO_IMG, width: 1200, height: 1489, alt: HERO_ALT }],
  },
}

const DATA: MediaPageData = {
  source: "meta-ads",
  hero: {
    title: "인스타그램·페이스북 광고를\n세팅하고 운영합니다",
    lede: "메타 광고 대행을 맡기시면 광고 소재는 저희 촬영 부서와 제작 부서가 만듭니다. 대행료는 월 300만 원부터이고 최소 3개월입니다.",
    image: { src: HERO_IMG, alt: HERO_ALT, shape: "square" },
  },
  suits: {
    title: "이런 회사에\n맞습니다",
    good: [
      "신제품이나 새 서비스를 짧은 기간에 많은 사람에게 알려야 하는 회사",
      "나이, 지역, 관심사로 고객을 나눠서 광고해야 하는 회사",
      "해외 사용자에게 광고해야 하는 회사",
      "광고 소재를 새로 만들 사람이 없는 회사",
    ],
    better: [
      "고객이 이미 브랜드 이름이나 업종을 검색해서 찾는다면 네이버·구글 검색 광고가 먼저입니다",
      "다른 사람의 추천이 필요하다면 인플루언서 섭외가 맞습니다",
      "광고가 도착할 페이지가 없다면 홈페이지 제작부터 합니다",
    ],
  },
  work: {
    title: "광고 부서가\n하는 일",
    lede: "인스타 광고 대행과 페이스북 광고 대행은 이 순서로 진행합니다.",
    steps: [
      { name: "목표 정하기", desc: "랜딩 페이지 조회, 문의, 구매 가운데 무엇으로 성과를 볼지 담당자님과 정합니다" },
      { name: "세팅", desc: "광고 계정, 픽셀(광고 측정 코드), 타깃, 예산을 세팅합니다" },
      { name: "소재 제작", desc: "촬영 부서와 제작 부서가 이미지와 숏폼 영상을 만듭니다" },
      { name: "운영", desc: "지면과 소재별 숫자를 보고 예산을 옮기고 소재를 바꿉니다" },
      { name: "보고", desc: "메타 광고 관리자 숫자와 광고주 쪽 관리자 화면 숫자를 같이 놓고 보고합니다" },
    ],
  },
  links: {
    title: "같이 맡길 수\n있는 일",
    items: [
      {
        name: "숏폼·촬영",
        desc: "113곳의 숏폼을 360편 넘게 만들었습니다. 만든 숏폼을 메타 광고 소재로 씁니다",
        hrefs: ["/shortform"],
      },
      {
        name: "인플루언서 섭외",
        desc: "계약에서 광고 활용을 허락받은 인플루언서 콘텐츠를 메타 광고로 돌립니다",
        hrefs: ["/influencer"],
      },
      {
        name: "홈페이지 제작",
        desc: "광고가 도착할 페이지를 만들고 고칩니다. 홈페이지는 지금까지 30곳 넘게 만들었습니다",
        hrefs: ["/website"],
      },
    ],
  },
  records: {
    title: "공개한\n사례",
    lede: "기업 이름과 집행 국가는 쓰지 않았습니다.",
    items: [
      {
        industry: "결제 서비스 기업",
        work: "해외 사용자 대상 메타 광고 3주 운영. 중간에 숫자가 나빠진 원인을 지면별로 나눠 찾았고, 광고주 숫자와 맞지 않은 보고서 숫자 하나를 취소했습니다",
        figure: "광고비 134만 6,417원, 랜딩 페이지 조회 19,484건(1건당 69원), 문의 버튼 클릭 75건(1건당 약 1만 8천 원)",
        href: "/business/insights/case-payment-meta-ads",
      },
    ],
  },
  receive: {
    title: "보고서에 들어가는\n숫자",
    metrics: [
      { name: "광고비", desc: "기간 동안 쓴 금액" },
      { name: "도달·노출", desc: "광고를 본 사람 수와 광고가 보인 횟수" },
      { name: "링크 클릭", desc: "광고를 눌러 페이지로 넘어간 횟수" },
      { name: "랜딩 페이지 조회", desc: "페이지가 실제로 열린 건수와 1건당 비용" },
      { name: "문의", desc: "문의 버튼 클릭 건수와 1건당 비용" },
    ],
    aside:
      "광고 관리자 숫자와 광고주 쪽 관리자 화면 숫자가 다르면 차이를 같이 적습니다. 지면별, 소재별 숫자도 나눠서 드립니다.",
  },
  faq: [
    {
      q: "비용은 얼마인가요?",
      a: "대행료는 월 300만 원부터이고 최소 3개월입니다. 광고비는 대행료와 별도로 광고주가 매체에 직접 집행합니다. 기간이 정해진 단발 캠페인은 온보딩비, 제작비, 운영 수수료로 나눠 견적을 냅니다.",
    },
    {
      q: "인스타그램 광고 대행만 따로 맡길 수 있나요?",
      a: "네. 광고가 인스타그램 지면에만 나가도록 세팅할 수 있습니다.",
    },
    {
      q: "광고 소재도 만들어 주나요?",
      a: "네. 촬영 부서와 제작 부서가 이미지와 숏폼 영상을 만듭니다.",
    },
    {
      q: "광고 관리자 숫자와 우리 사이트 숫자가 다르면 어떻게 하나요?",
      a: "두 숫자를 나란히 놓고 차이가 얼마인지부터 적습니다. 결제 서비스 사례에서는 목록 페이지 조회가 7.5% 차이였고, 페이지 안쪽 행동은 광고주 쪽 숫자를 기준으로 판단했습니다.",
    },
    {
      q: "병원 광고도 하나요?",
      a: "네. 병원 광고는 의료광고 규정 안에서 만들고, 심의가 필요한 문구는 심의 기준에 맞춥니다. 병원은 [병원 통합 마케팅 페이지](/medical-geo-agency)에서 따로 안내합니다.",
    },
  ],
  contact: {
    title: "메타 광고\n상담",
    lede: "회사 이름, 지금 하고 있는 광고, 월 광고비를 남겨 주시면 광고 부서가 회사 메일로 연락드리겠습니다.",
  },
}

export default function Page() {
  return <MediaPage data={DATA} />
}
