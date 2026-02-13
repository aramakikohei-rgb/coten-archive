import type { Series } from "@/types/coten";
import { getCategoryColor } from "@/lib/constants";
import { formatYearRange } from "@/lib/utils";
import { useExplorer } from "@/context/ExplorerContext";

interface TimelineMarkerProps {
  series: Series;
  yearToPercent: (year: number) => number;
}

export default function TimelineMarker({
  series,
  yearToPercent,
}: TimelineMarkerProps) {
  const { dispatch } = useExplorer();
  const color = getCategoryColor(series.category);
  const left = yearToPercent(series.startYear);
  const right = yearToPercent(series.endYear);
  const width = Math.max(right - left, 0.4);

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 h-2.5 rounded-full cursor-pointer hover:h-4 transition-all opacity-80 hover:opacity-100"
      style={{ left: `${left}%`, width: `${width}%`, backgroundColor: color }}
      title={`${series.title} (${formatYearRange(series.startYear, series.endYear)})`}
      onClick={() =>
        dispatch({ type: "SELECT_SERIES", seriesId: series.id })
      }
    />
  );
}
