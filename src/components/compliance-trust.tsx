import { ScrollReveal } from "@/components/scroll-reveal";

const securityLayers = [
  { title: "基础设施层", desc: "全私有化部署，数据不出域，适配信创国产化生态" },
  { title: "隔离执行层", desc: "独立运行沙盒，AI 操作在受限环境完成，代码级调用可验证" },
  { title: "核心引擎层", desc: "eBPF 动态监控，异常行为秒级自动识别与阻断" },
  { title: "能力平台层", desc: "SPIFFE 身份认证 + mTLS 加密传输，细粒度权限管控" },
  { title: "交互接入层", desc: "不可篡改审计日志，基于 Merkle Tree 的法证级追溯" },
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
              银行级安全，每一步可追溯
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              继承浙江优创 20 年金融监管科技基因，五层安全防线，确保 AI 在可控范围内高效执行
            </p>
          </div>
        </ScrollReveal>

        {/* KPI Metrics */}
        <ScrollReveal delay={50}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent-green mb-1">0.3s</div>
              <div className="text-xs text-white/40">执行级反馈</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">98%</div>
              <div className="text-xs text-white/40">检索准确率</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent-green mb-1">99.99%</div>
              <div className="text-xs text-white/40">平台可用率</div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-1">200+</div>
              <div className="text-xs text-white/40">银行服务网络</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Five Layers */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-10">
            <div className="inline-block rounded-xl border border-accent/30 bg-accent/[0.06] px-6 py-3">
              <span className="text-sm font-semibold text-accent">五层安全防线</span>
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
            <p className="text-xs text-white/30 mb-3">深度合规遵从</p>
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
