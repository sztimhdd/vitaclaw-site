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
    accent: "blue",
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
    accent: "green",
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
    accent: "purple",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">
            三大战略模块
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            从技能构建到闭环执行再到<wbr />工业级运维
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
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] select-none leading-none">
                {mod.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                    mod.accent === "blue" ? "bg-accent/10" :
                    mod.accent === "green" ? "bg-green-500/10" :
                    "bg-purple-500/10"
                  }`}>
                    <svg className={`w-5 h-5 ${
                      mod.accent === "blue" ? "text-accent" :
                      mod.accent === "green" ? "text-green-400" :
                      "text-purple-400"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
