import { HeroParticles } from "@/components/hero-particles";
import { MetricCard } from "@/components/metric-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProductScreenshot } from "@/components/product-screenshot";

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
      <HeroParticles />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0f172a]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy + CTA + Metrics */}
          <div className="flex flex-col gap-12">
            <ScrollReveal>
              <div>
                <h1 className="text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    不改系统，一周上线
                  </span>
                </h1>
                <p className="text-lg text-white/50 mt-6 leading-relaxed">
                  企小勤 AI 数字员工，从财务审核到供应链协同，帮你的团队自动干活。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#cta"
                  className="px-7 py-3 rounded-lg bg-white text-[#0f172a] font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200"
                >
                  免费试点 &rarr;
                </a>
                <a
                  href="#scenarios"
                  className="px-7 py-3 rounded-lg border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  预约演示
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <MetricCard value={99.99} suffix="%" label="平台可用率" />
                <MetricCard value={98} suffix="+" label="任务准确率" />
                <MetricCard value={80} suffix="%" label="人力成本降低" />
                <MetricCard value="1 周" label="极速部署上线" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-sm text-white/40 pt-2">
                已为 200+ 银行及政府机构提供高可信 AI 执行保障
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product video */}
          <div className="relative hidden lg:flex items-center justify-center w-full max-w-[600px] ml-auto">
            <ScrollReveal delay={200} className="w-full">
              <div className="w-full rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0a0f1e] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group hover:scale-[1.02] transition-transform duration-500 will-change-transform">
                <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-[#0f172a]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>
                  <div className="ml-4 text-[13px] font-medium text-white/40 tracking-wide font-mono">
                    企小勤 · AI 数字员工
                  </div>
                </div>
                <div className="relative w-full aspect-video bg-[#050810]">
                  <video 
                    src="/video-demo.mp4" 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 w-full h-full">
                    <ProductScreenshot
                      src="/arch.png"
                      alt="企小勤核心架构"
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
