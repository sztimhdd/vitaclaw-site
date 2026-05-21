import { ScrollReveal } from "@/components/scroll-reveal";

const plans = [
  {
    name: "本地 Demo",
    target: "先看 AI Agent 如何执行任务",
    price: "PlanB",
    priceNote: "M1 本地演示入口",
    features: ["进入 tenantA / tenantB", "验证会议、HR、采购等流程演示", "不创建账号、不自动开通生产环境", "适合内部评审和演示"],
    cta: "选择试用环境",
    popular: false,
  },
  {
    name: "流程试点",
    target: "选一个高频流程验证业务价值",
    price: "1 个",
    priceNote: "流程先行",
    features: ["梳理当前 SOP 与人工确认节点", "定义可执行任务边界", "复用本地 demo 体验做试点范围确认", "输出后续接入建议"],
    cta: "申请试点",
    popular: true,
  },
  {
    name: "安全评估",
    target: "IT / 安全团队核查部署边界",
    price: "边界",
    priceNote: "治理与审计确认",
    features: ["确认私有化或本地环境诉求", "梳理权限、日志和数据边界", "明确哪些动作必须人工确认", "评估后续正式环境方案"],
    cta: "查看入口",
    popular: false,
  },
];

export function Business() {
  return (
    <section id="trial" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">试用路径</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">先进入本地 demo，再决定试点范围</h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">当前入口连接本地 PlanB M1 演示，不包含完整 control plane、注册、计费或自动开通。</p>
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
                  href="/trial/select"
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
