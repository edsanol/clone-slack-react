import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';

import {
  getActiveChatAction,
  getMessagesAction,
  messageToDirectMessage,
} from '../store/actions/actionsSocket';

export const DirectMessageUser = ({ fullName, image, state, userId }) => {
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.socketReducer);
  const ToDirectMessage = useSelector(
    (state) => state.socketReducer.messageToDirectMessage
  );
  const myId = useSelector((state) => state.authReducer.uid);
  const workspaceActive = useSelector((state) => state.authReducer.workspaceId);
  const messageCurrent = useSelector(
    (state) => state.socketReducer.newMessageCurrent
  );

  const handleClick = () => {
    dispatch(getActiveChatAction(userId));
    dispatch(getMessagesAction(userId));
    dispatch(actionsChangeView('hiddenAll'));
  };

  useEffect(() => {
    if (
      ToDirectMessage === userId &&
      myId !== userId &&
      messageCurrent.workSpaceId === workspaceActive
    ) {
      setNotification(true);
    }

    dispatch(actionsChangeView('hiddenAll'));
  }, [ToDirectMessage, userId, dispatch, workspaceActive, messageCurrent]);

  useEffect(() => {
    if (
      activeChat === userId &&
      messageCurrent.workSpaceId !== workspaceActive
    ) {
      setNotification(false);
    } else if (
      activeChat !== userId &&
      messageCurrent.workSpaceId !== workspaceActive
    ) {
      setNotification(false);
    } else if (
      activeChat === userId &&
      messageCurrent.workSpaceId === workspaceActive
    ) {
      setNotification(false);
      dispatch(messageToDirectMessage(''));
    }
  }, [activeChat, userId, workspaceActive, messageCurrent]);

  return (
    <li className="list-user-dropdown-direct">
      <div
        className={`div-direct-message-user ${
          activeChat === userId ? 'list-user-isActive' : ''
        }`}
        onClick={handleClick}>
        <img src={image} alt={fullName} />

        <div className="list-channels-name-directs">
          {fullName}
          <span className={`${notification ? 'newMessageUser' : ''}`}></span>
        </div>
        <span
          className={
            state === 'enable'
              ? 'span-user-active'
              : state === 'disable'
              ? 'span-user-desactive'
              : 'span-user-away'
          }></span>
      </div>
    </li>
  );
};
