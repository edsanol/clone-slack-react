import React from 'react';
import '../assets/styles/components/HeaderLoginRegister.scss';

export const HeaderLoginRegister = ({ title }) => {
  return (
    <header className="headerForm">
      <img
        className="headerForm__logo-slack"
        src="https://i.postimg.cc/SsSbckGW/slackmove.gif"
        alt="slack icon"
      />
      <h1 className="headerForm__title">{title}</h1>
      <p className="headerForm__subtitle">
        We suggest you use the
        <strong> address you use at work.</strong>
      </p>
      <div className="headerForm__decoration">
        <div className="headerForm__decoration-line"></div>
        <img
          className="button-users__icon"
          src="https://i.postimg.cc/pL3dQh9K/users.png"
          alt="icon google"
        />
        <div className="headerForm__decoration-line"></div>
      </div>
    </header>
  );
};
