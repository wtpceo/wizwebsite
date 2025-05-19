import { NextResponse } from 'next/server';

export async function GET() {
  // 간단한 JSON 응답을 반환하는 테스트 API
  return NextResponse.json({
    status: 'success',
    message: 'API가 정상적으로 작동합니다',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      nodeEnv: process.env.NODE_ENV
    }
  });
}

export async function POST(req: Request) {
  try {
    // 요청 데이터 받기
    const data = await req.json();
    
    // 데이터와 함께 응답
    return NextResponse.json({
      status: 'success', 
      message: '요청이 성공적으로 처리되었습니다',
      received: data
    });
  } catch (error) {
    console.error('POST 요청 처리 오류:', error);
    return NextResponse.json({
      status: 'error',
      message: '요청 처리 중 오류가 발생했습니다',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 400 });
  }
} 