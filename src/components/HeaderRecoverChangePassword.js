import React from 'react';

import '../assets/styles/components/HeaderLoginRegister.scss';

export const HeaderRecoverChangePassword = ({ title, text, textSlack }) => {
  return (
    <header className="headerForm">
      <img
        className="headerForm__logo-slack"
        src="https://i.postimg.cc/SsSbckGW/slackmove.gif"
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
