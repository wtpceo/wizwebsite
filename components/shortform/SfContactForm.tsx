"use client"

import { useEffect, useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"
import { INTEREST } from "./content"
import { useFormGuard } from "@/components/forms/FormGuard"

// 홈 문의 컷(44)·소개 쪽 문의 칸 — 회사명·연락처·회사 이메일(선택, 11-05)·관심분야. 보내는 곳은 다른 폼과 같은 /api/contact(Resend → 대표 메일).
// /contact 쪽 긴 폼은 SfInquiryForm(11-06)

// label: 신청 이름(버튼·폼 이름·메일 머리) — 11-06 대표 카피덱 「진단 신청하기」. language 값은 메일 제목 꼬리표라 그대로 둔다
/** 11-09 대표: '제안 PT 요청' 유형은 빼고, 예산(선택)·홈페이지 링크(선택)·미팅 요청 체크를 넣는다. 예산 구간은 옛 기업 제안 폼과 같다 */
const BUDGETS = ["월 300만원 미만", "월 300~500만원", "월 500~1,000만원", "월 1,000~3,000만원", "월 3,000만원 이상", "아직 미정"]

export default function SfContactForm({ initial = [], source = "home_shortform", label = "진단 신청하기" }: { initial?: string[]; source?: string; label?: string }) {
  const { guardFields, guardValues } = useFormGuard()
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [person, setPerson] = useState("") // 담당자명·직책(11-08 대표)
  const [email, setEmail] = useState("")
  const [picked, setPicked] = useState<string[]>(initial)
  const [site, setSite] = useState("")
  const [budget, setBudget] = useState("")
  const [meeting, setMeeting] = useState(false)
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search)
      const q = sp.get("svc")
      if (q && INTEREST.some(([k]) => k === q)) setPicked((p) => (p.includes(q) ? p : [...p, q]))
      if (sp.get("meet") === "1") setMeeting(true)
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
          // 스팸 방지 숨은 값(허니팟·폼 연 시각). 없으면 서버가 조용히 버린다(lib/spam-guard.ts)
          ...guardValues(),
          name: person.trim() ? `${person.trim()} (${company.trim()})` : company.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          storeName: company.trim(),
          // 메일 제목 앞에 [예산]이 붙는다(/api/contact)
          budget: budget || undefined,
          message: [
            source === "home_shortform" ? `[홈 ${label}]` : `[${label} · ${source}]`,
            meeting ? "미팅 요청: 요청함" : "",
            person.trim() ? `담당자: ${person.trim()}` : "",
            site.trim() ? `홈페이지: ${site.trim()}` : "",
            budget ? `월 예산: ${budget}` : "",
            `관심분야: ${names.length ? names.join(", ") : "고르지 않음"}`,
          ]
            .filter(Boolean)
            .join("\n"),
          // 메일 제목 꼬리표: 미팅 요청이면 제목에서 바로 보이게
          language: meeting ? "미팅 요청" : source === "home_shortform" ? "홈 무료 상담" : "서비스 쪽 무료 상담",
        }),
      })
      if (!res.ok) throw new Error("failed")
      // industry 칸은 기업·병원·그 밖을 가르는 값이라 넣지 않는다(서비스 이름은 메일 본문에) · 어느 쪽 폼인지는 GA 쪽 주소로 갈린다
      trackContactSubmit({ source, budget: budget || undefined, lead: true })
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
      {guardFields}
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
      <label className="ct-l">
        <span>
          홈페이지 링크 <small>선택</small>
        </span>
        <input value={site} onChange={(e) => setSite(e.target.value)} placeholder="https:// (없으면 비워 두세요)" type="url" inputMode="url" autoComplete="url" />
      </label>
      <label className="ct-l">
        <span>
          월 예산 <small>선택</small>
        </span>
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className={budget ? "" : "ph"}>
          <option value="">예산 범위를 골라 주세요</option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
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
      <label className={`ct-meet${meeting ? " on" : ""}`}>
        <input type="checkbox" checked={meeting} onChange={(e) => setMeeting(e.target.checked)} />
        <span>
          <b>미팅 요청하기</b>
          <small>전담 AE와 직접 만나 현황을 듣고 제안을 받아 보시려면 체크해 주세요</small>
        </span>
      </label>
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
        {status === "sending" ? "보내는 중" : label}
      </button>
    </form>
  )
}
