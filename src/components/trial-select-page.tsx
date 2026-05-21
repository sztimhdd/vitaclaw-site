export function TrialSelectPage() {
  return (
    <div className="relative bg-background text-foreground min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-35" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[130px]" />

      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <a
          href="/"
          className="inline-flex min-h-10 items-center rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 text-sm text-white/60 hover:text-white hover:border-white/[0.18] transition-colors duration-150"
        >
          返回首页
        </a>

        <div className="mt-6 mb-10">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent-green/20 bg-accent-green/[0.08] px-4 py-1.5 text-sm text-accent-green">
            本地 PlanB M1 demo
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            选择试用环境
          </h1>
          <p className="mt-3 text-white/55 text-base sm:text-lg max-w-3xl">
            本页只连接本地演示租户，不创建账号、不连接 control plane、不自动开通正式服务。若 tenant runtime 未启动，可先确认链接地址。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-6 shadow-[0_20px_60px_-35px_rgba(59,130,246,0.45)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">tenantA</h2>
              <span className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/45">3101</span>
            </div>
            <p className="mt-2 text-sm text-white/45">本地地址：http://localhost:3101</p>
            <p className="mt-3 text-sm leading-6 text-white/50">用于演示一个标准租户环境下的 AI Agent 办公流程。</p>
            <a
              href="http://localhost:3101"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white text-[#0f172a] px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              进入 tenantA
            </a>
          </article>

          <article className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-6 shadow-[0_20px_60px_-35px_rgba(34,211,160,0.35)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">tenantB</h2>
              <span className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs text-white/45">3102</span>
            </div>
            <p className="mt-2 text-sm text-white/45">本地地址：http://localhost:3102</p>
            <p className="mt-3 text-sm leading-6 text-white/50">用于对比另一个本地租户入口，验证选择页功能不复杂化。</p>
            <a
              href="http://localhost:3102"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/20 text-white/80 px-4 py-2.5 text-sm font-semibold hover:border-white/40 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              进入 tenantB
            </a>
          </article>
        </div>

        <p className="mt-8 text-xs leading-6 text-white/35">
          提醒：如果本地 tenant runtime 没有启动，点击后浏览器可能无法打开对应服务；本页只负责保留正确入口。
        </p>
      </main>
    </div>
  );
}
