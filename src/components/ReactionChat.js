import React from 'react';
import '../assets/styles/components/ReactionChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { LikeMessageAction } from '../store/actions/actionsLikes';
import { actionsGetIdmessage } from '../store/actions/actionsThread';

export const ReactionChat = ({ messageId, likes, thread }) => {
  const dispatch = useDispatch();

  const { socket } = useSelector((state) => state.socketReducer);

  const handleClickThreadShow = () => {
    dispatch(actionsChangeView('showThread'));
    dispatch(actionsGetIdmessage(messageId));
    socket.emit('getThreadMessages', messageId);
  };

  const giveOfRemoveLike = () => {
    dispatch(LikeMessageAction(messageId));
  };

  const { user } = useSelector((state) => state.userReducer);
  const verifiLikeToUser = likes.map((e) => e.userId === user._id);
  return (
    <div className="reaction__div-chat">
      <div
        className={
          verifiLikeToUser.includes(true)
            ? 'button_like_container'
            : 'button_outlike_container'
        }>
        <i
          data-cy="like-click-event"
          onClick={giveOfRemoveLike}
          className="bx bx-like"></i>
      </div>

      <div
        data-cy="thread-click-event"
        className="button_thread_message"
        type="button"
        onClick={handleClickThreadShow}>
        <i className="bx bx-message-rounded-dots"></i>
      </div>
    </div>
  );
};
