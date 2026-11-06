"use client"

import { useState } from "react"
import { Lock, CheckCircle2, Loader2, Upload } from "lucide-react"
import s from "@/components/guide/guide.module.css"
import { trackCaseAccessRequest } from "@/lib/analytics"

// 전체 사례(유료분) 열람 신청 폼
// - 공개 티저 아래에 붙는 "잠금 → 신청" 블록.
// - 사업자등록증 첨부 + 정보를 /api/case-access 로 전송(수동 심사).
// - 서버 컴포넌트(GuideArticle) 안에 children으로 꽂아 쓰는 클라이언트 컴포넌트.
export default function CaseAccessRequest({
  caseKey = "case-third-party-citation",
  heading = "전체 사례",
  intro = "왜 인용은 하필 제3자에서 나왔는지(핵심 해석), 홈페이지가 정확히 무슨 역할을 했는지, 정확한 업종·지역, 며칠 만에 몇 순위였는지, 홈페이지·플레이스·쇼츠를 어떤 순서로 구성했는지: 재현 가능한 분석과 실행 세부는 공개하지 않습니다.",
  includes,
  buttonLabel = "전체 사례 열람 신청",
}: {
  /** 관리자 메일에 어떤 사례 신청인지 표시 */
  caseKey?: string
  heading?: string
  intro?: string
  /** 열람 자료에 담긴 것 (목록) */
  includes?: string[]
  buttonLabel?: string
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle")
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus("sending")
    try {
      const fd = new FormData(e.currentTarget)
      const res = await fetch("/api/case-access", { method: "POST", body: fd })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.error || "신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
        setStatus("idle")
        return
      }
      trackCaseAccessRequest({ caseKey })
      setStatus("done")
    } catch {
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
      setStatus("idle")
    }
  }

  return (
    <div className={s.case}>
      {/* 잠금 머리: 잉크 면. 제목 위 배지는 디자인 기준(제목 위 머리말 금지)에 따라 제목 아래 한 줄로 옮겼다 */}
      <div className={s.caseTop}>
        <h2>여기부터는 {heading}입니다</h2>
        <p className={s.caseGate}>
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          사업자 인증 후 열람
        </p>
        <p className={s.caseIntro}>
          {intro}
          <strong> 대행사가 그대로 따라 할 수 있는 정보이기 때문입니다.</strong>
        </p>
        {includes && includes.length > 0 && (
          <ul className={s.caseIncl}>
            {includes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 본문: 왜 막았는지 + 신청 폼 */}
      <div className={s.caseBody}>
        {status === "done" ? (
          <div className={s.caseDone}>
            <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
            <h3>신청이 접수되었습니다</h3>
            <p>
              사업자 본인 확인 후 <strong>영업일 기준 1~2일 내</strong>에 전체 사례를 회신드립니다.
              대행사·동종업계로 확인되면 열람이 제한될 수 있습니다.
            </p>
          </div>
        ) : (
          <>
            <ul className={s.caseRules}>
              {[
                { t: "실사업자만", d: "사업자등록증으로 본인 확인" },
                { t: "대행사 제외", d: "동종업계·대행사는 열람 제한" },
                { t: "1:1 회신", d: "심사 후 개별 발송" },
              ].map((x) => (
                <li key={x.t}>
                  <b>{x.t}</b>
                  {x.d}
                </li>
              ))}
            </ul>

            <form onSubmit={onSubmit} className={s.caseForm}>
              <input type="hidden" name="caseKey" value={caseKey} />
              <div className={s.caseTwo}>
                <Field name="name" label="이름" required placeholder="홍길동" />
                <Field name="businessName" label="업체명(상호)" required placeholder="○○치과의원 / ○○식당" />
                <Field name="phone" label="연락처" required placeholder="010-0000-0000" />
                <Field name="email" label="이메일" type="email" placeholder="회신받을 이메일" />
              </div>

              <Field
                name="bizNumber"
                label="사업자등록번호"
                placeholder="000-00-00000 (파일 첨부 시 생략 가능)"
              />

              {/* 파일 첨부 */}
              <div>
                <span className={s.caseLabel}>
                  사업자등록증 첨부 <em>(JPG·PNG·PDF, 8MB 이하)</em>
                </span>
                <label className={`${s.caseInput} ${s.caseFile}`}>
                  <Upload className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{fileName || "파일을 선택하세요"}</span>
                  <input
                    type="file"
                    name="file"
                    accept="image/png,image/jpeg,image/webp,application/pdf"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="case-message" className={s.caseLabel}>
                  메모 <em>(선택)</em>
                </label>
                <textarea
                  id="case-message"
                  name="message"
                  rows={3}
                  placeholder="업종·지역이나 궁금한 점을 적어주시면 심사에 참고됩니다."
                  className={s.caseInput}
                />
              </div>

              {error && <p className={s.caseErr}>{error}</p>}

              <button type="submit" disabled={status === "sending"} className={`${s.btn} ${s.caseSubmit}`}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> 접수 중…
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" aria-hidden="true" /> {buttonLabel}
                  </>
                )}
              </button>
              <p className={s.caseFine}>
                제출하신 정보는 사업자 본인 확인 목적으로만 사용되며, 심사 후 안전하게 관리됩니다.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({
  name,
  label,
  required,
  type = "text",
  placeholder,
}: {
  name: string
  label: string
  required?: boolean
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className={s.caseLabel}>
        {label} {required && <em aria-hidden="true">*</em>}
      </label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={s.caseInput} />
    </div>
  )
}
