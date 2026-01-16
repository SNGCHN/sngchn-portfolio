import type { ProjectData } from "@/shared/types/portfolio";

export const PROJECTS_MOCK: ProjectData[] = [
  {
    id: "PROJ-01",
    type: "project",
    title: "MINIMAL PORTFOLIO",
    category: "Personal Project",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1400",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    description: "본질에 집중한 미니멀리즘 아키텍처 포트폴리오 웹사이트입니다.",
    details:
      "이 프로젝트는 단순한 정보 전달을 넘어, 웹 환경에서의 최상의 사용자 경험과 시각적 몰입감을 제공하는 것을 목표로 했습니다. Motion v12의 고성능 애니메이션과 FSD 아키텍처를 도입하여 유지보수성을 극대화했습니다.",
    links: [
      { label: "Github Repo", href: "https://github.com/sngchn/portfolio", primary: true },
      { label: "Live Demo", href: "https://sngchn.vercel.app" },
    ],
  },
  {
    id: "PROJ-02",
    type: "project",
    title: "DESIGN SYSTEM X",
    category: "Open Source",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1400",
    tags: ["React", "Storybook", "Vanilla CSS", "Rollup"],
    description: "대규모 서비스를 위한 범용 디자인 시스템 및 컴포넌트 라이브러리입니다.",
    details:
      "복잡한 UI 환경에서도 일관된 디자인 언어를 유지할 수 있도록 설계된 시스템입니다. 접근성(A11y) 기준을 완벽하게 충족하며, 테마 커스터마이징이 용이한 구조를 가지고 있습니다.",
    links: [{ label: "Docs Page", href: "#", primary: true }],
  },
  {
    id: "PROJ-03",
    type: "project",
    title: "INTERACTIVE DASHBOARD",
    category: "Client Work",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1400",
    tags: ["Vue.js", "D3.js", "ECharts", "Express"],
    description: "데이터를 직관적으로 해석하고 시각화하는 실시간 분석 대시보드입니다.",
    details:
      "방대한 양의 실시간 데이터를 지연 없이 처리하고, 사용자에게 가장 중요한 인사이트를 우선적으로 보여주는 인터페이스를 설계했습니다. 커스텀 데이터 차트 라이브러리를 직접 개발하여 성능을 최적화했습니다.",
    links: [{ label: "Case Study", href: "#", primary: true }],
  },
];
