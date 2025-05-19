"use client"

import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
            <p className="mb-4">
              위즈더플래닝은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>고객 문의 및 상담 요청에 대한 응대</li>
              <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</li>
              <li>마케팅 및 광고에의 활용</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="mb-4">
              위즈더플래닝은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>고객 문의 및 상담 정보: 3년</li>
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 개인정보의 제3자 제공</h2>
            <p className="mb-4">
              위즈더플래닝은 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. 정보주체의 권리·의무 및 그 행사방법</h2>
            <p className="mb-4">
              정보주체는 위즈더플래닝에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>개인정보 열람요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제요구</li>
              <li>처리정지 요구</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 안전성 확보 조치</h2>
            <p className="mb-4">
              위즈더플래닝은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>개인정보의 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보에 대한 접근 제한</li>
              <li>개인정보 취급 직원의 최소화 및 교육</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. 개인정보 보호책임자</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">이름: 김민우</p>
              <p className="mb-2">직책: 개인정보보호책임자</p>
              <p className="mb-2">연락처: 1670-0704</p>
              <p>이메일: wiz@wiztheplanning.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. 개인정보 처리방침 변경</h2>
            <p className="mb-4">
              이 개인정보처리방침은 2024년 3월 1일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
} 