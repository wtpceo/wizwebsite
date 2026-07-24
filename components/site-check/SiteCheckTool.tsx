"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Search, Loader2, CheckCircle2, AlertTriangle, XCircle, ChevronRight, RotateCcw,
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

const GRADE_UI: Record<Report["grade"], string> = {
  양호: "text-emerald-600",
  보통: "text-amber-500",
  취약: "text-rose-500",
}

export default function SiteCheckTool() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
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
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
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
          </div>

          {/* 항목별 결과 */}
          <div className="space-y-3">
            {report.checks.map((c) => {
              const ui = STATUS_UI[c.status]
              const Icon = ui.icon
              return (
                <div key={c.key} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
                  <span className={`mt-0.5 shrink-0 rounded-lg p-1.5 ring-1 ${ui.ring}`}>
                    <Icon className={`h-5 w-5 ${ui.cls}`} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900">{c.label}</h3>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">{c.tag}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{c.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 전환 CTA — AI 최적화는 시간이 걸리니 상담으로 */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0b1220] to-[#101b2e] px-6 py-10 text-center shadow-xl md:px-10">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">
              기초 점검은 끝났습니다. 진짜 문제는 그다음입니다.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              이 진단은 홈페이지의 <strong className="text-slate-200">구조·기술 상태</strong>만 확인합니다.
              실제로 ChatGPT·네이버 AI가 우리를 추천하는지, 채널별 정보가 어긋나 있지는 않은지는
              사람이 직접 측정해야 합니다. AI 최적화는 하루아침에 되지 않고 몇 주~몇 개월이 걸리기 때문에,
              현재 상태를 정확히 진단하고 순서를 잡는 것이 먼저입니다.
            </p>
            <Link href="/#contact" className="mt-7 inline-block">
              <Button size="lg" className="gap-1 bg-[#00e5a0] px-8 py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]">
                전문가 AI 검색 진단 문의하기
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-3 text-xs text-slate-500">병원·의원은 100% 무료 진단 제공</p>
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
