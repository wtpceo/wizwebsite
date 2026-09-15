import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { formatAttribution, type Attribution } from '@/lib/attribution'
import { MAIL_FROM, ADMIN_EMAILS } from '@/lib/email'

// API 키 디버깅을 위한 함수
function maskApiKey(key: string | undefined) {
  if (!key) return 'undefined';
  if (key.length < 8) return 'too_short_to_be_valid';
  return `${key.substring(0, 3)}...${key.substring(key.length - 3)}`;
}


/** UTM 값은 주소창으로 조작할 수 있다. 메일 HTML에 그대로 넣지 않는다. */
function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
    .slice(0, 300);
}

export async function POST(req: Request) {
  try {
    console.log('API 요청 시작'); // 디버깅 로그
    
    // 요청 데이터 파싱
    let requestData;
    try {
      requestData = await req.json();
      const { name, phone, email, message, storeName } = requestData;
      console.log('받은 데이터:', { name, phone, email }); // 민감하지 않은 정보만 로깅
    } catch (parseError) {
      console.error('요청 데이터 파싱 오류:', parseError);
      return NextResponse.json(
        { error: '요청 데이터를 파싱할 수 없습니다', details: String(parseError) },
        { status: 400 }
      );
    }
    
    // API 키 확인 및 로깅 (마스킹된 형태로)
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API 키 확인:', maskApiKey(apiKey));
    
    if (!apiKey) {
      console.error('RESEND_API_KEY 환경 변수가 설정되지 않았습니다');
      return NextResponse.json(
        { error: 'API 키가 설정되지 않았습니다' },
        { status: 500 }
      );
    }

    // Resend 인스턴스 생성
    const resend = new Resend(apiKey);
    
    const { name, phone, email, message, storeName, language, budget } = requestData;
    const attribution: Attribution = requestData.attribution ?? {};

    // 관리자 이메일 (수신자 추가는 lib/email.ts에서)
    const adminEmails = ADMIN_EMAILS
    
    // HTML 템플릿 생성
    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4338ca;">새로운 문의가 접수되었습니다</h2>
        ${budget ? `<p style="display:inline-block;background:#fef3c7;color:#92400e;font-weight:bold;padding:6px 12px;border-radius:6px;margin:0 0 8px;">💰 월 예산: ${esc(budget)}</p>` : ''}
        ${language ? `<p style="display:inline-block;background:#00e5a0;color:#070b14;font-weight:bold;padding:4px 10px;border-radius:6px;">🌐 ${language}</p>` : ''}
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone || '미입력'}</p>
        ${email ? `<p><strong>이메일:</strong> ${email}</p>` : ''}
        ${storeName ? `<p><strong>가게명:</strong> ${storeName}</p>` : ''}
        <div style="margin:16px 0;padding:12px;border-left:3px solid #4338ca;background:#f8f8ff;">
          <p style="margin:0 0 6px;font-weight:bold;">📊 유입 경로</p>
          <p style="margin:0;font-size:15px;">${esc(formatAttribution(attribution))}</p>
          ${attribution.landing ? `<p style="margin:6px 0 0;color:#666;font-size:13px;">도착 페이지: ${esc(attribution.landing)}</p>` : ''}
          ${attribution.first_seen ? `<p style="margin:2px 0 0;color:#666;font-size:13px;">첫 방문: ${esc(attribution.first_seen)}</p>` : ''}
          ${attribution.referrer ? `<p style="margin:2px 0 0;color:#666;font-size:13px;">referrer: ${esc(attribution.referrer)}</p>` : ''}
        </div>
        <p><strong>문의내용:</strong></p>
        <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px;">
          <p>${message}</p>
        </div>
      </div>
    `;
    
    // 간소화된 Resend API 호출
    try {
      console.log('Resend API 호출 시작: 관리자 이메일');
      const adminParams = {
        from: MAIL_FROM,
        to: adminEmails,
        // 답장 시 문의자에게 바로 회신되도록 (이메일 미입력 시 생략)
        replyTo: email || undefined,
        subject: `[위즈더플래닝]${budget ? `[${String(budget).slice(0, 20)}]` : ''}${language ? `[${language}]` : ''} ${name}님의 문의가 접수되었습니다`,
        html: adminHtml
      };
      console.log('Resend API 파라미터:', { ...adminParams, html: '(생략)' });
      
      const adminResult = await resend.emails.send(adminParams);
      
      console.log('관리자 이메일 전송 성공:', adminResult);
    } catch (error) {
      // 오류 처리 - 이메일 전송 실패
      console.error('이메일 전송 오류:', error);
      return NextResponse.json({ 
        error: '이메일 전송 실패', 
        details: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }
    
    // 고객 자동 응답 이메일 (이메일이 제공된 경우)
    if (email) {
      try {
        console.log('Resend API 호출 시작: 사용자 응답 이메일');
        
        // 영문 사이트 문의는 영어로 접수 확인을 보낸다(국문 메일을 받으면 해외 담당자는 스팸으로 오해한다).
        const isEnglish = typeof language === 'string' && language.startsWith('English');
        const userHtml = isEnglish ? `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f766e;">We received your message</h2>
            <p>Hi ${esc(name)}, thank you for contacting WizThePlanning.</p>
            <p>Our team in Seoul will reply by email in English.</p>
            <p><strong>Your message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${String(message ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            <p style="color:#6b7280;font-size:12px;margin-top:16px;">WizThePlanning (위즈더플래닝) · Seoul, Republic of Korea · wiz@wiztheplanning.com</p>
          </div>
        ` : `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4338ca;">문의 접수 확인</h2>
            <p>${name}님, 문의해 주셔서 감사합니다.</p>
            <p>빠른 시일 내에 답변 드리도록 하겠습니다.</p>
            <p><strong>문의하신 내용:</strong></p>
            <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px;">
              <p>${message}</p>
            </div>
          </div>
        `;
        
        // 테스트 모드에서는 사용자 응답 이메일도 ceo@wiztheplanning.com으로 전송
        const userEmailTarget = process.env.NODE_ENV === 'production' ? email : 'ceo@wiztheplanning.com';
        
        await resend.emails.send({
          from: MAIL_FROM,
          to: userEmailTarget,
          subject: isEnglish ? 'WizThePlanning: we received your message' : '[위즈더플래닝] 문의가 접수되었습니다',
          html: userHtml
        });
        
        console.log('사용자 응답 이메일 전송 성공');
      } catch (userError) {
        // 사용자 이메일 전송 실패는 전체 프로세스를 중단하지 않음
        console.error('사용자 자동응답 이메일 전송 실패:', userError);
      }
    }

    // 성공 응답
    console.log('문의 처리 완료: 성공 응답 반환');
    return NextResponse.json({ success: true });
  } catch (error) {
    // 전체 프로세스 오류 처리
    console.error('문의 처리 중 오류 발생:', error)
    return NextResponse.json(
      { 
        error: '문의 처리 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
} 