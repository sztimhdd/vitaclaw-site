import { ScrollReveal } from "@/components/scroll-reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32 text-center">
      {/* Layer 1: Center radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
      {/* Layer 2: Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Layer 3: Top fade-in line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-8">
            开启数字员工新时代
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-[clamp(32px,4.5vw,54px)] font-bold tracking-[-0.02em] text-white mb-4">
            让人人都拥有高可信数字员工
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            兼容 OpenClaw 生态 &middot; 信创自主可控 &middot; 最快 1 周部署 &middot; 落地成本降低 80%
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="px-7 py-3 rounded-lg bg-white text-[#080c14] font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200"
            >
              申请试用 &rarr;
            </a>
            <a
              href="#architecture"
              className="px-7 py-3 rounded-lg border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/40 hover:text-white transition-all duration-200"
            >
              联系商务团队
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/35">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              信创全适配
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              国产芯片/OS/数据库
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              数据不出域
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              99.99% 可用率
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
