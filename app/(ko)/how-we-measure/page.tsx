import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Radar, Bell, FileText, Stethoscope, BarChart3, ListChecks } from "lucide-react"
import { DocShell, FaqBlock } from "@/components/shortform/DocParts"
import InsightHero from "@/components/shortform/InsightHero"
import { hreflangFor } from "@/lib/i18n/config"
import { share } from "@/lib/share-meta"

// 제목: 접미사 " | 위즈더플래닝"(8자) 포함 70자 이내 → 현재 33자
const TITLE = "측정 방식: 자체 개발 GEO 관제 시스템으로 매주 재는 것"
const DESC =
  "AI 검색 노출을 정성적 추측이 아닌 자체 개발 GEO 관제 시스템으로 매주 정기 측정합니다. 실제 관제 화면 6장과 자사 측정 점수(10월 19일 16점, 9월 7일 18점)까지 투명하게 공개하며, 고객사에 주간 리포트로 제공합니다."
const URL = "https://wiztheplanning.com/how-we-measure"
const PUBLISHED = "2026-09-09"

export const metadata: Metadata = share({
  title: TITLE,
  description: DESC,
  keywords: ["GEO 관제 시스템", "AI 검색 노출 측정", "GEO 측정 도구", "AI 인용 측정", "주간 리포트", "위즈더플래닝 측정 방식"],
  alternates: { canonical: "/how-we-measure", languages: hreflangFor("/how-we-measure") },
  openGraph: { images: ["/tools/realgeo-dashboard.jpg"], title: TITLE, description: DESC, url: URL, type: "website" },
})

const SCREENS = [
  {
    src: "/tools/realgeo-dashboard.jpg",
    alt: "위즈더플래닝 GEO 관제 대시보드(2026년 10월 19일 측정): REALGEO 스코어 16/100, AI 인용 노출률 20%, 웹 건강도 100, 엔진별 인용 현황",
    // 10/19 캡처는 왼쪽 메뉴·공지·하단 비교 줄을 잘라 내서 나머지 5장과 비율이 다르다
    w: 1546,
    h: 672,
    title: "관제 대시보드",
    body: "위즈더플래닝 자사를 직접 측정한 화면입니다. 2026년 10월 19일 기준 종합 점수는 100점 만점에 16점으로, 9월 7일(18점) 대비 2점 하락했습니다. 하락한 지표도 가감 없이 기록합니다. 브랜드명을 제외한 탐색 질문 점유율(3%)과 브랜드명 지정 질문 점유율(88%)을 분리해 집계하는 이유는, 두 지표를 혼합하면 수치가 과장되기 때문입니다.",
  },
  {
    src: "/tools/realgeo-weekly-report.jpg",
    alt: "주간 리포트 화면: 카테고리 점유율, 출처 인용률 25%, 인용 키워드 4/9, 엔진별 노출, 이번 주 신규 인용과 인용 상실 목록",
    title: "주간 리포트",
    body: "매주 동일한 기준으로 재측정하여 전주 대비 상승·하락 지표를 산출합니다. 해당 주차에는 신규 인용 키워드 2건과 인용 이탈 키워드 3건이 함께 집계되었으며, 이탈 내역까지 투명하게 기록합니다.",
  },
  {
    src: "/tools/realgeo-alerts.jpg",
    alt: "알림 센터 화면: 월요일 자동 측정 후 주간 브리핑과 인용 상실 9건 경고",
    title: "알림 센터",
    body: "매주 월요일 새벽 자동 측정이 완료되면 주간 브리핑과 변동 알림이 생성됩니다. 전주에 인용되던 질문에서 브랜드가 제외될 경우 '인용 상실' 경고가 즉시 표시되어 전담 인력이 최우선으로 점검합니다.",
  },
  {
    src: "/tools/realgeo-prompts.jpg",
    alt: "AI 노출 현황 화면: 질문 10개를 네이버 AI 브리핑·Gemini·ChatGPT·Perplexity에 측정한 멘션·소스·근거 결과",
    title: "질문별 · 엔진별 결과",
    body: "소비자가 실제로 검색하는 탐색 질문을 4대 엔진에 반복 질의하여 브랜드 언급(멘션), 출처 링크(소스), 핵심 근거 활용(근거) 여부를 질문별로 분리 기록합니다.",
  },
  {
    src: "/tools/realgeo-site-audit.jpg",
    alt: "사이트 진단 화면: 웹 건강도 100점, 기술 SEO 96점 5축, 기술 GEO 94점 4축, 발견 52개 페이지 분석",
    title: "사이트 진단",
    body: "검색엔진과 AI 크롤러가 웹사이트를 정확히 읽고 인용할 수 있는 상태인지 52개 전체 페이지를 분석해 점수화합니다. 봇 접근성, 구조화 데이터, 인용 가능성, 기술 건강도를 항목별로 진단하여 개선 우선순위를 도출합니다.",
  },
  {
    src: "/tools/realgeo-monitoring.jpg",
    alt: "모니터링 대시보드: 구글 서치콘솔과 GA4 연동, 최근 28일 클릭 128, 노출 5,731, AI 검색 유입 27",
    title: "실제 유입 확인",
    body: "구글 서치콘솔과 GA4를 연동하여 ChatGPT, Gemini, Perplexity에서 실제로 유입된 방문자 수를 추적합니다. 최근 28일간 자사 사이트로 유입된 AI 검색 방문은 27명이며, 소규모 수치도 있는 그대로 기록합니다.",
  },
]

const ROUTINE = [
  { icon: Radar, title: "월요일 새벽, 자동 측정", body: "사전 정의된 질문 세트를 4대 엔진에 반복 질의하고 웹사이트 기술 진단을 자동으로 수행합니다." },
  { icon: Bell, title: "변동 알림 점검", body: "인용이 이탈된 질문, 경쟁사가 신규 진입한 질문, 웹사이트 내 기술적 오류를 알림으로 즉시 파악합니다." },
  { icon: FileText, title: "주 1회 정기 리포트", body: "전주 대비 지표 증감, 금주 수행 내역, 차주 개선 우선순위를 전담 AE가 정리해 보고합니다." },
  { icon: ListChecks, title: "우선순위 기반 개선", body: "측정 데이터에서 확인된 우선순위에 따라 웹사이트 구조, 콘텐츠, 지도 정보를 정비하고 차주 리포트에 기록합니다." },
]

const FAQ = [
  {
    q: "이 시스템을 광고주도 직접 볼 수 있나요?",
    a: "별도 계정을 제공하지는 않습니다. SEO·GEO 전문 분석 도구이므로 전담 AE가 측정 지표에 해석과 개선 과제를 덧붙여 주 1회 정기 리포트로 정리해 전달합니다.",
  },
  {
    q: "외부에 판매하나요?",
    a: "외부에 판매하지 않습니다. 위즈더플래닝이 고객사 캠페인을 정밀하게 관리하기 위해 자체 개발하여 사내에서만 운영하는 시스템입니다.",
  },
  {
    q: "왜 자사 점수를 그대로 공개하나요?",
    a: "확정적인 노출 보장 대신 투명한 측정을 약속드리기 때문입니다. 자사 종합 점수가 9월 7일 18점에서 10월 19일 16점으로 하락한 기록과 인용 이탈 키워드까지 가감 없이 공개하는 것이 고객사 리포트의 신뢰를 증명하는 기준입니다.",
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
  { icon: BarChart3, title: "브랜드명 제외 질문을 대표 지표로 산정", body: "“위즈더플래닝 어때?”처럼 브랜드명을 포함해 질문하면 AI는 당연히 해당 브랜드를 언급합니다. 따라서 대표 지표인 카테고리 점유율은 브랜드명을 제외한 순수 탐색 질문만을 기준으로 집계합니다." },
  { icon: ListChecks, title: "멘션·출처 링크·핵심 근거의 분리 집계", body: "답변 본문에 브랜드명이 언급된 것(멘션), 출처로 링크된 것(인용), 답변의 핵심 근거로 채택된 것(근거)은 중요도가 다르므로 질문마다 개별 기록합니다." },
  { icon: Stethoscope, title: "웹사이트 기술 구조의 정량 점수화", body: "봇 접근성, 구조화 데이터, 콘텐츠 품질, 신뢰도, 기술 건강도를 축별로 점수화합니다. AI 크롤러가 읽지 못하는 웹사이트는 콘텐츠를 발행해도 인용되지 않으므로 기술 구조를 최우선으로 점검합니다." },
]
const NOT_DO = [
  { title: "외부 솔루션을 판매하지 않습니다", body: "고객사 캠페인 관리를 위해 자체 개발한 사내 전용 시스템으로, 외부 계정 판매 문의는 받지 않습니다." },
  { title: "개별 계정을 분양하지 않습니다", body: "전문 분석 도구이므로 전담 AE가 데이터 해석과 개선안을 정리한 주간 리포트로 제공합니다." },
  { title: "확정적인 노출을 보장하지 않습니다", body: "AI 답변은 엔진과 시점마다 변동됩니다. 사전 보장 대신 동일 기준의 정기 재측정 데이터를 투명하게 보고합니다." },
]
const STATS = [
  { n: "4개", d: "측정 엔진" },
  { n: "주 1회", d: "자동 재측정·리포트" },
  { n: "16점", d: "자사 종합 점수(10월 19일, 직전 18점)" },
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
          text={"말 대신 관제 화면으로\nAI 노출을 증명합니다"}
          mark="관제 화면으로"
          era="AI 검색은 고정된 순위표가 없어 정량적 측정 기준이 필수적입니다"
          lead={
            <>
              위즈더플래닝은 AI 답변을 반복 측정하고 인용 출처를 기록하는 <span className="nw">GEO 관제 시스템을 자체 개발해</span> 사내에서 운영합니다.
              <br />
              아래 화면은 당사를 직접 측정한 실제 데이터로 <span className="nw">가감 없이 그대로 공개합니다.</span>
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
              <p className="geo-lead">측정 대상은 위즈더플래닝 자사입니다. 관제 대시보드는 2026년 10월 19일 측정 화면이며, 나머지 다섯 장은 9월 초기 측정 기록입니다. 고객사 데이터는 보안 원칙에 따라 외부에 공개하지 않습니다.</p>
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
                <p className="geo-eb">핵심 지표</p>
                <h2>
                  과장 없는 측정을 위한{" "}
                  <br />
                  <span>세 가지 핵심 지표</span>
                </h2>
              </div>
              <p className="geo-lead">
                측정 도구 선정 기준은 <Link href="/guide/geo-measurement-tools">GEO 측정 도구 고르는 법</Link>에서, 실제 트래픽 추적 방식은 <Link href="/guide/measure-ai-traffic">AI 검색 유입 측정: 4단계로 나눠 세기</Link>에서 상세히 다루고 있습니다.
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
                  매주 반복되는{" "}
                  <br />
                  <span>정기 측정·개선 프로세스</span>
                </h2>
              </div>
              <p className="geo-lead">월요일 새벽 자동 측정부터 우선순위 기반의 구조 개선까지, 매주 수행한 작업과 지표 변화는 차주 리포트에 투명하게 기록됩니다.</p>
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
                <p className="geo-eb">운영 원칙</p>
                <h2>
                  관제 시스템의{" "}
                  <br />
                  <span>운영 원칙과 비판매 기준</span>
                </h2>
              </div>
              <p className="geo-lead">본 페이지는 솔루션 판매 목적이 아니라, 위즈더플래닝이 어떤 객관적 근거로 캠페인을 운영하는지 안내하기 위해 공개하고 있습니다.</p>
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

        <FaqBlock items={FAQ.map((f) => [f.q, f.a] as [string, string])} note="추가적인 문의 사항을 남겨 주시면 전담 AE가 상세히 안내해 드립니다." />

        <section className="ig-cta" id="contact" aria-label="제안 요청">
          <div className="dp-w ig-cta-in">
            <div>
              <h2>AI 검색 내 브랜드 노출 현황 진단</h2>
              <p>
                동일한 관제 시스템으로 현재 브랜드의 노출 상태를 먼저 측정해 드립니다. 진단 결과만 확인하셔도 무방하며, 병·의원은 <Link href="/medical-diagnosis">병원 AI 검색 무료 진단</Link>을 이용해 주세요.
              </p>
            </div>
            <Link className="p1" href="/contact">
              제안 요청 보내기 <ChevronRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </DocShell>
  )
}
