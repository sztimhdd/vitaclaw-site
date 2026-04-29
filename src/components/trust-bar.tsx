const bankLogos = [
  "中国工商银行", "中国农业银行", "中国银行", "中国建设银行",
  "交通银行", "招商银行", "浦发银行", "中信银行",
  "兴业银行", "平安银行", "光大银行", "民生银行",
];

export function TrustBar() {
  const doubled = [...bankLogos, ...bankLogos];

  return (
    <section className="relative py-12 bg-section-alt overflow-hidden border-b border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-white/20 mb-6 tracking-widest uppercase">
          已服务 200+ 头部商业银行
        </p>

        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex gap-8"
            style={{
              animation: "marquee 25s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((bank, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[52px] h-[52px] rounded-[10px] bg-white/[0.06] border border-white/[0.12] text-[13px] font-semibold text-white/70 tracking-[0.02em] shrink-0 hover:bg-white/[0.10] hover:border-white/[0.25] hover:text-white/95 transition-all duration-200"
              >
                {bank[0]}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-white/15 mt-4">
          基于隐私保护要求，部分客户信息已脱敏处理
        </p>
      </div>
    </section>
  );
}
