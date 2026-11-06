"use client"

import { useRef, useState, type FormEvent } from "react"
import { trackContactSubmit } from "@/lib/analytics"
import { readAttribution } from "@/lib/attribution"
import { useFormGuard } from "@/components/forms/FormGuard"
import s from "./blueprint.module.css"

// 홈 광고 상담 폼(A안). 보내는 곳과 태그는 매체 페이지의 HomeContactForm과 같다:
// /api/contact, language "광고 상담", 구분(기업 / 병원 / 그 밖)은 측정 세션이 trackContactSubmit의 industry로 기업·병원 문의를 가르는 값이라 바꾸지 않는다.
// 화면에는 '병원·의원'으로 보여 주되 값은 '병원'으로 보낸다.
// '그 밖'은 소상공인 입구를 넣으면서 '매장·소상공인'으로 바꿨다(대표 결정 2026-11-05). GA4 contact_submit의 industry 값도 이 글자 그대로 간다
const INDUSTRY_OPTIONS: { value: string; label: string }[] = [
  { value: "기업", label: "기업" },
  { value: "병원", label: "병원·의원" },
  { value: "매장·소상공인", label: "매장·소상공인" },
]

type Status = "idle" | "sending" | "done" | "error"

export default function BlueprintContactForm() {
  const [industry, setIndustry] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  // state는 다음 렌더에야 바뀌므로 연타를 막는 잠금은 ref로 둔다
  const lock = useRef(false)
  // 스팸 방지: 숨은 칸 + 폼 연 시각 (서버 판정은 lib/spam-guard.ts)
  const { guardFields, guardValues } = useFormGuard()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (lock.current || status === "done") return
    lock.current = true
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...guardValues(),
          attribution: readAttribution(),
          name: company,
          storeName: company,
          phone,
          email,
          message: `홈 광고 상담 요청\n구분: ${industry}`,
          language: "광고 상담",
        }),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)

      trackContactSubmit({ industry, source: "home" })
      setStatus("done")
      // 접수된 뒤에는 잠금을 풀지 않는다. 같은 요청이 두 번 가지 않게
    } catch {
      setStatus("error")
      lock.current = false
    }
  }

  const sending = status === "sending"
  const done = status === "done"

  return (
    <form className={s.rv} style={{ "--i": 2 } as React.CSSProperties} onSubmit={onSubmit}>
      <label>
        업종
        <select name="industry" required value={industry} onChange={(e) => setIndustry(e.target.value)} disabled={done}>
          <option value="" disabled>
            골라 주세요
          </option>
          {INDUSTRY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        회사명
        <input
          name="company"
          type="text"
          placeholder="회사 또는 병원 이름"
          autoComplete="organization"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={done}
        />
      </label>
      <label>
        연락처
        <input
          name="phone"
          type="tel"
          placeholder="010-0000-0000"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={done}
        />
      </label>
      <label>
        이메일
        <input
          name="email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={done}
        />
      </label>
      <button className={s.btn} type="submit" disabled={sending || done} aria-busy={sending}>
        {done ? "접수됐습니다" : sending ? "보내는 중" : "광고 상담 받기"}
      </button>
      <p className={s.note}>보내 주신 내용은 상담에만 씁니다.</p>
      <p className={s.status} role="status" aria-live="polite">
        {done && "요청을 받았습니다. 회사 이메일 또는 연락처로 연락드리겠습니다."}
        {status === "error" && (
          <>
            요청을 보내지 못했습니다. 전화 <a href="tel:1670-0704">1670-0704</a>로 연락 주세요.
          </>
        )}
      </p>
      {guardFields}
    </form>
  )
}
