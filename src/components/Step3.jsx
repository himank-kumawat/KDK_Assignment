import React, { useContext } from 'react';
import Select from './Select';
import Checkbox from './Checkbox';
import { FormContext } from '../context/FormContext';
import useFormValidation from '../hooks/useFormValidation';

const COUNTRIES = ['United States','India','United Kingdom','Canada','Australia'];

export default function Step3(){
  const { state, dispatch } = useContext(FormContext);
  const { data, errors, touchedNext } = state;
  const { validateStep } = useFormValidation();

  function handleChange(e){
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    dispatch({ type: 'UPDATE_FIELD', field: name, value: val });
  }

  function handleNext(){
    dispatch({ type: 'MARK_TRIED_NEXT' });
    const errs = validateStep(3);
    if (Object.keys(errs).length === 0){
      dispatch({ type: 'NEXT_STEP' });
    }
  }

  function handleBack(){ dispatch({ type: 'PREV_STEP' }); }

  return (
    <div>
      <Select label="Country" name="country" value={data.country} onChange={handleChange} options={COUNTRIES} error={touchedNext && errors.country} />
      <Checkbox label="Subscribe to newsletter" name="newsletter" checked={data.newsletter} onChange={handleChange} />
      <div className="field">
        <label>Bio (optional)</label>
        <textarea name="bio" value={data.bio} onChange={handleChange} rows="4" />
      </div>
      <div className="actions">
        <button className="secondary" onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Submit</button>
      </div>
    </div>
  );
}
