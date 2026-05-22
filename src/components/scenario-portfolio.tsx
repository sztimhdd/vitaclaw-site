import { ScrollReveal } from "@/components/scroll-reveal";

const scenarioShots = [
  {
    id: "meeting",
    title: "开完会，纪要和待办自动出来",
    users: "运营、行政、项目负责人",
    description: "把会议内容、决策和待办整理成可确认的执行清单。",
    tasks: ["会议纪要与待办拆解", "责任人和截止时间识别", "结果同步到协作流程"],
    image: "/screenshots/use-cases/meeting.png",
  },
  {
    id: "procurement",
    title: "采购比价，不用人肉翻表",
    users: "采购、供应链、运营团队",
    description: "汇总库存、历史价格和供应商条款，生成待确认建议。",
    tasks: ["库存与采购记录读取", "供应商报价对比", "异常价格与条款标记"],
    image: "/screenshots/use-cases/supplychain.png",
  },
  {
    id: "hr",
    title: "合同单据，先让 AI 查一遍",
    users: "法务、行政、业务负责人",
    description: "先检查材料、条款和流程状态，把需要人工判断的点标出来。",
    tasks: ["单据材料自动核对", "关键条款和缺口标记", "待确认动作集中呈现"],
    image: "/screenshots/use-cases/hr.png",
  },
  {
    id: "finance",
    title: "客户跟进，自动整理下一步",
    users: "销售、运营、客户成功",
    description: "读取记录、表格和沟通材料，整理风险、进展和下一步动作。",
    tasks: ["客户记录自动汇总", "风险和异常优先标记", "跟进建议生成"],
    image: "/screenshots/use-cases/finance.png",
  },
];

export function ScenarioPortfolio() {
  return (
    <section id="scenario-shots" className="relative overflow-hidden bg-[#0f172a] py-16 sm:py-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-20 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-accent-green/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-accent-green/20 bg-accent-green/[0.08] px-3 py-1 text-xs font-semibold text-accent-green">
                真实场景截图集
              </div>
              <h2 className="max-w-5xl text-[clamp(34px,5vw,60px)] font-black leading-[1.05] tracking-normal text-white">
                不聊概念，直接看 AI 上手干活
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                我们把公司每天最烦的几件事做成了专职智能体：开会、采购、单据、客户跟进。点击卡片，直接看 AI 如何接任务、查资料、调用系统、整理 Word/PPT/Excel 文档。
              </p>
            </div>
            <div className="hidden text-right text-sm leading-6 text-white/38 lg:block">
              横向滑动查看<br />
              点击卡片进入场景视频
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0f172a] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0f172a] to-transparent sm:w-20" />
            <div className="overflow-x-auto overscroll-x-contain pb-5 [scrollbar-color:rgba(34,211,160,0.55)_rgba(255,255,255,0.08)] [scrollbar-width:thin]">
              <div className="flex snap-x snap-mandatory gap-5 pl-[max(1rem,calc((100vw-80rem)/2+2rem))] pr-[max(1rem,calc((100vw-80rem)/2+2rem))] sm:gap-6 lg:gap-8">
                {scenarioShots.map((scenario, index) => (
                  <a
                    key={scenario.id}
                    href="#scenarios"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("vitaclaw-scenario-change", { detail: scenario.id }));
                    }}
                    className="group relative flex w-[84vw] max-w-[860px] shrink-0 snap-center flex-col overflow-hidden rounded-[28px] border border-white/[0.11] bg-white/[0.055] shadow-[0_32px_120px_-62px_rgba(34,211,160,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-green/35 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-[76vw] lg:w-[720px] xl:w-[790px]"
                    aria-label={`查看${scenario.title}场景视频`}
                  >
                    <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[#101827] px-4 py-3">
                      <div className="flex gap-1.5" aria-hidden="true">
                        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="ml-2 truncate text-xs font-semibold text-white/45 sm:text-sm">
                        VitaClaw / {scenario.title}
                      </div>
                      <div className="ml-auto rounded-full border border-accent-green/20 bg-accent-green/[0.10] px-2.5 py-1 text-[11px] font-semibold text-accent-green">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="relative aspect-[16/9] bg-[#050810]">
                      <img
                        src={scenario.image}
                        alt={`${scenario.title} 产品截图`}
                        className="absolute inset-0 h-full w-full object-contain object-center opacity-95 transition-transform duration-500 group-hover:scale-[1.018] group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050810]/92 via-[#050810]/55 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-accent-green/20 bg-accent-green/[0.14] px-3 py-1 text-xs font-semibold text-accent-green backdrop-blur">
                        真实录屏截图
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h3 className="max-w-xl text-2xl font-black leading-tight tracking-normal text-white sm:text-3xl">
                            {scenario.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-white/68">{scenario.description}</p>
                        </div>
                        <div className="shrink-0 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/78 backdrop-blur">
                          查看执行过程
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 p-5 sm:grid-cols-[1fr_1.45fr] sm:p-6">
                      <div>
                        <div className="text-xs font-semibold text-white/38">推荐用户</div>
                        <div className="mt-2 text-sm font-semibold text-white/72">{scenario.users}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-accent-green">典型任务</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {scenario.tasks.map((task) => (
                            <span
                              key={task}
                              className="rounded-full border border-white/[0.09] bg-white/[0.045] px-3 py-1 text-xs font-medium text-white/60"
                            >
                              {task}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
