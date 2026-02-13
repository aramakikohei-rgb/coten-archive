import type { TimePeriod } from "@/types/coten";
import { TIME_PERIOD_CONFIG } from "@/lib/constants";

export default function TimePeriodBadge({ period }: { period: TimePeriod }) {
  const config = TIME_PERIOD_CONFIG[period];
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
      {config.label}
    </span>
  );
}
