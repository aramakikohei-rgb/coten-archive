import type { Category } from "@/types/coten";
import { CATEGORY_CONFIG } from "@/lib/constants";

export default function CategoryBadge({ category }: { category: Category }) {
  const config = CATEGORY_CONFIG[category];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold"
      style={{
        backgroundColor: `${config.color}20`,
        color: config.color,
        border: `1px solid ${config.color}40`,
      }}
    >
      {config.label}
    </span>
  );
}
