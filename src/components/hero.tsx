export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[200px] bg-accent-green/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-24 pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          企业级受控执行运行时 &mdash; Secure Execution Runtime
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="gradient-text">从「对话纪元」</span>
          <br />
          <span className="gradient-text-blue glow-text">
            全面迈向「执行纪元」
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg sm:text-xl text-muted leading-relaxed">
            <span className="text-foreground font-semibold">VitaClaw</span>
            &mdash; 以原生 Rust 内核与 eBPF 追踪技术，
            构建&ldquo;做了可查、乱做必断&rdquo;的受控执行运行时。
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            1 周极速部署
          </span>
          <span className="text-muted/30">|</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            80% 落地降本
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#cta"
            className="inline-flex h-12 w-56 items-center justify-center rounded-xl bg-accent text-base font-medium text-white hover:bg-accent-hover transition-all hover:scale-105 glow"
          >
            开始试点项目
          </a>
          <a
            href="#architecture"
            className="inline-flex h-12 w-56 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-base font-medium text-foreground hover:bg-white/10 transition-all"
          >
            阅读技术白皮书
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">99.99%</div>
            <div className="text-sm text-muted">平台可用率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">&gt;98%</div>
            <div className="text-sm text-muted">任务准确率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">80%</div>
            <div className="text-sm text-muted">落地成本降低</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">1 周</div>
            <div className="text-sm text-muted">极速部署上线</div>
          </div>
        </div>

        <div className="text-sm text-muted/60 border-t border-white/5 pt-6 max-w-lg mx-auto">
          已为全国 200+ 商业银行提供高可信 AI 执行保障
        </div>
      </div>
    </section>
  );
}
