export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent">
                <span className="text-xs font-bold text-white">V</span>
              </div>
              <span className="font-semibold text-sm">VitaClaw</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              企小勤数字员工平台<br />
              企业级高可信数字员工底座
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">产品</h4>
            <ul className="space-y-2">
              {["安全可控", "能力闭环", "高效落地", "企业级运维", "定价"].map((item) => (
                <li key={item}><a href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">资源</h4>
            <ul className="space-y-2">
              {["技术文档", "API 参考", "技能生态", "案例研究", "博客"].map((item) => (
                <li key={item}><a href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">关于</h4>
            <ul className="space-y-2">
              {["公司介绍", "核心团队", "联系我们", "加入我们", "隐私政策"].map((item) => (
                <li key={item}><a href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} 杭州银成信息技术有限公司. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["浙ICP备XXXXXXXX号", "隐私政策", "服务条款"].map((item) => (
              <a key={item} href="#" className="text-xs text-muted hover:text-foreground transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
