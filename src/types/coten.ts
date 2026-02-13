export type Category =
  | "biography"
  | "war"
  | "religion"
  | "economics"
  | "philosophy"
  | "empire"
  | "social"
  | "science"
  | "politics";

export type TimePeriod = "ancient" | "medieval" | "earlyModern" | "modern";

export type Region =
  | "japan"
  | "china"
  | "india"
  | "middleEast"
  | "europe"
  | "americas"
  | "centralAsia"
  | "africa"
  | "global";

export interface Episode {
  id: string;
  seriesId: string;
  episodeNumber: number;
  globalEpisodeNumber?: number;
  title: string;
  titleEn?: string;
  description: string;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  durationMinutes?: number;
}

export interface Series {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  category: Category;
  region: Region;
  subRegions?: Region[];
  coordinates: [number, number];
  startYear: number;
  endYear: number;
  timePeriod: TimePeriod;
  episodeCount: number;
  episodes: Episode[];
  thumbnailColor: string;
  tags: string[];
}

export interface ExplorerFilters {
  timePeriod: TimePeriod | "";
  category: Category | "";
  region: Region | "";
  searchQuery: string;
  yearRange: [number, number];
}
