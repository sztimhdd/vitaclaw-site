const footerLinks = [
  {
    title: "产品",
    links: [
      { label: "真实场景", href: "#scenario-shots" },
      { label: "演示视频", href: "#scenarios" },
      { label: "试点方式", href: "#pricing" },
      { label: "预约沟通", href: "#contact" },
    ],
  },
  {
    title: "资源",
    links: [
      { label: "AI 办公方法", href: "/kb/" },
      { label: "知识库", href: "/kb/" },
      { label: "公众号内容", href: "#" },
      { label: "场景案例", href: "#scenarios" },
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

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.08] pt-16 pb-10 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Logo + 3 link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand column (spans 2) */}
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <img src="/brand/vitaclaw-logo-colored-white-text-transparent-web.png" alt="VitaClaw 企小美" className="w-32 sm:w-40 h-auto object-contain" />
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[240px]">
              会干活的 AI 业务助手<br />
              从一个真实业务流程开始，让 AI 帮你整理资料、推进流程、生成结果，关键动作由人确认。
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {["会议", "采购", "员工流程", "财务"].map((b) => (
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
            &copy; {new Date().getFullYear()} VitaClaw (企小美). All rights reserved.
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
