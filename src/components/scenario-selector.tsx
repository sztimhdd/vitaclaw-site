import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const scenarios = [
  {
    id: "finance",
    label: "金融",
    icon: "🏦",
    title: "零售信贷审核",
    process: "观察申请材料 → 规划多维核查 → 行动跨系统比对 → 反思合规性",
    roi: "替代 3-5 名基础岗，审核效率提升 70%+",
    detail: "企小勤自动读取信贷申请材料，跨征信、税务、工商等系统进行多维核查比对，生成合规审核报告。全程留痕，每一步可审计。",
  },
  {
    id: "manufacturing",
    label: "制造",
    icon: "🏭",
    title: "供应链采购",
    process: "观察库存阈值 → 规划询价策略 → 行动自动下单 → 反思成本波动",
    roi: "采购响应周期从天级缩短至分钟级，零库存积压风险",
    detail: "企小勤实时监控库存数据，自动触发询价、比价、下单流程。异常价格波动秒级预警，采购全链路自动化。",
  },
  {
    id: "gov",
    label: "政务",
    icon: "🏛️",
    title: "入转调离审批",
    process: "观察流程指令 → 规划多部门协同 → 行动自动权限变更 → 反思日志审计",
    roi: "人力投入降低 60%，流程 100% 合规",
    detail: "企小勤自动处理员工入职、转岗、调任、离职全流程，跨 OA、HR、IT 系统自动同步权限与档案。每一次操作均生成不可篡改审计日志。",
  },
  {
    id: "office",
    label: "通用办公",
    icon: "💼",
    title: "智能会议助理",
    process: "观察日程安排 → 规划物料准备 → 行动自动预约及任务拆解 → 反思准确度",
    roi: "员工从琐碎行政中解脱，聚焦高价值创造",
    detail: "企小勤自动管理会议日程，准备会议资料，会后拆解待办任务并下发到人。让会议从&ldquo;开了就忘&rdquo;变成&ldquo;开了就干&rdquo;。",
  },
];

export function ScenarioSelector() {
  const [active, setActive] = useState(scenarios[0].id);
  const current = scenarios.find((s) => s.id === active)!;

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
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12">
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
        </ScrollReveal>
      </div>
    </section>
  );
}
