"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "核心能力", href: "#capabilities" },
  { label: "行业场景", href: "#scenarios" },
  { label: "技术架构", href: "#architecture" },
  { label: "定价方案", href: "#pricing" },
  { label: "信任合规", href: "#trust" },
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
          <a href="#" className="flex items-center gap-2">
            <img src="/VitaClaw-Logo-v0.png" alt="企小勤 Logo" className="h-8 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
            <div className="hidden items-center justify-center w-7 h-7 rounded-md bg-accent">
              <span className="text-sm font-bold text-white">企</span>
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">
              企小勤
            </span>
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
              title="企小勤 AI 技术知识库"
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
              href="#pricing"
              className="hidden sm:inline-flex text-sm text-white/50 hover:text-white transition-colors duration-150"
            >
              查看定价
            </a>
            <a
              href="#cta"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-white text-[#0f172a] px-4 text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              免费试点
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
