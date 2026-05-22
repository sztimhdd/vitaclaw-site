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
              预约沟通
            </span>
            <h2 className="text-[clamp(32px,4.5vw,54px)] font-bold text-white mt-4 mb-4">
              想先试一个流程？我们帮你一起选场景
            </h2>
            <p className="text-white/50 text-lg">
              你不需要一开始就想清楚所有系统改造。先告诉我们你最想省人的一个流程，我们会一起确认适合 AI 处理的部分、需要人工确认的节点，以及可以如何试点。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:contact@vitaclaw.com?subject=预约企小勤试点沟通"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 py-3 text-[#0f172a] font-semibold whitespace-nowrap hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              预约试点沟通
            </a>
            <a
              href="mailto:contact@vitaclaw.com"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-7 py-3 text-white/75 font-semibold whitespace-nowrap hover:border-white/40 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              邮件联系
            </a>
          </div>
          <p className="text-xs text-white/25 mt-4 text-center">
            当前以演示和试点沟通为主，正式接入前会先确认数据范围、系统权限和验收目标。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-16 pt-12 border-t border-white/[0.08] text-center">
            <p className="text-sm text-white/40 mb-6">正式落地前重点确认这些问题</p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {["哪些数据可以用于试点", "哪些动作必须人工确认", "哪些系统需要接入", "是否需要本地或私有化环境"].map((item) => (
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
