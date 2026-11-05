"use client"

import { useEffect, useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"

// 홈 문의 컷(44) — 회사명·연락처·회사 이메일(선택, 11-05)·관심 서비스. 보내는 곳은 다른 폼과 같은 /api/contact(Resend → 대표 메일).
// full = 무료 상담 신청 쪽(/contact · 11-05) — 담당자·주소·시작 시점·궁금한 점(전부 선택)이 더 붙는다. /contact?svc=search 로 오면 그 서비스가 골라져 있다.

type Svc = { k: string; n: string }

const WHEN = ["아직 미정", "바로", "1개월 안", "3개월 안"]

// label: 신청 이름(버튼·폼 이름·메일 머리) — 11-05 사장님 「무료 진단 신청」→「무료 상담 신청」
export default function SfContactForm({ services, initial = [], source = "home_shortform", label = "무료 상담 신청", full = false }: { services: Svc[]; initial?: string[]; source?: string; label?: string; full?: boolean }) {
  const [company, setCompany] = useState("")
  const [agency, setAgency] = useState(false)
  const [person, setPerson] = useState("")
  const [site, setSite] = useState("")
  const [when, setWhen] = useState("")
  const [note, setNote] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [picked, setPicked] = useState<string[]>(initial)
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get("svc")
      if (q && services.some((s) => s.k === q)) setPicked((p) => (p.includes(q) ? p : [...p, q]))
    } catch {}
  }, [services])

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
          name: person.trim() ? `${company.trim()} · ${person.trim()}` : company.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          storeName: company.trim(),
          message: [
            source === "home_shortform" ? `[홈 ${label}]` : `[${label} · ${source}]`,
            full ? `대행사 여부: ${agency ? "대행사" : "아님"}` : "",
            `관심 서비스: ${names.length ? names.join(", ") : "고르지 않음"}`,
            site.trim() ? `홈페이지·검색어: ${site.trim()}` : "",
            when ? `시작 시점: ${when}` : "",
            note.trim() ? `궁금한 점: ${note.trim()}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          language: source === "home_shortform" ? "홈 무료 상담" : source === "contact_page" ? "무료 상담 신청 쪽" : "서비스 쪽 무료 상담",
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
      {full ? (
        <fieldset className="ct-s">
          <legend>대행사이신가요?</legend>
          <div className="ct-sg ct-one">
            <label className={agency ? "on" : ""}>
              <input type="checkbox" checked={agency} onChange={(e) => setAgency(e.target.checked)} />
              대행사에서 문의합니다
            </label>
          </div>
        </fieldset>
      ) : null}
      <label className="ct-l">
        <span>회사명</span>
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="회사명을 적어 주세요" autoComplete="organization" />
      </label>
      {full ? (
        <label className="ct-l">
          <span>
            담당자 이름 <small>선택</small>
          </span>
          <input value={person} onChange={(e) => setPerson(e.target.value)} placeholder="연락받으실 분 이름" autoComplete="name" />
        </label>
      ) : null}
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
      {full ? (
        <label className="ct-l">
          <span>
            홈페이지 주소나 검색어 <small>선택</small>
          </span>
          <input value={site} onChange={(e) => setSite(e.target.value)} placeholder="예: 홈페이지 주소, 스토어 주소, 손님이 찾는 검색어" autoComplete="url" />
        </label>
      ) : null}
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
      {full ? (
        <>
          <fieldset className="ct-s">
            <legend>
              언제 시작하고 싶으세요? <small>선택</small>
            </legend>
            <div className="ct-sg rd">
              {WHEN.map((w) => (
                <label key={w} className={when === w ? "on" : ""}>
                  <input type="radio" name="ct-when" checked={when === w} onChange={() => setWhen(w)} />
                  {w}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="ct-l">
            <span>
              궁금한 점 <small>선택</small>
            </span>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4} maxLength={2000} placeholder="지금 고민이나 궁금한 점을 편하게 적어 주세요. 정리되지 않아도 괜찮습니다." />
          </label>
        </>
      ) : null}
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
