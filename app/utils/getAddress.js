'use server';

 async function getAddress(lat, lng) {
  const olaUrl = process.env.NEXT_PUBLIC_OLA_MAPS_URL; //🔏 Replace with .env URL
  const apiKey = process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY; //🔏 Replace with .env API key
   

  try {
    const res = await fetch(
      `${olaUrl}/places/v1/reverse-geocode?latlng=${encodeURIComponent(`${lat},${lng}`)}&api_key=${apiKey}`
    );

    if (!res.ok) {
      throw new Error(`API failed with status ${res.status}`);
    }

    const data = await res.json();
    const formattedAddress = data?.results?.[0]?.formatted_address;

    return formattedAddress || '';
  } catch (error) {
    console.error('Location fetch error:', error);
    return '';
  }
}
export default getAddress