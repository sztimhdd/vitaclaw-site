import { HeroParticles } from "@/components/hero-particles";
import { MetricCard } from "@/components/metric-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProductScreenshot } from "@/components/product-screenshot";

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080c14]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
      <HeroParticles />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#080c14]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy + CTA + Metrics */}
          <div className="flex flex-col gap-12">
            <ScrollReveal>
              <div>
                <h1 className="text-[clamp(40px,5.5vw,72px)] font-bold leading-[1.08] tracking-[-0.03em] mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    企业级 AI 数字员工
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/40 mt-2">
                    1 周上线，0 行代码改动
                  </span>
                </h1>
                <p className="text-lg text-white/50 mt-6">
                  银行、政府部门信任的智能执行平台。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#cta"
                  className="px-7 py-3 rounded-lg bg-white text-[#080c14] font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200"
                >
                  预约演示 &rarr;
                </a>
                <a
                  href="#architecture"
                  className="px-7 py-3 rounded-lg border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  查看技术架构
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <MetricCard value={99.99} suffix="%" label="平台可用率" />
                <MetricCard value={98} suffix="+" label="任务准确率" />
                <MetricCard value={80} suffix="%" label="落地成本降低" />
                <MetricCard value="1 周" label="极速部署上线" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-sm text-white/40 pt-2">
                已为 200+ 商业银行提供高可信 AI 执行保障
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product screenshot */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            <ProductScreenshot
              src="/screenshots/core-architecture.png"
              alt="VitaClaw 核心架构 — 五层纵深防御体系"
              className="rounded-2xl shadow-2xl border border-white/10 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
