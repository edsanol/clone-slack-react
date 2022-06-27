import React from 'react';
import '../assets/styles/components/InputLoginRegister.scss'

export const InputLoginRegister = ({ label, placeholder, type, name, id }) => {
  return (
    <>
      <label htmlFor="name" className="mainForm__form-label">{label}</label>
      <input
        className="mainForm__form-input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder} />
    </>
  );
}
