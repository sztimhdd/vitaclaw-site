import { ScrollReveal } from "@/components/scroll-reveal";

const securityLayers = [
  { title: "本地 / 私有化边界", desc: "正式试点前确认数据、模型、日志是否需要留在客户环境内" },
  { title: "受限执行空间", desc: "AI Agent 在被授权的任务范围内操作，不能绕过企业流程" },
  { title: "实时监控与阻断", desc: "异常行为需要能被发现、暂停，并交给负责人处理" },
  { title: "身份与权限管理", desc: "按角色、系统、流程定义非人身份能访问和能执行的动作" },
  { title: "审计与复盘", desc: "每次关键操作保留记录，支持后续复核和责任追踪" },
];

export function ComplianceTrust() {
  return (
    <section id="trust" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">信任合规</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              可信不是口号，而是边界、确认和审计
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              SaaS 首页只承诺当前可验证的 demo 与试点路径。生产级接入需要结合客户环境确认权限、数据和审计要求。
            </p>
          </div>
        </ScrollReveal>

        {/* KPI Metrics */}
        <ScrollReveal delay={50}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent-green mb-1">人审</div>
              <div className="text-xs text-white/40">关键节点确认</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">留痕</div>
              <div className="text-xs text-white/40">执行过程记录</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent-green mb-1">隔离</div>
              <div className="text-xs text-white/40">试点环境边界</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">200+</div>
              <div className="text-xs text-white/40">金融政企服务经验</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Five Layers */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-10">
            <div className="inline-block rounded-xl border border-accent/30 bg-accent/[0.06] px-6 py-3">
              <span className="text-sm font-semibold text-accent">正式试点前的五类核查</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {securityLayers.map((layer, i) => (
            <ScrollReveal key={layer.title} delay={120 + i * 50}>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-white/[0.16] transition-all duration-300 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">{layer.title}</h4>
                    <p className="text-xs text-white/45 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compliance Standards */}
        <ScrollReveal delay={300}>
          <div className="mt-12 pt-10 border-t border-white/[0.08] text-center">
            <p className="text-xs text-white/30 mb-3">可按这些治理框架准备核查材料，具体合规结论需结合项目范围确认</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["EU AI Act", "ISO 42001", "NIST AI RMF", "等保 2.0", "信创适配"].map((std) => (
                <span key={std} className="text-[11px] px-3 py-1.5 rounded-full border border-white/[0.08] text-white/35">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
