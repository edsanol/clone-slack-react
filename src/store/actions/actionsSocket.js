import axios from 'axios';
const BASE_URL = process.env.REACT_APP_URL_BACKEND;

export const actionsSocket = (sockets) => {
  return {
    type: 'SOCKET_CONNECTED',
    payload: sockets,
  };
};

export const disconnectActionsSocket = () => {
  return {
    type: 'SOCKET_DISCONNECTED',
  };
};

export const getAllUserSocketAction = (listUsers) => {
  return {
    type: 'GET_ALL_USER',
    payload: listUsers,
  };
};

export const getActiveChatAction = (idChannel) => {
  return {
    type: 'GET_ACTIVE_CHAT',
    payload: idChannel,
  };
};

export const newMessage = (message) => {
  return {
    type: 'NEW_MESSAGE',
    payload: message,
  };
};

//  OBTENER MENSAJES DE BASE DE DATOS
export function getMessagesAction(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }

      const response = await axios.get(`${BASE_URL}/messages/${id}`, {
        headers: {
          'x-token': token,
        },
      });
      if (response.data.ok) {
        dispatch(getMessageDB(response.data.msg));
      }
    } catch (error) {
      console.log(error);
      throw new Error('error');
    }
  };
}

export const getAllMessagesChannelAction = (channelMessages) => {
  return {
    type: 'GET_MESSAGES',
    payload: channelMessages,
  };
};
export const logoutResetStatemessage = () => {
  return {
    type: 'LOGOUT_RESET_MESSAGE',
  };
};

export const messageToDirectMessage = (directMessage) => {
  return {
    type: 'MESSAGE_TO_DIRECT_CHANNEL',
    payload: directMessage,
  };
};

export const messageToDirectMessageCurrent = (directMessage) => {
  return {
    type: 'MESSAGE_TO_DIRECT_CHANNEL_CURRENT',
    payload: directMessage,
  };
};

export const messageToChannel = (channelMessage) => {
  return {
    type: 'MESSAGE_TO_CHANNEL',
    payload: channelMessage,
  };
};

const getMessageDB = (messages) => ({
  type: 'GET_MESSAGES',
  payload: messages,
});
