import type { Metadata } from "next"
import MediaPage, { type MediaPageData } from "@/components/media/MediaPage"

// 구글·유튜브 광고 매체 페이지. 1차 원고: 20_글/원고/2026-11-03_google-ads_매체페이지_원고.md(2026-11-03). 틀은 components/media/MediaPage
// - 공개한 구글·유튜브 사례 글이 없어 일한 기록은 한 일만 적었다(원고 그대로)
// - layout.tsx 구조화 데이터의 '검색·디스플레이·PMAX 캠페인 1,000건 이상'은 근거를 못 찾아 쓰지 않았다(원고 [확인])
// - 4절의 '홈페이지 제작 페이지'는 lib/ad-services.ts의 주소로 걸었다
// - 부서 이름 '광고 부서'는 구성안 §09-2(대표 확인 전)
// - 첫 화면 사진은 실제 운영 화면이 오기 전까지 자리만 둔다. 운영 화면이 아니라서 alt는 비웠다
// - 대표 승인 전이라 noindex. 사이트맵·llms.txt에 넣지 않았다
const TITLE = "구글 광고 대행사: 구글 검색 광고와 유튜브 광고 운영 | 위즈더플래닝"
const DESC =
  "위즈더플래닝 광고 부서가 구글 광고 대행과 유튜브 광고 대행을 맡아 구글 검색 광고와 유튜브 동영상 광고를 세팅하고 운영합니다. 유튜브 광고 영상은 촬영 부서와 제작 부서가 만듭니다. 대행료는 월 300만 원부터입니다."
const HERO_IMG = "/home/m-google.jpg"
const HERO_ALT = ""

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    "구글 광고 대행사",
    "구글 광고 대행",
    "유튜브 광고 대행",
    "유튜브 광고 대행사",
    "구글 애즈 대행",
    "유튜브 광고 비용",
  ],
  alternates: { canonical: "/google-ads" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://wiztheplanning.com/google-ads",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
    type: "website",
    images: [{ url: HERO_IMG, width: 1200, height: 1489, alt: HERO_ALT }],
  },
}

const DATA: MediaPageData = {
  source: "google-ads",
  hero: {
    title: "구글 검색 광고와 유튜브 광고를\n세팅하고 운영합니다",
    lede: "구글 광고 대행을 맡기시면 유튜브 광고 영상은 저희 촬영 부서와 제작 부서가 만듭니다. 대행료는 월 300만 원부터이고 최소 3개월입니다.",
    image: { src: HERO_IMG, alt: HERO_ALT, shape: "square" },
  },
  suits: {
    title: "이런 회사에\n맞습니다",
    good: [
      "고객이 구글에서 제품이나 서비스를 검색하는 회사",
      "해외 고객처럼 네이버 대신 구글로 검색하는 고객이 있는 회사",
      "유튜브에서 영상으로 제품이나 공간을 보여 줘야 하는 회사",
    ],
    better: [
      "국내 고객이 주로 네이버에서 검색한다면 네이버 광고를 먼저 보시는 게 맞습니다",
      "나이, 관심사로 고객을 나눠 짧은 기간에 알려야 한다면 메타 광고가 맞습니다",
      "광고비를 줄여도 검색에서 계속 보이게 하려면 검색·AI 노출(SEO)을 같이 진행합니다",
    ],
  },
  work: {
    title: "광고 부서가\n하는 일",
    lede: "구글 애즈 대행과 유튜브 광고 대행은 이 순서로 진행합니다.",
    steps: [
      { name: "목표 정하기", desc: "클릭, 문의, 구매 가운데 무엇으로 성과를 볼지 담당자님과 정합니다" },
      { name: "세팅", desc: "광고 계정, 전환 측정 코드, 검색어, 타깃, 예산을 세팅합니다" },
      { name: "소재 제작", desc: "검색 광고 문구를 쓰고, 유튜브 광고 영상은 촬영 부서와 제작 부서가 만듭니다" },
      { name: "운영", desc: "검색어와 광고별 숫자를 보고 예산을 옮기고 문구와 영상을 바꿉니다" },
      { name: "보고", desc: "노출, 클릭, 비용, 문의 숫자를 정리해 보고합니다" },
    ],
  },
  links: {
    title: "같이 맡길 수\n있는 일",
    items: [
      {
        name: "숏폼·촬영",
        desc: "113곳의 숏폼을 360편 넘게 만들었습니다. 만든 영상을 유튜브 광고 소재로 씁니다",
        hrefs: ["/shortform"],
      },
      {
        name: "검색·AI 노출",
        desc: "광고로 들어오는 검색어와 SEO에서 다룰 검색어를 같이 봅니다",
        hrefs: ["/search-ai"],
      },
      {
        name: "홈페이지 제작",
        desc: "광고가 도착할 페이지를 만들고 고칩니다. 홈페이지는 지금까지 30곳 넘게 만들었습니다",
        hrefs: ["/website"],
      },
    ],
  },
  records: {
    title: "해 온\n일",
    lede: "공개한 사례 글이 아직 없어서 한 일만 적었습니다. 업체 이름은 쓰지 않습니다.",
    done: ["구글 검색 광고 운영", "유튜브 동영상 광고 운영", "광고 소재 영상 촬영과 편집"],
  },
  receive: {
    title: "보고서에 들어가는\n숫자",
    metrics: [
      { name: "노출", desc: "광고가 보인 횟수" },
      { name: "클릭·클릭률", desc: "광고를 누른 횟수와 노출 대비 비율" },
      { name: "비용·클릭당 비용", desc: "기간 동안 쓴 금액과 클릭 한 번에 든 금액" },
      { name: "문의", desc: "광고로 들어온 문의 건수와 1건당 비용" },
      { name: "검색어", desc: "광고가 보인 실제 검색어와 검색어별 숫자" },
    ],
    aside: "캠페인별, 광고별로 숫자를 나눠 드립니다.",
  },
  faq: [
    {
      q: "비용은 얼마인가요?",
      a: "대행료는 월 300만 원부터이고 최소 3개월입니다. 광고비는 대행료와 별도로 광고주가 매체에 직접 집행합니다.",
    },
    {
      q: "유튜브 광고 비용은 얼마나 드나요?",
      a: "광고비는 광고주가 하루 예산과 기간을 정하고 매체에 직접 집행합니다. 저희 대행료는 월 300만 원부터이고 최소 3개월입니다. 광고 영상을 새로 만들면 제작비는 편수와 촬영 조건에 따라 따로 견적을 냅니다.",
    },
    {
      q: "유튜브 광고 영상도 만들어 주나요?",
      a: "네. 촬영 부서와 제작 부서가 만듭니다. 이미 만든 영상이 있으면 그 영상으로 시작해도 됩니다.",
    },
    {
      q: "네이버 광고와 같이 맡길 수 있나요?",
      a: "네. [네이버 광고](/naver-marketing)도 운영합니다.",
    },
    {
      q: "병원 광고도 하나요?",
      a: "네. 병원 광고는 의료광고 규정 안에서 만들고, 심의가 필요한 문구는 심의 기준에 맞춥니다. 병원은 [병원 통합 마케팅 페이지](/medical-geo-agency)에서 따로 안내합니다.",
    },
  ],
  contact: {
    title: "구글·유튜브 광고\n상담",
    lede: "회사 이름, 지금 하고 있는 광고, 월 광고비를 남겨 주시면 광고 부서가 회사 메일로 연락드리겠습니다.",
  },
}

export default function Page() {
  return <MediaPage data={DATA} />
}
