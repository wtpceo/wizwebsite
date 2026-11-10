import { NextResponse } from "next/server"
import { ADMIN_COOKIE, ADMIN_MAX_AGE, checkPassword } from "@/lib/crm/admin-auth"
import { getClientIp, isRateLimited } from "@/lib/spam-guard"

// 문의 관리 로그인. 같은 IP에서 짧은 시간에 여러 번 틀리면 막는다(스팸 방지와 같은 횟수 제한)
export async function POST(req: Request) {
  const ip = getClientIp(req)
  const back = (q: string) => NextResponse.redirect(new URL(`/admin/login${q}`, req.url), 303)
  if (await isRateLimited(ip, "admin-login")) return back("?e=many")
  const form = await req.formData()
  const token = checkPassword(String(form.get("password") || ""))
  if (!token) return back("?e=1")
  const res = NextResponse.redirect(new URL("/admin/leads", req.url), 303)
  res.cookies.set(ADMIN_COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: ADMIN_MAX_AGE })
  return res
}
