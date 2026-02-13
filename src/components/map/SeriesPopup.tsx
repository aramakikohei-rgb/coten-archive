import { Popup } from "react-leaflet";
import { Link } from "react-router";
import { Play } from "lucide-react";
import type { Series } from "@/types/coten";
import { formatYearRange } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";

export default function SeriesPopup({ series }: { series: Series }) {
  return (
    <Popup>
      <div className="min-w-[260px] p-1">
        <div
          className="h-1.5 rounded-full mb-3"
          style={{ backgroundColor: series.thumbnailColor }}
        />
        <h3 className="font-bold text-sm mb-0.5 text-slate-800">
          {series.title}
        </h3>
        <p className="text-xs text-slate-500 mb-2">{series.titleEn}</p>
        <div className="flex items-center gap-2 mb-2">
          <CategoryBadge category={series.category} />
          <span className="text-xs text-slate-500">
            {formatYearRange(series.startYear, series.endYear)}
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-3 line-clamp-2">
          {series.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            <Play className="inline h-3 w-3 mr-1" />
            {series.episodeCount}エピソード
          </span>
          <Link
            to={`/series/${series.id}`}
            className="text-xs text-red-600 font-medium hover:text-red-500 hover:underline"
          >
            詳細を見る →
          </Link>
        </div>
      </div>
    </Popup>
  );
}
