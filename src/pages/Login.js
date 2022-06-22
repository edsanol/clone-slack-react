import React from 'react';
import '../assets/styles/pages/Login.scss';
import { useForm } from 'react-hook-form';
import { HeaderLoginRegister } from '../components/HeaderLoginRegister';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { loginUserAction } from '../store/actions/actionsAuth';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password } = data;

    dispatch(loginUserAction({ email, password }));
  };

  return (
    <>
      <HeaderLoginRegister title={'Connect to Slack'} text={'O'} />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="mainForm__form-label">
            Email
          </label>
          <input
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
            <p className="input__error">⚠ The email format is incorrect</p>
          )}
          <label htmlFor="name" className="mainForm__form-label">
            password
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.password?.type === 'required' && (
            <p className="input__error">⚠ The password field is required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="input__error">
              ⚠ The password must have at least 8 characters
            </p>
          )}
          {errors.password?.type === 'pattern' && (
            <p className="input__error">
              ⚠ The password must have at least one uppercase letter, one
              lowercase letter, a number or special character, and a length
              minimum of 8 characters
            </p>
          )}
          <input
            type="submit"
            value="Login"
            className="button-form-login-register"
          />
        </form>
        <div className="mainForm__link">
          <p className="pin__magic">
            <Link to="/recover-password">Forgot your password?</Link>
          </p>
        </div>
      </main>

      <FooterLoginRegister />
      <ToastContainer />
    </>
  );
};
