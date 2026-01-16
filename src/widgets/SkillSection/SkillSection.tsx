"use client";

import { SKILLS_DATA } from "@/shared/constants/skills";
import { motion } from "motion/react";
import React from "react";

/**
 * @description Figma 기반의 새로운 SkillSection 구현체
 * - 4열 그리드 레이아웃(lg 기준)을 적용하여 정보를 한눈에 볼 수 있게 구성했습니다.
 * - 각 스킬 항목에 호버 인터랙션을 추가하여 생동감을 더했습니다.
 */
export const SkillSection = () => {
  return (
    // min-h-screen 및 snap-start 적용으로 풀스크린 스크롤 경험을 제공합니다.
    <section
      id="skills"
      className="min-h-screen w-full flex flex-col snap-start px-6 md:px-24 bg-background pt-32 pb-32"
    >
      <div className="max-w-[1400px] w-full mx-auto flex flex-col h-full">
        {/* 섹션 제목 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-[-0.05em] leading-[0.85] uppercase">
            SKILLS
          </h2>
        </motion.div>

        {/* 스킬 그룹 그리드: 반응형에 따라 1열 -> 2열 -> 4열로 확장됩니다. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {SKILLS_DATA.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }} // 순차 등장 애니메이션
              className="flex flex-col gap-4 md:gap-6"
            >
              {/* 카테고리 헤더: 번호와 카테고리명을 나란히 배치 */}
              <div className="flex items-center gap-4">
                <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground/40">
                  0{groupIndex + 1}
                </span>
                <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-foreground">
                  {group.category}
                </h3>
              </div>

              {/* 구분선 */}
              <div className="h-px w-full bg-foreground/10" />

              {/* 스킬 항목 리스트 */}
              <div className="flex flex-wrap md:flex-col gap-y-2 gap-x-3 md:gap-y-3">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    // 호버 시 X축 이동 및 색상 변경 인터랙션
                    whileHover={{ x: 5, color: "var(--foreground)" }}
                    className="text-[13px] md:text-[16px] font-medium text-muted-foreground transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
