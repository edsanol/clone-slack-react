import React, { useEffect } from 'react';
import { ThreadMessage } from '../components/ThreadMessage';
import '../assets/styles/components/ThreadLandingPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsChangeView } from '../store/actions/actionsChangeView';
import RichInputThread from './RichInputThread';
import { ThreadMessageCurrent } from './ThreadMessageCurrent';

export const ThreadLandingPage = () => {
  const dispatch = useDispatch();

  const { socket, messages, threadMessages } = useSelector(
    (state) => state.socketReducer
  );

  const handleClickThread = () => {
    dispatch(actionsChangeView('hiddenAll'));
  };

  const messagesId = messages.map((message) => message._id);
  useEffect(() => {
    if (socket) {
      socket.emit('join-thread-message', messagesId);
    }
  }, [socket, messagesId]);

  return (
    <section className="thread__section-container">
      <div className="main__thread-header">
        <div className="thread-header-left">
          <h2>Threads</h2>
        </div>
        <div className="thread-header-right">
          <button
            className="thread__header-right-button-close"
            onClick={handleClickThread}>
            X
          </button>
        </div>
      </div>

      <div className="main__thread-content">
        <ThreadMessageCurrent />
        {threadMessages.map((threadMessage) => (
          <ThreadMessage
            key={threadMessage._id}
            fullName={threadMessage.fullName}
            image={threadMessage.image}
            message={threadMessage.message}
            createdAt={threadMessage.createdAt}
          />
        ))}
      </div>

      <div className="chat-input-thread">
        <RichInputThread />
      </div>
    </section>
  );
};
