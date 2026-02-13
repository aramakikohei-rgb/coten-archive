import L from "leaflet";
import { Marker } from "react-leaflet";
import type { Series } from "@/types/coten";
import { getCategoryColor } from "@/lib/constants";
import SeriesPopup from "./SeriesPopup";

export default function SeriesMarker({ series }: { series: Series }) {
  const color = getCategoryColor(series.category);

  const icon = L.divIcon({
    className: "coten-marker",
    html: `
      <div class="coten-marker-dot" style="background-color: ${color};">
        <span class="coten-marker-count">${series.episodeCount}</span>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });

  return (
    <Marker position={series.coordinates} icon={icon}>
      <SeriesPopup series={series} />
    </Marker>
  );
}
