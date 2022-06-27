import React, { useState } from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { forgotPasswordAction } from '../store/actions/actionUsers';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const RecoverPassword = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (email, e) => {
    dispatch(forgotPasswordAction(email.email));
    e.target.reset();
  };

  return (
    <>
      <HeaderRecoverChangePassword
        title={'Recover your password'}
        text={
          'To recover your password, enter the email address you use to connect to'
        }
        textSlack={' Slack'}
      />

      <main className="mainForm">
        <form
          className="mainForm__form"
          action=""
          onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="mainForm__form-label">
            Email
          </label>
          <input
            data-cy="email"
            className="mainForm__form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="input__error">⚠ The email field is required</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="input__error" data-cy="error-email-format-input">
              ⚠ The email format is incorrect
            </p>
          )}
          <button
            data-cy="recover-click-event"
            type="submit"
            value="Login"
            className="button-form-login-register">
            Recover password
          </button>
        </form>
        <div className="mainForm__link">
          <Link to="/auth/login">Go to login</Link>
        </div>
      </main>

      <FooterLoginRegister />
      <ToastContainer />
    </>
  );
};
