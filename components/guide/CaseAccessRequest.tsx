"use client"

import { useState } from "react"
import { Lock, ShieldCheck, CheckCircle2, Loader2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

// 전체 사례(유료분) 열람 신청 폼
// - 공개 티저 아래에 붙는 "잠금 → 신청" 블록.
// - 사업자등록증 첨부 + 정보를 /api/case-access 로 전송(수동 심사).
// - 서버 컴포넌트(GuideArticle) 안에 children으로 꽂아 쓰는 클라이언트 컴포넌트.
export default function CaseAccessRequest() {
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
      setStatus("done")
    } catch {
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
      setStatus("idle")
    }
  }

  return (
    <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* 잠금 헤더 */}
      <div className="relative bg-[#070b14] px-6 py-8 md:px-10 md:py-10">
        <div className="geo-grid-bg absolute inset-0 opacity-50" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00e5a0]/15 px-3 py-1 text-xs font-bold tracking-wide text-[#00e5a0]">
            <Lock className="h-3.5 w-3.5" />
            사업자 인증 후 열람
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            여기부터는 <span className="text-[#00e5a0]">전체 사례</span>입니다
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            왜 인용은 하필 제3자에서 나왔는지(핵심 해석), 홈페이지가 정확히 무슨 역할을 했는지,
            정확한 업종·지역, 며칠 만에 몇 순위였는지, 홈페이지·플레이스·쇼츠를 어떤 순서로
            구성했는지: 재현 가능한 분석과 실행 세부는 공개하지 않습니다.
            <strong className="text-slate-200"> 대행사가 그대로 따라 할 수 있는 정보이기 때문입니다.</strong>
          </p>
        </div>
      </div>

      {/* 본문: 왜 막았는지 + 신청 폼 */}
      <div className="px-6 py-8 md:px-10 md:py-10">
        {status === "done" ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-[#00e5a0]" />
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">신청이 접수되었습니다</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
              사업자 본인 확인 후 <strong>영업일 기준 1~2일 내</strong>에 전체 사례를 회신드립니다.
              대행사·동종업계로 확인되면 열람이 제한될 수 있습니다.
            </p>
          </div>
        ) : (
          <>
            <ul className="mb-8 grid gap-3 sm:grid-cols-3">
              {[
                { t: "실사업자만", d: "사업자등록증으로 본인 확인" },
                { t: "대행사 제외", d: "동종업계·대행사는 열람 제한" },
                { t: "1:1 회신", d: "심사 후 개별 발송" },
              ].map((x) => (
                <li key={x.t} className="rounded-xl bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
                    <ShieldCheck className="h-4 w-4 text-[#00b37e]" />
                    {x.t}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{x.d}</p>
                </li>
              ))}
            </ul>

            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="이름" required placeholder="홍길동" />
                <Field name="businessName" label="업체명(상호)" required placeholder="○○식당" />
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
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                  사업자등록증 첨부 <span className="font-normal text-gray-400">(JPG·PNG·PDF, 8MB 이하)</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-[#00b37e] hover:bg-emerald-50/50">
                  <Upload className="h-4 w-4 shrink-0 text-slate-400" />
                  <span className="truncate">{fileName || "파일을 선택하세요"}</span>
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
                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                  메모 <span className="font-normal text-gray-400">(선택)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="업종·지역이나 궁금한 점을 적어주시면 심사에 참고됩니다."
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#00b37e] focus:ring-2 focus:ring-[#00e5a0]/20"
                />
              </div>

              {error && (
                <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">{error}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full gap-2 bg-[#070b14] font-bold text-white hover:bg-[#111a2e] disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> 접수 중…
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" /> 전체 사례 열람 신청
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-gray-400">
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-[#00b37e]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#00b37e] focus:ring-2 focus:ring-[#00e5a0]/20"
      />
    </div>
  )
}
