import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.authReducer);

  return loggedIn ? <Navigate to="/" /> : children;
};
