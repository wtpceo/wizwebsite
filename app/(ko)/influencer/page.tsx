import type { Metadata } from "next"
import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"
import InfluencerContactForm from "@/components/influencer/InfluencerContactForm"
import KakaoChatButton from "@/components/influencer/KakaoChatButton"
import PickNeedLink from "@/components/influencer/PickNeedLink"
import StickyCta from "@/components/influencer/StickyCta"

// IMC·인플루언서 섭외 라인 소개. 기획안: 02.비즈니스/27.자사브랜딩/07_IMC재편_2026-11/IMC재편_기획안.md
// 글은 총괄 4안 원고(20_글/원고/2026-11-03_influencer_4안_총괄원고.md). 근거: 07_IMC재편_2026-11/레퍼런스/시장수요_조사_2026-11-03.md
// - 핵심 약속: 후보 리스트를 영업일 3일 안에 무료로 받고, 고른 뒤에 비용이 정해진다(2026-11-03 대표 결정)
// - 섭외 라인에는 "외주 없음·인하우스", "매주", 보장·최고 표현, 부정 나열을 쓰지 않는다. 숫자·사례·후기·가격도 없다
// - 월 총예산 기준(1,000만 원)은 화면과 메타 설명 어디에도 쓰지 않는다. 폼의 예산 구간 선택지만 남긴다(2026-11-03 대표 지시)
// - 후보 리스트 예시 화면은 실존 인물·채널 없이 '크리에이터 A·B·C', 숫자 칸은 흐리게 가린다
// - 생성 이미지는 꾸밈용이라 alt를 비운다. 숏폼 장면 줄은 사내 촬영본(대표 확인, 동의 받음)
// - 배포 준비(2026-11-03): 색인 허용, 사이트맵·llms.txt 등록, 공유 이미지는 첫 화면 사진을 1200×630으로 자른 것
const TITLE = "인플루언서 섭외 대행: 후보 리스트 무료, 공구·숏폼·중국 관광객까지 | 위즈더플래닝"
const DESC =
  "브리프를 남기시면 영업일 3일 안에 인플루언서 후보 리스트를 무료로 드립니다. 브랜드 캠페인, 공동구매, 중국 관광객 마케팅, 숏폼 제작까지 위즈더플래닝이 진행합니다."
const URL = "https://wiztheplanning.com/influencer"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/influencer" },
  openGraph: {
    title: "우리 제품에 맞는 인플루언서, 후보부터 받아 보고 정하세요",
    description: DESC,
    url: URL,
    images: [{ url: "/covers/influencer.jpg", width: 1200, height: 630 }],
    type: "website",
  },
}

// 사내 촬영본 다섯 장. 첫 칸만 움직인다. alt 형식은 작가가 정했다
const STRIP = [
  ["strip-1", "토치로 잔에 훈연을 입히는 장면"],
  ["strip-2", "칼로 고기를 써는 장면"],
  ["strip-4", "젓가락으로 회를 집는 장면"],
  ["strip-3", "나무 받침에 올린 찜 요리"],
  ["strip-5", "가리비와 회를 담은 접시"],
]

// 목적별 상품 네 개. need 값은 폼의 '필요한 것' 선택지와 같아야 한다
const PRODUCTS = [
  {
    ask: "브랜드를 알리고 싶어요",
    need: "브랜드 캠페인 섭외",
    desc: "셀럽부터 유튜버, 인스타그램 크리에이터까지 브랜드 결에 맞는 사람을 섭외합니다. 저희 팀이 찍은 숏폼을 붙이고, 반응 좋은 콘텐츠는 광고 소재로 다시 씁니다.",
  },
  {
    ask: "바로 팔아야 해요",
    need: "공구·판매형 섭외",
    desc: "우리 제품을 잘 팔 인플루언서를 찾아 공동구매를 엽니다. 누가 얼마나 팔았는지 인플루언서별로 정리해 드려서 다음 판매를 누구와 할지 정할 수 있습니다.",
  },
  {
    ask: "중국 관광객을 받고 싶어요",
    need: "중국 관광객 마케팅",
    desc: "샤오홍슈와 따종디엔핑에서 우리 매장·병원이 보이게 하고, 중국 인플루언서 체험단을 꾸려 방문 후기를 쌓습니다.",
  },
  {
    ask: "브랜드 계정에 올릴 영상이 필요해요",
    need: "숏폼 제작",
    desc: "섭외 없이 쇼츠·릴스만 맡기셔도 됩니다. 기획부터 촬영, 편집까지 저희 팀이 합니다.",
  },
]

// 후보 리스트 예시. 실존 인물·채널 없음, 숫자 칸은 자리만 두고 흐리게 가린다
const LIST_HEAD = ["채널", "최근 반응", "콘텐츠 결", "광고 이력", "고른 이유", "예상 단가대"]
const LIST_ROWS = [
  {
    who: "크리에이터 A",
    ch: "유튜브 · 리뷰",
    fit: "오래 써 보고 단점까지 말하는 긴 리뷰",
    ad: "있음, 광고 표시 지킴",
    why: "사기 전에 비교하는 시청자가 많아 설명이 필요한 제품에 맞습니다",
  },
  {
    who: "크리에이터 B",
    ch: "인스타그램 · 릴스",
    fit: "생활 속에 제품을 자연스럽게 넣는 짧은 영상",
    ad: "적음",
    why: "광고 티가 덜 나서 처음 알리는 캠페인에 좋습니다",
  },
  {
    who: "크리에이터 C",
    ch: "인스타그램 · 공구",
    fit: "쓰기 전후를 보여 주고 링크로 판매",
    ad: "공구 여러 번",
    why: "판매 이력이 있어 공구·판매형에 맞습니다",
  },
]

const SECOND_USE = [
  ["2차 활용 계약", "광고에 다시 쓸 수 있는 범위와 기간을 섭외할 때 계약서에 같이 넣습니다"],
  ["광고 운영", "반응이 좋은 콘텐츠는 메타·구글 광고로 돌리고 결과를 같이 봅니다"],
  ["결과 정리", "끝나면 콘텐츠별 숫자를 모아 보고드립니다"],
  ["광고 표시", "공정위 추천·보증 심사지침에 맞게 표시합니다"],
]

const STEPS = [
  ["브리프", "제품, 알리고 싶은 사람, 기간과 예산"],
  ["후보 리스트", "영업일 3일 안에 무료로"],
  ["섭외·계약", "고르신 사람과 조건 맞추기, 2차 활용 포함"],
  ["촬영·업로드·광고", "검수하고 올린 뒤 반응 좋은 건 광고로"],
]

const FAQ = [
  {
    q: "후보 리스트는 정말 무료인가요?",
    a: "네. 리스트를 보고 진행하지 않으셔도 비용은 없습니다. 고르신 사람과 조건이 정해지면 그때 견적을 드립니다.",
  },
  {
    q: "비용은 어느 정도 생각해야 하나요?",
    a: "누구를, 몇 명, 어떤 채널에서 쓰느냐에 따라 차이가 큽니다. 리스트에 사람마다 예상 단가대를 같이 적어 드리니 그걸 보고 정하시면 됩니다.",
  },
  {
    q: "원하는 인플루언서를 지정할 수 있나요?",
    a: "네, 말씀하신 분부터 연락해 보겠습니다. 일정이나 조건이 안 맞으면 비슷한 사람들이 보는 다른 후보를 같이 드릴게요.",
  },
  {
    q: "공구는 어떻게 진행되나요?",
    a: "제품과 목표 판매량을 듣고 잘 맞을 인플루언서를 찾아 공구 조건을 맞춥니다. 수수료 방식은 인플루언서와 제품마다 달라서 리스트를 드릴 때 같이 안내드리겠습니다.",
  },
  {
    q: "중국 관광객 마케팅은 어떤 곳에 맞나요?",
    a: "중국 관광객이 실제로 오는 지역의 매장, 병원, 뷰티 업종에 잘 맞습니다. 위치와 업종을 알려 주시면 해볼 만한지부터 말씀드리겠습니다.",
  },
  {
    q: "숏폼만 맡겨도 되나요?",
    a: "됩니다. 섭외 없이 브랜드 계정에 올릴 쇼츠·릴스만 찍어 드립니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

// 시안 기준: 본문 폭 1200, 좌우 여백 데스크톱 32 / 모바일 20
const wrap = "mx-auto max-w-[1200px] px-5 md:px-8"
const sec = "py-[72px] lg:py-[128px]"
const h2 = "text-[29px] font-extrabold leading-[1.2] tracking-[-0.045em] text-[#020817] md:text-[38px] xl:text-[46px]"
const body = "text-[16.5px] leading-[1.7] text-[#1e293b] md:text-lg"
// 화면 폭 1200을 넘으면 본문 왼쪽 선에 맞춘다(장면 줄·문의 사진 글)
const alignLeft = "max(32px,calc((100vw-1200px)/2+32px))"

// 예시 화면의 가린 숫자. 실제 값이 아니라 자리만 보여 준다
function Hidden({ w }: { w: string }) {
  return (
    <span className="inline-block h-[1.1em] rounded bg-slate-300 align-middle blur-[1.5px]" style={{ width: w }} aria-hidden />
  )
}

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-white text-base leading-[1.7] tracking-[-0.01em] text-[#1e293b] [font-variant-numeric:tabular-nums] [word-break:keep-all] md:text-[17px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      {/* 첫 화면: 사진이 이끈다. 데스크톱은 사진 위 왼쪽 글, 모바일은 사진 아래 글.
          데스크톱 높이는 화면 높이에서 헤더(64)와 장면 줄이 살짝 보일 만큼(72)을 뺀다.
          글 묶음은 위에서 40~45% 지점에 오게 올리고, 왼쪽 선은 헤더 로고와 같은 container에 맞춘다(2026-11-03 대표 지시) */}
      <section className="relative overflow-hidden bg-[#070b14] pt-[340px] text-white md:h-[calc(100svh-136px)] md:min-h-[600px] md:pt-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/influencer/hero.jpg"
          alt=""
          className="absolute inset-x-0 top-0 h-[420px] w-full object-cover object-[70%_top] md:inset-0 md:h-full md:object-right"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,20,0)_0,rgba(7,11,20,.2)_220px,#070b14_400px)] md:bg-[linear-gradient(90deg,rgba(7,11,20,.94)_0%,rgba(7,11,20,.8)_42%,rgba(7,11,20,0)_72%)]">{/* 사진 위 글을 읽히게 하는 막(scrim). taste-skill-ignore */}</div>
        <div className="container relative flex flex-col pb-12 md:h-full md:justify-center md:pb-[12vh] md:pt-0">
          <h1 className="max-w-[900px] text-[28px] font-extrabold leading-[1.26] tracking-[-0.05em] md:text-[50px] md:leading-[1.14] xl:text-[62px]">
            우리 제품에 맞는 인플루언서,
            <br />
            후보부터 받아 보고 정하세요
          </h1>
          <p className="mt-5 max-w-[600px] text-base leading-[1.65] text-slate-200 md:mt-7 md:text-[19px]">
            브리프를 남겨 주시면 영업일 3일 안에 후보 리스트를 고른 이유와 함께 무료로 보내 드립니다. 비용은 마음에 드는 사람을 고른
            다음에 정해집니다.
          </p>
          <div className="mt-7 flex flex-col gap-3 md:mt-9 md:flex-row">
            <a
              id="hero-cta"
              href="#contact"
              className="inline-flex h-14 items-center justify-center whitespace-nowrap rounded-md bg-[#00e5a0] px-8 text-[17px] font-bold text-[#070b14] transition-[background-color,transform] hover:bg-[#3cf0bb] active:scale-[0.98]"
            >
              후보 리스트 무료로 받기
            </a>
            <KakaoChatButton variant="ghost" label="카톡으로 먼저 물어보기" className="h-14 px-7 text-[17px]" />
          </div>
          {/* 확인된 사실만. /business 첫 화면 숫자와 같다(2016년 대행 시작, 함께한 광고주 7,000여 곳, 10/29 결정) */}
          <p className="mt-5 text-[14.5px] text-slate-300 md:mt-6 md:text-[15px]">2016년부터 광고 대행 · 함께한 광고주 7,000여 곳</p>
        </div>
      </section>

      {/* 숏폼 장면 줄. 사례로 읽히지 않게 업종·가게 이름·숫자를 붙이지 않는다. 설명 줄은 대표 지시로 뺐다 */}
      <section className="bg-[#070b14] pb-14 md:pb-[88px]">
        <ul
          style={{ ["--al" as string]: alignLeft }}
          className="flex gap-2.5 overflow-x-auto px-5 md:gap-4 md:overflow-hidden md:pl-[var(--al)] md:pr-0"
        >
          {STRIP.map(([file, scene], i) => (
            <li key={file} className="relative aspect-[9/16] flex-[0_0_200px] overflow-hidden rounded-[10px] bg-[#111] md:flex-[0_0_300px] md:rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/influencer/${file}.jpg`}
                alt={`위즈더플래닝 숏폼 촬영 예시: ${scene}`}
                className={`block h-full w-full object-cover ${i === 0 ? "inf-reel-push" : ""}`}
                loading={i < 3 ? "eager" : "lazy"}
              />
              {i === 0 && (
                <span aria-hidden className="absolute bottom-3.5 left-3.5 right-3.5 h-[3px] overflow-hidden rounded-sm bg-white/30">
                  <span className="inf-reel-bar block h-full w-full bg-white" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <main className="flex-1">
        {/* 01 목적별 상품: 페이지의 중심. 왼쪽 질문, 오른쪽 상품. 같은 크기 카드 줄을 쓰지 않는다 */}
        <section className={sec}>
          <div className={wrap}>
            <h2 className={h2}>
              하고 싶은 게 뭔지에 따라
              <br />
              섭외 방법이 달라집니다
            </h2>
            <ul className="mt-12 md:mt-16">
              {PRODUCTS.map((p) => (
                <li
                  key={p.need}
                  className="group grid gap-4 border-t-2 border-[#020817] py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-10"
                >
                  <p className="text-[24px] font-extrabold leading-[1.3] tracking-[-0.04em] text-[#020817] md:text-[34px]">“{p.ask}”</p>
                  <div>
                    <h3 className="text-[19px] font-extrabold tracking-[-0.02em] text-[#059669] md:text-[22px]">{p.need}</h3>
                    <p className="mt-2.5 max-w-[620px] text-base leading-[1.7] md:text-[17.5px]">{p.desc}</p>
                    <PickNeedLink
                      need={p.need}
                      className="mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-bold text-[#020817] underline-offset-4 hover:underline"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 02 후보 리스트 예시 화면: 이 페이지의 볼거리. 실제 리스트 문서처럼 보이게 HTML로 그린다 */}
        <section className={`${sec} bg-[#070b14] text-slate-300`}>
          <div className={wrap}>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
              <h2 className={`${h2} !text-white`}>
                후보 리스트에는
                <br />
                고른 이유가 같이 들어갑니다
              </h2>
              <p className="max-w-[560px] text-[16.5px] leading-[1.7] text-slate-300 md:text-lg">
                팔로워 숫자만 적힌 리스트는 고르기 어렵습니다. 저희 리스트에는 사람마다 왜 이 제품에 맞는지, 최근 콘텐츠 반응이 어떤지,
                광고를 해 본 적이 있는지를 같이 적어 드립니다.
              </p>
            </div>

            <figure className="mt-12 md:mt-16" data-ui>
              <div className="overflow-hidden rounded-xl bg-white text-[#020817]">
                {/* 문서 머리 */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#f3f5f7] px-5 py-4 md:px-7">
                  <p className="text-[15px] font-bold md:text-base">인플루언서 후보 리스트 · 브랜드 캠페인 섭외</p>
                  <p className="text-[13.5px] text-slate-600">위즈더플래닝 · 1차 후보 3명</p>
                </div>
                {/* 데스크톱: 표 */}
                <table className="hidden w-full border-collapse text-left text-[15px] lg:table">
                  <thead>
                    <tr className="border-b-2 border-[#020817]">
                      <th scope="col" className="px-7 pb-3 pt-5 font-bold">후보</th>
                      {LIST_HEAD.map((h) => (
                        <th key={h} scope="col" className="px-3 pb-3 pt-5 font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {LIST_ROWS.map((r) => (
                      <tr key={r.who} /* 예시 화면(data-ui) 속 표의 줄. taste-skill-ignore */ className="border-b border-slate-200 align-top last:border-0">
                        <th scope="row" className="whitespace-nowrap px-7 py-5 text-base font-extrabold">
                          {r.who}
                        </th>
                        <td className="whitespace-nowrap px-3 py-5 text-slate-700">{r.ch}</td>
                        <td className="px-3 py-5">
                          <Hidden w="64px" />
                        </td>
                        <td className="px-3 py-5 text-slate-700">{r.fit}</td>
                        <td className="whitespace-nowrap px-3 py-5 text-slate-700">{r.ad}</td>
                        <td className="max-w-[260px] px-3 py-5 font-semibold">{r.why}</td>
                        <td className="px-3 py-5 pr-7">
                          <Hidden w="88px" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* 모바일·태블릿: 후보별 묶음 */}
                <ul className="lg:hidden">
                  {LIST_ROWS.map((r) => (
                    <li key={r.who} /* 예시 화면(data-ui) 속 줄. taste-skill-ignore */ className="border-b border-slate-200 px-5 py-5 last:border-0 md:px-7">
                      <p className="text-[17px] font-extrabold">
                        {r.who} <span className="text-[14.5px] font-semibold text-slate-600">· {r.ch}</span>
                      </p>
                      <p className="mt-2 text-[15.5px] font-semibold leading-[1.6]">{r.why}</p>
                      <dl className="mt-3 grid grid-cols-[84px_1fr] gap-x-3 gap-y-1.5 text-[14.5px] text-slate-700">
                        <dt className="text-slate-500">콘텐츠 결</dt>
                        <dd>{r.fit}</dd>
                        <dt className="text-slate-500">광고 이력</dt>
                        <dd>{r.ad}</dd>
                        <dt className="text-slate-500">최근 반응</dt>
                        <dd>
                          <Hidden w="64px" />
                        </dd>
                        <dt className="text-slate-500">예상 단가대</dt>
                        <dd>
                          <Hidden w="88px" />
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </div>
              <figcaption className="mt-4 text-[14.5px] text-slate-400">
                예시 화면입니다. 실제 리스트는 브리프를 받은 뒤 브랜드마다 새로 만듭니다.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 03 누가 보나: 본부장 소개 */}
        <section className={`${sec} bg-[#f3f5f7]`}>
          <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-[72px]`}>
            <div>
              <h2 className={h2}>
                20년 넘게 사람을 찾아 온
                <br />
                본부장이 직접 봅니다
              </h2>
              <div className={`${body} mt-6 max-w-[560px]`}>
                <p>
                  리스트는 정문규 본부장이 마지막으로 봅니다. 엔터테인먼트 홍보와 광고 모델 캐스팅으로 시작해서 셀럽, 크리에이터,
                  전문가까지 20년 넘게 캠페인에 맞는 사람을 찾아 왔습니다.
                </p>
                <p className="mt-4">
                  숫자에 안 나오는 것도 봅니다. 예전에 문제가 된 적은 없는지, 약속한 날 올리는 사람인지, 광고 티가 너무 나서 반응이
                  꺾이지는 않는지요.
                </p>
              </div>
              <p className="mt-8 text-[20px] font-extrabold tracking-[-0.03em] text-[#020817] md:text-[22px]">
                정문규 본부장 <span className="font-semibold text-slate-600">· IMC·인플루언서 섭외</span>
              </p>
            </div>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/influencer/casting-desk.jpg" alt="" className="aspect-[3/2] w-full rounded-[10px] object-cover lg:aspect-[4/5]" loading="lazy" />
            </figure>
          </div>
        </section>

        {/* 04 광고로 한 번 더 쓴다: 세로 사진 하나 + 네 항목 */}
        <section className={sec}>
          <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-16 xl:grid-cols-[440px_1fr] xl:gap-[88px]`}>
            <figure className="max-w-[440px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/influencer/hands-filming.jpg" alt="" className="aspect-[4/5] w-full rounded-[10px] object-cover" loading="lazy" />
            </figure>
            <div>
              <h2 className={h2}>
                반응 좋은 콘텐츠는
                <br />
                광고로 한 번 더 씁니다
              </h2>
              <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                {SECOND_USE.map(([t, d]) => (
                  <div key={t}>
                    <h3 className="text-[19px] font-extrabold tracking-[-0.03em] text-[#020817] md:text-[22px]">{t}</h3>
                    <p className="mt-2 text-base leading-[1.65]">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 진행 순서: 가로 네 칸. 무료인 둘째 칸만 짙게 */}
        <section className={`${sec} bg-[#f3f5f7]`}>
          <div className={wrap}>
            <h2 className={h2}>진행 순서</h2>
            <ol className="mt-10 grid gap-2 md:mt-14 md:grid-cols-4">
              {STEPS.map(([t, d], i) => (
                <li key={t} className={`rounded-md px-5 py-6 md:px-6 md:py-8 ${i === 1 ? "bg-[#070b14] text-white" : "bg-white text-[#020817]"}`}>
                  <p className={`text-[19px] font-extrabold tracking-[-0.03em] md:text-[22px] ${i === 1 ? "text-[#00e5a0]" : ""}`}>{t}</p>
                  <p className={`mt-2 text-[15.5px] leading-[1.6] ${i === 1 ? "text-slate-200" : "text-slate-700"}`}>{d}</p>
                </li>
              ))}
            </ol>
            <p className={`${body} mt-8 max-w-[760px] md:mt-10`}>
              계약서를 쓰고 세금계산서로 정산합니다. 섭외한 인플루언서와 정한 조건도 계약서에 같이 적습니다.
            </p>
          </div>
        </section>

        {/* 06 FAQ */}
        <section className={sec}>
          <div className={`${wrap} grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-20`}>
            <h2 className={h2}>
              미팅 전에
              <br />
              많이 물어보시는 것
            </h2>
            <div className="grid gap-2">
              {FAQ.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-md bg-[#f3f5f7] px-5 md:px-6">
                  <summary className="relative cursor-pointer list-none py-5 pr-10 text-[17px] font-bold text-[#020817] md:text-lg [&::-webkit-details-marker]:hidden">
                    <h3 className="inline">{f.q}</h3>
                    <span aria-hidden className="absolute right-0 top-[15px] text-[26px] font-light text-slate-500 group-open:hidden">
                      +
                    </span>
                    <span aria-hidden className="absolute right-0 top-[15px] hidden text-[26px] font-light text-slate-500 group-open:inline">
                      –
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-base leading-[1.7]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 문의: 왼쪽 사진 위 제목과 카톡, 오른쪽 폼 */}
        <section id="contact" className="grid scroll-mt-16 bg-[#070b14] lg:grid-cols-2">
          <div className="relative min-h-[460px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/influencer/creator-back.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,11,20,.9),rgba(7,11,20,.1)_60%)]">{/* 사진 위 글을 읽히게 하는 막(scrim). taste-skill-ignore */}</div>
            <div
              style={{ ["--al" as string]: alignLeft }}
              className="absolute bottom-10 left-5 right-5 z-[1] max-w-[520px] text-white md:left-8 lg:bottom-[72px] lg:left-[var(--al)] lg:right-12"
            >
              <h2 className={`${h2} !text-white`}>
                후보 리스트
                <br />
                무료로 받기
              </h2>
              <p className="mt-4 text-[17px] leading-[1.65] text-slate-200">
                어떤 제품을 누구에게 알리고 싶은지 남겨 주세요. 영업일 3일 안에 회사 이메일로 후보 리스트를 보내 드리겠습니다.
              </p>
              <KakaoChatButton className="mt-7 h-[52px] w-full px-5 text-base md:w-auto" />
            </div>
          </div>
          <div className="bg-white px-5 py-12 md:px-8 lg:px-12 lg:py-[88px] xl:pl-16 xl:pr-[72px]">
            <InfluencerContactForm />
          </div>
        </section>
      </main>

      <Footer />
      <StickyCta />
    </div>
  )
}
