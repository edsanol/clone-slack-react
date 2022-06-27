import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RecoverPassword } from '../pages/RecoverPassword';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { useSelector } from 'react-redux';
import { LoadingPage } from '../pages/LoadingPage';

export const AuthRouter = () => {
  const { checking } = useSelector((state) => state.authReducer);

  return (
    <Routes>
      <Route exact path="register" element={<Register />} />

      <Route
        exact
        path="login"
        element={!checking ? <LoadingPage /> : <Login />}
      />
      <Route exact path="recover-password" element={<RecoverPassword />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};
