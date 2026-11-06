// 홈 '마케팅 설계도'(A안 색 챕터) 글과 자료. 대표 결정 2026-11-03 밤: 메인에는 철학 대신 설계도.
// 글은 작가 원고(27.자사브랜딩/20_글/원고/2026-11-03_홈_마케팅설계도_원고.md) 그대로이고,
// 시안은 09_전체리브랜딩_2026-11/시안_개발세션_2026-11-03/A.html이다.
// 지킬 것: 확인된 숫자만(2016년, 광고주 7,000여 곳, 홈페이지 30곳 넘게, 숏폼 360편 넘게).
// "AI에 언급되면 재검색한다"는 흐름으로만 보여 주고 퍼센트는 붙이지 않는다. '직접·전담 부서·외주 없이' 강조 없음.

/** 첫 줄. 작가 원고 가안(대표 말씀 그대로). 나·다·라안은 원고 1절에 있다 */
export const HOME_H1 = ["빈틈 없는 마케팅을", "설계하고 실행합니다"]

export const HOME_SUB =
  "인플루언서 섭외와 촬영, 광고 소재, GEO와 SEO, 홈페이지까지 위즈더플래닝이 맡아 한 흐름으로 진행합니다. 2016년에 시작해 광고주 7,000여 곳과 일했습니다."

export type BlueprintStep = {
  n: 1 | 2 | 3 | 4 | 5
  /** 지도 칸과 챕터 머리에 쓰는 이름 */
  name: string
  title: string
  desc: string
  channels: string[]
  links: { label: string; href: string }[]
  /** 실제 자료만. 3·4단계는 쓸 캡처가 없어 글자만으로 세운다(디자이너와 합의) */
  img: { src: string; w: number; h: number; alt: string } | null
}

export const BLUEPRINT_STEPS: BlueprintStep[] = [
  {
    n: 1,
    name: "알리기",
    title: "브랜드를 처음 보게 합니다",
    desc: "연예인, 메가 인플루언서, 마이크로 인플루언서를 섭외해 인스타그램 릴스, 유튜브, 틱톡에 콘텐츠를 올립니다. 중국 체험단을 꾸리고, 촬영한 영상과 이미지로 광고 소재를 만들어 메타·구글·네이버 광고를 운영합니다.",
    channels: ["인플루언서", "릴스", "유튜브", "틱톡", "중국 체험단", "광고 소재", "촬영"],
    links: [
      { label: "인플루언서 섭외", href: "/influencer" },
      { label: "숏폼·촬영", href: "/shortform" },
      { label: "메타 광고", href: "/meta-ads" },
      { label: "구글·유튜브 광고", href: "/google-ads" },
      { label: "네이버 광고", href: "/naver-marketing" },
    ],
    img: { src: "/home/g-beer.jpg", w: 800, h: 1198, alt: "위즈더플래닝 촬영 현장: 잔에 토치로 불을 붙이는 장면" },
  },
  {
    n: 2,
    name: "AI 언급(GEO)",
    title: "AI 답변에 브랜드가 나오게 합니다",
    desc: "고객이 ChatGPT, 네이버 AI, 제미나이에 물을 질문을 정하고, 답변에 브랜드가 나오는지 같은 방법으로 반복해 잽니다. 나오지 않으면 그 이유를 찾아 사이트와 바깥 정보를 고칩니다.",
    channels: ["GEO", "ChatGPT", "네이버 AI", "제미나이"],
    links: [{ label: "검색·AI 노출", href: "/search-ai" }],
    img: { src: "/home/proof-prompts-main.jpg", w: 1200, h: 842, alt: "위즈더플래닝 AI 노출 현황 화면" },
  },
  {
    n: 3,
    name: "재검색",
    title: "브랜드 이름을 검색할 때를 준비합니다",
    desc: "인플루언서 콘텐츠나 광고, AI 답변에서 브랜드를 본 사람이 네이버와 구글에 브랜드 이름이나 제품명을 검색했을 때 무엇이 나오는지 확인합니다. 그 검색 결과에 나올 공식 정보와 콘텐츠를 정리합니다.",
    channels: ["네이버", "구글"],
    links: [{ label: "검색·AI 노출", href: "/search-ai" }],
    img: null,
  },
  {
    n: 4,
    name: "검색 결과 콘텐츠(SEO)",
    title: "검색 결과에 보일 콘텐츠를 올립니다",
    desc: "브랜드 이름, 제품명, 업종 검색어로 보일 글과 영상을 네이버 블로그와 홈페이지에 올립니다. 검색 순위를 확인하고 고칩니다.",
    channels: ["SEO", "네이버 블로그", "홈페이지"],
    links: [{ label: "검색·AI 노출", href: "/search-ai" }],
    img: null,
  },
  {
    n: 5,
    name: "홈페이지·랜딩",
    title: "들어온 사람이 문의하게 합니다",
    desc: "광고, 검색, AI 답변에서 들어온 사람이 도착할 홈페이지와 랜딩 페이지를 만듭니다. 문의 버튼과 전환 측정을 넣고, 어디서 들어와 문의했는지 숫자로 정리해 다음 캠페인 계획에 씁니다.",
    channels: ["홈페이지", "랜딩 페이지", "전환 측정"],
    links: [{ label: "홈페이지 제작", href: "/website" }],
    img: { src: "/home/hp14_crop.jpg", w: 1200, h: 680, alt: "위즈더플래닝이 만든 고객사 홈페이지 화면" },
  },
]

export const HOME_WHY = {
  title: ["하나로 이어서", "진행하는 이유"],
  body: "마케팅을 하다 보면 인플루언서는 섭외 회사에, 광고는 광고 회사에, 홈페이지는 제작 회사에 나눠 맡기게 됩니다. 그러면 인플루언서 콘텐츠로 브랜드를 알게 된 사람이 네이버나 구글에서 이름을 찾았을 때 볼 게 없고, 광고를 눌러 들어온 페이지에서 문의할 곳을 못 찾는 일이 생깁니다. 위즈더플래닝은 연예인부터 메가·마이크로 인플루언서, 인스타 릴스와 유튜브, 틱톡, 중국 체험단까지 섭외하고, 촬영과 광고 소재, GEO와 SEO, 홈페이지까지 맡습니다. 그래서 브랜드를 처음 알리는 단계부터 다시 검색하고 문의하는 단계까지 하나의 설계로 이어서 진행합니다.",
}

export const HOME_RECORDS_LEAD = "홈페이지 30곳 넘게, 숏폼 360편 넘게 기록에 있습니다. 업종과 맡은 일만 적습니다."

/** 일한 기록 벽. 줄 높이를 바꿔 가며 고르지 않게 쌓는다.
 *  상호·상표가 보이는 캡처와 얼굴이 있는 캡처는 뺐다(디자이너 점검 2026-11-04).
 *  hp14-cut·hp04-cut은 머리줄과 상호 칩을 잘라 낸 판, salon_crop은 상자 로고를 잘라 낸 판이다 */
export const HOME_WALL: { file: string; w: number; h: number; what: string }[] = [
  { file: "hp14-cut", w: 3, h: 300, what: "홈페이지" },
  { file: "strip-1", w: 1, h: 300, what: "숏폼" },
  { file: "hp04-cut", w: 2, h: 300, what: "홈페이지" },
  { file: "strip-4", w: 1, h: 260, what: "숏폼" },
  { file: "salon_crop", w: 3, h: 260, what: "촬영" },
  { file: "strip-2", w: 1, h: 260, what: "숏폼" },
  { file: "strip-3", w: 1, h: 260, what: "숏폼" },
]
