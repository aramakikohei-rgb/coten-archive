import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { ArrowLeft, Plus, Pencil, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import type { Series } from "@/types/coten";
import { formatYearRange } from "@/lib/utils";
import { getCategoryColor } from "@/lib/constants";
import { useSeriesData } from "@/context/SeriesDataContext";
import CategoryBadge from "@/components/ui/CategoryBadge";
import TimePeriodBadge from "@/components/ui/TimePeriodBadge";
import EpisodeRow from "@/components/episodes/EpisodeRow";
import EpisodeForm from "@/components/episodes/EpisodeForm";
import SeriesForm from "@/components/series/SeriesForm";
import { useLocalEpisodes } from "@/hooks/useLocalEpisodes";

export default function SeriesDetail({ series }: { series: Series }) {
  const color = getCategoryColor(series.category);
  const navigate = useNavigate();
  const { editSeries, removeSeries, addedSeriesIds } = useSeriesData();
  const {
    episodes,
    addEpisode,
    editEpisodeLinks,
    removeAddedEpisode,
    addedEpisodeIds,
  } = useLocalEpisodes(series);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEpisodeId, setEditingEpisodeId] = useState<string | null>(null);
  const [editingSeries, setEditingSeries] = useState(false);
  const isUserAddedSeries = addedSeriesIds.has(series.id);
  const markerIcon = L.divIcon({
    className: "coten-marker",
    html: `<div class="coten-marker-dot" style="background-color: ${color};"><span class="coten-marker-count">${series.episodeCount}</span></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24 overflow-y-auto h-full">
      <Link
        to="/browse"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        一覧に戻る
      </Link>

      {editingSeries ? (
        <div className="mb-8">
          <SeriesForm
            mode="edit"
            initial={{
              title: series.title,
              titleEn: series.titleEn,
              description: series.description,
              category: series.category,
              region: series.region,
              timePeriod: series.timePeriod,
              startYear: series.startYear,
              endYear: series.endYear,
              coordinates: series.coordinates,
              thumbnailColor: series.thumbnailColor,
              tags: series.tags,
            }}
            onSubmit={(data) => {
              editSeries(series.id, {
                title: data.title,
                titleEn: data.titleEn,
                description: data.description,
                category: data.category,
                region: data.region,
                timePeriod: data.timePeriod,
                startYear: data.startYear,
                endYear: data.endYear,
                coordinates: data.coordinates,
                thumbnailColor: data.thumbnailColor,
                tags: data.tags,
              });
              setEditingSeries(false);
            }}
            onCancel={() => setEditingSeries(false)}
          />
        </div>
      ) : (
        <div className="mb-8">
          <div
            className="h-2 w-24 rounded-full mb-4"
            style={{ backgroundColor: series.thumbnailColor }}
          />
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-3xl font-bold text-slate-800 mb-1">
                {series.title}
              </h1>
              <p className="text-lg text-slate-500 mb-4">{series.titleEn}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 mt-1">
              <button
                onClick={() => setEditingSeries(true)}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="シリーズを編集"
              >
                <Pencil className="h-4 w-4" />
              </button>
              {isUserAddedSeries && (
                <button
                  onClick={() => {
                    removeSeries(series.id);
                    navigate("/browse");
                  }}
                  className="p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  title="シリーズを削除"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <CategoryBadge category={series.category} />
            <TimePeriodBadge period={series.timePeriod} />
            <span className="text-xs text-slate-500 flex items-center">
              {formatYearRange(series.startYear, series.endYear)}
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed">{series.description}</p>
        </div>
      )}

      <div className="h-48 rounded-xl overflow-hidden mb-8 border border-slate-200">
        <MapContainer
          center={series.coordinates}
          zoom={4}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution=""
            noWrap={true}
          />
          <Marker position={series.coordinates} icon={markerIcon} />
        </MapContainer>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">
          エピソード一覧
          <span className="text-sm font-normal text-slate-500 ml-2">
            全{episodes.length}話
          </span>
        </h2>
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-500 transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            エピソードを追加
          </button>
        )}
      </div>

      {showAddForm && (
        <div className="mb-4">
          <EpisodeForm
            mode="add"
            onSubmit={(data) => {
              addEpisode(data);
              setShowAddForm(false);
            }}
            onCancel={() => setShowAddForm(false)}
          />
        </div>
      )}

      <div className="space-y-2">
        {episodes.map((ep) => (
          <div key={ep.id}>
            {editingEpisodeId === ep.id ? (
              <EpisodeForm
                mode="edit"
                initial={{
                  title: ep.title,
                  description: ep.description,
                  youtubeUrl: ep.youtubeUrl,
                  spotifyUrl: ep.spotifyUrl,
                  appleUrl: ep.appleUrl,
                }}
                onSubmit={(data) => {
                  editEpisodeLinks(ep.id, {
                    title: data.title || undefined,
                    description: data.description || undefined,
                    youtubeUrl: data.youtubeUrl,
                    spotifyUrl: data.spotifyUrl,
                    appleUrl: data.appleUrl,
                  });
                  setEditingEpisodeId(null);
                }}
                onCancel={() => setEditingEpisodeId(null)}
              />
            ) : (
              <EpisodeRow
                episode={ep}
                color={series.thumbnailColor}
                seriesTitle={series.title}
                isUserAdded={addedEpisodeIds.has(ep.id)}
                onEdit={() => setEditingEpisodeId(ep.id)}
                onDelete={
                  addedEpisodeIds.has(ep.id)
                    ? () => removeAddedEpisode(ep.id)
                    : undefined
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
