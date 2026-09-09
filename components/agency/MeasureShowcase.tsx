import Link from "next/link"
import { ArrowRight, Radar } from "lucide-react"

// 홈 대표 자리: 히어로·숫자 띠 바로 아래. "말이 아니라 관제 화면으로 관리하는 회사"를 첫 화면에서 보여준다.
export default function MeasureShowcase() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-5">
        <div className="md:col-span-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wide text-emerald-700">
            <Radar className="h-3.5 w-3.5" />
            자체 개발 GEO 관제 시스템
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-gray-900 md:text-3xl">
            감이 아니라<br />관제 화면으로 관리합니다
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            네이버 AI 브리핑, ChatGPT, Gemini, Perplexity에 손님의 질문을 매주 반복해서 묻고, 답변에
            우리가 나왔는지와 출처로 무엇이 달렸는지를 기록합니다. 직접 만든 시스템이고, 사내에서만 씁니다.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-gray-700">
            {[
              "월요일 새벽 자동 측정, 주 1회 리포트",
              "인용이 빠지면 바로 경고",
              "우리 회사 점수 18점까지 그대로 공개",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="/how-we-measure"
            className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 underline-offset-4 hover:underline"
          >
            관제 화면 6장 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Link href="/how-we-measure" className="group block md:col-span-3">
          <img
            src="/tools/realgeo-dashboard.jpg"
            alt="위즈더플래닝 GEO 관제 대시보드 화면: REALGEO 스코어, AI 인용 노출률, 엔진별 인용, 웹 건강도"
            width={1800}
            height={1053}
            loading="lazy"
            className="w-full rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/70 transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p className="mt-2 text-center text-xs text-gray-400">2026년 9월 9일, 위즈더플래닝 자체 워크스페이스 캡처</p>
        </Link>
      </div>
    </section>
  )
}
