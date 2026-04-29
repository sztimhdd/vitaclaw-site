import { ScrollReveal } from "@/components/scroll-reveal";

const plans = [
  {
    name: "私有化交付",
    target: "大型国企、头部金融",
    price: "按项目定制报价",
    priceNote: "参考价格: 从 ¥5 万/年起",
    features: ["私有化部署，数据不出域", "全量功能模块", "专属运维支持", "定制化开发"],
    popular: false,
  },
  {
    name: "SaaS 订阅",
    target: "中型企业",
    price: "200 元/技能/月",
    priceNote: "示例: 10 个技能 × 200元 = 2,000元/月",
    features: ["开箱即用", "按需订阅", "自动更新升级", "标准技术支持"],
    popular: true,
  },
];

export function Business() {
  return (
    <section id="business" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">灵活部署</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">适配不同规模的企业需求</h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">从中小型企业到大型金融机构，找到最适合您的部署方式</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500/40 bg-blue-500/[0.04]"
                  : "border-white/[0.08] bg-white/[0.03]"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-blue-500 px-4 py-1 text-xs font-medium text-white">
                    推荐
                  </div>
                )}
                <div className="mb-2 text-xs text-white/45">{plan.target}</div>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                {plan.priceNote && <div className="text-xs text-white/35 mb-5">{plan.priceNote}</div>}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-[#080c14] hover:bg-white/90"
                    : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                }`}>
                  {plan.popular ? "立即订阅" : "咨询定制"}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
