import React, { useContext } from 'react';
import TextInput from './TextInput';
import { FormContext } from '../context/FormContext';
import useFormValidation from '../hooks/useFormValidation';

export default function Step2(){
  const { state, dispatch } = useContext(FormContext);
  const { data, errors, touchedNext } = state;
  const { validateStep } = useFormValidation();

  function handleChange(e){
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  }

  function handleNext(){
    dispatch({ type: 'MARK_TRIED_NEXT' });
    const errs = validateStep(2);
    if (Object.keys(errs).length === 0){
      dispatch({ type: 'NEXT_STEP' });
    }
  }

  function handleBack(){ dispatch({ type: 'PREV_STEP' }); }

  return (
    <div>
      <TextInput label="Username" name="username" value={data.username} onChange={handleChange} error={touchedNext && errors.username} />
      <TextInput label="Password" name="password" type="password" value={data.password} onChange={handleChange} error={touchedNext && errors.password} />
      <TextInput label="Confirm Password" name="confirmPassword" type="password" value={data.confirmPassword} onChange={handleChange} error={touchedNext && errors.confirmPassword} />
      <div className="actions">
        <button className="secondary" onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
