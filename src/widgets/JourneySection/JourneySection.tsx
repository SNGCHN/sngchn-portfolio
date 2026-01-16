"use client";

import { JOURNEY_DATA } from "@/shared/constants/journey";
import { motion } from "motion/react";
import React from "react";

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
          {JOURNEY_DATA.map((item, i) => (
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
                  {item.date}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3 group-hover:text-foreground/70 transition-colors uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/20 mb-3 md:mb-4 font-bold">
                  {item.category}
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
