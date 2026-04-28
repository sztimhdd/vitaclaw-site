export function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-8">开启数字员工新时代</div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="gradient-text-blue">让人人都拥有</span><br />
          <span className="gradient-text">高可信数字员工</span>
        </h2>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">兼容 OpenClaw 生态 · 信创自主可控 · 最快 1 周部署 · 落地成本降低 80%</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex h-12 w-56 items-center justify-center rounded-xl bg-accent text-base font-medium text-white hover:bg-accent-hover transition-all hover:scale-105 glow">申请试用</a>
          <a href="#" className="inline-flex h-12 w-56 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-base font-medium text-foreground hover:bg-white/10 transition-all">联系商务团队</a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted">
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
      </div>
    </section>
  );
}
