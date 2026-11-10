// 홈페이지 문의(리드) 저장·조회. Supabase 프로젝트 wiztheplanning-crm(위즈더플래닝 전용, 2026-11-10 생성)의 leads 표.
// 서버 키(service role)로 PostgREST 를 직접 부른다. 공개 키로는 표를 읽을 수 없게 RLS 만 켜 두었다.
// 키가 없으면(로컬·미설정) 조용히 건너뛴다. 문의 접수 자체를 막지 않는다.
//
// 환경 변수 (Vercel)
//   CRM_SUPABASE_URL          https://fsdhfphcflntzowpdvkb.supabase.co
//   CRM_SUPABASE_SERVICE_KEY  Supabase 대시보드 → Project Settings → API keys 의 service_role(secret) 키

export const LEAD_STATUSES = ["신규", "연락함", "미팅", "제안", "계약", "보류"] as const
export type LeadStatus = (typeof LEAD_STATUSES)[number]

export type Lead = {
  id: string
  created_at: string
  updated_at: string
  form: string | null
  name: string | null
  company: string | null
  phone: string | null
  email: string | null
  org_type: string | null
  budget: string | null
  message: string | null
  landing: string | null
  referrer: string | null
  attribution: Record<string, string> | null
  source_text: string | null
  status: LeadStatus
  memo: string | null
  is_test: boolean
}

export type NewLead = Omit<Lead, "id" | "created_at" | "updated_at" | "status" | "memo">

function conf() {
  const url = process.env.CRM_SUPABASE_URL
  const key = process.env.CRM_SUPABASE_SERVICE_KEY
  if (!url || !key) return null
  return { url: url.replace(/\/$/, ""), key }
}

export function crmConfigured() {
  return conf() !== null
}

async function rest(path: string, init: RequestInit = {}) {
  const c = conf()
  if (!c) throw new Error("CRM 환경 변수가 없습니다")
  const res = await fetch(`${c.url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: c.key,
      Authorization: `Bearer ${c.key}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`CRM ${res.status}: ${(await res.text()).slice(0, 200)}`)
  return res
}

/** 문의 한 건 저장. 실패해도 예외를 던지지 않고 false 를 돌려준다(메일 발송을 막지 않는다) */
export async function saveLead(lead: NewLead): Promise<boolean> {
  if (!conf()) return false
  try {
    await rest("leads", { method: "POST", body: JSON.stringify(lead), headers: { Prefer: "return=minimal" } })
    return true
  } catch (e) {
    console.error("[crm] 문의 저장 실패", e instanceof Error ? e.message : e)
    return false
  }
}

export async function listLeads(opts: { status?: string; includeTest?: boolean; limit?: number } = {}): Promise<Lead[]> {
  const q = new URLSearchParams({ select: "*", order: "created_at.desc", limit: String(opts.limit ?? 300) })
  if (opts.status && (LEAD_STATUSES as readonly string[]).includes(opts.status)) q.set("status", `eq.${opts.status}`)
  if (!opts.includeTest) q.set("is_test", "eq.false")
  const res = await rest(`leads?${q.toString()}`)
  return (await res.json()) as Lead[]
}

export async function countByStatus(includeTest = false): Promise<Record<string, number>> {
  const q = new URLSearchParams({ select: "status" })
  if (!includeTest) q.set("is_test", "eq.false")
  const res = await rest(`leads?${q.toString()}`)
  const rows = (await res.json()) as { status: string }[]
  const out: Record<string, number> = {}
  for (const r of rows) out[r.status] = (out[r.status] || 0) + 1
  return out
}

export async function updateLead(id: string, patch: { status?: string; memo?: string }) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("잘못된 문의 번호")
  const body: Record<string, string> = {}
  if (patch.status !== undefined) {
    if (!(LEAD_STATUSES as readonly string[]).includes(patch.status)) throw new Error("잘못된 상태 값")
    body.status = patch.status
  }
  if (patch.memo !== undefined) body.memo = patch.memo.slice(0, 4000)
  await rest(`leads?id=eq.${id}`, { method: "PATCH", body: JSON.stringify(body), headers: { Prefer: "return=minimal" } })
}

/** 메시지 본문의 '구분: 기업' 줄에서 기업·병원·그 밖을 꺼낸다(/contact 폼) */
export function pickOrgType(message: string): string | null {
  const m = message.match(/^구분:\s*(.+)$/m)
  return m ? m[1].trim().slice(0, 20) : null
}
