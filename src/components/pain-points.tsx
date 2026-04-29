const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "安全合规缺失",
    description:
      "开源漏洞层出不穷，数据上云易泄露、权限无管控、责任难追溯，无法满足金融、政务等强监管行业的合规要求。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "系统集成困难",
    description:
      "通用产品对接需改造企业老旧系统，改造成本高、落地周期长，复杂多云架构适配性差。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "执行能力不闭环",
    description:
      "缺乏自学习、持续进化、技能泛化能力，无法胜任复杂真实业务场景的端到端长任务需求。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
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
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
