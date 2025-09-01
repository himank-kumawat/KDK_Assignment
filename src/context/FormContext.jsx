import React, { createContext, useReducer, useEffect } from 'react';
import reducer, { initialState } from '../reducer';
import useLocalStorage from '../hooks/useLocalStorage';

export const FormContext = createContext();

export function FormProvider({ children }){
  const [stored, setStored] = useLocalStorage('multiFormState', initialState);
  const [state, dispatch] = useReducer(reducer, stored || initialState);

 
  useEffect(() => {
    setStored(state);
  }, [state, setStored]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
