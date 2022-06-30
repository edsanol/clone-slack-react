import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { Modal } from '@mantine/core';
import { ModalEditUser } from './modals/ModalEditUser';
import '../assets/styles/components/ProfileLandingPage.scss';

export const ProfileLandingPage = () => {
  const dispatch = useDispatch();
  const handleClickProfileClose = () => {
    dispatch(actionsChangeView('hiddenAll'));
  };
  const [opened, setOpened] = useState(false);

  const { image, fullName, description, occupation, phone } = useSelector(
    (state) => state.userReducer.user
  );

  return (
    <div className="div-profile-container">
      <div className="div-profile-header">
        <h2>Profile</h2>
        <div className="profile-header-icon">
          <i
            className="fa-solid fa-xmark"
            type="button"
            onClick={handleClickProfileClose}></i>
        </div>
      </div>

      <div className="div-profile-box-container">
        <section className="section-profile-box-image">
          <img className="profile-image" src={image} alt="imagen de perfil" />
          <h2>{fullName}</h2>
          {occupation && <p>{occupation}</p>}
          {/* <p id="p-link" onClick={() => setOpened(true)}>
            Add your occupation
          </p> */}
        </section>
        <section className="section-profile-button">
          <i className="fa-solid fa-pen" onClick={() => setOpened(true)}></i>
          <p
            className="p__edit-your-profile-text"
            onClick={() => setOpened(true)}>
            Edit your profile{' '}
          </p>
          <Modal zIndex={1000} opened={opened} onClose={() => setOpened(false)}>
            {<ModalEditUser setOpened={setOpened} />}
          </Modal>
        </section>
        <section className="section-profile-slack">
          <p className="p-title">Description</p>
          {description && <p>{description}</p>}
        </section>
        <section className="section-profile-slack">
          <p className="p-title">Phone</p>
          {phone && <p>{phone}</p>}
          <div className="div-profile-slack-button" />
        </section>
      </div>
    </div>
  );
};
