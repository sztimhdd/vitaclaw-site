export function Financials() {
  return (
    <section id="financials" className="relative py-24 sm:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">财务与融资</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">三年高速增长预测与清晰退出路径</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { year: "2026 · 第一年", revenue: "5,000 万", customers: "30+", detail: "实现盈亏平衡，完成三大核心区域销售团队搭建，签约渠道伙伴超50家" },
            { year: "2027 · 第二年", revenue: "1 亿", customers: "150+", detail: "启动Pre-A轮融资，估值实现3-5倍增长，为投资人提供早期退出机会" },
            { year: "2028 · 第三年", revenue: "2 亿", customers: "500+", detail: "毛利率85%+，可通过行业并购实现安全退出" },
          ].map((phase) => (
            <div key={phase.year} className="rounded-2xl border border-card-border bg-card p-8 hover:border-accent/30 transition-all duration-300">
              <div className="text-xs font-mono text-accent mb-2">{phase.year}</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">{phase.revenue}</span>
                <span className="text-sm text-muted">营收</span>
              </div>
              <div className="text-sm text-muted mb-2">
                付费客户 <span className="text-foreground font-semibold">{phase.customers}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{phase.detail}</p>
            </div>
          ))}
        </div>

        <div className="gradient-border max-w-2xl mx-auto rounded-2xl p-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-6">本轮融资</div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">¥1,000 万</div>
              <div className="text-sm text-muted">融资金额</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">10%</div>
              <div className="text-sm text-muted">出让股权</div>
            </div>
          </div>
          <div className="text-sm text-muted">投前估值 <span className="text-foreground font-semibold">¥1 亿元人民币</span></div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent" />60% 产品研发</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent" />25% 市场推广</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent" />15% 运营支撑</span>
          </div>
        </div>
      </div>
    </section>
  );
}
