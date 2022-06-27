import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChangePassword } from '../pages/ChangePassword';
import { LandingPage } from '../pages/LandingPage';

export const NoAuthRouter = () => {

  return (
    <Routes>
      <Route exact path="home" element={<LandingPage />} />
      <Route exact path="change-password" element={<ChangePassword />} />
      <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  );
};
