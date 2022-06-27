import React from 'react';
import { useDispatch } from 'react-redux';
import '../assets/styles/components/ListUsers.scss';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { getUserIdProfileAction } from '../store/actions/actionUsers';

export const ListUsers = ({ name, image, email, phone, uid, setOpened }) => {
  const dispatch = useDispatch();
  const handleClickGetUserId = () => {
    dispatch(getUserIdProfileAction(uid));
    dispatch(actionsChangeView('showUsersProfile'));
    setOpened(false);
  };
  return (
    <div className="list-users__container">
      <img src={image} alt="user" />
      <div>
        <h2>{name}</h2>
        <p>
          <span>{`${email} ▪️ `}</span> {phone}
        </p>
      </div>
      <button className="btn_view_profile" onClick={handleClickGetUserId}>
        View Profile
      </button>
    </div>
  );
};
