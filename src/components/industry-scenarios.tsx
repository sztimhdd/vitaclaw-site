import { useCallback, useEffect, useState, type ComponentType } from "react";
import {
  Building2,
  CheckCircle2,
  Expand,
  Factory,
  FileCheck2,
  Landmark,
  Network,
  Play,
  ShieldCheck,
  X,
} from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";

type Scenario = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  summary: string;
  process: readonly string[];
  controls: readonly string[];
  outcome: string;
  demoVideo: string;
};

const scenarios: readonly Scenario[] = [
  {
    id: "finance",
    label: "金融风控",
    icon: Landmark,
    title: "零售信贷资料核验",
    summary:
      "面向银行信贷、KYC 与反欺诈场景，AI 数字员工在受控环境中读取材料、比对内外部系统，并输出可审计的审核结论。",
    process: ["材料识别", "多源核查", "风险标注", "审计归档"],
    controls: ["客户本地 VPC 部署", "敏感字段脱敏", "全程操作留痕"],
    outcome: "审核效率提升 70%+，人工复核聚焦高风险样本",
    demoVideo: "/demo/Demo-4-finance.mp4",
  },
  {
    id: "government",
    label: "政务协同",
    icon: Building2,
    title: "跨部门流程流转",
    summary:
      "适配政务大厅、事业单位与大型组织的人事、权限、材料流转流程，跨 OA、HR、档案系统执行，避免人工重复录入。",
    process: ["指令接收", "权限校验", "系统同步", "日志回溯"],
    controls: ["最小权限执行", "审批节点保留", "日志不可篡改"],
    outcome: "流程人力投入降低 60%，关键节点 100% 可追踪",
    demoVideo: "/demo/Demo-2-HR.mp4",
  },
  {
    id: "manufacturing",
    label: "制造供应链",
    icon: Factory,
    title: "采购与库存联动",
    summary:
      "连接 ERP、采购、库存与供应商门户，在不改老系统代码的前提下完成询价、比价、下单和异常预警。",
    process: ["库存观察", "询比价规划", "订单执行", "异常复核"],
    controls: ["供应商白名单", "价格阈值拦截", "人工兜底确认"],
    outcome: "采购响应从天级压缩到分钟级，降低库存与价格波动风险",
    demoVideo: "/demo/Demo-3-procurement.mp4",
  },
  {
    id: "audit",
    label: "财务审计",
    icon: FileCheck2,
    title: "凭证审核与追溯",
    summary:
      "围绕报销、对账、合同与凭证审核建立标准化执行链路，让财务团队获得机器可执行、人员可复核的审计证据。",
    process: ["凭证读取", "规则比对", "异常提示", "证据固化"],
    controls: ["规则版本可追溯", "复核意见留档", "证据链导出"],
    outcome: "减少重复核对工作，提升内控检查与审计准备效率",
    demoVideo: "/demo/demo-1-v1.mp4",
  },
];

export function IndustryScenarios() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const [showModal, setShowModal] = useState(false);
  const current = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];
  const CurrentIcon = current.icon;

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeModal, showModal]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <section id="scenarios" className="relative overflow-hidden bg-section-alt py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/50">
              <ShieldCheck className="h-4 w-4 text-accent-green" />
              行业场景
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              银行、政务与大型企业的可控执行样板
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
              从 SaaS 场景验证中保留高频用例，重新收敛为私有化部署、跨系统协同和审计追踪优先的企业级场景库。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="mx-auto mb-10 grid max-w-4xl grid-cols-2 gap-2 md:grid-cols-4">
            {scenarios.map((scenario) => {
              const ScenarioIcon = scenario.icon;
              const isActive = scenario.id === activeId;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(scenario.id)}
                  className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "border-blue-400/40 bg-blue-400/[0.12] text-white"
                      : "border-white/[0.08] bg-white/[0.035] text-white/55 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <ScenarioIcon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{scenario.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:gap-8">
            <article className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08]">
                  <CurrentIcon className="h-5 w-5 text-blue-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-accent-green">{current.label}</div>
                  <h3 className="mt-1 text-2xl font-bold text-white">{current.title}</h3>
                </div>
              </div>

              <p className="text-[15px] leading-7 text-white/55">{current.summary}</p>

              <div className="mt-7 rounded-xl border border-white/[0.08] bg-[#080c14]/50 p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/70">
                  <Network className="h-4 w-4 text-blue-300" />
                  受控执行链路
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {current.process.map((step, index) => (
                    <div key={step} className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-3">
                      <div className="text-[11px] font-mono text-white/25">{String(index + 1).padStart(2, "0")}</div>
                      <div className="mt-1 text-sm font-medium leading-5 text-white/70">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {current.controls.map((control) => (
                  <div key={control} className="flex min-w-0 items-start gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
                    <span className="text-sm leading-5 text-white/55">{control}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-accent-green/20 bg-accent-green/[0.08] px-4 py-3 text-sm leading-6 text-white/70">
                <span className="font-semibold text-accent-green">落地收益：</span>
                {current.outcome}
              </div>
            </article>

            <button
              type="button"
              onClick={openModal}
              aria-label={`打开${current.title}视频演示`}
              className="group flex min-h-[280px] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c101a] text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-blue-400/25 hover:bg-[#101725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:min-h-full"
            >
              <div className="flex items-center border-b border-white/[0.05] bg-[#101420] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full border border-[#E0443E] bg-[#FF5F56]" />
                  <div className="h-2.5 w-2.5 rounded-full border border-[#DEA123] bg-[#FFBD2E]" />
                  <div className="h-2.5 w-2.5 rounded-full border border-[#1AAB29] bg-[#27C93F]" />
                </div>
                <div className="ml-3 min-w-0 truncate text-xs font-medium tracking-wide text-white/40">
                  场景演示 · {current.label}
                </div>
                <Expand className="ml-auto h-4 w-4 shrink-0 text-white/25 transition-colors duration-200 group-hover:text-white/55" />
              </div>
              <div className="relative flex-1 bg-[#050810]">
                <video
                  src={current.demoVideo}
                  className="absolute inset-0 h-full w-full object-contain pointer-events-none"
                  muted
                  playsInline
                  preload="metadata"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/35">
                  视频资产未加载，请检查 public/demo 目录。
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-200 group-hover:bg-black/10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
                    <Play className="ml-1 h-7 w-7 fill-white text-white" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {showModal ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          onClick={closeModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title}场景演示`}
            className="relative max-h-[82vh] w-full max-w-[1180px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c101a] shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center border-b border-white/[0.08] bg-[#101420] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full border border-[#E0443E] bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full border border-[#DEA123] bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full border border-[#1AAB29] bg-[#27C93F]" />
              </div>
              <div className="ml-3 min-w-0 truncate text-sm text-white/55">场景演示 · {current.title}</div>
              <button
                type="button"
                onClick={closeModal}
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-white/45 transition-all duration-200 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="关闭行业场景演示"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[calc(82vh-56px)] max-h-[720px] bg-black">
              <video
                src={current.demoVideo}
                className="h-full w-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
