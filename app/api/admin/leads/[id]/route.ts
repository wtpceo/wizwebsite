import { NextResponse } from "next/server"
import { isAdmin } from "@/lib/crm/admin-auth"
import { updateLead } from "@/lib/crm/leads"

// 문의 한 건의 상태·메모 바꾸기. 로그인한 관리자만
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "로그인이 필요합니다" }, { status: 401 })
  const { id } = await params
  let body: { status?: unknown; memo?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "요청을 읽을 수 없습니다" }, { status: 400 })
  }
  try {
    await updateLead(id, {
      status: typeof body.status === "string" ? body.status : undefined,
      memo: typeof body.memo === "string" ? body.memo : undefined,
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "저장 실패" }, { status: 400 })
  }
}
