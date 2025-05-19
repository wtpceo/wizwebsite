import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Resend API 초기화 - 환경 변수에서 키 가져오기
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    console.log('API 요청 시작'); // 디버깅 로그
    
    // 요청 데이터 파싱
    const { name, phone, email, message, storeName } = await req.json()
    console.log('받은 데이터:', { name, phone, email }); // 민감하지 않은 정보만 로깅
    
    // API 키 확인
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY 환경 변수가 설정되지 않았습니다');
      return NextResponse.json(
        { error: 'API 키가 설정되지 않았습니다' },
        { status: 500 }
      );
    }

    // 관리자 이메일을 배열로 관리 (여러 수신자 설정 가능)
    const adminEmails = [
      'wiz@wiztheplanning.com',
      // 추가 수신자 이메일을 여기에 작성
    ]
    
    // HTML 템플릿 생성
    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4338ca;">새로운 문의가 접수되었습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone || '미입력'}</p>
        ${email ? `<p><strong>이메일:</strong> ${email}</p>` : ''}
        ${storeName ? `<p><strong>가게명:</strong> ${storeName}</p>` : ''}
        <p><strong>문의내용:</strong></p>
        <div style="background-color: #f5f5f5; padding: 12px; border-radius: 4px;">
          <p>${message}</p>
        </div>
      </div>
    `;
    
    // 간소화된 Resend API 호출
    try {
      const adminResult = await resend.emails.send({
        from: 'onboarding@resend.dev', // 처음엔 이 공식 주소를 사용
        to: adminEmails,
        subject: `[위즈더플래닝] ${name}님의 문의가 접수되었습니다`,
        html: adminHtml
      });
      
      console.log('관리자 이메일 전송 성공:', adminResult); // id 속성 참조 제거
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
        const userHtml = `
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
        
        await resend.emails.send({
          from: 'onboarding@resend.dev', // 공식 샘플 주소 사용
          to: email,
          subject: '[위즈더플래닝] 문의가 접수되었습니다',
          html: userHtml
        });
      } catch (userError) {
        // 사용자 이메일 전송 실패는 전체 프로세스를 중단하지 않음
        console.error('사용자 자동응답 이메일 전송 실패:', userError);
      }
    }

    // 성공 응답
    return NextResponse.json({ success: true })
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