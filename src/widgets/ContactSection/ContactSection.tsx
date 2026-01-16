"use client";

import React from "react";
import { motion } from "motion/react";
import { Github, Mail, Linkedin } from "lucide-react";

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

        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="mb-20">
            <a
              href="mailto:contact@sngchn.dev"
              className="text-2xl md:text-5xl font-light tracking-tight hover:text-muted-foreground transition-colors border-b border-foreground/10 pb-2"
            >
              contact@sngchn.dev
            </a>
          </div>

          <div className="flex justify-center gap-16">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:contact@sngchn.dev" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center gap-4 text-muted-foreground hover:text-foreground transition-all group"
              >
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
                  {item.label}
                </span>
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
