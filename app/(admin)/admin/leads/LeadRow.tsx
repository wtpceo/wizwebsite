"use client"

import { useState } from "react"
import type { Lead } from "@/lib/crm/leads"

const STATUSES = ["신규", "연락함", "미팅", "제안", "계약", "보류"]

const TONE: Record<string, string> = {
  신규: "bg-[#0055FF] text-white",
  연락함: "bg-[#E6EEFF] text-[#0047D6]",
  미팅: "bg-[#E6EEFF] text-[#0047D6]",
  제안: "bg-[#E6EEFF] text-[#0047D6]",
  계약: "bg-[#0A1A33] text-white",
  보류: "bg-slate-200 text-slate-700",
}

export default function LeadRow({ lead, when }: { lead: Lead; when: string }) {
  const [status, setStatus] = useState(lead.status)
  const [memo, setMemo] = useState(lead.memo || "")
  const [saved, setSaved] = useState(lead.memo || "")
  const [msg, setMsg] = useState("")

  async function save(patch: { status?: string; memo?: string }) {
    setMsg("저장 중")
    const res = await fetch(`/api/admin/leads/${lead.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(patch) })
    if (res.ok) {
      setMsg("저장됨")
      if (patch.memo !== undefined) setSaved(patch.memo)
      setTimeout(() => setMsg(""), 1500)
    } else {
      setMsg(res.status === 401 ? "로그인이 풀렸습니다. 새로고침해 주세요" : "저장하지 못했습니다")
    }
  }

  const who = lead.company || lead.name || "이름 없음"
  return (
    <li className="rounded-2xl border border-[#E3E8EF] bg-white p-5">
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-[#5B6573]">
            {when}
            {lead.form ? ` · ${lead.form}` : ""}
            {lead.is_test ? " · 시험" : ""}
          </p>
          <p className="mt-1 text-lg font-extrabold leading-snug">
            {who}
            {lead.org_type ? <span className="ml-2 align-middle text-sm font-bold text-[#0055FF]">{lead.org_type}</span> : null}
          </p>
          {lead.name && lead.name !== who ? <p className="text-sm text-[#34405A]">{lead.name}</p> : null}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <span className="sr-only">상태</span>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as Lead["status"])
              save({ status: e.target.value })
            }}
            className={`h-9 rounded-lg px-3 text-sm font-bold outline-none ${TONE[status] || ""}`}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s} className="bg-white text-[#0A1A33]">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        <Item k="연락처">{lead.phone ? <a className="font-semibold text-[#0047D6]" href={`tel:${lead.phone}`}>{lead.phone}</a> : "-"}</Item>
        <Item k="이메일">{lead.email ? <a className="break-all font-semibold text-[#0047D6]" href={`mailto:${lead.email}`}>{lead.email}</a> : "-"}</Item>
        <Item k="예산">{lead.budget || "-"}</Item>
        <Item k="유입 경로">{lead.source_text || "-"}</Item>
        {lead.landing ? <Item k="도착 페이지">{lead.landing}</Item> : null}
        {lead.referrer ? <Item k="referrer">{lead.referrer}</Item> : null}
      </dl>

      {lead.message ? (
        <details className="mt-4 group">
          <summary className="cursor-pointer text-sm font-semibold text-[#34405A]">문의 내용 보기</summary>
          <pre className="mt-2 whitespace-pre-wrap break-words rounded-lg bg-[#F3F6FA] p-3 font-sans text-sm leading-relaxed text-[#34405A]">{lead.message}</pre>
        </details>
      ) : null}

      <div className="mt-4">
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          rows={2}
          maxLength={4000}
          placeholder="메모 (통화 내용, 다음 연락일 등)"
          className="w-full rounded-lg border border-[#D6DEE8] px-3 py-2 text-sm outline-none focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
        />
        <div className="mt-1 flex items-center gap-3">
          <button
            type="button"
            disabled={memo === saved}
            onClick={() => save({ memo })}
            className="rounded-lg bg-[#0A1A33] px-3 py-1.5 text-sm font-bold text-white disabled:opacity-30"
          >
            메모 저장
          </button>
          <span className="text-xs text-[#5B6573]" role="status">
            {msg}
          </span>
        </div>
      </div>
    </li>
  )
}

function Item({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <dt className="w-20 shrink-0 text-[#5B6573]">{k}</dt>
      <dd className="min-w-0 break-words">{children}</dd>
    </div>
  )
}
