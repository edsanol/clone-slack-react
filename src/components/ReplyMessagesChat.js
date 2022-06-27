import React from 'react';
import '../assets//styles/components/ReplyMessagesChat.scss';

export const ReplyMessagesChat = ({ thread }) => {
  return (
    <div className="div-reply-messages">
      <p className="p-replies-users">
        {thread.length === 1
          ? `${thread.length} reply`
          : `${thread.length} replies`}
      </p>
      <p className="p-replies-data">check this thread</p>
    </div>
  );
};
