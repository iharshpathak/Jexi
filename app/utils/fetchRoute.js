'use server'

import polyline from '@mapbox/polyline';

export async function fetchRoute(origin, destination) {
  const olaUrl = "https://api.olamaps.io";
  const apiKey = "k4NvmUP8MbLpKo8jzA28TAyUjhlu6FxsKDPKcGhx";

  try {
    const res = await fetch(
      `${olaUrl}/routing/v1/directions?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&api_key=${apiKey}`,
      { method: 'POST' }
    );

    if (!res.ok) throw new Error(`API failed with status ${res.status}`);

    const data = await res.json();

    const encodedPolyline = data.routes?.[0]?.overview_polyline;
    if (!encodedPolyline) throw new Error("No polyline found");

    const decoded = polyline.decode(encodedPolyline); // [ [lat, lng], ... ]
    return decoded.map(([lat, lng]) => [lng, lat]); // Convert to [lng, lat]
  } catch (error) {
    console.error("Error fetching route:", error);
    return [];
  }
}
