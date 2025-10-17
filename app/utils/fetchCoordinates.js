'use server';

export async function fetchCoordinates(query) {
  const olaUrl = "https://api.olamaps.io"; // Replace with .env URL
  const apiKey = "k4NvmUP8MbLpKo8jzA28TAyUjhlu6FxsKDPKcGhx"; // Replace with .env API key

  try {
    const res = await fetch(`${olaUrl}/places/v1/geocode?address=${query}&api_key=${apiKey}`);

    if (!res.ok) {
      throw new Error(`API failed with status ${res.status}`);
    }

    const data = await res.json();
    const location = data?.geocodingResults?.[0]?.geometry?.location;

    return location || {};
  } catch (error) {
    return {}; // Ya tu error object bhi return kar sakta hai if needed
  }
}
