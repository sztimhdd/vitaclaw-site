import { HeroParticles } from "@/components/hero-particles";
import { MetricCard } from "@/components/metric-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Layer 2: Center radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
      {/* Layer 3: Particles */}
      <HeroParticles />
      {/* Layer 4: Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#080c14]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-24 pb-32">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            企业级受控执行运行时 &mdash; Secure Execution Runtime
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-[clamp(42px,5.5vw,72px)] font-bold leading-[1.08] tracking-[-0.03em] mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              从「对话纪元」
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/40">
              全面迈向「执行纪元」
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg sm:text-xl text-white/50 leading-relaxed">
              <span className="text-white font-semibold">VitaClaw</span>
              &mdash; 以原生 Rust 内核与 eBPF 追踪技术，
              构建&ldquo;做了可查、乱做必断&rdquo;的受控执行运行时。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-sm text-white/40">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              1 周极速部署
            </span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/40">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              80% 落地降本
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#cta"
              className="inline-flex h-12 w-56 items-center justify-center rounded-lg bg-white text-[#080c14] text-[15px] font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              申请试点 &rarr;
            </a>
            <a
              href="#architecture"
              className="inline-flex h-12 w-56 items-center justify-center rounded-lg border border-white/20 text-white/80 text-[15px] font-medium hover:border-white/40 hover:text-white transition-all duration-200"
            >
              查看技术架构
            </a>
          </div>
        </ScrollReveal>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-4">
          <ScrollReveal delay={350}>
            <MetricCard value={99.99} label="平台可用率" suffix="%" />
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col gap-1 px-6 py-5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
              <span className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-white tabular-nums">&gt;98%</span>
              <span className="text-sm text-white/45 font-medium">任务准确率</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <MetricCard value={80} label="落地成本降低" suffix="%" />
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <div className="flex flex-col gap-1 px-6 py-5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
              <span className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-white tabular-nums">1 周</span>
              <span className="text-sm text-white/45 font-medium">极速部署上线</span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={550}>
          <p className="text-center text-xs text-white/25">基于 200+ 客户实际部署数据</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
