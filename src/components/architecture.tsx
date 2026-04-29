import { ScrollReveal } from "@/components/scroll-reveal";
import { ScreenshotImg } from "@/components/screenshot-img";

const layers = [
  { title: "Rust 企业级安全内核", desc: "内存安全无 GC，零成本抽象，原生 WebAssembly 支持", items: [] },
  { title: "KVM/Wasm 多层沙盒", desc: "宿主机级强隔离，独立执行空间，五层十六道安全防线", items: [] },
  { title: "eBPF 内核级追踪", desc: "物理层 Syscall 捕获，Merkle Tree 审计日志，不可篡改证据链", items: [] },
  { title: "受控指令网关", desc: "DSL 栅栏权限校验，Limit 限额检查，控制面与数据面分离", items: [] },
  { title: "无侵入集成中间件", desc: "ChatKit SDK，不改旧系统代码，最快 1 周场景适配", items: [] },
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
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-400/60">原生 Rust 内核</span> + eBPF 追踪审计 + 自学习自进化 + 无侵入集成
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              构建&ldquo;做了可查、乱做必断&rdquo;的五层十六道安全防线，定义工业级受控执行运行时标准
            </p>
          </div>
        </ScrollReveal>

        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12 mb-12">
          <ScrollReveal delay={50}>
            <div className="text-center mb-8">
              <div className="inline-block rounded-xl border border-blue-500/30 bg-blue-500/[0.06] px-6 py-3 mb-6">
                <span className="text-sm font-semibold text-blue-400">五层十六道安全防线</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshot */}
          <ScrollReveal delay={100}>
            <div className="mb-8 rounded-xl border border-white/[0.08] overflow-hidden hover:border-white/[0.16] transition-all duration-300">
              <ScreenshotImg
                src="/screenshots/core-architecture.png"
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

        {/* Stats — unified with Hero: >98% 任务准确率 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: "99.99%", label: "平台可用率" },
            { value: ">98%", label: "任务准确率" },
            { value: "80%", label: "落地成本降低" },
            { value: "1 周", label: "场景适配周期" },
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
