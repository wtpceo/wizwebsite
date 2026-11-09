import Link from "next/link"
import { SERVICES, CHAPTERS, CONTACT } from "./content"
import { Icon } from "./icons"

// 홈(숏폼형)과 새 쪽(서비스·업종별·전문 인력·회사소개)이 같이 쓰는 머리글·메뉴·바닥글·아래 바.
// home = 장 막대와 「NN / 46」이 붙고 컷 바탕색을 따라 글자색이 바뀐다. doc = 흰 바탕 고정 머리글.

/** 신청 버튼 — 기본은 진단 신청, 기업 경로(/business/*)는 '제안 요청' 이름으로. 11-09 대표: 기업 제안 요청 폼을 문의(/contact)로 합침 */
export type SfCta = { href: string; label: string }
const DEFAULT_CTA: SfCta = { href: "/contact", label: "진단 신청" }
export const BIZ_CTA: SfCta = { href: "/contact", label: "제안 요청 보내기" }

export function SfHeader({ home = false, cta = DEFAULT_CTA }: { home?: boolean; cta?: SfCta }) {
  return (
    <header className={`sfh${home ? "" : " sfh-doc"}`} id="sfh" data-tone={home ? "c" : "w"}>
      <Link className="sfh-logo" href="/" aria-label="위즈더플래닝 홈">
        <img src="/sf/img/wiz-symbol.png" alt="" width={733} height={460} />
        {home ? <i className="sfh-sym" aria-hidden="true" /> : null}
        <b>WIZ THE PLANNING</b>
      </Link>
      <nav className="sfh-nav" aria-label="주 메뉴">
        {/* 11-06 사장님 「상단 메뉴바 간격 다 동일하게」 + 「이름 줄이지 말고 칸마다」 — 마우스를 댄 메뉴의 항목만 글자 가운데 아래 상자로 */}
        <div className="sfh-it">
          <Link href="/about">회사</Link>
          <div className="sfh-col">
            <Link href="/about">위즈더플래닝 소개</Link>
            <Link href="/about#location">오시는 길</Link>
          </div>
        </div>
        <div className="sfh-it sfh-it-svc">
          {/* 11-07 대표: '서비스' 글자 대신 매체 이름이 위로 돌아가며 순환. 보이는 이름을 누르면 그 매체 쪽으로, 마우스를 대면 멈추고 전체 목록이 펼쳐진다 */}
          <div className="sfh-tick" aria-label="서비스">
            <span className="sfh-tick-sz" aria-hidden="true">
              {SERVICES.map((s) => (
                <span key={s.k}>{s.n}</span>
              ))}
            </span>
            <span className="sfh-tick-roll">
              {[...SERVICES, SERVICES[0]].map((s, i) => (
                <Link key={i} href={`/services/${s.slug}`} tabIndex={i === 0 ? 0 : -1} aria-hidden={i !== 0}>
                  {s.n}
                </Link>
              ))}
            </span>
          </div>
          <div className="sfh-col">
            {SERVICES.map((s) => (
              <Link key={s.k} href={`/services/${s.slug}`}>
                {s.n}
              </Link>
            ))}
          </div>
        </div>
        <div className="sfh-it">
          <Link href="/team">전문팀</Link>
          <div className="sfh-col">
            <Link href="/team">전문팀과 프로세스</Link>
          </div>
        </div>
        <div className="sfh-it">
          <Link href="/guide">인사이트</Link>
          <div className="sfh-col">
            <Link href="/guide">인사이트 리포트</Link>
            <Link href="/theater">WIZ Theater</Link>
            <Link href="/how-we-measure">측정 방식</Link>
          </div>
        </div>
        <div className="sfh-it">
          <Link href="/contact">문의</Link>
          <div className="sfh-col">
            <Link href="/contact">진단 신청</Link>
            <Link href="/medical-diagnosis">병원 AI 검색 무료 진단</Link>
          </div>
        </div>
      </nav>
      {/* 11-06 밤 대표: 머리글 오른쪽 '진단 신청' 버튼과 컷 숫자(01 / 47 개요)는 뺀다. 장 이동 막대는 남긴다 */}
      <button type="button" className="sfh-menu" id="sfhMenu" aria-expanded="false" aria-controls="sfm">
        <Icon k="menu" />
        <span className="sr">메뉴 열기</span>
      </button>
      {home ? (
        <nav className="sfp" id="sfp" aria-label="장 이동">
          {CHAPTERS.map((c, i) => (
            <a key={c.id} href={`#${c.id}`} data-chap={i} title={c.n}>
              <i />
              <span className="sr">{c.n}</span>
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export function SfMenu() {
  return (
    <div className="sfm" id="sfm" hidden>
      <div className="sfm-in">
        <button type="button" className="sfm-x" id="sfmX" aria-label="메뉴 닫기">
          <Icon k="close" />
        </button>
        <p className="sfm-h">회사</p>
        <Link href="/about">위즈더플래닝 소개</Link>
        <Link href="/team">전문팀 · 프로세스</Link>
        <Link href="/about#location">오시는 길</Link>
        <p className="sfm-h">서비스</p>
        <div className="sfm-g">
          {SERVICES.map((s) => (
            <Link key={s.k} href={`/services/${s.slug}`}>
              {s.n}
            </Link>
          ))}
        </div>
        <p className="sfm-h">인사이트 · 문의</p>
        <Link href="/guide">인사이트 리포트</Link>
        <Link href="/contact">진단 신청</Link>
      </div>
    </div>
  )
}

export function SfFooter() {
  return (
    <footer className="sff" id="sff">
      <div className="sff-in">
        <div className="sff-call">
          <p>대표전화 · {CONTACT.hours}</p>
          <a href={CONTACT.telHref} data-tel>
            {CONTACT.tel}
          </a>
        </div>
        <nav className="sff-nav" aria-label="전체 메뉴">
          <div>
            <p>회사</p>
            <Link href="/about">위즈더플래닝 소개</Link>
            <Link href="/team">전문팀</Link>
            <Link href="/team#process">프로세스</Link>
          </div>
          <div>
            <p>서비스</p>
            {SERVICES.map((s) => (
              <Link key={s.k} href={`/services/${s.slug}`}>
                {s.n}
              </Link>
            ))}
          </div>
          <div>
            <p>인사이트</p>
            <Link href="/guide">인사이트 리포트</Link>
            <Link href="/business/insights">기업 인사이트</Link>
            <Link href="/theater">WIZ Theater</Link>
            <Link href="/how-we-measure">측정 방식</Link>
          </div>
          <div>
            <p>문의</p>
            <Link href="/contact">진단 신청</Link>
            <Link href="/medical-diagnosis">병원 AI 검색 무료 진단</Link>
          </div>
          <div>
            <p>Language</p>
            <Link href="/en">English</Link>
            <Link href="/zh">中文</Link>
            <Link href="/vi">Tiếng Việt</Link>
          </div>
        </nav>
        <div className="sff-biz">
          <p>
            <b>(주)위즈더플래닝</b> · 대표 정현우 · 사업자등록번호 668-81-00391{" "}
            <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6688100391" target="_blank" rel="noopener noreferrer">
              사업자정보확인
            </a>
          </p>
          <p>서울시 금천구 디지털로 178 퍼블릭가산 A동 2518호·2519호 · {CONTACT.email} · 개인정보관리책임자 김민우</p>
          <p>평일 10:00–18:00 · 점심시간 12:15–13:30 · 주말 및 공휴일 휴무</p>
          <p className="sff-legal">
            <Link href="/terms">이용약관</Link>
            <Link href="/privacy">개인정보처리방침</Link>
            <span>© 2026 위즈더플래닝</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export function SfDock({ home = false, cta = DEFAULT_CTA }: { home?: boolean; cta?: SfCta }) {
  return (
    <>
      {/* 11-06 밤 대표: 오른쪽 아래 떠 있던 '문의하기' 버튼은 뺀다. 휴대폰 아래 고정 바(전화·카카오·신청)는 그대로 */}
      <nav className="sfb" aria-label="바로 연락">
        <a href={CONTACT.telHref} data-tel>
          <Icon k="phone" />
          전화 상담
        </a>
        <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" data-kakao className="kk">
          <Icon k="kakao" />
          카카오톡
        </a>
        <Link href={cta.href} className="sfb-p">
          {cta.label}
        </Link>
      </nav>
    </>
  )
}
