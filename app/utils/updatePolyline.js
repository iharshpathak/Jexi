// adddin and updating polyline on map
import { fetchRoute } from "./fetchRoute.js";

const updatePolyline = async (map, source, destination) => {
  if (map.getLayer("routeLine")) map.removeLayer("routeLine");
  if (map.getSource("route")) map.removeSource("route");

  const routeCoordinates = await fetchRoute(source, destination);

  const route = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: routeCoordinates,
    },
  };

  if (map.getSource("route")) {
    map.getSource("route").setData(route);
  } else {
    map.addSource("route", {
      type: "geojson",
      data: route,
    });
  }

  if (!map.getLayer("routeLine")) {
    map.addLayer({
      id: "routeLine",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#f44336",
        "line-width": 6,
      },
    });
  }
};

export default updatePolyline