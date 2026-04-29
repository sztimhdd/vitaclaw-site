"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-2xl px-4">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              开启数字员工时代
            </span>
            <h2 className="text-[clamp(32px,4.5vw,54px)] font-bold text-white mt-4 mb-4">
              让人人都拥有高可信数字员工
            </h2>
            <p className="text-white/50 text-lg">1 周部署 &middot; 0 行代码改动 &middot; 信创全适配</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col sm:flex-row gap-3">
            <label htmlFor="cta-email" className="sr-only">企业邮箱</label>
            <input
              id="cta-email"
              type="email"
              placeholder="请输入企业邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-lg bg-white text-[#080c14] font-semibold whitespace-nowrap hover:bg-white/90 transition-colors duration-200"
            >
              {submitted ? "已提交 ✓" : "申请演示"}
            </button>
          </form>
          <p className="text-xs text-white/25 mt-4 text-center">
            我们将在 24 小时内与您联系。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-16 pt-12 border-t border-white/[0.08] text-center">
            <p className="text-sm text-white/40 mb-6">受信于中国领先的金融机构</p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {["中国工商银行", "招商银行", "浦发银行", "平安银行"].map((bank) => (
                <span
                  key={bank}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                >
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
