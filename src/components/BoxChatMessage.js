import React, { useState } from 'react';
import rectangle7 from '../assets/images/Rectangle-6.png';
import bandera from '../assets/images/mexico.png';
import { ChatDate } from '../components/ChatDate';
import { ReactionChat } from '../components/ReactionChat';
import { ReplyMessagesChat } from './ReplyMessagesChat';
import { ChatCountLike } from './ChatCountLike';

export const BoxChatMessage = ({
  text,
  setHiddenThread,
  setHiddenHelp,
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="div-box-chat-container" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {isShown && <ReactionChat />}
      <ChatDate />
      <div className="">
        <img className="img-chat-user-img" src={rectangle7} alt="img7" />
      </div>
      <div>
        <div className="div-box-chat">
          <h2 className="h2-chat-user-name">Hyejin {text}</h2>
          <img className="img-chat-user-description" src={bandera} alt="img7" />
          <div className="div-chat-fecha">6:49 PM</div>
        </div>
        <div>
          <p className="p-chat-text-message">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólPageMaker, el cual incluye versiones de Lorem
            Ipsum.rem Ipsum. una galería de textos y los mezcló de tal manera
            que logró hacer un libro de textos especimen. No sólPageMaker, el
            cual incluye versiones de Lorem Ipsum. una galería de textos y los
            mezcló de tal manera que logró hacer un libro de textos especimen.
            No sólPage una galería de textos y los mezcló de tal manera que
            logró hacer un libro de textos especimen. No sólPageMaker, el cual
            incluye versiones de Lorem Ipsum. una galería de textos y los mezcló
            de tal manera que logró hacer un libro de textos especimen. No
            sólPageMaker, el cual incluye versiones de Lorem Ipsum.{' '}
          </p>
          <ReplyMessagesChat
            setHiddenThread={setHiddenThread}
            setHiddenHelp={setHiddenHelp}
          />
          <ChatCountLike />
        </div>
      </div>
    </div>
  );
};