import type { Metadata } from "next"
import MediaPage, { type MediaPageData } from "@/components/media/MediaPage"

// 홈페이지 제작 매체 페이지. 1차 원고: 20_글/원고/2026-11-03_website_매체페이지_원고.md(2026-11-03). 틀은 components/media/MediaPage
// - 근거는 원고 상단 주석에 있다. 소유권·제작 기간 문답은 정해진 문장이 없어 원고에서 뺐다(원고 [확인])
// - 2절 '다른 매체가 나은 경우'의 랜딩 페이지 단독 제작 줄은 대표 확인 뒤 넣음
// - 5절 치과 두 줄은 같은 곳인지 확인 전이라 원고대로 나눠 둔다(원고 [확인])
// - 4절의 '각 광고 페이지'는 lib/ad-services.ts의 주소로 걸었다
// - 일한 기록 화면 칸은 고객사 홈페이지 캡처(사용 동의 받음). 업종이 겹치지 않게 치과·한의원·법률·컨설팅·헬스로 골랐고 업체 이름은 쓰지 않는다
// - 부서 이름 '홈페이지 개발 부서'는 구성안 §09-2(대표 확인 전)
// - 첫 화면 사진은 실제 작업 화면이 오기 전까지 자리만 둔다. 작업 화면이 아니라서 alt는 비웠다
// - 대표 승인 전이라 noindex. 사이트맵·llms.txt에 넣지 않았다
const TITLE = "기업·병원 홈페이지 제작: 기획, 디자인, 개발, 촬영까지 | 위즈더플래닝"
const DESC =
  "위즈더플래닝 홈페이지 개발 부서가 기업 홈페이지 제작과 병원 홈페이지 제작을 맡습니다. 지금까지 30곳 넘게 만들었고, PC와 모바일에 맞는 반응형으로 만들며 서버 렌더링과 구조화 데이터를 넣습니다."
const HERO_IMG = "/home/m-web.jpg"
const HERO_ALT = ""
const ALT = "위즈더플래닝이 만든 홈페이지 화면"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    "기업 홈페이지 제작",
    "병원 홈페이지 제작",
    "홈페이지 제작",
    "홈페이지 제작 업체",
    "홈페이지 리뉴얼",
    "반응형 홈페이지 제작",
    "웹사이트 제작",
    "홈페이지 제작 비용",
  ],
  alternates: { canonical: "/website" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://wiztheplanning.com/website",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
    type: "website",
    images: [{ url: HERO_IMG, width: 1200, height: 1132, alt: HERO_ALT }],
  },
}

const DATA: MediaPageData = {
  source: "website",
  hero: {
    title: "기업·병원 홈페이지를\n기획하고 만듭니다",
    lede: "지금까지 기업·병원 홈페이지를 30곳 넘게 만들었습니다. 검색엔진과 AI가 읽을 수 있는 구조로 만들고, 사진과 영상은 저희 촬영 부서가 찍습니다.",
    image: { src: HERO_IMG, alt: HERO_ALT, shape: "square" },
  },
  suits: {
    title: "이런 회사에\n맞습니다",
    good: [
      "홈페이지가 없거나 오래돼서 새로 만들거나 리뉴얼해야 하는 회사",
      "광고를 돌리는데 광고가 도착할 페이지가 없는 회사",
      "홈페이지는 있는데 ChatGPT나 구글 검색에서 찾을 수 없는 회사",
      "해외 고객을 위해 여러 언어 페이지가 필요한 회사",
    ],
    better: [
      "홈페이지는 잘 갖춰져 있고 찾아오는 사람이 적다면 검색·AI 노출이나 광고가 먼저입니다",
      // 랜딩 페이지 단독 제작 줄: 대표 확인 뒤 넣음
    ],
  },
  work: {
    title: "홈페이지 개발 부서가\n하는 일",
    lede: "기업 홈페이지 제작은 이 순서로 진행합니다.",
    steps: [
      { name: "기획", desc: "페이지 구성과 각 페이지에 들어갈 내용을 담당자님과 정합니다" },
      { name: "촬영", desc: "매장, 진료 공간, 사람, 제품 사진과 영상을 촬영 부서가 찍습니다" },
      { name: "디자인", desc: "PC와 모바일에 맞는 반응형 화면을 디자인합니다" },
      {
        name: "개발",
        desc: "서버 렌더링으로 만들고 구조화 데이터를 넣습니다. AI 검색봇이 사이트에 들어올 수 있게 접근 설정을 엽니다",
      },
      { name: "오픈 뒤 점검", desc: "검색엔진 색인, 페이지 속도, AI 검색봇 접근 상태를 확인합니다" },
    ],
    hospital: "병원 홈페이지는 의료광고 규정 안에서 만듭니다. 진료과목, 의료진, 진료 시간은 사실 그대로 적습니다.",
  },
  links: {
    title: "같이 맡길 수\n있는 일",
    items: [
      {
        name: "검색·AI 노출",
        desc: "새로 만든 홈페이지가 네이버·구글 검색과 AI 답변에 나오는지 재고 고칩니다",
        hrefs: ["/search-ai"],
      },
      {
        name: "숏폼·촬영",
        desc: "113곳의 숏폼을 360편 넘게 만들었습니다. 촬영한 영상과 사진을 홈페이지에 넣습니다",
        hrefs: ["/shortform"],
      },
      {
        name: "네이버·메타·구글 광고",
        desc: "만든 홈페이지를 광고 도착 페이지로 씁니다",
        hrefs: ["/naver-marketing", "/meta-ads", "/google-ads"],
      },
    ],
  },
  records: {
    title: "홈페이지\n30곳 넘게",
    lede: "병원, 치과, 한의원, 안과, 법률, 컨설팅, 교육, 헬스 분야의 웹사이트 제작을 맡았습니다. 업체 이름은 쓰지 않았습니다.",
    items: [
      {
        industry: "치과",
        work: "홈페이지를 4개 언어로 만들고 AI 크롤러 15종의 접근을 열었습니다",
        href: "/guide/hospital-marketing-cost",
      },
      {
        industry: "치과",
        work: "홈페이지를 새로 만들면서 AI 안내 파일을 팩트시트형으로 바꾼 51일 기록",
        href: "/guide/case-dental-llms-factsheet",
      },
      {
        industry: "비뇨의학과",
        work: "ChatGPT에 나오지 않던 원인이 이전 홈페이지의 방화벽이었습니다. 홈페이지를 고치는 데 약 2개월이 걸렸습니다",
        href: "/guide/case-urology-clinic",
      },
    ],
    // 치과(hp01)·한의원(hp15)·법률(hp07)·컨설팅(hp12)·헬스(hp09). 업종은 components/home/HomeWall 기준
    stills: ["hp01", "hp15", "hp07", "hp12", "hp09"].map((n) => ({ src: `/home/${n}-pc.jpg`, alt: ALT })),
    stillsWide: true,
  },
  receive: {
    title: "오픈 뒤 드리는\n숫자",
    metrics: [
      { name: "웹 건강도", desc: "AI와 검색엔진이 사이트를 읽어 갈 때 걸리는 문제가 얼마나 적은지" },
      { name: "색인 페이지 수", desc: "구글과 네이버에 등록된 페이지 수" },
      { name: "페이지 속도", desc: "PC와 모바일에서 첫 화면이 열리는 시간" },
      { name: "AI 검색봇 접근", desc: "주요 AI 검색봇이 사이트에 들어올 수 있는지" },
      { name: "문의", desc: "홈페이지로 들어온 문의 건수" },
    ],
    aside:
      "웹 건강도는 [검색·AI 노출 보고서](/business/insights/weekly-report-sample)에 들어가는 지표와 같은 기준입니다.",
  },
  faq: [
    {
      q: "홈페이지 제작 비용은 얼마인가요?",
      a: "페이지 수, 언어 수, 측정 설계 포함 여부에 따라 달라서 미팅에서 이야기를 듣고 견적을 드립니다. 만든 뒤 검색·광고 운영까지 맡기시면 대행료는 월 300만 원부터이고 최소 3개월입니다.",
    },
    {
      q: "지금 홈페이지 리뉴얼도 되나요?",
      a: "네. 지금 홈페이지가 AI 검색봇을 막고 있지 않은지, 구조화 데이터가 들어가 있는지부터 확인합니다. 고칠지 새로 만들지는 그 결과를 보고 정합니다.",
    },
    {
      q: "홈페이지 제작 업체를 고를 때 무엇을 보면 되나요?",
      a: "견적서에서 페이지 수, 언어 수, 측정 설계 포함 여부를 나눠서 확인하시면 됩니다. 디자인만 새로 하는 견적과 검색엔진·AI가 읽는 구조까지 만드는 견적은 금액이 다릅니다.",
    },
    {
      q: "사진과 영상도 찍어 주나요?",
      a: "네. 촬영 부서가 찍습니다.",
    },
    {
      q: "병원 홈페이지도 만드나요?",
      a: "네. 병원, 치과, 한의원, 안과 홈페이지를 만들었습니다. 병원은 [병원 통합 마케팅 페이지](/medical-geo-agency)에서 따로 안내합니다.",
    },
  ],
  contact: {
    title: "홈페이지 제작\n상담",
    lede: "회사 이름, 지금 홈페이지 주소(있다면), 필요한 페이지를 남겨 주시면 홈페이지 개발 부서가 회사 메일로 연락드리겠습니다.",
  },
}

export default function Page() {
  return <MediaPage data={DATA} />
}
