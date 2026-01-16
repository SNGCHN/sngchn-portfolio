import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "SNGCHN | Portfolio",
  description: "Interactive Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
