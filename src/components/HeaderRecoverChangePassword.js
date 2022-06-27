import React from 'react';
import logoSlack from '../assets/img/logo-slack.svg'
import '../assets/styles/components/HeaderLoginRegister.scss';

export const HeaderRecoverChangePassword = ({ title, text, textSlack }) => {
  return (
    <header className="headerForm">
      <img
        className="headerForm__logo-slack"
        src={logoSlack}
        alt="slack icon"
      />
      <h1 className="headerForm__title">{title}</h1>
      <p className="headerForm__subtitle">
        {text}
        <strong>{textSlack}.</strong>
      </p>
    </header>
  );
};
