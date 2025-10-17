// updating markers on map
 const updateMarkers = (map, olaMaps, source, destination, pickupEl, dropoffEl, refs) => {
  const { sourceMarkerRef, destinationMarkerRef } = refs;

  if (sourceMarkerRef.current) sourceMarkerRef.current.remove();
  if (destinationMarkerRef.current) destinationMarkerRef.current.remove();

  if (source.lat && source.lng) {
    sourceMarkerRef.current = olaMaps
      .addMarker({ element: pickupEl, offset: [0, -20], anchor: "bottom" })
      .setLngLat([parseFloat(source.lng), parseFloat(source.lat)])
      .addTo(map);
  }

  if (destination.lat && destination.lng) {
    destinationMarkerRef.current = olaMaps
      .addMarker({ element: dropoffEl, offset: [0, -20], anchor: "bottom" })
      .setLngLat([parseFloat(destination.lng), parseFloat(destination.lat)])
      .addTo(map);
  }
};

export default updateMarkers