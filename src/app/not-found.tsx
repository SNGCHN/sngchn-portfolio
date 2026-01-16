"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Gradient Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--primary), transparent 40%)`,
          opacity: 0.03,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 px-6 md:px-24 max-w-[1400px] w-full">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-12">
          {/* 404 Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-[20vw] md:text-[15vw] font-bold tracking-[-0.05em] leading-[0.85] text-foreground/5 select-none">
              404
            </h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                NOT FOUND
              </span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 max-w-2xl"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight">
              요청하신 페이지를 찾을 수 없습니다.
            </p>
            <p className="text-sm md:text-base text-muted-foreground/60">
              페이지가 삭제되었거나, 주소가 변경되었거나, 일시적으로 사용할 수 없는 상태입니다.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            className="flex items-center gap-8 my-12"
          >
            <div className="w-24 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-24 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <button
              type="button"
              onClick={handleGoBack}
              className="flex items-center justify-center gap-3 px-8 py-5 border border-foreground/10 hover:border-foreground/30 transition-all group flex-1"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Go Back</span>
            </button>
            <button
              type="button"
              onClick={handleGoHome}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background hover:bg-foreground/90 transition-all group flex-1"
            >
              <Home size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Home</span>
            </button>
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-16"
          >
            <span className="text-[9px] font-mono text-foreground/20 uppercase tracking-[0.3em]">
              ERROR CODE: 404 / PAGE_NOT_FOUND
            </span>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-1 h-1 rounded-full bg-primary/30"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-primary/40"
          animate={{
            y: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[20%] w-1 h-1 rounded-full bg-primary/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
}
