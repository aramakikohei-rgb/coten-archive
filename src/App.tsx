import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ExplorerProvider } from "@/context/ExplorerContext";
import { SeriesDataProvider } from "@/context/SeriesDataContext";
import AppShell from "@/components/layout/AppShell";
import MapExplorer from "@/pages/MapExplorer";
import SeriesBrowser from "@/pages/SeriesBrowser";
import SeriesPage from "@/pages/SeriesPage";

export default function App() {
  return (
    <SeriesDataProvider>
      <ExplorerProvider>
        <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Navigate to="/map" replace />} />
            <Route path="map" element={<MapExplorer />} />
            <Route path="browse" element={<SeriesBrowser />} />
            <Route path="series/:seriesId" element={<SeriesPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </ExplorerProvider>
    </SeriesDataProvider>
  );
}
