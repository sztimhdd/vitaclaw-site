const footerLinks = [
  {
    title: "产品",
    links: [
      { label: "核心能力", href: "#workflow" },
      { label: "技术架构", href: "#architecture" },
      { label: "定价方案", href: "#business" },
      { label: "信任合规", href: "#trust" },
    ],
  },
  {
    title: "资源",
    links: [
      { label: "技术文档", href: "#" },
      { label: "API 参考", href: "#" },
      { label: "技能生态", href: "#" },
      { label: "案例研究", href: "#" },
    ],
  },
  {
    title: "关于",
    links: [
      { label: "公司介绍", href: "#" },
      { label: "联系我们", href: "#contact" },
      { label: "隐私政策", href: "#" },
      { label: "服务条款", href: "#" },
    ],
  },
];

const badges = ["CMMI5", "国家高新", "信创适配"];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.08] pt-16 pb-10 bg-[#080c14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Logo + 3 link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand column (spans 2) */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/VitaClaw-Logo-v0.png" alt="VitaClaw Logo" className="h-8 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
              <div className="hidden w-7 h-7 rounded-md bg-white/90 items-center justify-center">
                <span className="text-[#080c14] font-bold text-sm">V</span>
              </div>
              <span className="font-semibold text-white">VitaClaw</span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[240px]">
              企业级受控执行运行时<br />
              定义智能执行时代的工业安全标准
            </p>
            {/* Certification badges */}
            <div className="flex gap-2 mt-5 flex-wrap">
              {badges.map((b) => (
                <span key={b} className="text-[11px] px-2 py-1 rounded border border-white/[0.10] text-white/35">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-4">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-white/50 hover:text-white transition-colors duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 flex items-center justify-between flex-wrap gap-4">
          <span className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} VitaClaw (企小勤). All rights reserved.
          </span>
          <div className="flex gap-5">
            {["隐私政策", "服务条款"].map((l) => (
              <a key={l} href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors duration-150">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
