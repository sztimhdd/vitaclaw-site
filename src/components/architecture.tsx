import { ScrollReveal } from "@/components/scroll-reveal";
import { ScreenshotImg } from "@/components/screenshot-img";

const layers = [
  { title: "高性能执行内核", desc: "原生 Rust 架构，7×24 不掉线，支持高并发业务场景", items: [] },
  { title: "KVM/Wasm 多层沙盒", desc: "独立执行空间，AI 在受限环境运行，操作可验证", items: [] },
  { title: "eBPF 实时安全监控", desc: "内核级系统调用捕获，异常行为秒级自动阻断", items: [] },
  { title: "不可篡改审计日志", desc: "Merkle Tree 加密存证，每一步 AI 操作均可法证级回溯", items: [] },
  { title: "无侵入集成", desc: "ChatKit SDK，不改旧系统代码，最快 1 周场景适配上线", items: [] },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">技术护城河</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              技术细节下沉，但关键边界讲清楚
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              前面的页面先讲业务结果；这里集中说明 IT 与安全团队会关心的执行隔离、监控、审计和本地环境边界。
            </p>
          </div>
        </ScrollReveal>

        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12 mb-12">
          <ScrollReveal delay={50}>
            <div className="text-center mb-8">
              <div className="inline-block rounded-xl border border-blue-500/30 bg-blue-500/[0.06] px-6 py-3 mb-6">
                <span className="text-sm font-semibold text-blue-400">面向正式试点的技术核查项</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshot */}
          <ScrollReveal delay={100}>
            <div className="mb-8 rounded-xl border border-white/[0.08] overflow-hidden hover:border-white/[0.16] transition-all duration-300">
              <ScreenshotImg
                src="/arch.png"
                alt="VitaClaw自主核心架构图"
                fallbackText="架构图加载中..."
              />
            </div>
          </ScrollReveal>

          {/* Layered shrink cards */}
          <div className="space-y-2 hidden md:block">
            {layers.map((layer, i) => (
              <ScrollReveal key={layer.title} delay={150 + i * 60}>
                <div
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-5 hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300"
                  style={{ marginLeft: `${i * 24}px`, marginRight: `${i * 24}px` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-white/10 tabular-nums font-mono">{`0${i + 1}`}</span>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white">{layer.title}</h4>
                      <p className="text-[13px] text-white/45 mt-0.5">{layer.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: flat layout (no shrink) */}
          <div className="space-y-2 md:hidden">
            {layers.map((layer, i) => (
              <div key={layer.title} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-5">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white/10 tabular-nums font-mono">{`0${i + 1}`}</span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white">{layer.title}</h4>
                    <p className="text-[13px] text-white/45 mt-0.5">{layer.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3">
              <span className="text-sm text-white/45">控制面与数据面分离 · 数据面部署在客户本地 VPC（BYOC），敏感数据不出域、不上云</span>
            </div>
          </div>
        </div>

        {/* Trust boundaries */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: "本地", label: "可评估私有环境" },
            { value: "隔离", label: "执行空间受限" },
            { value: "审计", label: "关键动作留痕" },
            { value: "确认", label: "高风险动作人工介入" },
          ].map((stat) => (
            <ScrollReveal key={stat.label} delay={100}>
              <div className="text-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/45">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
