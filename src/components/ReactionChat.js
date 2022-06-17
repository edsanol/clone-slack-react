import React from 'react';
import '../assets/styles/components/ReactionChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import { LikeMessageAction } from '../store/actions/actionsLikes';
import {
  actionsGetIdmessage,
  actionsGetmessagesDB,
} from '../store/actions/actionsThread';

export const ReactionChat = ({ messageId, likes, thread }) => {
  const dispatch = useDispatch();

  const handleClickThreadShow = () => {
    dispatch(actionsChangeView('showThread'));
    dispatch(actionsGetIdmessage(messageId));
    dispatch(actionsGetmessagesDB(thread));
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
        <i onClick={giveOfRemoveLike} className="bx bx-like"></i>
      </div>

      <div
        className="button_thread_message"
        type="button"
        onClick={handleClickThreadShow}>
        <i className="bx bx-message-rounded-dots"></i>
      </div>
    </div>
  );
};
