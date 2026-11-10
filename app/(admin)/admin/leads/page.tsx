import Link from "next/link"
import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/crm/admin-auth"
import { LEAD_STATUSES, countByStatus, crmConfigured, listLeads, type Lead } from "@/lib/crm/leads"
import { smsConfigured } from "@/lib/crm/lead-sms"
import LeadRow from "./LeadRow"

// 문의 관리(대표 11/10 「그렇게 만들어」). 홈페이지 모든 폼(/api/contact)으로 들어온 문의를 최신순으로 보고,
// 상태(신규→연락함→미팅→제안→계약/보류)와 메모를 남긴다.
export const dynamic = "force-dynamic"

const KST = new Intl.DateTimeFormat("ko-KR", { timeZone: "Asia/Seoul", month: "numeric", day: "numeric", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false })

export default async function AdminLeads({ searchParams }: { searchParams: Promise<{ s?: string; test?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login")
  const { s, test } = await searchParams
  const includeTest = test === "1"

  if (!crmConfigured()) {
    return (
      <Shell>
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          문의 저장소(CRM_SUPABASE_URL, CRM_SUPABASE_SERVICE_KEY)가 아직 연결되지 않았습니다.
        </p>
      </Shell>
    )
  }

  let leads: Lead[] = []
  let counts: Record<string, number> = {}
  let error = ""
  try {
    ;[leads, counts] = await Promise.all([listLeads({ status: s, includeTest }), countByStatus(includeTest)])
  } catch (e) {
    error = e instanceof Error ? e.message : "불러오지 못했습니다"
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  const q = (status?: string) => {
    const p = new URLSearchParams()
    if (status) p.set("s", status)
    if (includeTest) p.set("test", "1")
    const str = p.toString()
    return `/admin/leads${str ? `?${str}` : ""}`
  }

  return (
    <Shell sms={smsConfigured()}>
      <nav className="flex flex-wrap gap-2" aria-label="상태별 보기">
        <Chip href={q()} on={!s} label="전체" n={total} />
        {LEAD_STATUSES.map((st) => (
          <Chip key={st} href={q(st)} on={s === st} label={st} n={counts[st] || 0} />
        ))}
        <Link href={includeTest ? q(s).replace(/[?&]test=1/, "") || "/admin/leads" : `${q(s)}${q(s).includes("?") ? "&" : "?"}test=1`} className="ml-auto self-center text-xs text-[#5B6573] underline underline-offset-4">
          {includeTest ? "시험 건 숨기기" : "시험 건도 보기"}
        </Link>
      </nav>

      {error ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
      ) : leads.length === 0 ? (
        <p className="mt-10 text-center text-sm text-[#5B6573]">아직 들어온 문의가 없습니다.</p>
      ) : (
        <ul className="mt-6 space-y-3">
          {leads.map((l) => (
            <LeadRow key={l.id} lead={l} when={KST.format(new Date(l.created_at))} />
          ))}
        </ul>
      )}
    </Shell>
  )
}

function Shell({ children, sms }: { children: React.ReactNode; sms?: boolean }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:py-10">
      <header className="mb-6 flex items-center gap-3">
        <div>
          <p className="text-xs font-bold tracking-wide text-[#0055FF]">위즈더플래닝</p>
          <h1 className="text-2xl font-extrabold">문의 관리</h1>
        </div>
        {sms === false ? <span className="ml-3 rounded-md bg-slate-200 px-2 py-1 text-xs text-slate-700">문자 알림 꺼짐</span> : null}
        <form method="post" action="/api/admin/logout" className="ml-auto">
          <button className="text-sm text-[#5B6573] underline underline-offset-4">로그아웃</button>
        </form>
      </header>
      {children}
    </main>
  )
}

function Chip({ href, on, label, n }: { href: string; on: boolean; label: string; n: number }) {
  return (
    <Link href={href} className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${on ? "border-[#0A1A33] bg-[#0A1A33] text-white" : "border-[#D6DEE8] bg-white text-[#0A1A33] hover:border-[#0055FF]"}`}>
      {label} <span className={on ? "text-white/70" : "text-[#5B6573]"}>{n}</span>
    </Link>
  )
}
