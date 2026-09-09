"use client"

import Header from "@/components/sections/Header"
import Footer from "@/components/Footer"

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">이용약관</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제1조 (목적)</h2>
            <p className="mb-4">
              이 약관은 위즈더플래닝(이하 "회사")이 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제2조 (정의)</h2>
            <p className="mb-4">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"서비스"란 회사가 제공하는 모든 서비스를 의미합니다.</li>
              <li>"이용자"란 회사의 서비스를 이용하는 고객을 말합니다.</li>
              <li>"계약"이란 서비스 이용을 위해 회사와 이용자 사이에 체결하는 계약을 말합니다.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제3조 (서비스의 제공)</h2>
            <p className="mb-4">회사는 다음과 같은 서비스를 제공합니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>마케팅 컨설팅 서비스</li>
              <li>디지털 마케팅 서비스</li>
              <li>브랜딩 및 디자인 서비스</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제4조 (서비스 이용)</h2>
            <p className="mb-4">
              서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다. 다만, 회사는 시스템 정기점검, 증설 및 교체를 위해 서비스를 일시 중단할 수 있으며, 예정된 작업으로 인한 서비스 일시 중단은 서비스 내 공지사항을 통해 사전에 공지합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제5조 (서비스 이용료)</h2>
            <p className="mb-4">
              서비스 이용료는 회사가 제공하는 서비스의 종류와 내용에 따라 다르며, 구체적인 금액과 지불방법은 별도로 안내합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제6조 (이용자의 의무)</h2>
            <p className="mb-4">이용자는 다음 행위를 해서는 안 됩니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>서비스 이용 신청 또는 변경 시 허위내용의 등록</li>
              <li>회사의 서비스에 게시된 정보를 임의로 변경하는 행위</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)를 송신하거나 게시하는 행위</li>
              <li>회사와 기타 제3자의 저작권 등 지적재산권을 침해하는 행위</li>
              <li>회사와 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제7조 (회사의 의무)</h2>
            <p className="mb-4">
              회사는 안정적인 서비스 제공을 위해 다음과 같은 의무를 가집니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>이용자의 개인정보 보호</li>
              <li>안정적인 서비스 제공을 위한 시스템 구축 및 유지</li>
              <li>이용자의 불만사항 처리</li>
              <li>서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만이 정당하다고 인정할 경우 이를 처리</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제8조 (책임제한)</h2>
            <p className="mb-4">
              회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제9조 (분쟁해결)</h2>
            <p className="mb-4">
              회사와 이용자 간에 발생한 분쟁은 상호 협의하여 해결하며, 협의가 이루어지지 않을 경우 회사의 소재지를 관할하는 법원을 제1심 관할법원으로 합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제10조 (약관의 변경)</h2>
            <p className="mb-4">
              회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다. 변경된 약관은 공지 후 7일이 경과한 날부터 효력이 발생합니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">부칙</h2>
            <p className="mb-4">
              이 약관은 2024년 3월 1일부터 시행합니다.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
} 