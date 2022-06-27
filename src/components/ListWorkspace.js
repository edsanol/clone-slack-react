import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/components/ListChannels.scss';
import { toast } from 'react-toastify';
import { addUserToWorkspaceAction } from '../store/actions/actionsAuth';

export const ListWorkspace = ({
  name,
  users,
  setOpened,
  workspaceId,
}) => {
  const memberInWorkspace = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const handleClickJoin = (e) => {
    e.preventDefault();
    dispatch(addUserToWorkspaceAction({ workspaceId }));
    setOpened(false);
    toast.info(`You joined the ${name} successfully`, {
      position: 'top-center',
      theme: 'colored',
    });
  };

  return (
    <div className="list-channels__container">
      <h2>{name}</h2>
      <p>
        <span>{`${users.length} members`}</span>
      </p>
      {users.includes(memberInWorkspace) ? (
        <button className="btn__list-channels_member">Member</button>
      ) : (
        <button className="btn__list-channels" onClick={handleClickJoin}>
          Join
        </button>
      )}
    </div>
  );
};
