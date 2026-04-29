"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "安全哲学", href: "#security" },
  { label: "核心能力", href: "#workflow" },
  { label: "技术架构", href: "#architecture" },
  { label: "核心团队", href: "#team" },
  { label: "商业模式", href: "#business" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent">
              <span className="text-sm font-bold text-white">V</span>
            </div>
            <span className="font-semibold text-sm tracking-tight">
              VitaClaw
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex text-sm text-muted hover:text-foreground transition-colors"
            >
              联系我们
            </a>
            <a
              href="#cta"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              申请试用
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
