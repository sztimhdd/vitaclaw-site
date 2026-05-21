import { ScrollReveal } from "@/components/scroll-reveal";

const painPoints = [
  {
    icon: (
      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "传统 AI：会聊，不会执行",
    description: "能生成建议，但不会真正进入业务系统推动流程。最后还是人来复制、粘贴、催办和收尾。",
    tags: ["VitaClaw: 调用系统", "推进流程", "交付结果"],
    beforeLabel: "人工复制粘贴",
    beforeValue: "2 小时",
    afterLabel: "AI 生成可确认初稿",
    afterValue: "分钟级",
    accent: "red" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "旧系统：接口少，改造重",
    description: "ERP、OA、表格和聊天工具分散存在，很多流程没有标准接口。中小团队很难为一次试点承担大改造。",
    tags: ["VitaClaw: 低侵入", "先试流程", "逐步接入"],
    beforeLabel: "先排期改系统",
    beforeValue: "数周起",
    afterLabel: "先用 demo 验证流程",
    afterValue: "1 周",
    accent: "amber" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "经验：散在个人和文档里",
    description: "新人要重新学制度，老员工靠经验补流程。AI 如果不能沉淀业务口径，很快又变成一次性工具。",
    tags: ["VitaClaw: 沉淀知识", "复用 SOP", "减少反复解释"],
    beforeLabel: "靠人记住口径",
    beforeValue: "反复问",
    afterLabel: "流程知识可复用",
    afterValue: "一处维护",
    accent: "purple" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "企业边界：必须清楚",
    description: "不是所有动作都能自动放行。资金、合同、权限等高风险节点，需要清楚的权限、记录和人工确认。",
    tags: ["VitaClaw: 可审计", "可阻断", "人工确认"],
    beforeLabel: "AI 动作不可见",
    beforeValue: "难追溯",
    afterLabel: "关键动作留痕",
    afterValue: "可复核",
    accent: "cyan" as const,
  },
];

const accentStyles: Record<string, { bg: string; border: string; tagBg: string; tagBorder: string; tagText: string }> = {
  red: { bg: "bg-red-500/10", border: "border-red-500/20", tagBg: "bg-red-500/8", tagBorder: "border-red-500/15", tagText: "text-red-400/70" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", tagBg: "bg-amber-500/8", tagBorder: "border-amber-500/15", tagText: "text-amber-400/70" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", tagBg: "bg-purple-500/8", tagBorder: "border-purple-500/15", tagText: "text-purple-400/70" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", tagBg: "bg-cyan-500/8", tagBorder: "border-cyan-500/15", tagText: "text-cyan-400/70" },
};

export function PainPoints() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              普通 AI 到企业里，往往卡在这四件事
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              VitaClaw 不是把技术词堆到首页，而是先解决“能不能干、怎么接入、能否复用、是否可控”。
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid: 2x2 Layout with Before/After comparisons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {painPoints.map((point, i) => {
            const s = accentStyles[point.accent];
            return (
              <ScrollReveal key={point.title} delay={i * 80}>
                <div
                  className={`h-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300 group`}
                >
                  {/* Top content area */}
                  <div className="p-7 grow flex flex-col">
                    <div className={`w-10 h-10 rounded-lg ${s.bg} ${s.border} flex items-center justify-center mb-5 shrink-0`}>
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed mb-6">{point.description}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {point.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${s.tagBg} ${s.tagText} ${s.tagBorder}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[#050810]/50 border-t border-white/[0.05] px-6 py-6 mt-auto">
                    <div className="grid gap-3">
                      <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-white/35">原来</span>
                          <span className="text-sm font-bold text-white/62">{point.beforeValue}</span>
                        </div>
                        <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                          <div className={`h-full w-[88%] rounded-full ${s.bg}`} />
                        </div>
                        <p className="text-xs text-white/42">{point.beforeLabel}</p>
                      </div>
                      <div className="rounded-xl border border-accent-green/20 bg-accent-green/[0.075] p-4">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-accent-green">VitaClaw</span>
                          <span className="text-sm font-bold text-accent-green">{point.afterValue}</span>
                        </div>
                        <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                          <div className="h-full w-[32%] rounded-full bg-accent-green" />
                        </div>
                        <p className="text-xs text-white/58">{point.afterLabel}</p>
                      </div>
                    </div>
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
