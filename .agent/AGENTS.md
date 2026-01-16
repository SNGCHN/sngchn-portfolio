# 🤖 Project Context for AI Agents

이 파일은 이 프로젝트에서 작업하는 모든 AI 에이전트를 위한 가이드북입니다. 프로젝트의 핵심 구조, 기술 스택, 규칙을 담고 있습니다.

## 🏗 프로젝트 정보
- **목적**: 개인 포트폴리오 사이트 (SNGCHN Portfolio)
- **아키텍처**: **Feature-Sliced Design (FSD)**
  - `src/shared`: 공통 UI, 유틸리티, API
  - `src/entities`: 도메인 엔티티
  - `src/features`: 사용자 인터랙션 기능
  - `src/widgets`: 완성형 UI 조각
  - `src/pages-screen`: 실제 페이지 컴포넌트 (App Router의 `page.tsx`는 여기를 호출만 함)

## 🛠 기술 스택
- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Linter/Formatter**: **Biome** (ESLint/Prettier 대신 사용)
- **Git Hooks**: Husky + lint-staged (커밋 전 Biome 체크 수행)

## 🎨 디자인 시스템 (Tailwind v4 tokens)
- **Background**: `#fdfcfb` (Warm Beige)
- **Foreground**: `#1c1c1c` (Dark Charcoal)
- **Font**: **Pretendard JP** (다국어 지원 변수형 폰트)

## ⚠️ 중요 개발 규칙
1. **커밋 메시지 및 문서화**: 
   - `feat:`, `fix:` 등 영문 접두사를 사용하지 않음.
   - 커밋 메시지, `task.md`, `implementation_plan.md` 등 모든 기록물은 오직 **한국어**로만 작성.
2. **최신 문서 참조 (Context7)**:
   - 라이브러리나 프레임워크의 문법을 사용할 때는 반드시 **`context7` MCP 서버**를 이용해 최신 공식 문서를 확인하고 반영해야 함.
3. **SSR 대응**: 
   - 서버 사이드 렌더링 시 전역 `localStorage` 접근 에러를 방지하기 위해 `src/app/layout.tsx`에 폴리필(Storage Mock)이 선언되어 있음.
4. **FSD 준수**: 
   - 모든 UI 로직은 적절한 FSD 레이어에 위치해야 하며, 하위 레이어는 상위 레이어를 참조할 수 없음. (Shared < Entities < Features < Widgets < Pages)

## 📂 주요 파일 위치
- 디자인 토큰: `src/app/globals.css`
- 공유 UI: `src/shared/ui/`
- 메인 화면: `src/pages-screen/home/ui/HomeScreen.tsx`
