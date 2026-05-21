export function AudienceBar() {
  return (
    <div id="audiences" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 pb-8 relative z-20">
      <div className="rounded-2xl border border-card-border bg-card/85 backdrop-blur-sm px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent-green uppercase">适合这些团队先试起来</p>
            <p className="mt-1 text-sm text-white/55">中小企业、运营团队，以及财务 / 采购 / HR / 行政等跨系统流程负责人。</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["财务对账", "采购比价", "HR 入转调离", "会议纪要", "审批流转"].map((item) => (
              <a
                key={item}
                href="#scenarios"
                className="inline-flex min-h-9 items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-white/10 hover:border-accent/30 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
