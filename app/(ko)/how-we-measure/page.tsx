import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Radar, Bell, FileText, Stethoscope, BarChart3, ListChecks } from "lucide-react"
import { DocShell, FaqBlock } from "@/components/shortform/DocParts"
import InsightHero from "@/components/shortform/InsightHero"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 33자
const TITLE = "측정 방식: 자체 개발 GEO 관제 시스템으로 매주 재는 것"
const DESC =
  "AI 검색 노출을 감이 아니라 자체 GEO 관제 시스템으로 매주 잽니다. 관제 화면 6장과 저희 회사 점수(10월 19일 16점, 9월 7일 18점)까지 그대로 공개합니다. 외부에 팔지 않고 광고주께는 주간 리포트로 드립니다."
const URL = "https://wiztheplanning.com/how-we-measure"
const PUBLISHED = "2026-09-09"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["GEO 관제 시스템", "AI 검색 노출 측정", "GEO 측정 도구", "AI 인용 측정", "주간 리포트", "위즈더플래닝 측정 방식"],
  alternates: { canonical: "/how-we-measure" },
  openGraph: { images: ["/tools/realgeo-dashboard.jpg"], title: TITLE, description: DESC, url: URL, type: "website" },
}

const SCREENS = [
  {
    src: "/tools/realgeo-dashboard.jpg",
    alt: "위즈더플래닝 GEO 관제 대시보드(2026년 10월 19일 측정): REALGEO 스코어 16/100, AI 인용 노출률 20%, 웹 건강도 100, 엔진별 인용 현황",
    // 10/19 캡처는 왼쪽 메뉴·공지·하단 비교 줄을 잘라 내서 나머지 5장과 비율이 다르다
    w: 1546,
    h: 672,
    title: "관제 대시보드",
    body: "우리 회사 것입니다. 2026년 10월 19일에 잰 종합 점수는 100점 만점에 16점으로, 9월 7일의 18점보다 2점 내려갔습니다. 좋게 보이려고 숨기지 않습니다. 상호 없는 질문에서의 점유율 3%와 상호를 대고 물었을 때의 88%를 따로 보여주는 이유는, 둘을 섞으면 숫자가 부풀려지기 때문입니다.",
  },
  {
    src: "/tools/realgeo-weekly-report.jpg",
    alt: "주간 리포트 화면: 카테고리 점유율, 출처 인용률 25%, 인용 키워드 4/9, 엔진별 노출, 이번 주 신규 인용과 인용 상실 목록",
    title: "주간 리포트",
    body: "매주 같은 기준으로 다시 재서 지난주 대비 무엇이 올라가고 무엇이 빠졌는지를 냅니다. 이 주에는 새로 인용된 키워드 2건과 인용이 빠진 키워드 3건이 함께 찍혔습니다. 빠진 것도 그대로 적힙니다.",
  },
  {
    src: "/tools/realgeo-alerts.jpg",
    alt: "알림 센터 화면: 월요일 자동 측정 후 주간 브리핑과 인용 상실 9건 경고",
    title: "알림 센터",
    body: "매주 월요일 새벽에 자동 측정이 끝나면 브리핑과 경고가 여기로 들어옵니다. 지난주에 인용되던 질문에서 인용이 빠지면 '인용 상실'로 바로 경고가 뜹니다. 담당자는 출근해서 이 화면부터 봅니다.",
  },
  {
    src: "/tools/realgeo-prompts.jpg",
    alt: "AI 노출 현황 화면: 질문 10개를 네이버 AI 브리핑·Gemini·ChatGPT·Perplexity에 측정한 멘션·소스·근거 결과",
    title: "질문별 · 엔진별 결과",
    body: "손님이 실제로 던질 법한 질문을 네 엔진에 반복해서 묻고, 답변에 이름이 나왔는지(멘션), 출처로 링크됐는지(소스), 답의 근거로 쓰였는지(근거)를 질문마다 따로 기록합니다. 언급과 인용은 다른 것이라 나눠서 셉니다.",
  },
  {
    src: "/tools/realgeo-site-audit.jpg",
    alt: "사이트 진단 화면: 웹 건강도 100점, 기술 SEO 96점 5축, 기술 GEO 94점 4축, 발견 52개 페이지 분석",
    title: "사이트 진단",
    body: "검색엔진과 AI가 홈페이지를 읽고 인용할 수 있는 상태인지 52개 페이지를 전부 돌려 점수로 냅니다. 봇 접근성, 구조화 데이터, 인용 가능성, 기술 건강도를 따로 보기 때문에 어디를 고쳐야 하는지가 항목으로 나옵니다.",
  },
  {
    src: "/tools/realgeo-monitoring.jpg",
    alt: "모니터링 대시보드: 구글 서치콘솔과 GA4 연동, 최근 28일 클릭 128, 노출 5,731, AI 검색 유입 27",
    title: "실제 유입 확인",
    body: "AI 답변에 나왔다고 끝이 아닙니다. 구글 서치콘솔과 GA4를 연동해 ChatGPT, Gemini, Perplexity에서 실제로 넘어온 방문을 셉니다. 최근 28일 저희 사이트로 AI에서 넘어온 방문은 27명입니다. 작아도 그대로 씁니다.",
  },
]

const ROUTINE = [
  { icon: Radar, title: "월요일 새벽, 자동 측정", body: "질문 세트를 네 엔진에 반복해서 묻고, 홈페이지 진단을 다시 돌립니다. 사람이 손으로 고르는 화면 캡처가 아닙니다." },
  { icon: Bell, title: "출근하면 알림부터", body: "인용이 빠진 질문, 경쟁사가 끼어든 질문, 사이트에 새로 생긴 문제가 경고로 올라옵니다." },
  { icon: FileText, title: "주 1회 리포트", body: "지난주 대비 증감, 이번 주에 한 작업, 다음 주 우선순위를 담당 매니저가 직접 써서 드립니다." },
  { icon: ListChecks, title: "우선순위대로 수정", body: "측정에서 드러난 순서대로 홈페이지 구조, 콘텐츠, 플레이스를 손봅니다. 무엇을 왜 고쳤는지는 다음 리포트에 남습니다." },
]

const FAQ = [
  {
    q: "이 시스템을 광고주도 직접 볼 수 있나요?",
    a: "계정을 드리지는 않습니다. 전문 도구라 SEO와 GEO를 아는 사람이 봐야 해석이 됩니다. 광고주께는 이 시스템에서 나온 숫자를 담당 매니저가 해석을 붙여 주 1회 리포트로 정리해 드립니다. 도구를 배우실 필요가 없습니다.",
  },
  {
    q: "외부에 판매하나요?",
    a: "판매하지 않습니다. 위즈더플래닝이 광고주 관리에 쓰기 위해 직접 개발해 사내에서만 씁니다. 이 페이지는 도구를 팔기 위한 것이 아니라, 저희가 어떤 근거로 일하는지 보여드리기 위한 것입니다.",
  },
  {
    q: "왜 자기 회사 점수를 그대로 공개하나요?",
    a: "노출을 보장하는 대신 측정을 약속하기 때문입니다. 좋은 숫자만 골라 보여드리면 그 약속이 무너집니다. 저희 회사 종합 점수가 9월 7일 18점에서 10월 19일 16점으로 내려간 것, 인용이 빠진 키워드 목록까지 그대로 두는 것이 광고주께 드리는 리포트도 그렇게 만든다는 증거입니다.",
  },
]

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: URL,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: "2026-10-29",
  inLanguage: "ko-KR",
  publisher: { "@id": "https://wiztheplanning.com/#organization" },
  primaryImageOfPage: "https://wiztheplanning.com/tools/realgeo-dashboard.jpg",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

// 11-08 대표 「인사이트 메뉴도 디자인 통일」: 청록 → 남색·위즈블루, 서비스 페이지와 같은 첫 화면·칸 문법. 숫자·문장·구조화 데이터는 그대로
const METRICS = [
  { icon: BarChart3, title: "상호 없는 질문만 대표 지표로", body: "“위즈더플래닝 어때?”처럼 이름을 대고 물으면 AI는 당연히 답합니다. 그래서 대표 지표인 카테고리 점유율은 상호가 없는 질문만 셉니다. 브랜드 질문은 따로 검증하고 경고에만 씁니다." },
  { icon: ListChecks, title: "멘션과 인용을 분리", body: "답변 본문에 이름이 나온 것(멘션)과 출처로 링크된 것(인용), 답의 근거로 쓰인 것(근거)은 다른 일입니다. 셋을 질문마다 따로 기록합니다." },
  { icon: Stethoscope, title: "홈페이지 상태를 점수로", body: "봇 접근성, 구조화 데이터, 콘텐츠 품질, 신뢰도, 기술 건강도를 축별로 점수화합니다. AI가 읽지 못하는 홈페이지는 콘텐츠를 아무리 만들어도 인용되지 않기 때문에 이것을 먼저 봅니다." },
]
const NOT_DO = [
  { title: "외부에 팔지 않습니다", body: "광고주 관리에 쓰려고 만들었고 사내에서만 씁니다. 도구 문의는 받지 않습니다." },
  { title: "계정을 드리지 않습니다", body: "전문 도구라 해석이 필요합니다. 광고주께는 담당 매니저가 해석을 붙인 주간 리포트를 드립니다." },
  { title: "노출을 보장하지 않습니다", body: "AI 답변은 엔진과 시점마다 다릅니다. 보장 대신 같은 기준으로 계속 재서 변화를 숫자로 보고합니다." },
]
const STATS = [
  { n: "4개", d: "측정 엔진" },
  { n: "주 1회", d: "자동 재측정·리포트" },
  { n: "16점", d: "우리 회사 종합 점수(10월 19일, 직전 18점)" },
  { n: "0", d: "외부 판매 계정" },
]

export default function Page() {
  return (
    <DocShell>
      <div className="gx ix vx cx mw">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <InsightHero
          label="측정 방식 소개"
          kw="측정 방식 · 자체 개발 GEO 관제 시스템"
          text={"말 대신 관제 화면으로\nAI 노출을 보여 드립니다"}
          mark="관제 화면으로"
          era="AI 검색은 순위표가 없어서 '잘되고 있다'는 말로 넘어가기 쉽습니다"
          lead={
            <>
              저희는 AI 답변을 반복 측정하고 인용 출처를 기록하는 <span className="nw">GEO 관제 시스템을 직접 개발해</span> 사내에서 씁니다.
              <br />
              아래 화면은 전부 저희 회사 자신을 잰 것이라 <span className="nw">가린 것이 없습니다.</span>
            </>
          }
          imgs={SCREENS.map((s) => s.src)}
          cue={{ href: "#screens", label: "관제 화면" }}
        >
          <ul className="mw-stats">
            {STATS.map((s) => (
              <li key={s.d}>
                <b>{s.n}</b>
                <span>{s.d}</span>
              </li>
            ))}
          </ul>
        </InsightHero>

        <section className="dp-sec geo-sec rv mw-screens" id="screens">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">관제 화면</p>
                <h2>
                  관제 화면 6장,{" "}
                  <br />
                  <span>2026년 9월·10월 캡처</span>
                </h2>
              </div>
              <p className="geo-lead">측정 대상은 위즈더플래닝 자신입니다. 관제 대시보드는 2026년 10월 19일 측정 화면이고, 나머지 다섯 장은 9월에 이 페이지를 처음 열 때 찍었습니다. 광고주 화면은 광고주 것이라 공개하지 않습니다.</p>
            </div>
            <ol className="mw-list">
              {SCREENS.map((s, i) => (
                <li key={s.src} className={i % 2 ? "rev" : undefined}>
                  <figure>
                    <img src={s.src} alt={s.alt} width={s.w ?? 1800} height={s.h ?? 1053} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
                  </figure>
                  <div>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dp-sec geo-sec geo-sec-mist rv mw-metrics" id="metrics">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">지표</p>
                <h2>
                  숫자가 부풀려지지 않도록{" "}
                  <br />
                  <span>나눠서 셉니다</span>
                </h2>
              </div>
              <p className="geo-lead">
                도구를 고를 때 먼저 정할 것은 <Link href="/guide/geo-measurement-tools">GEO 측정 도구 고르는 법</Link>에, 유입까지 세는 방법은 <Link href="/guide/measure-ai-traffic">AI 검색 유입 측정: 4단계로 나눠 세기</Link>에 적어 두었습니다.
              </p>
            </div>
            <ul className="mw-cards">
              {METRICS.map((m) => (
                <li key={m.title}>
                  <span className="ic" aria-hidden="true">
                    <m.icon />
                  </span>
                  <b>{m.title}</b>
                  <p>{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dp-sec geo-sec rv mw-routine" id="routine">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">주간 루틴</p>
                <h2>
                  매주 이 순서로{" "}
                  <br />
                  <span>돌아갑니다</span>
                </h2>
              </div>
              <p className="geo-lead">월요일 새벽 자동 측정부터 우선순위대로 고치는 일까지, 무엇을 왜 고쳤는지는 다음 리포트에 남습니다.</p>
            </div>
            <ol className="mw-steps">
              {ROUTINE.map((r, i) => (
                <li key={r.title}>
                  <span className="ic" aria-hidden="true">
                    <r.icon />
                  </span>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{r.title}</b>
                  <p>{r.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dp-sec geo-sec rv mw-k" id="not-for-sale">
          <div className="dp-w">
            <div className="gt-head">
              <div>
                <p className="geo-eb">하지 않는 것</p>
                <h2>
                  이 시스템으로{" "}
                  <br />
                  <span>하지 않는 것</span>
                </h2>
              </div>
              <p className="geo-lead">도구를 팔기 위한 페이지가 아닙니다. 저희가 어떤 근거로 일하는지 보여 드리려고 엽니다.</p>
            </div>
            <ul className="mw-not">
              {NOT_DO.map((h) => (
                <li key={h.title}>
                  <b>{h.title}</b>
                  <p>{h.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqBlock items={FAQ.map((f) => [f.q, f.a] as [string, string])} note="여기 없는 질문은 문의로 남겨 주세요. 담당자가 답해 드립니다." />

        <section className="ig-cta" id="contact" aria-label="제안 요청">
          <div className="dp-w ig-cta-in">
            <div>
              <h2>우리 브랜드는 지금 AI 검색에서 어떻게 보이는지부터</h2>
              <p>
                같은 시스템으로 현재 상태를 먼저 재 드립니다. 진단 결과만 받아 보시고 마무리하셔도 됩니다. 병·의원은 <Link href="/medical-diagnosis">병원 AI 검색 무료 진단</Link>으로 오시면 됩니다.
              </p>
            </div>
            <Link className="p1" href="/business/contact">
              제안 요청 보내기 <ChevronRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </DocShell>
  )
}
