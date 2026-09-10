import type { Metadata } from "next"
import GuideArticle, { CheckItem, Callout } from "@/components/guide/GuideArticle"
import CaseAccessRequest from "@/components/guide/CaseAccessRequest"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 유지 → 현재 43자
const TITLE = "3쪽짜리 사이트가 167쪽보다 먼저 인용됐습니다: 치과 홈페이지 GEO 51일"
const DESC =
  "치과 홈페이지를 새로 만들면서 GEO를 함께 설계한 51일의 기록입니다. 167쪽에 블로그 51건, FAQ 22문항을 갖추고도 ChatGPT에 인용되지 않았는데, 같은 지역의 3쪽짜리 사이트는 인용되고 있었습니다. 차이는 콘텐츠 양이 아니라 AI 안내 파일의 성격이었습니다. 목차를 팩트시트로 바꾼 뒤 ChatGPT 답변에 병원이 후보로 등장했고, 답변 속 한 문장이 그 파일의 한 줄과 정확히 일치해 출처를 역추적할 수 있었습니다."
const DATE = "2026-09-10"
const URL = "https://wiztheplanning.com/guide/case-dental-llms-factsheet"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "치과 GEO 사례", "llms.txt 작성법", "ChatGPT 병원 추천", "치과 홈페이지 제작 AI",
    "생성형 AI 인용", "병원 홈페이지 GEO", "AI 크롤러 허용",
  ],
  alternates: { canonical: "/guide/case-dental-llms-factsheet" },
  openGraph: { images: ["/og-image.jpg"], title: TITLE, description: DESC, url: URL, type: "article" },
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
    q: "llms.txt에 무엇을 적어야 AI가 인용하나요?",
    a: "페이지 목차가 아니라 팩트시트여야 합니다. 이 사례에서 링크 목록만 있던 파일을 상호, 대표원장 자격, 전화, 주소, 좌표, 사업자번호, 요일별 진료시간, 점심시간, 휴진일, 진료 분야, 공식 채널로 채우자 ChatGPT 답변에 병원이 등장했고, 답변 속 '목요일 오후 8시까지 야간진료'라는 문장이 그 파일의 한 줄과 정확히 일치했습니다. 시술 정의와 FAQ 전문은 긴 버전 파일에 따로 두었습니다.",
  },
  {
    q: "콘텐츠가 많으면 AI 인용에 유리하지 않나요?",
    a: "이 사례에서는 아니었습니다. 167쪽에 블로그 51건, FAQ 22문항을 갖춘 쪽이 인용되지 않았고, 같은 지역의 3쪽짜리 사이트가 먼저 인용되고 있었습니다. AI가 답할 재료를 꺼내기 쉬운 형태인지가 양보다 컸습니다. 다만 두 사이트의 비교일 뿐이라 일반 법칙으로 말하지는 않습니다.",
  },
  {
    q: "네이버 블로그에 글을 많이 써 두면 ChatGPT에도 도움이 되나요?",
    a: "되지 않습니다. 네이버는 robots.txt로 외부 AI 크롤러를 막고 있어 ChatGPT 같은 도구는 네이버 블로그 글을 읽지 못합니다. 이 병원도 블로그를 꾸준히 써 왔지만 GEO 관점에서는 없는 콘텐츠였습니다. 그래서 본문을 자사 도메인에 두는 것이 첫 전제가 됐습니다.",
  },
  {
    q: "외부 GEO 진단 도구가 지적한 것은 다 고쳐야 하나요?",
    a: "아닙니다. 이 사례에서 두 번의 외부 진단 31건 중 11건이 오탐이었습니다. 관리자 페이지 색인 차단처럼 의도된 설정, 장식 아이콘의 대체텍스트처럼 표준에 맞는 처리, 띄어쓰기 차이를 다른 주제로 읽은 경우가 있었습니다. 지적마다 실제 응답을 직접 열어 확인한 뒤 고칠 것과 반박할 것을 나눠야 합니다. 그대로 따랐다면 멀쩡한 설정을 망가뜨릴 뻔했습니다.",
  },
  {
    q: "이 결과는 계속 유지되나요?",
    a: "보장할 수 없습니다. 생성형 AI 답변은 같은 질문이어도 시점, 계정, 모델에 따라 달라집니다. 이 글은 특정 시점에 관찰된 결과를 기록한 것이고, 유지되는지는 주기적으로 재측정하고 있습니다. 질문형 질의 노출은 이제 시작 단계이고, 비급여 진료비용처럼 아직 채우지 못한 정보도 있습니다.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left font-bold text-gray-900">{children}</th>
)
const Td = ({ children, strong }: { children: React.ReactNode; strong?: boolean }) => (
  <td className={`px-4 py-2.5 align-top text-gray-700 ${strong ? "font-semibold text-gray-800 whitespace-nowrap" : ""}`}>{children}</td>
)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideArticle
        href="/guide/case-dental-llms-factsheet"
        kicker="치과 사례 · 홈페이지 제작 + GEO"
        title={TITLE}
        description={DESC}
        date="2026년 9월 10일"
      >
        <p>
          한 대도시 번화가의 치과 홈페이지를 새로 만들면서 GEO(생성형 AI 인용 최적화)를 함께 설계했습니다.
          2026년 7월 21일에 착수해 9월 9일까지 51일, 실제 작업일은 37일입니다. 광고주 요청에 따라{" "}
          <strong>병원명과 정확한 지역은 공개하지 않습니다.</strong> 이 글의 수치는 전부 작업 기록과 실측값에서
          가져왔고, 추정치는 넣지 않았습니다.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            ["51일", "착수부터 현재"],
            ["37일", "실제 작업일"],
            ["120쪽", "색인 대상 페이지"],
            ["4개 언어", "한·영·일·중"],
            ["15종", "개별 허용한 AI 크롤러"],
          ].map(([n, d]) => (
            <div key={d} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xl font-extrabold text-emerald-700">{n}</p>
              <p className="mt-0.5 text-xs text-gray-500">{d}</p>
            </div>
          ))}
        </div>

        <h2>결과: ChatGPT 답변에 병원이 후보로 등장했습니다</h2>
        <p>
          먼저 키워드형 질의에 노출되기 시작했고, 이어서 질문형 질의에도 등장했습니다. 질문형은 AI가 조건을
          이해하고 골라야 하므로 난도가 한 단계 높습니다. 지역명은 가렸습니다.
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-bold tracking-wide text-emerald-700">질의 ① 키워드형 · &ldquo;○○ 교정치과 추천해줘&rdquo;</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              &ldquo;○○에서 교정치과를 찾는다면 아래 4곳을 우선 비교 상담해보세요. … ○○에서 오래 진료해 온 치과로,
              교정뿐 아니라 임플란트·일반진료도 함께 받을 수 있습니다. 대표원장 직접 진료를 안내하고 있으며
              역과 가깝습니다.&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-bold tracking-wide text-emerald-700">질의 ② 질문형 · &ldquo;○○에 야간진료 하는 치과 추천해줘&rdquo;</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              &ldquo;○○에서 야간진료 편의성을 기준으로 보면 다음 세 곳을 추천할 만합니다. … 목요일 오후 8시까지
              야간진료 / 치아교정·임플란트·심미치료 중심 / ○○에서 교정이나 라미네이트 상담을 원할 때 고려할
              만합니다.&rdquo;
            </p>
          </div>
        </div>

        <h2>가장 중요한 발견: 인용의 출처를 역추적할 수 있었습니다</h2>
        <p>
          질의 ②의 답변에 나온 <strong>&ldquo;목요일 오후 8시까지 야간진료&rdquo;</strong>는 홈페이지 본문이 아니라
          저희가 만들어 둔 AI 안내 파일(/llms.txt)에 적어 둔 한 줄과 정확히 일치합니다.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">{`- 목요일: 10:00 ~ 20:00 (야간진료)`}</pre>
        <p>
          AI가 어디를 읽고 답했는지 추적이 가능했다는 뜻입니다. GEO는 감이 아니라{" "}
          <strong>&ldquo;읽히는 자리에 사실을 정확한 형태로 두는 일&rdquo;</strong>이라는 것을 이 한 건이 보여 줍니다.
        </p>

        <h2>출발점의 제약: 왜 &ldquo;블로그 열심히 쓰기&rdquo;로는 안 되는가</h2>
        <ul>
          <CheckItem>
            <strong>네이버가 AI 크롤러를 차단하고 있습니다.</strong> 이 병원은 네이버 블로그에 글을 꾸준히 써
            왔습니다. 그런데 네이버는 robots.txt로 외부 AI 크롤러를 막습니다. ChatGPT 같은 도구는 그 글을 아예
            읽지 못합니다. 블로그에만 쌓인 콘텐츠는 GEO 관점에서 존재하지 않는 것과 같았습니다. 그래서{" "}
            <strong>본문이 자사 도메인에 있어야 한다</strong>가 첫 전제가 됐습니다(
            <a href="/guide/naver-blocks-ai-crawlers">네이버 차단 실측</a>).
          </CheckItem>
          <CheckItem>
            <strong>의료법이 GEO보다 위입니다.</strong> &ldquo;인용되기 좋은 문장&rdquo;은 대개 단정적입니다. 그러나
            의료광고는 최상급, 효과 보장, 미확인 수치를 쓸 수 없습니다(의료법 제56조). 인용률을 위해 표현을
            세게 쓰는 선택지가 처음부터 없었습니다. 대신 검증 가능한 사실(진료시간, 학위 표기, 건강보험 급여
            기준, 좌표, 사업자번호)로 밀도를 올리는 방향을 택했습니다.
          </CheckItem>
          <CheckItem>
            <strong>읽히기 전에 느리면 끝납니다.</strong> 착수 시점의 첫 바이트 응답이 3.85초였고, 일부 페이지는
            서버 자원 한도에 걸려 503 오류가 났습니다. 크롤러는 기다려 주지 않습니다. 콘텐츠 이전에
            &ldquo;항상 빠르게 열리는 상태&rdquo;를 먼저 만들어야 했습니다.
          </CheckItem>
        </ul>

        <h2>결정적이었던 한 가지: 경쟁사 관찰에서 방향을 바꿨습니다</h2>
        <p>
          작업 중간에 이상한 것을 발견했습니다. 같은 지역의 한 치과가 <strong>페이지가 3장뿐인데도</strong> ChatGPT
          답변에 인용되고 있었습니다. 그 시점 우리 쪽은 167쪽, 블로그 51건, FAQ 22문항으로 훨씬 컸는데도 인용되지
          않았습니다. 차이는 콘텐츠의 양이 아니라 <strong>/llms.txt의 성격</strong>이었습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50"><Th>구분</Th><Th>바꾸기 전</Th><Th>바꾼 뒤</Th></tr>
            </thead>
            <tbody>
              {[
                ["성격", "페이지 목차. “어디에 무엇이 있다”", "팩트시트. “답에 필요한 사실이 여기 다 있다”"],
                ["내용", "링크 목록", "상호·대표원장 자격·전화·주소·좌표·사업자번호·요일별 진료시간·점심시간·휴진일·오시는 길·진료 분야·공식 채널"],
                ["결과", "AI가 답할 재료가 없어 페이지를 일일이 열어야 함", "그 파일 하나로 답이 되는 상태. 긴 버전(/llms-full.txt)에 시술 정의와 FAQ 전문을 별도로 둠"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100"><Td strong>{r[0]}</Td><Td>{r[1]}</Td><Td>{r[2]}</Td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          앞서 본 &ldquo;목요일 오후 8시까지&rdquo;가 바로 이 전환으로 들어간 문장입니다. 목차를 팩트시트로 바꾼 것이
          이 프로젝트에서 가장 효율이 높았던 작업이었습니다. 저희 사이트의 llms.txt도 같은 원칙으로 다시 썼습니다.
        </p>

        <h2>실제로 걸렸던 문제: 기록에 남은 것만 추렸습니다</h2>
        <p>
          GEO 기법보다 기본기에 시간이 훨씬 많이 들어갔습니다. 증상과 결과만 적습니다. 원인과 처리 방법은
          대행사가 그대로 따라 할 수 있는 내용이라 본문에서 뺐고, 아래 작업 기록 전문에 있습니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-slate-50"><Th>겉으로 보인 증상</Th><Th>결과</Th></tr>
            </thead>
            <tbody>
              {[
                ["페이지가 느리고 가끔 503", "첫 바이트 3.85초에서 0.60~0.70초로. 원인은 콘텐츠가 아니라 서버 쪽 설정이었습니다."],
                ["오픈 다음 날 디자인이 사라진 화면", "배포 절차를 고정해 재발 없음. 제작 측 PC에서는 정상으로 보여 몇 시간 동안 몰랐습니다."],
                ["“글을 지웠는데 사이트에 남아 있다”", "일주일 동안 조용히 실패하던 처리를 찾아 해결. 실패를 기록에 남기게 바꿨습니다."],
                ["검색엔진이 “페이지를 찾을 수 없음” 보고", "블로그 글 목록을 가져오던 구조를 바꿔 사라졌던 6건 복구."],
                ["같은 글이 4개 주소로 중복", "대표 주소를 한국어판으로 통일. 사이트맵 308 → 167 → 120건. 페이지가 준 것이 아니라 중복 등록을 걷어낸 것입니다."],
                ["외부 GEO 진단서가 수십 건을 지적", "두 번의 진단 31건 중 11건이 오탐. 지적마다 실제 응답을 열어 고칠 것과 반박할 것을 구분했습니다."],
                ["진료 페이지 내용이 부실하다는 지적", "분량이 아니라 빠진 단계가 문제였습니다. 21개 페이지 보강, 본문 275~1,192자 → 758~1,585자."],
                ["상호에 지역명을 붙일지 논쟁", "실측 결과 상호로 순위가 설명되지 않아 개설신고 명칭을 유지했습니다."],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-100"><Td strong>{r[0]}</Td><Td>{r[1]}</Td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>다시 한다면 이 순서로 합니다</h2>
        <ul>
          <CheckItem><strong>1. 본문을 자사 도메인에 둡니다.</strong> 플랫폼에만 있으면 AI에게는 없는 콘텐츠입니다.</CheckItem>
          <CheckItem><strong>2. 서버에서 완성된 HTML을 보냅니다.</strong> 이걸 놓치면 이후 작업이 전부 무효입니다.</CheckItem>
          <CheckItem><strong>3. 항상 빠르게 열리게 만듭니다.</strong> 콘텐츠보다 먼저입니다.</CheckItem>
          <CheckItem><strong>4. /llms.txt를 팩트시트로 만듭니다.</strong> 목차로 만들면 인용되지 않습니다. 가장 적은 노력으로 가장 큰 차이가 났던 작업입니다.</CheckItem>
          <CheckItem><strong>5. AI 크롤러를 개별 허용합니다.</strong> 기본 설정이 막고 있는 경우가 많습니다. 이 사례에서는 15종을 명시 허용했습니다(<a href="/guide/platform-ai-crawler-status">봇 이름 목록</a>).</CheckItem>
          <CheckItem><strong>6. 사실의 표기를 한 글자까지 통일합니다.</strong></CheckItem>
          <CheckItem><strong>7. 중복 주소를 정리합니다.</strong></CheckItem>
          <CheckItem><strong>8. &ldquo;판단에 쓰이는 값&rdquo;을 본문에 넣습니다.</strong> 일반론은 인용되지 않습니다.</CheckItem>
        </ul>

        <h2>겪고 나서 생각이 바뀐 것</h2>
        <ul>
          <CheckItem><strong>콘텐츠 양은 생각보다 중요하지 않았습니다.</strong> 3쪽짜리 사이트가 167쪽짜리보다 먼저 인용됐습니다. AI가 답할 재료를 꺼내기 쉬운 형태인지가 더 컸습니다.</CheckItem>
          <CheckItem><strong>외부 진단 도구를 그대로 따르면 안 됩니다.</strong> 두 번의 진단에서 31건 중 11건이 오탐이었습니다. 도구는 서버 렌더, 다국어, 허브 페이지 같은 구조를 잘못 읽는 경우가 있습니다. 저희가 만든 <a href="/site-check">무료 사이트 진단</a>도 같은 이유로 결과마다 근거 응답을 함께 보여줍니다.</CheckItem>
          <CheckItem><strong>제약이 오히려 방향을 잡아 줬습니다.</strong> 의료법 때문에 표현을 세게 쓸 수 없었고, 그래서 검증 가능한 사실로만 채웠는데 그 값들이 그대로 인용됐습니다.</CheckItem>
          <CheckItem><strong>대부분의 시간은 GEO가 아니라 기본기에 들어갔습니다.</strong> 캐시, 배포 절차, 중복 주소, 오류 처리. 화려한 기법보다 &ldquo;항상 정상으로 열리는 상태&rdquo;를 유지하는 일이 훨씬 많았습니다.</CheckItem>
        </ul>

        <h2>남은 것: 아직 끝나지 않은 부분</h2>
        <ul>
          <CheckItem><strong>진행 중.</strong> 노출은 특정 시점의 관찰입니다. 유지되는지 주기적으로 재측정하고 있습니다.</CheckItem>
          <CheckItem><strong>진행 중.</strong> 질문형 노출은 이제 시작 단계로, 질의 유형을 넓혀 가며 확인하고 있습니다.</CheckItem>
          <CheckItem><strong>대기.</strong> 비급여 진료비용 등 아직 채우지 못한 정보가 있어, 가격 관련 질의에는 답할 근거가 없습니다.</CheckItem>
        </ul>

        <Callout>
          <strong>주의.</strong> 생성형 AI 답변은 같은 질문이어도 시점, 계정, 모델에 따라 달라집니다. 이 글은 특정
          시점에 관찰된 결과를 기록한 것이며, 순위나 지속 노출을 보장하는 자료가 아닙니다. 치과에서 무엇을
          만들어야 하는지 전체 그림은 <a href="/guide/dental-geo">치과 GEO 가이드</a>에, 의료광고법 안에서
          표현을 다루는 기준은 <a href="/guide/medical-geo">병원·의원 GEO 가이드</a>에 있습니다. 홈페이지
          제작부터 맡기는 쪽을 검토하신다면 <a href="/medical-geo-agency">병원 GEO 대행 안내</a>를 보세요.
        </Callout>

        <CaseAccessRequest
          caseKey="case-dental-llms-factsheet"
          heading="작업 기록 전문"
          intro="위 표에서 뺀 원인과 처리 방법, 오탐으로 판정한 근거, 팩트시트로 바꾼 llms.txt의 실제 구성, 허용한 크롤러 15종의 목록과 설정: 재현 가능한 실행 세부는 본문에 공개하지 않습니다."
          includes={[
            "문제 8건의 원인과 처리 방법 (기록 원문)",
            "외부 진단 31건 중 오탐 11건의 판정 근거",
            "목차에서 팩트시트로 바꾼 llms.txt 구성",
            "명시 허용한 AI 크롤러 15종과 설정 방식",
            "진료 페이지에 추가한 4단계 구조",
            "상호·지역명 실측 표 (상위 16곳)",
          ]}
          buttonLabel="작업 기록 전문 열람 신청"
        />

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
