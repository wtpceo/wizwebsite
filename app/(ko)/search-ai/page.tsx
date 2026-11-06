import type { Metadata } from "next"
import MediaPage, { type MediaPageData } from "@/components/media/MediaPage"

// 검색·AI 노출 매체 페이지. 틀은 components/media/MediaPage(사이트구성안 v1 §05),
// 문구는 20_글/원고/2026-11-03_search-ai_매체페이지_원고.md 그대로. 숫자 출처는 원고 상단 주석에 있다.
// 2차 원고(2026-11-03) 반영. 비유·대비 문장을 빼고 확인된 사실만 평서문으로 바꿨다
// - 주 키워드 'SEO 업체'. 'GEO 마케팅·AI 검색 최적화·GEO 대행'은 가이드 두 편과 겹쳐 제목·메타에 쓰지 않는다
// - 4절의 '홈페이지 제작 페이지'와 '각 광고 페이지'는 lib/ad-services.ts의 주소로 걸었다
// - 부서 이름 '검색·GEO 부서'는 구성안 §09-2(대표 확인 전)
// - 대표 승인 전이라 noindex. 사이트맵·llms.txt에 넣지 않았다
const TITLE = "SEO 업체: 네이버·구글 검색과 AI 답변 노출을 맡습니다 | 위즈더플래닝"
const DESC =
  "위즈더플래닝 검색·GEO 부서가 SEO 대행을 합니다. 네이버·구글 검색과 ChatGPT·네이버 AI·제미나이 답변에 브랜드가 나오는지 계약 전에 재고, 사이트와 콘텐츠를 고친 뒤 같은 방법으로 다시 재서 보고합니다. 대행료는 월 300만 원부터입니다."
const HERO_IMG = "/report/business-report-summary.jpg"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/search-ai" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://wiztheplanning.com/search-ai",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/covers/og-search-ai.jpg", width: 1200, height: 630, alt: TITLE }],
  },
}

const DATA: MediaPageData = {
  source: "search-ai",
  hero: {
    title: "네이버·구글 검색과 AI 답변에\n브랜드가 나오도록 고칩니다",
    lede: "SEO 대행과 AI 답변 노출을 검색·GEO 부서가 같이 맡습니다. 대행료는 월 300만 원부터이고 최소 3개월입니다.",
    image: {
      src: HERO_IMG,
      alt: "위즈더플래닝 주간 보고서 첫 장: 카테고리 점유율, 출처 인용률, 인용 키워드, 웹 건강도",
      shape: "square",
      fit: "contain",
    },
  },
  suits: {
    title: "이런 회사에\n맞습니다",
    good: [
      "고객이 구매나 예약 전에 브랜드 이름을 검색해 보는 업종. 병원, 교육, B2B 서비스, 소비재 브랜드가 여기에 들어갑니다",
      "광고를 줄이면 문의도 같이 줄어드는 회사",
      "ChatGPT나 네이버 AI에 업종을 물었을 때 경쟁사만 나오거나 틀린 정보가 나오는 회사",
      "SEO 컨설팅 보고서는 받았지만 사이트를 고칠 사람이 없는 회사",
    ],
    better: [
      "한두 달 안에 신제품을 알려야 한다면 메타 광고나 인플루언서 섭외가 맞습니다. 검색은 빠른 곳도 변화가 보이기까지 2개월쯤 걸립니다",
      "아직 검색하는 사람이 없는 새 카테고리라면 광고와 숏폼으로 이름부터 알려야 합니다",
      "홈페이지가 없다면 홈페이지 제작부터 합니다",
    ],
  },
  work: {
    title: "검색·GEO 부서가 하는 일",
    steps: [
      { name: "질문 정하기", desc: "고객이 검색창과 AI에 칠 질문을 담당자님과 같이 정합니다" },
      {
        name: "기준선 측정",
        desc: "계약 전에 엔진마다 여러 번 물어서 이름이 나오는 비율, AI가 단 출처, 틀린 정보를 기록합니다. 온보딩 항목으로 따로 견적을 냅니다",
      },
      {
        name: "사이트 수정",
        desc: "AI 검색봇이 사이트를 읽을 수 있게 구조를 고치고, 브랜드 이름과 사실을 같은 문장에 적습니다",
      },
      {
        name: "콘텐츠와 바깥 정보",
        desc: "고객 질문에 답하는 페이지와 네이버·구글 검색용 글을 쓰고, 다른 사이트에 남은 틀린 정보를 찾아 고칩니다",
      },
      { name: "재측정과 보고", desc: "처음과 같은 질문, 같은 방법으로 다시 재서 숫자를 보고합니다" },
    ],
    note: {
      title: "SEO와 GEO를 같이 진행합니다",
      body: "GEO는 ChatGPT, 네이버 AI, 제미나이가 답을 쓸 때 브랜드를 출처와 함께 언급하게 하는 작업입니다. 저희는 SEO와 같은 질문 목록으로 함께 진행합니다. 단계별로 무엇을 재고 고치는지는 [GEO 최적화 서비스 글](/guide/geo-optimization-service)에, 대행사를 비교할 때 물어볼 것은 [계약 전에 물어볼 7가지 질문 글](/guide/how-to-choose-geo-agency)에 적었습니다.",
    },
  },
  links: {
    title: "같이 맡길 수 있는 일",
    items: [
      {
        name: "홈페이지 제작",
        desc: "지금까지 홈페이지를 30곳 넘게 만들었습니다. 새로 만들 때 AI 검색봇이 읽을 수 있는 구조로 만듭니다",
        hrefs: ["/website"],
      },
      {
        name: "숏폼·촬영",
        desc: "113곳의 숏폼을 360편 넘게 만들었습니다. 촬영한 사진과 영상은 검색 콘텐츠 페이지에도 넣습니다",
        hrefs: ["/shortform"],
      },
      {
        name: "네이버·메타·구글 광고",
        desc: "검색 광고와 SNS 광고도 운영합니다",
        hrefs: ["/naver-marketing", "/meta-ads", "/google-ads"],
      },
    ],
  },
  records: {
    title: "공개한 사례",
    lede: "업체 이름과 정확한 지역은 쓰지 않았습니다.",
    items: [
      {
        industry: "정형외과",
        work: "ChatGPT가 병원 이름을 진료 정보와 잇지 못하던 문제를 고쳤습니다",
        figure: "같은 질문 10개를 30번씩 물었을 때 언급률 17%, 39일 뒤 93%",
        href: "/guide/case-orthopedic-chatgpt",
      },
      {
        industry: "치과",
        work: "홈페이지를 새로 만들면서 AI 안내 파일을 목차형에서 팩트시트형으로 바꿨습니다",
        figure: "51일 기록",
        href: "/guide/case-dental-llms-factsheet",
      },
      {
        industry: "비뇨의학과",
        work: "ChatGPT에 나오지 않던 원인이 홈페이지 방화벽이었습니다. 차단을 풀고 홈페이지를 고쳤습니다",
        figure: "홈페이지 작업 약 2개월, ChatGPT·구글·네이버에서 안정적으로 노출되기까지 약 6개월",
        href: "/guide/case-urology-clinic",
      },
      {
        industry: "위즈더플래닝",
        work: "저희 사이트도 같은 방법으로 쟀습니다",
        figure: "10월 19일 측정 100점 만점에 16점",
        href: "/how-we-measure",
      },
    ],
  },
  receive: {
    title: "보고서에 들어가는\n숫자",
    metrics: [
      { name: "카테고리 점유율", desc: "브랜드 이름을 넣지 않은 일반 질문 가운데 AI 답변에 우리 이름이 나온 비율" },
      { name: "출처 인용률", desc: "같은 질문들에서 AI가 우리 사이트를 출처 링크로 단 비율" },
      { name: "인용 키워드", desc: "추적하는 키워드 가운데 한 번이라도 인용된 수" },
      { name: "웹 건강도", desc: "AI와 검색엔진이 사이트를 읽어 갈 때 걸리는 문제가 얼마나 적은지" },
    ],
    aside:
      "지표 뒤에 엔진별 표, 지난 측정과 달라진 점, 다음에 할 일이 붙습니다. [저희 회사를 잰 보고서](/business/insights/weekly-report-sample)를 샘플로 공개했습니다.",
  },
  faq: [
    {
      q: "비용은 얼마인가요?",
      a: "대행료는 월 300만 원부터이고 최소 3개월입니다. 계약 전 기준선 측정은 온보딩 항목으로 따로 견적을 냅니다. 광고비는 대행료와 별도입니다.",
    },
    {
      q: "결과가 보이기까지 얼마나 걸리나요?",
      a: "빠른 곳은 2개월쯤 걸립니다. 홈페이지를 전부 다시 만든 비뇨의학과는 홈페이지 작업에 약 2개월, ChatGPT·구글·네이버에서 안정적으로 노출되기까지 약 6개월이 걸렸습니다.",
    },
    {
      q: "AI 답변에 나오는 걸 약속해 주시나요?",
      a: "약속하지 않습니다. AI 답변은 엔진, 시점, 질문 방식에 따라 달라집니다. 저희가 드리는 것은 처음과 같은 방법으로 다시 잰 숫자입니다.",
    },
    {
      q: "SEO 대행사에 맡기면 AI 답변은 따로 맡겨야 하나요?",
      a: "따로 맡기지 않으셔도 됩니다. 검색·GEO 부서가 같은 질문 목록으로 검색 결과와 AI 답변을 함께 봅니다. 둘의 차이는 [GEO와 SEO 차이 글](/guide/geo-vs-seo)에 적었습니다.",
    },
    {
      q: "SEO 업체는 무엇을 보고 고르면 되나요?",
      a: "계약 전과 계약 뒤 숫자를 같은 방법으로 재는지 물어보시면 됩니다. 그 밖에 확인할 것은 [계약 전에 물어볼 7가지 질문 글](/guide/how-to-choose-geo-agency)에 정리했습니다.",
    },
    {
      q: "병원도 맡길 수 있나요?",
      a: "네. 병원은 의료광고 규정까지 같이 봐야 해서 [병원 통합 마케팅 페이지](/medical-geo-agency)에서 따로 안내합니다. [병원 무료 AI 검색 진단](/medical-diagnosis)도 그 페이지에서 신청하실 수 있습니다.",
    },
  ],
  contact: {
    title: "검색·AI 노출 상담",
    lede: "회사 이름, 지금 하고 있는 광고, 고민을 남겨 주시면 검색·GEO 부서가 회사 메일로 연락드리겠습니다.",
  },
}

export default function Page() {
  return <MediaPage data={DATA} />
}
