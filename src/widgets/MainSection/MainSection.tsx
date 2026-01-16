"use client";

import { ABOUT_DATA } from "@/shared/constants/about";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export const MainSection = () => {
  const openAboutDetail = () => {
    const event = new CustomEvent("openDetail", {
      detail: ABOUT_DATA,
    });
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col snap-start px-6 md:px-24 bg-background pt-32 pb-24 relative overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto flex flex-col h-full justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-[10vw] md:text-[7.5vw] font-bold tracking-[-0.04em] leading-[1.1] uppercase flex flex-col">
                <span className="text-foreground/20">복잡함을 덜어내고,</span>
                <span className="text-foreground/20">본질을 조명하는</span>

                <div className="relative group mt-6 md:mt-8 w-fit mx-auto md:mx-0">
                  {/* Clickable Area */}
                  <button
                    type="button"
                    onClick={openAboutDetail}
                    className="relative z-10 cursor-pointer flex items-center md:items-baseline gap-3 md:gap-8 group"
                  >
                    <span className="text-foreground transition-all duration-700 group-hover:tracking-wider whitespace-nowrap">
                      개발자 <span>이성찬</span>
                    </span>

                    {/* UX Visual Cue: Animated Plus Icon - Visible on all screens */}
                    <motion.div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-foreground/10 group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                      <Plus
                        className="text-foreground/40 group-hover:text-background group-hover:rotate-90 transition-all duration-500"
                        size={16}
                      />
                    </motion.div>
                  </button>

                  {/* Underline Reveal Effect */}
                  <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-700 ease-[0.16, 1, 0.3, 1]" />
                </div>
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Background Mesh */}
      <div className="absolute top-[40%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,var(--muted)_0%,transparent_70%)] opacity-40 -z-0 pointer-events-none" />
    </section>
  );
};
