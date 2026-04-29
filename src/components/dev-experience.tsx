import { ScrollReveal } from "@/components/scroll-reveal";

export function DevExperience() {
  return (
    <section id="dev-experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">
              开发者体验
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              为信创生态构建，<span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-400/60">为开发者而生</span>
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              标准化的指令网关与灵活的 Trait-based 组件化设计，轻松扩展 AI 的执行边界
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Terminal Code Block */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden hover:border-white/[0.16] transition-all duration-300 mb-8">
              <div className="border-b border-white/[0.08] bg-black/40 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-white/40 font-mono ml-3">Terminal &mdash; vitaclaw CLI</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed bg-black/60">
                <div className="text-green-400 mb-2">
                  <span className="text-white/40"># 部署受控执行空间</span>
                </div>
                <div className="mb-3">
                  <span className="text-white/40">$ </span>
                  <span className="text-white">vitaclaw deploy --sandbox=wasm --policy=strict</span>
                </div>
                <div className="text-green-400/80 mb-1">
                  <span className="text-white/40"># 输出</span>
                </div>
                <div className="mb-3 space-y-0.5">
                  <div className="text-white/40">&rarr; 沙盒环境初始化: <span className="text-green-400">Wasm 运行时就绪</span></div>
                  <div className="text-white/40">&rarr; 安全策略: <span className="text-blue-400">strict</span> (DSL 栅栏 + eBPF 追踪)</div>
                  <div className="text-blue-400">&rarr; 部署成功! 执行空间 ID: exec-7f9a2b (耗时 0.8s)</div>
                </div>
                <div className="text-green-400 mb-2 mt-4">
                  <span className="text-white/40"># 挂载企业私有技能</span>
                </div>
                <div className="mb-3">
                  <span className="text-white/40">$ </span>
                  <span className="text-white">vitaclaw skill add ./credit-audit-bot</span>
                </div>
                <div className="space-y-0.5">
                  <div className="text-white/40">&rarr; 技能包解析: <span className="text-green-400">&#x2713; 通过</span></div>
                  <div className="text-white/40">&rarr; 依赖检查: <span className="text-green-400">&#x2713; 全部满足</span></div>
                  <div className="text-green-400">&rarr; 安全防线已就绪 &mdash; 数字员工「信贷审核专员」已上线</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Ecosystem tags */}
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "OpenClaw", desc: "技能生态" },
                { label: "MCP", desc: "协议兼容" },
                { label: "OpenSkills", desc: "标准认证" },
                { label: "ChatKit SDK", desc: "无侵入集成" },
              ].map((item) => (
                <div key={item.label} className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 hover:border-white/[0.16] transition-colors">
                  <span className="text-sm font-medium text-white">{item.label}</span>
                  <span className="text-xs text-white/45">{item.desc}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
