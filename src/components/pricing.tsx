import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const plans = [
  {
    name: "本地试用",
    price: "免费",
    subtitle: "先看真实 demo",
    description: "适合先验证会议、采购、HR、财务四个场景的产品体验。",
    cta: "选择试用环境",
    href: "/trial/select",
    features: ["本地 PlanB M1 demo", "两个 tenant 入口", "不新增注册与计费"],
    highlighted: false,
  },
  {
    name: "团队试点",
    price: "按流程评估",
    subtitle: "从一个业务流程开始",
    description: "适合运营、财务、采购、HR 等团队拿一个低风险流程做试点。",
    cta: "联系试点顾问",
    href: "#contact",
    features: ["流程范围梳理", "人工确认节点设计", "试点验收口径确认"],
    highlighted: true,
  },
  {
    name: "私有化咨询",
    price: "定制",
    subtitle: "面向本地或专属环境",
    description: "适合对系统接入、权限边界、数据环境有明确要求的企业。",
    cta: "预约方案沟通",
    href: "#contact",
    features: ["系统接入方案", "权限与审计边界", "本地/私有化部署评估"],
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
              定价与试点方式
            </div>
            <h2 className="text-[clamp(34px,5vw,64px)] font-black leading-tight tracking-normal text-white">
              不先卖平台，先跑通一个流程
            </h2>
            <p className="mt-5 text-base leading-8 text-white/55 sm:text-lg">
              当前官网不做在线开通和自动计费。先从本地 demo 或一个团队试点开始，确认流程价值、权限边界和人工确认方式。
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
