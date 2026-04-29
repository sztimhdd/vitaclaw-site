export function AudienceBar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 pb-8 relative z-20">
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm px-6 py-4">
        <span className="text-sm text-muted shrink-0">快速导航：</span>
        <a href="#workflow" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-foreground hover:bg-white/10 hover:border-accent/30 transition-all">
          业务决策者 (CIO/CTO)
        </a>
        <a href="#architecture" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-foreground hover:bg-white/10 hover:border-accent/30 transition-all">
          技术架构师
        </a>
        <a href="#dev-experience" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-foreground hover:bg-white/10 hover:border-accent/30 transition-all">
          开发者
        </a>
      </div>
    </div>
  );
}
