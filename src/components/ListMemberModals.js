import React from 'react';
import '../assets/styles/components/ListMemberModals.scss';
import '../assets/styles/components/ListChannels.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addUserToChannelAction } from '../store/actions/actionsChannel';
import { toast } from 'react-toastify';
export const ListMemberModals = ({
  name,
  image,
  email,
  occupation,
  uid,
  setOpened,
}) => {
  const dispatch = useDispatch();
  const channelId = useSelector((state) => state.socketReducer.activeChat);
  const channelsReducer = useSelector((state) => state.channelReducer.channels);
  const memberInChannel = uid;

  const handleClickJoin = (e) => {
    e.preventDefault();
    toast.info(`${name} joined this channel`, {
      position: 'top-center',
      theme: 'colored',
    });
    dispatch(addUserToChannelAction({ channelId, memberInChannel }));
    setOpened(false);
  };

  const channelFilter = channelsReducer.filter(
    (channel) => channel._id === channelId
  );

  return (
    <>
      <div className="member__list list-channels__container">
        <div className="member__list-img">
          <img src={image} alt="" />
        </div>
        <div className="member__list-data">
          <h2>{name}</h2>
          <span>
            {email} ▪️ {occupation}
          </span>
        </div>

        {channelFilter[0].users.includes(memberInChannel) ? (
          <button className="btn__list-channels_member">Member</button>
        ) : (
          <button className="btn__list-channels" onClick={handleClickJoin}>
            Add
          </button>
        )}
      </div>
    </>
  );
};
