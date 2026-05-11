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
