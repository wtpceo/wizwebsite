import { redirect } from "next/navigation"
import { adminConfigured, isAdmin } from "@/lib/crm/admin-auth"

export const dynamic = "force-dynamic"

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  if (await isAdmin()) redirect("/admin/leads")
  const { e } = await searchParams
  const ready = adminConfigured()
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form method="post" action="/api/admin/login" className="w-full max-w-sm rounded-2xl border border-[#E3E8EF] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,26,51,.35)]">
        <p className="text-xs font-bold tracking-wide text-[#0055FF]">위즈더플래닝</p>
        <h1 className="mt-1 text-xl font-extrabold">문의 관리</h1>
        {!ready ? (
          <p className="mt-5 rounded-lg bg-amber-50 px-3 py-2.5 text-sm text-amber-800">관리자 비밀번호(ADMIN_PASSWORD)가 아직 설정되지 않았습니다.</p>
        ) : (
          <>
            <label className="mt-6 block text-sm font-semibold" htmlFor="pw">
              비밀번호
            </label>
            <input id="pw" name="password" type="password" autoComplete="current-password" required autoFocus className="mt-2 h-11 w-full rounded-lg border border-[#D6DEE8] px-3 outline-none focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20" />
            {e ? (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {e === "many" ? "시도가 너무 많습니다. 잠시 뒤 다시 해 주세요." : "비밀번호가 맞지 않습니다."}
              </p>
            ) : null}
            <button type="submit" className="mt-5 h-11 w-full rounded-lg bg-[#0055FF] font-bold text-white hover:bg-[#0047D6]">
              들어가기
            </button>
          </>
        )}
      </form>
    </main>
  )
}
