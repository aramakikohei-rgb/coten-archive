import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useExplorer } from "@/context/ExplorerContext";
import { useSeriesData } from "@/context/SeriesDataContext";

export default function MapFlyTo() {
  const map = useMap();
  const { state } = useExplorer();
  const { allSeries } = useSeriesData();

  useEffect(() => {
    if (state.selectedSeriesId) {
      const series = allSeries.find((s) => s.id === state.selectedSeriesId);
      if (series) {
        map.flyTo(series.coordinates, 5, { duration: 1.5 });
      }
    }
  }, [state.selectedSeriesId, map, allSeries]);

  useEffect(() => {
    const handleResize = () => map.invalidateSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [map]);

  return null;
}
