"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Info } from "lucide-react"
import Link from "next/link"
import { readAttribution } from "@/lib/attribution"

// 기업 제안 요청 폼.
// 자영업 문의 폼과 다른 점 세 가지:
//  1) 회사 이메일을 필수로 받는다(개인 문의가 자연히 걸러진다).
//  2) 월 예산 구간을 받아 기준(리테이너 월 300만원) 미만이면 무료 진단 경로를 안내한다. 막지는 않는다.
//  3) /api/contact 로 보내되 language="기업 제안 요청" 태그를 붙여 관리자 메일 제목에서 바로 구분되게 한다.
const BUDGETS = [
  "월 300만원 미만",
  "월 300~500만원",
  "월 500~1,000만원",
  "월 1,000~3,000만원",
  "월 3,000만원 이상",
  "아직 미정",
]
const TIMING = ["1개월 안에", "1~3개월 안", "3개월 이후", "검토 중"]
const NEEDS = [
  "AI 검색(GEO) 노출",
  "검색 최적화(SEO)",
  "홈페이지·랜딩 구축",
  "콘텐츠 제작",
  "광고 운영(메타·구글)",
  "측정·리포트 체계",
]

const inputCls =
  "h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none transition-colors focus:border-[#00b57f]"
const labelCls = "mb-1.5 block text-sm font-semibold text-gray-800"

export default function BusinessContactForm() {
  const [f, setF] = useState({
    company: "", name: "", role: "", email: "", phone: "", site: "",
    budget: BUDGETS[1], timing: TIMING[1], agency: "없음", message: "",
  })
  const [needs, setNeeds] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }))
  const toggleNeed = (n: string) =>
    setNeeds((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]))

  const underMinimum = f.budget === BUDGETS[0]

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    if (!f.company.trim() || !f.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()) || !f.message.trim()) {
      setErr("회사명, 담당자명, 회사 이메일, 요청 내용은 꼭 적어 주세요.")
      return
    }
    setErr("")
    setStatus("sending")
    try {
      const body = [
        `[기업 제안 요청]`,
        `회사: ${f.company}`,
        `담당자: ${f.name}${f.role ? ` (${f.role})` : ""}`,
        `웹사이트: ${f.site || "미입력"}`,
        `월 예산: ${f.budget}`,
        `시작 시기: ${f.timing}`,
        `현재 대행사: ${f.agency}`,
        `필요한 일: ${needs.length ? needs.join(", ") : "미선택"}`,
        "",
        f.message,
      ].join("\n")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attribution: readAttribution(),
          name: f.name,
          email: f.email,
          phone: f.phone,
          storeName: f.company,
          message: body,
          language: "기업 제안 요청",
        }),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("done")
    } catch {
      setStatus("error")
      setErr("전송에 실패했습니다. 잠시 뒤 다시 시도하시거나 wiz@wiztheplanning.com 으로 보내 주세요.")
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <p className="text-lg font-bold text-emerald-800">제안 요청이 접수됐습니다.</p>
        <p className="text-sm leading-relaxed text-emerald-900/80">
          담당자가 내용을 확인한 뒤 회사 메일로 회신드립니다. 기준선 측정 자료가 필요하면 회신에 함께
          요청드립니다.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="biz-company">회사명 *</label>
          <input id="biz-company" value={f.company} onChange={set("company")} className={inputCls} autoComplete="organization" />
        </div>
        <div>
          <label className={labelCls} htmlFor="biz-site">웹사이트</label>
          <input id="biz-site" value={f.site} onChange={set("site")} className={inputCls} placeholder="https://" autoComplete="url" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="biz-name">담당자명 *</label>
          <input id="biz-name" value={f.name} onChange={set("name")} className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="biz-role">직책·부서</label>
          <input id="biz-role" value={f.role} onChange={set("role")} className={inputCls} placeholder="예) 마케팅팀 팀장" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="biz-email">회사 이메일 *</label>
          <input id="biz-email" type="email" value={f.email} onChange={set("email")} className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls} htmlFor="biz-phone">연락처</label>
          <input id="biz-phone" type="tel" value={f.phone} onChange={set("phone")} className={inputCls} inputMode="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="biz-budget">월 마케팅 예산 (대행료 기준)</label>
          <select id="biz-budget" value={f.budget} onChange={set("budget")} className={inputCls}>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="biz-timing">시작 시기</label>
          <select id="biz-timing" value={f.timing} onChange={set("timing")} className={inputCls}>
            {TIMING.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {underMinimum && (
        <div className="flex gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            기업 대행은 월 300만원(대행료 기준)부터 진행합니다. 이 구간이라면{" "}
            <Link href="/diagnosis" className="font-bold underline underline-offset-2">무료 AI 검색 진단</Link>이나{" "}
            <Link href="/site-check" className="font-bold underline underline-offset-2">무료 사이트 진단</Link>이 더 맞습니다.
            그대로 보내 주셔도 확인은 합니다.
          </p>
        </div>
      )}

      <div>
        <label className={labelCls} htmlFor="biz-agency">현재 대행사</label>
        <select id="biz-agency" value={f.agency} onChange={set("agency")} className={inputCls}>
          {["없음", "있음 (교체 검토)", "있음 (추가 파트너 검토)", "인하우스 운영 중"].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className={labelCls}>필요한 일 (여러 개 선택 가능)</legend>
        <div className="flex flex-wrap gap-2">
          {NEEDS.map((n) => {
            const on = needs.includes(n)
            return (
              <button
                key={n}
                type="button"
                onClick={() => toggleNeed(n)}
                aria-pressed={on}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  on ? "border-[#00b57f] bg-[#00b57f] text-white" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                {n}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label className={labelCls} htmlFor="biz-message">요청 내용 *</label>
        <textarea
          id="biz-message"
          value={f.message}
          onChange={set("message")}
          rows={5}
          placeholder="지금 상황과 목표를 적어 주세요. 제안서에 필요한 내용(평가 항목, 제출 기한, 의사결정 절차)이 있으면 함께 적어 주시면 그 형식에 맞춰 회신합니다."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-[#00b57f]"
        />
      </div>

      <p className="text-xs leading-relaxed text-gray-500">
        보내 주신 정보는 문의 응대와 제안 준비에만 씁니다. 마케팅 수신 동의를 받지 않습니다.{" "}
        <Link href="/privacy" className="underline underline-offset-2">개인정보처리방침</Link>
      </p>

      {err && <p className="text-sm font-semibold text-rose-600">{err}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00b57f] text-base font-bold text-white transition-colors hover:bg-[#00a172] disabled:opacity-70"
      >
        {status === "sending" ? (<><Loader2 className="h-5 w-5 animate-spin" /> 보내는 중</>) : "제안 요청 보내기"}
      </button>
    </form>
  )
}
