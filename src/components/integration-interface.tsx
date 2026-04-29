import { ScrollReveal } from "@/components/scroll-reveal";
import { ScreenshotImg } from "@/components/screenshot-img";

export function IntegrationInterface() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">
              无侵入集成
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              点击流秒转对话流：定义<span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-400/60">&ldquo;零改动&rdquo;</span>集成标准
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              利用 ChatKit SDK 与无侵入集成中间件，无需改动现有 OA/ERP/CRM 系统的一行代码
            </p>
          </div>
        </ScrollReveal>

        {/* Contrast panels */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0a0e1a]">
            {/* Left: Legacy system */}
            <div className="p-6 border-r border-white/[0.08] relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-xs text-yellow-500/70">传统业务系统 &middot; 银行 ERP</span>
              </div>
              <div className="opacity-60 space-y-4">
                <div className="flex gap-2">
                  <div className="flex-1 h-9 rounded-lg border border-white/[0.10] bg-black/60 px-3 flex items-center">
                    <span className="text-xs text-white/40">客户编号 / 身份证号</span>
                  </div>
                  <div className="w-20 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-xs text-blue-400">查询</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-2 text-xs text-white/40 font-medium px-2">
                    <span>客户姓名</span><span>业务类型</span><span>状态</span><span>操作</span>
                  </div>
                  {[
                    { name: "***", type: "贷款申请", status: "审批中", op: "查看" },
                    { name: "***", type: "开户", status: "待处理", op: "办理" },
                    { name: "***", type: "转账", status: "已完成", op: "详情" },
                    { name: "***", type: "理财", status: "待审核", op: "审核" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 text-xs text-white/40 bg-black/30 rounded-lg px-2 py-2.5">
                      <span>{row.name}</span><span>{row.type}</span>
                      <span className={row.status === "已完成" ? "text-green-400" : row.status === "审批中" ? "text-yellow-400" : "text-white/40"}>{row.status}</span>
                      <span className="text-blue-400/60">{row.op}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-[11px] text-yellow-500/50 flex gap-3 flex-wrap">
                <span>&#x26A0; 数据孤岛</span>
                <span>&#x26A0; 多系统切换</span>
                <span>&#x26A0; 人工录入</span>
              </div>
            </div>

            {/* Center arrow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#080c14] border border-white/[0.15] flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Right: AI chat */}
            <div className="p-6 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400/70">VitaClaw &middot; 企小勤数字员工</span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs text-blue-400 font-bold">V</span>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl rounded-tl-sm bg-blue-500/10 border border-blue-500/20 px-4 py-3">
                      <p className="text-sm text-white">您好！已为您查询到客户信息：</p>
                      <div className="mt-2 space-y-1 text-xs text-white/50">
                        <div className="flex justify-between"><span>账户余额</span><span className="text-white font-mono">***,***.**</span></div>
                        <div className="flex justify-between"><span>最近交易</span><span className="text-white font-mono">2026-04-29</span></div>
                        <div className="flex justify-between"><span>贷款状态</span><span className="text-green-400 font-mono">正常</span></div>
                      </div>
                    </div>
                    <span className="text-[10px] text-white/25 mt-1 block">数字员工 &middot; 刚刚</span>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="max-w-[80%]">
                    <div className="rounded-2xl rounded-br-sm bg-blue-500 px-4 py-3">
                      <p className="text-sm text-white">请根据当前余额自动填报复核单，并发送审批提醒</p>
                    </div>
                    <span className="text-[10px] text-white/25 mt-1 block text-right">操作员 &middot; 刚刚</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs text-blue-400 font-bold">V</span>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl rounded-tl-sm bg-blue-500/10 border border-blue-500/20 px-4 py-3">
                      <p className="text-sm text-white">&#x2705; 复核单已自动生成，已发送至审批人待办事项</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/50">
                        <span className="inline-flex items-center gap-1 rounded-md border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-green-400">自动回填</span>
                        <span>耗时 0.3s</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-white/25 mt-1 block">数字员工 &middot; 刚刚</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-white/[0.08]">
                  <div className="flex-1 h-9 rounded-lg border border-white/[0.10] bg-black/40 px-3 flex items-center">
                    <span className="text-xs text-white/30">输入指令，数字员工将自动跨系统执行...</span>
                  </div>
                  <div className="w-16 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <ScrollReveal delay={100}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { value: "1 周", label: "老旧系统适配周期" },
              { value: "80%", label: "落地成本降低" },
              { value: "0 行", label: "现有系统代码改动" },
            ].map((stat) => (
              <div key={stat.label} className="text-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-400/60 mb-1">{stat.value}</div>
                <div className="text-xs text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3">
            <span className="text-xs text-white/45">驱动核心</span>
            <span className="h-3 w-px bg-white/[0.15]" />
            <span className="text-sm font-mono text-blue-400">ChatKit SDK</span>
            <span className="h-3 w-px bg-white/[0.15]" />
            <span className="text-xs text-white/45">无侵入集成中间件 &middot; 不改一行代码 &middot; 最快 1 周上线</span>
          </div>
        </div>

        {/* Video + Screenshot two-column */}
        <ScrollReveal delay={150}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left: Integration video */}
            <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0c101a] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/[0.16] transition-all duration-300">
              <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-[#101420]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                <div className="ml-4 text-[13px] font-medium text-white/40 tracking-wide font-mono">
                  零改动集成演示
                </div>
              </div>
              <div className="relative w-full aspect-video bg-[#050810]">
                <video
                  src="/Video 2.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 w-full h-full flex items-center justify-center bg-[#050810] text-white/30 text-sm">
                  视频加载中，请查看下方截图
                </div>
              </div>
            </div>

            {/* Right: SkillHub ecosystem screenshot */}
            <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.16] transition-all duration-300">
              <ScreenshotImg
                src="/screenshots/skillhub-ecosystem.png"
                alt="兼容OpenClaw的SkillHub技能生态"
                fallbackText="技能生态截图加载中..."
                className="w-full h-full object-cover"
                minHeight="min-h-[300px]"
              />
            </div>
          </div>
          <p className="text-center text-xs text-white/25 mt-3">左侧：无侵入集成实时演示 &mdash; 右侧：全面兼容 OpenClaw 技能生态，开放标准、私有技能自定义开发与版本管理</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
