import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyCTABar } from "@/components/sticky-cta-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitaClaw | 企业级 AI 数字员工 — 1 周上线，0 行代码改动",
  description:
    "银行、政府部门信任的智能执行平台。企业级 AI 数字员工，1 周部署，不改现有系统一行代码。",
  openGraph: {
    title: "VitaClaw | 企业级 AI 数字员工",
    description:
      "银行、政府部门信任的智能执行平台 — 1 周上线，0 行代码改动",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTABar />
      </body>
    </html>
  );
}
