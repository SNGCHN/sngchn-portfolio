"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * @description 최적화된 커스텀 커서 컴포넌트
 * - useMotionValue & useSpring을 사용하여 React 렌더 사이클 외부에서 고빈도 업데이트 처리
 * - mix-blend-difference를 통한 배경색 자동 반전
 */
export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isSloganArea, setIsSloganArea] = useState(false);

  // 고빈도 업데이트를 위해 MotionValue 사용 (성능 최적화)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 부드러운 스프링 효과 적용
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsSloganArea(!!target.closest(".group.cursor-none"));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      setIsHovering(Boolean(isClickable));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference bg-white rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isSloganArea ? 0 : isHovering ? 60 : 30,
        height: isSloganArea ? 0 : isHovering ? 60 : 30,
        opacity: isSloganArea ? 0 : 1,
      }}
      transition={{
        width: { type: "spring", ...springConfig },
        height: { type: "spring", ...springConfig },
        opacity: { duration: 0.2 },
      }}
    />
  );
};
