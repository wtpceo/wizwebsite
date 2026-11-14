"use client"

import { useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackForeignContactSubmit } from "@/lib/analytics"
import { useFormGuard } from "@/components/forms/FormGuard"
import { INTL_LANG_TAG, type IntlHomeCopy, type IntlLocale } from "@/lib/intl/home"

// 외국어 기업 문의 폼(11-14). 국문 문의 폼과 같은 모양(.ct-f)에 언어별 문구.
// 해외 담당자는 메일이 기본이라 회사 이메일을 필수, 전화는 선택. 마케팅 활용 동의는 받지 않는다(영문 법무 검토 전 원칙).
// 보내는 곳은 국문과 같은 /api/contact. language 꼬리표로 관리자 메일·문자에서 언어를 가른다.

const KEYS = ["infl", "perf", "search", "viral", "content", "global", "home", "off", "total"] as const

export default function IntlContactForm({ locale, t, source }: { locale: IntlLocale; t: IntlHomeCopy; source: string }) {
  const f = t.contact.form
  const { guardFields, guardValues } = useFormGuard()
  const [v, setV] = useState({ company: "", name: "", email: "", website: "", country: "", phone: "", message: "" })
  const [picked, setPicked] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV((p) => ({ ...p, [k]: e.target.value }))
  const toggle = (k: string) => setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]))
  const interests = t.contact.interests as Record<string, string>

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setErr("")
    if (!v.company.trim() || !v.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) return setErr(f.errRequired)
    setStatus("sending")
    // 관리자가 읽는 머리말은 한국어로 둔다(본부장 문자·대표 메일). 고객이 쓴 글은 그대로
    const ko: Record<string, string> = { infl: "인플루언서 섭외", perf: "퍼포먼스 광고", search: "AI 검색 최적화(GEO)", viral: "바이럴·평판 관리", content: "콘텐츠 프로덕션", global: "글로벌 마케팅", home: "웹사이트 구축", off: "오프라인 미디어", total: "통합 진단·제안" }
    const header = [
      `[${INTL_LANG_TAG[locale]} · ${source}]`,
      v.name.trim() ? `담당자: ${v.name.trim()}` : "",
      v.website.trim() ? `홈페이지: ${v.website.trim()}` : "",
      v.country.trim() ? `국가: ${v.country.trim()}` : "",
      `관심분야: ${picked.length ? picked.map((k) => ko[k]).join(", ") : "고르지 않음"}`,
      `문의 내용: ${v.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...guardValues(),
          attribution: readAttribution(),
          name: v.name.trim() ? `${v.name.trim()} (${v.company.trim()})` : v.company.trim(),
          email: v.email.trim(),
          phone: v.phone.trim(),
          storeName: v.company.trim(),
          message: header,
          language: INTL_LANG_TAG[locale],
        }),
      })
      if (!res.ok) throw new Error("failed")
      trackForeignContactSubmit({ form: `${locale}_home` as "en_home", locale, interest: picked.join(",") || "none" })
      setStatus("done")
    } catch {
      setStatus("error")
      setErr(f.errSend)
    }
  }

  if (status === "done") {
    return (
      <div className="ct-f ct-done" role="status">
        <b>{f.done}</b>
        <p>{f.doneSub}</p>
      </div>
    )
  }

  const opt = <small>{f.optional}</small>
  return (
    <form className="ct-f" onSubmit={submit} noValidate aria-label={f.submit}>
      {guardFields}
      <label className="ct-l">
        <span>{f.company} *</span>
        <input value={v.company} onChange={set("company")} placeholder={f.companyPh} autoComplete="organization" />
      </label>
      <label className="ct-l">
        <span>
          {f.name} {opt}
        </span>
        <input value={v.name} onChange={set("name")} placeholder={f.namePh} autoComplete="name" />
      </label>
      <label className="ct-l">
        <span>{f.email} *</span>
        <input value={v.email} onChange={set("email")} placeholder={f.emailPh} type="email" inputMode="email" autoComplete="email" />
      </label>
      <label className="ct-l">
        <span>
          {f.website} {opt}
        </span>
        <input value={v.website} onChange={set("website")} placeholder={f.websitePh} type="url" inputMode="url" autoComplete="url" />
      </label>
      <label className="ct-l">
        <span>
          {f.country} {opt}
        </span>
        <input value={v.country} onChange={set("country")} placeholder={f.countryPh} autoComplete="country-name" />
      </label>
      <label className="ct-l">
        <span>
          {f.phone} {opt}
        </span>
        <input value={v.phone} onChange={set("phone")} type="tel" inputMode="tel" autoComplete="tel" />
      </label>
      <fieldset className="ct-s">
        <legend>
          {f.interest} <small>{f.multi}</small>
        </legend>
        <div className="ct-sg">
          {KEYS.map((k) => (
            <label key={k} className={picked.includes(k) ? "on" : ""}>
              <input type="checkbox" checked={picked.includes(k)} onChange={() => toggle(k)} />
              {interests[k]}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="ct-l">
        <span>{f.message} *</span>
        <textarea value={v.message} onChange={set("message")} placeholder={f.messagePh} rows={5} />
      </label>
      <p className="intl-privacy">
        {f.privacy}{" "}
        <a href="/privacy" hrefLang="ko">
          {f.privacyLink}
        </a>
      </p>
      {err ? (
        <p className="ct-e" role="alert">
          {err}
        </p>
      ) : null}
      <button type="submit" className="ct-go" disabled={status === "sending"}>
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  )
}
