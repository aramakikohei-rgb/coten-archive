import { useCallback } from "react";
import { useExplorer } from "@/context/ExplorerContext";
import { useSeriesData } from "@/context/SeriesDataContext";
import { filterSeries } from "@/lib/filters";
import { ERA_BOUNDARIES, MIN_YEAR, MAX_YEAR } from "@/lib/constants";
import EraLabel from "./EraLabel";
import TimelineMarker from "./TimelineMarker";

const TOTAL_SPAN = MAX_YEAR - MIN_YEAR;

export default function TimelineBar() {
  const { state, dispatch } = useExplorer();
  const { allSeries } = useSeriesData();
  const [minVal, maxVal] = state.filters.yearRange;

  const yearToPercent = useCallback(
    (year: number) => ((year - MIN_YEAR) / TOTAL_SPAN) * 100,
    []
  );

  const filtered = filterSeries(allSeries, {
    ...state.filters,
    yearRange: [MIN_YEAR, MAX_YEAR],
  });

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val < maxVal) {
      dispatch({ type: "SET_YEAR_RANGE", value: [val, maxVal] });
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val > minVal) {
      dispatch({ type: "SET_YEAR_RANGE", value: [minVal, val] });
    }
  };

  const selectedLeft = yearToPercent(minVal);
  const selectedWidth = yearToPercent(maxVal) - selectedLeft;

  return (
    <div className="bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-2">
      {/* Era labels */}
      <div className="relative h-4 mb-1">
        {ERA_BOUNDARIES.map((era) => (
          <EraLabel
            key={era.id}
            label={era.label}
            left={yearToPercent(era.start)}
            width={yearToPercent(era.end) - yearToPercent(era.start)}
          />
        ))}
      </div>

      {/* Series markers */}
      <div className="relative h-5 mb-1">
        {filtered.map((series) => (
          <TimelineMarker
            key={series.id}
            series={series}
            yearToPercent={yearToPercent}
          />
        ))}
      </div>

      {/* Range slider */}
      <div className="relative h-5">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full" />

        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-red-400/50 rounded-full"
          style={{ left: `${selectedLeft}%`, width: `${selectedWidth}%` }}
        />

        <input
          type="range"
          className="timeline-range"
          min={MIN_YEAR}
          max={MAX_YEAR}
          value={minVal}
          onChange={handleMinChange}
        />

        <input
          type="range"
          className="timeline-range"
          min={MIN_YEAR}
          max={MAX_YEAR}
          value={maxVal}
          onChange={handleMaxChange}
        />
      </div>

      {/* Year labels */}
      <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
        <span>3000 BCE</span>
        <span>
          {minVal < 0 ? `${Math.abs(minVal)} BCE` : minVal} —{" "}
          {maxVal < 0 ? `${Math.abs(maxVal)} BCE` : maxVal}
        </span>
        <span>2025</span>
      </div>
    </div>
  );
}
