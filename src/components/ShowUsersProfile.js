import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';

import '../assets/styles/components/ProfileLandingPage.scss';

export const ShowUsersProfile = () => {
  const dispatch = useDispatch();
  const handleClickProfileClose = () => {
    dispatch(actionsChangeView('hiddenAll'));
  };

  const { users, userProfileId } = useSelector((state) => state.userReducer);

  const userArr = users.filter((user) => user._id === userProfileId);
  const user = userArr[0];

  return (
    <div className="div-profile-container">
      <div className="div-profile-header">
        <h2>
          {user.fullName} <p className="p__profile-title">Profile</p>
        </h2>
        <div className="profile-header-icon">
          <i
            className="fa-solid fa-xmark"
            type="button"
            onClick={handleClickProfileClose}></i>
        </div>
      </div>

      <div className="div-profile-box-container">
        <section className="section-profile-box-image">
          <img
            className="profile-image"
            src={user.image}
            alt="imagen de perfil"
          />
          <h2>{user.fullName}</h2>
          {user.occupation && <p>{user.occupation}</p>}
        </section>

        <section className="section-profile-slack">
          <p className="p-title">Description</p>
          {user.description && <p>{user.description}</p>}
        </section>
        <section className="section-profile-slack">
          <p className="p-title">Phone</p>
          {user.phone && <p>{user.phone}</p>}
          <div className="div-profile-slack-button" />
        </section>
      </div>
    </div>
  );
};
