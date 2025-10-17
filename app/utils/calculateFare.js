import priceConfig from '../assets/priceConfig.js';

function calculateFare(distance) {
  if (!distance || isNaN(distance)) return {};

  const result = {};
  for (const category in priceConfig) {
    const config = priceConfig[category];
    const baseFare = config.baseFare + config.perKmRate * distance;
    const minFare = Math.max(baseFare, config.minimumFare);
    const maxFare = minFare * 1.25;

    result[category] = {
      min: Math.round(minFare),
      max: Math.round(maxFare),
    };
  }
  return result;
}

export default calculateFare;
