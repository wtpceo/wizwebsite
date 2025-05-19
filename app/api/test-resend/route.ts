import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// API 키 디버깅을 위한 함수
function maskApiKey(key: string | undefined) {
  if (!key) return 'undefined';
  if (key.length < 8) return 'too_short_to_be_valid';
  return `${key.substring(0, 3)}...${key.substring(key.length - 3)}`;
}

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    console.log('Using API key:', maskApiKey(apiKey));

    // 1. API 키 확인
    if (!apiKey) {
      return NextResponse.json({
        error: '환경 변수 RESEND_API_KEY가 설정되지 않았습니다',
        environment: Object.keys(process.env).filter(key => !key.includes('SECRET') && !key.includes('KEY')),
      });
    }

    // 2. Resend 인스턴스 생성
    const resend = new Resend(apiKey);
    console.log('Resend 인스턴스 생성됨');

    // 3. 테스트 이메일 전송
    try {
      const testResult = await resend.emails.send({
        from: 'onboarding@resend.dev', // 꼭 이 주소를 사용해야 함 (처음에는)
        to: 'delivered@resend.dev', // Resend의 테스트 주소
        subject: 'Resend API 테스트',
        html: '<p>테스트 이메일입니다!</p>',
      });

      console.log('테스트 이메일 전송 결과:', testResult);
      return NextResponse.json({
        success: true,
        message: '테스트 이메일이 성공적으로 전송되었습니다',
        result: testResult,
      });
    } catch (emailError) {
      console.error('테스트 이메일 전송 실패:', emailError);
      return NextResponse.json({
        error: '테스트 이메일 전송 실패',
        details: emailError instanceof Error ? emailError.message : String(emailError),
      }, { status: 500 });
    }
  } catch (error) {
    console.error('테스트 API 오류:', error);
    return NextResponse.json({
      error: '테스트 API 오류 발생',
      details: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
} 