import { ScrollReveal } from "@/components/scroll-reveal";
import { PersonaCard } from "@/components/persona-card";
import { Code2, BarChart3 } from "lucide-react";

export function PersonaSplit() {
  return (
    <section id="for-you" className="py-24 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              为您量身定制
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white mt-3">
              选择您的角色，看到最相关的内容
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0}>
            <PersonaCard
              persona="tech"
              title="我是技术负责人 (CTO / 架构师)"
              icon={<Code2 className="w-6 h-6 text-blue-400" />}
              preview="深入了解 eBPF 安全内核、五层防御体系、性能指标、集成方式和开发体验。"
              cta="查看技术详解"
              ctaUrl="#architecture"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <PersonaCard
              persona="business"
              title="我是业务决策者 (科技部总经理)"
              icon={<BarChart3 className="w-6 h-6 text-emerald-400" />}
              preview="了解落地成本、部署周期、客户案例、ROI 分析、合规要求和采购流程。"
              cta="了解商业方案"
              ctaUrl="#business"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
