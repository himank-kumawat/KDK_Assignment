import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

function hasNumber(str){ return /[0-9]/.test(str); }
function hasSpace(str){ return /\s/.test(str); }
function isEmail(str){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str); }
function hasDigit(str){ return /\d/.test(str); }

export default function useFormValidation(){
  const { state, dispatch } = useContext(FormContext);
  const { data } = state;

  function validateStep(step){
    const errors = {};
    if (step === 1){
      if (!data.firstName) errors.firstName = 'First name is required';
      else if (/[0-9]/.test(data.firstName)) errors.firstName = 'First name cannot contain numbers';
      if (!data.lastName) errors.lastName = 'Last name is required';
      else if (/[0-9]/.test(data.lastName)) errors.lastName = 'Last name cannot contain numbers';
      if (!data.email) errors.email = 'Email is required';
      else if (!isEmail(data.email)) errors.email = 'Enter a valid email';
    }
    if (step === 2){
      if (!data.username) errors.username = 'Username is required';
      else if (data.username.length < 3) errors.username = 'Username must be at least 3 characters';
      else if (hasSpace(data.username)) errors.username = 'Username cannot contain spaces';
      if (!data.password) errors.password = 'Password is required';
      else if (data.password.length < 8) errors.password = 'Password must be at least 8 characters';
      else if (!hasDigit(data.password)) errors.password = 'Password must contain at least one number';
      if (!data.confirmPassword) errors.confirmPassword = 'Please confirm password';
      else if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords do not match';
    }
    if (step === 3){
      if (!data.country) errors.country = 'Please select a country';
    }
    dispatch({ type: 'SET_ERRORS', errors });
    return errors;
  }

  return { validateStep };
}
