import type { AboutData } from "@/shared/types/portfolio";

export const ABOUT_DATA: AboutData = {
  id: "ABOUT",
  type: "about",
  title: "이성찬",
  category: "Frontend Developer",
  description:
    "좋아요 버튼을 누르고 서버 응답을 기다리는 0.3초가 불편해서 낙관적 업데이트를 공부했습니다. 기능이 동작하는 것과 좋은 경험을 주는 것은 다르다는 걸 그때 처음 느꼈습니다.",
  details:
    "저는 단순히 기능을 구현하는 데서 멈추지 않고, MVP 완성 이후에도 더 재사용 가능하게, 유저 친화적으로 바꾸는 과정에서 가장 큰 동기를 얻어 왔습니다. 코드가 동작하면 끝이라고 생각하지 않고 오히려 그 이후의 작업들이 더 중요하고 흥미롭게 느낍니다. 공식 문서와 근거를 먼저 확인한 뒤 적용하는 습관을 가지려 합니다. 새로운 기술을 배울 때 공식 문서를 먼저 보려고 하고, AI를 활용할 때도 답변을 그대로 수용하기보다 문서와 실제 동작으로 검증을 거쳐 신중하게 선택합니다.",
  tech: [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "Redux",
    "Next.js",
    "Zustand",
    "Git",
    "GitHub",
    "Figma",
    "LangChain",
    "Vercel",
    "JIRA",
  ],
  keywords: ["낙관적 업데이트", "사용자 경험", "코드 품질", "공식 문서 기반 학습", "문제 해결"],
  achievements: [
    {
      title: "모달 통합 시스템 구축",
      desc: "컴포넌트당 15~20줄의 코드를 1줄로 단순화",
    },
    {
      title: "이미지 최적화",
      desc: "base64 → Storage URL 전환으로 데이터 크기 90% 이상 감소",
    },
    {
      title: "보안 강화",
      desc: "DOMPurify를 활용한 XSS 공격 이중 방어 구현",
    },
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/SNGCHN/",
      primary: true,
    },
    {
      label: "Email",
      href: "mailto:sngchn0312@naver.com",
    },
  ],
};
