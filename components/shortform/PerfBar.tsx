"use client"
import { useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"
import { CONTACT } from "./content"
import { useFormGuard } from "@/components/forms/FormGuard"

/**
 * 퍼포먼스 쪽 데스크톱 하단 고정 바. 11-07 대표 「착한전수처럼」: 어느 화면에서든 전화번호와 짧은 폼이 보이고 바로 보낸다.
 * 휴대폰(≤820px)은 사이트 공용 바(전화·카카오·신청)가 있으니 숨긴다. 보내는 곳은 다른 폼과 같은 /api/contact.
 */
const MEDIA = ["매체 상담 후 결정", "메타(인스타그램·페이스북)", "네이버 검색·디스플레이", "구글·유튜브", "카카오 모먼트", "당근 광고", "타겟핏 문자"]

export default function PerfBar() {
  const { guardFields, guardValues } = useFormGuard()
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [media, setMedia] = useState(MEDIA[0])
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setErr("")
    if (!company.trim()) return setErr("회사명을 적어 주세요.")
    if (phone.replace(/\D/g, "").length < 9) return setErr("연락받을 번호를 적어 주세요.")
    if (!agree) return setErr("개인정보 수집·이용에 동의해 주세요.")
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attribution: readAttribution(),
          // 스팸 방지 숨은 값(허니팟·폼 연 시각). 없으면 서버가 조용히 버린다(lib/spam-guard.ts)
          ...guardValues(),
          name: company.trim(),
          phone: phone.trim(),
          storeName: company.trim(),
          message: [`[소재·설계 점검 · service_performance_bar]`, `관심분야: 퍼포먼스 광고`, `켜고 싶은 매체: ${media}`].join("\n"),
          language: "서비스 쪽 무료 상담",
        }),
      })
      if (!res.ok) throw new Error("failed")
      trackContactSubmit({ lead: true })
      setStatus("done")
    } catch {
      setStatus("error")
      setErr("보내지 못했습니다. 1670-0704로 전화 주세요.")
    }
  }

  return (
    <div className="pk-bar" role="region" aria-label="바로 신청">
      <a className="pk-bar-tel" href={CONTACT.telHref} data-tel>
        <small>전화가 빠르면</small>
        <b>{CONTACT.tel}</b>
      </a>
      {status === "done" ? (
        <p className="pk-bar-done" role="status">
          접수됐습니다. 소재·설계 점검표를 먼저 보내 드리겠습니다.
        </p>
      ) : (
        <form className="pk-bar-f" onSubmit={submit} noValidate aria-label="무료 광고 진단 신청">
      {guardFields}
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="회사명" aria-label="회사명" autoComplete="organization" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="연락처" aria-label="연락처" inputMode="tel" autoComplete="tel" />
          <select value={media} onChange={(e) => setMedia(e.target.value)} aria-label="켜고 싶은 매체">
            {MEDIA.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <label className="pk-bar-ok">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} /> 개인정보 수집·이용 동의{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              [보기]
            </a>
          </label>
          <button type="submit" disabled={status === "sending"}>
            무료로 소재·설계 점검받기
          </button>
          {err ? (
            <span className="pk-bar-err" role="alert">
              {err}
            </span>
          ) : null}
        </form>
      )}
    </div>
  )
}
