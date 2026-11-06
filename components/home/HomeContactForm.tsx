"use client"

import { useRef, useState, type FormEvent } from "react"
import { trackContactSubmit } from "@/lib/analytics"
import { readAttribution } from "@/lib/attribution"
import { useFormGuard } from "@/components/forms/FormGuard"
import s from "./home.module.css"

// 홈 광고 상담 폼. /api/contact로 보내고 language 태그 "광고 상담"으로 관리자 메일 제목에서 가른다.
// 구분(기업 / 병원 / 매장·소상공인)은 측정 세션이 trackContactSubmit의 industry로 기업·병원 문의를 나누는 값이다.
// '그 밖'은 소상공인 입구를 다시 열면서 '매장·소상공인'으로 바꿨다(대표 결정 2026-11-05, 홈 폼과 같다).
// source는 어느 페이지에서 보냈는지(홈 "home", 매체 페이지 "search-ai" 등). GA4 lead_source와 관리자 메일 본문에 들어간다
const INDUSTRY_OPTIONS = ["기업", "병원", "매장·소상공인"]

type Status = "idle" | "sending" | "done" | "error"

export default function HomeContactForm({ source = "home" }: { source?: string }) {
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
          message: `${source === "home" ? "홈" : `/${source}`} 광고 상담 요청\n구분: ${industry}`,
          language: "광고 상담",
        }),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)

      trackContactSubmit({ industry, source })
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
    <>
      <form className={s.cbar} onSubmit={onSubmit}>
        <select
          name="industry"
          aria-label="문의하시는 곳"
          required
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className={industry ? undefined : s.empty}
          disabled={done}
        >
          <option value="" disabled>
            문의하시는 곳
          </option>
          {INDUSTRY_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <input
          name="company"
          placeholder="회사·브랜드 이름"
          aria-label="회사·브랜드 이름"
          autoComplete="organization"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={done}
        />
        <input
          name="phone"
          type="tel"
          placeholder="연락처"
          aria-label="연락처"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={done}
        />
        <input
          name="email"
          type="email"
          placeholder="이메일 (선택)"
          aria-label="이메일 (선택)"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={done}
        />
        {guardFields}
        <button type="submit" disabled={sending || done} aria-busy={sending}>
          {done ? "접수됐습니다" : sending ? "보내는 중" : "광고 상담 받기"}
        </button>
      </form>

      <div className={s.small}>
        <span>지금 하고 있는 광고와 고민을 남겨 주시면, 담당 부서가 함께 보고 연락드리겠습니다.</span>
        <span />
        <span>
          전화 <a href="tel:1670-0704">1670-0704</a> · <a href="mailto:wiz@wiztheplanning.com">wiz@wiztheplanning.com</a>
        </span>
      </div>

      <p className={s.status} role="status" aria-live="polite">
        {done && "요청을 받았습니다. 회사 이메일 또는 연락처로 연락드리겠습니다."}
        {status === "error" && (
          <>
            요청을 보내지 못했습니다. 전화 <a href="tel:1670-0704">1670-0704</a>로 연락 주세요.
          </>
        )}
      </p>
    </>
  )
}
