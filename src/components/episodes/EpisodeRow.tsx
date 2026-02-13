import { Youtube, Pencil, Trash2, ExternalLink } from "lucide-react";
import type { Episode } from "@/types/coten";

interface EpisodeRowProps {
  episode: Episode;
  color: string;
  seriesTitle: string;
  isUserAdded?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

function buildYoutubeUrl(episode: Episode, seriesTitle: string): string {
  if (episode.youtubeUrl) return episode.youtubeUrl;
  const query = encodeURIComponent(
    `コテンラジオ ${seriesTitle} ${episode.title}`
  );
  return `https://www.youtube.com/results?search_query=${query}`;
}

export default function EpisodeRow({
  episode,
  color,
  seriesTitle,
  isUserAdded,
  onEdit,
  onDelete,
}: EpisodeRowProps) {
  const youtubeUrl = buildYoutubeUrl(episode, seriesTitle);
  const hasCustomYoutube = !!episode.youtubeUrl;

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
        style={{ backgroundColor: color }}
      >
        {episode.episodeNumber}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="font-medium text-slate-800 text-sm truncate">
            {episode.title}
          </h3>
          {isUserAdded && (
            <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-medium border border-blue-100">
              追加済
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 line-clamp-1">
          {episode.description}
        </p>
        {/* Show link indicators */}
        <div className="flex items-center gap-2 mt-1">
          {episode.spotifyUrl && (
            <a
              href={episode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-green-600 hover:underline flex items-center gap-0.5"
            >
              <ExternalLink className="h-2.5 w-2.5" />
              Spotify
            </a>
          )}
          {episode.appleUrl && (
            <a
              href={episode.appleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-purple-600 hover:underline flex items-center gap-0.5"
            >
              <ExternalLink className="h-2.5 w-2.5" />
              Apple
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {onEdit && (
          <button
            onClick={onEdit}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="リンクを編集"
          >
            <Pencil className="h-3.5 w-3.5" />
          </button>
        )}
        {isUserAdded && onDelete && (
          <button
            onClick={onDelete}
            className="p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            title="削除"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        )}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-colors ${
            hasCustomYoutube
              ? "bg-red-600 hover:bg-red-500"
              : "bg-red-400 hover:bg-red-500"
          }`}
          title="YouTubeで視聴"
        >
          <Youtube className="h-4 w-4" />
          <span className="hidden sm:inline">YouTube</span>
        </a>
      </div>
    </div>
  );
}
