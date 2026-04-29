import { ScreenshotImg } from "@/components/screenshot-img";

const layers = [
  { title: "Rust 企业级安全内核", items: ["内存安全，无GC", "零成本抽象", "原生WebAssembly支持"] },
  { title: "KVM/Wasm 多层沙盒", items: ["宿主机级强隔离", "独立执行空间", "五层十六道安全防线"] },
  { title: "eBPF 内核级追踪", items: ["物理层 Syscall 捕获", "Merkle Tree 审计日志", "不可篡改证据链"] },
  { title: "受控指令网关", items: ["DSL 栅栏权限校验", "Limit 限额检查", "控制面与数据面分离"] },
  { title: "无侵入集成中间件", items: ["ChatKit SDK", "不改旧系统代码", "最快1周场景适配"] },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">技术护城河</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text-blue">原生 Rust 内核</span> + eBPF 追踪审计 + 自学习自进化 + 无侵入集成
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            构建&ldquo;做了可查、乱做必断&rdquo;的五层十六道安全防线，定义工业级受控执行运行时标准
          </p>
        </div>

        <div className="relative rounded-2xl border border-card-border bg-card p-8 sm:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="inline-block rounded-xl border border-accent/30 bg-accent/5 px-6 py-3 mb-6">
              <span className="text-sm font-semibold text-accent">五层十六道安全防线</span>
            </div>
          </div>

          {/* Screenshot: Core architecture */}
          <div className="mb-8 rounded-xl border border-card-border overflow-hidden hover:border-accent/20 transition-all duration-300">
            <ScreenshotImg
              src="/screenshots/core-architecture.png"
              alt="VitaClaw自主核心架构图"
              fallbackText="架构图加载中..."
            />
          </div>

          <div className="space-y-3">
            {layers.map((layer, i) => (
              <div key={layer.title} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-card-border bg-black/40 p-4 hover:border-accent/20 transition-colors">
                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-mono">{i + 1}</div>
                  <span className="text-sm font-medium">{layer.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 text-xs text-muted">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block rounded-xl border border-white/10 bg-white/5 px-6 py-3">
              <span className="text-sm text-muted">控制面与数据面分离 · 数据面部署在客户本地 VPC（BYOC），敏感数据不出域、不上云</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "99.99%", label: "平台可用率" },
            { value: "99.2%", label: "任务成功率" },
            { value: "80%", label: "落地成本降低" },
            { value: "1 周", label: "场景适配周期" },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-card-border bg-card p-6">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
