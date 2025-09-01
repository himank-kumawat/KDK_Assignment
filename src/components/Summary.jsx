import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export default function Summary(){
  const { state, dispatch } = useContext(FormContext);
  const { data } = state;

  function handleBack(){ dispatch({ type: 'PREV_STEP' }); }
  function handleSubmit(){
    
    alert('Form submitted! Check console for data.');
    console.log('Submitted data:', data);
    localStorage.removeItem('multiFormState');
    dispatch({ type: 'RESET' });
  }

  return (
    <div>
      <h3>Review your details</h3>
      <div className="summary">
        <div><strong>First Name:</strong> {data.firstName}</div>
        <div><strong>Last Name:</strong> {data.lastName}</div>
        <div><strong>Email:</strong> {data.email}</div>
        <div><strong>Username:</strong> {data.username}</div>
        <div><strong>Country:</strong> {data.country}</div>
        <div><strong>Newsletter:</strong> {data.newsletter ? 'Yes' : 'No'}</div>
        <div><strong>Bio:</strong> {data.bio || '-'}</div>
      </div>
      <div className="actions">
        <button className="secondary" onClick={handleBack}>Back</button>
        <button onClick={handleSubmit}>Confirm & Submit</button>
      </div>
    </div>
  );
}
