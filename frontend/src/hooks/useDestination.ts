import { useCallback, useState, useEffect } from 'react';
import { validateDates } from '../helpers';
import { FormType } from '../types';

const GEO_NAMES_API_USERNAME = 'ivoelflaco';
const GEO_NAMES_API = `http://api.geonames.org/postalCodeLookupJSON?username=${GEO_NAMES_API_USERNAME}`;

export function useDestination(args: FormType): {
  latitude: number | undefined;
  longitude: number | undefined;
  city: string | undefined;
  refreshLatitudeLongitude: () => void;
} {
  const { cityNameRef, currentDay, departureDayRef, arrivalDayRef } = args;

  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [city, setCity] = useState<string | undefined>();

  const refreshLatitudeLongitude = useCallback(async () => {
    const cityName = cityNameRef?.current?.value || '';
    const departureDay = departureDayRef?.current?.value
      ? new Date(departureDayRef.current.value)
      : null;
    const arrivalDay = arrivalDayRef?.current?.value
      ? new Date(arrivalDayRef.current.value)
      : null;

    if (!validateDates({ cityName, currentDay, departureDay, arrivalDay })) {
      console.log('por acá');
    } else {
      const response = await fetch(`${GEO_NAMES_API}&placename=${cityName}`);
      const data = await response.json();
      const latitude = data.postalcodes[0].lat;
      const longitude = data.postalcodes[0].lng;
      setLatitude(latitude);
      setLongitude(longitude);
      setCity(cityName);
    }
  }, [cityNameRef, currentDay, departureDayRef, arrivalDayRef]);

  useEffect(() => {
    refreshLatitudeLongitude();
  }, [refreshLatitudeLongitude]);

  return { latitude, longitude, city, refreshLatitudeLongitude };
}
