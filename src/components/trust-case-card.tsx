import { TrendingUp, Shield, Zap, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { TrendingUp, Shield, Zap };

export function TrustCaseCard({
  bank,
  metric,
  desc,
  color,
  icon,
  delay = 0,
}: {
  bank: string;
  metric: string;
  desc: string;
  color: string;
  icon: string;
  delay?: number;
}) {
  const Icon = iconMap[icon];

  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-gradient-to-br ${color} p-6 hover:border-white/[0.16] transition-all duration-300 flex flex-col gap-4`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="text-[13px] font-semibold text-white/60">{bank}</span>
        {Icon && <Icon className="w-5 h-5 text-white/40" />}
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[15px] font-bold text-white/90">{metric}</span>
        <span className="text-[13px] text-white/45 leading-relaxed">{desc}</span>
      </div>
    </div>
  );
}
