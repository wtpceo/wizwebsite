import { NextResponse } from "next/server"
import { Resend } from "resend"
import { MAIL_FROM, ADMIN_EMAILS } from "@/lib/email"

// 전체 사례(유료분) 열람 신청 API
// - 사업자등록증 파일을 첨부받아 관리자 메일로 전달한다.
// - 대행사 차단을 위해 "사업자 본인" 여부를 사람이 수동 심사하는 것이 목적.
// - 문의 폼(/api/contact)과 달리 multipart/form-data + 파일 첨부를 처리한다.

const MAX_FILE_BYTES = 8 * 1024 * 1024 // 8MB (Resend 첨부 여유 한도 내)
const ALLOWED_MIME = ["image/png", "image/jpeg", "image/jpg", "image/webp", "application/pdf"]

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
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
    const file = form.get("file")

    // 필수값 검증
    if (!name || !phone || !businessName) {
      return NextResponse.json({ error: "이름·업체명·연락처는 필수입니다" }, { status: 400 })
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

    const resend = new Resend(apiKey)

    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color:#070b14;">📄 전체 사례 열람 신청 (사업자 인증)</h2>
        <p style="display:inline-block;background:#00e5a0;color:#070b14;font-weight:bold;padding:4px 10px;border-radius:6px;">열람신청 · 수동 심사 필요</p>
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
      await resend.emails.send({
        from: MAIL_FROM,
        to: ADMIN_EMAILS,
        subject: `[위즈더플래닝][열람신청] ${businessName} · ${name}님`,
        html: adminHtml,
        replyTo: email || undefined,
        attachments: attachments.length ? attachments : undefined,
      })
    } catch (error) {
      return NextResponse.json(
        { error: "신청 접수 중 오류가 발생했습니다", details: error instanceof Error ? error.message : String(error) },
        { status: 500 },
      )
    }

    // 신청자 확인 메일 (이메일이 있는 경우, 운영 환경에서만 실제 발송)
    if (email) {
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
        await resend.emails.send({
          from: MAIL_FROM,
          to: target,
          subject: "[위즈더플래닝] 전체 사례 열람 신청이 접수되었습니다",
          html: userHtml,
        })
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
