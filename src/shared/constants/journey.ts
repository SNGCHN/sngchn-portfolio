import type { JourneyData } from "@/shared/types/portfolio";

export const JOURNEY_DATA: JourneyData[] = [
  {
    id: "EXP-01",
    type: "journey",
    title: "(주) 매트릭스 인턴십",
    category: "Experience",
    date: "2025.02 — 2025.03",
    description:
      "TTA(한국정보통신기술협회) 통합 페이지 제작 및 HWP 문서 파싱 기반 AI 챗봇 프로젝트에 참여했습니다.",
    details:
      "전자정부 표준 프레임워크 4.0 기반 프로젝트에서 KRDS 가이드라인을 준수한 반응형 UI를 구현하고, 15분 토큰 만료 정책에 대응한 인증 시스템을 설계했습니다. HWP 파일 파싱을 위해 Next.js API Route를 프록시로 활용하여 한컴 API CORS 문제를 해결하고, LangChain과 연동하여 문서 분석 기능을 구현했습니다.",
    tech: ["Next.js", "TypeScript", "Context API", "Zod", "React Hook Form", "LangChain"],
    keywords: ["전자정부 프레임워크", "KRDS", "인증 플로우", "HWP 파싱"],
    links: [],
    achievements: [
      {
        title: "KRDS 반응형 UI 구현",
        desc: "한국형 웹 디자인 시스템 가이드라인 준수, 모바일/태블릿/PC 대응",
      },
      {
        title: "인증 시스템 설계",
        desc: "HttpOnly 쿠키 기반 토큰을 Context API로 전역 관리, 만료 전 자동 갱신 로직",
      },
      {
        title: "HWP 파싱 및 LangChain 연동",
        desc: "Next.js API Route 프록시로 CORS 우회, 문서 요약/번역/분석 기능 구현",
      },
    ],
  },
  {
    id: "PROJ-EXP-01",
    type: "journey",
    title: "플레이스홀더 프로젝트",
    category: "Project",
    date: "2024.10 — 2025.05",
    description:
      "관심사 기반으로 모임을 개설하고 참여할 수 있는 커뮤니티 플랫폼. 검색, 지도 연동, 스케줄 관리, 알림 시스템, 모달 통합 설계를 담당했습니다.",
    details:
      "Redux Toolkit 단일 slice로 모달 상태를 중앙 집중화하고 useModal 커스텀 훅으로 호출 코드를 단순화했습니다. 서버 상태(TanStack Query)와 UI 상태(Redux)를 분리하여 낙관적 업데이트를 적용하고, mode prop 기반 폼 통합으로 코드 중복을 제거했습니다.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Zustand"],
    keywords: ["모달 통합", "낙관적 업데이트", "상태 관리"],
    links: [
      { label: "Live Demo", href: "https://www.place-holder.site/", primary: true },
      { label: "GitHub", href: "https://github.com/PlaceholderProject" },
    ],
    achievements: [
      {
        title: "모달 통합 시스템",
        desc: "컴포넌트당 15~20줄 → 1줄로 단순화, 개발자 도구에서 상태 한눈에 확인 가능",
      },
      {
        title: "알림 시스템 개선",
        desc: "낙관적 업데이트로 읽음 처리 즉시 반영, 서버/UI 상태 분리로 디버깅 용이",
      },
      {
        title: "폼 통합",
        desc: "생성/수정 폼 통합으로 코드량 50% 감소, 유지보수 편의성 향상",
      },
    ],
  },
  {
    id: "PROJ-EXP-02",
    type: "journey",
    title: "VoyageX 프로젝트",
    category: "Project",
    date: "2024.07 — 2024.08",
    description:
      "우주 여행에 대한 정보와 상품을 제공하는 플랫폼. 커뮤니티 게시판 전체와 NASA 뉴스 크롤링 기능을 담당했습니다.",
    details:
      "Next.js SSR 환경에서 Quill 에디터의 SSR 이슈를 dynamic import로 해결하고, DOMPurify로 XSS 공격을 이중 방어했습니다. base64 이미지를 Supabase Storage URL로 변환하여 성능을 개선하고, Cheerio.js 기반 서버사이드 크롤링으로 NASA 뉴스를 실시간 제공했습니다.",
    tech: ["Next.js", "TypeScript", "Quill", "Supabase", "Cheerio.js", "TanStack Query"],
    keywords: ["SSR 이슈 해결", "XSS 방어", "이미지 최적화", "웹 크롤링"],
    links: [
      { label: "Live Demo", href: "https://voyage-x.vercel.app/", primary: true },
      { label: "GitHub", href: "https://github.com/SNGCHN/voyageX" },
    ],
    achievements: [
      {
        title: "SSR 이슈 해결 및 보안 강화",
        desc: "에디터 로딩 에러 0건, DOMPurify 이중 방어로 악성 코드 원천 차단",
      },
      {
        title: "성능 최적화",
        desc: "base64 → Storage URL 변환으로 데이터 크기 90% 이상 감소",
      },
      {
        title: "NASA 뉴스 크롤링",
        desc: "서버사이드 크롤링 + Supabase upsert로 중복 없는 뉴스 피드 구현",
      },
    ],
  },
  {
    id: "EDU-01",
    type: "journey",
    title: "인하공업전문대학",
    category: "Education",
    date: "2017.03 — 2021.02",
    description: "전자공학과 졸업. 전자공학 기반의 하드웨어/소프트웨어 융합 교육을 이수했습니다.",
    details:
      "C언어와 JAVA, 아두이노로 코드를 작성하고 LED가 켜지거나 모터가 돌아가는 경험이 흥미로워서 개발자에 대한 관심이 생기게 된 계기가 되었습니다. 이후 그 피드백이 더 즉각적인 프론트엔드를 알게 되었고, 코드가 화면에 바로 나타나는 점에 끌려 자연스럽게 전향했습니다.",
    tech: ["C", "JAVA", "Arduino"],
    keywords: ["전자공학", "하드웨어/소프트웨어 융합", "프로그래밍 기초"],
    links: [],
    achievements: [
      {
        title: "프로그래밍 기초 학습",
        desc: "C언어, JAVA, 아두이노를 통한 실습 중심 교육 이수",
      },
      {
        title: "개발자로의 전환 계기",
        desc: "코드가 실제 결과로 이어지는 경험에서 개발에 대한 흥미 발견",
      },
    ],
  },
];
