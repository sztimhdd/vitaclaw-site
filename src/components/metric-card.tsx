"use client";

import { useEffect, useRef, useState } from "react";

export function MetricCard({
  value,
  label,
  suffix = "",
}: {
  value: number | string;
  label: string;
  suffix?: string;
}) {
  const isNumber = typeof value === "number";
  const [display, setDisplay] = useState(isNumber ? 0 : value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNumber) return;
    const el = ref.current;
    if (!el) return;
    let raf: number;
    let start: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * (value as number)));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, isNumber]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-1 px-6 py-5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
    >
      <span className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-white tabular-nums">
        {isNumber ? `${display}${suffix}` : value}
      </span>
      <span className="text-sm text-white/45 font-medium">{label}</span>
    </div>
  );
}
