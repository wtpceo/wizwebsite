import type { Metadata } from "next"
import BizArticle, { CheckItem, BizContactNote } from "@/components/business/BizArticle"
import { share } from "@/lib/share-meta"

// 작가 세션 원고(2026-11-10, 27.자사브랜딩/20_글/원고/2026-11-10_IMC마케팅_뜻과전략수립.md). 그림은 디자이너 세션 제작.
// 주 키워드: IMC 마케팅
// 연관 검색어(네이버 'IMC' 월 1,790·'IMC마케팅' 월 980, 2026-09-19 자동완성): IMC 뜻 / IMC 전략 / IMC 전략 수립 /
//   IMC 전략 예시 / 통합 마케팅 커뮤니케이션 / IMC 대행사
// 숫자 출처: 결제 서비스 사례(/business/insights/case-payment-meta-ads), 정형외과 사례(/guide/case-orthopedic-chatgpt),
//   숏폼 113곳 360편(wizstudio reference_items 11/3), 1,000만 원·300만 원·3개월(대표 결정 로그 11/3)
// 출처 확인(11/10): 4A's 정의는 원문(1989 태스크포스 문서)이 공개돼 있지 않아 영국 개방대학교 OpenLearn 강의 자료의 인용으로 달았고
//   연도는 뺐다. 돈 슐츠 정의는 믿을 만한 공개 원문을 찾지 못해 문장을 뺐다.
const TITLE = "IMC 마케팅이란: 뜻과 전략 수립 5단계, 실무 예시까지"
const DESC =
  "IMC 마케팅은 광고, 인플루언서, 콘텐츠, 검색에 하나의 캠페인 메시지를 같게 가져가는 방식입니다. IMC 뜻과 전략 수립 5단계, 측정 기준을 정하는 법을 실무 기록으로 정리했습니다."
const DATE = "2026-11-10"
const PATH = "/business/insights/imc-marketing"
const URL = `https://wiztheplanning.com${PATH}`
const COVER = "/covers/business-imc-marketing.jpg"
const FIG = (n: number) => `/insights/imc-marketing/fig-${n}.jpg`
/** 디자이너 납품(11-10) 그림 세로 크기. 가로는 모두 1200이고 비율을 자르지 않는다 */
const FIG_H: Record<number, number> = { 1: 720, 2: 480, 3: 580, 4: 700, 5: 690, 6: 1060, 7: 790 }

export const metadata: Metadata = share({
  title: { absolute: `${TITLE} | 위즈더플래닝` },
  description: DESC,
  keywords: ["IMC 마케팅", "IMC 뜻", "IMC 전략", "IMC 전략 수립", "IMC 전략 예시", "통합 마케팅 커뮤니케이션", "IMC 대행사"],
  alternates: { canonical: PATH },
  openGraph: { images: [COVER], title: TITLE, description: DESC, url: URL, type: "article" },
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  image: `https://wiztheplanning.com${COVER}`,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

const COMPARE: [string, string, string][] = [
  ["맡는 범위", "정해진 매체의 광고 집행과 운영", "캠페인 기획, 섭외, 제작, 집행, 측정"],
  ["소재", "광고주가 주는 경우가 많음", "캠페인 메시지에 맞춰 기획하고 제작"],
  ["보고", "그 매체의 숫자", "채널을 합친 숫자와 문의·구매"],
]

const FAQ = [
  {
    q: "IMC 전략이란 무엇인가요?",
    a: "광고, 인플루언서, 콘텐츠, 검색 같은 채널을 하나의 캠페인 메시지로 묶어 운영하는 계획입니다. 채널마다 역할을 나누고 측정 기준을 하나로 맞추는 데까지가 IMC 전략에 들어갑니다.",
  },
  {
    q: "IMC와 통합 마케팅은 같은 말인가요?",
    a: "같은 뜻으로 씁니다. IMC는 통합 마케팅 커뮤니케이션(Integrated Marketing Communications)의 줄임말이고, 국내 실무에서는 통합 마케팅이라고 부르는 경우가 많습니다.",
  },
  {
    q: "IMC 전략 기획서에는 무엇이 들어가나요?",
    a: "상황 분석, 캠페인 메시지 한 줄, 채널별 역할, 소재 제작과 2차 활용 계획, 측정 기준이 들어갑니다. 위 5단계 순서대로 쓰면 빠지는 항목이 없습니다.",
  },
  {
    q: "예산이 크지 않은 회사도 IMC를 할 수 있나요?",
    a: "채널 수를 줄이면 됩니다. 알리기, 다시 찾을 때, 받기에 하나씩만 두고 메시지와 측정 기준을 맞추는 것도 IMC입니다.",
  },
  {
    q: "IMC 대행 비용은 얼마인가요?",
    a: "위즈더플래닝의 IMC·인플루언서 섭외는 월 총예산(광고비와 대행료 합계) 1,000만 원 이상인 광고주와 진행하고, 섭외 비용은 미팅 뒤 제안드립니다. 광고 대행만 맡기시는 경우는 대행료 월 300만 원부터이고 최소 3개월입니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

function Fig({ n, alt }: { n: number; alt: string }) {
  return (
    <figure className="mt-6">
      {/* 휴대폰에선 그림 속 작은 글씨가 읽기 어려워 눌러서 원본 크기로 열 수 있게 한다 */}
      <a href={FIG(n)} target="_blank" rel="noopener" aria-label={`${alt} (원본 크기로 보기)`} className="block">
        <img src={FIG(n)} alt={alt} width={1200} height={FIG_H[n]} loading="lazy" decoding="async" className="h-auto w-full rounded-xl border border-slate-200" />
      </a>
    </figure>
  )
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BizArticle
        href={PATH}
        kicker="기업 마케팅 · IMC"
        title={TITLE}
        description={DESC}
        date="2026년 11월 10일"
        ctaTitle="IMC 캠페인을 준비하고 계신다면"
        ctaBody="지금 운영 중인 채널과 이번 캠페인으로 알리고 싶은 것을 남겨 주세요. 어디가 비어 있는지부터 보고 캠페인 구성을 제안서로 보내 드리겠습니다."
      >
        <p>
          <strong>
            IMC 마케팅은 광고, 인플루언서, 콘텐츠, 검색처럼 여러 채널에 하나의 캠페인 메시지를 같게 가져가는
            마케팅입니다.
          </strong>{" "}
          통합 마케팅 커뮤니케이션(Integrated Marketing Communications)의 줄임말이고, 채널마다 따로 운영하던 일을 한
          계획 안에서 메시지와 측정 기준까지 맞춰 진행합니다.
        </p>
        <p>
          이 글에는 IMC 뜻과 전략을 세우는 순서, 그리고 저희가 광고를 맡으며 측정 단계에서 실제로 겪은 일을
          적었습니다. 학교 과제용 요약보다 회사에서 캠페인을 준비하는 담당자가 바로 쓸 수 있게 썼습니다.
        </p>

        <h2>IMC 뜻: 통합 마케팅 커뮤니케이션</h2>
        <p>
          미국광고대행사협회(4A&apos;s)는 IMC를 &ldquo;a concept of marketing communications planning that recognises
          the added value of a comprehensive plan&rdquo;이라고 정의합니다. 광고, 직접 반응 광고, 판촉, PR 같은
          커뮤니케이션 수단의 역할을 함께 따져 보고 하나의 계획으로 묶어 메시지를 분명하고 일관되게 만드는 기획
          방식이라는 뜻입니다. 이 정의는{" "}
          <a
            href="https://www.open.edu/openlearn/money-business/business-strategy-studies/social-marketing/content-section-5.2"
            target="_blank"
            rel="noopener noreferrer"
          >
            영국 개방대학교 OpenLearn의 IMC 강의 자료
          </a>
          에 원문 그대로 실려 있습니다.
        </p>
        <p>말이 어렵게 들리지만 실무에서는 세 가지를 맞추는 일입니다.</p>
        <ul>
          <CheckItem>메시지: 인플루언서 영상, 광고 문구, 홈페이지 첫 화면, 검색에 나오는 글이 같은 이야기를 합니다</CheckItem>
          <CheckItem>소재: 한 번 찍은 영상과 사진을 광고와 SNS, 홈페이지, 검색 콘텐츠에 2차·3차로 씁니다</CheckItem>
          <CheckItem>측정: 채널마다 다른 숫자를 보고하지 않고 문의나 구매까지 이어지는 하나의 기준으로 봅니다</CheckItem>
        </ul>
        <Fig n={1} alt="IMC 마케팅이 채널 사이에서 맞추는 메시지, 소재, 측정 기준" />

        <h3>매체 대행과 IMC 대행이 맡는 일</h3>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-bold text-gray-900">구분</th>
                <th className="px-4 py-3 font-bold text-gray-900">매체 대행</th>
                <th className="px-4 py-3 font-bold text-gray-900">IMC 대행</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-100">
                  <td className="px-4 py-2.5 font-semibold text-gray-900">{a}</td>
                  <td className="px-4 py-2.5 text-gray-700">{b}</td>
                  <td className="px-4 py-2.5 text-gray-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          어느 쪽이 낫다고 정해진 것은 없습니다. 이미 소재와 메시지가 정해져 있고 집행만 필요하다면 매체 대행으로도
          충분합니다. 반대로 신제품을 처음 알리거나 채널마다 하는 말이 달라 고민이라면 IMC로 묶어 보는 편이 맞습니다.
        </p>

        <h2>IMC 전략 수립 5단계</h2>
        <p>
          교과서에서는 IMC 전략 수립을 보통 상황 분석, 목표 설정, 전략과 집행, 평가 순서로 설명합니다. 저희가 실제
          캠페인을 준비할 때는 이 순서를 다섯 단계로 나눠 씁니다.
        </p>
        <Fig n={2} alt="IMC 전략 수립 5단계: 상황 분석, 캠페인 메시지, 채널 역할, 소재 2차 활용, 측정 기준" />

        <h3>1단계 · 상황 분석: 어디가 비어 있는지 찾기</h3>
        <p>
          광고를 늘리기 전에 고객이 브랜드를 처음 보고 문의하기까지 지나는 길을 먼저 봅니다. 네이버·구글에 브랜드
          이름을 쳤을 때 무엇이 나오는지, ChatGPT 같은 AI 답변에 브랜드가 나오는지, 홈페이지 첫 화면이 광고 문구와
          같은 말로 시작하는지, SNS 계정에 최근 게시물이 있는지를 확인합니다.
        </p>
        <p>이 단계에서 비어 있는 곳이 나오면 그 자리가 캠페인의 출발점이 됩니다.</p>

        <h3>2단계 · 캠페인 메시지 한 줄 정하기</h3>
        <p>
          모든 채널이 따를 문장을 하나 정합니다. 누구에게, 무엇을, 왜 지금 사야 하는지를 한 줄에 넣습니다.
          인플루언서에게 주는 콘텐츠 가이드, 광고 문구, 홈페이지 첫 줄, 검색용 글의 제목이 모두 이 한 줄에서 나옵니다.
        </p>

        <h3>3단계 · 채널마다 역할 나누기</h3>
        <p>채널을 다 쓰는 것이 IMC는 아닙니다. 채널마다 맡을 역할을 정합니다.</p>
        <ul>
          <CheckItem>알리기: 유튜버·인플루언서 콘텐츠, 숏폼, 메타·유튜브 광고</CheckItem>
          <CheckItem>다시 찾을 때: 브랜드 이름을 검색했을 때 나올 공식 정보와 글, AI 답변(GEO)</CheckItem>
          <CheckItem>받기: 홈페이지와 랜딩 페이지, 문의 버튼</CheckItem>
        </ul>
        <p>
          알리는 채널만 있고 다시 찾을 때 보일 것이 없으면, 영상을 보고 이름을 검색한 사람이 볼 게 없습니다. 3단계에서
          이 빈틈을 미리 막습니다.
        </p>
        <Fig n={3} alt="IMC 캠페인에서 채널별 역할을 알리기, 다시 찾을 때, 받기로 나눈 그림" />

        <h3>4단계 · 소재 만들고 2차·3차로 쓰기</h3>
        <p>
          캠페인 메시지에 맞춰 영상과 사진을 찍고, 채널마다 길이와 자막을 나눠 편집합니다. 위즈더플래닝은 지금까지
          113곳의 숏폼을 360편 넘게 만들었습니다.
        </p>
        <p>인플루언서 콘텐츠를 광고에 다시 쓰려면 섭외할 때 계약서에 정해 둘 것이 있습니다.</p>
        <ul>
          <CheckItem>광고에 쓸 수 있는 채널과 기간</CheckItem>
          <CheckItem>원본 파일을 누구에게 넘기는지</CheckItem>
          <CheckItem>
            광고 표시 방법: 공정거래위원회 &lsquo;추천·보증 등에 관한 표시·광고 심사지침&rsquo;에 맞춰 표시합니다
          </CheckItem>
        </ul>
        <p>
          이걸 빼먹으면 반응이 좋은 영상을 광고로 돌리려는 순간 다시 허락을 받느라 몇 주를 보내게 됩니다.
        </p>
        <Fig n={4} alt="인플루언서 섭외 계약에 넣을 2차 활용 채널, 기간, 원본 파일, 광고 표시 항목" />

        <h3>5단계 · 측정 기준 하나로 맞추기</h3>
        <p>
          채널마다 보고서가 따로 나오면 문의가 어디서 왔는지 설명할 수 없습니다. 그래서 캠페인을 시작하기 전에 두
          가지를 정합니다.
        </p>
        <ul>
          <CheckItem>링크마다 붙이는 꼬리표(UTM) 규칙을 하나로 맞춥니다</CheckItem>
          <CheckItem>문의 폼에 &ldquo;어떻게 알게 되셨나요&rdquo;를 넣습니다</CheckItem>
        </ul>
        <p>
          그리고 마케팅이 책임질 수 있는 마지막 단계에서 한 건당 비용을 기준선으로 잡습니다. 매출까지 바로 잇기
          어렵다면 문의 한 건이 그 자리가 됩니다.
        </p>
        <Fig n={5} alt="IMC 캠페인 측정 기준을 UTM 꼬리표 규칙과 문의 폼 질문으로 맞추는 방법" />

        <h2>IMC 전략 예시: 신제품 하나를 알리는 캠페인</h2>
        <p>아래는 단계를 보여 드리려고 만든 가상 예시입니다. 실제 회사 이야기가 아니고 숫자도 넣지 않았습니다.</p>
        <ul>
          <CheckItem>
            상황: 건강기능식품 회사가 신제품을 냅니다. 브랜드 이름을 검색하면 옛 제품 글만 나오고, 홈페이지에는 신제품
            소개가 아직 없습니다
          </CheckItem>
          <CheckItem>메시지: &ldquo;아침 한 포로 끝나는 ○○&rdquo; 같은 한 줄을 정합니다</CheckItem>
          <CheckItem>알리기: 타깃이 보는 마이크로 인플루언서 여러 명이 같은 주에 릴스를 올립니다</CheckItem>
          <CheckItem>다시 찾을 때: 신제품 이름으로 검색했을 때 나올 설명 글과 FAQ를 홈페이지와 블로그에 먼저 올립니다</CheckItem>
          <CheckItem>받기: 랜딩 페이지 첫 화면을 릴스와 같은 문장으로 시작합니다</CheckItem>
          <CheckItem>소재 활용: 반응이 좋은 릴스 두세 편을 골라 메타 광고 소재로 돌리고, 랜딩 페이지 영상으로도 씁니다</CheckItem>
          <CheckItem>측정: 릴스와 광고 링크에 같은 규칙의 꼬리표를 달고, 구매 페이지 도착과 구매를 같은 표에서 봅니다</CheckItem>
        </ul>
        <Fig n={6} alt="IMC 전략 예시: 건강기능식품 신제품 캠페인을 단계별로 정리한 가상 예시" />

        <h2>측정 단계에서 실제로 생기는 일</h2>
        <p>
          5단계가 왜 먼저 정해져야 하는지는 저희 기록 두 개로 보여 드리겠습니다. 둘 다 IMC 캠페인 전체가 아니라 측정
          단계에서 생긴 일입니다.
        </p>

        <h3>같은 조건으로 비교하지 않으면 원인을 잘못 짚습니다</h3>
        <p>
          한 결제 서비스 기업의 메타 광고를 3주 맡았을 때 134만 6,417원으로 랜딩 페이지 조회 19,484건, 문의 버튼 클릭
          75건이 나왔습니다. 문의 한 건에 약 1만 8천 원이 들었습니다.
        </p>
        <p>
          연장 주차에 숫자가 나빠졌는데, 같은 시기에 페이지 언어도 바꿨기 때문에 언어 탓으로 읽기 쉬웠습니다. 지면별로
          나눠 보니 앞선 2주 동안 예산의 1.3%만 쓰던 외부 앱 지면(오디언스 네트워크)이 그 주에는 30%를 가져가고
          있었습니다. 그 지면을 빼고 같은 조건으로 놓자 효율은 앞 구간과 같았습니다.
        </p>
        <Fig n={7} alt="결제 서비스 기업 메타 광고에서 오디언스 네트워크 지면 비중이 1.3%에서 30%로 바뀐 기록" />
        <p>
          자세한 기록은{" "}
          <a href="/business/insights/case-payment-meta-ads">결제 서비스 기업 메타 광고 3주 보고서</a>에 있습니다.
        </p>

        <h3>AI 답변은 재 보기 전에는 모릅니다</h3>
        <p>
          IMC의 &lsquo;다시 찾을 때&rsquo; 단계에는 AI 답변도 들어갑니다. 저희가 정형외과 한 곳에서 같은 질문 10개를
          3번씩, 모두 30번 물었을 때 계약 전에는 병원 이름이 나온 비율이 17%였고 39일 뒤에는 93%였습니다. 이런 숫자는
          재기 전에는 아무도 모릅니다. 과정은{" "}
          <a href="/guide/case-orthopedic-chatgpt">ChatGPT만 모르던 정형외과 사례</a>에 적었습니다.
        </p>

        <BizContactNote>
          지금 운영 중인 채널에서 어디가 비어 있는지 궁금하시면 <a href="/contact">제안 요청 양식</a>으로 남겨 주세요.
          캠페인 구성을 제안서로 보내 드리겠습니다.
        </BizContactNote>

        <h2>IMC 대행사에 맡기기 전에 확인할 것</h2>
        <p>IMC 대행사나 통합 마케팅 대행사를 고를 때는 아래 다섯 가지를 물어보시면 됩니다.</p>
        <ol>
          <li>캠페인 메시지와 소재를 누가 기획하고 만드는지</li>
          <li>인플루언서 섭외 계약에 2차 활용 범위와 기간, 원본 파일 조건을 넣는지</li>
          <li>채널을 합친 측정 기준을 캠페인 전에 정하는지</li>
          <li>보고서에 채널별 숫자 말고 문의나 구매까지 들어가는지</li>
          <li>계약이 끝나면 광고 계정과 데이터가 누구 명의로 남는지</li>
        </ol>
        <p>
          대행사를 고르는 더 자세한 기준은{" "}
          <a href="/business/insights/agency-selection-criteria">광고대행사 선정 기준과 평가표</a>에 정리했습니다.
        </p>

        <h2>자주 묻는 질문</h2>
        <dl className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="px-5 py-5">
              <dt className="font-bold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>

        <h2>함께 보면 좋은 글</h2>
        <ul>
          <CheckItem>
            <a href="/business">기업 마케팅 안내</a>
          </CheckItem>
          <CheckItem>
            <a href="/services/influencer">인플루언서 마케팅 대행</a>
          </CheckItem>
          <CheckItem>
            <a href="/business/insights/case-payment-meta-ads">결제 서비스 기업 메타 광고 3주 보고서</a>
          </CheckItem>
        </ul>
      </BizArticle>
    </>
  )
}
