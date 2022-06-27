import React, { useState } from 'react';
import '../../assets/styles/components/modals/ModalCreateChannel.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createChannelAction } from '../../store/actions/actionsChannel';
import { Modal } from '@mantine/core';
import { ModalBecomePremium } from './ModalBecomePremium';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export const ModalCreateChannel = ({ setOpenedNewChannel }) => {
  const [openedModal, setOpenedModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const userId = useSelector((state) => state.authReducer.uid);
  const workspaceId = useSelector((state) => state.authReducer.workspaceId);
  const userPremium = useSelector((state) => state.userReducer.user.premium);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let { name, description, select } = data;

    if (select === 'private') {
      select = true;
    } else {
      select = false;
    }

    if (select === true && userPremium === true) {
      dispatch(createChannelAction({ name, description, select, userId, workspaceId }));
      setOpenedNewChannel(false);
    } else if (select === true && userPremium === false) {
      setOpenedModal(true);
    } else {
      dispatch(createChannelAction({ name, description, select, userId, workspaceId }));
      setOpenedNewChannel(false);
    }

    toast.info('channel created successfully', {
      position: 'top-center',
      theme: 'colored',
    });
  };

  return (
    <div className="modal-create-channel">
      <div className="modal-create-channel__title">
        <h2>Create a new channel</h2>
      </div>
      <div className="modal-create-channel__p">
        <p>
          Channels are a place where your team communicates. They work best when
          organized around a topic, for example #programming.
        </p>
      </div>
      <form
        className="modal-create-channel__form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-form__div">
          <label htmlFor="channel">Name</label>
          <input
            type="text"
            placeholder="Channel name"
            className="form-create-channel__input"
            name="channel"
            id="channel"
            {...register('name', {
              required: true,
            })}
          />
          {errors.name?.type === 'required' && (
            <p className="input__error">⚠ The name field is required</p>
          )}
        </div>
        <div className="modal-form__div">
          <label htmlFor="channelDescription">Description</label>
          <input
            type="text"
            className="form-create-channel__input"
            name="channelDescription"
            id="channelDescription"
            {...register('description', {
              required: true,
            })}
          />
          {errors.description?.type === 'required' && (
            <p className="input__error">⚠ The description field is required</p>
          )}
          <p>What is this channel about?</p>
        </div>
        <div className="modal-form__div">
          <label htmlFor="select">
            Do you want to create a public or private channel?
          </label>
          <select
            name="select"
            id="select"
            className="modal-select__select"
            {...register('select', {
              required: true,
            })}>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
          {userPremium === false && (
            <p>You must be premium to create private channels</p>
          )}
        </div>
        <Modal
          opened={openedModal}
          onClose={() => setOpenedModal(false)}
          overflow="inside"
          size="md"
          zIndex={999}>
          <ModalBecomePremium />
        </Modal>
        <input
          type="submit"
          value="Create"
          className="form-create-channel__button"
        />
      </form>
      <ToastContainer />
    </div>
  );
};
