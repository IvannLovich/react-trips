import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FormProvider } from './context/form.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FormProvider>
    <App />
  </FormProvider>
);
