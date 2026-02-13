import type { Category } from "@/types/coten";
import { CATEGORY_CONFIG, getCategoryColor } from "@/lib/constants";
import { useExplorer } from "@/context/ExplorerContext";
import Chip from "@/components/ui/Chip";

const categories = Object.keys(CATEGORY_CONFIG) as Category[];

export default function MapControls() {
  const { state, dispatch } = useExplorer();

  return (
    <div className="absolute top-3 left-3 z-[1000] flex flex-wrap gap-1.5 max-w-[60vw]">
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
  );
}
