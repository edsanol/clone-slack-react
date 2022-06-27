export const actionsGetIdmessage = (messageId) => {
  return {
    type: 'GET_MESSAGE_ID',
    payload: messageId,
  };
};

export const newThreadMessage = (threadMessage) => {
  return {
    type: 'NEW_THREAD_MESSAGE',
    payload: threadMessage,
  };
};

export const actionsGetmessagesDB = (threadMessagesDB) => {
  return {
    type: 'GET_THREAD_MESSAGE_DB',
    payload: threadMessagesDB,
  };
};

export const logoutResetStateThread = () => {
  return {
    type: 'LOGOUT_RESET_THREAD',
  };
};
