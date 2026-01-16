# 🤖 Project Context for AI Agents

이 파일은 이 프로젝트(SNGCHN Portfolio)에서 작업하는 모든 AI 에이전트(Antigravity 등)가 반드시 준수해야 할 **최상위 지침서**입니다.

## 🚫 핵심 원칙: No "Vibe Coding"
- **완벽한 이해 우선**: 에이전트는 코드를 작성하기 전에 사용자에게 기술적 선택의 이유와 구현 방식을 상세히 설명해야 합니다.
- **사용자 승인 필수**: 사용자가 해당 단계를 100% 이해하고 승인한 경우에만 다음 단계로 진행합니다. 추측이나 "대충 돌아가는 코드"는 허용되지 않습니다.

## 🏗 프로젝트 정보 & 아키텍처
- **목적**: 개인 포트폴리오 사이트 (SNGCHN Portfolio)
- **아키텍처**: **Feature-Sliced Design (FSD)**
  - `src/shared`: 공통 UI, 유틸리티, API
  - `src/entities`: 도메인 엔티티
  - `src/features`: 사용자 인터랙션 기능
  - `src/widgets`: 완성형 UI 조각
  - `src/pages-screen`: 실제 페이지 UI (App Router의 `page.tsx`는 여기를 호출만 함)

## 🛠 기술 스택 (최신 버전 유지)
- **Next.js**: 15.3.5+ (최신 버전 업그레이드 지향)
- **React**: 19.x
- **Animation**: **Motion** (`motion/react`)
- **UI Components**: **Sonner** (Toast), **Lucide React** (Icons)
- **Styling**: **Tailwind CSS v4** (Zero Config, `@theme` 기반)
- **Linter/Formatter**: **Biome** 1.9.4+ (ESLint/Prettier 대체)
- **Git Hooks**: Husky + lint-staged

## 🎯 상세 기술 지침

### 1. Tailwind CSS v4 가이드
- **Config 파일 금지**: `tailwind.config.js`를 사용하지 않고 `globals.css` 내 `@theme` 블록에서만 관리합니다.
- **커스텀 유틸리티**: `@layer utilities`를 사용하여 선언합니다.
- **동적 클래스**: 문자열 조합(`text-${size}`) 대신 객체 매핑(`sizeMap[size]`)을 사용합니다.
- **성능**: Glassmorphism 구현 시 `will-change: backdrop-filter`를 적용합니다.

### 2. TypeScript & Code Quality
- **Any 제거**: `any` 타입을 절대 사용하지 않습니다. 발견 시 즉시 구체적인 인터페이스나 타입을 정의하여 수정합니다.
- **Biome 규칙**: `organizeImports` 활성화, `noForEach` 허용, `jsxQuoteStyle`은 `"double"`, `quoteStyle`은 `'single'`을 준수합니다.

### 3. 애니메이션 & 성능 (Motion)
- **Spring**: 부드러운 인터랙션을 위해 `useSpring` 옵션을 최적화합니다.
- **Layout**: 레이아웃 전환 시 `layout` 및 `layoutId`를 적극 활용합니다.
- **Custom Cursor**: `requestAnimationFrame` 또는 throttle/debounce를 통해 성능 저하를 방지합니다.

### 4. 접근성 (A11y) & 모바일
- **A11y**: 모든 대화형 요소에 `aria-label` 부여, 본문 건너뛰기 링크(`sr-only focus:not-sr-only`) 권장.
- **Responsive**: `scroll-snap-type` iOS Safari 이슈 등 모바일 특성 이슈를 사전에 체크합니다.

## ⚠️ 커뮤니케이션 및 기록 규칙
1. **언어**: 모든 커밋 메시지, `task.md`, `implementation_plan.md`, `walkthrough.md` 및 대화 내용은 오직 **한국어**로 작성합니다. 영문 접두사(`feat:`, `fix:`)를 절대 사용하지 않습니다.
2. **최신 문서 참조 (Context7)**: 라이브러리나 프레임워크의 문법을 사용할 때는 **반드시 `context7` MCP 서버**를 호출하여 최신 공식 문서를 확인한 후 반영합니다.

## 📂 주요 파일 위치
- 디자인 토큰: `src/app/globals.css`
- 공유 UI: `src/shared/ui/`
- 메인 화면: `src/pages-screen/home/ui/HomeScreen.tsx`
- SSR 대응 폴리필: `src/app/layout.tsx` (서버측 `localStorage` 에러 방지용)
