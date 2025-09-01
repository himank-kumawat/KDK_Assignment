import React, { useContext } from 'react';
import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';
import Summary from './components/Summary.jsx';
import { FormContext } from './context/FormContext.jsx';

export default function App(){
  const { state } = useContext(FormContext);
  const { currentStep } = state;

  return (
    <div className="container">
      <h1>Registration</h1>
      <div className="card">
        <div className="step-indicator">Step {currentStep} of 4</div>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Summary />}
      </div>
      <footer className="footer">Built per project requirements • Uses Context + useReducer</footer>
    </div>
  );
}
