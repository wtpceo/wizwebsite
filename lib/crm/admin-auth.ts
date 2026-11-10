import { createHmac, timingSafeEqual } from "crypto"
import { cookies } from "next/headers"

// 문의 관리(/admin/leads) 로그인. 비밀번호 하나(ADMIN_PASSWORD, Vercel 환경 변수)로 들어온다.
// 쿠키에는 비밀번호가 아니라 비밀번호로 만든 서명값을 넣는다. 비밀번호를 바꾸면 기존 로그인이 모두 풀린다.

export const ADMIN_COOKIE = "wtp_admin"
export const ADMIN_MAX_AGE = 60 * 60 * 24 * 30 // 30일

function sessionToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw || pw.length < 8) return null
  return createHmac("sha256", pw).update("wtp-crm-session-v1").digest("hex")
}

function same(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export function adminConfigured() {
  return sessionToken() !== null
}

/** 입력한 비밀번호가 맞으면 쿠키에 넣을 값을, 아니면 null */
export function checkPassword(input: string): string | null {
  const pw = process.env.ADMIN_PASSWORD
  const token = sessionToken()
  if (!pw || !token) return null
  return same(input, pw) ? token : null
}

export async function isAdmin(): Promise<boolean> {
  const token = sessionToken()
  if (!token) return false
  const v = (await cookies()).get(ADMIN_COOKIE)?.value
  return !!v && same(v, token)
}
