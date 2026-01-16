"use client";

import { motion } from "motion/react";
import React from "react";

// 스크롤 인디케이터에 표시될 섹션 목록
const sections = [
  { id: "home", label: "01" },
  { id: "projects", label: "02" },
  { id: "skills", label: "03" },
  { id: "journey", label: "04" },
  { id: "contact", label: "05" },
];

/**
 * @description 스크롤 위치에 따라 반응하는 플로팅 인디케이터
 * - 하단 중앙에 고정되어 현재 사용자의 위치를 직관적으로 알려줍니다.
 * - 클릭 시 해당 섹션으로 부드럽게 스크롤됩니다.
 * - Sidebar가 열리면 아래로 슬라이드되어 숨겨집니다.
 */
export const ScrollIndicator = ({
  activeSection,
  isHidden,
  sidebarOpen = false,
}: {
  activeSection: string;
  isHidden: boolean;
  sidebarOpen?: boolean;
}) => {
  // 특정 ID를 가진 섹션으로 스크롤 이동 함수
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 특정 조건(예: 맨 위)에서 숨김 처리
  if (isHidden) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100 flex items-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: sidebarOpen ? 100 : 0,
          opacity: sidebarOpen ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        // Glassmorphism 효과가 가미된 배경 스타일
        className="flex items-center gap-1 p-1.5 rounded-full bg-foreground/5 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-foreground/10"
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className="relative flex items-center justify-center cursor-pointer group outline-none"
            >
              {/* 숫자 라벨: 활성화 시 배경색(inverted) 적용 */}
              <div
                className={`
                  relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-500
                  ${
                    isActive
                      ? "bg-transparent text-background" // 배경은 motion.div(layoutId)가 담당하므로 투명 처리
                      : "text-foreground/40 hover:text-foreground"
                  }
                `}
              >
                <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-tighter mix-blend-difference">
                  {section.label}
                </span>
              </div>

              {/* 툴팁: 마우스 호버 시 섹션 이름 표시 */}
              <div className="absolute bottom-full mb-4 px-3 py-1 bg-foreground text-background text-[9px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded whitespace-nowrap">
                {section.id}
              </div>

              {/* 활성 상태 표시기: layoutId를 사용하여 위치 변경 시 부드럽게 형태가 변형되며 이동(Morphing) */}
              {isActive && (
                <motion.div
                  layoutId="indicator-bg"
                  className="absolute inset-0 bg-foreground rounded-full z-0 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};
