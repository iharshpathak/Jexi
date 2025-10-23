import { useEffect, useRef } from "react";
import useMapStore from "../store/MapStore.js";
import assets from "../assets/assets.js";
import createMarkerElement from "../utils/createMarkerElement.js";
import updateMarkers from "../utils/updateMarkers.js";
import updatePolyline from "../utils/updatePolyline.js";
import useCabStore from "../store/CabStore.js";
import { toast } from "sonner";

function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const olaMapsRef = useRef(null);
  const sourceMarkerRef = useRef(null);
  const destinationMarkerRef = useRef(null);
  const polylineRef = useRef(null); // store polyline reference

  const { sourceCoordinates, destinationCoordinates } = useMapStore();
  const { distance } = useCabStore();

  useEffect(() => {
    import("olamaps-web-sdk").then((module) => {
      const { OlaMaps } = module;

      let myMap = null;
      let olaMaps = null;

      try {
        olaMaps = new OlaMaps({
          apiKey: process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY,
        }); // 🔏use env key

        myMap = olaMaps.init({
          style:
            process.env.NEXT_PUBLIC_OLA_MAPS_STYLE, // 🔏use env key
          container: "map",
          center: [77.391, 28.5355],
          zoom: 14,
          interaction: {
            scrollZoom: true,
            doubleClickZoom: true,
            dragPan: true,
            touchZoom: true,
          },
        });

        // Handle map errors
        myMap.on("error", (e) => {
          if (e?.status === 500 || e?.message?.includes("500") || e?.status === 401 || e?.message?.includes("401")) {
            toast(
              "We're experiencing issues with Ola Maps. Hang tight, we'll be right back!",
              {
                icon: "🚨",
                style: {
                  backgroundColor: "#FFE5E5",
                  color: "#000000",
                  fontWeight: "800",
                  boxShadow: "8px 8px 0px #000",
                  border: "4px solid #FF3333",
                  borderRadius: "8px",
                },
              },
            );
          } else {
            toast("Map Failed To Load Please Referesh !", {
              icon: "⚠️",
              style: {
                backgroundColor: "#FFF7E5",
                color: "#000000",
                fontWeight: "800",
                boxShadow: "8px 8px 0px #000",
                border: "4px solid #FFC233",
                borderRadius: "8px",
              },
            });
          }
        });
      } catch (err) {
        toast("Map Failed To Load Please Referesh !", {
          icon: "🚙",
          style: {
            backgroundColor: "#FFF7E5",
            color: "#000000",
            fontWeight: "800",
            boxShadow: "8px 8px 0px #000",
            border: "4px solid #FFC233",
            borderRadius: "8px",
          },
        });
        return;
      }

      mapInstanceRef.current = myMap;
      olaMapsRef.current = olaMaps;
    });
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const olaMaps = olaMapsRef.current;

    if (!map || !olaMaps) return;

    const updateMap = async () => {
      const hasSource = sourceCoordinates.lat && sourceCoordinates.lng;
      const hasDestination =
        destinationCoordinates.lat && destinationCoordinates.lng;

      if (!hasSource || !hasDestination) {
        if (sourceMarkerRef.current) {
          sourceMarkerRef.current.remove();
          sourceMarkerRef.current = null;
        }
        if (destinationMarkerRef.current) {
          destinationMarkerRef.current.remove();
          destinationMarkerRef.current = null;
        }
        if (polylineRef.current) {
          map.removeLayer(polylineRef.current);
          polylineRef.current = null;
        }

        map.setZoom(14);
        map.setCenter([77.391, 28.5355]);
        return;
      }

      const pickupEl = createMarkerElement(assets.pickupMarker.src, 40);
      const dropoffEl = createMarkerElement(assets.dropoffMarker.src, 30);

      updateMarkers(
        map,
        olaMaps,
        sourceCoordinates,
        destinationCoordinates,
        pickupEl,
        dropoffEl,
        {
          sourceMarkerRef,
          destinationMarkerRef,
        },
      );

      // wait for style to load before adding polyline
      if (!map.isStyleLoaded()) {
        map.once("load", async () => {
          polylineRef.current = await updatePolyline(
            map,
            sourceCoordinates,
            destinationCoordinates,
          );
        });
      } else {
        polylineRef.current = await updatePolyline(
          map,
          sourceCoordinates,
          destinationCoordinates,
        );
      }

      const centerLat =
        (parseFloat(sourceCoordinates.lat) +
          parseFloat(destinationCoordinates.lat)) /
        2;
      const centerLng =
        (parseFloat(sourceCoordinates.lng) +
          parseFloat(destinationCoordinates.lng)) /
        2;

      let zoomLevel = 14;
      if (distance > 100) zoomLevel = 5;
      else if (distance > 50) zoomLevel = 8;
      else if (distance > 15) zoomLevel = 10;
      else if (distance > 10) zoomLevel = 11;
      else if (distance > 3) zoomLevel = 12;
      else if (distance > 1) zoomLevel = 14;
      else zoomLevel = 18;

      map.setCenter([centerLng, centerLat]);
      map.setZoom(zoomLevel);
    };

    updateMap();
  }, [sourceCoordinates, destinationCoordinates, distance]);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        id="map"
        ref={mapRef}
        className="w-[100%] h-[100%] border-4 border-dashed border-black hover:shadow-[8px_8px_0px_#000] hover:border-4 hover:border-solid hover:border-black bg-[#f4f4f4]"
      />
      <div className="absolute bottom-10 right-2 z-[1000] flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="p-[8px] text-[18px] bg-white border-2 border-black cursor-pointer hover:shadow-[8px_8px_0px_#000]"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="p-[8px] text-[18px] bg-white border-2 border-black cursor-pointer hover:shadow-[8px_8px_0px_#000]"
        >
          −
        </button>
      </div>
    </div>
  );
}

export default Map;
