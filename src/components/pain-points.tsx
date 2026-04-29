import { ScrollReveal } from "@/components/scroll-reveal";

const painPoints = [
  {
    icon: (
      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "安全合规缺失",
    description: "开源漏洞层出不穷，数据上云易泄露、权限无管控、责任难追溯，无法满足金融、政务等强监管行业的合规要求。",
    tags: ["数据泄露", "权限失控", "责任断链"],
    accent: "red",
    large: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "系统集成困难",
    description: "通用产品对接需改造企业老旧系统，改造成本高、落地周期长，复杂多云架构适配性差。",
    tags: ["改造成本高", "周期长", "多云不适配"],
    accent: "amber",
    large: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "执行能力不闭环",
    description: "缺乏自学习、持续进化、技能泛化能力，无法胜任复杂真实业务场景的端到端长任务需求。",
    tags: ["缺乏自学习", "无法端到端", "任务中断"],
    accent: "purple",
    large: false,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "规模化运营不足",
    description: "缺乏Agent集群监控管理能力，缺乏算力弹性调度、技能集中管理，无法规模化运营管理。",
    tags: ["集群监控弱", "算力调度难", "技能管理散"],
    accent: "teal",
    large: false,
  },
];

const accentStyles: Record<string, { bg: string; border: string; tagBg: string; tagBorder: string; tagText: string }> = {
  red: { bg: "bg-red-500/10", border: "border-red-500/20", tagBg: "bg-red-500/8", tagBorder: "border-red-500/15", tagText: "text-red-400/70" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", tagBg: "bg-amber-500/8", tagBorder: "border-amber-500/15", tagText: "text-amber-400/70" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", tagBg: "bg-purple-500/8", tagBorder: "border-purple-500/15", tagText: "text-purple-400/70" },
  teal: { bg: "bg-teal-500/10", border: "border-teal-500/20", tagBg: "bg-teal-500/8", tagBorder: "border-teal-500/15", tagText: "text-teal-400/70" },
};

export function PainPoints() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              通用产品水土不服
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              政企客户有极强的自动化降本刚需，但通用产品不敢用，定制方案用不起，信创监管不让用，自建方案难运营
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid: first card spans 2 cols, rest 1 col each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((point, i) => {
            const s = accentStyles[point.accent];
            const isLarge = point.large;
            return (
              <ScrollReveal key={point.title} delay={i * 80}>
                <div
                  className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300 group ${
                    isLarge ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg ${s.bg} ${s.border} flex items-center justify-center mb-5`}>
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-[15px] text-white/50 leading-relaxed">{point.description}</p>
                  <div className="flex gap-2 mt-6 flex-wrap">
                    {point.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${s.tagBg} ${s.tagText} ${s.tagBorder}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
