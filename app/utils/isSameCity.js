'use server'

async function getCityFromAddress(address){
  
  const olaUrl = process.env.NEXT_PUBLIC_OLA_MAPS_URL; //🔏 Replace with .env URL
  const apiKey = process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY; //🔏 Replace with .env API key

  const response = await fetch(`${olaUrl}/places/v1/geocode?address=${encodeURIComponent(address)}&api_key=${apiKey}`);
  const data = await response.json();

  if (data.status !== 'ok' || !data.geocodingResults?.length) return null;

  const components = data.geocodingResults[0].address_components;
  const cityComponent = components.find(c =>
    c.types.includes('locality') ||
    c.types.includes('administrative_area_level_2') ||
    c.types.includes('postal_town') ||
    c.types.includes('sublocality')
  );

  return cityComponent?.short_name?.toLowerCase().replace(/ district$/, '').trim() || null;

}


async function isSameCity(pickup, dropoff){
  try {
    const [pickupCity, dropoffCity] = await Promise.all([
      getCityFromAddress(pickup),
      getCityFromAddress(dropoff)
    ]);

    if (!pickupCity || !dropoffCity) {
      console.log('City extraction failed');
      return null;
    }

    return pickupCity === dropoffCity;
  } catch (err) {
    console.log('Error comparing cities:', err.message);
    return null;
  }
}
export default isSameCity