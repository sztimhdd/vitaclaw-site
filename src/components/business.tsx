import { ScrollReveal } from "@/components/scroll-reveal";

const plans = [
  {
    name: "免费试点",
    target: "了解企小勤能做什么",
    price: "¥0",
    priceNote: "14 天免费体验",
    features: ["1 个业务技能包", "1 个 AI 数字员工", "基础场景验证", "在线文档支持"],
    cta: "免费开始",
    popular: false,
  },
  {
    name: "标准版",
    target: "中小团队日常运营",
    price: "¥299",
    priceNote: "/月，年付享 8 折",
    features: ["3 个业务技能包", "1 个 AI 数字员工", "ChatKit 无侵入集成", "标准技术支持（8h 响应）"],
    cta: "立即试用",
    popular: true,
  },
  {
    name: "专业版",
    target: "多部门规模化部署",
    price: "¥799",
    priceNote: "/月，年付享 8 折",
    features: ["5 个业务技能包", "3 个 AI 数字员工", "ChatKit 无侵入集成", "专属技术顾问（2h 响应）", "私有技能定制开发", "多租户权限管理"],
    cta: "联系销售",
    popular: false,
  },
];

export function Business() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">定价方案</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">从免费开始，按需升级</h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">无需大额投入，先试用再决定，随时升级或取消</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className={`relative rounded-2xl border p-8 transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "border-blue-500/40 bg-blue-500/[0.06]"
                  : "border-white/[0.08] bg-white/[0.03]"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-accent px-4 py-1 text-xs font-medium text-white">
                    推荐
                  </div>
                )}
                <div className="mb-1 text-xs text-white/45">{plan.target}</div>
                <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
                {plan.priceNote && <div className="text-xs text-white/35 mb-5">{plan.priceNote}</div>}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                    plan.popular
                      ? "bg-white text-[#0f172a] hover:bg-white/90"
                      : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
