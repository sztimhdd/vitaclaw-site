import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const plans = [
  {
    name: "演示体验",
    price: "免费体验",
    subtitle: "先看真实业务演示",
    description: "适合先了解企小勤如何处理会议、采购、员工流程、财务对账等常见场景。",
    cta: "查看演示",
    href: "/trial/select",
    features: ["真实录屏演示", "四个典型业务场景", "可了解 AI 执行流程", "无需先接入企业系统"],
    highlighted: false,
  },
  {
    name: "团队试点",
    price: "按流程评估",
    subtitle: "从一个业务流程开始",
    description: "适合从会议整理、采购比价、单据初审、财务对账等低风险流程开始，先验证效率提升和人工确认方式。",
    cta: "预约试点沟通",
    href: "#contact",
    features: ["梳理一个具体业务流程", "设计人工确认节点", "明确数据和系统边界", "确认试点验收标准"],
    highlighted: true,
  },
  {
    name: "私有化咨询",
    price: "定制",
    subtitle: "面向有数据和系统边界要求的企业",
    description: "适合对数据不出域、系统接入、权限控制、审计留痕有明确要求的企业。",
    cta: "预约方案沟通",
    href: "#contact",
    features: ["系统接入方案评估", "权限与审计边界设计", "本地或专属环境部署评估", "试点到正式上线路径规划"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#0f172a] py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-1/2 top-16 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-1.5 text-sm font-semibold text-white/58">
              试点方式
            </div>
            <h2 className="text-[clamp(34px,5vw,64px)] font-black leading-tight tracking-normal text-white">
              不先卖平台，先跑通一个流程
            </h2>
            <p className="mt-5 text-base leading-8 text-white/55 sm:text-lg">
              不用一开始就改造全公司系统。先选一个具体流程，跑出效果、看清价值，再决定是否扩大试点。
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={80 + index * 70}>
              <article
                className={`flex h-full flex-col rounded-[28px] border p-6 shadow-[0_28px_90px_-58px_rgba(34,211,160,0.65)] ${
                  plan.highlighted
                    ? "border-accent-green/35 bg-accent-green/[0.075]"
                    : "border-white/[0.10] bg-white/[0.045]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-accent-green">{plan.subtitle}</p>
                  </div>
                  {plan.highlighted ? (
                    <span className="rounded-full border border-accent-green/25 bg-accent-green/[0.12] px-3 py-1 text-xs font-semibold text-accent-green">
                      推荐
                    </span>
                  ) : null}
                </div>

                <div className="mt-7">
                  <div className="text-[clamp(30px,4vw,46px)] font-black leading-none text-white">{plan.price}</div>
                  <p className="mt-4 text-sm leading-7 text-white/58">{plan.description}</p>
                </div>

                <ul className="mt-7 grow space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-white/64">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    plan.highlighted
                      ? "bg-white text-[#0f172a] hover:bg-white/90"
                      : "border border-white/[0.14] bg-white/[0.04] text-white/72 hover:border-white/[0.26] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
