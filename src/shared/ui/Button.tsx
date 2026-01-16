import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors h-10 px-4 sm:h-12 sm:px-5";

  const variants = {
    primary: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
    secondary: "bg-[#f2f2f2] dark:bg-[#1a1a1a] text-foreground hover:opacity-80",
    outline:
      "border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
