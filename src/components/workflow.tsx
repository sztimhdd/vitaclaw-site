import { ScrollReveal } from "@/components/scroll-reveal";
import { ScreenshotImg } from "@/components/screenshot-img";

const modules = [
  {
    number: "01",
    title: "企业知识沉淀",
    subtitle: "Knowledge Asset",
    description: "把流程规则、表格口径和岗位经验沉淀为可复用的企业知识",
    items: [
      "从会议、表格、制度中提取可执行规则",
      "按企业自己的 SOP 组织步骤和边界",
      "人员变动时，流程经验不跟着流失",
      "新场景复用已有知识，而不是每次重讲",
    ],
    accent: "blue" as const,
  },
  {
    number: "02",
    title: "AI 自主执行",
    subtitle: "Autonomous Execution",
    description: "让 AI Agent 拆任务、调用工具、推进流程，并把结果交回给人确认",
    items: [
      "把一句业务指令拆成可检查的步骤",
      "跨系统读取、汇总、填写和生成报告",
      "执行状态可见，异常节点可追踪",
      "关键动作暂停，等待负责人确认",
    ],
    accent: "green" as const,
  },
  {
    number: "03",
    title: "企业级治理",
    subtitle: "Governance",
    description: "把 AI 的能力限制在企业允许的范围内，做到可观测、可阻断、可审计",
    items: [
      "按角色和流程定义 AI 可以做什么",
      "每一步操作都有记录，方便复盘",
      "私有化或本地环境可承接更高安全要求",
      "试用阶段明确边界，不替代生产审批",
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
    <section id="capabilities" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">
              核心能力
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              不是多一个聊天框，而是多一组可治理的执行能力
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              VitaClaw 把业务知识、Agent 执行和企业治理放在同一个闭环里，适合从一个高频流程开始验证。
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
            { src: "/screenshots/memory-knowledge.png", alt: "企业知识与流程记忆界面", fallback: "知识沉淀截图加载中...", caption: "企业知识沉淀 — 把制度、SOP 与历史记录转成可执行上下文" },
            { src: "/screenshots/self-learning.png", alt: "AI Agent 执行流程与技能生成界面", fallback: "执行流截图加载中...", caption: "执行流可视化 — 任务拆解、工具调用、结果复核集中展示" },
            { src: "/screenshots/ops-management.png", alt: "企业级 Agent 治理与运维管理能力", fallback: "治理界面截图加载中...", caption: "治理看板 — 权限、状态、日志与人工确认统一管理" },
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
