interface EraLabelProps {
  label: string;
  left: number;
  width: number;
}

export default function EraLabel({ label, left, width }: EraLabelProps) {
  return (
    <div
      className="absolute top-0 flex items-center justify-center text-[10px] text-slate-400 font-medium border-l border-slate-200 first:border-l-0 h-full"
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      {label}
    </div>
  );
}
