import { useContext } from 'react';
import { FormContext } from '../context/form';

export function useForm() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }

  console.log('CONTEXT', context);

  return context;
}
