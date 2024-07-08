export type FormType = {
  cityName?: string | undefined;
  currentDay: Date;
  departureDay?: Date | null;
  arrivalDay?: Data | null;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitCity?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type FormProps = Omit<FormType, 'currentDay'>;

export type GeoLocation = {
  latitude: number | undefined;
  longitude: number | undefined;
};

export type Travels = {
  id: string;
  destinationName: string | undefined;
  tripDate: Date | null | undefined;
  daysLeft: number | undefined;
  temperature: number | undefined;
};

export type DatesState = {
  start: string;
  end: string;
};
