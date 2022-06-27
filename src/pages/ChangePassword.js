import React from 'react';
import { HeaderRecoverChangePassword } from '../components/HeaderRecoverChangePassword';
import { useForm } from 'react-hook-form';
import { FooterLoginRegister } from '../components/FooterLoginRegister';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordAction } from '../store/actions/actionUsers';
import { logoutUser } from '../store/actions/actionsAuth';
import { disconnectActionsSocket } from '../store/actions/actionsSocket';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

export const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const { socket } = useSelector((state) => state.socketReducer);
  const passValidator = useSelector(
    (state) => state.userReducer.changePassword
  );

  const onSubmit = (data) => {
    const { oldPassword, newPassword, repeatPassword } = data;

    if (newPassword !== repeatPassword) {
      toast.error('Passwords do not match', {
        position: 'bottom-right',
        theme: 'colored',
      });
      return;
    }

    dispatch(
      changePasswordAction({ oldPassword, newPassword, repeatPassword })
    );
  };

  if (passValidator) {
    toast.success('Updated profile', {
      position: 'bottom-right',
      theme: 'colored',
    });

    dispatch(disconnectActionsSocket());
    socket.disconnect();
    dispatch(logoutUser());
    window.location.reload(true);
  }

  return (
    <>
      <HeaderRecoverChangePassword
        title={'Change your password'}
        text={
          'To change the password, enter the password you use to connect to'
        }
        textSlack={' Slack'}
      />

      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="oldPassword" className="mainForm__form-label">
            Enter your password
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="Enter your old password"
            {...register('oldPassword', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.oldPassword?.type === 'required' && (
            <p className="input__error">⚠ The password field is required</p>
          )}
          {errors.oldPassword?.type === 'minLength' && (
            <p className="input__error">
              ⚠ The password must have at least 8 characters
            </p>
          )}
          {errors.oldPassword?.type === 'pattern' && (
            <p className="input__error">
              ⚠ The password must have at least one uppercase letter, one
              lowercase letter, a number or special character, and a length
              minimum of 8 characters
            </p>
          )}
          <label htmlFor="newPassword" className="mainForm__form-label">
            Enter your new password
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder=" Enter your new password"
            {...register('newPassword', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.newPassword?.type === 'required' && (
            <p className="input__error">⚠ The password field is required</p>
          )}
          {errors.newPassword?.type === 'minLength' && (
            <p className="input__error">
              ⚠ The password must have at least 8 characters
            </p>
          )}
          {errors.newPassword?.type === 'pattern' && (
            <p className="input__error">
              ⚠ The password must have at least one uppercase letter, one
              lowercase letter, a number or special character, and a length
              minimum of 8 characters
            </p>
          )}
          <label htmlFor="repeatPassword" className="mainForm__form-label">
            Repeat password
          </label>
          <input
            className="mainForm__form-input"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat password"
            {...register('repeatPassword', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.repeatPassword?.type === 'required' && (
            <p className="input__error">⚠ The password field is required</p>
          )}
          {errors.repeatPassword?.type === 'minLength' && (
            <p className="input__error">
              ⚠ The password must have at least 8 characters
            </p>
          )}
          {errors.repeatPassword?.type === 'pattern' && (
            <p className="input__error">
              ⚠ The password must have at least one uppercase letter, one
              lowercase letter, a number or special character, and a length
              minimum of 8 characters
            </p>
          )}
          <input
            type="submit"
            value="Change"
            className="button-form-login-register"
          />
        </form>
        <div className="mainForm__link">
          <Link to="/">Back to Home Page</Link>
        </div>
      </main>
      <FooterLoginRegister />
      <ToastContainer />
    </>
  );
};
