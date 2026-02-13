import L from "leaflet";

export function createClusterIcon(cluster: { getChildCount: () => number }) {
  const count = cluster.getChildCount();
  const size = count < 10 ? 36 : count < 30 ? 44 : 52;

  return L.divIcon({
    html: `<div class="coten-cluster">${count}</div>`,
    className: "coten-cluster-wrapper",
    iconSize: L.point(size, size),
  });
}
