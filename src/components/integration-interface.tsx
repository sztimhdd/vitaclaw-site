export function IntegrationInterface() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">
            无侵入集成
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            点击流秒转对话流：定义<span className="gradient-text-blue">&ldquo;零改动&rdquo;</span>集成标准
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            利用 ChatKit SDK 与无侵入集成中间件，无需改动现有 OA/ERP/CRM 系统的一行代码
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left — Legacy System */}
          <div className="relative rounded-2xl border border-card-border bg-card overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="border-b border-card-border bg-black/40 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              <span className="text-xs text-muted font-mono">传统业务系统 &middot; 银行 ERP</span>
              <div className="w-12" />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-2">
                <div className="flex-1 h-9 rounded-lg border border-card-border bg-black/60 px-3 flex items-center">
                  <span className="text-xs text-muted">客户编号 / 身份证号</span>
                </div>
                <div className="w-20 h-9 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-xs text-accent">查询</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-2 text-xs text-muted font-medium px-2">
                  <span>客户姓名</span><span>业务类型</span><span>状态</span><span>操作</span>
                </div>
                {[
                  { name: "***", type: "贷款申请", status: "审批中", op: "查看" },
                  { name: "***", type: "开户", status: "待处理", op: "办理" },
                  { name: "***", type: "转账", status: "已完成", op: "详情" },
                  { name: "***", type: "理财", status: "待审核", op: "审核" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 text-xs text-muted bg-black/30 rounded-lg px-2 py-2.5">
                    <span>{row.name}</span><span>{row.type}</span>
                    <span className={`${row.status === "已完成" ? "text-green-400" : row.status === "审批中" ? "text-yellow-400" : "text-muted"}`}>{row.status}</span>
                    <span className="text-accent/60">{row.op}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-xs text-yellow-400 backdrop-blur-sm">
                  &#x26A0; 数据孤岛 &middot; 多系统切换 &middot; 人工录入
                </div>
              </div>
            </div>
          </div>

          {/* Right — VitaClaw Chat Interface */}
          <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-card to-accent/[0.02] overflow-hidden hover:border-accent/50 transition-all duration-300">
            <div className="border-b border-accent/20 bg-accent/[0.03] px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              <span className="text-xs text-accent font-mono">VitaClaw &middot; 企小勤数字员工</span>
              <div className="w-12" />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs text-accent font-bold">V</span>
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl rounded-tl-sm bg-accent/10 border border-accent/20 px-4 py-3">
                    <p className="text-sm text-foreground">您好！已为您查询到客户信息：</p>
                    <div className="mt-2 space-y-1 text-xs text-muted">
                      <div className="flex justify-between"><span>账户余额</span><span className="text-foreground font-mono">***,***.**</span></div>
                      <div className="flex justify-between"><span>最近交易</span><span className="text-foreground font-mono">2026-04-28</span></div>
                      <div className="flex justify-between"><span>贷款状态</span><span className="text-green-400 font-mono">正常</span></div>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted/50 mt-1 block">数字员工 &middot; 刚刚</span>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="max-w-[80%]">
                  <div className="rounded-2xl rounded-br-sm bg-accent px-4 py-3">
                    <p className="text-sm text-white">请根据当前余额自动填报复核单，并发送审批提醒</p>
                  </div>
                  <span className="text-[10px] text-muted/50 mt-1 block text-right">操作员 &middot; 刚刚</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs text-accent font-bold">V</span>
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl rounded-tl-sm bg-accent/10 border border-accent/20 px-4 py-3">
                    <p className="text-sm text-foreground">&#x2705; 复核单已自动生成，已发送至审批人待办事项</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                      <span className="inline-flex items-center gap-1 rounded-md border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-green-400">自动回填</span>
                      <span>耗时 0.3s</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted/50 mt-1 block">数字员工 &middot; 刚刚</span>
                </div>
              </div>
              <div className="flex gap-2 pt-2 border-t border-accent/10">
                <div className="flex-1 h-9 rounded-lg border border-card-border bg-black/40 px-3 flex items-center">
                  <span className="text-xs text-muted">输入指令，数字员工将自动跨系统执行...</span>
                </div>
                <div className="w-16 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { value: "1 周", label: "老旧系统适配周期" },
            { value: "80%", label: "落地成本降低" },
            { value: "0 行", label: "现有系统代码改动" },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-card-border bg-card p-5">
              <div className="text-2xl font-bold gradient-text-green mb-1">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-3">
            <span className="text-xs text-muted">驱动核心</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-sm font-mono text-accent">ChatKit SDK</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-xs text-muted">无侵入集成中间件 &middot; 不改一行代码 &middot; 最快 1 周上线</span>
          </div>
        </div>

        {/* Screenshot: SkillHub ecosystem */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-card-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <img
              src="/screenshots/skillhub-ecosystem.png"
              alt="兼容OpenClaw的SkillHub技能生态"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-xs text-muted/50 mt-3">全面兼容 OpenClaw 技能生态 &mdash; 开放标准、私有技能自定义开发与版本管理</p>
        </div>
      </div>
    </section>
  );
}
