import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitaClaw | 企小勤数字员工平台 — 企业级高可信数字员工底座",
  description:
    "兼容OpenClaw生态，打造信创生态自主可控的企业级高可信数字员工底座，彻底解决政企客户不敢用、不好用、用不起、管不好的核心痛点。",
  openGraph: {
    title: "VitaClaw | 企小勤数字员工平台",
    description:
      "企业级高可信数字员工底座 — 安全可控、能力闭环、高效落地、企业级运维",
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
      </body>
    </html>
  );
}
