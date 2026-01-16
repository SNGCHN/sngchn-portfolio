"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-screen w-full flex flex-col snap-start px-6 md:px-24 bg-background pt-32 pb-24"
    >
      <div className="max-w-[1400px] w-full mx-auto flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-[-0.05em] leading-[0.85] uppercase">
            CONTACT
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex justify-center gap-12">
            {[
              { icon: Github, href: "https://github.com/sngchn" },
              { icon: Linkedin, href: "https://linkedin.com/in/sngchn" },
              { icon: Mail, href: "mailto:sngchn0312@naver.com" },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-muted-foreground hover:text-foreground transition-all"
              >
                <item.icon
                  size={28}
                  strokeWidth={1.5}
                  className="hover:scale-110 transition-transform"
                />
              </motion.a>
            ))}
          </div>
        </div>

        <footer className="flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
          <div>© 2026 SNGCHN</div>
          <div>All rights reserved.</div>
        </footer>
      </div>
    </section>
  );
};
