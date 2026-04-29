export function DevExperience() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">
            开发者体验
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            像部署网站一样<wbr />部署你的 AI 数字员工团队
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            全面兼容 OpenSkills 标准与 MCP 协议，无需从零开发，无缝接入现有生态
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CLI Code Block */}
          <div className="rounded-2xl border border-card-border bg-card overflow-hidden hover:border-accent/30 transition-all duration-300 mb-8">
            {/* Terminal header */}
            <div className="border-b border-card-border bg-black/40 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted font-mono ml-3">Terminal</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted/50">
                <span className="hidden sm:inline">vitaclorctl &mdash; CLI v2.5.0</span>
              </div>
            </div>
            {/* Terminal body */}
            <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed bg-black/60">
              <div className="text-green-400 mb-2">
                <span className="text-muted"># 安装 OpenClaw 技能包</span>
              </div>
              <div className="mb-3">
                <span className="text-muted">$ </span>
                <span className="text-foreground">vitaclorctl skill install openclaw/skills/finance-approval</span>
              </div>
              <div className="text-green-400/80 mb-2">
                <span className="text-muted"># 输出</span>
              </div>
              <div className="mb-3 space-y-0.5">
                <div className="text-muted">&rarr; 正在解析技能包: <span className="text-accent">finance-approval@1.2.0</span></div>
                <div className="text-muted">&rarr; 验证签名: <span className="text-green-400">&#x2713; 通过</span></div>
                <div className="text-muted">&rarr; 安全审计: <span className="text-green-400">&#x2713; 五层十六道防线已就绪</span></div>
                <div className="text-accent">&rarr; 部署完成! 耗时 1.2s</div>
              </div>
              <div className="text-green-400 mb-2 mt-4">
                <span className="text-muted"># 部署数字员工</span>
              </div>
              <div>
                <span className="text-muted">$ </span>
                <span className="text-foreground">vitaclorctl agent deploy --name 报销审核专员 --skill finance-approval</span>
              </div>
              <div className="mt-2 text-green-400">
                &rarr; 数字员工 <span className="text-accent">报销审核专员</span> 已上线 (replica=3, region=华东)
              </div>
            </div>
          </div>

          {/* Ecosystem tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "OpenClaw", desc: "技能生态" },
              { label: "MCP", desc: "协议兼容" },
              { label: "OpenSkills", desc: "标准认证" },
              { label: "ChatKit SDK", desc: "无侵入集成" },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 hover:border-accent/30 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <span className="text-xs text-muted">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center">
            <p className="text-sm text-muted">
              兼容 OpenClaw 生态的 Skills 市场 &middot; 通过 MCP 协议连接 200+ 企业工具 &middot; 支持 BYOC 私有化部署
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
