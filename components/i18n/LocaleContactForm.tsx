"use client"

import { useState } from "react"
import { Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LandingContent } from "@/lib/i18n/content"
import type { Locale } from "@/lib/i18n/config"

// 외국어 로케일용 문의 폼. 기존 /api/contact 로 전송하되 언어 태그를 붙여
// 통역·번역 담당자가 어느 언어로 온 문의인지 바로 알 수 있게 한다.
export default function LocaleContactForm({
  locale,
  t,
}: {
  locale: Exclude<Locale, "ko">
  t: LandingContent["contact"]
}) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [store, setStore] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [err, setErr] = useState("")

  const langTag = locale === "zh" ? "中文 문의" : "Tiếng Việt 문의"

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    if (!name.trim() || !phone.trim()) {
      setErr(t.form.required)
      return
    }
    setErr("")
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          storeName: store,
          // 관리자 메일에서 언어를 즉시 식별할 수 있도록 태그를 메시지 앞에 붙인다.
          message: `[${langTag}]\n${message}`,
          language: langTag,
        }),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("done")
    } catch {
      setStatus("error")
      setErr(t.form.error)
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <p className="text-base font-bold text-emerald-800">{t.form.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.form.name}
          className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-[#00e5a0]"
          aria-label={t.form.name}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.form.phone}
          inputMode="tel"
          className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-[#00e5a0]"
          aria-label={t.form.phone}
        />
      </div>
      <input
        value={store}
        onChange={(e) => setStore(e.target.value)}
        placeholder={t.form.store}
        className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-[#00e5a0]"
        aria-label={t.form.store}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.form.messagePlaceholder}
        rows={4}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#00e5a0]"
        aria-label={t.form.message}
      />
      <p className="text-sm text-gray-500">{t.langNote}</p>
      {err && <p className="text-sm font-semibold text-rose-600">{err}</p>}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full gap-2 bg-[#00e5a0] text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> {t.form.sending}
          </>
        ) : (
          t.form.submit
        )}
      </Button>
    </form>
  )
}
