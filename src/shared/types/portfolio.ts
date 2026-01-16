export type SidebarContentType = "project" | "journey" | "about";

export interface ProjectData {
  id: string;
  title: string;
  description: string[];
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  category?: string;
}

export interface JourneyData {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string[];
  tech?: string[];
  keywords?: string[];
  details?: string;
  achievements?: { title: string; desc: string }[];
  challenges?: { problem: string; solution: string }[];
  links?: { label: string; href: string; primary?: boolean; secondary?: boolean }[];
}

export interface AboutData {
  id: string;
  title: string;
  category: string;
  tech: string[];
  keywords: string[];
  description: string;
  details: string;
  links: { label: string; href: string; primary?: boolean; secondary?: boolean }[];
}

export type SidebarContent = {
  type: SidebarContentType;
  data: ProjectData | JourneyData | AboutData;
};

export interface DetailEvent extends CustomEvent {
  detail: SidebarContent;
}

export type Theme = "light" | "dark";
