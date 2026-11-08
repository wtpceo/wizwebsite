"use client"

import { useEffect, useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"
import { INTEREST } from "./content"

// 홈 문의 컷(44)·소개 쪽 문의 칸 — 회사명·연락처·회사 이메일(선택, 11-05)·관심분야. 보내는 곳은 다른 폼과 같은 /api/contact(Resend → 대표 메일).
// /contact 쪽 긴 폼은 SfInquiryForm(11-06)

// label: 신청 이름(버튼·폼 이름·메일 머리) — 11-06 대표 카피덱 「진단 신청하기」. language 값은 메일 제목 꼬리표라 그대로 둔다
/** 요청 유형 두 가지(11-08 대표: 비딩·기업·여러 관계자 앞 발표는 '제안 PT 요청'으로 따로 받고 메일에 표시) */
const KINDS: [string, string][] = [
  ["제안 요청", "담당자와 먼저 미팅하고 제안서를 받습니다"],
  ["제안 PT 요청", "다음 분기, 다음 연도 마케팅 예산을 짜는 자리라면 저희를 불러 주세요. 결정권자와 여러 관계자가 함께 듣는 자리에서 지금 마케팅이 어디로 가고 있는지, 그 안에서 저희만 할 수 있는 전략이 무엇인지 직접 발표하겠습니다. 타 회사와의 비딩 자리도 좋습니다."],
]

export default function SfContactForm({ initial = [], source = "home_shortform", label = "진단 신청하기", pt = false }: { initial?: string[]; source?: string; label?: string; pt?: boolean }) {
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [person, setPerson] = useState("") // 담당자명·직책(11-08 대표)
  const [email, setEmail] = useState("")
  const [picked, setPicked] = useState<string[]>(initial)
  const [kind, setKind] = useState<string>(KINDS[0][0])
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search)
      const q = sp.get("svc")
      if (q && INTEREST.some(([k]) => k === q)) setPicked((p) => (p.includes(q) ? p : [...p, q]))
      if (pt && sp.get("pt") === "1") setKind(KINDS[1][0])
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
          name: person.trim() ? `${person.trim()} (${company.trim()})` : company.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          storeName: company.trim(),
          message: [
            source === "home_shortform" ? `[홈 ${label}]` : `[${label} · ${source}]`,
            pt ? `요청 유형: ${kind}` : "",
            person.trim() ? `담당자: ${person.trim()}` : "",
            `관심분야: ${names.length ? names.join(", ") : "고르지 않음"}`,
          ]
            .filter(Boolean)
            .join("\n"),
          // 메일 제목 꼬리표: 제안 PT 요청이면 제목에서 바로 보이게
          language: pt && kind === KINDS[1][0] ? "제안 PT 요청" : source === "home_shortform" ? "홈 무료 상담" : "서비스 쪽 무료 상담",
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
        <b>문의가 접수되었습니다.</b>
        <p>전담 AE가 확인 후 연락드리겠습니다.</p>
      </div>
    )
  }

  return (
    <form className="ct-f" onSubmit={submit} noValidate aria-label={label}>
      {pt ? (
        <fieldset className="ct-kind">
          <legend>요청 유형</legend>
          <div className="ct-kind-g" role="radiogroup" aria-label="요청 유형">
            {KINDS.map(([k]) => (
              <label key={k} className={kind === k ? "on" : ""}>
                <input type="radio" name="kind" value={k} checked={kind === k} onChange={() => setKind(k)} />
                {k}
              </label>
            ))}
          </div>
          <p className={`ct-kind-h${kind === KINDS[1][0] ? " pt" : ""}`}>{KINDS.find(([k]) => k === kind)?.[1]}</p>
        </fieldset>
      ) : null}
      <label className="ct-l">
        <span>회사명 *</span>
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="회사명을 적어 주세요" autoComplete="organization" />
      </label>
      <label className="ct-l">
        <span>
          담당자명 · 직책 <small>선택</small>
        </span>
        <input value={person} onChange={(e) => setPerson(e.target.value)} placeholder="예: 홍길동 마케팅팀장" autoComplete="name" />
      </label>
      <label className="ct-l">
        <span>연락처 *</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="연락받을 번호를 적어 주세요" inputMode="tel" autoComplete="tel" />
      </label>
      <label className="ct-l">
        <span>
          회사 이메일 <small>선택</small>
        </span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="자료를 받으실 회사 메일" type="email" inputMode="email" autoComplete="email" />
      </label>
      <fieldset className="ct-s">
        <legend>
          관심 분야 <small>복수 선택</small>
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
          개인정보 수집·이용에 동의합니다. (필수) <a href="/privacy">자세히 보기</a>
        </span>
      </label>
      {err ? (
        <p className="ct-e" role="alert">
          {err}
        </p>
      ) : null}
      <button type="submit" className="ct-go" disabled={status === "sending"}>
        {status === "sending" ? "보내는 중" : pt && kind === KINDS[1][0] ? "제안 PT 요청 보내기" : label}
      </button>
    </form>
  )
}
