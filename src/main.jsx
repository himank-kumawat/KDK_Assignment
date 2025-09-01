import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { FormProvider } from './context/FormContext.jsx';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <FormProvider>
    <App />
  </FormProvider>
);
