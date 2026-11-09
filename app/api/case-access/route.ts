import { NextResponse } from "next/server"
import { Resend } from "resend"
import { MAIL_FROM, ADMIN_EMAILS } from "@/lib/email"
import {
  normalizeContactInput,
  detectSpam,
  getClientIp,
  isRateLimited,
  isPhoneOk,
  emailAcceptsMail,
} from "@/lib/spam-guard"

// 전체 사례(유료분) 열람 신청 API
// - 사업자등록증 파일을 첨부받아 관리자 메일로 전달한다.
// - 대행사 차단을 위해 "사업자 본인" 여부를 사람이 수동 심사하는 것이 목적.
// - 문의 폼(/api/contact)과 달리 multipart/form-data + 파일 첨부를 처리한다.
// - 스팸 장치(IP 횟수·허니팟·제출 시간·무작위 문자열)는 /api/contact 와 같다 (lib/spam-guard.ts).
//   스팸이면 메일 없이 200 을 주고, 형식 오류는 400 과 안내로 돌려준다.
// - 로컬 테스트: CONTACT_DRY_RUN=1 이면 Resend 를 부르지 않는다.

const MAX_FILE_BYTES = 8 * 1024 * 1024 // 8MB (Resend 첨부 여유 한도 내)
const ALLOWED_MIME = ["image/png", "image/jpeg", "image/jpg", "image/webp", "application/pdf"]

const DRY_RUN = process.env.CONTACT_DRY_RUN === "1"

export async function POST(req: Request) {
  const ip = getClientIp(req)
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey && !DRY_RUN) {
      return NextResponse.json({ error: "메일 발송 설정이 없습니다" }, { status: 500 })
    }

    let form: FormData
    try {
      form = await req.formData()
    } catch {
      return NextResponse.json({ error: "요청 형식이 올바르지 않습니다" }, { status: 400 })
    }

    const name = String(form.get("name") || "").trim()
    const businessName = String(form.get("businessName") || "").trim()
    const phone = String(form.get("phone") || "").trim()
    const email = String(form.get("email") || "").trim()
    const bizNumber = String(form.get("bizNumber") || "").trim()
    const message = String(form.get("message") || "").trim()
    const caseKey = String(form.get("caseKey") || "").trim().slice(0, 80)
    const file = form.get("file")

    if (await isRateLimited(ip, "case-access")) {
      console.warn("[case-access] rate-limited", { ip })
      return NextResponse.json({ error: "짧은 시간에 요청이 많습니다. 잠시 뒤 다시 시도해 주세요." }, { status: 429 })
    }

    // 스팸 판정 (허니팟·제출 시간·무작위 문자열). 봇에게는 성공처럼 보이게 200
    const guarded = normalizeContactInput({
      name, phone, email, storeName: businessName, message,
      company_website: form.get("company_website"), openedAt: form.get("openedAt"),
    })
    const verdict = detectSpam(guarded)
    if (verdict.spam) {
      console.warn("[case-access] spam blocked", { ip, reasons: verdict.reasons, caseKey })
      return NextResponse.json({ ok: true })
    }

    // 필수값 검증
    if (!name || !phone || !businessName) {
      return NextResponse.json({ error: "이름·업체명·연락처는 필수입니다" }, { status: 400 })
    }
    if (!isPhoneOk(phone, false)) {
      return NextResponse.json({ error: "연락처 형식을 확인해 주세요 (예: 010-0000-0000)" }, { status: 400 })
    }

    // 첨부파일 검증 (선택 — 없으면 번호로 1차 심사, 있으면 서류 첨부)
    let attachments: { filename: string; content: Buffer }[] = []
    if (file && typeof file !== "string") {
      const f = file as File
      if (f.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: "파일은 8MB 이하만 첨부할 수 있습니다" }, { status: 400 })
      }
      if (f.type && !ALLOWED_MIME.includes(f.type)) {
        return NextResponse.json(
          { error: "이미지(JPG·PNG·WEBP) 또는 PDF만 첨부할 수 있습니다" },
          { status: 400 },
        )
      }
      const buf = Buffer.from(await f.arrayBuffer())
      attachments = [{ filename: f.name || "사업자등록증", content: buf }]
    }

    if (attachments.length === 0 && !bizNumber) {
      return NextResponse.json(
        { error: "사업자등록증 파일 또는 사업자등록번호 중 하나는 입력해 주세요" },
        { status: 400 },
      )
    }

    const resend = apiKey ? new Resend(apiKey) : null

    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color:#070b14;">📄 전체 사례 열람 신청 (사업자 인증)</h2>
        <p style="display:inline-block;background:#00e5a0;color:#070b14;font-weight:bold;padding:4px 10px;border-radius:6px;">열람신청 · 수동 심사 필요</p>
        ${caseKey ? `<p><strong>신청 사례:</strong> ${escapeHtml(caseKey)}</p>` : ""}
        <p><strong>신청자:</strong> ${escapeHtml(name)}</p>
        <p><strong>업체명:</strong> ${escapeHtml(businessName)}</p>
        <p><strong>연락처:</strong> ${escapeHtml(phone)}</p>
        ${email ? `<p><strong>이메일:</strong> ${escapeHtml(email)}</p>` : ""}
        ${bizNumber ? `<p><strong>사업자등록번호:</strong> ${escapeHtml(bizNumber)}</p>` : ""}
        <p><strong>사업자등록증 첨부:</strong> ${attachments.length ? "있음 ✅" : "없음 — 번호로 조회 필요"}</p>
        ${message ? `<p><strong>메모:</strong></p><div style="background:#f5f5f5;padding:12px;border-radius:4px;">${escapeHtml(message)}</div>` : ""}
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee;" />
        <p style="color:#888;font-size:13px;">국세청 사업자등록 상태 조회로 본인·대행사 여부를 확인한 뒤 전체 사례를 회신하세요.</p>
      </div>
    `

    try {
      if (DRY_RUN || !resend) {
        console.log("[case-access] dry-run: 관리자 메일 생략", { caseKey, attachments: attachments.length })
      } else {
        await resend.emails.send({
          from: MAIL_FROM,
          to: ADMIN_EMAILS,
          subject: `[위즈더플래닝][열람신청${caseKey ? " · " + caseKey : ""}] ${businessName} · ${name}님`,
          html: adminHtml,
          replyTo: email || undefined,
          attachments: attachments.length ? attachments : undefined,
        })
      }
    } catch (error) {
      return NextResponse.json(
        { error: "신청 접수 중 오류가 발생했습니다", details: error instanceof Error ? error.message : String(error) },
        { status: 500 },
      )
    }

    // 신청자 확인 메일. 형식이 맞고 도메인에 MX 가 있는 주소에만 보낸다 (가짜 주소로 우리 이름의 메일이 나가지 않게)
    if (email && (await emailAcceptsMail(email))) {
      const userHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#070b14;">열람 신청이 접수되었습니다</h2>
          <p>${escapeHtml(name)}님, 전체 사례 열람 신청이 접수되었습니다.</p>
          <p>사업자 본인 확인 후 <strong>영업일 기준 1~2일 내</strong>에 전체 사례를 회신드립니다.
             (대행사·동종업계 확인 시 열람이 제한될 수 있습니다.)</p>
        </div>
      `
      const target = process.env.NODE_ENV === "production" ? email : "ceo@wiztheplanning.com"
      try {
        if (DRY_RUN || !resend) {
          console.log("[case-access] dry-run: 확인 메일 생략")
        } else {
          await resend.emails.send({
            from: MAIL_FROM,
            to: target,
            subject: "[위즈더플래닝] 전체 사례 열람 신청이 접수되었습니다",
            html: userHtml,
          })
        }
      } catch {
        // 확인 메일 실패는 전체 프로세스를 막지 않는다.
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { error: "서버 오류", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
