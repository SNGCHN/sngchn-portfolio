import type { JourneyData } from "@/shared/types/portfolio";

export const JOURNEY_MOCK: JourneyData[] = [
  {
    id: "EXP-01",
    type: "journey",
    title: "Senior Frontend Engineer",
    category: "Experience",
    date: "2023 - Present",
    description: "핀테크 스타트업 Core Platform 팀 리드",
    details:
      "디자인 시스템을 총괄하고 레거시 코드를 모던 스택(Next.js, TS)으로 마이그레이션하는 프로젝트를 주도했습니다. 팀의 생산성을 30% 이상 향상시키는 공통 컴포넌트 라이브러리를 구축했습니다.",
    tech: ["Next.js", "Recoil", "React Query", "Jest"],
    links: [],
    achievements: [
      { title: "Design System 구축", desc: "40종 이상의 공통 컴포넌트 개발 및 문서화 (Storybook)" },
      {
        title: "성능 최적화",
        desc: "Lighthouse 점수 40점대에서 90점대로 개선 (Code Splitting, Image Optimization)",
      },
    ],
  },
  {
    id: "EXP-02",
    type: "journey",
    title: "Frontend Developer",
    category: "Experience",
    date: "2021 - 2023",
    description: "이커머스 서비스 웹/모바일 프론트엔드 개발",
    details:
      "MAU 50만의 쇼핑몰 웹 서비스를 유지보수하고 신규 기능을 개발했습니다. A/B 테스트 환경을 구축하여 전환율(CVR)을 15% 상승시키는 데 기여했습니다.",
    tech: ["React", "Redux", "SCSS"],
    links: [],
    achievements: [
      { title: "결제 모듈 개편", desc: "결제 프로세스 이탈률 10% 감소" },
      { title: "백오피스 개발", desc: "어드민 대시보드 UI/UX 전면 리뉴얼" },
    ],
  },
  {
    id: "EDU-01",
    type: "journey",
    title: "Computer Science",
    category: "Education",
    date: "2017 - 2021",
    description: "OO대학교 컴퓨터공학 학사 졸업",
    details:
      "자료구조, 알고리즘, 운영체제 등 CS 기초 심화 과정 수료. 웹 프로그래밍 동아리 회장 역임.",
    tech: ["CS", "Algorithm", "Web"],
    links: [],
    achievements: [{ title: "교내 해커톤 대상", desc: "블록체인 기반 투표 시스템 개발" }],
  },
];
