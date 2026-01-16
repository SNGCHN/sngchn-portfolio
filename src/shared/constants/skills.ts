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
      "Redux",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Motion",
    ],
  },
  {
    category: "LANGUAGES",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "TOOLS & INFRA",
    items: ["Git", "GitHub", "Vercel", "Supabase", "Figma", "JIRA"],
  },
  {
    category: "OTHERS",
    items: ["LangChain", "Cheerio.js", "Zod", "React Hook Form"],
  },
];
