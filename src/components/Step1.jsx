import React, { useContext } from 'react';
import TextInput from './TextInput';
import { FormContext } from '../context/FormContext';
import useFormValidation from '../hooks/useFormValidation';

export default function Step1(){
  const { state, dispatch } = useContext(FormContext);
  const { data, errors, touchedNext } = state;
  const { validateStep } = useFormValidation();

  function handleChange(e){
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  }

  function handleNext(){
    debugger;
    dispatch({ type: 'MARK_TRIED_NEXT' });
    const errs = validateStep(1);
    if (Object.keys(errs).length === 0){
      dispatch({ type: 'NEXT_STEP' });
    }
  }

  return (
    <div>
      <TextInput label="First Name" name="firstName" value={data.firstName} onChange={handleChange} error={touchedNext && errors.firstName} />
      <TextInput label="Last Name" name="lastName" value={data.lastName} onChange={handleChange} error={touchedNext && errors.lastName} />
      <TextInput label="Email" name="email" value={data.email} onChange={handleChange} error={touchedNext && errors.email} />
      <div className="actions">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
