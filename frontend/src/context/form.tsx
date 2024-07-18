import { useReducer, createContext } from 'react';
import { Travels, FormContextType, FormAction, FormState } from '../types';
import { reducer } from '../reducers/form';

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

const initialState: FormState = {
  travels: [],
};

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer<React.Reducer<FormState, FormAction>>(
    reducer,
    initialState
  );

  const choiseNewCity = (city: string) => {
    dispatch({ type: 'CHOISE_NEW_CITY', payload: city });
  };

  const choiseDepartureDay = (date: Date) => {
    dispatch({ type: 'CHOISE_DEPARTURE_DAY', payload: date });
  };

  const choiseArrivalDay = (date: Date) => {
    dispatch({ type: 'CHOISE_ARRIVAL_DAY', payload: date });
  };

  const addNewTravel = (travel: Travels) => {
    dispatch({ type: 'ADD_NEW_TRAVEL', payload: travel });
  };

  return (
    <FormContext.Provider
      value={{
        travels: state.travels,
        addNewTravel,
        cityName: state.city,
        choiseNewCity,
        departureDay: state.departure,
        choiseDepartureDay,
        arrivalDay: state.arrival,
        choiseArrivalDay,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
