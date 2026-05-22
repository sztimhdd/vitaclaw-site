import { useState, useCallback, useEffect } from "react";
import { ArrowRight, CheckCircle2, Maximize2, Play, ShieldCheck, Workflow } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Scenario {
  id: string;
  label: string;
  kicker: string;
  headline: string;
  summary: string;
  users: string;
  capability: string;
  tasks: string[];
  before: string;
  after: string;
  steps: string[];
  proof: [string, string][];
  video: string;
  accent: string;
}

const scenarios: Scenario[] = [
  {
    id: "meeting",
    label: "会议协同",
    kicker: "会后推进",
    headline: "会议开完，待办直接变成执行清单",
    summary: "把沟通结果落到人、时间和下一步动作，减少会后重新整理和反复追问。",
    users: "运营、行政、项目负责人",
    capability: "VitaClaw 读取会议材料，自动整理决策、待办和风险点，生成一份可确认、可同步、可追踪的会后清单。",
    tasks: ["会议纪要自动整理，关键结论单独列出", "责任人、截止时间和待补信息自动标记"],
    before: "会后靠人翻录音、补纪要、催进度，任务常散在群聊和表格里。",
    after: "开完会先得到可确认待办，再由负责人决定是否同步到协作流程。",
    steps: ["听懂会议", "整理结论", "拆出待办", "等待确认"],
    proof: [["人工整理", "半天"], ["AI 初稿", "几分钟"]],
    video: "/demo/demo-1-meeting.mp4",
    accent: "from-cyan-300 to-blue-400",
  },
  {
    id: "procurement",
    label: "采购比价",
    kicker: "供应链响应",
    headline: "采购需求一来，报价和风险先整理好",
    summary: "库存、供应商、历史价格不用来回切换，先得到一页可复核的采购建议。",
    users: "采购、供应链、运营团队",
    capability: "VitaClaw 汇总库存、历史采购记录和供应商报价，先把重复查询和比价工作做成建议单，再交给采购确认。",
    tasks: ["读取库存、历史采购价和供应商条款", "标出异常价格、账期差异和待确认供应商"],
    before: "采购人员反复查系统、拉表、比报价，真正的判断被重复录入淹没。",
    after: "AI 先生成采购建议，价格、条款和异常项一眼可复核。",
    steps: ["读取需求", "查库存价", "对比报价", "生成建议"],
    proof: [["人工查表", "2 小时"], ["AI 汇总", "几分钟"]],
    video: "/demo/Demo-3-procurement.mp4",
    accent: "from-amber-300 to-orange-400",
  },
  {
    id: "hr",
    label: "HR 流程",
    kicker: "入转调离",
    headline: "员工变动，流程自动按清单往前走",
    summary: "让 HR、行政、IT 看同一张状态表，关键权限动作前保留人工确认。",
    users: "HR、行政、IT 协同团队",
    capability: "VitaClaw 按企业规则检查材料、匹配办理清单、推动 OA 和权限节点，并在关键权限变更前让人确认。",
    tasks: ["入职、转岗、离职材料和步骤自动核对", "OA 状态、权限动作和确认记录集中留痕"],
    before: "HR、行政、IT 各看一套表，漏一步就可能留下权限和资料风险。",
    after: "流程状态、缺失材料、待确认动作集中呈现，跨部门协作更清楚。",
    steps: ["识别类型", "匹配清单", "推动节点", "记录留痕"],
    proof: [["人工追踪", "多部门"], ["AI 推进", "一张清单"]],
    video: "/demo/Demo-2-HR.mp4",
    accent: "from-emerald-300 to-teal-400",
  },
  {
    id: "finance",
    label: "财务对账",
    kicker: "异常复核",
    headline: "票据流水一对，异常项先浮出来",
    summary: "发票、流水、Excel 和业务记录先自动对齐，财务只复核真正需要判断的项目。",
    users: "财务、审计、运营支持",
    capability: "VitaClaw 读取多来源材料，按规则核对金额、日期、供应商和审批状态，输出异常清单与复核建议。",
    tasks: ["发票、银行流水和业务表格自动对齐", "差异项、重复项和缺失说明优先标记"],
    before: "财务在多份表和系统之间逐条核对，异常项靠人工标颜色、写备注。",
    after: "先拿到可复核的异常初稿，再把判断时间留给真正有风险的项目。",
    steps: ["读取材料", "建立规则", "标记差异", "输出说明"],
    proof: [["逐条核对", "小时级"], ["AI 初筛", "分钟级"]],
    video: "/demo/Demo-4-finance.mp4",
    accent: "from-blue-300 to-indigo-400",
  },
];

const getScenarioIdFromHash = () => {
  if (typeof window === "undefined") return null;
  const id = window.location.hash.replace("#scenario-", "");
  return scenarios.some((scenario) => scenario.id === id) ? id : null;
};

export function ScenarioSelector() {
  const [active, setActive] = useState(() => getScenarioIdFromHash() ?? scenarios[0].id);
  const [showModal, setShowModal] = useState(false);
  const current = scenarios.find((scenario) => scenario.id === active) ?? scenarios[0];

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const selectScenario = useCallback((id: string) => {
    setActive(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#scenario-${id}`);
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const id = getScenarioIdFromHash();
      if (id) setActive(id);
    };
    const syncFromHeroCard = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (scenarios.some((scenario) => scenario.id === id)) setActive(id);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("vitaclaw-scenario-change", syncFromHeroCard);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("vitaclaw-scenario-change", syncFromHeroCard);
    };
  }, []);

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
    <section id="scenarios" className="relative overflow-hidden bg-[#111827] py-16 sm:py-20 scroll-mt-24">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-green/45 to-transparent" />
      <div className="absolute left-1/2 top-12 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-accent-green/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-4 py-1.5 text-sm font-semibold text-white/70">
              <Workflow className="h-4 w-4 text-accent-green" aria-hidden="true" />
              全场景 AI Agent 工作搭子
            </div>
            <h2 className="text-[clamp(36px,5vw,68px)] font-black leading-[1.04] tracking-normal text-white">
              一句话交给 AI，
              <span className="block bg-gradient-to-r from-accent-green via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                真实流程自己往前走
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/58 sm:text-lg">
              你只需要说清目标，AI 会自动拆解任务、查资料、跑流程、整理结果；老板不用盯每一步，只在关键节点拍板。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-3xl flex-wrap justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.045] p-2" role="tablist" aria-label="业务场景演示">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  id={`tab-${scenario.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active === scenario.id}
                  aria-controls={`panel-${scenario.id}`}
                  onClick={() => selectScenario(scenario.id)}
                  className={`min-h-11 flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[128px] ${
                    active === scenario.id
                      ? "bg-white text-[#0f172a] shadow-[0_14px_36px_-20px_rgba(255,255,255,0.8)]"
                      : "text-white/62 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {scenario.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="mt-6 overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#0a0f1e]/90 shadow-[0_34px_120px_-50px_rgba(34,211,160,0.58)]"
          >
            <div className={`h-1 bg-gradient-to-r ${current.accent}`} />
            <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
              <div className="min-w-0 border-b border-white/[0.08] lg:border-b-0 lg:border-r lg:border-white/[0.08]">
                <div className="flex min-h-[56px] items-center gap-3 border-b border-white/[0.06] bg-[#101827] px-4 sm:px-5">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="min-w-0 flex-1 truncate text-xs font-medium text-white/45 sm:text-sm">
                    VitaClaw 场景演示 / {current.label}
                  </div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.05] px-3 text-xs font-semibold text-white/76 transition-colors duration-200 hover:border-white/[0.24] hover:bg-white/[0.09] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">全屏观看</span>
                  </button>
                </div>

                <div className="relative bg-[#050810]">
                  <video
                    key={current.video}
                    src={current.video}
                    className="block aspect-video h-auto w-full object-contain"
                    muted
                    playsInline
                    preload="metadata"
                    controls
                  />
                </div>
              </div>

              <aside className="flex min-w-0 flex-col p-6 sm:p-8">
                <div className="mb-4 inline-flex w-fit rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/48">
                  {current.kicker} · 推荐用户：{current.users}
                </div>
                <h3 className="text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl">
                  {current.headline}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{current.summary}</p>

                <div className="mt-6 rounded-2xl border border-accent-green/20 bg-accent-green/[0.07] p-4">
                  <div className="mb-2 text-sm font-semibold text-accent-green">能力描述</div>
                  <p className="text-sm leading-7 text-white/68">{current.capability}</p>
                </div>

                <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <div className="mb-3 text-xs font-semibold text-white/42">典型任务</div>
                  <ul className="space-y-2">
                    {current.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm leading-6 text-white/64">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <div className="grid gap-3 border-t border-white/[0.08] bg-[#0f172a]/70 p-4 sm:p-5 lg:grid-cols-[1.1fr_1.4fr_1fr]">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <div className="mb-3 text-xs font-semibold text-accent-green">执行步骤</div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {current.steps.map((step, index) => (
                    <div key={step} className="rounded-xl border border-white/[0.08] bg-black/18 px-3 py-2">
                      <div className="mb-1 text-[10px] font-semibold text-white/32">{String(index + 1).padStart(2, "0")}</div>
                      <div className="text-xs leading-5 text-white/72">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-300/15 bg-red-300/[0.045] p-4">
                  <div className="mb-2 text-xs font-semibold text-red-100/72">原来</div>
                  <p className="text-sm leading-6 text-white/62">{current.before}</p>
                </div>
                <div className="rounded-2xl border border-accent-green/20 bg-accent-green/[0.055] p-4">
                  <div className="mb-2 text-xs font-semibold text-accent-green">现在</div>
                  <p className="text-sm leading-6 text-white/68">{current.after}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/76">
                  <ShieldCheck className="h-4 w-4 text-accent-green" aria-hidden="true" />
                  试用边界
                </div>
                <p className="text-sm leading-6 text-white/62">
                  当前连接本地 PlanB M1 demo，高风险动作保留人工确认，不承诺自动开通生产环境。
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {current.proof.map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/[0.07] bg-black/18 px-3 py-2">
                      <div className="text-[11px] text-white/38">{label}</div>
                      <div className="mt-1 text-sm font-semibold text-white/80">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 flex justify-center">
          <a
            href="/trial/select"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            选择本地试用环境
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={closeModal}
          style={{ animation: "fadeIn 200ms ease forwards" }}
        >
          <div
            className="relative h-[75vh] max-h-[800px] w-[92vw] max-w-[1200px] overflow-hidden rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] sm:w-[80vw]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scaleIn 200ms ease forwards" }}
          >
            <div className="flex items-center border-b border-white/[0.08] bg-[#0f172a] px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="h-3 w-3 rounded-full border border-[#E0443E] bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full border border-[#DEA123] bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full border border-[#1AAB29] bg-[#27C93F]" />
              </div>
              <div className="ml-3 text-sm text-white/55">场景演示 · {current.label}</div>
              <button
                type="button"
                onClick={closeModal}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-all hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="关闭"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex h-[calc(100%-52px)] items-center justify-center bg-black">
              <video src={current.video} className="h-full w-full object-contain" controls autoPlay playsInline />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
