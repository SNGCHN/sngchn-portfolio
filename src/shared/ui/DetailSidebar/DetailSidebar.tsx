"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Download, ArrowRight, Calendar, Users, Award } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";

interface DetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

export const DetailSidebar = ({ isOpen, onClose, content }: DetailSidebarProps) => {
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[200] cursor-none"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[700px] lg:w-[800px] bg-background border-l border-foreground/5 z-[250] shadow-2xl overflow-y-auto"
          >
            <div className="p-8 md:p-16 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-start mb-16">
                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-foreground/30 uppercase block mb-4">
                    {content.category || "Information"}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">
                    {content.title}
                  </h2>

                  {/* Project Meta Info */}
                  {content.timeline && (
                    <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-foreground/5">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {content.timeline}
                        </span>
                      </div>
                      {content.team && (
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-primary" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {content.team}
                          </span>
                        </div>
                      )}
                      {content.role && (
                        <div className="flex items-center gap-2">
                          <Award size={14} className="text-primary" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {content.role}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-4 hover:bg-foreground/5 rounded-full transition-colors group cursor-pointer shrink-0 ml-4"
                  aria-label="Close detail view"
                >
                  <X
                    size={24}
                    className="group-hover:rotate-90 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 space-y-16">
                {/* Contribution Bar */}
                {typeof content.contribution === "number" && (
                  <section>
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase">
                        Contribution
                      </h3>
                      <span className="text-3xl font-bold tracking-tighter">
                        {content.contribution}%
                      </span>
                    </div>
                    <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${content.contribution}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        className="h-full bg-linear-to-r from-primary to-foreground rounded-full"
                      />
                    </div>
                  </section>
                )}

                {/* Image Gallery */}
                {content.images && content.images.length > 0 && (
                  <section className="space-y-6">
                    <h3 className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase">
                      Visual Overview
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {content.images.map((img: string, idx: number) => (
                        <motion.div
                          key={img || idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="aspect-video bg-foreground/5 rounded-sm overflow-hidden group/img cursor-pointer border border-foreground/5 hover:border-foreground/20 transition-colors"
                        >
                          <ImageWithFallback
                            src={img}
                            alt={`${content.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Primary Description */}
                <section>
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase mb-6">
                    Overview
                  </h3>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight break-keep text-foreground/80">
                    {content.description}
                  </p>
                </section>

                {/* Technical Accordion Section */}
                <section className="space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase mb-8">
                    Technical Expertise
                  </h3>
                  <div className="border-t border-foreground/10">
                    {/* Category 01: Development */}
                    <details className="group border-b border-foreground/5 outline-none" open>
                      <summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
                        <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
                          <span className="text-[9px] font-mono text-foreground/20">01</span>
                          Development
                        </span>
                        <div className="relative w-4 h-4">
                          <div className="absolute top-1/2 left-0 w-4 h-px bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                          <div className="absolute top-0 left-1/2 w-px h-4 bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                        </div>
                      </summary>
                      <div className="pb-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
                        {content.tech?.length > 0 ? (
                          content.tech.map((t: string) => (
                            <span
                              key={t}
                              className="px-4 py-2 bg-foreground/5 text-[10px] font-bold uppercase tracking-widest border border-transparent hover:border-foreground/10 transition-colors"
                            >
                              {t}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-foreground/30 uppercase tracking-widest">
                            No tech data provided
                          </span>
                        )}
                      </div>
                    </details>

                    {/* Category 02: Expertise & Focus */}
                    <details className="group border-b border-foreground/5 outline-none">
                      <summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
                        <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
                          <span className="text-[9px] font-mono text-foreground/20">02</span>
                          Focus & Stack
                        </span>
                        <div className="relative w-4 h-4">
                          <div className="absolute top-1/2 left-0 w-4 h-px bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                          <div className="absolute top-0 left-1/2 w-px h-4 bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                        </div>
                      </summary>
                      <div className="pb-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
                        {content.keywords?.length > 0 ? (
                          content.keywords.map((k: string) => (
                            <span
                              key={k}
                              className="px-4 py-2 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-colors"
                            >
                              {k}
                            </span>
                          ))
                        ) : (
                          <>
                            <span className="px-4 py-2 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                              Interaction Design
                            </span>
                            <span className="px-4 py-2 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                              User Experience
                            </span>
                            <span className="px-4 py-2 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                              Motion Graphics
                            </span>
                          </>
                        )}
                      </div>
                    </details>

                    {/* Category 03: Achievements & Challenges */}
                    <details className="group border-b border-foreground/5 outline-none">
                      <summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
                        <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
                          <span className="text-[9px] font-mono text-foreground/20">03</span>
                          Achievements & Challenges
                        </span>
                        <div className="relative w-4 h-4">
                          <div className="absolute top-1/2 left-0 w-4 h-px bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                          <div className="absolute top-0 left-1/2 w-px h-4 bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                        </div>
                      </summary>
                      <div className="pb-8 space-y-10 animate-in fade-in slide-in-from-top-2 duration-500 pt-4">
                        {/* Achievements Example/Data */}
                        <div className="space-y-6">
                          <h4 className="text-[9px] font-bold tracking-[0.2em] text-foreground/30 uppercase">
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 gap-4">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {(
                              content.achievements || [
                                {
                                  title: "Performance Optimization",
                                  desc: "Lighthouse 성능 점수를 70점에서 98점으로 개선",
                                },
                                {
                                  title: "Design System",
                                  desc: "재사용 가능한 40개 이상의 컴포넌트 라이브러리 구축",
                                },
                              ]
                            ).map((item: any, idx: number) => (
                              <div
                                key={item.title || idx}
                                className="flex gap-4 items-start group/item"
                              >
                                <div className="text-[9px] font-mono text-primary mt-1">✓</div>
                                <div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider mb-1">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Challenges Example/Data */}
                        <div className="space-y-6">
                          <h4 className="text-[9px] font-bold tracking-[0.2em] text-foreground/30 uppercase">
                            Troubleshooting
                          </h4>
                          <div className="space-y-6">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {(
                              content.challenges || [
                                {
                                  problem: "대규모 데이터 렌더링 시 발생하는 병목 현상",
                                  solution:
                                    "React Window를 도입하여 가상 리스트 구현 및 메모이제이션 전략 수립",
                                },
                              ]
                            ).map((item: any, idx: number) => (
                              <div
                                key={item.problem || idx}
                                className="border-l-2 border-foreground/5 pl-6 py-1 relative"
                              >
                                <div className="absolute -left-[2px] top-0 h-4 w-[2px] bg-primary" />
                                <div className="space-y-3">
                                  <div className="flex gap-2 items-baseline">
                                    <span className="text-[8px] font-bold uppercase text-primary/60 px-1.5 py-0.5 border border-primary/20">
                                      Problem
                                    </span>
                                    <p className="text-[12px] font-medium text-foreground/80">
                                      {item.problem}
                                    </p>
                                  </div>
                                  <div className="flex gap-2 items-baseline">
                                    <span className="text-[8px] font-bold uppercase text-foreground/40 px-1.5 py-0.5 border border-foreground/10">
                                      Solution
                                    </span>
                                    <p className="text-[12px] text-muted-foreground">
                                      {item.solution}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>

                    {/* Category 04: In Depth */}
                    <details className="group border-b border-foreground/5 outline-none">
                      <summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
                        <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
                          <span className="text-[9px] font-mono text-foreground/20">04</span>
                          In Depth
                        </span>
                        <div className="relative w-4 h-4">
                          <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                          <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
                        </div>
                      </summary>
                      <div className="pb-8 animate-in fade-in slide-in-from-top-2 duration-500">
                        <p className="text-sm md:text-base leading-loose text-muted-foreground break-keep font-medium">
                          {content.details ||
                            "기술은 수단일 뿐, 그 이상의 가치를 전달하는 것이 저의 목표입니다. 본질에 집중하는 개발을 추구하며, 사용자에게 잊지 못할 디지털 경험을 제공하는 것을 목표로 합니다."}
                        </p>
                      </div>
                    </details>
                  </div>
                </section>

                {/* Actions / Links */}
                {(content.links || content.github || content.link) && (
                  <section className="pt-8 space-y-4">
                    <h3 className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase mb-8">
                      Resources
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {content.links?.map((link: any) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex justify-between items-center px-8 py-6 transition-all group ${
                            link.primary
                              ? "bg-foreground text-background hover:bg-foreground/90"
                              : "border border-foreground/10 hover:border-foreground"
                          }`}
                        >
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">
                            {link.label}
                          </span>
                          {link.label.includes("Download") ? (
                            <Download size={16} />
                          ) : (
                            <ExternalLink size={16} />
                          )}
                        </a>
                      ))}
                      {content.github && (
                        <a
                          href={content.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-between items-center px-8 py-6 border border-foreground/10 hover:border-foreground transition-all group"
                        >
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">
                            View Repository
                          </span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                      )}
                      {content.link && (
                        <a
                          href={content.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-between items-center px-8 py-6 bg-foreground text-background hover:bg-foreground/90 transition-all group"
                        >
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">
                            Visit Live Page
                          </span>
                          <ExternalLink
                            size={16}
                            className="group-hover:scale-110 transition-transform"
                          />
                        </a>
                      )}
                    </div>
                  </section>
                )}
              </div>

              {/* Footer Info */}
              <div className="mt-24 pt-8 border-t border-foreground/5 flex justify-between items-center">
                <span className="text-[9px] font-mono text-foreground/20 uppercase tracking-[0.3em]">
                  Index REF: {content.id}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
