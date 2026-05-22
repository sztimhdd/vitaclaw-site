"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-2xl px-4">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              联系方式
            </span>
            <h2 className="text-[clamp(32px,4.5vw,54px)] font-bold text-white mt-4 mb-4">
              想验证一个流程，先和我们对齐边界
            </h2>
            <p className="text-white/50 text-lg">
              当前试用入口连接本地 PlanB M1 demo。正式试点前，我们会先确认流程范围、权限边界和人工确认节点。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/trial/select"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 py-3 text-[#0f172a] font-semibold whitespace-nowrap hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              进入试用环境选择
            </a>
            <a
              href="mailto:contact@vitaclaw.com"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-7 py-3 text-white/75 font-semibold whitespace-nowrap hover:border-white/40 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              邮件联系
            </a>
          </div>
          <p className="text-xs text-white/25 mt-4 text-center">
            试用页只保留 tenantA / tenantB 两个本地入口，不新增注册、计费或自动开通。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-16 pt-12 border-t border-white/[0.08] text-center">
            <p className="text-sm text-white/40 mb-6">正式落地前重点确认这些边界</p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {["数据是否出域", "哪些动作需人工确认", "审计日志如何留存", "是否需要本地/私有化环境"].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
