import { useState } from 'react';

const PHOTO_API_KEY = import.meta.env.VITE_PHOTO_API_KEY;
const PHOTO_API = `https://pixabay.com/api/?key=${PHOTO_API_KEY}&image_type=photo`;

export function useLocationPhoto({ cityName }: { cityName: string }) {
  const [photo, setPhoto] = useState();

  const refreshDestinationPhoto = async () => {
    const response = await fetch(`${PHOTO_API}&q=${cityName}`);
    const res = await response.json();
    const photo = res.hits[0].largeImageURL;
    setPhoto(photo);
  };
  return { photo, refreshDestinationPhoto };
}
