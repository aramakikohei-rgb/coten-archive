import type { Series, ExplorerFilters } from "@/types/coten";

export function filterSeries(
  series: Series[],
  filters: ExplorerFilters
): Series[] {
  return series.filter((s) => {
    if (filters.timePeriod && s.timePeriod !== filters.timePeriod) return false;

    if (filters.category && s.category !== filters.category) return false;

    if (
      filters.region &&
      s.region !== filters.region &&
      !s.subRegions?.includes(filters.region)
    )
      return false;

    const [minYear, maxYear] = filters.yearRange;
    if (s.endYear < minYear || s.startYear > maxYear) return false;

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const searchable = [s.title, s.titleEn, s.description, ...s.tags]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(q)) return false;
    }

    return true;
  });
}
