"use client";

import { useEffect, useState } from "react";

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#080c14]/95 backdrop-blur-lg border-t border-white/[0.08] transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-semibold tracking-widest text-white/50 uppercase">预约演示</span>
          <span className="text-[13px] text-white/40">1 周内上线，0 行代码改动</span>
        </div>
        <div className="flex gap-2 ml-auto items-center">
          <a
            href="#cta"
            className="px-5 py-2 rounded-lg bg-white text-[#080c14] font-semibold text-sm whitespace-nowrap hover:bg-white/90 transition-colors duration-200"
          >
            申请演示
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="回到顶部"
          >
            <svg className="w-5 h-5 text-white/40 hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
