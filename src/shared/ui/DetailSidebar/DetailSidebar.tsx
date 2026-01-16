"use client";

import type { SidebarContent } from "@/shared/types/portfolio";
import { ArrowRight, Download, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";

interface DetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  content: SidebarContent | null;
}

/**
 * @description 아코디언 섹션 컴포넌트
 * UI의 가독성을 높이기 위해 공통 아코디언 스타일을 별도 컴포넌트로 분리하여 정의했습니다.
 */
const AccordionSection = ({
  index,
  title,
  children,
  defaultOpen = false,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => (
  // <details> 태그를 사용하여 시맨틱한 아코디언 구현
  <details className="group border-b border-foreground/5 outline-none" open={defaultOpen}>
    <summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none focus:text-accent transition-colors">
      <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
        {/* 인덱스 표시 (01, 02...) */}
        <span className="text-[9px] font-mono text-foreground/20">{index}</span>
        {title}
      </span>
      {/* 아코디언 화살표(플러스 자국) 애니메이션 */}
      <div className="relative w-4 h-4">
        <div className="absolute top-1/2 left-0 w-4 h-px bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
        <div className="absolute top-0 left-1/2 w-px h-4 bg-foreground/30 transition-transform duration-500 group-open:rotate-45" />
      </div>
    </summary>
    {/* 아코디언 내용 영역: 오픈 시 페이드 인 및 슬라이드 애니메이션 적용 */}
    <div className="pb-8 animate-in fade-in slide-in-from-top-2 duration-500">{children}</div>
  </details>
);

/**
 * @description 상세 정보를 보여주는 슬라이드 사이드바
 * FSD 아키텍처의 Shared UI 레이어에 해당하여 모든 위젯에서 공통으로 호출 가능합니다.
 */
export const DetailSidebar = ({ isOpen, onClose, content }: DetailSidebarProps) => {
  // 표시할 콘텐츠 데이터가 없는 경우 렌더링하지 않음
  if (!content) return null;

  const { data, type } = content;
  const isAbout = type === "about";

  return (
    // AnimatePresence: 컴포넌트가 DOM에서 사라질 때 exit 애니메이션 보장
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이: 글래스모피즘 효과(backdrop-blur) 적용 및 클릭 시 닫기 기능 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-200 cursor-none"
          />

          {/* 메인 사이드바 섹션: 우측에서 스프링 물리 엔진 기반으로 등장 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-background border-l border-foreground/5 z-250 shadow-2xl overflow-y-auto scrollbar-hide"
          >
            <div className="p-8 md:p-16 flex flex-col h-full">
              {/* 상단 섹션: 제목 및 카테고리, 닫기 버튼 */}
              <div className="flex justify-between items-start mb-24">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-foreground/30 uppercase block mb-4">
                    {data.category || "Information"}
                  </span>
                  <h2
                    className={`text-5xl font-bold tracking-tighter uppercase leading-none ${isAbout ? "" : ""}`}
                  >
                    {data.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-4 hover:bg-foreground/5 rounded-full transition-colors group cursor-pointer"
                  aria-label="Close sidebar"
                >
                  <X
                    size={24}
                    className="group-hover:rotate-90 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* 본문 섹션: 요약 설명 및 아코디언 기반 상세 정보 */}
              <div className="flex-1 space-y-16">
                <section>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight break-keep text-foreground/80">
                    {data.description}
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="border-t border-foreground/10">
                    {/* 데이터 타입에 따른 안전한 필드 접근 (Type Guard 적용) */}

                    {/* 01: 기술 스택 */}
                    <AccordionSection index="01" title="Development" defaultOpen>
                      <div className="flex flex-wrap gap-2">
                        {"tech" in data && data.tech && data.tech.length > 0 ? (
                          data.tech.map((t: string) => (
                            <span
                              key={t}
                              className="px-4 py-2 bg-foreground/5 text-[10px] font-bold uppercase tracking-widest border border-transparent hover:border-foreground/10 transition-colors"
                            >
                              {t}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-foreground/30 uppercase tracking-widest italic">
                            No tech data provided
                          </span>
                        )}
                      </div>
                    </AccordionSection>

                    {/* 02: 핵심 키워드 */}
                    <AccordionSection index="02" title="Focus & Stack">
                      <div className="flex flex-wrap gap-2">
                        {"keywords" in data && data.keywords && data.keywords.length > 0 ? (
                          data.keywords.map((k: string) => (
                            <span
                              key={k}
                              className="px-4 py-2 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-colors"
                            >
                              {k}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-foreground/30 uppercase tracking-widest italic">
                            No keywords provided
                          </span>
                        )}
                      </div>
                    </AccordionSection>

                    {/* 03: 주요 성과 및 도전 과제 */}
                    <AccordionSection index="03" title="Achievements">
                      <div className="space-y-6 pt-4">
                        {"achievements" in data &&
                        data.achievements &&
                        data.achievements.length > 0 ? (
                          data.achievements.map((item: { title: string; desc: string }) => (
                            <div key={item.title} className="flex gap-4 items-start group/item">
                              <div className="text-[9px] font-mono text-accent mt-1">✓</div>
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-wider mb-1">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-[10px] text-foreground/30 uppercase tracking-widest italic py-4">
                            No achievements recorded yet
                          </div>
                        )}
                      </div>
                    </AccordionSection>

                    {/* 04: 장문 상세 정보 */}
                    <AccordionSection index="04" title="In Depth">
                      <p className="text-sm md:text-base leading-loose text-muted-foreground break-keep font-medium">
                        {data.details}
                      </p>
                    </AccordionSection>
                  </div>
                </section>

                {/* 관련 외부 리소스 버튼 그룹 */}
                <section className="pt-8 space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase mb-8">
                    Resources
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {data.links?.map((link: { label: string; href: string; primary?: boolean }) => (
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
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
