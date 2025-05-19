"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TestResendPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function testResendApi() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/test-resend');
      const data = await response.json();
      
      setResult(data);
      console.log('API 응답:', data);
    } catch (err) {
      console.error('API 호출 실패:', err);
      setError(err instanceof Error ? err.message : '알 수 없는 오류');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-2xl font-bold mb-6">Resend API 테스트</h1>
      
      <Button 
        onClick={testResendApi} 
        disabled={loading}
        className="mb-6"
      >
        {loading ? '테스트 중...' : 'API 테스트 실행'}
      </Button>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
          <h3 className="font-bold mb-2">오류 발생:</h3>
          <p>{error}</p>
        </div>
      )}
      
      {result && (
        <div className="p-4 border rounded-md bg-gray-50">
          <h3 className="font-bold mb-2">결과:</h3>
          <pre className="bg-white p-4 rounded border overflow-auto max-h-96">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
      
      <div className="mt-8 p-4 border rounded-md bg-blue-50">
        <h3 className="font-bold mb-2">문제 해결 방법:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>환경 변수 <code>RESEND_API_KEY</code>가 정확하게 설정되었는지 확인</li>
          <li>Vercel 대시보드에서 환경 변수 재확인</li>
          <li>Resend API 키가 유효한지 확인 (Resend 대시보드에서 확인)</li>
          <li>콘솔 로그에서 오류 메시지 확인</li>
          <li>오류가 지속되면 개발자에게 문의하세요.</li>
        </ol>
      </div>
    </div>
  );
} 