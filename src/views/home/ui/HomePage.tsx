"use client";

import React, { useState, useEffect } from "react";
import { CustomCursor } from "../../../shared/ui/CustomCursor/CustomCursor";
import { DetailSidebar } from "../../../shared/ui/DetailSidebar/DetailSidebar";
import { ScrollIndicator } from "../../../shared/ui/ScrollIndicator/ScrollIndicator";
import { ContactSection } from "../../../widgets/ContactSection/ContactSection";
import { JourneySection } from "../../../widgets/JourneySection/JourneySection";
import { MainSection } from "../../../widgets/MainSection/MainSection";
import { Navigation } from "../../../widgets/Navigation/Navigation";
import { ProjectSection } from "../../../widgets/ProjectSection/ProjectSection";
import { SkillSection } from "../../../widgets/SkillSection/SkillSection";

export default function HomePage() {
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailContent, setDetailContent] = useState(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");

  // Load initial theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
      if (isDark) document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleOpenDetail = (e: CustomEvent) => {
      setDetailContent(e.detail);
      setDetailOpen(true);
    };

    window.addEventListener("openDetail", handleOpenDetail as EventListener);
    return () => window.removeEventListener("openDetail", handleOpenDetail as EventListener);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        threshold: 0.5,
      },
    );

    const sections = document.querySelectorAll("section[id]");
    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full relative bg-background text-foreground transition-colors duration-300">
      <CustomCursor />
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <ScrollIndicator activeSection={activeSection} isHidden={false} sidebarOpen={detailOpen} />

      <MainSection />
      <ProjectSection />
      <SkillSection />
      <JourneySection />
      <ContactSection />

      <DetailSidebar
        isOpen={detailOpen}
        onClose={() => setDetailOpen(false)}
        content={detailContent}
      />
    </main>
  );
}
