"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Search, Loader2, CheckCircle2, AlertTriangle, XCircle, ChevronRight, RotateCcw, Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

type CheckStatus = "pass" | "warn" | "fail"
type CheckResult = {
  key: string
  label: string
  status: CheckStatus
  detail: string
  tag: "GEO" | "SEO" | "기술"
  weight?: number
}
type Report = {
  url: string
  score: number
  grade: "양호" | "보통" | "취약"
  summary: { pass: number; warn: number; fail: number; total: number }
  checks: CheckResult[]
}

const STATUS_UI: Record<CheckStatus, { icon: typeof CheckCircle2; cls: string; ring: string }> = {
  pass: { icon: CheckCircle2, cls: "text-emerald-600", ring: "bg-emerald-50 ring-emerald-100" },
  warn: { icon: AlertTriangle, cls: "text-amber-500", ring: "bg-amber-50 ring-amber-100" },
  fail: { icon: XCircle, cls: "text-rose-500", ring: "bg-rose-50 ring-rose-100" },
}

// 이게 막히면 나머지를 다 갖춰도 노출이 0이 되는 항목. 맨 위로 올린다.
const CRITICAL_KEYS = new Set(["indexable", "ai_crawler", "biz_schema"])

// 심각도 → 비중 순으로 정렬. 사장님이 위에서부터 순서대로 고치면 되게.
function byPriority(a: CheckResult, b: CheckResult) {
  const crit = (c: CheckResult) => (CRITICAL_KEYS.has(c.key) ? 1 : 0)
  return crit(b) - crit(a) || (b.weight ?? 1) - (a.weight ?? 1)
}

const GRADE_UI: Record<Report["grade"], string> = {
  양호: "text-emerald-600",
  보통: "text-amber-500",
  취약: "text-rose-500",
}

export default function SiteCheckTool() {
  const [url, setUrl] = useState("")
  const [showPasses, setShowPasses] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [rateLimited, setRateLimited] = useState(false)
  const [report, setReport] = useState<Report | null>(null)

  // 결과가 뜬 상태에서 '뒤로가기' 하면 사이트를 떠나지 않고 입력 화면으로 돌아오게
  useEffect(() => {
    const onPop = () => setReport(null)
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const run = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim() || loading) return
    setLoading(true)
    setError("")
    setRateLimited(false)
    setReport(null)
    trackEvent("site_check_run")
    try {
      const res = await fetch("/api/site-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || "진단 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.")
        setRateLimited(res.status === 429 || Boolean(data?.rateLimited))
      } else {
        setReport(data)
        // 히스토리에 결과 상태를 쌓아 '뒤로가기'가 입력 화면으로 돌아오게
        window.history.pushState({ siteCheckResult: true }, "")
        trackEvent("site_check_result", { score: data.score, grade: data.grade })
      }
    } catch {
      setError("네트워크 오류입니다. 잠시 후 다시 시도해 주세요.")
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setReport(null)
    setError("")
    setUrl("")
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* 입력 폼 */}
      {!report && (
        <form onSubmit={run} className="rounded-2xl border border-white/10 bg-white p-2 shadow-2xl sm:flex sm:gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-xl px-3">
            <Search className="h-5 w-5 shrink-0 text-gray-400" />
            <input
              type="text"
              inputMode="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="우리 홈페이지 주소 입력 (예: example.com)"
              className="h-12 w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-400"
              disabled={loading}
              aria-label="진단할 홈페이지 주소"
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !url.trim()}
            className="mt-2 h-12 w-full gap-1 bg-[#00e5a0] px-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb] sm:mt-0 sm:w-auto"
          >
            {loading ? (
              <><Loader2 className="h-5 w-5 animate-spin" /> 진단 중…</>
            ) : (
              <>무료 진단 <ChevronRight className="h-5 w-5" /></>
            )}
          </Button>
        </form>
      )}

      {loading && (
        <p className="mt-4 text-center text-sm text-slate-400">
          실제 사이트를 열어 SEO·GEO 요소를 확인하고 있습니다. 보통 5초 이내에 끝납니다.
        </p>
      )}

      {error && (
        <div className={`mt-4 rounded-xl border px-4 py-3 text-sm ${rateLimited ? "border-amber-200 bg-amber-50 text-amber-800" : "border-rose-200 bg-rose-50 text-rose-700"}`}>
          <p>{error}</p>
          {rateLimited && (
            <Link
              href="/#contact"
              onClick={() => trackEvent("site_check_cta", { grade: "rate_limited" })}
              className="mt-2 inline-flex items-center gap-1 font-bold text-emerald-700 underline-offset-4 hover:underline"
            >
              GEO 최적화 진단 요청하기 <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      {/* 결과 */}
      {report && (
        <div className="space-y-6">
          {/* 점수 카드 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="min-w-0 text-center sm:text-left">
                <p className="truncate text-sm text-gray-500">{report.url}</p>
                <p className="mt-1 text-lg font-bold text-gray-900">SEO · GEO 기초 진단 결과</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`text-4xl font-extrabold tabular-nums ${GRADE_UI[report.grade]}`}>
                    {report.score}
                    <span className="text-lg text-gray-300">/100</span>
                  </div>
                  <div className={`text-sm font-bold ${GRADE_UI[report.grade]}`}>{report.grade}</div>
                </div>
              </div>
            </div>
            <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full ${report.grade === "양호" ? "bg-emerald-500" : report.grade === "보통" ? "bg-amber-400" : "bg-rose-400"}`}
                style={{ width: `${report.score}%` }}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> 양호 {report.summary.pass}</span>
              <span className="flex items-center gap-1.5"><AlertTriangle className="h-4 w-4 text-amber-500" /> 보완 {report.summary.warn}</span>
              <span className="flex items-center gap-1.5"><XCircle className="h-4 w-4 text-rose-500" /> 취약 {report.summary.fail}</span>
            </div>
            <p className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-xs leading-relaxed text-gray-500">
              이 진단은 <strong className="text-gray-700">입력하신 페이지 1곳(보통 홈페이지)</strong> 기준입니다.
              세부 페이지 전체와 실제 AI 노출까지 보는 정밀 분석은 아래 정밀 진단에서 제공됩니다.
            </p>
          </div>

          {/* 항목별 결과 — 심각도 순으로 묶어서, 위에서부터 고치면 되게 */}
          {(() => {
            const fails = report.checks.filter((c) => c.status === "fail").sort(byPriority)
            const warns = report.checks.filter((c) => c.status === "warn").sort(byPriority)
            const passes = report.checks.filter((c) => c.status === "pass").sort(byPriority)

            const Row = ({ c, n }: { c: CheckResult; n?: number }) => {
              const ui = STATUS_UI[c.status]
              const Icon = ui.icon
              const isCrit = CRITICAL_KEYS.has(c.key) && c.status === "fail"
              return (
                <div
                  className={`flex items-start gap-3 rounded-2xl border bg-white p-4 md:p-5 ${
                    isCrit ? "border-rose-300 ring-1 ring-rose-100" : "border-gray-200"
                  }`}
                >
                  {n ? (
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                      {n}
                    </span>
                  ) : (
                    <span className={`mt-0.5 shrink-0 rounded-lg p-1.5 ring-1 ${ui.ring}`}>
                      <Icon className={`h-5 w-5 ${ui.cls}`} />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900">{c.label}</h3>
                      {isCrit && (
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                          이것부터
                        </span>
                      )}
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">{c.tag}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{c.detail}</p>
                  </div>
                </div>
              )
            }

            return (
              <div className="space-y-8">
                {fails.length > 0 && (
                  <div>
                    <h2 className="flex items-center gap-2 text-lg font-extrabold text-gray-900">
                      <XCircle className="h-5 w-5 text-rose-500" />
                      지금 고쳐야 합니다
                      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-700">{fails.length}</span>
                    </h2>
                    <p className="mb-3 mt-1 text-sm text-gray-500">번호 순서대로 고치시면 됩니다. 위쪽일수록 노출에 미치는 영향이 큽니다.</p>
                    <div className="space-y-3">
                      {fails.map((c, i) => <Row key={c.key} c={c} n={i + 1} />)}
                    </div>
                  </div>
                )}

                {warns.length > 0 && (
                  <div>
                    <h2 className="flex items-center gap-2 text-lg font-extrabold text-gray-900">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      고치면 좋아집니다
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">{warns.length}</span>
                    </h2>
                    <p className="mb-3 mt-1 text-sm text-gray-500">당장 노출을 막지는 않지만, 손보면 검색·AI가 읽기 쉬워집니다.</p>
                    <div className="space-y-3">
                      {warns.map((c) => <Row key={c.key} c={c} />)}
                    </div>
                  </div>
                )}

                {passes.length > 0 && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowPasses((v) => !v)}
                      className="flex w-full items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left hover:bg-gray-50"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <span className="text-base font-bold text-gray-900">이미 잘 되어 있습니다</span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">{passes.length}</span>
                      <ChevronRight className={`ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform ${showPasses ? "rotate-90" : ""}`} />
                    </button>
                    {showPasses && (
                      <div className="mt-3 space-y-3">
                        {passes.map((c) => <Row key={c.key} c={c} />)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })()}

          {/* 2단계 안내 — 방금 본 건 '홈페이지 상태'일 뿐, AI 실제 노출은 정밀 진단 필요 */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1220] to-[#101b2e] shadow-xl">
            <div className="relative px-6 py-9 md:px-10">
              <div className="geo-grid-bg absolute inset-0 opacity-40" />
              <div className="relative">
                {/* 단계 표시 */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 font-semibold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> 1단계 · 홈페이지 상태 확인 완료
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-extrabold leading-snug text-white md:text-2xl">
                  {report.summary.fail > 0
                    ? `취약 항목 ${report.summary.fail}개가 발견됐습니다. 그런데 이건 절반뿐입니다.`
                    : "홈페이지 구조는 확인했습니다. 그런데 이건 절반뿐입니다."}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                  이 진단은 홈페이지의 <strong className="text-slate-200">구조·기술 상태</strong>를 보여줍니다.
                  하지만 <strong className="text-slate-200">실제로 ChatGPT·네이버 AI가 우리를 얼마나
                  추천하는지</strong>는 이 화면으로 알 수 없습니다. 사람이 여러 질문을 반복 측정해야만
                  나오는 데이터이기 때문입니다.
                </p>

                {/* 2단계에서만 알 수 있는 것 — 잠금 프리뷰 */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400">
                    <Lock className="h-3.5 w-3.5" />
                    2단계 · GEO 최적화 정밀 진단에서만 확인 가능
                  </p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {[
                      "홈페이지 외 세부 페이지 전체 정밀 분석",
                      "AI 엔진별 노출 점유율 (네이버·ChatGPT·제미나이)",
                      "우리 대신 추천되는 경쟁사 분석",
                      "AI가 잘못 안내하는 오정보 목록",
                      "채널 간 정보 불일치(비대칭) 점검",
                      "인용받기 위한 개선 우선순위 로드맵",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00e5a0]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  AI 최적화는 하루아침에 되지 않고 보통 <strong className="text-slate-200">몇 주~몇 개월</strong>이
                  걸립니다. 그래서 지금 정확히 진단하고 순서를 잡는 것이 먼저입니다.
                </p>

                <div className="mt-7">
                  <Link href="/#contact" onClick={() => trackEvent("site_check_cta", { grade: report.grade })}>
                    <Button size="lg" className="gap-1 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                      GEO 최적화 진단 요청하기
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <p className="mt-3 text-xs text-slate-500">
                    담당 전문가가 정밀 진단 리포트를 만들어 직접 설명드립니다 · 병원·의원은 100% 무료
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition-colors hover:text-emerald-600"
            >
              <RotateCcw className="h-4 w-4" />
              다른 사이트 진단하기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
