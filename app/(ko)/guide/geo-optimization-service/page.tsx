import type { Metadata } from "next"
import GuideArticle, { Callout } from "@/components/guide/GuideArticle"
import GeneralApplyForm from "@/components/general/GeneralApplyForm"

// 리드 글 (대표 지시 10/30 "홈페이지에 리드 받을 수 있는 글 하나 올리자", 작가 원고 2026-10-30)
// 주 키워드: GEO 최적화 서비스
// 연관 검색어(서치콘솔 90일): geo 서비스 / geo 마케팅 대행사 / geo 업체 / geo 대행 / AI 검색 최적화 서비스
//   H2 4곳(GEO 서비스·GEO 최적화·GEO 마케팅 대행사·GEO 업체), FAQ 4곳에 넣었다.
// '추천'·'고르는'은 how-to-choose-geo-agency 몫이라 제목·소제목에 넣지 않는다(자기잠식 방지).
// 신청서는 /medical-geo-agency처럼 본문 바로 아래(#apply)에 두고, 하단 공통 박스는 뺀다.
// 주간 보고서 샘플 글(/business/insights/weekly-report-sample)이 배포되면 '주간 보고서 샘플' 문구에 링크를 건다.
const TITLE = "GEO 최적화 서비스: 무엇을 재고 고치는지, 무료 진단부터"
const DESC =
  "GEO 최적화 서비스로 위즈더플래닝이 실제로 하는 일을 순서대로 적었습니다. 고치기 전에 ChatGPT·네이버 AI·제미나이에 지금 몇 번 나오는지부터 무료로 재 드리고, 신청은 이 글 아래에서 바로 하실 수 있습니다."
const DATE = "2026-10-31"
const URL = "https://wiztheplanning.com/guide/geo-optimization-service"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "GEO 최적화 서비스", "geo 서비스", "geo 최적화", "geo 마케팅 대행사", "geo 업체",
    "geo 대행", "AI 검색 최적화 서비스",
  ],
  alternates: { canonical: "/guide/geo-optimization-service" },
  openGraph: {
    images: ["/covers/geo-optimization-service.jpg"], title: TITLE, description: DESC, url: URL, type: "article",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: DATE,
  dateModified: DATE,
  inLanguage: "ko",
  author: { "@id": "https://wiztheplanning.com/#organization" },
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  mainEntityOfPage: URL,
}

// a는 JSON-LD용 평문, body는 화면용 (링크 포함)
const FAQ: { q: string; a: string; body?: React.ReactNode }[] = [
  {
    q: "geo 서비스는 SEO와 무엇이 다른가요?",
    a: "SEO는 검색 결과 목록에서 우리 페이지 순위를 올리는 일이고, GEO는 AI가 쓰는 답변 안에 우리 이름과 사이트가 들어가게 하는 일입니다. 겹치는 작업이 많아서 저희는 둘을 같이 봅니다.",
    body: (
      <>
        SEO는 검색 결과 목록에서 우리 페이지 순위를 올리는 일이고, GEO는 AI가 쓰는 답변 안에 우리 이름과
        사이트가 들어가게 하는 일입니다. 겹치는 작업이 많아서 저희는 둘을 같이 봅니다. 차이는{" "}
        <a href="/guide/geo-vs-seo">GEO와 SEO 차이</a>에 따로 적었습니다.
      </>
    ),
  },
  {
    q: "geo 대행은 어떤 업종이 받을 수 있나요?",
    a: "손님이 검색해서 찾아오는 곳이면 업종을 가리지 않습니다. 식당, 카페, 펜션, 학원, 미용실, 헬스장 모두 진단하는 방식은 같고 손님이 AI에 묻는 말만 다릅니다. 병원·의원은 병원 GEO 대행 안내에서 따로 받습니다.",
    body: (
      <>
        손님이 검색해서 찾아오는 곳이면 업종을 가리지 않습니다. 식당, 카페, 펜션, 학원, 미용실, 헬스장 모두
        진단하는 방식은 같고 손님이 AI에 묻는 말만 다릅니다. 병원·의원은{" "}
        <a href="/medical-geo-agency">병원 GEO 대행 안내</a>에서 따로 받습니다.
      </>
    ),
  },
  {
    q: "AI 검색 최적화 서비스는 홈페이지가 없어도 받을 수 있나요?",
    a: "네. 다만 AI가 참고할 우리 가게의 공식 정보가 부족하다는 뜻이라 진단 결과에서 그 부분이 먼저 고칠 항목으로 나올 가능성이 큽니다. 지금 어느 채널에 어떤 정보가 흩어져 있는지부터 정리해 드립니다.",
  },
  {
    q: "GEO 업체가 상위 노출을 보장한다고 하면 믿어도 되나요?",
    a: "AI 답변은 매번 달라지기 때문에 누구도 노출을 보장할 수 없습니다. 보장이라는 말이 계약서에 있다면 미달일 때 어떻게 정산하는지까지 적어 달라고 하시는 편이 안전합니다.",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/geo-optimization-service"
        cta={null}
        kicker="서비스 안내 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 10월 31일"
        afterArticle={
          <>
            <GeneralApplyForm
              heading="지금 우리 가게가 AI에 어떻게 나오는지부터 재 드릴게요"
              description="상호와 연락처를 남겨 주시면 담당 마케터가 진단 결과를 들고 연락드리겠습니다. 진단은 무료이고, 받고 나서 계약하지 않으셔도 됩니다."
              pageTag="GEO 서비스 글"
            />
            <p className="container mx-auto max-w-3xl px-4 pt-6 text-center text-sm text-gray-500 md:px-6">
              마케팅 담당자가 있는 회사라면{" "}
              <a href="/business/contact" className="font-medium text-gray-700 underline underline-offset-4 hover:text-emerald-700">
                기업 제안 요청
              </a>
              으로 보내 주세요. 월 300만 원부터, 최소 3개월 기준으로 따로 제안드립니다.
            </p>
          </>
        }
      >
        <p>
          <strong>
            GEO 최적화 서비스는 ChatGPT·네이버 AI·제미나이가 손님 질문에 답할 때 우리 가게 이름을 근거와 함께
            꺼내도록 사이트와 바깥 정보를 고치는 일입니다.
          </strong>{" "}
          저희는 고치기 전에 지금 상태부터 무료로 재 드리고, 신청은{" "}
          <a href="#apply">이 글 맨 아래 신청서</a>에서 바로 하실 수 있습니다.
        </p>
        <p>
          아래는 위즈더플래닝이 GEO 서비스로 하는 일을 순서대로 적은 것입니다. GEO라는 말이 처음이시면{" "}
          <a href="/guide/geo">GEO 총정리</a>를, 여러 대행사를 견주고 계시면{" "}
          <a href="/guide/how-to-choose-geo-agency">계약 전에 물어볼 7가지 질문</a>을 먼저 보셔도 됩니다.
          병원·의원은 의료광고 규정까지 같이 봐야 해서 <a href="/medical-geo-agency">병원 GEO 대행 안내</a>에
          따로 정리해 두었습니다.
        </p>

        <h2>GEO 서비스는 고치기 전에 먼저 잽니다</h2>
        <p>
          AI 답변은 같은 질문에도 물을 때마다 조금씩 달라집니다. 화면 한 장을 캡처해서 &ldquo;나온다, 안
          나온다&rdquo;를 말하면 그날 운에 따라 결론이 뒤집히니까 저희는 손님이 실제로 칠 법한 질문을 정해
          두고 엔진마다 여러 번 묻습니다. 질문에는 가게 이름을 넣지 않습니다. 이름을 대고 물으면 어느 엔진이든
          찾아 주기 때문에 아직 우리 가게를 모르는 손님이 묻는 형태만 셉니다.
        </p>
        <p>
          한 정형외과 의원은 계약 전 진단에서 질문 10개를 엔진마다 질문당 3번씩, 모두 30번 물었습니다. 네이버
          AI와 제미나이에서는 10개 질문 모두에 이름이 나왔는데 ChatGPT의 언급률은 17%였고, 병원 사이트가
          출처로 달린 답은 30개 중 하나도 없었습니다. 진단에서는 이렇게 세 가지를 봅니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-base leading-[1.85] text-gray-700">
          <li>
            <strong>이름이 나오는 비율.</strong> 엔진마다 몇 번 물어서 몇 번 나왔는지
          </li>
          <li>
            <strong>AI가 근거로 단 출처.</strong> 우리 사이트인지, 블로그나 디렉토리 같은 남의 페이지인지
          </li>
          <li>
            <strong>잘못 안내하는 정보.</strong> 영업시간, 위치, 하지 않는 서비스처럼 손님을 헛걸음하게 만드는 것
          </li>
        </ul>
        <p>대신 추천되는 경쟁 가게가 어디인지와 무엇부터 고칠지도 진단서에 같이 적어 드립니다.</p>
        <p>
          저희 회사 사이트도 같은 방식으로 잽니다. 10월 19일 측정에서 저희 점수는 100점 만점에 16점이었습니다.
          좋은 숫자는 아니지만 <a href="/how-we-measure">측정 방식</a> 페이지에 관제 화면과 함께 그대로 공개해
          두었습니다.
        </p>

        <Callout>
          <strong>우리 가게는 지금 몇 번 중 몇 번 나올까요</strong>
          <br />
          무료 진단을 신청하시면 네이버 AI·ChatGPT·제미나이에 손님이 쓸 법한 질문을 물어 보고, 우리 가게 이름이
          나오는지와 잘못 안내되는 정보는 없는지 리포트로 정리해 드립니다. 업종은 가리지 않고, 진단만 받고
          끝내셔도 됩니다.
          <br />
          <a
            href="#apply"
            className="mt-3 inline-block rounded-lg bg-[#070b14] px-4 py-2 text-sm font-bold text-[#00e5a0] no-underline hover:bg-[#101b2e]"
          >
            진단 신청서로 가기
          </a>
        </Callout>

        <h2>GEO 최적화로 고치는 곳</h2>
        <p>진단에서 빈 곳이 보이면 그 자리를 고칩니다. 가게마다 다르지만 대개 아래 네 군데 중 하나에서 막혀 있습니다.</p>

        <h3>AI가 읽을 수 있는 사이트 구조</h3>
        <p>
          AI 검색봇이 사이트에 들어오지 못하거나, 들어와도 읽을 본문이 없으면 다른 걸 고쳐도 소용이 없습니다.
          앞의 정형외과는 2025년 7월 웹 아카이브에 남은 사이트를 열어 보니 HTML 470KB 가운데 기계가 읽을 수 있는
          본문이 844자였습니다. 계약 뒤에는 AI 검색봇을 이름별로 열고, 본문을 서버에서 완성해 보내고, 진료마다
          전용 페이지를 두었습니다. 나중에 ChatGPT가 출처로 단 페이지를 세어 보니 홈이 아니라 그 진료별
          페이지였습니다. 어떤 봇이 무슨 일을 하는지는 <a href="/guide/ai-crawler-names">AI 크롤러 이름과 역할</a>에
          정리해 두었습니다.
        </p>

        <h3>이름과 사실을 한 문장으로 묶기</h3>
        <p>
          AI가 우리 가게에 대한 사실은 알면서 이름을 못 부르는 경우가 생각보다 많습니다. 정형외과 진단 때
          ChatGPT는 이 병원을 이름 없이 이렇게 소개했습니다.
        </p>
        <blockquote className="mt-4 border-l-4 border-gray-300 pl-5 text-base leading-[1.85] text-gray-700">
          &ldquo;○○ 건물 2층에 위치한 정형외과가 평일 야간 진료 및 주말 진료까지 운영하여 환자 편의를 고려한
          곳으로 소개되었습니다.&rdquo;
        </blockquote>
        <p>
          위치도 진료 시간도 맞았는데 이름만 빠져 있었습니다. 그래서 가게가 직접 가진 페이지에서 이름과 사실을
          한 문장으로 묶고 위치·영업시간·대표 서비스를 한 파일에 모은 AI 안내 파일(llms.txt)도 만듭니다. 쓰는
          원칙은 <a href="/guide/what-is-llms-txt">llms.txt 기초 정리</a>에 공개해 두었습니다.
        </p>

        <h3>틀린 정보 정리</h3>
        <p>
          이름이 나오기 시작하면 다음 일은 틀린 정보입니다. 정형외과는 재측정 때 이름이 나온 답 28개 중 3개가
          평일 진료 마감을 실제보다 이른 시간으로 적었습니다. 병원 정보 디렉토리에 남아 있던 옛 정보로
          보입니다. 가게가 먼저 적어 두지 않은 정보는 AI가 다른 곳에서 채우기 때문에 바깥에 흩어진 옛 정보를
          찾아 고치고 사이트에 정확한 값을 먼저 적어 둡니다.
        </p>

        <h3>바깥 출처</h3>
        <p>
          AI는 우리 사이트 하나만 보고 추천하지 않습니다. 홈페이지도 플레이스도 없던 지방 중식당 한 곳은 웹
          자산을 만들고 두 달 뒤 AI 답변에서 추천 4위에 올랐는데 그때 AI가 단 출처는 홈페이지가 아니라 제3자
          플랫폼이었습니다. 정형외과도 후기와 예약을 묻는 질문에서는 동네 업체 프로필이 출처로 달렸습니다.
          네이버가 AI 크롤러를 막아 두어서{" "}
          <a href="/guide/naver-blocks-ai-crawlers">네이버 안에 쌓은 글은 ChatGPT가 읽지 못한다</a>는 점도 이
          단계에서 같이 봅니다.
        </p>

        <h2>GEO 대행 결과는 같은 방법으로 다시 재서 봅니다</h2>
        <p>
          고친 뒤에는 처음과 같은 질문, 같은 방법으로 다시 잽니다. 정형외과는 39일 뒤 같은 질문 10개를 다시
          30번 물었더니 ChatGPT 언급률이 17%에서 93%로 올랐고 병원 사이트가 출처로 달린 답은 0번에서 16번이
          됐습니다.
        </p>
        <p>
          2주 뒤에 한 번 더 쟀을 때는 언급률이 83%로 내려갔습니다. 대신 병원 사이트가 출처로 달린 답은 21번으로
          늘었는데 저희는 이 숫자를 언급률보다 무겁게 봅니다. AI가 병원을 말할 때 근거로 병원 홈페이지를 더 자주
          든다는 뜻이기 때문입니다. 병원 한 곳의 39일 기록이라 다른 업종에 그대로 맞는다고 말하지는 않겠습니다.
          전체 기록은 <a href="/guide/case-orthopedic-chatgpt">정형외과 ChatGPT 사례</a>에 있습니다.
        </p>
        <p>
          걸리는 시간은 가게마다 다릅니다. 출장세차 한 곳은 2개월 만에 구글 AI 개요에 올랐고, 홈페이지를 전부
          다시 만든 비뇨의학과는 홈페이지 작업에만 약 2개월, ChatGPT·구글·네이버에서 안정적으로 보이기까지 약
          6개월이 걸렸습니다.
        </p>

        <h2>GEO 마케팅 대행사에 맡기면 받는 것</h2>
        <p>
          처음 받으시는 건 무료 진단서입니다. 엔진별로 이름이 나온 비율, AI가 근거로 단 출처, 잘못 안내되는 정보,
          대신 추천되는 경쟁 가게, 무엇부터 고칠지가 들어 있습니다. 숫자만 받아서는 무엇부터 할지 정하기 어려워서
          담당 마케터가 직접 연락드려 결과를 짚어 드립니다.
        </p>
        <p>
          계약하시면 주간 보고서를 받으십니다. 첫 장에 지표 네 개(카테고리 점유율, 출처 인용률, 인용 키워드, 웹
          건강도)가 있고, 엔진별 표와 달라진 것, 다음에 할 일이 뒤에 붙습니다. 좋지 않은 숫자도 고치지 않고
          적습니다. 저희 회사를 잰 42주차 보고서는 카테고리 점유율이 0%였는데, 그 숫자 그대로 주간 보고서
          샘플에 옮겨 두었습니다.
        </p>
        <figure className="mt-6">
          <img
            src="/report/business-report-summary.jpg"
            alt="위즈더플래닝 자사 42주차 AI 검색 주간 보고서 첫 장: 카테고리 점유율, 출처 인용률, 인용 키워드, 웹 건강도 네 지표와 지난 측정 대비 변화"
            width={1200}
            height={1264}
            loading="lazy"
            className="w-full rounded-xl border border-gray-200"
          />
          <figcaption className="mt-2 text-sm text-gray-500">
            저희 회사를 잰 42주차 주간 보고서 첫 장. 지표 네 개와 지난 측정 대비 변화
          </figcaption>
        </figure>
        <p>
          사이트 수정, 콘텐츠, 측정은 외주를 주지 않고 저희 팀이 직접 합니다. 진단한 사람과 고치는 사람이 같아야
          다음 보고서에서 무엇이 달라졌는지 바로 설명할 수 있습니다.
        </p>

        <h2>GEO 업체 비용은 얼마부터인가요</h2>
        <ul className="list-disc space-y-2 pl-5 text-base leading-[1.85] text-gray-700">
          <li>
            <strong>진단:</strong> 무료입니다. 진단 뒤에 자동으로 결제되거나 유료로 넘어가는 일은 없습니다.
          </li>
          <li>
            <strong>가게:</strong> 규모에 따라 월 30만 원부터(VAT 별도)이고, 최소 6개월 진행합니다. AI 답변은 빠른
            곳이 2개월쯤, 대체로 6개월 안쪽에서 움직여서 기간을 그렇게 잡았습니다.
          </li>
          <li>
            <strong>마케팅 담당자가 있는 조직:</strong> 대행료 월 300만 원부터, 최소 3개월이고 계약 전 기준선 측정은
            따로 견적을 냅니다. 자세한 기준은 <a href="/business">기업 마케팅 대행 안내</a>에 있습니다.
          </li>
        </ul>
        <p>
          다른 곳 견적서와 나란히 놓고 보실 때는 구축비와 운영비가 나뉘어 있는지부터 보시면 됩니다. 계약이 끝났을
          때 무엇이 남는지가 거기서 갈리는데 보는 순서는 <a href="/guide/geo-cost">GEO 비용 견적서 뜯어보는 법</a>에
          적어 두었습니다.
        </p>

        <h2>GEO 대행이 맞지 않는 경우</h2>
        <p>이런 경우라면 저희에게 맡기지 않으시는 편이 낫습니다.</p>
        <ul className="list-disc space-y-2 pl-5 text-base leading-[1.85] text-gray-700">
          <li>
            <strong>노출 보장을 원하실 때.</strong> AI 답변은 엔진과 시점, 질문 방식에 따라 달라져서 저희는 보장하지
            않습니다. 약속드릴 수 있는 건 같은 방법으로 다시 잰 숫자입니다.
          </li>
          <li>
            <strong>한두 달 안에 매출로 확인하고 싶으실 때.</strong> 빠른 곳도 변화가 보이기까지 2개월쯤 걸립니다.
          </li>
          <li>
            <strong>손님이 검색해서 오지 않는 장사일 때.</strong> 단골과 지인 소개로 대부분 돌아가는 가게라면 AI 답에
            이름이 나와도 달라지는 게 적습니다.
          </li>
          <li>
            <strong>직접 할 시간이 있으실 때.</strong> 사이트를 손볼 줄 알고 매달 몇 시간을 낼 수 있다면 직접 하셔도
            됩니다. 어디서 갈리는지는 <a href="/guide/geo-diy-or-agency">GEO 직접 할까 대행 맡길까</a>에
            정리했습니다.
          </li>
        </ul>
        <p>
          어느 쪽인지 애매하시면 <a href="#apply">진단부터</a> 받아 보셔도 됩니다. 진단만 받고 끝내셔도
          괜찮습니다.
        </p>

        <h2>자주 묻는 질문</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <h3 className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </h3>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.body ?? f.a}</p>
            </div>
          ))}
        </div>
      </GuideArticle>
    </>
  )
}
