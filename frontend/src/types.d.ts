export type FormType = {
  cityNameRef?: React.RefObject<HTMLInputElement>;
  currentDay: Date;
  departureDayRef?: React.RefObject<HTMLInputElement>;
  arrivalDayRef?: React.RefObject<HTMLInputElement>;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  tripDate: Date | null;
  daysLeft: number | undefined;
  temperature: number | undefined;
};

export type DatesState = {
  start: string;
  end: string;
};
