"use client"

import { useEffect, useState } from "react"
import { readAttribution } from "@/lib/attribution"
import { trackContactSubmit } from "@/lib/analytics"
import { CONTACT, INTEREST } from "./content"

// /contact 긴 폼(사장님 11-06 「로그통 문의 쪽 그대로」) — 칸 이름·순서·필수 표시를 그쪽에 맞췄다. 개인정보 동의만 우리가 더한다.
// 보내는 곳은 다른 폼과 같은 /api/contact(Resend → 대표 메일). /contact?svc=search 로 오면 그 서비스가 골라져 있다.

const WHEN = ["미정", "최대한 빠르게", "1개월 내", "2개월 내", "2개월 이후"]

type Field = "site" | "company" | "phone" | "email" | "person" | "note"

function Req() {
  return (
    <em className="iq-r" aria-hidden="true">
      *
    </em>
  )
}

function FieldErr({ msg }: { msg: string }) {
  return (
    <small className="iq-fe" role="alert">
      {msg}
    </small>
  )
}

export default function SfInquiryForm() {
  const [agency, setAgency] = useState(false)
  const [site, setSite] = useState("")
  const [picked, setPicked] = useState<string[]>([])
  const [meeting, setMeeting] = useState(false)
  const [company, setCompany] = useState("")
  const [brand, setBrand] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [person, setPerson] = useState("")
  const [rank, setRank] = useState("")
  const [budget, setBudget] = useState("")
  const [when, setWhen] = useState(WHEN[0])
  const [note, setNote] = useState("")
  const [intro, setIntro] = useState("")
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")
  const [bad, setBad] = useState<Field | "">("")

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
    setBad("")
    // 막힌 칸으로 바로 옮기고, 안내도 그 칸 바로 아래에 띄운다
    const fail = (k: Field, msg: string) => {
      setBad(k)
      setErr(msg)
      document.getElementById(`iq-${k}`)?.focus()
    }
    if (!site.trim()) return fail("site", "URL이나 검색 키워드를 입력해 주세요.")
    if (!company.trim()) return fail("company", "회사명을 입력해 주세요.")
    if (phone.replace(/\D/g, "").length < 9) return fail("phone", "연락처를 입력해 주세요.")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return fail("email", "이메일 주소를 확인해 주세요.")
    if (!person.trim()) return fail("person", "담당자명을 입력해 주세요.")
    if (!note.trim()) return fail("note", "문의 내용을 입력해 주세요.")
    if (!agree) return setErr("개인정보 수집·이용에 동의해 주세요.")
    setStatus("sending")
    const names = INTEREST.filter(([k]) => picked.includes(k)).map(([, n]) => n)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attribution: readAttribution(),
          name: `${company.trim()} · ${person.trim()}`,
          phone: phone.trim(),
          email: email.trim(),
          storeName: company.trim(),
          message: [
            "[문의하기]",
            agency ? "대행사 여부: 대행사(체크함)" : "",
            `URL·검색 키워드: ${site.trim()}`,
            `관심분야: ${names.length ? names.join(", ") : "고르지 않음"}`,
            meeting ? "오프라인 미팅 신청: 신청함" : "",
            brand.trim() ? `브랜드명: ${brand.trim()}` : "",
            rank.trim() ? `직급: ${rank.trim()}` : "",
            budget.trim() ? `가용 예산: ${budget.trim()}` : "",
            `캠페인 진행 시점: ${when}`,
            `문의 내용: ${note.trim()}`,
            intro.trim() ? `브랜드 소개: ${intro.trim()}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          language: "문의하기 쪽",
        }),
      })
      if (!res.ok) throw new Error("failed")
      trackContactSubmit()
      setStatus("done")
    } catch {
      setStatus("error")
      setErr(`보내지 못했습니다. 잠시 뒤 다시 보내시거나 ${CONTACT.tel}로 전화 주세요.`)
    }
  }

  if (status === "done") {
    return (
      <div className="iq-done" role="status">
        <b>문의를 받았습니다.</b>
        <p>담당 마케터가 확인하고 적어 주신 번호로 연락드립니다.</p>
      </div>
    )
  }

  return (
    <form className="iq-f" onSubmit={submit} noValidate aria-label="문의하기">
      <p className="iq-note">
        <em aria-hidden="true">*</em> 표시는 필수 입력사항입니다.
      </p>
      <div className="iq-cols">
        <div className="iq-col">
          <fieldset>
            <legend>대행사 여부</legend>
            <label className="iq-c">
              <input type="checkbox" checked={agency} onChange={(e) => setAgency(e.target.checked)} />
              대행사에서 문의합니다
            </label>
          </fieldset>
          <label className="iq-l">
            <span>
              상품 · 서비스 확인 가능한 URL <Req />
            </span>
            <input id="iq-site" aria-invalid={bad === "site"} value={site} onChange={(e) => setSite(e.target.value)} placeholder="URL 또는 검색 키워드를 입력해 주세요" autoComplete="url" aria-required="true" />
            {bad === "site" ? <FieldErr msg={err} /> : null}
          </label>
          <fieldset className="iq-line">
            <legend>관심분야 (중복선택 가능)</legend>
            <div className="iq-grid">
              {INTEREST.map(([k, n]) => (
                <label key={k} className="iq-c">
                  <input type="checkbox" checked={picked.includes(k)} onChange={() => toggle(k)} />
                  {n}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="iq-line">
            <legend>오프라인 미팅 신청</legend>
            <p>사무실에서 담당 마케터와 얼굴 보고 이야기하고 싶으시면 체크해 주세요.</p>
            <label className="iq-c">
              <input type="checkbox" checked={meeting} onChange={(e) => setMeeting(e.target.checked)} />
              미팅 신청하기
            </label>
          </fieldset>
        </div>
        <div className="iq-col">
          <div className="iq-two">
            <label className="iq-l">
              <span>
                회사명 <Req />
              </span>
              <input id="iq-company" aria-invalid={bad === "company"} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="회사명 입력" autoComplete="organization" aria-required="true" />
              {bad === "company" ? <FieldErr msg={err} /> : null}
            </label>
            <label className="iq-l">
              <span>브랜드명</span>
              <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="브랜드명 입력" />
            </label>
            <label className="iq-l">
              <span>
                연락처 <Req />
              </span>
              <input id="iq-phone" aria-invalid={bad === "phone"} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" inputMode="tel" autoComplete="tel" aria-required="true" />
              {bad === "phone" ? <FieldErr msg={err} /> : null}
            </label>
            <label className="iq-l">
              <span>
                이메일 <Req />
              </span>
              <input id="iq-email" aria-invalid={bad === "email"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" type="email" inputMode="email" autoComplete="email" aria-required="true" />
              {bad === "email" ? <FieldErr msg={err} /> : null}
            </label>
            <label className="iq-l">
              <span>
                담당자명 <Req />
              </span>
              <input id="iq-person" aria-invalid={bad === "person"} value={person} onChange={(e) => setPerson(e.target.value)} autoComplete="name" aria-required="true" />
              {bad === "person" ? <FieldErr msg={err} /> : null}
            </label>
            <label className="iq-l">
              <span>직급</span>
              <input value={rank} onChange={(e) => setRank(e.target.value)} autoComplete="organization-title" />
            </label>
          </div>
          <label className="iq-l">
            <span>가용 예산</span>
            <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="예) 1,000만원 ~ 2,000만원" />
          </label>
          <fieldset>
            <legend>캠페인 진행 시점</legend>
            <div className="iq-rd">
              {WHEN.map((w) => (
                <label key={w} className="iq-c">
                  <input type="radio" name="iq-when" checked={when === w} onChange={() => setWhen(w)} />
                  {w}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="iq-l">
            <span>
              문의 내용 <Req />
            </span>
            <textarea id="iq-note" aria-invalid={bad === "note"} value={note} onChange={(e) => setNote(e.target.value)} rows={4} maxLength={2000} placeholder="궁금한 점이나 지금 고민을 편하게 적어 주세요." aria-required="true" />
            {bad === "note" ? <FieldErr msg={err} /> : null}
          </label>
          <label className="iq-l">
            <span>브랜드 소개</span>
            <textarea value={intro} onChange={(e) => setIntro(e.target.value)} rows={4} maxLength={2000} placeholder="어떤 브랜드인지, 주 손님은 누구인지, 꼭 알리고 싶은 말" />
          </label>
        </div>
      </div>
      <div className="iq-end">
        <label className="iq-c">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>
            개인정보 수집·이용에 동의합니다 <a href="/privacy">자세히</a>
          </span>
        </label>
        {err && !bad ? (
          <p className="iq-e" role="alert">
            {err}
          </p>
        ) : null}
        <button type="submit" className="iq-go" disabled={status === "sending"}>
          {status === "sending" ? "보내는 중" : "문의 남기기"}
        </button>
      </div>
    </form>
  )
}
