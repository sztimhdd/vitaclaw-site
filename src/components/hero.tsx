export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-24 pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          信创生态 · 自主可控
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="gradient-text">企小勤数字员工平台</span>
          <br />
          <span className="gradient-text-blue glow-text">
            企业级高可信数字员工底座
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-10">
          兼容 OpenClaw 生态，以原生 Rust 企业级内核与无侵入集成技术，
          构建&ldquo;做了可查、乱做必断&rdquo;的受控执行运行时，
          彻底解决政企客户&ldquo;不敢用、不好用、用不起、管不好&rdquo;的核心痛点。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#cta"
            className="inline-flex h-12 w-56 items-center justify-center rounded-xl bg-accent text-base font-medium text-white hover:bg-accent-hover transition-all hover:scale-105 glow"
          >
            申请试用
          </a>
          <a
            href="#capabilities"
            className="inline-flex h-12 w-56 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-base font-medium text-foreground hover:bg-white/10 transition-all"
          >
            了解产品方案
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">99.99%</div>
            <div className="text-sm text-muted">平台可用率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">&gt;70%</div>
            <div className="text-sm text-muted">流程效率提升</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">60-80%</div>
            <div className="text-sm text-muted">人力成本降低</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">1 周</div>
            <div className="text-sm text-muted">极速部署上线</div>
          </div>
        </div>
      </div>
    </section>
  );
}
