import { useCallback, useState, useEffect } from 'react';
import { GeoLocation } from '../types';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API = `https://api.weatherbit.io/v2.0/current?key=${WEATHER_API_KEY}&include=minutely`;

export function useWeather(args: GeoLocation): {
  temperature: number | undefined;
  getWeatherInfo: () => Promise<void> | undefined;
} {
  const { latitude, longitude } = args;
  const [temperature, setTemperature] = useState<number | undefined>();

  const getWeatherInfo = useCallback(async () => {
    if (latitude && longitude) {
      try {
        const response = await fetch(
          `${WEATHER_API}&lat=${latitude}&lon=${longitude}`
        );
        const res = await response.json();
        if (res.data && res.data.length > 0) {
          const temp = res.data[0].app_temp;
          console.log('Weather info fetched:');
          setTemperature(temp);
        } else {
          console.error('No weather data available');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }, [latitude, longitude]);

  useEffect(() => {
    getWeatherInfo();
  }, [getWeatherInfo]);

  return { temperature, getWeatherInfo };
}
