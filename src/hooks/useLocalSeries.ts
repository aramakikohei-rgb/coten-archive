import { useState, useCallback } from "react";
import type { Series } from "@/types/coten";
import { seriesData as hardcodedSeries } from "@/data/series";

const STORAGE_KEY = "coten-radio-user-series";
const EDITS_KEY = "coten-radio-series-edits";

import type { Category, TimePeriod, Region } from "@/types/coten";

interface SeriesEdits {
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
}

function loadAdded(): Series[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function loadEdits(): Record<string, SeriesEdits> {
  try {
    return JSON.parse(localStorage.getItem(EDITS_KEY) || "{}");
  } catch {
    return {};
  }
}

export function useLocalSeries() {
  const [addedSeries, setAddedSeries] = useState(loadAdded);
  const [editsMap, setEditsMap] = useState(loadEdits);

  const allSeries: Series[] = [
    ...hardcodedSeries.map((s) => {
      const edits = editsMap[s.id];
      if (!edits) return s;
      return {
        ...s,
        title: edits.title ?? s.title,
        titleEn: edits.titleEn ?? s.titleEn,
        description: edits.description ?? s.description,
        category: edits.category ?? s.category,
        region: edits.region ?? s.region,
        timePeriod: edits.timePeriod ?? s.timePeriod,
        startYear: edits.startYear ?? s.startYear,
        endYear: edits.endYear ?? s.endYear,
        coordinates: edits.coordinates ?? s.coordinates,
        thumbnailColor: edits.thumbnailColor ?? s.thumbnailColor,
        tags: edits.tags ?? s.tags,
      };
    }),
    ...addedSeries,
  ];

  const addedSeriesIds = new Set(addedSeries.map((s) => s.id));

  const addSeries = useCallback(
    (data: Omit<Series, "id" | "episodeCount" | "episodes">) => {
      setAddedSeries((prev) => {
        const newSeries: Series = {
          ...data,
          id: `user-series-${Date.now()}`,
          episodeCount: 0,
          episodes: [],
        };
        const updated = [...prev, newSeries];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });
    },
    [],
  );

  const editSeries = useCallback(
    (seriesId: string, edits: SeriesEdits) => {
      // For user-added series, update the record directly
      setAddedSeries((prev) => {
        const idx = prev.findIndex((s) => s.id === seriesId);
        if (idx === -1) return prev;
        const updated = [...prev];
        const filtered: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(edits)) {
          if (v != null) filtered[k] = v;
        }
        updated[idx] = { ...updated[idx], ...filtered };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });

      // For hardcoded series, store edits separately
      if (!addedSeries.some((s) => s.id === seriesId)) {
        setEditsMap((prev) => {
          const updated = {
            ...prev,
            [seriesId]: { ...prev[seriesId], ...edits },
          };
          localStorage.setItem(EDITS_KEY, JSON.stringify(updated));
          return updated;
        });
      }
    },
    [addedSeries],
  );

  const removeSeries = useCallback((seriesId: string) => {
    setAddedSeries((prev) => {
      const updated = prev.filter((s) => s.id !== seriesId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return {
    allSeries,
    addedSeriesIds,
    addSeries,
    editSeries,
    removeSeries,
  };
}
