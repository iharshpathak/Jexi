'use server'

async function getDistance(sourceLat, sourceLng, destinationLat, destinationLng){
  const olaUrl = "https://api.olamaps.io"; // 🔏 Replace with .env URL
  const apiKey = "k4NvmUP8MbLpKo8jzA28TAyUjhlu6FxsKDPKcGhx"; //🔏 Replace with .env API key
  const origins = `${sourceLat},${sourceLng}`;
  const destinations = `${destinationLat},${destinationLng}`;

  try {
    const res = await fetch(`${olaUrl}/routing/v1/distanceMatrix/basic?origins=${encodeURIComponent(origins)}&destinations=${encodeURIComponent(destinations)}&api_key=${apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if (res.status === 400) {
      console.error("API Error x Details:", data); //server logging
      return { error: true, message: "Whoops, Unable To Fetch Distance !" };
    }

    if (!res.ok || data.status !== 'SUCCESS') {
      console.error("Full API Response:", JSON.stringify(data, null, 2)); //server logging
       return { error: true, message: "Error Fetching Distance !"};
    }

    const distanceInKm = Math.ceil(data.rows[0].elements[0].distance / 1000); // -> dist in km
    return distanceInKm;
  } catch (error) {
    console.error("Error fetching distance:", error); //server logging
    return { error: true, message: "Server Error, Plase Try Again Later !" };; // return empty to avoid breaking ui
  }
}

export default getDistance