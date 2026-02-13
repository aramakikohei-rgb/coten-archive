import type { Category, TimePeriod, Region } from "@/types/coten";

export const CATEGORY_CONFIG: Record<
  Category,
  { label: string; labelEn: string; color: string }
> = {
  biography: { label: "人物伝", labelEn: "Biography", color: "#f59e0b" },
  war: { label: "戦争", labelEn: "War", color: "#ef4444" },
  religion: { label: "宗教", labelEn: "Religion", color: "#8b5cf6" },
  economics: { label: "経済", labelEn: "Economics", color: "#10b981" },
  philosophy: { label: "哲学", labelEn: "Philosophy", color: "#6366f1" },
  empire: { label: "帝国", labelEn: "Empire", color: "#3b82f6" },
  social: { label: "社会", labelEn: "Social", color: "#ec4899" },
  science: { label: "科学", labelEn: "Science", color: "#14b8a6" },
  politics: { label: "政治", labelEn: "Politics", color: "#f97316" },
};

export const TIME_PERIOD_CONFIG: Record<
  TimePeriod,
  { label: string; labelEn: string }
> = {
  ancient: { label: "古代", labelEn: "Ancient" },
  medieval: { label: "中世", labelEn: "Medieval" },
  earlyModern: { label: "近世", labelEn: "Early Modern" },
  modern: { label: "近現代", labelEn: "Modern" },
};

export const REGION_CONFIG: Record<
  Region,
  { label: string; labelEn: string }
> = {
  japan: { label: "日本", labelEn: "Japan" },
  china: { label: "中国", labelEn: "China" },
  india: { label: "インド", labelEn: "India" },
  middleEast: { label: "中東", labelEn: "Middle East" },
  europe: { label: "ヨーロッパ", labelEn: "Europe" },
  americas: { label: "アメリカ", labelEn: "Americas" },
  centralAsia: { label: "中央アジア", labelEn: "Central Asia" },
  africa: { label: "アフリカ", labelEn: "Africa" },
  global: { label: "世界", labelEn: "Global" },
};

export const ERA_BOUNDARIES = [
  { id: "ancient" as TimePeriod, label: "古代", labelEn: "Ancient", start: -3000, end: 500 },
  { id: "medieval" as TimePeriod, label: "中世", labelEn: "Medieval", start: 500, end: 1500 },
  { id: "earlyModern" as TimePeriod, label: "近世", labelEn: "Early Modern", start: 1500, end: 1800 },
  { id: "modern" as TimePeriod, label: "近現代", labelEn: "Modern", start: 1800, end: 2025 },
];

export const MIN_YEAR = -3000;
export const MAX_YEAR = 2025;

export function getCategoryColor(cat: Category): string {
  return CATEGORY_CONFIG[cat]?.color ?? "#64748b";
}

export function getCategoryLabel(cat: Category): string {
  return CATEGORY_CONFIG[cat]?.label ?? cat;
}
