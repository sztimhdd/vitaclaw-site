"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "真实场景", href: "#scenario-shots" },
  { label: "演示视频", href: "#scenarios" },
  { label: "试点方式", href: "#pricing" },
  { label: "联系我们", href: "#contact" },
  { label: "知识库", href: "/kb/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/brand/vitaclaw-logo-dark.svg" alt="VitaClaw 企小美" className="h-7 w-auto object-contain sm:h-8" />
            <span className="hidden text-xs text-white/35 lg:inline">会干活的 AI 数字员工</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/kb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white border border-white/[0.12] hover:border-white/30 rounded-lg px-3 py-1.5 transition-all duration-200"
              title="企小美 AI 技术知识库"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              知识库
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 ml-0.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex text-sm text-white/50 hover:text-white transition-colors duration-150"
            >
              预约演示
            </a>
            <a
              href="/trial/select"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-white text-[#0f172a] px-4 text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              申请试用
            </a>
          </div>
        </div>
        <nav
          className="flex gap-2 overflow-x-auto pb-3 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="移动端主导航"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/58 transition-colors duration-150 hover:border-white/[0.20] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
