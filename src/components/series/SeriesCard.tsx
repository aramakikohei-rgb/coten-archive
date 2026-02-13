import { Link } from "react-router";
import type { Series } from "@/types/coten";
import { formatYearRange } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";

export default function SeriesCard({ series }: { series: Series }) {
  return (
    <Link
      to={`/series/${series.id}`}
      className="group block bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-red-300 transition-all hover:shadow-lg hover:shadow-red-100"
    >
      <div className="h-2" style={{ backgroundColor: series.thumbnailColor }} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="min-w-0">
            <h3 className="font-bold text-slate-800 group-hover:text-red-600 transition-colors truncate">
              {series.title}
            </h3>
            <p className="text-xs text-slate-500">{series.titleEn}</p>
          </div>
          <CategoryBadge category={series.category} />
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 mb-3">
          {series.description}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{formatYearRange(series.startYear, series.endYear)}</span>
          <span>{series.episodeCount}エピソード</span>
        </div>
      </div>
    </Link>
  );
}
