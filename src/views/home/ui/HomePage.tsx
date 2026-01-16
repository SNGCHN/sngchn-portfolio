"use client";

import type { DetailEvent, SidebarContent, Theme } from "@/shared/types/portfolio";
import { CustomCursor } from "@/shared/ui/CustomCursor";
import { DetailSidebar } from "@/shared/ui/DetailSidebar";
import { MainSection } from "@/widgets/MainSection";
import { Navigation } from "@/widgets/Navigation";
import { useEffect, useState } from "react";

/**
 * @description 홈 페이지 조립장 (HomePage)
 * FSD 아키텍처의 Views 레이어에 해당하며, 모든 위젯(Widgets)과 상호작용 레이어(Shared UI)를 하나로 합쳐 완성된 화면을 구성합니다.
 * 테마 상태 제어와 전역 이벤트(상세 사이드바 열기) 구독을 담당합니다.
 */
export function HomePage() {
  const [theme, setTheme] = useState<Theme>("light"); // 전체 애플리케이션 테마 상태
  const [sidebarContent, setSidebarContent] = useState<SidebarContent | null>(null); // 상세 사이드바에 표시할 데이터
  const [showDesignSystem, setShowDesignSystem] = useState(false); // 디자인 시스템 모달/뷰어 표시 여부

  // 테마 변경 시 <html> 태그의 클래스를 동적으로 변경하여 Tailwind dark: 선택자 활성화
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // 전역 'openDetail' 커스텀 이벤트 구독
  // 어느 위젯에서든 window.dispatchEvent(new CustomEvent('openDetail', ...))를 호출하면 사이드바가 열립니다.
  useEffect(() => {
    const handleOpenDetail = (e: Event) => {
      const detailEvent = e as DetailEvent;
      setSidebarContent(detailEvent.detail);
    };
    window.addEventListener("openDetail", handleOpenDetail);
    return () => window.removeEventListener("openDetail", handleOpenDetail);
  }, []);

  // 테마 전환 핸들러
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* 1. 최하위 오버레이 레이어: 사용자의 시선을 따라다니는 고유의 커스텀 커서 */}
      <CustomCursor />

      {/* 2. 전역 탐색 위젯: 화면 상단 고정 네비게이션 */}
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenDesignSystem={() => setShowDesignSystem(true)}
      />

      {/* 3. 본문 콘텐츠 레이어: 섹션별 위젯 조립 */}
      <main className="w-full">
        {/* 히어로 섹션 */}
        <MainSection />

        {/* TODO: 향후 구현될 나머지 섹션(ProjectList, SkillGrid 등)이 여기에 추가됩니다. */}
        <section
          id="projects"
          className="h-screen flex items-center justify-center border-t border-foreground/5"
        >
          <p className="text-huge font-bold opacity-10">PROJECTS</p>
        </section>
      </main>

      {/* 4. 상호작용 레이어: 정보의 깊이를 더해주는 상세 사이드바 (Portal 성격) */}
      <DetailSidebar
        isOpen={!!sidebarContent}
        onClose={() => setSidebarContent(null)}
        content={sidebarContent}
      />

      {/* 디자인 시스템 가이드 뷰어 연결 지점 */}
    </div>
  );
}
