import type { ProjectData } from "@/shared/types/portfolio";

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "PROJ-01",
    type: "project",
    title: "PLACEHOLDER",
    category: "Community Platform",
    description:
      "관심사 기반으로 모임을 개설하고 참여할 수 있는 커뮤니티 플랫폼입니다. 검색, 지도 연동, 스케줄 관리, 알림 시스템, 모달 통합 설계를 담당했습니다.",
    details:
      "프로젝트 초기에는 각 모달마다 개별 상태를 가지고 있었고, 기능이 늘어나면서 모달이 6개 이상으로 증가하여 유지보수가 어려워졌습니다. Redux Toolkit의 단일 slice로 모든 모달 상태를 중앙 집중화하고, useModal 커스텀 훅을 만들어 모달 호출 코드를 한 줄로 단순화했습니다. 또한 알림 시스템에서 서버 상태는 TanStack Query로, UI 상태는 Redux로 분리하여 낙관적 업데이트를 적용해 즉각적인 피드백을 제공했습니다.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Zustand"],
    github: "https://github.com/PlaceholderProject",
    demo: "https://www.place-holder.site/",
    links: [
      { label: "Live Demo", href: "https://www.place-holder.site/", primary: true },
      { label: "GitHub", href: "https://github.com/PlaceholderProject" },
    ],
    timeline: "2024.10 — 2025.05",
    team: "Team Project",
    role: "Frontend Developer",
    contribution: 30,
    keywords: ["모달 통합", "낙관적 업데이트", "상태 관리", "알림 시스템"],
    achievements: [
      {
        title: "모달 통합 시스템",
        desc: "Redux Toolkit 단일 slice + useModal 훅으로 코드량 15~20줄 → 1줄로 단순화",
      },
      {
        title: "알림 시스템 개선",
        desc: "TanStack Query + Redux 분리로 서버/UI 상태 동기화 및 낙관적 업데이트 적용",
      },
      {
        title: "폼 통합",
        desc: "mode prop 기반 생성/수정 폼 통합으로 코드량 50% 감소",
      },
    ],
    challenges: [
      {
        problem:
          "모달이 6개 이상으로 증가하면서 상태와 열기/닫기 로직이 컴포넌트마다 흩어져 유지보수 어려움",
        solution:
          "Redux Toolkit 단일 slice로 중앙 집중화, TypeScript union 타입으로 컴파일 단계 타입 안전성 확보",
      },
      {
        problem: "알림 읽음 처리 후 새로고침하면 다시 안 읽음으로 표시되는 싱크 불일치",
        solution:
          "서버 상태(TanStack Query)와 UI 상태(Redux) 분리, useMutation onMutate로 낙관적 업데이트 적용",
      },
    ],
  },
  {
    id: "PROJ-02",
    type: "project",
    title: "VOYAGEX",
    category: "Space Travel Platform",
    description:
      "우주 여행에 대한 정보와 상품을 제공하는 플랫폼입니다. 커뮤니티 게시판 전체와 NASA 뉴스 크롤링 기능을 담당했습니다.",
    details:
      "Quill 에디터를 Next.js SSR 환경에서 사용할 때 발생하는 'document is not defined' 에러를 dynamic import로 해결하고, DOMPurify를 활용해 XSS 공격을 이중으로 방어했습니다. 또한 Quill 에디터의 base64 이미지를 Supabase Storage URL로 변환하여 데이터 크기를 90% 이상 줄였고, Cheerio.js 기반 서버사이드 크롤링으로 NASA 뉴스를 실시간으로 제공했습니다.",
    tech: ["Next.js", "TypeScript", "Quill", "Supabase", "Cheerio.js", "TanStack Query"],
    github: "https://github.com/SNGCHN/voyageX",
    demo: "https://voyage-x.vercel.app/",
    links: [
      { label: "Live Demo", href: "https://voyage-x.vercel.app/", primary: true },
      { label: "GitHub", href: "https://github.com/SNGCHN/voyageX" },
    ],
    timeline: "2024.07 — 2024.08",
    team: "Team Project",
    role: "Frontend Developer",
    contribution: 25,
    keywords: ["SSR 이슈 해결", "XSS 방어", "이미지 최적화", "웹 크롤링"],
    achievements: [
      {
        title: "SSR 이슈 해결",
        desc: "dynamic import + ssr: false로 Quill 에디터 로딩 에러 0건 달성",
      },
      {
        title: "보안 강화",
        desc: "DOMPurify.sanitize()로 저장/렌더링 시 이중 방어, 악성 코드 삽입 원천 차단",
      },
      {
        title: "성능 최적화",
        desc: "base64 → Supabase Storage URL 변환으로 데이터 크기 90% 이상 감소",
      },
      {
        title: "NASA 뉴스 크롤링",
        desc: "Next.js API Route + Cheerio.js로 CORS 우회 및 Supabase upsert로 중복 방지",
      },
    ],
    challenges: [
      {
        problem: "Next.js SSR 환경에서 Quill 에디터의 'document is not defined' 에러 발생",
        solution: "dynamic import와 ssr: false 옵션으로 클라이언트에서만 로드하도록 분리",
      },
      {
        problem: "Quill이 생성하는 HTML을 그대로 저장 시 XSS 공격 취약점",
        solution: "DOMPurify.sanitize()로 저장 전/렌더링 시 이중 방어 적용",
      },
      {
        problem: "base64 인코딩 이미지로 인한 수 MB 데이터 크기 및 느린 로딩",
        solution: "이미지 삽입 시 Supabase Storage 업로드 후 public URL로 교체하는 로직 구현",
      },
    ],
  },
  {
    id: "PROJ-03",
    type: "project",
    title: "TTA 통합 페이지",
    category: "Enterprise / AI Chatbot",
    description:
      "(주) 매트릭스 인턴십에서 진행한 TTA(한국정보통신기술협회) 통합 페이지 제작 및 HWP 문서 파싱 기반 AI 챗봇 프로젝트입니다.",
    details:
      "전자정부 표준 프레임워크 4.0 기반 프로젝트에서 KRDS(한국형 웹 디자인 시스템) 가이드라인을 준수한 반응형 UI를 구현했습니다. 15분 토큰 만료 정책에 대응하여 HttpOnly 쿠키 기반 토큰을 Context API로 전역 관리하고, 만료 전 자동 갱신 로직을 설계했습니다. 또한 HWP 파일 파싱을 위해 Next.js API Route를 프록시 서버로 활용하여 CORS 문제를 우회하고, LangChain과 연동하여 문서 요약/번역/분석 기능을 구현했습니다.",
    tech: ["Next.js", "TypeScript", "Context API", "Zod", "React Hook Form", "LangChain"],
    links: [],
    timeline: "2025.02 — 2025.03",
    team: "(주) 매트릭스 인턴십",
    role: "Frontend Developer",
    contribution: 40,
    keywords: ["전자정부 프레임워크", "KRDS", "HWP 파싱", "AI 챗봇", "인증 플로우"],
    achievements: [
      {
        title: "KRDS 반응형 UI",
        desc: "한국형 웹 디자인 시스템 가이드라인 준수, 모바일/태블릿/PC 대응",
      },
      {
        title: "인증 시스템",
        desc: "HttpOnly 쿠키 + Context API 전역 관리, 15분 토큰 만료 전 자동 갱신",
      },
      {
        title: "HWP 파싱 및 AI 연동",
        desc: "Next.js API Route 프록시로 CORS 우회, LangChain 연동 문서 분석 기능",
      },
      {
        title: "런타임 유효성 검사",
        desc: "Zod + React Hook Form 연동으로 타입 안전한 폼 검증 시스템 구축",
      },
    ],
    challenges: [
      {
        problem: "JavaScript 기반 hwp.js가 복잡한 HWP 문서 구조를 제대로 처리하지 못함",
        solution: "Next.js API Route를 프록시 서버로 활용하여 한컴 공식 API 호출 및 CORS 우회",
      },
      {
        problem: "TypeScript 컴파일 시점에서만 타입 검사, 런타임 사용자 입력 검증 불가",
        solution: "Zod 스키마로 런타임 유효성 검사 추가, React Hook Form과 연동",
      },
    ],
  },
];
