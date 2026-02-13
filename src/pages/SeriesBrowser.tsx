import { useState } from "react";
import { Plus } from "lucide-react";
import type { Category } from "@/types/coten";
import { CATEGORY_CONFIG, getCategoryColor } from "@/lib/constants";
import { useExplorer } from "@/context/ExplorerContext";
import { useSeriesData } from "@/context/SeriesDataContext";
import { filterSeries } from "@/lib/filters";
import Chip from "@/components/ui/Chip";
import SeriesCard from "@/components/series/SeriesCard";
import SeriesForm from "@/components/series/SeriesForm";

const categories = Object.keys(CATEGORY_CONFIG) as Category[];

export default function SeriesBrowser() {
  const { state, dispatch } = useExplorer();
  const { allSeries, addSeries } = useSeriesData();
  const filtered = filterSeries(allSeries, state.filters);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="h-full overflow-y-auto pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={CATEGORY_CONFIG[cat].label}
                active={state.filters.category === cat}
                color={getCategoryColor(cat)}
                onClick={() =>
                  dispatch({
                    type: "SET_CATEGORY",
                    value: state.filters.category === cat ? "" : cat,
                  })
                }
              />
            ))}
          </div>
          {!showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-500 transition-colors ml-3"
            >
              <Plus className="h-3.5 w-3.5" />
              シリーズを追加
            </button>
          )}
        </div>

        {showAddForm && (
          <div className="mb-6">
            <SeriesForm
              mode="add"
              onSubmit={(data) => {
                addSeries(data);
                setShowAddForm(false);
              }}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        )}

        <p className="text-sm text-slate-500 mb-4">
          {filtered.length}件のシリーズ
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">
              該当するシリーズが見つかりません
            </p>
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="mt-4 text-sm text-red-600 hover:text-red-500 underline"
            >
              フィルターをリセット
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
