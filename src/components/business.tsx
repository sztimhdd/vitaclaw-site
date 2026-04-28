const plans = [
  {
    name: "私有化交付",
    target: "大型国企、头部金融",
    price: "5,000 元/员工/年",
    features: ["私有化部署", "全量功能模块", "专属运维支持", "定制化开发", "数据不出域"],
    popular: false,
  },
  {
    name: "SaaS 订阅",
    target: "中型企业",
    price: "200 元/技能/月",
    features: ["开箱即用", "按需订阅", "自动更新升级", "标准技术支持", "快速上线"],
    popular: true,
  },
];

export function Business() {
  return (
    <section id="business" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">商业模式</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">全客群覆盖，收入多元化、高毛利增长</h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">快速部署 · 降低成本 · 压缩销售 · 技能沉淀 · 增强粘性</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border p-8 transition-all duration-300 ${
              plan.popular ? "border-accent/40 bg-accent/[0.02]" : "border-card-border bg-card"
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-accent px-4 py-1 text-xs font-medium text-white">推荐</div>
              )}
              <div className="mb-2 text-xs text-muted-foreground">{plan.target}</div>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`inline-flex h-11 w-full items-center justify-center rounded-xl text-sm font-medium transition-all ${
                plan.popular ? "bg-accent text-white hover:bg-accent-hover glow" : "border border-white/10 bg-white/5 text-foreground hover:bg-white/10"
              }`}>
                {plan.popular ? "立即订阅" : "咨询定制"}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5 text-sm text-green-400 mb-6">毛利率预测</div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">85%+</div>
              <div className="text-sm text-muted mt-1">第二年综合毛利率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">85%+</div>
              <div className="text-sm text-muted mt-1">第三年综合毛利率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
