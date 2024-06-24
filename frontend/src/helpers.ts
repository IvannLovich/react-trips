export function validateDates({
  cityName,
  currentDay,
  departureDay,
  arrivalDay,
}: {
  cityName: string | null;
  currentDay: Date;
  departureDay: Date | null;
  arrivalDay: Date | null;
}): boolean {
  let areValid = false;

  if (
    departureDay &&
    ((departureDay > currentDay &&
      (arrivalDay ? departureDay < arrivalDay : true)) ||
      (departureDay.getFullYear() === currentDay.getFullYear() &&
        departureDay.getMonth() === currentDay.getMonth() &&
        departureDay.getDate() + 1 === currentDay.getDate() &&
        (arrivalDay ? departureDay < arrivalDay : true))) &&
    cityName !== undefined &&
    cityName?.trim() !== ''
  ) {
    areValid = true;
  } else {
    areValid = false;
  }

  return areValid;
}
