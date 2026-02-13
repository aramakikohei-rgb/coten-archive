import { useState, useCallback } from "react";
import type { Episode, Series } from "@/types/coten";

const STORAGE_KEY = "coten-radio-user-episodes";
const EDITS_KEY = "coten-radio-episode-edits";

interface EpisodeEdits {
  title?: string;
  description?: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  appleUrl?: string;
}

function loadAdded(): Record<string, Episode[]> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function loadEdits(): Record<string, EpisodeEdits> {
  try {
    return JSON.parse(localStorage.getItem(EDITS_KEY) || "{}");
  } catch {
    return {};
  }
}

export function useLocalEpisodes(series: Series) {
  const [addedMap, setAddedMap] = useState(loadAdded);
  const [editsMap, setEditsMap] = useState(loadEdits);

  const addedEpisodes: Episode[] = addedMap[series.id] || [];

  const applyEdits = (ep: Episode): Episode => {
    const edits = editsMap[ep.id];
    if (!edits) return ep;
    return {
      ...ep,
      title: edits.title ?? ep.title,
      description: edits.description ?? ep.description,
      youtubeUrl: edits.youtubeUrl ?? ep.youtubeUrl,
      spotifyUrl: edits.spotifyUrl ?? ep.spotifyUrl,
      appleUrl: edits.appleUrl ?? ep.appleUrl,
    };
  };

  const mergedEpisodes: Episode[] = [
    ...series.episodes.map(applyEdits),
    ...addedEpisodes.map(applyEdits),
  ];

  const addEpisode = useCallback(
    (ep: Omit<Episode, "id" | "seriesId" | "episodeNumber">) => {
      setAddedMap((prev) => {
        const existing = prev[series.id] || [];
        const nextNum =
          series.episodes.length + existing.length + 1;
        const newEp: Episode = {
          ...ep,
          id: `${series.id}-user-${Date.now()}`,
          seriesId: series.id,
          episodeNumber: nextNum,
        };
        const updated = { ...prev, [series.id]: [...existing, newEp] };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });
    },
    [series.id, series.episodes.length]
  );

  const editEpisodeLinks = useCallback(
    (episodeId: string, edits: EpisodeEdits) => {
      setEditsMap((prev) => {
        const updated = { ...prev, [episodeId]: { ...prev[episodeId], ...edits } };
        localStorage.setItem(EDITS_KEY, JSON.stringify(updated));
        return updated;
      });
    },
    []
  );

  const removeAddedEpisode = useCallback(
    (episodeId: string) => {
      setAddedMap((prev) => {
        const existing = prev[series.id] || [];
        const filtered = existing.filter((ep) => ep.id !== episodeId);
        const updated = { ...prev, [series.id]: filtered };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
      });
    },
    [series.id]
  );

  const getEdits = useCallback(
    (episodeId: string): EpisodeEdits => {
      return editsMap[episodeId] || {};
    },
    [editsMap]
  );

  return {
    episodes: mergedEpisodes,
    addEpisode,
    editEpisodeLinks,
    removeAddedEpisode,
    getEdits,
    addedEpisodeIds: new Set(addedEpisodes.map((ep) => ep.id)),
  };
}
