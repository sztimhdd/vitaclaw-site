import { ScrollReveal } from "@/components/scroll-reveal";

const painPoints = [
  {
    icon: (
      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "AI 只会聊，不会干",
    description: "通用 AI 纸上谈兵，无法操作你的业务系统。复杂流程仍需人工在中途&ldquo;接棒&rdquo;，缺乏端到端执行能力。",
    tags: ["无法操作业务", "任务中断", "无法端到端"],
    accent: "red" as const,
    image: "/Pain-1.png",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "集成门槛高，改不动",
    description: "老旧 ERP/OA 没有 API 接口，改造风险大、成本高。OpenClaw 等开源方案部署复杂、报错频发，SME 根本搞不定。",
    tags: ["无 API 接口", "改造成本高", "部署复杂"],
    accent: "amber" as const,
    image: "/Pain-2.png",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "用完就丢，无法复用",
    description: "AI 技能无法沉淀为企业数字资产。每次新场景都要从头开发，缺乏统一的运维管控，难以支撑规模化应用。",
    tags: ["技能难沉淀", "运维缺失", "难以规模化"],
    accent: "purple" as const,
    image: "/Pain-3.png",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "安全不可控，怕 AI 闯祸",
    description: "通用 AI Agent 存在数据泄露、权限失控、操作误判等致命隐患。缺乏对非人身份的有效隔离与行为审计，企业不敢将核心业务交给 AI。",
    tags: ["数据泄露", "权限失控", "无审计"],
    accent: "cyan" as const,
    image: "/Pain-4.png",
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
              你的企业，真的用上了 AI 吗？
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              不是不想用——是现成的 AI 不会操作你的系统、部署太复杂、安全不可控、用完没法沉淀
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid: 2x2 Layout with images */}
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
                  
                  {/* Comparison visual area */}
                  <div className="bg-[#050810]/50 border-t border-white/[0.05] px-6 py-6 mt-auto">
                    <div className="w-full flex items-center justify-center">
                      <img 
                        src={point.image} 
                        alt={point.title} 
                        className="w-full max-w-[600px] h-auto object-contain rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                        loading="lazy"
                      />
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
