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
    <section id="trust-cases" className="py-24 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              客户成功故事
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white mt-3">
              已为 200+ 商业银行带来可量化的成果
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustCases.map((tc, i) => (
            <ScrollReveal key={tc.id} delay={i * 100}>
              <TrustCaseCard {...tc} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap pt-8 border-t border-white/[0.08]">
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
