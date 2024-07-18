import { FormAction, FormState } from '../types';

export function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'CHOISE_NEW_CITY':
      return { ...state, city: action.payload };
    case 'CHOISE_DEPARTURE_DAY':
      return { ...state, departure: action.payload };
    case 'CHOISE_ARRIVAL_DAY':
      return { ...state, arrival: action.payload };
    case 'ADD_NEW_TRAVEL':
      return { ...state, travels: [...state.travels, action.payload] };
    default:
      return state;
  }
}
