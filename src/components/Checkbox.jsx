import React from 'react';

export default function Checkbox({ label, name, checked, onChange }){
  return (
    <div className="field checkbox-field">
      <label>
        <input type="checkbox" name={name} checked={checked} onChange={onChange} /> {label}
      </label>
    </div>
  );
}
