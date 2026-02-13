import { useState } from "react";
import { X, Plus, Save } from "lucide-react";
import type { Category, TimePeriod, Region } from "@/types/coten";
import {
  CATEGORY_CONFIG,
  TIME_PERIOD_CONFIG,
  REGION_CONFIG,
} from "@/lib/constants";

interface SeriesFormProps {
  mode: "add" | "edit";
  initial?: {
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
  };
  onSubmit: (data: {
    title: string;
    titleEn: string;
    description: string;
    category: Category;
    region: Region;
    timePeriod: TimePeriod;
    startYear: number;
    endYear: number;
    coordinates: [number, number];
    thumbnailColor: string;
    tags: string[];
  }) => void;
  onCancel: () => void;
}

const categories = Object.keys(CATEGORY_CONFIG) as Category[];
const timePeriods = Object.keys(TIME_PERIOD_CONFIG) as TimePeriod[];
const regions = Object.keys(REGION_CONFIG) as Region[];

export default function SeriesForm({
  mode,
  initial,
  onSubmit,
  onCancel,
}: SeriesFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [titleEn, setTitleEn] = useState(initial?.titleEn ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [category, setCategory] = useState<Category>(
    initial?.category ?? "biography",
  );
  const [region, setRegion] = useState<Region>(initial?.region ?? "japan");
  const [timePeriod, setTimePeriod] = useState<TimePeriod>(
    initial?.timePeriod ?? "modern",
  );
  const [startYear, setStartYear] = useState(
    initial?.startYear?.toString() ?? "",
  );
  const [endYear, setEndYear] = useState(initial?.endYear?.toString() ?? "");
  const [lat, setLat] = useState(initial?.coordinates?.[0]?.toString() ?? "");
  const [lng, setLng] = useState(initial?.coordinates?.[1]?.toString() ?? "");
  const [thumbnailColor, setThumbnailColor] = useState(
    initial?.thumbnailColor ?? "#ef4444",
  );
  const [tags, setTags] = useState(initial?.tags?.join(", ") ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({
      title: title.trim(),
      titleEn: titleEn.trim(),
      description: description.trim(),
      category,
      region,
      timePeriod,
      startYear: Number(startYear) || 0,
      endYear: Number(endYear) || 0,
      coordinates: [Number(lat) || 0, Number(lng) || 0],
      thumbnailColor,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
  };

  const inputClass =
    "w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-200 transition-colors";

  const selectClass =
    "w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-200 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 text-sm">
          {mode === "add" ? "シリーズを追加" : "シリーズを編集"}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              タイトル *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="シリーズのタイトル"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              英語タイトル
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="English title"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            説明
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="シリーズの説明"
            rows={2}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              カテゴリー
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              className={selectClass}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_CONFIG[cat].label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              地域
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className={selectClass}
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {REGION_CONFIG[r].label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              時代
            </label>
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value as TimePeriod)}
              className={selectClass}
            >
              {timePeriods.map((tp) => (
                <option key={tp} value={tp}>
                  {TIME_PERIOD_CONFIG[tp].label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              開始年
            </label>
            <input
              type="number"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              placeholder="-500"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              終了年
            </label>
            <input
              type="number"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              placeholder="2025"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              緯度
            </label>
            <input
              type="number"
              step="any"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="35.68"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              経度
            </label>
            <input
              type="number"
              step="any"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              placeholder="139.69"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              テーマカラー
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={thumbnailColor}
                onChange={(e) => setThumbnailColor(e.target.value)}
                className="h-9 w-9 rounded border border-slate-200 cursor-pointer"
              />
              <span className="text-xs text-slate-500">
                {thumbnailColor}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              タグ（カンマ区切り）
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="歴史, 日本, 幕末"
              className={inputClass}
            />
          </div>
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
