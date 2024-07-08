import { useCallback, useEffect, useState } from 'react';
import { FormType } from '../types';

export function useDaysLeft(args: FormType): {
  days: number;
  daysLeftToTrip: () => Promise<void>;
} {
  const { currentDay, departureDay } = args;

  const [days, setDays] = useState(0);

  const daysLeftToTrip = useCallback(async () => {
    if (departureDay && currentDay) {
      // One day in milliseconds
      const oneDay = 24 * 60 * 60 * 1000;

      // Set hours, minutes, seconds, and milliseconds to 0 for accurate calculation
      departureDay.setHours(0, 0, 0, 0);
      currentDay.setHours(0, 0, 0, 0);

      // Calculate the difference in days
      const timeDiff = Math.abs(departureDay.getTime() - currentDay.getTime());

      // Absolute difference
      const daysLeft = Math.ceil(timeDiff / oneDay) + 1;

      // Add 1 to include the day of the trip
      setDays(daysLeft);
    } else {
      setDays(0);
    }
  }, [currentDay, departureDay]);

  useEffect(() => {
    daysLeftToTrip();
  }, [daysLeftToTrip]);

  return { days, daysLeftToTrip };
}
