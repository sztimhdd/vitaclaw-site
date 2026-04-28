const capabilities = [
  {
    number: "01",
    title: "安全可控",
    tagline: "五层十六道安全防线",
    description:
      "基于 Rust 企业级内核和 KVM/Wasm 多层沙盒，为每位数字员工构建独立执行空间。配合 eBPF 动态追踪，实现权限最小化与全链路行为审计，确证「做了可查、乱做必断」。",
    highlights: ["Rust 企业级安全内核", "KVM/Wasm 多层沙盒", "eBPF 动态追踪"],
  },
  {
    number: "02",
    title: "能力闭环",
    tagline: "自学习、自进化 + CMA 记忆架构",
    description:
      "通过 Skills 技能平台将业务经验转化为企业数字资产，确保 Know-how 永久沉淀。依托 CMA 混合记忆架构，将企业规章、SOP 及私有知识库深度嵌入 AI 决策链。",
    highlights: ["CMA 混合记忆架构", "企业知识图谱", "技能资产化沉淀"],
  },
  {
    number: "03",
    title: "高效落地",
    tagline: "兼容 OpenSkill + 无侵入集成",
    description:
      "全面兼容 OpenSkills 标准和 OpenClaw 技能生态，无需从零开发。配合无侵入集成中间件，最快 1 周即可在老旧或封闭系统中完成试点部署。",
    highlights: ["兼容 OpenSkill 生态", "无侵入集成中间件", "1 周极速部署"],
  },
  {
    number: "04",
    title: "企业级运维",
    tagline: "eBPF 内核追踪 + 20 年政企运维经验",
    description:
      "将 20 年金融级运维 Know-how 固化为'治理内建'的受控执行环境。依托 Merkle Tree 不可篡改证据链，彻底消除 Agent 的'语义黑盒'。",
    highlights: ["Merkle Tree 审计", "99.99% 可用率", "故障自愈弹性调度"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">
            产品与解决方案
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            安全可控 · 能力闭环 · 高效落地 · 企业级运维
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            一站式解决方案，彻底解决政企客户的核心痛点
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="group relative rounded-2xl border border-card-border bg-card p-8 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-mono text-accent mb-2">{cap.number}</div>
                  <h3 className="text-2xl font-bold mb-1">{cap.title}</h3>
                  <p className="text-sm text-accent">{cap.tagline}</p>
                </div>
                <div className="text-5xl font-bold text-white/5 select-none">{cap.number}</div>
              </div>
              <p className="text-muted leading-relaxed mb-6">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.highlights.map((h) => (
                  <span key={h} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
