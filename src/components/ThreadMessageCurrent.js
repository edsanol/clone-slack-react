import React from 'react';
import { useSelector } from 'react-redux';
import { timeDate } from '../helpers/timeDate';
export const ThreadMessageCurrent = () => {
  const { messages, messageId } = useSelector((state) => state.socketReducer);
  const messageCurrent = messages.filter(
    (messageCurrent) => messageCurrent._id === messageId
  );

  return (
    <>
      <div className="div-box-chat-container">
        <div className="">
          <img
            className="img-chat-user-img"
            src={messageCurrent[0].image}
            alt="img7"
          />
        </div>
        <div>
          <div className="div-box-chat">
            <h2 className="h2-chat-user-name">{messageCurrent[0].fullName}</h2>
            <div className="div-chat-fecha">
              {timeDate(messageCurrent[0].createdAt)}
            </div>
          </div>
          <div>
            <p
              className="p-chat-text-message"
              dangerouslySetInnerHTML={{
                __html: messageCurrent[0].message,
              }}></p>
          </div>
          <div className="div-info-thread-message-container">
            <p className="p-info-thread-message">
              {messageCurrent[0].thread.length > 0
                ? `message's thread`
                : 'start a thread on this message'}
            </p>
            <span>▼</span>
          </div>
        </div>
      </div>
    </>
  );
};
