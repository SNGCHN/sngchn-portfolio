"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isSloganArea, setIsSloganArea] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      // Check if target or ancestor is the slogan area
      if (target.closest(".group.cursor-none")) {
        setIsSloganArea(true);
      } else {
        setIsSloganArea(false);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference bg-white rounded-full"
      animate={{
        x: position.x - (isHovering ? 30 : isSloganArea ? 0 : 15),
        y: position.y - (isHovering ? 30 : isSloganArea ? 0 : 15),
        width: isSloganArea ? 0 : isHovering ? 60 : 30,
        height: isSloganArea ? 0 : isHovering ? 60 : 30,
        opacity: isSloganArea ? 0 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
      }}
    />
  );
};
