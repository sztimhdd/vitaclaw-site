const bankLogos = [
  "中国工商银行", "中国农业银行", "中国银行", "中国建设银行",
  "交通银行", "招商银行", "浦发银行", "中信银行",
  "兴业银行", "平安银行", "光大银行", "民生银行",
];

const badges = [
  {
    title: "五层十六道安全防线",
    description: "从 Rust 内核到应用层，纵深防御体系",
    icon: "shield",
  },
  {
    title: "信创国产化 100% 适配",
    description: "全面适配国产芯片、操作系统与数据库",
    icon: "chip",
  },
  {
    title: "Merkle Tree 法证级审计",
    description: "不可篡改证据链，满足金融监管要求",
    icon: "check",
  },
];

export function Trust() {
  return (
    <section className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">
            信任与合规
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            最严苛的行业选择了我们
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            为 200+ 商业银行及头部金融机构提供高可信 AI 执行保障
          </p>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-2xl border border-card-border bg-card p-8 text-center hover:border-accent/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-5">
                {badge.icon === "shield" ? (
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ) : badge.icon === "chip" ? (
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )}
              </div>
              <h3 className="text-base font-bold mb-2">{badge.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Logo Wall */}
        <div>
          <div className="text-center mb-10">
            <div className="text-xs text-muted font-medium tracking-widest uppercase">服务客户</div>
            <div className="text-lg text-muted mt-1">200+ 头部商业银行 &middot; 选用了 VitaClaw</div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {bankLogos.map((bank) => (
              <div
                key={bank}
                className="group rounded-xl border border-card-border bg-card/50 p-4 text-center hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-accent/20 transition-colors">
                  <span className="text-xs font-bold text-accent">{bank[0]}</span>
                </div>
                <div className="text-xs text-muted leading-tight">{bank}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-muted/50">
              基于隐私保护要求，部分客户信息已脱敏处理。排名不分先后。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
