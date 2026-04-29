import { ScrollReveal } from "@/components/scroll-reveal";

const badges = [
  {
    title: "五层十六道安全防线",
    description: "从 Rust 内核到应用层，纵深防御体系",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "信创国产化 100% 适配",
    description: "全面适配国产芯片、操作系统与数据库",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Merkle Tree 法证级审计",
    description: "不可篡改证据链，满足金融监管要求",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export function Trust() {
  return (
    <section id="trust" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">
              信任与合规
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              最严苛的行业选择了我们
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              为 200+ 商业银行及头部金融机构提供高可信 AI 执行保障
            </p>
          </div>
        </ScrollReveal>

        {/* Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {badges.map((badge, i) => (
            <ScrollReveal key={badge.title} delay={i * 80}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-center hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-5">
                  {badge.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{badge.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{badge.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={300}>
          <div className="text-center">
            <div className="text-xs text-white/30 font-medium tracking-widest uppercase mb-6">资质认证</div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "CMMI5", desc: "软件能力成熟度认证" },
                { label: "国家高新技术企业", desc: "国家级技术创新认证" },
                { label: "ISO 27001", desc: "信息安全管理体系" },
                { label: "信创国产化 100% 适配", desc: "国产芯片/OS/数据库" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-center hover:border-white/[0.16] transition-colors">
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs text-white/45">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
