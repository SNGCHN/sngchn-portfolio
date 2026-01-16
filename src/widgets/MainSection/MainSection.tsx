"use client";

import { Plus } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

/**
 * @description 홈 화면의 첫 인상을 담당하는 메인 히어로 섹션
 * FSD 아키텍처의 Widgets 레이어에 해당하여 독립적인 비즈니스 로직(About 상세 보기)을 포함합니다.
 */
export const MainSection = () => {
  /**
   * @description 'About' 상세 정보를 사이드바에 표시하기 위한 전역 이벤트 발생 로직
   * 공유 레이어(Shared)의 DetailSidebar가 이 이벤트를 감지하여 활성화됩니다.
   */
  const openAboutDetail = () => {
    // 임시 인메모리 데이터 (향후 shared/constants 또는 CMS 연동 가능)
    const aboutData = {
      type: "about",
      data: {
        id: "ABOUT",
        title: "SEONGCHAN LEE",
        category: "Frontend Developer",
        tech: ["React", "Next.js", "TypeScript", "Motion", "Tailwind CSS"],
        keywords: [
          "Interaction Design",
          "Performance Optimization",
          "Design Systems",
          "User Experience",
          "Minimalist Architecture",
        ],
        description:
          "복잡함을 단순함으로 정제하고, 기술적 정교함을 통해 시각적 즐거움을 전달하는 프론트엔드 개발자 이성찬입니다.",
        details:
          "기술은 수단일 뿐, 그 이상의 가치를 전달하는 것이 저의 목표입니다. 픽셀 하나하나의 디테일부터 대규모 서비스의 퍼포먼스까지, 본질에 집중하는 개발을 추구합니다.",
        links: [
          {
            label: "Notion Resume",
            href: "https://notion.so/sngchn",
            primary: true,
          },
          { label: "LinkedIn Profile", href: "https://linkedin.com/in/sngchn", secondary: true },
        ],
      },
    };

    const event = new CustomEvent("openDetail", {
      detail: aboutData,
    });
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col px-6 md:px-24 bg-background pt-32 pb-24 relative overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto flex flex-col h-full justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            {/* 거대하고 대담한 타이포그래피 스타일링: 사용자 경험의 첫인상을 결정 */}
            <h1 className="text-[10vw] md:text-[7.5vw] font-bold tracking-[-0.04em] leading-[1.1] uppercase flex flex-col">
              <span className="text-foreground/20">복잡함을 덜어내고,</span>
              <span className="text-foreground/20">본질을 조명하는</span>

              {/* 자기소개 상세 보기 트리거: 호버 시 자식 요소와 언더라인 애니메이션 연동 */}
              <div className="relative group mt-6 md:mt-8 w-fit mx-auto md:mx-0">
                <button
                  type="button"
                  onClick={openAboutDetail}
                  onKeyDown={(e) => e.key === "Enter" && openAboutDetail()}
                  className="relative z-10 cursor-pointer flex items-center md:items-baseline gap-3 md:gap-8 group outline-none bg-transparent border-none p-0 text-left"
                >
                  <span className="text-foreground transition-all duration-700 group-hover:tracking-wider whitespace-nowrap text-[10vw] md:text-[7.5vw] font-bold tracking-[-0.04em] leading-[1.1] uppercase">
                    개발자 <span className="font-bold">이성찬</span>
                  </span>

                  {/* 플러스 아이콘: 호버 시 배경색 반전 및 회전 마이크로 인터랙션 */}
                  <motion.div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-foreground/10 group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                    <Plus
                      className="text-foreground/40 group-hover:text-background group-hover:rotate-90 transition-all duration-500"
                      size={16}
                    />
                  </motion.div>
                </button>

                {/* 언더라인 애니메이션: group-hover 상태 시 왼쪽에서 오른쪽으로 채워짐 */}
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-700 ease-[0.16, 1, 0.3, 1]" />
              </div>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* 배경 디자인 요소: Figma의 메쉬 그라데이션 느낌을 CSS radial-gradient로 재현 */}
      <div className="absolute top-[40%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,var(--muted)_0%,transparent_70%)] opacity-40 z-0 pointer-events-none" />
    </section>
  );
};
