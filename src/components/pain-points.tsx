const painPoints = [
  {
    icon: "🔒",
    title: "安全合规缺失",
    description:
      "开源漏洞层出不穷，数据上云易泄露、权限无管控、责任难追溯，无法满足金融、政务等强监管行业的合规要求。",
  },
  {
    icon: "🔗",
    title: "系统集成困难",
    description:
      "通用产品对接需改造企业老旧系统，改造成本高、落地周期长，复杂多云架构适配性差。",
  },
  {
    icon: "⚡",
    title: "执行能力不闭环",
    description:
      "缺乏自学习、持续进化、技能泛化能力，无法胜任复杂真实业务场景的端到端长任务需求。",
  },
  {
    icon: "📊",
    title: "规模化运营不足",
    description:
      "缺乏Agent集群监控管理能力，缺乏算力弹性调度、技能集中管理，无法规模化运营管理。",
  },
];

export function PainPoints() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            通用产品水土不服
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            政企客户有极强的自动化降本刚需，但通用产品不敢用，定制方案用不起，信创监管不让用，自建方案难运营
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative rounded-2xl border border-card-border bg-card p-6 hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-6">
            核心理念
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            以&ldquo;安全为根、执行为本、兼容为要、易用为纲&rdquo;
          </h3>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            平衡政企客户对 AI 效率与安全合规的需求，打造和定义
            AI 数字员工时代的工业级架构、能力和技术标准
          </p>
        </div>
      </div>
    </section>
  );
}
