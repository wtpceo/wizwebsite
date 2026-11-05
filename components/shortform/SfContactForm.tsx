"use client"

import { useEffect, useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"

// 홈 문의 컷(44) — 회사명·연락처·회사 이메일(선택, 11-05)·관심 서비스. 보내는 곳은 다른 폼과 같은 /api/contact(Resend → 대표 메일).
// 「이 서비스 상담」 버튼(data-svc)을 누르고 오면 그 서비스가 미리 골라져 있다(sf.js 가 sf:svc 이벤트를 쏜다).

type Svc = { k: string; n: string }

// label: 신청 이름(버튼·폼 이름·메일 머리) — 로컬 업종 쪽은 「상담 신청」(무료 진단은 기업·병원 대상 · 11-04)
export default function SfContactForm({ services, initial = [], source = "home_shortform", label = "무료 진단 신청" }: { services: Svc[]; initial?: string[]; source?: string; label?: string }) {
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [picked, setPicked] = useState<string[]>(initial)
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  useEffect(() => {
    const on = (e: Event) => {
      const k = (e as CustomEvent<string>).detail
      if (k) setPicked((p) => (p.includes(k) ? p : [...p, k]))
    }
    window.addEventListener("sf:svc", on)
    return () => window.removeEventListener("sf:svc", on)
  }, [])

  const toggle = (k: string) => setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setErr("")
    if (!company.trim()) return setErr("회사명을 적어 주세요.")
    if (phone.replace(/\D/g, "").length < 9) return setErr("연락받을 번호를 적어 주세요.")
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setErr("이메일 주소를 다시 확인해 주세요.")
    if (!agree) return setErr("개인정보 수집·이용에 동의해 주세요.")
    setStatus("sending")
    const names = services.filter((s) => picked.includes(s.k)).map((s) => s.n)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attribution: readAttribution(),
          name: company.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          storeName: company.trim(),
          message: [source === "home_shortform" ? `[홈 ${label}]` : `[${label} · ${source}]`, `관심 서비스: ${names.length ? names.join(", ") : "고르지 않음"}`].join("\n"),
          language: source === "home_shortform" ? "홈 무료 진단" : "서비스 쪽 무료 진단",
        }),
      })
      if (!res.ok) throw new Error("failed")
      // industry 칸은 기업·병원·그 밖을 가르는 값이라 넣지 않는다(서비스 이름은 메일 본문에) · 어느 쪽 폼인지는 GA 쪽 주소로 갈린다
      trackContactSubmit()
      setStatus("done")
    } catch {
      setStatus("error")
      setErr("보내지 못했습니다. 잠시 뒤 다시 보내시거나 1670-0704로 전화 주세요.")
    }
  }

  if (status === "done") {
    return (
      <div className="ct-f ct-done" role="status">
        <b>신청을 받았습니다.</b>
        <p>담당자가 확인하고 적어 주신 번호로 연락드립니다.</p>
      </div>
    )
  }

  return (
    <form className="ct-f" onSubmit={submit} noValidate aria-label={label}>
      <label className="ct-l">
        <span>회사명</span>
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="회사명을 적어 주세요" autoComplete="organization" />
      </label>
      <label className="ct-l">
        <span>연락처</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="연락받을 번호를 적어 주세요" inputMode="tel" autoComplete="tel" />
      </label>
      <label className="ct-l">
        <span>
          회사 이메일 <small>선택</small>
        </span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="진단 결과·자료를 받을 메일" type="email" inputMode="email" autoComplete="email" />
      </label>
      <fieldset className="ct-s">
        <legend>
          관심 서비스 <small>여러 개 골라도 됩니다</small>
        </legend>
        <div className="ct-sg">
          {services.map((s) => (
            <label key={s.k} className={picked.includes(s.k) ? "on" : ""}>
              <input type="checkbox" checked={picked.includes(s.k)} onChange={() => toggle(s.k)} />
              {s.n}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="ct-a">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span>
          개인정보 수집·이용에 동의합니다 <a href="/privacy">자세히</a>
        </span>
      </label>
      {err ? (
        <p className="ct-e" role="alert">
          {err}
        </p>
      ) : null}
      <button type="submit" className="ct-go" disabled={status === "sending"}>
        {status === "sending" ? "보내는 중" : label}
      </button>
    </form>
  )
}
