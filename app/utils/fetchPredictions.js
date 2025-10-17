'use server';

export async function fetchPredictions(query) {
  const olaUrl = "https://api.olamaps.io"; // Replace with .env URL
  const apiKey = "k4NvmUP8MbLpKo8jzA28TAyUjhlu6FxsKDPKcGhx"; // Replace with .env API key

  try {
    const res = await fetch(`${olaUrl}/places/v1/autocomplete?input=${query}&api_key=${apiKey}`);
    
    // const text = await res.text();
    // console.error("Raw response:", text);

    if (!res.ok) {
      return { error: `Whoops An Error Occured !`, predictions: [] };
    }

    const data = await res.json();
    return { error: null, predictions: data?.predictions || [] };
  } catch (error) {
    return { error: "Unknown error", predictions: [] };// return empty array to avoid breaking ui
  }
}
