const modules = [
  {
    number: "01",
    title: "资产化",
    subtitle: "Skills",
    description: "将企业 Know-how 固化为数字资产，业务经验永久沉淀不流失",
    items: [
      "AI 技能应用商店，开箱即用",
      "兼容 OpenSkills 标准生态",
      "私有技能自定义开发与发布",
      "技能版本管理与灰度发布",
    ],
    accent: "blue",
  },
  {
    number: "02",
    title: "闭环执行",
    subtitle: "Agent Loop",
    description: "任务拆解、规划、执行、反馈 — 全生命周期端到端自动化",
    items: [
      "多步骤任务自主拆解与规划",
      "跨系统数据回填与操作执行",
      "执行思维链 (CoT) 全程可追溯",
      "异常自动重试与人工介入熔断",
    ],
    accent: "green",
  },
  {
    number: "03",
    title: "工业级运维",
    subtitle: "Sentinel",
    description: "99.99% 平台可用率，企业级 Agent 集群监控与弹性调度",
    items: [
      "Agent 集群实时监控驾驶舱",
      "算力弹性调度与故障自愈",
      "Merkle Tree 法证级审计日志",
      "多租户权限隔离与配额管理",
    ],
    accent: "purple",
  },
];

function ModuleIcon({ accent }: { accent: string }) {
  const colors: Record<string, string> = {
    blue: "text-accent",
    green: "text-green-400",
    purple: "text-purple-400",
  };
  return (
    <svg className={`w-5 h-5 ${colors[accent] || "text-accent"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">
            三大核心模块
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            从技能构建到执行闭环再到<wbr />工业级运维
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            覆盖数字员工全生命周期，让 AI 在政企场景真正落地
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group relative rounded-2xl border border-card-border bg-card p-8 hover:border-accent/30 transition-all duration-300"
            >
              {/* Number background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] select-none leading-none">
                {mod.number}
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                    mod.accent === "blue" ? "bg-accent/10" :
                    mod.accent === "green" ? "bg-green-500/10" :
                    "bg-purple-500/10"
                  }`}>
                    <ModuleIcon accent={mod.accent} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted">{mod.number}</div>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-xl font-bold">{mod.title}</h3>
                      <span className={`text-sm font-mono ${
                        mod.accent === "blue" ? "text-accent" :
                        mod.accent === "green" ? "text-green-400" :
                        "text-purple-400"
                      }`}>{mod.subtitle}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {mod.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${
                        mod.accent === "blue" ? "text-accent" :
                        mod.accent === "green" ? "text-green-400" :
                        "text-purple-400"
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom connector line */}
              {mod.number !== "03" && (
                <div className="hidden md:block absolute top-1/2 -right-2 text-muted/20">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
