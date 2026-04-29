export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Qualifications Wall */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-8">
           资质与认证
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "CMMI5", desc: "软件能力成熟度认证" },
              { label: "国家高新技术企业", desc: "国家级技术创新认证" },
              { label: "信创国产化 100% 适配", desc: "国产芯片/OS/数据库" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-card-border bg-card px-6 py-4 text-center hover:border-accent/30 transition-colors">
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent">
                <span className="text-xs font-bold text-white">V</span>
              </div>
              <span className="font-semibold text-sm">VitaClaw</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              企业级受控执行运行时<br />
              定义智能执行时代的工业安全标准
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">产品</h4>
            <ul className="space-y-2">
              {["安全哲学", "核心能力", "技术架构", "灵活部署"].map((item) => (
                <li key={item}><a href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">资源</h4>
            <ul className="space-y-2">
              {["技术文档", "API 参考", "技能生态", "案例研究"].map((item) => (
                <li key={item}><a href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">关于</h4>
            <ul className="space-y-2">
              {["公司介绍", "联系我们", "隐私政策", "服务条款"].map((item) => (
                <li key={item}><a href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm font-semibold text-foreground mb-2">
            VitaClaw &mdash; 定义智能执行时代的工业安全标准
          </p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} VitaClaw (企小勤). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
