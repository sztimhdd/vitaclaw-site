"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "核心能力", href: "#workflow" },
  { label: "技术架构", href: "#architecture" },
  { label: "定价方案", href: "#business" },
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
          ? "bg-[#080c14]/80 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white/90">
              <span className="text-sm font-bold text-[#080c14]">V</span>
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">
              VitaClaw
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
              href="#contact"
              className="hidden sm:inline-flex text-sm text-white/50 hover:text-white transition-colors duration-150"
            >
              联系我们
            </a>
            <a
              href="#cta"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-white text-[#080c14] px-4 text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              申请试用
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
