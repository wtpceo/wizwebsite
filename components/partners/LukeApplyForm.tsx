"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackContactSubmit } from "@/lib/analytics"

// 루크코리아 제휴 병원 신청 폼 — 기존 /api/contact 재사용, 관리자 메일에 [루크코리아 제휴] 태그로 도착
export default function LukeApplyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus("sending")
    const fd = new FormData(e.currentTarget)
    const specialty = String(fd.get("specialty") || "미선택")
    const note = String(fd.get("note") || "").trim()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") || ""),
          phone: String(fd.get("phone") || ""),
          storeName: String(fd.get("hospital") || ""),
          message: `[루크코리아 제휴 신청] 진료과: ${specialty}${note ? `\n문의: ${note}` : ""}`,
          language: "루크코리아 제휴",
        }),
      })
      if (!res.ok) throw new Error("전송 실패")
      trackContactSubmit({ source: "luke_korea" })
      setStatus("done")
    } catch {
      setError("전송 중 오류가 발생했습니다. 전화(1670-0704)로 연락 주셔도 됩니다.")
      setStatus("idle")
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-[#00b37f]" />
        <h3 className="mt-4 text-xl font-extrabold text-gray-900">신청이 접수되었습니다</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
          담당 마케터가 <strong>영업일 기준 1일 내</strong>에 연락드립니다. 급하시면{" "}
          <a href="tel:1670-0704" className="font-bold text-[#00b37f]">1670-0704</a>로 전화 주세요.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="hospital" label="병원명" required placeholder="○○의원" />
        <Field name="name" label="성함" required placeholder="원장님 또는 담당자" />
        <Field name="phone" label="연락처" required placeholder="010-0000-0000" />
        <div>
          <label htmlFor="specialty" className="mb-1.5 block text-sm font-semibold text-gray-800">
            진료과 <span className="text-[#00b37f]">*</span>
          </label>
          <select
            id="specialty"
            name="specialty"
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 outline-none focus:border-[#00b37f] focus:ring-2 focus:ring-[#00e5a0]/20"
            defaultValue=""
          >
            <option value="" disabled>선택하세요</option>
            {["치과", "피부과", "성형외과", "정형외과", "내과", "안과", "이비인후과", "비뇨의학과", "산부인과", "한의원", "기타"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="note" className="mb-1.5 block text-sm font-semibold text-gray-800">
          문의사항 <span className="font-normal text-gray-400">(선택)</span>
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          placeholder="궁금한 점이나 현재 마케팅 고민을 적어주세요."
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#00b37f] focus:ring-2 focus:ring-[#00e5a0]/20"
        />
      </div>
      {error && <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">{error}</p>}
      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full gap-1 bg-[#00e5a0] py-6 text-base font-bold text-[#070b14] hover:bg-[#3cf0bb] disabled:opacity-60"
      >
        {status === "sending" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> 접수 중…</>
        ) : (
          <>무료 진단서 받기 <ChevronRight className="h-5 w-5" /></>
        )}
      </Button>
      <p className="text-center text-xs text-gray-400">
        입력하신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </form>
  )
}

function Field({ name, label, required, placeholder }: {
  name: string; label: string; required?: boolean; placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-[#00b37f]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#00b37f] focus:ring-2 focus:ring-[#00e5a0]/20"
      />
    </div>
  )
}
