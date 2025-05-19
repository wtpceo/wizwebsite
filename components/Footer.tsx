import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-slate-50 text-gray-700 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg mb-4">위즈더플래닝</h3>
            <p>대표: 정현우</p>
            <p>사업자등록번호: 668-81-00391</p>
            
            <p>주소: 서울시 금천구 가산디지털로 178 2518,2519호</p>
            <p>대표전화: 1670-0704</p>
            <p>이메일: wiz@wiztheplanning.com</p>
            <p>개인정보관리책임자: 김민우</p>
          </div>

          {/* 링크 및 연락처 */}
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                사업자정보확인
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <div className="flex space-x-4">
                <Link href="/terms" className="hover:underline">이용약관</Link>
                <Link href="/privacy" className="hover:underline">개인정보처리방침</Link>
              </div>
            </div>

            {/* 연락처 */}
            <div className="space-y-2">
              <h4 className="font-semibold">고객센터</h4>
              <p>평일 10:00 - 18:00</p>
              <p>점심시간 12:15 - 13:30</p>
              <p>주말 및 공휴일 휴무</p>
            </div>

            {/* SNS 링크 */}
            <div className="flex space-x-4">
              <Link href="https://blog.naver.com/wiztheplanning" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H6.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174 1.12a1.234 1.234 0 0 0-.373.906c0 .356.124.658.373.907l2.853 2.747c.11.092.234.166.373.22.139.055.287.083.44.083a.883.883 0 0 0 .44-.106c.139-.073.256-.166.353-.28l2.853-2.747c.11-.11.2-.239.273-.386a1.13 1.13 0 0 0 .106-.44c0-.165-.03-.32-.087-.466a1.262 1.262 0 0 0-.239-.386l-1.174-1.12zM6.333 7.24c-.73.018-1.361.276-1.893.773-.532.498-.802 1.13-.81 1.894v7.52c.008.763.278 1.395.81 1.893.532.498 1.163.756 1.893.774h11.334c.73-.018 1.361-.276 1.893-.774.532-.498.802-1.13.81-1.893v-7.52c-.008-.763-.278-1.396-.81-1.894-.532-.497-1.163-.755-1.893-.773H6.333z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/wiztheplanning" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://pf.kakao.com/_xdxdKb" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115-.111.39-.251.813-.366 1.208l-.537 1.988c-.021.078-.048.161-.048.236 0 .133.108.241.241.241.063 0 .123-.024.173-.067l2.433-1.969c.337.044.68.067 1.024.067 4.97 0 9-3.186 9-7.115S16.97 3 12 3z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 pt-8 border-t text-center text-xs text-gray-400">
          <p>© 2024 위즈더플래닝. All rights reserved.</p>
          <p className="mt-1">Hosting by Vercel</p>
        </div>
      </div>
    </footer>
  )
} 