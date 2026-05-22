import { useState, useCallback, useEffect } from "react";
import { HeroParticles } from "@/components/hero-particles";
import { ScrollReveal } from "@/components/scroll-reveal";

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
                    你的第一个 AI 业务助手
                  </span>
                </h1>
                <p className="text-lg text-white/50 mt-4 leading-relaxed">
                  VitaClaw 可以自动整理资料、处理流程、操作系统、生成结果，帮企业完成原本需要多人协作的日常工作。
                </p>
                <p className="text-lg text-white/50 mt-3 leading-relaxed">
                  从 Excel 到 ERP，从审批到跟单，让 AI 真正参与业务执行。
                </p>
              </div>
            </ScrollReveal>

            {/* Social proof badges */}
            <ScrollReveal delay={50}>
              <div className="text-sm text-white/50 flex flex-wrap items-center gap-x-1.5">
                <span>适合中小企业快速落地</span>
                <span className="text-white/20" aria-hidden="true">&middot;</span>
                <span>支持人工审核</span>
                <span className="text-white/20" aria-hidden="true">&middot;</span>
                <span>本地 Demo 可试用</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="/trial/select"
                  className="px-7 py-3 rounded-lg bg-white text-[#0f172a] font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  立即体验
                </a>
                <button
                  type="button"
                  onClick={openVideoModal}
                  className="px-7 py-3 rounded-lg border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/40 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  观看演示
                </button>
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
