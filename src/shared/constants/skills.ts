export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "FRONTEND",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Zustand",
      "Redux",
      "React Query",
      "Web Vitals",
      "Shadcn UI",
    ],
  },
  {
    category: "LANGUAGES",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3", "Python", "SQL"],
  },
  {
    category: "TOOLS & DEVOPS",
    items: ["Git", "GitHub Actions", "Vercel", "Supabase", "Figma", "Docker", "Webpack", "Vite"],
  },
  {
    category: "PRINCIPLES",
    items: ["Minimalism", "Performance", "Accessibility", "Responsive Design", "Clean Code"],
  },
];
