'use client'

const getCurrentLocation = (onSuccess, onError) => {
  if (!navigator.geolocation) {
    onError?.('Geolocation is not supported by your browser');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      onSuccess?.(longitude, latitude);
    },
    (error) => {
      onError?.(error);
    }
  );
};

export default getCurrentLocation;
