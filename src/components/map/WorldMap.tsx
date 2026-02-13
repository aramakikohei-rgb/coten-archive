import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useExplorer } from "@/context/ExplorerContext";
import { useSeriesData } from "@/context/SeriesDataContext";
import { filterSeries } from "@/lib/filters";
import { createClusterIcon } from "@/lib/map-helpers";
import SeriesMarker from "./SeriesMarker";
import MapControls from "./MapControls";
import MapFlyTo from "./MapFlyTo";

export default function WorldMap() {
  const { state } = useExplorer();
  const { allSeries } = useSeriesData();
  const filtered = filterSeries(allSeries, state.filters);

  return (
    <div className="absolute inset-0">
      <MapContainer
        center={[30, 40]}
        zoom={3}
        minZoom={2}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <MapFlyTo />
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          noWrap={true}
        />
        <MarkerClusterGroup
          chunkedLoading
          showCoverageOnHover={false}
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={50}
        >
          {filtered.map((series) => (
            <SeriesMarker key={series.id} series={series} />
          ))}
        </MarkerClusterGroup>
      </MapContainer>

      <MapControls />

      <div className="absolute bottom-4 left-3 z-[1000] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 shadow-sm">
        {filtered.length} / {allSeries.length} シリーズ
      </div>
    </div>
  );
}
