"use client";

import React from "react";
import { motion } from "motion/react";

const journey = [
  {
    id: "J01",
    period: "2024.08 — PRESENT",
    title: "Self-Directed Learning & Projects",
    organization: "Independent Study",
    description:
      "모던 프론트엔드 생태계(Next.js 14, App Router) 심화 학습 및 실무급 프로젝트 3종 개발. 성능 최적화와 클린 코드 작성을 목표로 학습 중.",
    details:
      "단순히 프레임워크를 사용하는 것을 넘어, 리액트의 렌더링 원리와 가상 DOM의 동작 방식을 깊이 있게 파고들었습니다. 특히 복잡한 상태 관리 상황에서 Zustand를 활용하여 렌더링 효율을 30% 이상 개선하는 아키텍처를 설계해 보았습니다.",
    keywords: ["Next.js 14", "Architecture", "State Management"],
  },
  {
    id: "J02",
    period: "2024.01 — 2024.07",
    title: "Frontend BootCamp",
    organization: "Code Academy",
    description:
      "자바스크립트 엔진의 동작 원리부터 리액트 상태 관리 패턴까지 압축적인 프론트엔드 교육 과정 이수. 팀 프로젝트를 통해 협업 및 코드 리뷰 문화 경험.",
    details:
      "7개월간의 집중 교육 과정 동안 팀 리더로서 대규모 웹 애플리케이션의 프론트엔드 파트를 총괄했습니다. 코드 리뷰의 중요성을 깨닫고 팀 내의 스타일 가이드를 정의하여 생산성을 높인 경험이 있습니다.",
    keywords: ["Javascript Core", "Collaboration", "Team Leading"],
  },
  {
    id: "J03",
    period: "2017.03 — 2024.02",
    title: "Computer Science & Engineering",
    organization: "University of Korea",
    description:
      "컴퓨터 공학 학사 학위 취득. 자료구조, 알고리즘, 네트워크 등 CS 기초 지식 함양. 학과 성적 상위 10% 이내 졸업.",
    details:
      "학술 정보화와 알고리즘의 효율성에 집중했습니다. 대규모 데이터 구조를 효율적으로 처리하는 알고리즘 최적화를 통해 복잡도 개선 경험을 쌓았으며, 이는 현재 프론트엔드 성능 최적화의 기반이 되었습니다.",
    keywords: ["Computer Science", "Data Structure", "Algorithms"],
  },
];

export const JourneySection = () => {
  return (
    <section
      id="journey"
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
            JOURNEY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:gap-10">
          {journey.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-4 md:gap-32 items-start md:items-baseline cursor-pointer"
              onClick={() => {
                const event = new CustomEvent("openDetail", {
                  detail: { ...item, type: "journey" },
                });
                window.dispatchEvent(event);
              }}
            >
              <div className="w-full md:w-40 shrink-0">
                <span className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] text-foreground/30 uppercase">
                  {item.period}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3 group-hover:text-foreground/70 transition-colors uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/20 mb-3 md:mb-4 font-bold">
                  {item.organization}
                </p>
                <p className="max-w-2xl text-[13px] md:text-[15px] leading-relaxed text-muted-foreground font-medium break-keep">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
