"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Loader2, CheckCircle2 } from "lucide-react"
import { readAttribution } from "@/lib/attribution"
import { trackInfluencerProposalSubmit } from "@/lib/analytics"
import { useFormGuard } from "@/components/forms/FormGuard"

// IMC·인플루언서 섭외 후보 리스트 요청 폼.
// 기업 제안 요청 폼과 다른 점:
//  1) '필요한 것'(상품)과 월 총예산(광고비+대행료)을 맨 앞에서 먼저 고른다. 처음에는 아무것도 고르지 않은 상태다.
//     상품은 페이지의 상품 목록에서 'influencer:pick' 이벤트로 미리 골라 올 수 있다. 고른 값은 generate_lead 의 product, 메일 제목에 붙는다.
//  2) 어느 구간을 골라도 막지 않고 그대로 접수한다. '아직 정하지 않았어요'에만 짧은 안내를 띄운다. 예산은 generate_lead 의 lead_budget 으로만 남는다(2026-11-03 대표 지시).
//  3) /api/contact 로 보내되 language="IMC·인플루언서 섭외" 태그를 붙여 관리자 메일 제목에서 구분한다.
export const NEEDS = ["브랜드 캠페인 섭외", "공구·판매형 섭외", "중국 관광객 마케팅", "숏폼 제작", "아직 모르겠어요"]
const BUDGETS = ["1,000만 원 미만", "1,000만 원 이상 ~ 3,000만 원 미만", "3,000만 원 이상", "아직 정하지 않았어요"]

const inputCls =
  "h-[50px] w-full rounded-md border border-slate-300 bg-white px-3.5 text-[15px] text-[#020817] outline-none transition-colors placeholder:text-slate-400 focus:border-[#020817]"
const labelCls = "mb-[7px] block text-[14.5px] font-semibold text-[#020817]"
const optional = <span className="font-normal text-slate-500"> (선택)</span>

function Choice({ name, items, value, onPick }: { name: string; items: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {items.map((b) => {
        const on = value === b
        return (
          <label
            key={b}
            className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-md bg-white py-2.5 text-[15.5px] leading-snug text-[#020817] transition-colors hover:bg-[#f3f5f7] ${
              on ? "border-2 border-[#020817] px-[17px] font-bold" : "border border-slate-300 px-[18px]"
            }`}
          >
            <input type="radio" name={name} value={b} checked={on} onChange={() => onPick(b)} className="sr-only" />
            <span
              aria-hidden
              className={`h-4 w-4 flex-none rounded-full ${on ? "border-[5px] border-[#020817]" : "border-[1.5px] border-slate-400"}`}
            />
            {b}
          </label>
        )
      })}
    </div>
  )
}

export default function InfluencerContactForm() {
  const [need, setNeed] = useState("")
  const [budget, setBudget] = useState("")
  const [f, setF] = useState({ company: "", name: "", email: "", phone: "", product: "", timing: "", creators: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")
  // 상태값은 다음 렌더에서야 바뀌어 빠른 연타를 못 막는다. 보내는 중인지는 ref로 바로 잠근다
  const sending = useRef(false)
  const { guardFields, guardValues } = useFormGuard()

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }))

  const pickBudget = (b: string) => {
    setBudget(b)
    setErr("")
  }

  // 상품 목록의 '이걸로 후보 받기'가 보내는 값을 받아 미리 고른다
  useEffect(() => {
    const onPick = (e: Event) => {
      const v = (e as CustomEvent<string>).detail
      if (NEEDS.includes(v)) {
        setNeed(v)
        setErr("")
      }
    }
    window.addEventListener("influencer:pick", onPick)
    return () => window.removeEventListener("influencer:pick", onPick)
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (sending.current) return
    if (!need) {
      setErr("필요한 것을 먼저 골라 주세요.")
      return
    }
    if (!budget) {
      setErr("월 총예산을 골라 주세요.")
      return
    }
    if (!f.company.trim() || !f.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()) || !f.product.trim()) {
      setErr("회사명, 담당자 이름, 회사 이메일, 알리고 싶은 제품·서비스는 꼭 적어 주세요.")
      return
    }
    setErr("")
    sending.current = true
    setStatus("sending")
    try {
      const body = [
        `[IMC·인플루언서 섭외 후보 리스트 요청]`,
        `필요한 것: ${need}`,
        `회사: ${f.company}`,
        `담당자: ${f.name}`,
        `월 총예산: ${budget}`,
        `알리고 싶은 제품·서비스: ${f.product}`,
        `생각해 둔 시기: ${f.timing || "미입력"}`,
        `생각해 둔 인플루언서나 채널: ${f.creators || "미입력"}`,
        "",
        f.message || "(더 하신 말씀 없음)",
      ].join("\n")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...guardValues(),
          attribution: readAttribution(),
          name: f.name,
          email: f.email,
          phone: f.phone,
          storeName: f.company,
          message: body,
          budget,
          language: `IMC·인플루언서 섭외/${need}`,
        }),
      })
      if (!res.ok) throw new Error("failed")
      trackInfluencerProposalSubmit({ product: need, budget, timing: f.timing })
      setStatus("done")
    } catch {
      sending.current = false
      setStatus("error")
      setErr("전송에 실패했습니다. 잠시 뒤 다시 시도하시거나 wiz@wiztheplanning.com 으로 보내 주세요.")
    }
  }

  if (status === "done") {
    return (
      <div className="flex max-w-[640px] items-start gap-3 rounded-md border border-slate-200 bg-white p-6">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#059669]" aria-hidden />
        <p className="text-base font-semibold text-[#020817]">요청을 받았습니다. 영업일 3일 안에 회사 이메일로 후보 리스트를 보내 드리겠습니다.</p>
      </div>
    )
  }

  return (
    <form id="influencer-form" onSubmit={submit} className="relative max-w-[640px]" noValidate>
      <fieldset>
        <legend className="mb-3 text-[15px] font-bold text-[#020817]">필요한 것</legend>
        <Choice name="influencer-need" items={NEEDS} value={need} onPick={(v) => { setNeed(v); setErr("") }} />
      </fieldset>

      <fieldset className="mt-8">
        <legend className="mb-3 text-[15px] font-bold text-[#020817]">월 총예산 (광고비 + 대행료)</legend>
        <Choice name="influencer-budget" items={BUDGETS} value={budget} onPick={pickBudget} />
      </fieldset>

      {budget === "아직 정하지 않았어요" && (
        <div className="mt-3.5 rounded-md bg-[#f3f5f7] px-[18px] py-4 text-[15px] leading-relaxed" role="status">
          괜찮습니다. 미팅에서 캠페인 규모를 같이 잡아 보겠습니다.
        </div>
      )}

      <div className="mt-9 grid gap-x-4 gap-y-[18px] sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="inf-company">회사명</label>
          <input id="inf-company" value={f.company} onChange={set("company")} className={inputCls} autoComplete="organization" />
        </div>
        <div>
          <label className={labelCls} htmlFor="inf-name">담당자 이름</label>
          <input id="inf-name" value={f.name} onChange={set("name")} className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="inf-email">회사 이메일</label>
          <input id="inf-email" type="email" value={f.email} onChange={set("email")} className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls} htmlFor="inf-phone">연락처{optional}</label>
          <input id="inf-phone" type="tel" value={f.phone} onChange={set("phone")} className={inputCls} inputMode="tel" autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="inf-product">알리고 싶은 제품·서비스</label>
          <input id="inf-product" value={f.product} onChange={set("product")} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="inf-timing">생각해 둔 시기{optional}</label>
          <input id="inf-timing" value={f.timing} onChange={set("timing")} className={inputCls} placeholder="예: 12월 중, 내년 1분기" />
        </div>
        <div>
          <label className={labelCls} htmlFor="inf-creators">생각해 둔 인플루언서나 채널{optional}</label>
          <input id="inf-creators" value={f.creators} onChange={set("creators")} className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="inf-message">더 하실 말씀{optional}</label>
          <textarea
            id="inf-message"
            value={f.message}
            onChange={set("message")}
            rows={4}
            className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-[#020817] outline-none transition-colors focus:border-[#020817]"
          />
        </div>
      </div>

      <p className="mt-5 text-[13px] leading-relaxed text-slate-500">
        보내 주신 정보는 문의 응대와 제안 준비에만 씁니다. 마케팅 수신 동의를 받지 않습니다.{" "}
        <Link href="/privacy" className="underline underline-offset-2">개인정보처리방침</Link>
      </p>

      {err && <p className="mt-4 text-sm font-semibold text-rose-600">{err}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex h-[54px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#00e5a0] px-[26px] text-[17px] font-bold text-[#070b14] transition-colors hover:bg-[#00d494] disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (<><Loader2 className="h-5 w-5 animate-spin" /> 보내는 중</>) : "후보 리스트 무료로 받기"}
      </button>
      {guardFields}
    </form>
  )
}
