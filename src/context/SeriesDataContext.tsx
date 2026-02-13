import { createContext, useContext, type ReactNode } from "react";
import type { Series, Category, TimePeriod, Region } from "@/types/coten";
import { useLocalSeries } from "@/hooks/useLocalSeries";

interface SeriesDataContextValue {
  allSeries: Series[];
  addedSeriesIds: Set<string>;
  addSeries: (data: Omit<Series, "id" | "episodeCount" | "episodes">) => void;
  editSeries: (
    seriesId: string,
    edits: {
      title?: string;
      titleEn?: string;
      description?: string;
      category?: Category;
      region?: Region;
      timePeriod?: TimePeriod;
      startYear?: number;
      endYear?: number;
      coordinates?: [number, number];
      thumbnailColor?: string;
      tags?: string[];
    },
  ) => void;
  removeSeries: (seriesId: string) => void;
}

const SeriesDataContext = createContext<SeriesDataContextValue | null>(null);

export function SeriesDataProvider({ children }: { children: ReactNode }) {
  const value = useLocalSeries();
  return (
    <SeriesDataContext.Provider value={value}>
      {children}
    </SeriesDataContext.Provider>
  );
}

export function useSeriesData() {
  const ctx = useContext(SeriesDataContext);
  if (!ctx)
    throw new Error("useSeriesData must be used within SeriesDataProvider");
  return ctx;
}
