"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ResultsType = Record<string, any>;
type LoadingType = Record<string, boolean>;

export default function ApiTestPage() {
  const [results, setResults] = useState<ResultsType>({});
  const [loading, setLoading] = useState<LoadingType>({});

  async function testApi(endpoint: string) {
    setLoading((prev: LoadingType) => ({ ...prev, [endpoint]: true }));
    
    try {
      const apiUrl = window.location.origin + endpoint;
      console.log(`테스트 요청: ${apiUrl}`);
      
      const response = await fetch(apiUrl);
      console.log(`응답 상태: ${response.status} ${response.statusText}`);
      
      // 응답 타입 확인
      const contentType = response.headers.get('content-type');
      console.log(`응답 Content-Type: ${contentType}`);
      
      if (contentType?.includes('application/json')) {
        const data = await response.json();
        setResults((prev: ResultsType) => ({ ...prev, [endpoint]: data }));
      } else {
        const text = await response.text();
        console.error(`JSON이 아닌 응답 (첫 100자): ${text.substring(0, 100)}`);
        setResults((prev: ResultsType) => ({ 
          ...prev, 
          [endpoint]: { 
            error: '응답이 JSON 형식이 아닙니다', 
            preview: text.substring(0, 100),
            status: response.status,
            statusText: response.statusText
          } 
        }));
      }
    } catch (error) {
      console.error(`API 테스트 오류 (${endpoint}):`, error);
      setResults((prev: ResultsType) => ({ 
        ...prev, 
        [endpoint]: { 
          error: error instanceof Error ? error.message : '알 수 없는 오류' 
        } 
      }));
    } finally {
      setLoading((prev: LoadingType) => ({ ...prev, [endpoint]: false }));
    }
  }

  async function testContactPost() {
    setLoading((prev: LoadingType) => ({ ...prev, '/api/contact': true }));
    
    try {
      const apiUrl = window.location.origin + '/api/contact';
      console.log(`테스트 POST 요청: ${apiUrl}`);
      
      // 테스트 데이터
      const testData = {
        name: '테스트 사용자',
        phone: '010-1234-5678',
        email: 'test@example.com',
        storeName: '테스트 가게',
        message: '이것은 API 테스트입니다.'
      };
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testData)
      });
      
      console.log(`응답 상태: ${response.status} ${response.statusText}`);
      
      // 응답 타입 확인
      const contentType = response.headers.get('content-type');
      console.log(`응답 Content-Type: ${contentType}`);
      
      if (contentType?.includes('application/json')) {
        const data = await response.json();
        setResults((prev: ResultsType) => ({ ...prev, '/api/contact': data }));
      } else {
        const text = await response.text();
        console.error(`JSON이 아닌 응답 (첫 100자): ${text.substring(0, 100)}`);
        setResults((prev: ResultsType) => ({ 
          ...prev, 
          '/api/contact': { 
            error: '응답이 JSON 형식이 아닙니다', 
            preview: text.substring(0, 100),
            status: response.status,
            statusText: response.statusText
          } 
        }));
      }
    } catch (error) {
      console.error('문의 API 테스트 오류:', error);
      setResults((prev: ResultsType) => ({ 
        ...prev, 
        '/api/contact': { 
          error: error instanceof Error ? error.message : '알 수 없는 오류' 
        } 
      }));
    } finally {
      setLoading((prev: LoadingType) => ({ ...prev, '/api/contact': false }));
    }
  }

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-2xl font-bold mb-6">API 테스트 페이지</h1>
      
      <div className="space-y-8">
        {/* 간단한 API 테스트 */}
        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold mb-4">간단한 API 테스트</h2>
          <Button 
            onClick={() => testApi('/api/test-simple')} 
            disabled={loading['/api/test-simple']}
            className="mb-4"
          >
            {loading['/api/test-simple'] ? '테스트 중...' : '테스트 API 호출'}
          </Button>
          
          {results['/api/test-simple'] && (
            <div className="mt-4">
              <h3 className="font-bold mb-2">결과:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60 text-sm">
                {JSON.stringify(results['/api/test-simple'], null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        {/* 리센드 테스트 API */}
        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold mb-4">Resend API 테스트</h2>
          <Button 
            onClick={() => testApi('/api/test-resend')} 
            disabled={loading['/api/test-resend']}
            className="mb-4"
          >
            {loading['/api/test-resend'] ? '테스트 중...' : 'Resend 테스트 API 호출'}
          </Button>
          
          {results['/api/test-resend'] && (
            <div className="mt-4">
              <h3 className="font-bold mb-2">결과:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60 text-sm">
                {JSON.stringify(results['/api/test-resend'], null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        {/* 문의 API 테스트 */}
        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold mb-4">문의 API 테스트</h2>
          <Button 
            onClick={testContactPost} 
            disabled={loading['/api/contact']}
            className="mb-4"
          >
            {loading['/api/contact'] ? '테스트 중...' : '문의 API POST 테스트'}
          </Button>
          
          {results['/api/contact'] && (
            <div className="mt-4">
              <h3 className="font-bold mb-2">결과:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60 text-sm">
                {JSON.stringify(results['/api/contact'], null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-md">
        <h2 className="font-bold mb-2">API 문제 해결 방법:</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li><code>.env.local</code> 파일에 <code>RESEND_API_KEY</code> 값이 올바르게 설정되어 있는지 확인</li>
          <li>개발 서버를 재시작하여 환경 변수 변경사항 적용</li>
          <li>브라우저 개발자 도구의 Network 탭에서 요청/응답 확인</li>
          <li>서버 콘솔 로그에서 상세한 오류 메시지 확인</li>
        </ol>
      </div>
    </div>
  );
} 