"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackGeneralDiagnosisSubmit } from "@/lib/analytics"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

// 병원판의 진료과_옵션 자리 — 업종 무관 세트라 업종으로 교체
const 업종_옵션 = [
  "음식점·카페", "술집·주점", "배달 전문점", "펜션·숙박",
  "뷰티·미용실", "병원·의원", "학원·교육", "헬스장·필라테스",
  "캠핑장·레저", "기타",
]

// 유입 경로 — AI 검색 유입 비중을 실제 데이터로 쌓기 위한 항목
const 유입경로_옵션 = [
  "ChatGPT·퍼플렉시티 등 AI 추천",
  "구글 검색",
  "네이버 검색",
  "지인 소개",
  "인스타그램·블로그",
  "기타",
]

export default function GeneralApplyForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    store: "",
    name: "",
    phone: "",
    region: "",
    industry: "",
    homepage: "",
    source: "",
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      // 기존 /api/contact 재활용 — 업종 특화 정보는 message로 조합 (병원판과 동일 방식)
      const payload = {
        name: form.name,
        phone: form.phone,
        email: "",
        storeName: form.store,
        message:
          `[무료 AI 검색 진단 신청 · 업종무관]\n` +
          `상호: ${form.store}\n` +
          `담당자: ${form.name}\n` +
          `연락처: ${form.phone}\n` +
          `지역: ${form.region}\n` +
          `업종: ${form.industry}\n` +
          `홈페이지: ${form.homepage || "없음"}\n` +
          `유입 경로: ${form.source || "미응답"}`,
      }
      const res = await fetch(window.location.origin + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("전송 실패")
      trackGeneralDiagnosisSubmit({ industry: form.industry, source: form.source })
      setDone(true)
      setForm({ store: "", name: "", phone: "", region: "", industry: "", homepage: "", source: "" })
    } catch {
      alert("전송 중 문제가 발생했습니다. 전화(1670-0704)로 문의해 주세요.")
    } finally {
      setSubmitting(false)
    }
  }

  const inputCls =
    "h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"

  return (
    <section id="apply" className="relative w-full overflow-hidden bg-[#070b14] py-20 md:py-28">
      <div className="geo-grid-bg absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-[#00e5a0]/[0.07] blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#00e5a0]">FREE DIAGNOSIS</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            무료 AI 검색 진단 신청
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
            아래 정보를 남겨주시면 담당 마케터가 네이버 AI·ChatGPT·제미나이 진단 리포트를 만들어
            직접 설명해 드립니다. 업종은 가리지 않습니다.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 max-w-xl"
        >
          {done ? (
            <div className="rounded-2xl border border-[#00e5a0]/30 bg-white/[0.04] p-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#00e5a0]" />
              <h3 className="mt-4 text-xl font-bold text-white">진단 신청이 접수되었습니다</h3>
              <p className="mt-2 text-slate-400">
                담당 마케터가 진단 리포트를 준비해 빠른 시일 내에 연락드리겠습니다.
                (영업사원이 아닌 전문 마케터가 직접 설명드립니다.)
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="store" className="mb-1.5 block text-sm font-medium text-gray-700">상호 <span className="text-emerald-600">*</span></label>
                  <Input id="store" name="store" value={form.store} onChange={onChange} required placeholder="○○카페 / ○○펜션" className={inputCls} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">담당자명 <span className="text-emerald-600">*</span></label>
                    <Input id="name" name="name" value={form.name} onChange={onChange} required placeholder="사장님 / 담당자" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">연락처 <span className="text-emerald-600">*</span></label>
                    <Input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} required placeholder="010-0000-0000" className={inputCls} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="region" className="mb-1.5 block text-sm font-medium text-gray-700">지역</label>
                    <Input id="region" name="region" value={form.region} onChange={onChange} placeholder="예: 서울 성동구" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-gray-700">업종</label>
                    <select id="industry" name="industry" value={form.industry} onChange={onChange} className={inputCls}>
                      <option value="">선택</option>
                      {업종_옵션.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="homepage" className="mb-1.5 block text-sm font-medium text-gray-700">홈페이지 주소 <span className="text-gray-400">(있으면)</span></label>
                  <Input id="homepage" name="homepage" value={form.homepage} onChange={onChange} placeholder="https://" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="source" className="mb-1.5 block text-sm font-medium text-gray-700">
                    저희를 어떻게 알게 되셨나요? <span className="text-gray-400">(선택)</span>
                  </label>
                  <select id="source" name="source" value={form.source} onChange={onChange} className={inputCls}>
                    <option value="">선택</option>
                    {유입경로_옵션.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="mt-6 h-14 w-full gap-1 bg-[#00e5a0] text-base font-bold text-[#070b14] hover:bg-[#3cf0bb]"
              >
                {submitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> 전송 중...</>
                ) : (
                  <>무료 AI 검색 진단 신청 <ChevronRight className="h-5 w-5" /></>
                )}
              </Button>
              <p className="mt-3 text-center text-xs text-gray-400">
                신청 후 담당 마케터가 진단 리포트를 준비해 연락드립니다 · 진단 100% 무료
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
