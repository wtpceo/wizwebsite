import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"
import CaseAccessRequest from "@/components/guide/CaseAccessRequest"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내
const TITLE = "네이버·제미나이엔 뜨는데 ChatGPT만 모르던 정형외과: 언급률 17%에서 93%까지"
const DESC =
  "계약 전 진단에서 한 정형외과는 네이버 AI·제미나이 질문 10개 모두에 나왔지만 ChatGPT에서는 4개뿐이었습니다. ChatGPT는 병원의 야간·주말 진료 사실은 알면서 이름과 잇지 못하고 있었습니다. 39일 뒤 같은 방법으로 30번 다시 재자 언급률이 17%에서 93%로 올랐습니다."
const DATE = "2026-09-14"
const URL = "https://wiztheplanning.com/guide/case-orthopedic-chatgpt"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "ChatGPT 병원 노출", "정형외과 GEO", "병원 GEO 사례", "ChatGPT 병원 추천",
    "병원 홈페이지 AI 검색", "AI 검색 언급률", "병원 AI 오정보",
  ],
  alternates: { canonical: "/guide/case-orthopedic-chatgpt" },
  openGraph: { images: ["/covers/case-orthopedic-chatgpt.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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

const FAQ = [
  {
    q: "네이버와 제미나이에는 나오는데 ChatGPT에만 안 나오는 이유는 뭔가요?",
    a: "엔진마다 읽는 곳이 다르기 때문입니다. 이 병원은 계약 전 네이버 AI와 제미나이 질문 10개 모두에 이름이 나왔지만 ChatGPT는 4개였습니다. ChatGPT 답변의 출처는 전부 블로그와 병원 디렉토리 같은 제3자 페이지였고 병원 사이트는 한 번도 인용되지 않았습니다. 병원에 대한 사실은 알았지만 그 사실을 병원 이름과 이어 주는 페이지가 없었던 것으로 봅니다.",
  },
  {
    q: "결과는 어떻게 쟀나요?",
    a: "계약 전과 같은 질문 10개를 질문마다 3번씩, 같은 모델과 같은 검색 설정으로 다시 물었습니다. 답변 원문에 병원 이름이 나오면 언급, 출처 목록에 병원 사이트가 있으면 인용으로 셌습니다. 한 번 캡처한 화면이 아니라 30개 답변을 기준으로 삼았습니다.",
  },
  {
    q: "화면 캡처로 확인하면 안 되나요?",
    a: "한 화면만으로는 부족합니다. 이 병원의 ChatGPT 화면 한 장에는 비용 수치가 나왔는데, 같은 질문을 30번 다시 물었을 때는 한 번도 나오지 않았습니다. 계정과 시점에 따라 답이 달라지므로 반복해서 비율로 봐야 합니다.",
  },
  {
    q: "AI가 틀린 정보를 말하면 어떻게 하나요?",
    a: "이 사례에서도 병원 이름이 나온 28개 답변 중 3개가 평일 진료 마감 시간을 옛 정보로 적었습니다. 인용이 늘어나면 오정보 관리가 다음 일이 됩니다. 사이트와 AI 안내 파일에 정확한 정보를 먼저 적고, 옛 정보가 남아 있는 외부 페이지를 찾아 고칩니다.",
  },
  {
    q: "제미나이 수치는 왜 전후로 비교하지 않았나요?",
    a: "계약 전 진단에 쓴 제미나이 모델이 재측정 시점에 신규 사용이 막혀 다른 모델로 재야 했기 때문입니다. 모델이 다르면 같은 조건이 아니므로 전후 비교로 쓰지 않았습니다. 참고로 새 모델에서는 질문 10개 중 8개에 이름이 나왔고, 30개 답변 중 21개에 병원 사이트가 출처로 달렸습니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

// 다른 병원·대행사가 그대로 따라 할 수 있는 실행 세부는 가린다. 전문은 사업자 인증 후 열람.
function M({ w = "****" }: { w?: string }) {
  return (
    <span
      title="작업 기록 전문에서 공개합니다"
      aria-label="비공개 정보"
      className="mx-0.5 inline-block select-none rounded bg-slate-900 px-1.5 align-baseline font-mono text-[0.85em] tracking-widest text-slate-400"
    >
      {w}
    </span>
  )
}

function Table({ head, rows, min = 520 }: { head: string[]; rows: React.ReactNode[][]; min?: number }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm" style={{ minWidth: min }}>
        <thead>
          <tr className="bg-slate-50 text-left">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-bold text-gray-900">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-100">
              {r.map((c, j) => (
                <td key={j} className={`px-4 py-2.5 align-top text-gray-700 ${j === 0 ? "font-semibold text-gray-800" : ""}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/case-orthopedic-chatgpt"
        kicker="정형외과 사례 · 자체 실측"
        title={TITLE}
        description={DESC}
        date="2026년 9월 14일"
      >
        <p>
          <strong>
            계약 전 진단에서 한 정형외과는 네이버 AI와 제미나이 질문 10개 모두에 이름이 나왔지만 ChatGPT에서는 4개뿐이었습니다.
          </strong>{" "}
          원문을 열어보니 ChatGPT는 이 병원의 야간·주말 진료 사실을 알면서도 병원 이름과 잇지 못하고 있었습니다.
          39일 뒤 같은 질문을 같은 방법으로 30번 다시 물었더니 언급률이 <strong>17%에서 93%</strong>로 올랐고,
          병원 사이트가 출처로 <strong>16번</strong> 달렸습니다.
        </p>
        <p>
          수도권 역세권의 한 정형외과 의원 사례입니다. 광고주 보호를 위해 병원명과 지역은 밝히지 않습니다.
          이 글의 수치는 전부 저장된 측정 원문과 재측정 기록에서 가져왔습니다.
        </p>

        <h2>계약 전: 세 엔진 중 ChatGPT만 약했습니다</h2>
        <p>2026년 8월 6일, 환자가 실제로 물을 법한 질문 10개를 엔진마다 질문당 3번씩 물었습니다.</p>
        <Table
          head={["엔진", "이름이 나온 질문", "평균 언급률 (30회)"]}
          rows={[
            ["네이버 AI", "10/10", "100%"],
            ["제미나이", "10/10", "97%"],
            ["ChatGPT", <b key="a" className="text-rose-600">4/10</b>, <b key="b" className="text-rose-600">17%</b>],
          ]}
        />
        <p>
          질문은 &ldquo;○○역 근처 정형외과 중에 어디가 제일 괜찮아?&rdquo;, &ldquo;○○동에 주말에도 진료하는 정형외과
          있을까?&rdquo;처럼 병원 이름이 들어가지 않은 형태입니다. 이름을 대고 물으면 어느 엔진이든 답하기 때문에, 새
          환자가 실제로 던지는 질문만 셌습니다.
        </p>

        <h2>원문을 열어보니: 사실은 알았지만 이름과 잇지 못했습니다</h2>
        <p>
          ChatGPT 답변 30개를 하나씩 봤습니다. 가장 눈에 띈 것은 &ldquo;어디가 제일 괜찮아?&rdquo; 질문의 답이었습니다.
          ChatGPT는 이 병원을 이름 없이 이렇게 소개했습니다.
        </p>
        <blockquote>
          &ldquo;○○ 건물 2층에 위치한 정형외과가 평일 야간 진료 및 주말 진료까지 운영하여 환자 편의를 고려한 곳으로
          소개되었습니다.&rdquo;
          <br />
          <span className="text-sm text-gray-500">2026년 8월 6일 ChatGPT 답변. 출처는 제3자 블로그의 &lsquo;TOP 5 추천&rsquo; 글</span>
        </blockquote>
        <ul>
          <CheckItem>
            <strong>병원에 대한 사실은 알고 있었습니다.</strong> 건물 위치, 야간 진료, 주말 진료까지 정확했습니다.
          </CheckItem>
          <CheckItem>
            <strong>그런데 이름이 없었습니다.</strong> 그 사실을 병원 이름과 한 문장으로 묶어 주는 페이지를 찾지 못했다는 뜻으로 봅니다.
          </CheckItem>
          <CheckItem>
            <strong>병원 사이트는 한 번도 인용되지 않았습니다.</strong> 출처는 전부 개인 블로그, 병원 정보 디렉토리, 뉴스 같은
            제3자 페이지였습니다.
          </CheckItem>
        </ul>
        <p>
          같은 시기 네이버 AI는 플레이스 정보를, 제미나이는 구글 색인에 잡힌 병원 정보 페이지들을 근거로 이름을 정확히 불렀습니다.
          엔진마다 읽는 곳이 다르다는 것은{" "}
          <a href="/guide/ai-engines-cite-differently">엔진별 인용 출처의 차이</a>에서 정리한 그대로였습니다. 참고로 2025년
          7월 웹 아카이브에 남은 이 병원 사이트는 빌더로 만든 페이지였고, HTML 470KB 가운데 기계가 읽을 수 있는 본문은
          844자였습니다. 계약 직전 시점의 사이트는 아카이브에 남지 않아 확인하지 못했습니다.
        </p>

        <h2>무엇을 바꿨나</h2>
        <p>
          계약 후 병원 사이트를 AI가 읽고 인용할 수 있는 구조로 다시 만들었습니다. 원칙은 하나였습니다.{" "}
          <strong>병원 이름과 병원에 대한 사실을 병원이 소유한 페이지에서 한 문장으로 묶는다.</strong>
        </p>
        <ul>
          <CheckItem>
            <strong>진료별 전용 페이지.</strong> 질환과 치료마다 따로 페이지를 두었습니다. 구성은 <M w="**" />개 페이지,
            페이지당 <M /> 자와 소제목 <M w="**" />개 기준입니다.
          </CheckItem>
          <CheckItem>
            <strong>기계가 바로 읽는 형태.</strong> 본문을 서버에서 완성해 보내고, 구조화 데이터는 <M /> 조합으로 설계했습니다.
            지금 홈페이지 HTML은 27KB, 스크립트는 7개입니다.
          </CheckItem>
          <CheckItem>
            <strong>AI 안내 파일을 팩트시트로.</strong> 위치, 진료시간, 의료진, 치료 정의를 한 파일에 모았습니다. 섹션
            구성은 <M w="*" />개이고, 그중 <M /> 섹션이 핵심입니다. 작성 원칙은{" "}
            <a href="/guide/what-is-llms-txt">llms.txt 기초 정리</a>에 공개해 두었습니다.
          </CheckItem>
          <CheckItem>
            <strong>AI 검색봇 허용.</strong> 검색용 봇을 이름별로 열었습니다. 어떤 봇이 무슨 역할인지는{" "}
            <a href="/guide/ai-crawler-names">AI 크롤러 이름과 역할</a>에 있습니다.
          </CheckItem>
        </ul>

        <h2>39일 뒤: 같은 질문, 같은 방법으로 30번</h2>
        <p>
          9월 14일 광고주 쪽에서 ChatGPT가 이 병원을 먼저 추천하는 화면이 들어왔습니다. 화면 한 장으로는 판단하지 않고,
          8월 6일과 똑같은 모델, 검색 설정, 질문 10개로 질문당 3번씩 다시 물었습니다.
        </p>
        <Table
          head={["ChatGPT", "8월 6일", "9월 14일"]}
          rows={[
            ["병원 이름이 나온 질문", "4/10", <b key="a" className="text-emerald-700">10/10</b>],
            ["평균 언급률 (30회)", "17%", <b key="b" className="text-emerald-700">93%</b>],
            ["병원 사이트가 출처로 달린 답변", "0/30", <b key="c" className="text-emerald-700">16/30</b>],
            ["첫 번째로 추천된 답변", "기록 없음", <b key="d" className="text-emerald-700">24/30</b>],
          ]}
        />
        <p>같은 &ldquo;어디가 제일 괜찮아?&rdquo; 질문의 답은 이렇게 바뀌었습니다.</p>
        <blockquote>
          &ldquo;1. [병원명] · 위치 및 접근성: ○○역 1번 출구에서 도보 1분 거리. 진료 특성: 척추·관절 통증에 대해 절개 없는
          비수술적 치료를 시행하며, 진단부터 시술까지 대표원장이 직접 담당합니다.&rdquo;
          <br />
          <span className="text-sm text-gray-500">2026년 9월 14일 ChatGPT 답변. 병원명과 지역은 가렸습니다</span>
        </blockquote>
        <p>
          8월에 이름 없이 떠돌던 사실들이 이제 이름 옆에 붙어 나옵니다. ChatGPT가 출처로 단 병원 사이트 페이지를 세어 보면
          홈이 아니라 <strong>진료별 전용 페이지</strong>였습니다.
        </p>
        <Table
          head={["출처로 달린 병원 사이트 페이지", "횟수"]}
          rows={[
            ["도수치료 전용 페이지", "7"],
            ["비수술 치료 목록 페이지", "5"],
            ["관절 클리닉 페이지", "3"],
            ["병원 소개 페이지", "2"],
            ["스포츠손상 클리닉 페이지", "1"],
          ]}
          min={360}
        />
        <p>
          후기·예약·주말 질문에서는 병원의 당근 동네업체 프로필이 4개 답변에 출처로 달렸습니다. 병원 사이트와 당근 프로필이
          한 답변에 함께 달린 경우는 없었고, 둘 중 하나가 출처로 달린 답변은 30개 중 20개였습니다. 치료와 증상을 묻는
          질문은 병원 사이트가, 후기와 예약을 묻는 질문은 외부 프로필이 근거가 되는 식으로 나뉘었습니다.
        </p>

        <h2>조심해야 할 것도 함께 나왔습니다</h2>
        <ul>
          <CheckItem>
            <strong>화면 한 장의 숫자는 재현되지 않았습니다.</strong> 광고주가 보낸 화면에는 도수치료 비용 범위가 나왔는데,
            30번 다시 물었을 때는 한 번도 나오지 않았습니다. 병원 사이트에도 그 수치는 없었습니다.
          </CheckItem>
          <CheckItem>
            <strong>옛 정보가 섞였습니다.</strong> 이름이 나온 답변 28개 중 3개가 평일 진료 마감을 실제보다 이른 시간으로
            적었습니다. 병원 정보 디렉토리에 남은 예전 정보로 보입니다.
          </CheckItem>
          <CheckItem>
            <strong>사이트에 없는 표현이 반복됐습니다.</strong> 사이트에 적지 않은 진료과목 표현이 10번 나왔습니다. 병원이
            먼저 명시하지 않은 정보는 AI가 다른 곳에서 채웁니다.
          </CheckItem>
        </ul>
        <p>
          인용이 늘어나면 다음 일은 오정보 관리입니다. 저희는 <M /> 순서로 대응합니다. 병원이 직접 확인하는 방법은{" "}
          <a href="/guide/check-hospital-ai-visibility">우리 병원이 ChatGPT에 나오는지 5분 만에 확인하는 법</a>에 있습니다.
        </p>

        <h2>이 사례의 한계</h2>
        <ul>
          <CheckItem>병원 한 곳, 39일의 기록입니다. 다른 진료과와 지역에 그대로 적용된다고 말하지 않습니다.</CheckItem>
          <CheckItem>사이트 구조, 안내 파일, 봇 허용을 함께 바꿨기 때문에 무엇이 가장 크게 작용했는지 분리하지 못했습니다.</CheckItem>
          <CheckItem>
            제미나이는 계약 전 모델이 재측정 때 신규 사용이 막혀 다른 모델로 쟀습니다. 새 모델에서는 질문 10개 중 8개에 이름이
            나왔고, 30개 답변 중 21개에 병원 사이트가 출처로 달렸지만 전후 비교로는 쓰지 않습니다.
          </CheckItem>
          <CheckItem>네이버 AI는 이번에 다시 재지 않았습니다.</CheckItem>
          <CheckItem>AI 답변은 계정과 시점에 따라 달라집니다. 유지되는지는 매주 같은 기준으로 계속 잽니다.</CheckItem>
        </ul>

        <Callout>
          측정 질문을 고르는 기준은 <M /> 입니다. 같은 질문을 고정해 두지 않으면 좋아진 것인지 우연인지 증명할 수 없습니다.
          매주 어떻게 재는지는 <a href="/how-we-measure">측정 방식</a>에 관제 화면으로 공개해 두었습니다.
        </Callout>

        <CaseAccessRequest
          caseKey="case-orthopedic-chatgpt"
          heading="작업 기록 전문"
          intro="가린 칸의 진료별 페이지 구성과 분량 기준, 구조화 데이터 조합, AI 안내 파일의 섹션 구성, 측정 질문 설계 기준, 오정보 대응 순서, 질문별 전후 원문 비교: 재현 가능한 실행 세부는 본문에 공개하지 않습니다."
          includes={[
            "질문 10개별 ChatGPT 전후 결과",
            "작업 전후 사이트 구조 비교",
            "진료별 페이지 구성과 분량 기준",
            "구조화 데이터 조합",
            "AI 안내 파일 섹션 구성",
            "오정보 대응 순서",
          ]}
          buttonLabel="작업 기록 전문 열람 신청"
        />

        <h2>우리 병원도 같은 상황이라면</h2>
        <p>
          네이버에는 잘 나오는데 ChatGPT에서 이름이 빠진다면, 병원에 대한 사실이 병원 이름과 묶여 있지 않을 가능성이 큽니다.{" "}
          <a href="/medical-diagnosis">병원 전용 무료 AI 검색 진단</a>에서 엔진별 현재 상태를 먼저 확인해 보세요. 진단 이후
          어떤 순서로 진행하는지는 <a href="/medical-geo-agency">병원 GEO 대행 안내</a>에 적어 두었습니다.
        </p>

        <h2>자주 묻는 질문</h2>
        <div className="mt-6 space-y-4">
          {FAQ.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 md:p-6">
              <p className="flex gap-2 text-lg font-bold leading-snug text-gray-900">
                <span className="shrink-0 text-[#00b57f]">Q{i + 1}.</span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 text-base leading-[1.85] text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </GuideArticle>
    </>
  )
}
