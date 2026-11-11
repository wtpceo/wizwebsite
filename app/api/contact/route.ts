import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { formatAttribution, type Attribution } from '@/lib/attribution'
import { MAIL_FROM, ADMIN_EMAILS } from '@/lib/email'
import {
  normalizeContactInput,
  validateContact,
  detectSpam,
  getClientIp,
  isRateLimited,
  emailAcceptsMail,
  escapeHtml as esc,
} from '@/lib/spam-guard'
import { saveLead, pickOrgType, crmConfigured } from '@/lib/crm/leads'
import { adminConfigured } from '@/lib/crm/admin-auth'
import { sendLeadSms, leadSmsText } from '@/lib/crm/lead-sms'

// 문의 폼 공통 접수 라우트. 모든 폼(메인 상담·기업 제안·영문·인플루언서·진단·루크·외국어)이 여기로 보낸다.
//
// 처리 순서 (2026-11-06 스팸 방지 정비)
//   1) IP 횟수 제한 → 429
//   2) 스팸 판정(허니팟·제출 시간·무작위 문자열) → 메일 없이 200 (봇에게는 성공처럼 보이게)
//   3) 필수값·형식 검사 → 400 + 안내 문구 (사람의 오타는 알려 준다)
//   4) 관리자 메일 → 실패하면 500
//   5) 자동 회신: 이메일 형식과 도메인 MX 가 확인된 주소에만 보낸다. 실패해도 접수는 성공이다
//
// 로컬 테스트: CONTACT_DRY_RUN=1 이면 Resend 를 부르지 않고 로그만 남긴다 (키가 없어도 된다).

const DRY_RUN = process.env.CONTACT_DRY_RUN === '1'

export async function POST(req: Request) {
  const ip = getClientIp(req)
  try {
    let raw: Record<string, unknown>
    try {
      raw = (await req.json()) as Record<string, unknown>
      if (!raw || typeof raw !== 'object') throw new Error('body is not an object')
    } catch (parseError) {
      return NextResponse.json({ error: '요청 데이터를 파싱할 수 없습니다' }, { status: 400 })
    }

    const input = normalizeContactInput(raw)
    const formTag = input.language || '(기본 문의)'

    // 1) IP 횟수 제한
    if (await isRateLimited(ip, 'contact')) {
      console.warn('[contact] rate-limited', { ip, form: formTag })
      return NextResponse.json(
        { error: '짧은 시간에 요청이 많습니다. 잠시 뒤 다시 시도해 주세요.' },
        { status: 429 },
      )
    }

    // 2) 스팸 판정. 개인정보는 로그에 남기지 않는다 (사유·IP·폼 종류·길이만)
    const verdict = detectSpam(input)
    if (verdict.spam) {
      console.warn('[contact] spam blocked', {
        ip, form: formTag, reasons: verdict.reasons,
        nameLen: input.name.length, msgLen: input.message.length,
        landing: typeof (raw.attribution as Attribution | undefined)?.landing === 'string' ? (raw.attribution as Attribution).landing : undefined,
      })
      return NextResponse.json({ success: true })
    }

    // 3) 필수값·형식
    const invalid = validateContact(input)
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 })
    }

    const { name, phone, email, message, storeName, language, budget } = input
    const attribution: Attribution = (raw.attribution as Attribution | undefined) ?? {}

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey && !DRY_RUN) {
      console.error('RESEND_API_KEY 환경 변수가 설정되지 않았습니다')
      return NextResponse.json({ error: 'API 키가 설정되지 않았습니다' }, { status: 500 })
    }
    const resend = apiKey ? new Resend(apiKey) : null

    // 3.5) CRM 저장(/admin/leads)과 문자 알림. 메일보다 먼저 저장해 메일이 실패해도 문의가 남게 한다.
    //      둘 다 실패해도 접수는 계속한다. 운영이 아닌 곳·시험 실행에서 들어온 건 is_test 로 표시하고 문자는 보내지 않는다
    const isTest = DRY_RUN || process.env.VERCEL_ENV !== 'production'
    const orgType = pickOrgType(message)
    await saveLead({
      form: language || null,
      name: name || null,
      company: storeName || null,
      phone: phone || null,
      email: email || null,
      org_type: orgType,
      budget: budget || null,
      message: message || null,
      landing: attribution.landing || null,
      referrer: attribution.referrer || null,
      attribution: (attribution as Record<string, string>) || null,
      source_text: formatAttribution(attribution) || null,
      is_test: isTest,
    })

    // UTM·입력값은 전부 조작할 수 있는 값이다. 메일 HTML 에 그대로 넣지 않는다.
    // 11-11 대표 「전화번호가 메일에 표시 안 된다」: 연락처는 들어 있었지만 긴 유입 경로 상자 위에 작게 있어 문의내용만 보면 빠진 것처럼 보였다.
    // 연락처·이메일을 맨 위 표로 크게 올리고(누르면 전화·메일), 문의내용을 그 바로 아래, 유입 경로는 맨 아래로 내린다.
    const telHref = phone.replace(/[^\d+]/g, '')
    const row = (label: string, value: string) =>
      `<tr><td style="padding:7px 14px 7px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:7px 0;font-size:16px;font-weight:bold;color:#111;">${value}</td></tr>`
    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A1A33;">새로운 문의가 접수되었습니다</h2>
        ${budget ? `<p style="display:inline-block;background:#fef3c7;color:#92400e;font-weight:bold;padding:6px 12px;border-radius:6px;margin:0 0 8px;">💰 월 예산: ${esc(budget)}</p>` : ''}
        ${language ? `<p style="display:inline-block;background:#0055FF;color:#ffffff;font-weight:bold;padding:4px 10px;border-radius:6px;">${esc(language)}</p>` : ''}
        <table style="border-collapse:collapse;margin:8px 0 16px;">
          ${row('이름', esc(name))}
          ${row('연락처', phone ? `<a href="tel:${esc(telHref)}" style="color:#0055FF;text-decoration:none;">${esc(phone)}</a>` : '미입력')}
          ${email ? row('이메일', `<a href="mailto:${esc(email)}" style="color:#0055FF;text-decoration:none;">${esc(email)}</a>`) : ''}
          ${storeName ? row('회사명', esc(storeName)) : ''}
        </table>
        <p style="margin:0 0 6px;"><strong>문의내용</strong></p>
        <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${esc(message, 6000)}</div>
        <div style="margin:20px 0 0;padding:12px;border-left:3px solid #0055FF;background:#f5f8ff;">
          <p style="margin:0 0 6px;font-weight:bold;">유입 경로</p>
          <p style="margin:0;font-size:15px;">${esc(formatAttribution(attribution))}</p>
          ${attribution.landing ? `<p style="margin:6px 0 0;color:#666;font-size:13px;">도착 페이지: ${esc(attribution.landing)}</p>` : ''}
          ${attribution.first_seen ? `<p style="margin:2px 0 0;color:#666;font-size:13px;">첫 방문: ${esc(attribution.first_seen)}</p>` : ''}
          ${attribution.referrer ? `<p style="margin:2px 0 0;color:#666;font-size:13px;word-break:break-all;">referrer: ${esc(attribution.referrer)}</p>` : ''}
          <p style="margin:2px 0 0;color:#999;font-size:12px;">IP: ${esc(ip)}</p>
        </div>
      </div>
    `;

    // 4) 관리자 메일
    const subject = `[위즈더플래닝]${budget ? `[${budget.slice(0, 20)}]` : ''}${language ? `[${language}]` : ''} ${name}님의 문의가 접수되었습니다`
    try {
      if (DRY_RUN || !resend) {
        console.log('[contact] dry-run: 관리자 메일 생략', { form: formTag, subject })
      } else {
        const adminResult = await resend.emails.send({
          from: MAIL_FROM,
          to: ADMIN_EMAILS,
          // 답장 시 문의자에게 바로 회신되도록 (이메일 미입력 시 생략)
          replyTo: email || undefined,
          subject,
          html: adminHtml,
        })
        if (adminResult.error) throw new Error(adminResult.error.message)
        console.log('[contact] 관리자 메일 전송', { form: formTag, id: adminResult.data?.id })
      }
    } catch (error) {
      console.error('[contact] 관리자 메일 전송 오류:', error)
      return NextResponse.json({
        error: '이메일 전송 실패',
        details: error instanceof Error ? error.message : String(error)
      }, { status: 500 })
    }

    if (!isTest) {
      // 관리 화면(/admin/leads)이 실제로 열릴 때만 문자에 주소를 넣는다. 비밀번호·저장 키가 없으면 주소가 로그인 화면에서 막힌다(11-11 대표 「문자 링크가 안 열린다」)
      await sendLeadSms(leadSmsText({ company: storeName, name, phone, email, orgType, budget, form: language, message, adminReady: adminConfigured() && crmConfigured() }))
    }

    // 5) 고객 자동 회신. 형식이 맞고 도메인이 메일을 받는 주소에만 보낸다.
    //    봇이 적은 가짜 주소로 우리 이름의 메일이 나가면 발신 평판이 깎인다.
    if (email) {
      try {
        const deliverable = await emailAcceptsMail(email)
        if (!deliverable) {
          console.warn('[contact] 자동 회신 생략: 메일 주소 도메인 확인 실패', { form: formTag, domain: email.split('@')[1] })
        } else {
          // 영문 사이트 문의는 영어로 접수 확인을 보낸다(국문 메일을 받으면 해외 담당자는 스팸으로 오해한다).
          const isEnglish = language.startsWith('English')
          const userHtml = isEnglish ? `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0f766e;">We received your message</h2>
              <p>Hi ${esc(name)}, thank you for contacting WizThePlanning.</p>
              <p>Our team in Seoul will reply by email in English.</p>
              <p><strong>Your message:</strong></p>
              <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${esc(message, 6000)}</div>
              <p style="color:#6b7280;font-size:12px;margin-top:16px;">WizThePlanning (위즈더플래닝) · Seoul, Republic of Korea · wiz@wiztheplanning.com</p>
            </div>
          ` : `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4338ca;">문의 접수 확인</h2>
              <p>${esc(name)}님, 문의해 주셔서 감사합니다.</p>
              ${storeName ? `<p>${esc(storeName)} 건으로 남겨 주신 내용을 확인했습니다.</p>` : ''}
              <p>빠른 시일 내에 답변 드리겠습니다.</p>
              <p><strong>문의하신 내용:</strong></p>
              <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${esc(message, 6000)}</div>
              <p style="color:#6b7280;font-size:12px;margin-top:16px;">(주)위즈더플래닝 · 1670-0704 · wiz@wiztheplanning.com</p>
            </div>
          `;

          // 운영이 아니면 사용자 응답 이메일도 대표 메일로 보낸다
          const userEmailTarget = process.env.NODE_ENV === 'production' ? email : 'ceo@wiztheplanning.com';
          if (DRY_RUN || !resend) {
            console.log('[contact] dry-run: 자동 회신 생략', { form: formTag, domain: email.split('@')[1] })
          } else {
            await resend.emails.send({
              from: MAIL_FROM,
              to: userEmailTarget,
              subject: isEnglish ? 'WizThePlanning: we received your message' : '[위즈더플래닝] 문의가 접수되었습니다',
              html: userHtml
            });
            console.log('[contact] 자동 회신 전송', { form: formTag })
          }
        }
      } catch (userError) {
        // 사용자 이메일 전송 실패는 전체 프로세스를 중단하지 않음
        console.error('[contact] 자동 회신 전송 실패:', userError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[contact] 처리 중 오류:', error)
    return NextResponse.json(
      {
        error: '문의 처리 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
