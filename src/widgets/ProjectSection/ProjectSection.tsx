"use client";

import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "NEXUS SYSTEM",
    category: "Architecture / Performance",
    tech: ["Next.js", "TypeScript", "Zustand", "Motion"],
    github: "https://github.com/sngchn/nexus-system",
    link: "https://nexus.sngchn.dev",
    description:
      "초고속 데이터 스트리밍을 위한 프론트엔드 아키텍처입니다. 대규모 데이터 처리 시의 렌더링 성능을 최적화하는 데 중점을 두었습니다.",
    contribution: 85,
    timeline: "2024.06 ~ 2024.12",
    team: "Solo Project",
    role: "Frontend Lead",
    keywords: ["Real-time Processing", "Performance Optimization", "Data Visualization"],
    achievements: [
      { title: "Performance Boost", desc: "초기 렌더링 속도 400% 향상 (Lighthouse 98점 달성)" },
      {
        title: "Bundle Optimization",
        desc: "코드 스플리팅 및 Tree Shaking으로 번들 사이즈 65% 감소",
      },
      {
        title: "Memory Management",
        desc: "메모리 누수 방지 패턴 도입으로 장시간 사용 안정성 확보",
      },
    ],
    challenges: [
      {
        problem: "실시간 데이터 스트림 처리 시 렌더링 병목 발생 (10,000+ items)",
        solution: "React Window + useTransition을 활용한 가상화 및 우선순위 기반 렌더링 구현",
      },
      {
        problem: "복잡한 상태 관리로 인한 예측 불가능한 리렌더링",
        solution: "Zustand의 shallow 비교와 선택적 구독 패턴으로 불필요한 렌더링 70% 감소",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    details:
      "대규모 데이터를 다루는 엔터프라이즈 애플리케이션의 성능 문제를 해결하기 위해 시작한 프로젝트입니다. 사용자 경험을 해치지 않으면서도 수만 개의 데이터를 부드럽게 처리할 수 있는 아키텍처를 설계했습니다. 특히 렌더링 최적화, 메모리 관리, 그리고 점진적 향상 전략에 집중했습니다.",
  },
  {
    id: "02",
    title: "VOID INTERFACE",
    category: "Interaction / Design",
    tech: ["React", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/sngchn/void-interface",
    link: "https://void.sngchn.dev",
    description:
      "미니멀리즘을 극한으로 끌어올린 UI 실험 프레임워크입니다. 불필요한 요소를 배제하고 본질적인 인터랙션에 집중했습니다.",
    contribution: 100,
    timeline: "2024.03 ~ 2024.05",
    team: "Solo Project",
    role: "Designer & Developer",
    keywords: ["Minimalism", "Accessibility", "Component Library"],
    achievements: [
      { title: "Design System", desc: "50+ 재사용 가능한 컴포넌트 라이브러리 구축" },
      { title: "Accessibility", desc: "WCAG 2.1 AA 기준 100% 준수 (키보드 네비게이션 완벽 지원)" },
      { title: "Developer Experience", desc: "TypeScript 타입 안전성 및 자동완성 100% 지원" },
    ],
    challenges: [
      {
        problem: "접근성을 유지하면서도 시각적으로 미니멀한 디자인 구현의 어려움",
        solution: "Radix UI의 headless 컴포넌트를 활용하여 기능과 스타일을 완전히 분리",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    details:
      '디자인과 기능성 사이의 균형을 탐구하는 실험적 프로젝트입니다. "덜어내는 것이 곧 디자인이다"라는 철학 아래, 사용자에게 진정으로 필요한 요소만 남기는 데 집중했습니다.',
  },
  {
    id: "03",
    title: "KINETIC MOTION",
    category: "Interaction / Motion",
    tech: ["Motion", "Canvas API", "Mathematics"],
    github: "https://github.com/sngchn/kinetic-motion",
    link: "https://kinetic.sngchn.dev",
    description:
      "물리 기반의 인터랙티브 애니메이션 라이브러리입니다. 복잡한 수식을 활용하여 자연스럽고 생동감 있는 모션을 구현했습니다.",
    contribution: 100,
    timeline: "2024.01 ~ 2024.02",
    team: "Solo Project",
    role: "Creative Developer",
    keywords: ["Physics-based Animation", "Interactive Design", "Creative Coding"],
    achievements: [
      { title: "Performance", desc: "60fps 유지하며 1000개 이상의 파티클 동시 렌더링" },
      { title: "Math Implementation", desc: "스프링, 감쇠, 중력 등 물리 시뮬레이션 구현" },
    ],
    challenges: [
      {
        problem: "Canvas 렌더링 최적화 및 requestAnimationFrame 관리",
        solution: "Offscreen Canvas와 Worker를 활용한 멀티스레드 렌더링 파이프라인 구축",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    details:
      "코드로 아름다움을 창조할 수 있다는 믿음에서 시작한 프로젝트입니다. 수학과 예술의 교차점에서 사용자에게 감동을 주는 인터랙션을 만드는 것이 목표입니다.",
  },
];

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col snap-start px-6 md:px-24 bg-background pt-32 pb-32"
    >
      <div className="max-w-[1400px] w-full mx-auto flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-[-0.05em] leading-[0.85] uppercase">
            PROJECTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-0 border-t border-foreground/10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group py-8 md:py-12 border-b border-foreground/10 flex flex-col md:flex-row items-start md:items-baseline justify-between cursor-pointer hover:bg-foreground/[0.02] transition-colors md:px-4"
              onClick={() => {
                const event = new CustomEvent("openDetail", { detail: project });
                window.dispatchEvent(event);
              }}
            >
              <div className="flex items-start md:items-baseline gap-4 md:gap-24 w-full md:w-auto">
                <span className="text-[10px] md:text-[12px] font-bold text-muted-foreground/40 font-mono group-hover:text-primary transition-colors mt-1 md:mt-0">
                  {project.id}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-3xl md:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500 group-hover:text-primary leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-muted-foreground/50 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex flex-row md:flex-row items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-8">
                <div className="text-left md:text-right">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground font-bold group-hover:text-foreground transition-colors">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 md:p-3 border border-foreground/10 hover:border-primary rounded-full transition-all hover:bg-primary hover:text-white"
                    title="Source Code"
                  >
                    <Github size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 md:p-3 border border-foreground/10 hover:border-primary rounded-full transition-all hover:bg-primary hover:text-white"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
