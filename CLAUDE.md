# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 필요한 가이드를 제공합니다.

## 프로젝트 개요

위즈더플래닝(WizThePlanning) 마케팅 에이전시의 Next.js 15 기반 웹사이트입니다. TypeScript, React 18, shadcn/ui 컴포넌트와 Tailwind CSS를 사용하여 구축되었습니다.

## 주요 개발 명령어

```bash
# 개발 서버
pnpm dev        # 개발 서버 시작 (http://localhost:3000)

# 빌드 및 배포
pnpm build      # 프로덕션 빌드
pnpm start      # 프로덕션 서버 시작

# 코드 품질
pnpm lint       # Next.js 린터 실행
```

## 아키텍처 및 구조

### 핵심 기술 스택
- **프레임워크**: Next.js 15 (App Router 사용)
- **UI 라이브러리**: shadcn/ui 컴포넌트 (`components/ui/`)
- **스타일링**: Tailwind CSS (CSS 변수 활용)
- **폼 처리**: React Hook Form + Zod 유효성 검증
- **이메일**: Resend API (문의 폼 전송)
- **애니메이션**: Framer Motion

### 주요 디렉토리 구조
- `app/` - Next.js App Router 페이지 및 API 라우트
  - `app/[locale]/` - 다국어 페이지 (한국어 중심)
  - `app/api/` - API 엔드포인트 (문의 폼 처리)
  - `app/strategy/` - 전략 상세 페이지들
  - `app/portfolio/` - 포트폴리오 페이지
- `components/sections/` - 메인 페이지 섹션들 (Hero, Services, Pricing 등)
- `components/ui/` - shadcn/ui 컴포넌트 라이브러리
- `public/` - 정적 파일

### 중요 설정 사항
- **TypeScript**: 경로 별칭 `@/*`가 프로젝트 루트를 가리킴
- **빌드 설정**: ESLint와 TypeScript 오류를 빌드 시 무시 (`next.config.mjs` 참조)
- **이미지 최적화**: 비활성화됨 (`unoptimized: true`), 모든 HTTPS 소스 허용

### API 통합
문의 폼은 Resend API 사용:
- 엔드포인트: `/api/contact`
- 환경 변수: `RESEND_API_KEY` 필요
- 수신 이메일: `ceo@wiztheplanning.com`
- 개발 환경: `onboarding@resend.dev`를 발신자로 사용

### 컴포넌트 아키텍처
모듈식 섹션 기반 구조:
- 각 주요 섹션은 `components/sections/`에 독립적 컴포넌트로 구성
- shadcn/ui 기본 컴포넌트들을 활용
- 공통 유틸리티는 `lib/utils.ts`에 위치 (주로 `cn()` 클래스명 병합)

### 스타일링 방식
- Tailwind CSS와 커스텀 애니메이션 (`tailwindcss-animate`)
- CSS 변수를 통한 테마 설정 (`app/globals.css`)
- `class-variance-authority`로 컴포넌트 변형 처리

### 페이지 구성
- **메인 페이지**: Hero → Services → Strategy → Pricing → Contact
- **전략 페이지**: 6개의 개별 전략 상세 페이지 (`/strategy/1-6`)
- **포트폴리오**: 별도 포트폴리오 페이지
- **네이버 마케팅**: 특화 서비스 페이지

## 개발 참고사항

### 새 컴포넌트 추가
`components/ui/`의 기존 패턴을 따라 shadcn/ui 컴포넌트 추가

### 섹션 수정
메인 페이지 섹션들은 `components/sections/`에 있으며, 각각 독립적인 스타일과 로직을 가짐

### 폼 작업
React Hook Form과 Zod 스키마 사용. `ContactSection.tsx`의 문의 폼 구현 참조

### 환경 변수 설정
문의 폼이나 이메일 기능 작업 시:
- `.env.local`에 `RESEND_API_KEY` 설정
- 테스트 엔드포인트: `/test-api`, `/test-resend`

### 배포 고려사항
한국 시장을 타겟으로 하며, `app/layout.tsx`에서 메타데이터와 OpenGraph 태그가 한국어로 설정되어 있음