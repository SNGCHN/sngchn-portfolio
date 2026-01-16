"use client";

import type { DetailEvent, SidebarContent, Theme } from "@/shared/types/portfolio";
import { CustomCursor } from "@/shared/ui/CustomCursor";
import { DetailSidebar } from "@/shared/ui/DetailSidebar";
import { MainSection } from "@/widgets/MainSection";
import { Navigation } from "@/widgets/Navigation";
import { useEffect, useState } from "react";

/**
 * @description 홈 페이지 조립장 (HomePage)
 * 모든 위젯과 레이아웃 조각들이 여기서 하나로 합쳐집니다.
 */
export function HomePage() {
  const [theme, setTheme] = useState<Theme>("light");
  const [sidebarContent, setSidebarContent] = useState<SidebarContent | null>(null);
  const [showDesignSystem, setShowDesignSystem] = useState(false);

  // 테마 변경 시 <html> 클래스 업데이트
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // 전역 openDetail 이벤트 구독
  useEffect(() => {
    const handleOpenDetail = (e: Event) => {
      const detailEvent = e as DetailEvent;
      setSidebarContent(detailEvent.detail);
    };
    window.addEventListener("openDetail", handleOpenDetail);
    return () => window.removeEventListener("openDetail", handleOpenDetail);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* 1. 최하위 부품: 커스텀 커서 */}
      <CustomCursor />

      {/* 2. 전역 탐색: 네비게이션 */}
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenDesignSystem={() => setShowDesignSystem(true)}
      />

      {/* 3. 본문 조각: 메인 섹션 */}
      <main className="w-full">
        <MainSection />

        {/* TODO: 나머지 섹션 위젯(Projects, Skills 등) 조립 예정 */}
        <section
          id="projects"
          className="h-screen flex items-center justify-center border-t border-foreground/5"
        >
          <p className="text-huge font-bold opacity-10">PROJECTS</p>
        </section>
      </main>

      {/* 4. 레이아웃 조각: 상세 정보 사이드바 */}
      <DetailSidebar
        isOpen={!!sidebarContent}
        onClose={() => setSidebarContent(null)}
        content={sidebarContent}
      />

      {/* TODO: DesignSystemView 구현 시 연결 */}
    </div>
  );
}
