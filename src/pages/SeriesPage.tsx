import { useParams, Navigate } from "react-router";
import { useSeriesData } from "@/context/SeriesDataContext";
import SeriesDetail from "@/components/series/SeriesDetail";

export default function SeriesPage() {
  const { seriesId } = useParams();
  const { allSeries } = useSeriesData();
  const series = allSeries.find((s) => s.id === seriesId);

  if (!series) return <Navigate to="/browse" replace />;

  return <SeriesDetail series={series} />;
}
