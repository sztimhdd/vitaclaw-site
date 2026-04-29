export function LobsterBox() {
  return (
    <section id="security" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-6">
            Lobster Box &mdash; 核心安全哲学
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            &ldquo;做了可查，乱做必断&rdquo;
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            让 AI 在安全边界内高效作业 &mdash; 这是 VitaClaw 的第一性原理
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Block A — Active Enforcement (large) */}
          <div className="lg:col-span-2 relative rounded-2xl border border-card-border bg-gradient-to-br from-card to-blue-950/10 p-8 sm:p-12 hover:border-accent/30 transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all duration-700" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-400 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Active Enforcement &middot; 实时拦截
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                &ldquo;做了可查，<span className="gradient-text-blue">乱做必断</span>&rdquo;
              </h3>
              <p className="text-muted text-base leading-relaxed max-w-lg mb-6">
                基于 eBPF 动态追踪捕获物理级 Syscall，毫秒级识别并拦截越权操作。
                Agent 指令经 DSL 栅栏权限校验后方可执行，全链路行为审计日志不可篡改。
              </p>
              <div className="flex flex-wrap gap-3">
                {["eBPF 物理级 Syscall 捕获", "毫秒级越权拦截", "Merkle Tree 审计日志"].map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted">{tag}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 text-muted/40">
                <svg className="w-5 h-5 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
                <span className="text-xs">DSL 栅栏 &rarr; eBPF 捕获 &rarr; 权限校验 &rarr; 审计入库</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Block B — Data Sovereignty */}
            <div className="relative flex-1 rounded-2xl border border-card-border bg-card p-8 hover:border-accent/30 transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400 mb-4">
                Data Sovereignty &middot; 隐私主权
              </div>
              <h4 className="text-lg font-bold mb-3">零 PII 出域的 BYOC 架构</h4>
              <p className="text-sm text-muted leading-relaxed mb-5">
                数据面部署于客户本地 VPC。敏感隐私数据不上云，
                仅脱敏后的语义指令发往大模型。
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {["数据 100% 不出域", "控制面与数据面分离", "客户自主可控"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-accent-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Block C — Performance */}
            <div className="relative flex-1 rounded-2xl border border-card-border bg-card p-8 hover:border-accent/30 transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-400 mb-4">
                Performance &middot; 硬核内核
              </div>
              <h4 className="text-lg font-bold mb-3">原生 Rust 执行引擎</h4>
              <p className="text-sm text-muted leading-relaxed mb-5">
                内存安全、极致性能。彻底解决 Python 架构在高并发下的稳定性瓶颈。
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {["内存安全无 GC", "零成本抽象", "99.99% 平台可用率"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-accent-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Screenshot: 5-layer sandbox security */}
        <div className="mt-10">
          <div className="rounded-2xl border border-card-border overflow-hidden hover:border-accent/30 transition-all duration-300">
            <img
              src="/screenshots/security-sandbox.jpg"
              alt="五层十六道安全防线架构图"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-xs text-muted/50 mt-3">五层十六道纵深防御体系 &mdash; 从内核到应用层的全链路安全防线</p>
        </div>
      </div>
    </section>
  );
}
