"use client"

import { useState } from "react"
import { Loader2, CheckCircle2 } from "lucide-react"
import { readAttribution } from "@/lib/attribution"

// 영문 B2B 문의 폼. 해외 담당자는 전화보다 메일이 기본이라 이메일을 필수로, 전화는 선택으로 둔다.
// 기존 /api/contact 스키마(name·phone·email·storeName·message·language)에 맞춰 보내고,
// 관심 분야·웹사이트·국가는 메시지 앞머리에 붙여 관리자 메일에서 바로 보이게 한다.
// 개인정보 안내 문구는 법무 검토 전 최소 고지(문의 응대 목적만)다. 마케팅 활용 동의는 받지 않는다.
const INTERESTS = [
  "Korea market entry",
  "Agency partnership",
  "My business is in Korea",
  "Something else",
]

const inputCls =
  "h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-[#00e5a0]"

export default function EnContactForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", website: "", country: "", phone: "", interest: INTERESTS[0], message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    if (!f.name.trim() || !f.company.trim() || !f.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) {
      setErr("Please fill in your name, a valid work email, your company and a short message.")
      return
    }
    setErr("")
    setStatus("sending")
    try {
      const header = [
        "[English 문의 · B2B]",
        `Interest: ${f.interest}`,
        f.website && `Website: ${f.website}`,
        f.country && `Country: ${f.country}`,
      ].filter(Boolean).join("\n")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attribution: readAttribution(),
          name: f.name,
          email: f.email,
          phone: f.phone,
          storeName: f.company,
          message: `${header}\n\n${f.message}`,
          language: "English 문의 (B2B)",
        }),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("done")
    } catch {
      setStatus("error")
      setErr("Something went wrong. Please try again, or email us at wiz@wiztheplanning.com.")
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <p className="text-base font-bold text-emerald-800">Thank you. We have your message and will reply by email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={f.name} onChange={set("name")} placeholder="Your name *" autoComplete="name" aria-label="Your name" className={inputCls} />
        <input value={f.email} onChange={set("email")} placeholder="Work email *" type="email" autoComplete="email" aria-label="Work email" className={inputCls} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={f.company} onChange={set("company")} placeholder="Company *" autoComplete="organization" aria-label="Company" className={inputCls} />
        <input value={f.website} onChange={set("website")} placeholder="Website" autoComplete="url" aria-label="Website" className={inputCls} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={f.country} onChange={set("country")} placeholder="Country" autoComplete="country-name" aria-label="Country" className={inputCls} />
        <input value={f.phone} onChange={set("phone")} placeholder="Phone (optional)" type="tel" autoComplete="tel" aria-label="Phone (optional)" className={inputCls} />
      </div>
      <label className="block">
        <span className="sr-only">What can we help with?</span>
        <select value={f.interest} onChange={set("interest")} aria-label="What can we help with?" className={inputCls}>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </label>
      <textarea
        value={f.message}
        onChange={set("message")}
        placeholder="Tell us about your brand, your target customers in Korea and your timeline. *"
        rows={5}
        aria-label="Message"
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#00e5a0]"
      />
      <p className="text-xs leading-relaxed text-gray-500">
        We use these details only to reply to your enquiry and, if we work together, to prepare a proposal. We will not add you to a
        mailing list. Your message reaches us through email service providers that may process data outside Korea. To access or delete
        your details, email wiz@wiztheplanning.com.{" "}
        <a href="/privacy" hrefLang="ko" className="underline underline-offset-2">Privacy policy (Korean)</a>
      </p>
      {err && <p className="text-sm font-semibold text-rose-600">{err}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00e5a0] text-base font-bold text-[#070b14] transition-colors hover:bg-[#3cf0bb] disabled:opacity-70"
      >
        {status === "sending" ? (<><Loader2 className="h-5 w-5 animate-spin" /> Sending</>) : "Send message"}
      </button>
    </form>
  )
}
