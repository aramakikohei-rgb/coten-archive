import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  active: boolean;
  color: string;
  onClick: () => void;
}

export default function Chip({ label, active, color, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 rounded-full text-xs font-medium transition-all border",
        active
          ? "text-white shadow-md"
          : "text-slate-600 bg-white/90 border-slate-200 hover:border-slate-300 backdrop-blur-sm"
      )}
      style={
        active
          ? {
              backgroundColor: color,
              borderColor: color,
              boxShadow: `0 2px 8px ${color}30`,
            }
          : undefined
      }
    >
      {label}
    </button>
  );
}
