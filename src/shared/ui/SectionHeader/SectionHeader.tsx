"use client";

import { motion } from "motion/react";
import React from "react";

interface SectionHeaderProps {
  title: string; // 섹션의 메인 제목 (예: "PROJECTS")
  subtitle?: string; // 소제목 또는 카테고리 (예: "SELECTED WORKS")
}

/**
 * @description 모든 섹션 페이지에서 일관된 스타일과 위치를 유지하기 위한 공통 헤더 컴포넌트
 */
export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 md:mb-24 w-full"
    >
      {/* 서브타이틀: 작고 자간이 넓은 스타일로 세련되게 표현 */}
      {subtitle && (
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-foreground/30 uppercase block mb-4 md:mb-6">
          {subtitle}
        </span>
      )}

      {/* 메인 타이틀: 대담하고 거대한 타이포그래피 (MainSection과 일관성 유지) */}
      <h2 className="text-6xl md:text-[8vw] font-bold tracking-[-0.04em] leading-none uppercase">
        {title}
      </h2>

      {/* 구분선 애니메이션 */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-foreground/10 mt-8 md:mt-12"
      />
    </motion.div>
  );
};
