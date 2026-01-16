"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * @description 최적화된 커스텀 커서 컴포넌트
 * - useMotionValue & useSpring을 사용하여 React 렌더 사이클 외부에서 고빈도 업데이트를 처리하여 성능을 최적화합니다.
 * - mix-blend-difference 효과를 부여하여 배경색(밝음/어두움)에 따라 커서 색상이 자동으로 반전되어 항상 가독성을 유지합니다.
 */
export const CustomCursor = () => {
  // 상호작용 상태 관리
  const [isHovering, setIsHovering] = useState(false); // 링크, 버튼 등 클릭 요소 위에 있는지 여부
  const [isSloganArea, setIsSloganArea] = useState(false); // 특정 영역(커서를 숨겨야 하는 곳 등) 진입 여부

  // 마우스의 절대 좌표를 추적하는 MotionValue (리렌더링 없이 값만 갱신)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 부드러운 따라오기 효과를 위한 스프링 설정
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // 1. 단순 마우스 이동에 따른 좌표 업데이트
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // 특정 클래스(.cursor-none)를 가진 부모 요소 내부에서는 커서를 숨기도록 설정
      const target = e.target as HTMLElement;
      setIsSloganArea(!!target.closest(".group.cursor-none"));
    };

    // 2. 상호작용 요소(버튼, 링크 등) 호버 감지 로직
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 시맨틱 태그, ARIA 롤, 또는 특정 클래스를 기준으로 상호작용 요소 판단
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
      // 상호작용 상태에 따른 크기 및 투명도 전환 애니메이션
      animate={{
        width: isSloganArea ? 0 : isHovering ? 60 : 30, // 호버 시 크게 확대
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
