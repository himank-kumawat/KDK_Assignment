import React from 'react';

export default function Select({ label, name, value, onChange, options, error }){
  return (
    <div className="field">
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        <option value="">-- Select --</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
