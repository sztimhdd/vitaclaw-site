import { useState, useCallback, useEffect } from "react";
import { HeroParticles } from "@/components/hero-particles";
import { ScrollReveal } from "@/components/scroll-reveal";

const heroWorkflows = [
  {
    id: "meeting",
    title: "会议与协同推进",
    users: "运营、行政、项目负责人",
    description: "把会议内容、决策和待办自动整理成可确认的执行清单，减少会后人工追踪。",
    tasks: ["会议纪要与待办拆解", "责任人和截止时间识别", "结果同步到协作流程"],
    image: "/screenshots/use-cases/meeting.png",
  },
  {
    id: "procurement",
    title: "采购比价与供应链响应",
    users: "采购、供应链、运营团队",
    description: "自动汇总库存、历史价格和供应商条款，生成待确认采购建议。",
    tasks: ["库存与采购记录读取", "供应商报价对比", "异常价格与条款标记"],
    image: "/screenshots/use-cases/supplychain.png",
  },
  {
    id: "hr",
    title: "HR 入转调离流程",
    users: "HR、行政、IT 协同团队",
    description: "按企业 SOP 检查材料、推动跨系统录入，并在权限变更前等待人工确认。",
    tasks: ["入转调离清单匹配", "OA 与权限节点同步", "流程状态和操作留痕"],
    image: "/screenshots/use-cases/hr.png",
  },
  {
    id: "finance",
    title: "财务对账与异常复核",
    users: "财务、审计、运营支持",
    description: "读取票据、表格和流水记录，输出可复核的异常清单与处理建议。",
    tasks: ["发票与流水核对", "差异项自动标记", "复核说明生成"],
    image: "/screenshots/use-cases/finance.png",
  },
];

export function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [heroVideoSrc, setHeroVideoSrc] = useState("/demo/hero.mp4");

  const openVideoModal = useCallback(() => setShowVideoModal(true), []);
  const closeVideoModal = useCallback(() => setShowVideoModal(false), []);

  useEffect(() => {
    if (!showVideoModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideoModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showVideoModal, closeVideoModal]);

  useEffect(() => {
    document.body.style.overflow = showVideoModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showVideoModal]);
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
      <HeroParticles />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0f172a]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy + Badges + CTA */}
          <div className="flex flex-col gap-6 sm:gap-8 pt-4">
            <ScrollReveal>
              <div>
                <h1 className="text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] tracking-normal mb-4">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    让 AI 真正替企业完成工作
                  </span>
                </h1>
                <p className="text-lg text-white/50 mt-4 leading-relaxed">
                  VitaClaw 让 AI Agent 安全操作企业系统、调用工具、执行流程并交付结果。从财务审核到供应链协同，在企业边界内完成可追溯的自动执行。
                </p>
              </div>
            </ScrollReveal>

            {/* Social proof badges */}
            <ScrollReveal delay={50}>
              <div className="text-sm text-white/50 flex flex-wrap items-center gap-x-1.5">
                <span>面向中小企业与跨系统流程团队</span>
                <span className="text-white/20" aria-hidden="true">&middot;</span>
                <span>人工确认关键节点</span>
                <span className="text-white/20" aria-hidden="true">&middot;</span>
                <span>本地 PlanB M1 demo 可试用</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="/trial/select"
                  className="px-7 py-3 rounded-lg bg-white text-[#0f172a] font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  申请试用
                </a>
                <button
                  type="button"
                  onClick={openVideoModal}
                  className="px-7 py-3 rounded-lg border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/40 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  观看真实 Demo
                </button>
                <a
                  href="/kb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg border border-white/[0.08] text-white/50 font-medium text-[15px] hover:border-accent/30 hover:text-white/80 transition-all duration-200 inline-flex items-center gap-2"
                  title="企小勤 AI 技术知识库"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                  </svg>
                  浏览技术文章
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product video - enlarged */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <ScrollReveal delay={200} className="w-full">
              <div className="w-full rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0a0f1e] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-500 will-change-transform" onClick={openVideoModal}>
                <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-[#0f172a]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>
                  <div className="ml-4 text-[13px] font-medium text-white/40 tracking-wide font-mono">
                    VitaClaw · Agent 执行流
                  </div>
                  {/* Expand hint */}
                  <svg className="ml-auto w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
                <div className="relative w-full aspect-video bg-[#050810]">
                  <video 
                    src={heroVideoSrc} 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    onError={(e) => {
                      if (heroVideoSrc !== "/video-demo.mp4") {
                        setHeroVideoSrc("/video-demo.mp4");
                        return;
                      }
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 hidden rounded-lg border border-white/[0.08] bg-black/55 px-4 py-3 text-xs text-white/55 backdrop-blur-sm sm:block">
                    示例：接收任务 → 拆解步骤 → 调用企业系统 → 生成结果 → 人工确认
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scenario cards — replace abstract metric banner with product-facing use cases */}
        <ScrollReveal delay={250}>
          <div className="mt-20 lg:mt-28">
            <div className="mb-10 text-center">
              <h2 className="text-[clamp(32px,5vw,64px)] font-black leading-tight tracking-normal text-white">
                全场景 AI Agent 工作搭子
              </h2>
              <p className="mt-4 text-base text-white/55 sm:text-lg">
                从会议、采购到财务对账，让用户先看到“AI 正在替我处理真实办公流程”。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {heroWorkflows.map((workflow) => (
                <a
                  key={workflow.title}
                  href="#scenarios"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("vitaclaw-scenario-change", { detail: workflow.id }));
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.055] shadow-[0_24px_90px_-54px_rgba(34,211,160,0.55)] transition-all duration-300 hover:border-accent-green/35 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`查看${workflow.title}场景演示`}
                >
                  <div className="relative aspect-[16/10] bg-[#050810]">
                    <img
                      src={workflow.image}
                      alt={`${workflow.title} 产品截图`}
                      className="absolute inset-0 h-full w-full object-cover object-left-top opacity-90 transition-transform duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/70 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-accent-green/20 bg-accent-green/[0.12] px-3 py-1 text-xs font-semibold text-accent-green backdrop-blur">
                      真实录屏截图
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold text-white/75 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      查看执行过程
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl font-black leading-tight tracking-normal text-white">{workflow.title}</h3>
                    <div className="mt-4 text-sm font-semibold text-white/45">推荐用户：{workflow.users}</div>
                    <p className="mt-4 text-sm leading-7 text-white/58">{workflow.description}</p>
                    <div className="mt-5">
                      <div className="mb-2 text-xs font-semibold text-accent-green">典型任务</div>
                      <ul className="space-y-2">
                        {workflow.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm leading-6 text-white/55">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" aria-hidden="true" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Fullscreen video modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={closeVideoModal}
          style={{ animation: "fadeIn 200ms ease forwards" }}
        >
          <div
            className="relative w-[92vw] sm:w-[80vw] max-w-[1200px] h-[75vh] max-h-[800px] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scaleIn 200ms ease forwards" }}
          >
            {/* Title bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/[0.08] bg-[#0f172a]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="ml-3 text-sm text-white/50 font-mono tracking-wide">VitaClaw · Agent 执行流</div>
              <button
                onClick={closeVideoModal}
                className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="关闭"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Video */}
            <div className="h-[calc(100%-52px)] bg-black flex items-center justify-center">
              <video
                src={heroVideoSrc}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
                onError={() => {
                  if (heroVideoSrc !== "/video-demo.mp4") {
                    setHeroVideoSrc("/video-demo.mp4");
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
