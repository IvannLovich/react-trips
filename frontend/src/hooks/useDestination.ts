import { useCallback, useState, useEffect } from 'react';
// import { validateDates } from '../helpers';
import { debounce } from 'lodash';
import { FormType } from '../types';

const GEO_NAMES_API_USERNAME = import.meta.env.VITE_GEONAMES_API_USERNAME;
const GEO_NAMES_API = `http://api.geonames.org/postalCodeLookupJSON?username=${GEO_NAMES_API_USERNAME}`;

export function useDestination(args: FormType): {
  latitude: number | undefined;
  longitude: number | undefined;
  refreshLatitudeLongitude: ({
    cityName,
  }: {
    cityName: string | undefined;
  }) => Promise<void> | undefined;
} {
  const { cityName } = args;

  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();

  const refreshLatitudeLongitude = useCallback(
    debounce(async ({ cityName }: { cityName: string | undefined }) => {
      if (cityName) {
        const response = await fetch(`${GEO_NAMES_API}&placename=${cityName}`);
        const data = await response.json();
        const latitude = data.postalcodes[0].lat;
        const longitude = data.postalcodes[0].lng;
        setLatitude(latitude);
        setLongitude(longitude);
      }
    }, 1000),
    []
  );

  useEffect(() => {
    refreshLatitudeLongitude({ cityName });
    return refreshLatitudeLongitude.cancel;
  }, [cityName, refreshLatitudeLongitude]);

  return { latitude, longitude, refreshLatitudeLongitude };
}
