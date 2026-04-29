import { ScrollReveal } from "@/components/scroll-reveal";
import { ScreenshotImg } from "@/components/screenshot-img";

const modules = [
  {
    number: "01",
    title: "资产化",
    subtitle: "Skills Platform",
    description: "将 Know-how 固化为企业数字资产，人员离职能力不流失",
    items: [
      "全面兼容 OpenSkills 标准",
      "业务逻辑永久沉淀为可复用 AI 技能包",
      "私有技能自定义开发与版本管理",
      "技能应用商店，开箱即用",
    ],
    accent: "blue" as const,
  },
  {
    number: "02",
    title: "闭环执行",
    subtitle: "Agent Loop",
    description: "长程任务的端到端闭环，基于 CMA 混合记忆架构",
    items: [
      "多步骤任务自主拆解与规划",
      "跨系统数据回填与操作执行",
      "执行思维链 (CoT) 全程可追溯",
      "准确率超 98%，终结 AI 幻觉",
    ],
    accent: "green" as const,
  },
  {
    number: "03",
    title: "工业级运维",
    subtitle: "Sentinel",
    description: "全链路可观测的&ldquo;数字宪兵&rdquo;，20 年金融级运维经验代码化",
    items: [
      "Agent 集群实时监控驾驶舱",
      "算力弹性调度与故障自愈",
      "Merkle Tree 法证级审计日志",
      "多租户权限隔离与配额管理",
    ],
    accent: "purple" as const,
  },
];

const accentMap = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", ring: "ring-blue-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", ring: "ring-green-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", ring: "ring-purple-500/20" },
};

export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">
              三大战略模块
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              从技能构建到闭环执行再到<wbr />工业级运维
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              覆盖数字员工全生命周期，让 AI 在政企场景真正落地
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.number} delay={i * 80}>
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300">
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] select-none leading-none">
                  {mod.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${accentMap[mod.accent].bg}`}>
                      <svg className={`w-5 h-5 ${accentMap[mod.accent].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-white/40">{mod.number}</div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                        <span className={`text-sm font-mono ${accentMap[mod.accent].text}`}>{mod.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  <ul className="space-y-2.5">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/45">
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${accentMap[mod.accent].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Screenshots */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { src: "/screenshots/memory-knowledge.png", alt: "短期中期长期记忆系统与知识图谱加成的企业知识库", fallback: "记忆系统截图加载中...", caption: "CMA 混合记忆架构 — 企业知识图谱深度嵌入 AI 决策链" },
            { src: "/screenshots/self-learning.png", alt: "自学习自进化的数字员工自主生成技能", fallback: "自学习截图加载中...", caption: "自学习自进化 — 数字员工自主生成业务执行技能" },
            { src: "/screenshots/ops-management.png", alt: "企业级智能体运维管理能力", fallback: "运维管理截图加载中...", caption: "工业级运维 — Agent 集群监控与算力弹性调度" },
          ].map((img, i) => (
            <ScrollReveal key={img.alt} delay={200 + i * 80}>
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.16] transition-all duration-300">
                <ScreenshotImg
                  src={img.src}
                  alt={img.alt}
                  fallbackText={img.fallback}
                  minHeight="min-h-[160px]"
                />
                <div className="px-4 py-3 border-t border-white/[0.08] bg-black/30">
                  <p className="text-xs text-white/45 text-center">{img.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
