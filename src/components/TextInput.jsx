import React from 'react';

export default function TextInput({ label, name, value, onChange, type='text', error }){
  return (
    <div className="field">
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} type={type} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}
