import type { Metadata } from "next"
import { Stethoscope, Check, ShieldCheck, BarChart3, Code2, Phone, ChevronRight, Search, MessageSquareText, EyeOff, Gift } from "lucide-react"
import LukeApplyForm from "@/components/partners/LukeApplyForm"

// 루크코리아 제휴 병원 전용 랜딩 — 문자(SMS) 유입 전용.
// 비공개 페이지: noindex + 사이트맵 미등록 + 사이트 내 링크 없음. robots.txt에는 넣지 않는다(경로 노출 방지).

const TITLE = "루크코리아 제휴 병원 — 무료 AI 진단서"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  robots: { index: false, follow: false, nocache: true },
}

const ZEROCLICK = [
  {
    icon: Search,
    t: "환자가 검색창에 묻습니다",
    d: "“○○ 잘하는 병원 어디야?” — 네이버에도, 구글에도, 이제는 ChatGPT에도 묻습니다.",
  },
  {
    icon: MessageSquareText,
    t: "AI가 답을 끝내버립니다",
    d: "네이버 AI 브리핑·ChatGPT·제미나이가 병원 몇 곳을 골라 바로 답합니다. 환자는 더 이상 목록을 클릭하며 비교하지 않습니다.",
  },
  {
    icon: EyeOff,
    t: "그 답에 없으면, 없는 병원입니다",
    d: "AI가 추천한 몇 곳에서 선택이 끝납니다. 답변에 포함되지 못한 병원은 환자의 선택지에 존재하지 않습니다.",
  },
]

const STEPS = [
  { icon: BarChart3, t: "AI 검색 진단", d: "네이버 AI·ChatGPT·제미나이에 실제 환자 질문을 넣어 우리 병원 언급 여부를 실측합니다." },
  { icon: Code2, t: "홈페이지 기술 점검", d: "AI 크롤러가 홈페이지를 읽을 수 있는지부터 확인합니다. 막혀 있으면 콘텐츠를 아무리 만들어도 소용없습니다." },
  { icon: ShieldCheck, t: "의료광고법 안에서 콘텐츠 구조화", d: "환자 언어 Q&A와 구조화 데이터를 설계하되, 의료광고 기준을 지키는 범위 안에서만 진행합니다." },
  { icon: BarChart3, t: "월 1회 재측정 리포트", d: "엔진별 노출 변화를 매월 같은 기준으로 재측정해 숫자로 보고합니다." },
]

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 슬림 헤더 — 랜딩 전용 (사이트 내비 없음, 이탈 최소화) */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto flex h-16 max-w-3xl items-center justify-between px-4 md:px-6">
          <span className="text-lg font-extrabold tracking-tight text-gray-900">
            LUKE KOREA<span className="text-[#00b37f]">.</span>
          </span>
          <a href="tel:1670-0704" className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-[#00b37f]">
            <Phone className="h-4 w-4" /> 1670-0704
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* 히어로 — 제로클릭 훅 */}
        <section className="relative overflow-hidden bg-[#070b14] py-16 md:py-24">
          <div className="geo-grid-bg absolute inset-0 opacity-50" />
          <div className="absolute -top-24 right-1/4 h-[300px] w-[480px] rounded-full bg-[#00e5a0]/[0.08] blur-3xl" />
          <div className="container relative mx-auto max-w-3xl px-4 md:px-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00e5a0]/30 bg-[#00e5a0]/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#00e5a0]">
              <Stethoscope className="h-3.5 w-3.5" />
              LUKE KOREA · 제휴 병원 특별 프로그램
            </span>
            <h1 className="mt-6 text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-[1.2] tracking-tight text-white">
              제로클릭 시대,
              <br />
              환자는 이제 <span className="text-[#00e5a0]">클릭하지 않습니다.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              <strong className="text-white">네이버 AI 브리핑 · ChatGPT · 제미나이</strong>가 병원
              몇 곳을 골라 바로 답해주는 시대. 검색 순위가 아니라{" "}
              <strong className="text-white">AI의 답변에 떠야</strong> 환자가 옵니다.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              루크코리아 제휴 병원을 위해 특별히 준비했습니다 —{" "}
              <strong className="text-[#00e5a0]">우리 병원이 지금 AI에 어떻게 나오는지, 무료
              진단서로 먼저 확인하세요.</strong> 비용 없이, 계약 없이.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#00e5a0] px-8 py-4 text-base font-bold text-[#070b14] shadow-lg shadow-[#00e5a0]/25 transition-colors hover:bg-[#3cf0bb]"
              >
                무료 진단서 받기 <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="tel:1670-0704"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 px-8 py-4 text-base font-bold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                <Phone className="h-4 w-4" /> 전화로 바로 상담
              </a>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
              {[
                { n: "3개", d: "AI 엔진 실측" },
                { n: "월 1회", d: "재측정 리포트" },
                { n: "0원", d: "계약 전 진단" },
                { n: "1일 내", d: "우선 상담 연락" },
              ].map((s) => (
                <div key={s.d}>
                  <p className="text-lg font-extrabold text-[#00e5a0]">{s.n}</p>
                  <p className="mt-0.5 text-slate-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 제로클릭 3단 */}
        <section className="container mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-16">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">ZERO-CLICK</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            지금 환자의 선택은 이렇게 끝납니다
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {ZEROCLICK.map((z, i) => (
              <div key={z.t} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <z.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-600">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-extrabold leading-snug text-gray-900">{z.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{z.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#0b1220] px-6 py-5">
            <p className="text-base font-bold leading-relaxed text-white md:text-lg">
              문제는 하나입니다 — <span className="text-[#00e5a0]">우리 병원이 그 답변에 있는가?</span>
              <span className="ml-2 font-normal text-slate-400">확인하는 데 1분이면 됩니다. 아래에서 무료 진단서를 신청하세요.</span>
            </p>
          </div>
        </section>

        {/* 루크코리아 특별 프로그램 */}
        <section className="bg-[#f6f8f7] py-14 md:py-16">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-emerald-600">SPECIAL</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              루크코리아 제휴 병원에만 드립니다
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-[#00b37f]/30 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <Gift className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-gray-900">무료 AI 진단서</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  네이버 AI 브리핑·ChatGPT·제미나이 <strong>3개 엔진</strong>에 실제 환자 질문을 넣어
                  우리 병원이 언급되는지, 경쟁 병원은 어떤지, 잘못된 정보가 나오진 않는지{" "}
                  <strong>실측해서 진단서로 드립니다.</strong> 계약 여부와 무관하게 무료입니다.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-gray-900">제휴 병원 우선 상담</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  루크코리아 제휴 병원은 담당 마케터가 <strong>영업일 1일 내 직접</strong> 연락드리고,
                  진단 결과를 바탕으로 우리 병원에 필요한 것만 제안합니다. 필요 없으면 진단서만
                  받으셔도 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 무엇을 해주나 */}
        <section className="container mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            신청하면 이렇게 진행됩니다
          </h2>
          <div className="mt-6 space-y-3">
            {STEPS.map((s, i) => (
              <div key={s.t} className="flex gap-4 rounded-2xl border border-gray-200 bg-[#f9fafb] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-extrabold text-gray-900">
                    <span className="mr-1.5 font-mono text-xs text-emerald-600">0{i + 1}</span>
                    {s.t}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 정직 한 줄 */}
          <div className="mt-8 rounded-2xl border-l-4 border-[#00b37f] bg-emerald-50 px-5 py-4">
            <p className="text-sm leading-relaxed text-gray-800">
              <strong>노출을 &lsquo;보장&rsquo;하지 않습니다.</strong> AI 답변은 엔진·시점마다 달라
              누구도 보장할 수 없습니다. 대신 시작 전 실측하고, 매월 같은 기준으로 재측정해{" "}
              <strong>변화를 숫자로 보고</strong>합니다. &lsquo;보장&rsquo;을 약속하는 곳을 오히려
              조심하세요.
            </p>
          </div>
        </section>

        {/* 신청 폼 */}
        <section id="apply" className="bg-[#070b14] py-14 md:py-16">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <p className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">FREE REPORT</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              무료 진단서 받기
            </h2>
            <p className="mt-2 text-base text-slate-400">
              1분이면 신청 끝. <strong className="text-slate-200">우리 병원이 AI에 어떻게 나오는지</strong>부터
              확인하고 결정하세요.
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {["3개 AI 엔진 실측", "경쟁 병원 비교 포함", "계약 없이 진단서만 OK"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#00e5a0]" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LukeApplyForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        루크코리아 제휴 병원 전용 안내 · 상담 1670-0704
      </footer>
    </div>
  )
}
