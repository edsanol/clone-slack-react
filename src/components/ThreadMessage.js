import React, { useEffect, useRef } from 'react';
import { timeDate } from '../helpers/timeDate';
export const ThreadMessage = (props) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [props]);

  return (
    <>
      <div className="div-box-chat-container">
        <div className="">
          <img className="img-chat-user-img" src={props.image} alt="img7" />
        </div>
        <div>
          <div className="div-box-chat">
            <h2 className="h2-chat-user-name">{props.fullName}</h2>
            <div className="div-chat-fecha">{timeDate(props.createdAt)}</div>
          </div>
          <div>
            <p
              className="p-chat-text-message"
              dangerouslySetInnerHTML={{ __html: props.message }}></p>
          </div>
        </div>
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};
