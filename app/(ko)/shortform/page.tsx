import type { Metadata } from "next"
import MediaPage, { type MediaPageData } from "@/components/media/MediaPage"

// 숏폼·촬영 매체 페이지. 틀은 components/media/MediaPage(사이트구성안 v1 §05),
// 문구는 20_글/원고/2026-11-03_shortform_매체페이지_원고.md 그대로. 근거는 원고 상단 주석에 있다.
// 2차 원고(2026-11-03) 반영. 비유·대비 문장을 빼고 확인된 사실만 평서문으로 바꿨다
// - 360편·113곳: wizstudio 기록(364편, 113곳). '40여 업체'는 일부 집계라 쓰지 않는다
// - 스튜디오 촬영 여부·원본 제공 조건 문답은 대표 답이 올 때까지 뺐다
// - 첫 화면과 일한 기록의 영상 칸은 아직 영상이 없어 사내 촬영 사진(사용 동의 받음)으로 둔다. 소리 없는 세로 영상이 오면 바꾼다
// - 4절의 '각 광고 페이지'와 '홈페이지 제작 페이지'는 lib/ad-services.ts의 주소로 걸었다
// - 부서 이름 '촬영 부서·제작 부서'는 구성안 §09-2(대표 확인 전)
// - 2026-11-06 색인 허용(리뉴얼 배포 뒤 총괄 요청). 사이트맵·llms.txt에 들어 있다
const TITLE = "숏폼 제작: 쇼츠·릴스 기획, 촬영, 편집, 광고 소재까지 | 위즈더플래닝"
const DESC =
  "위즈더플래닝 촬영 부서와 제작 부서가 기업·병원의 숏폼을 기획하고 찍고 편집합니다. 지금까지 113곳의 숏폼을 360편 넘게 만들었고, 만든 영상은 메타·구글 광고 소재로도 씁니다."
// 첫 화면은 촬영 현장 느낌의 생성 이미지로 둔다(총괄 2026-11-03). 음식 장면은 아래 일한 기록에만. 실제 세로 영상이 오면 바꾼다
const HERO_IMG = "/home/gen_hands-filming.jpg"
const HERO_ALT = ""
const ALT = "위즈더플래닝 숏폼 촬영 예시"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/shortform" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: "https://wiztheplanning.com/shortform",
    siteName: "위즈더플래닝",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/covers/og-shortform.jpg", width: 1200, height: 630, alt: TITLE }],
  },
}

const DATA: MediaPageData = {
  source: "shortform",
  hero: {
    title: "쇼츠·릴스를 기획하고\n찍고 편집합니다",
    lede: "지금까지 113곳의 숏폼을 360편 넘게 만들었습니다. 만든 영상은 브랜드 계정에 올리고 광고 소재로도 씁니다.",
    image: { src: HERO_IMG, alt: HERO_ALT, shape: "tall" },
  },
  suits: {
    title: "이런 회사에\n맞습니다",
    lede: "기업과 병원의 숏폼 대행을 맡습니다.",
    good: [
      "브랜드 계정에 올릴 영상을 만들 사람이 없는 회사",
      "메타·유튜브 광고에 쓸 새 영상이 계속 필요한 회사",
      "매장, 진료 공간, 제품을 영상으로 보여 줘야 하는 회사",
    ],
    better: [
      "다른 사람의 추천이 필요하다면 인플루언서 섭외가 맞습니다",
      "고객이 브랜드 이름을 검색해서 찾아온다면 검색·AI 노출부터 보시는 게 맞습니다",
      "판매 숫자까지 확인하려면 광고 운영과 같이 계획해야 합니다. 계정에 올린 영상만으로는 판매 숫자를 재기 어렵습니다",
    ],
  },
  work: {
    title: "촬영 부서와 제작 부서가 하는 일",
    lede: "숏폼 제작 대행은 이 순서로 진행합니다.",
    steps: [
      { name: "기획", desc: "영상 주제와 올릴 곳(브랜드 계정, 광고)을 담당자님과 정합니다" },
      { name: "장면 정리", desc: "찍을 장면과 대사를 적어 보내 드리고, 확인을 받은 뒤 촬영 날짜를 잡습니다" },
      {
        name: "촬영",
        desc: "촬영 부서가 매장, 사무실, 진료 공간에서 제품과 사람을 찍습니다. 드론 촬영도 합니다",
      },
      {
        name: "편집",
        desc: "제작 부서가 자막, 음악, 길이를 계정용과 광고용으로 나눠 편집합니다. 쇼츠 제작과 릴스 제작은 플랫폼별 길이와 화면에 맞춰 따로 편집합니다",
      },
      { name: "결과 정리", desc: "올린 영상의 숫자를 정리하고, 광고 소재로 쓸 영상을 고릅니다" },
    ],
    hospital:
      "병원 숏폼은 의료광고 규정 안에서 만듭니다. 심의가 필요한 문구는 심의 기준에 맞추고, 치료 전후 비교나 환자 후기 형식은 쓰지 않습니다.",
  },
  links: {
    title: "같이 맡길 수 있는 일",
    items: [
      {
        name: "메타·구글·유튜브 광고",
        desc: "만든 숏폼을 광고 소재로 씁니다",
        hrefs: ["/meta-ads", "/google-ads"],
      },
      {
        name: "인플루언서 섭외",
        desc: "인플루언서 캠페인과 같은 주제로 브랜드 영상을 찍습니다",
        hrefs: ["/influencer"],
      },
      {
        name: "홈페이지·검색",
        desc: "촬영한 영상과 사진을 홈페이지와 검색 콘텐츠에 넣습니다. 홈페이지는 지금까지 30곳 넘게 만들었습니다",
        hrefs: ["/website", "/search-ai"],
      },
    ],
  },
  records: {
    title: "숏폼 360편 넘게,\n113곳",
    lede: "뷰티, 헬스, F&B, 교육 브랜드의 영상이 많습니다. 업체 이름은 쓰지 않았습니다.",
    // 영상 칸 자리. 업종이 겹치지 않게 고른 세로 영상이 오면 바꾼다
    stills: [1, 2, 3, 4, 5].map((n) => ({ src: `/home/strip-${n}.jpg`, alt: ALT })),
  },
  receive: {
    title: "보고서에 들어가는\n숫자",
    metrics: [
      { name: "조회", desc: "영상마다 재생된 횟수" },
      { name: "끝까지 본 비율", desc: "영상을 끝까지 본 비율과 중간에 넘긴 시점" },
      { name: "저장·공유", desc: "영상을 저장하거나 다른 사람에게 보낸 수" },
      { name: "프로필 방문", desc: "영상을 보고 브랜드 계정에 들어온 수" },
      { name: "광고로 쓴 영상", desc: "광고 소재로 쓴 영상의 클릭률과 문의 수" },
    ],
    aside: "숫자는 영상별로 정리해 드립니다.",
  },
  faq: [
    {
      q: "비용은 얼마인가요?",
      a: "편수, 촬영 장소와 횟수, 광고 소재로 쓰는지에 따라 달라집니다. 미팅에서 이야기를 듣고 제안서로 드리겠습니다.",
    },
    {
      q: "숏폼 제작만 따로 맡길 수 있나요?",
      a: "네. 숏폼 제작만 맡기셔도 됩니다.",
    },
    {
      q: "출연자는 누가 하나요?",
      a: "직원분이 직접 나오셔도 됩니다. 출연자가 필요하면 인플루언서 섭외 부서가 찾습니다.",
    },
    {
      q: "수정은 몇 번까지 되나요?",
      a: "수정 횟수와 일정은 계약서에 적습니다.",
    },
  ],
  contact: {
    title: "숏폼 제작 상담",
    lede: "회사 이름, 알리고 싶은 제품, 영상을 올릴 곳을 남겨 주시면 촬영 부서가 회사 메일로 연락드리겠습니다.",
  },
}

export default function Page() {
  return <MediaPage data={DATA} />
}
