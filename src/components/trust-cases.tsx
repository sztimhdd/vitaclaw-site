import { ScrollReveal } from "@/components/scroll-reveal";
import { TrustCaseCard } from "@/components/trust-case-card";

const trustCases = [
  {
    id: 1,
    bank: "中国工商银行",
    metric: "审核效率 ↑ 3.5 倍",
    desc: "KYC 流程自动化，人工审核从 2 小时缩短至 30 分钟",
    color: "from-blue-500/20 to-blue-500/5",
    icon: "TrendingUp",
  },
  {
    id: 2,
    bank: "招商银行",
    metric: "风险漏检 ↓ 92%",
    desc: "反洗钱监测的智能赋能，合规风险显著降低",
    color: "from-emerald-500/20 to-emerald-500/5",
    icon: "Shield",
  },
  {
    id: 3,
    bank: "浦发银行",
    metric: "运维成本 ↓ 68%",
    desc: "智能体集群自动化管理，人工运维工作量大幅削减",
    color: "from-purple-500/20 to-purple-500/5",
    icon: "Zap",
  },
];

export function TrustCases() {
  return (
    <section id="trust-cases" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background atmos */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              客户成功故事
            </div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white mt-3">
              已为 200+ 商业银行带来可量化的成果
            </h2>
          </div>
        </ScrollReveal>

        {/* Customer showcase video */}
        <ScrollReveal delay={100}>
          <div className="mb-14 rounded-2xl border border-white/[0.08] bg-[#0c101a] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/[0.16] transition-all duration-500">
            {/* Window header */}
            <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-[#101420]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="ml-4 text-[13px] font-medium text-white/40 tracking-wide font-mono">
                客户落地成果演示
              </div>
            </div>
            {/* Video container */}
            <div className="relative w-full aspect-video bg-[#050810]">
              <video
                src="/video3.mp4"
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
              <div className="hidden absolute inset-0 flex items-center justify-center bg-[#050810] text-white/30 text-sm">
                视频加载中，请查看下方客户案例
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Case cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {trustCases.map((tc, i) => (
            <ScrollReveal key={tc.id} delay={200 + i * 100}>
              <TrustCaseCard {...tc} />
            </ScrollReveal>
          ))}
        </div>

        {/* Certification bar */}
        <ScrollReveal delay={500}>
          <div className="flex items-center justify-center gap-8 flex-wrap pt-8 border-t border-white/[0.08]">
            {[
              { label: "CMMI5", desc: "软件能力成熟度" },
              { label: "ISO 27001", desc: "信息安全管理" },
              { label: "信创适配", desc: "国产芯片/OS/DB" },
            ].map((cert) => (
              <div key={cert.label} className="flex flex-col items-center gap-1 px-4">
                <span className="font-semibold text-white/70 text-sm">{cert.label}</span>
                <span className="text-xs text-white/30">{cert.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
