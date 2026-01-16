export interface ContactLink {
  icon: "github" | "linkedin" | "mail" | "phone";
  label: string;
  href: string;
}

export const CONTACT_DATA = {
  email: "sngchn0312@naver.com",
  phone: "+821092265170",
  links: [
    {
      icon: "github" as const,
      label: "GitHub",
      href: "https://github.com/SNGCHN/",
    },
    {
      icon: "mail" as const,
      label: "Email",
      href: "mailto:sngchn0312@naver.com",
    },
  ],
};

export const FOOTER_DATA = {
  copyright: "© 2025 이성찬",
  rights: "All rights reserved.",
};
