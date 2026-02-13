import { useState } from "react";
import { X, Plus, Save } from "lucide-react";

interface EpisodeFormProps {
  mode: "add" | "edit";
  initial?: {
    title?: string;
    description?: string;
    youtubeUrl?: string;
    spotifyUrl?: string;
    appleUrl?: string;
  };
  onSubmit: (data: {
    title: string;
    description: string;
    youtubeUrl?: string;
    spotifyUrl?: string;
    appleUrl?: string;
  }) => void;
  onCancel: () => void;
}

export default function EpisodeForm({
  mode,
  initial,
  onSubmit,
  onCancel,
}: EpisodeFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [youtubeUrl, setYoutubeUrl] = useState(initial?.youtubeUrl ?? "");
  const [spotifyUrl, setSpotifyUrl] = useState(initial?.spotifyUrl ?? "");
  const [appleUrl, setAppleUrl] = useState(initial?.appleUrl ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "add" && !title.trim()) return;
    onSubmit({
      title: title.trim(),
      description: description.trim(),
      youtubeUrl: youtubeUrl.trim() || undefined,
      spotifyUrl: spotifyUrl.trim() || undefined,
      appleUrl: appleUrl.trim() || undefined,
    });
  };

  const inputClass =
    "w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-200 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 text-sm">
          {mode === "add" ? "エピソードを追加" : "エピソードを編集"}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            タイトル {mode === "add" && "*"}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="エピソードのタイトル"
            className={inputClass}
            required={mode === "add"}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            説明
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="エピソードの説明"
            rows={2}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            YouTube URL
          </label>
          <input
            type="url"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Spotify URL
          </label>
          <input
            type="url"
            value={spotifyUrl}
            onChange={(e) => setSpotifyUrl(e.target.value)}
            placeholder="https://open.spotify.com/episode/..."
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Apple Podcast URL
          </label>
          <input
            type="url"
            value={appleUrl}
            onChange={(e) => setAppleUrl(e.target.value)}
            placeholder="https://podcasts.apple.com/..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors"
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-2 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-500 transition-colors"
        >
          {mode === "add" ? (
            <>
              <Plus className="h-3.5 w-3.5" />
              追加
            </>
          ) : (
            <>
              <Save className="h-3.5 w-3.5" />
              保存
            </>
          )}
        </button>
      </div>
    </form>
  );
}
