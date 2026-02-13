declare module "react-leaflet-cluster" {
  import type { ComponentType, ReactNode } from "react";
  import type L from "leaflet";

  interface MarkerClusterGroupProps {
    children?: ReactNode;
    chunkedLoading?: boolean;
    showCoverageOnHover?: boolean;
    iconCreateFunction?: (cluster: L.MarkerCluster) => L.DivIcon;
    maxClusterRadius?: number;
    [key: string]: unknown;
  }

  const MarkerClusterGroup: ComponentType<MarkerClusterGroupProps>;
  export default MarkerClusterGroup;
}
