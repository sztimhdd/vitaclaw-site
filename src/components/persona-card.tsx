import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function PersonaCard({
  persona,
  title,
  icon,
  preview,
  cta,
  ctaUrl,
}: {
  persona: "tech" | "business";
  title: string;
  icon: ReactNode;
  preview: string;
  cta: string;
  ctaUrl: string;
}) {
  const bgColor =
    persona === "tech"
      ? "from-blue-500/10 to-blue-500/5 border-blue-500/20"
      : "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20";

  const accentColor = persona === "tech" ? "text-blue-400" : "text-emerald-400";
  const iconBg = persona === "tech" ? "bg-blue-500/15" : "bg-emerald-500/15";

  return (
    <a
      href={ctaUrl}
      className={`group block rounded-2xl border bg-gradient-to-br ${bgColor} p-8 hover:border-opacity-100 transition-all duration-300 cursor-pointer hover:scale-[1.02]`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        <ArrowRight
          className={`w-5 h-5 ${accentColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-[14px] text-white/50 mb-6 leading-relaxed">{preview}</p>

      <span className={`inline-flex items-center gap-2 text-sm font-medium ${accentColor}`}>
        {cta}
        <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}
