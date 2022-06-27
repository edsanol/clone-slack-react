import React, { useEffect, useRef, useState } from 'react';
import { ChatDate } from '../components/ChatDate';
import { ReactionChat } from '../components/ReactionChat';
import { ReplyMessagesChat } from './ReplyMessagesChat';
import { ChatCountLike } from './ChatCountLike';
import { timeDate } from '../helpers/timeDate';

export const BoxChatMessage = (props) => {
  const [isShown, setIsShown] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [props]);

  return (
    <div
      id="message"
      className="div-box-chat-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && (
        <ReactionChat
          messageId={props._id}
          likes={props.likes}
          thread={props.thread}
        />
      )}
      {
        props.showDate && (<ChatDate date={props.createdAt} />)
      }
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

          {props.likes.length > 0 ? (
            <ChatCountLike likes={props.likes} />
          ) : null}
          {props.thread.length > 0 ? (
            <ReplyMessagesChat thread={props.thread} />
          ) : null}
        </div>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
