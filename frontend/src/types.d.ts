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

export type FormType = {
  travels?: Travels[];
  cityName?: string | undefined;
  currentDay: Date;
  departureDay?: Date | null;
  arrivalDay?: Data | null;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitCity?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type FormProps = Omit<FormType, 'currentDay'>;

export type FormState = Omit<
  FormType,
  'currentDay',
  'handleChange',
  'submitCity'
>;
export type FormContextType = {
  travels: Travels[];
  addNewTravel: (travel: Travels) => void;
  cityName: string | undefined;
  choiseNewCity: (city: string) => void;
  departureDay: Date | null | undefined;
  choiseDepartureDay: (date: Date) => void;
  arrivalDay: Date | null | undefined;
  choiseArrivalDay: (date: Date) => void;
};

export type FormAction =
  | { type: 'CHOISE_NEW_CITY'; payload: string }
  | { type: 'CHOISE_DEPARTURE_DAY'; payload: Date }
  | { type: 'CHOISE_ARRIVAL_DAY'; payload: Date }
  | { type: 'ADD_NEW_TRAVEL'; payload: Travels };

export type DatesState = {
  start: string;
  end: string;
};
