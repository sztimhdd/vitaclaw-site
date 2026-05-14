import { useState, useCallback, useEffect } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Scenario {
  id: string;
  label: string;
  icon: string;
  title: string;
  process: string;
  roi: string;
  detail: string;
  demoVideo?: string;
}

const scenarios: Scenario[] = [
  {
    id: "finance",
    label: "金融",
    icon: "🏦",
    title: "零售信贷审核",
    process: "观察申请材料 → 规划多维核查 → 行动跨系统比对 → 反思合规性",
    roi: "替代 3-5 名基础岗，审核效率提升 70%+",
    detail: "企小勤自动读取信贷申请材料，跨征信、税务、工商等系统进行多维核查比对，生成合规审核报告。全程留痕，每一步可审计。",
    demoVideo: "/demo/Demo-4-finance.mp4",
  },
  {
    id: "manufacturing",
    label: "制造",
    icon: "🏭",
    title: "供应链采购",
    process: "观察库存阈值 → 规划询价策略 → 行动自动下单 → 反思成本波动",
    roi: "采购响应周期从天级缩短至分钟级，零库存积压风险",
    detail: "企小勤实时监控库存数据，自动触发询价、比价、下单流程。异常价格波动秒级预警，采购全链路自动化。",
    demoVideo: "/demo/Demo-3-procurement.mp4",
  },
  {
    id: "gov",
    label: "政务",
    icon: "🏛️",
    title: "入转调离审批",
    process: "观察流程指令 → 规划多部门协同 → 行动自动权限变更 → 反思日志审计",
    roi: "人力投入降低 60%，流程 100% 合规",
    detail: "企小勤自动处理员工入职、转岗、调任、离职全流程，跨 OA、HR、IT 系统自动同步权限与档案。每一次操作均生成不可篡改审计日志。",
    demoVideo: "/demo/Demo-2-HR.mp4",
  },
  {
    id: "office",
    label: "通用办公",
    icon: "💼",
    title: "智能会议助理",
    process: "观察日程安排 → 规划物料准备 → 行动自动预约及任务拆解 → 反思准确度",
    roi: "员工从琐碎行政中解脱，聚焦高价值创造",
    detail: "企小勤自动管理会议日程，准备会议资料，会后拆解待办任务并下发到人。让会议从&ldquo;开了就忘&rdquo;变成&ldquo;开了就干&rdquo;。",
    demoVideo: "/demo/demo-1-v1.mp4",
  },
];

export function ScenarioSelector() {
  const [active, setActive] = useState(scenarios[0].id);
  const [showModal, setShowModal] = useState(false);
  const current = scenarios.find((s) => s.id === active)!;

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal, closeModal]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  return (
    <section id="scenarios" className="relative py-24 sm:py-32 overflow-hidden bg-section-alt">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-6">行业场景</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              你的行业，企小勤已经准备好了
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              50+ 预装业务技能包，覆盖金融、制造、政务、通用办公四大领域
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Bar */}
        <ScrollReveal delay={50}>
          <div className="flex justify-center gap-2 mb-12">
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === s.id
                    ? "bg-accent text-white"
                    : "bg-white/[0.05] text-white/50 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Scenario Detail */}
        <ScrollReveal delay={100}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            {/* Text content */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12">
              <div className="text-accent text-sm font-medium mb-2">{current.icon} {current.label}行业</div>
              <h3 className="text-2xl font-bold text-white mb-4">{current.title}</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">OPAR 执行模型</span>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-5 mb-6">
                <div className="text-sm text-white/60 font-mono tracking-tight">{current.process}</div>
              </div>
              <p className="text-white/50 leading-relaxed mb-6">{current.detail}</p>
              <div className="flex items-center gap-3 rounded-lg bg-accent-green/10 border border-accent-green/20 px-4 py-3">
                <span className="text-accent-green text-sm font-semibold">ROI:</span>
                <span className="text-white/70 text-sm">{current.roi}</span>
              </div>
            </div>

            {/* Video / Demo column — self-stretch to match text height */}
            <div className="flex flex-col self-stretch">
              {current.demoVideo ? (
                <div className="flex flex-col flex-1 rounded-2xl border border-white/[0.08] bg-[#0a0f1e] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer group" onClick={openModal}>
                  {/* Terminal title bar */}
                  <div className="flex items-center px-4 py-2.5 border-b border-white/[0.05] bg-[#0f172a] shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                    </div>
                    <div className="ml-3 text-xs text-white/40 font-mono tracking-wide">场景演示 · {current.label}</div>
                    {/* Expand hint */}
                    <svg className="ml-auto w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                  {/* Video fills remaining height */}
                  <div className="flex-1 bg-[#050810] relative overflow-hidden">
                    <video
                      src={current.demoVideo}
                      className="w-full h-full object-contain pointer-events-none"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-white/[0.10] bg-white/[0.02] flex flex-col items-center justify-center p-10 lg:p-14 text-center flex-1 min-h-[260px] lg:min-h-[360px]">
                  <svg className="w-12 h-12 text-white/[0.15] mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <p className="text-white/40 font-medium text-base">视频演示</p>
                  <p className="text-white/20 text-sm mt-1.5">制作中，敬请期待</p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Fullscreen video modal */}
      {showModal && current.demoVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={closeModal}
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
              <div className="ml-3 text-sm text-white/50 font-mono tracking-wide">场景演示 · {current.label}</div>
              <button
                onClick={closeModal}
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
                src={current.demoVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
