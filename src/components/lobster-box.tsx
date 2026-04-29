import { ScrollReveal } from "@/components/scroll-reveal";
import { ScreenshotImg } from "@/components/screenshot-img";

const flowSteps = ["DSL 栅栏", "eBPF 捕获", "权限校验", "审计入库"];

export function LobsterBox() {
  return (
    <section id="security" className="relative py-24 sm:py-32 bg-section-alt overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-1.5 text-sm text-blue-400/70 mb-6">
              核心安全哲学
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              &ldquo;做了可查，乱做必断&rdquo;
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              让 AI 在安全边界内高效作业 &mdash; 这是 VitaClaw 的第一性原理
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mb-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              以&ldquo;安全为根、执行为本、兼容为要、易用为纲&rdquo;
            </h3>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              平衡政企客户对 AI 效率与安全合规的需求，打造和定义
              AI 数字员工时代的工业级架构、能力和技术标准
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Block A — Active Enforcement (large) */}
          <ScrollReveal delay={150}>
            <div className="lg:col-span-2 relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12 overflow-hidden hover:border-blue-500/30 transition-all duration-500 group">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-blue-500/0" />

              <div className="pl-5 relative z-10">
                <span className="text-xs font-semibold tracking-widest text-blue-400/70 uppercase mb-3 block">
                  Active Enforcement
                </span>
                <h3 className="text-lg font-semibold text-white mb-4">
                  &ldquo;做了可查，<span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-400/60">乱做必断</span>&rdquo;
                </h3>
                <p className="text-white/50 text-base leading-relaxed max-w-lg mb-6">
                  基于 eBPF 动态追踪捕获物理级 Syscall，毫秒级识别并拦截越权操作。
                  Agent 指令经 DSL 栅栏权限校验后方可执行，全链路行为审计日志不可篡改。
                </p>

                {/* Flow arrows */}
                <div className="flex items-center gap-2 flex-wrap">
                  {flowSteps.map((step, i, arr) => (
                    <span key={step}>
                      <span className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/[0.10] text-white/70">
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <svg className="inline-block w-3 h-3 text-white/25 mx-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7.293 4.707a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <ScrollReveal delay={200}>
              <div className="relative flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 overflow-hidden hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-[10px] font-semibold tracking-widest text-blue-400/70 uppercase mb-3 block">Data Sovereignty</span>
                  <h4 className="text-lg font-semibold text-white mb-3">零 PII 出域的 BYOC 架构</h4>
                  <p className="text-sm text-white/45 leading-relaxed mb-5">
                    数据面部署于客户本地 VPC。敏感隐私数据不上云，仅脱敏后的语义指令发往大模型。
                  </p>
                  <ul className="space-y-2 text-sm text-white/45">
                    {["数据 100% 不出域", "控制面与数据面分离", "客户自主可控"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="relative flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 overflow-hidden hover:border-white/[0.16] hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-[10px] font-semibold tracking-widest text-orange-400/70 uppercase mb-3 block">极致性能</span>
                  <h4 className="text-lg font-semibold text-white mb-3">原生 Rust 执行引擎</h4>
                  <p className="text-sm text-white/45 leading-relaxed mb-5">
                    内存安全、极致性能。彻底解决 Python 架构在高并发下的稳定性瓶颈。
                  </p>
                  <ul className="space-y-2 text-sm text-white/45">
                    {["内存安全无 GC", "零成本抽象", "99.99% 平台可用率"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-10">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.16] transition-all duration-300">
              <ScreenshotImg
                src="/screenshots/security-sandbox.jpg"
                alt="五层十六道安全防线架构图"
                fallbackText="架构图加载中..."
              />
            </div>
            <p className="text-center text-xs text-white/25 mt-3">五层十六道纵深防御体系 &mdash; 从内核到应用层的全链路安全防线</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
