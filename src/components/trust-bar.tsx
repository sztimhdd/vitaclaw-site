const bankClients = [
  "中国工商银行", "中国农业银行", "中国银行", "中国建设银行",
  "交通银行", "招商银行", "浦发银行", "中信银行",
  "兴业银行", "平安银行", "光大银行", "民生银行",
];

const govClients = [
  "浙江省政务", "杭州市民中心", "江苏省政务", "广东省政务",
  "四川省政务", "湖北省政务", "湖南省政务", "福建省政务",
];

function Marquee({ items, speed = "25s" }: { items: string[]; speed?: string }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex gap-8"
        style={{ animation: `marquee ${speed} linear infinite`, width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[52px] h-[52px] rounded-[10px] bg-white/[0.06] border border-white/[0.12] text-[13px] font-semibold text-white/70 tracking-[0.02em] shrink-0 hover:bg-white/[0.10] hover:border-white/[0.25] hover:text-white/95 transition-all duration-200"
          >
            {name[0]}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="relative py-12 bg-section-alt overflow-hidden border-b border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-white/20 mb-6 tracking-widest uppercase">
          已服务 200+ 银行及政府机构
        </p>
        <Marquee items={bankClients} speed="25s" />
        <div className="h-4" />
        <Marquee items={govClients} speed="35s" />
        <p className="text-center text-xs text-white/15 mt-4">
          基于隐私保护要求，部分客户信息已脱敏处理
        </p>
      </div>
    </section>
  );
}
