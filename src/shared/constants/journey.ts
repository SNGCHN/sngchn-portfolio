import type { JourneyData } from "@/shared/types/portfolio";

export const JOURNEY_DATA: JourneyData[] = [
  {
    id: "J01",
    type: "journey",
    date: "2024.08 — PRESENT",
    title: "Self-Directed Learning & Projects",
    category: "Independent Study",
    description:
      "모던 프론트엔드 생태계(Next.js 14, App Router) 심화 학습 및 실무급 프로젝트 3종 개발. 성능 최적화와 클린 코드 작성을 목표로 학습 중.",
    details:
      "단순히 프레임워크를 사용하는 것을 넘어, 리액트의 렌더링 원리와 가상 DOM의 동작 방식을 깊이 있게 파고들었습니다. 특히 복잡한 상태 관리 상황에서 Zustand를 활용하여 렌더링 효율을 30% 이상 개선하는 아키텍처를 설계해 보았습니다.",
    keywords: ["Next.js 14", "Architecture", "State Management"],
    links: [],
  },
  {
    id: "J02",
    type: "journey",
    date: "2024.01 — 2024.07",
    title: "Frontend BootCamp",
    category: "Code Academy",
    description:
      "자바스크립트 엔진의 동작 원리부터 리액트 상태 관리 패턴까지 압축적인 프론트엔드 교육 과정 이수. 팀 프로젝트를 통해 협업 및 코드 리뷰 문화 경험.",
    details:
      "7개월간의 집중 교육 과정 동안 팀 리더로서 대규모 웹 애플리케이션의 프론트엔드 파트를 총괄했습니다. 코드 리뷰의 중요성을 깨닫고 팀 내의 스타일 가이드를 정의하여 생산성을 높인 경험이 있습니다.",
    keywords: ["Javascript Core", "Collaboration", "Team Leading"],
    links: [],
  },
  {
    id: "J03",
    type: "journey",
    date: "2017.03 — 2024.02",
    title: "Computer Science & Engineering",
    category: "University of Korea",
    description:
      "컴퓨터 공학 학사 학위 취득. 자료구조, 알고리즘, 네트워크 등 CS 기초 지식 함양. 학과 성적 상위 10% 이내 졸업.",
    details:
      "학술 정보화와 알고리즘의 효율성에 집중했습니다. 대규모 데이터 구조를 효율적으로 처리하는 알고리즘 최적화를 통해 복잡도 개선 경험을 쌓았으며, 이는 현재 프론트엔드 성능 최적화의 기반이 되었습니다.",
    keywords: ["Computer Science", "Data Structure", "Algorithms"],
    links: [],
  },
];
