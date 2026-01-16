"use client";

import type { Theme } from "@/shared/types/portfolio";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface NavigationProps {
  onOpenDesignSystem: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * @description 상단 네비게이션 위젯
 */
export const Navigation = ({ onOpenDesignSystem, theme, toggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "JOURNEY", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-150 transition-all duration-700 px-6 md:px-12 flex justify-between items-center backdrop-blur-2xl border-b ${
          theme === "dark"
            ? `bg-white/[0.08] border-white/10 ${scrolled ? "py-3 bg-white/[0.12] shadow-2xl" : "py-4"}`
            : `bg-black/[0.05] border-black/5 ${scrolled ? "py-3 bg-black/[0.08] shadow-sm" : "py-4"}`
        }`}
      >
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-[0.1em] cursor-pointer uppercase outline-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SNGCHN
        </motion.button>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 border-r border-foreground/10 pr-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold tracking-[0.3em] text-foreground/40 hover:text-foreground transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/blog"
              className="px-5 py-2 border border-foreground/10 rounded-full text-[9px] font-bold tracking-[0.2em] hover:bg-foreground hover:text-background transition-all uppercase cursor-pointer"
            >
              Blog
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 hover:bg-foreground/5 rounded-full transition-colors cursor-pointer text-foreground/40 hover:text-foreground outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              onClick={onOpenDesignSystem}
              className="px-5 py-2 border border-foreground/10 rounded-full text-[9px] font-bold tracking-[0.2em] hover:bg-foreground hover:text-background transition-all uppercase cursor-pointer outline-none"
            >
              Design System
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="p-2 cursor-pointer outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-200 bg-background flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-xl font-bold tracking-tighter uppercase">SNGCHN</div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 cursor-pointer outline-none"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {menuItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-bold tracking-tighter hover:text-accent transition-colors uppercase italic"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="h-px bg-foreground/10 my-4" />
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="/blog"
                className="text-2xl font-bold tracking-tight text-foreground/50 uppercase"
              >
                Blog
              </motion.a>
              <motion.button
                type="button"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  setIsOpen(false);
                  onOpenDesignSystem();
                }}
                className="text-left text-2xl font-bold tracking-tight text-accent uppercase italic outline-none"
              >
                Design System
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
