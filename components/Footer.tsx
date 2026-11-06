import Link from "next/link"
import { AD_SERVICES } from "@/lib/ad-services"

// 사이트 바닥(2026-11 리브랜딩). 디자인기준 v1: 큰 '위즈더플래닝' 한 줄 + 타일 세 개
// (다루는 광고 / 찾아오시는 길 / 회사 정보). 면은 선 대신 색 한 단계(surface)로 가른다.
// 여러 페이지가 이 파일을 import하므로 파일 이름과 default export는 그대로 둔다

// 공정위 사업자정보확인은 하이픈 없는 10자리를 받으므로 표기용 번호에서 숫자만 추출한다
const bizNo = "668-81-00391"
const bizInfoUrl = `https://www.ftc.go.kr/bizCommPop.do?wrkr_no=${bizNo.replace(/-/g, "")}`

const tile = "bg-[var(--surface)] p-6 text-[15px] leading-relaxed md:col-span-4 md:min-h-[180px]"
const tileHead = "mb-2.5 block text-base font-bold"
const tileLink = "block py-0.5 font-semibold no-underline hover:underline"

// tone="dark": 새 홈의 바닥. 문의 면(검정)에 이어 검정 바탕·짙은 회색 타일로 간다. 색 변수만 바꾸고 짜임은 같다
const DARK_VARS = { "--bg": "#0A0A0A", "--surface": "#1c1c1b", "--surface-2": "#2a2a29", "--ink": "#f5f5f3", "--muted": "#b9b9b5" } as React.CSSProperties

export default function Footer({ tone }: { tone?: "dark" } = {}) {
  return (
    <footer
      className="grid grid-cols-1 gap-2 break-keep bg-[var(--bg)] p-2 text-[var(--ink)] md:grid-cols-12"
      style={tone === "dark" ? DARK_VARS : undefined}
    >
      <div className="overflow-hidden bg-[var(--surface)] p-6 md:col-span-12">
        <span
          aria-hidden="true"
          className="block whitespace-nowrap font-black leading-[0.85] tracking-[-0.06em] [font-size:clamp(3.5rem,13vw,13rem)]"
        >
          위즈더플래닝
        </span>
      </div>

      <nav aria-label="다루는 광고" className={tile}>
        <b className={tileHead}>다루는 광고</b>
        {AD_SERVICES.map((a) => (
          <Link key={a.href} href={a.href} className={tileLink}>
            {a.label}
          </Link>
        ))}
      </nav>

      <div className={tile}>
        <b className={tileHead}>찾아오시는 길</b>
        <address className="not-italic">서울시 금천구 디지털로 178 퍼블릭가산 A동 2518호·2519호</address>
      </div>

      <div className={tile}>
        <b className={tileHead}>(주)위즈더플래닝</b>
        <p>대표 정현우</p>
        <p>사업자등록번호 {bizNo}</p>
        <p>
          전화 <a href="tel:1670-0704" className="no-underline hover:underline">1670-0704</a>
        </p>
        <p>
          <a href="mailto:wiz@wiztheplanning.com" className="no-underline hover:underline">
            wiz@wiztheplanning.com
          </a>
        </p>
        <p>개인정보관리책임자 김민우</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/terms" className="font-semibold hover:underline">
            이용약관
          </Link>
          <Link href="/privacy" className="font-semibold hover:underline">
            개인정보처리방침
          </Link>
          <a href={bizInfoUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
            사업자정보확인
          </a>
        </div>

        {/* SNS 링크 */}
        <div className="mt-4 flex gap-4 text-[var(--muted)]">
          <Link href="https://blog.naver.com/marketingrecipe-" target="_blank" rel="noopener noreferrer" aria-label="네이버 블로그" className="hover:text-[var(--ink)]">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H6.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174 1.12a1.234 1.234 0 0 0-.373.906c0 .356.124.658.373.907l2.853 2.747c.11.092.234.166.373.22.139.055.287.083.44.083a.883.883 0 0 0 .44-.106c.139-.073.256-.166.353-.28l2.853-2.747c.11-.11.2-.239.273-.386a1.13 1.13 0 0 0 .106-.44c0-.165-.03-.32-.087-.466a1.262 1.262 0 0 0-.239-.386l-1.174-1.12zM6.333 7.24c-.73.018-1.361.276-1.893.773-.532.498-.802 1.13-.81 1.894v7.52c.008.763.278 1.395.81 1.893.532.498 1.163.756 1.893.774h11.334c.73-.018 1.361-.276 1.893-.774.532-.498.802-1.13.81-1.893v-7.52c-.008-.763-.278-1.396-.81-1.894-.532-.497-1.163-.755-1.893-.773H6.333z" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/matzip_town" target="_blank" rel="noopener noreferrer" aria-label="인스타그램 맛집타운" className="hover:text-[var(--ink)]">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          <Link href="http://pf.kakao.com/_QUTxcb" target="_blank" rel="noopener noreferrer" aria-label="카카오톡 채널" className="hover:text-[var(--ink)]">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115-.111.39-.251.813-.366 1.208l-.537 1.988c-.021.078-.048.161-.048.236 0 .133.108.241.241.241.063 0 .123-.024.173-.067l2.433-1.969c.337.044.68.067 1.024.067 4.97 0 9-3.186 9-7.115S16.97 3 12 3z" />
            </svg>
          </Link>
        </div>
        <p className="mt-4 text-sm text-[var(--muted)]">© 위즈더플래닝</p>
      </div>
    </footer>
  )
}
