import React from 'react';
import '../assets/styles/components/FooterLoginRegister.scss';
import { Link } from 'react-router-dom';

export const FooterLoginRegister = () => {
  return (
    <footer className="footer">
      <Link to="/project">About project</Link>
      <Link to="/aboutus">About us</Link>
    </footer>
  );
};
