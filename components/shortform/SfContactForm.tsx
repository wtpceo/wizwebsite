"use client"

import { useEffect, useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"
import { INTEREST } from "./content"

// 홈 문의 컷(44)·소개 쪽 문의 칸 — 회사명·연락처·회사 이메일(선택, 11-05)·관심분야. 보내는 곳은 다른 폼과 같은 /api/contact(Resend → 대표 메일).
// /contact 쪽 긴 폼은 SfInquiryForm(11-06)

// label: 신청 이름(버튼·폼 이름·메일 머리) — 11-05 사장님 「무료 진단 신청」→「무료 상담 신청」
export default function SfContactForm({ initial = [], source = "home_shortform", label = "무료 상담 신청" }: { initial?: string[]; source?: string; label?: string }) {
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [picked, setPicked] = useState<string[]>(initial)
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get("svc")
      if (q && INTEREST.some(([k]) => k === q)) setPicked((p) => (p.includes(q) ? p : [...p, q]))
    } catch {}
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
    const names = INTEREST.filter(([k]) => picked.includes(k)).map(([, n]) => n)
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
          message: [
            source === "home_shortform" ? `[홈 ${label}]` : `[${label} · ${source}]`,
            `관심분야: ${names.length ? names.join(", ") : "고르지 않음"}`,
          ]
            .filter(Boolean)
            .join("\n"),
          language: source === "home_shortform" ? "홈 무료 상담" : "서비스 쪽 무료 상담",
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
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="상담 자료를 받을 메일" type="email" inputMode="email" autoComplete="email" />
      </label>
      <fieldset className="ct-s">
        <legend>
          관심분야 <small>중복선택 가능</small>
        </legend>
        <div className="ct-sg">
          {INTEREST.map(([k, n]) => (
            <label key={k} className={picked.includes(k) ? "on" : ""}>
              <input type="checkbox" checked={picked.includes(k)} onChange={() => toggle(k)} />
              {n}
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
