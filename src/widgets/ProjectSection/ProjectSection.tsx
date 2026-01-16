"use client";

import { PROJECTS_DATA } from "@/shared/constants/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export const ProjectSection = () => {
  return (
    <section
      id="projects"
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
            PROJECTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-0 border-t border-foreground/10">
          {PROJECTS_DATA.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group py-8 md:py-12 border-b border-foreground/10 flex flex-col md:flex-row items-start md:items-baseline justify-between cursor-pointer hover:bg-foreground/[0.02] transition-colors md:px-4"
              onClick={() => {
                const event = new CustomEvent("openDetail", { detail: project });
                window.dispatchEvent(event);
              }}
            >
              <div className="flex items-start md:items-baseline gap-4 md:gap-24 w-full md:w-auto">
                <span className="text-[10px] md:text-[12px] font-bold text-muted-foreground/40 font-mono group-hover:text-primary transition-colors mt-1 md:mt-0">
                  {project.id}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-3xl md:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500 group-hover:text-primary leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-muted-foreground/50 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex flex-row md:flex-row items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-8">
                <div className="text-left md:text-right">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground font-bold group-hover:text-foreground transition-colors">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 md:p-3 border border-foreground/10 hover:border-primary rounded-full transition-all hover:bg-primary hover:text-white"
                    title="Source Code"
                  >
                    <Github size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 md:p-3 border border-foreground/10 hover:border-primary rounded-full transition-all hover:bg-primary hover:text-white"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
