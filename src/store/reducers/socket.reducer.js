import { timeDateGeneral } from "../../helpers/timeDate";

const initialState = {
  socket: null,
  online: '',
  users: [],
  activeChat: null,
  newMessageCurrent: {},
  messages: [],
  messageToDirectMessage: null,
  messageToChannel: null,
  messageId: '',
  threadMessages: [],
};

export const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
      return {
        ...state,
        socket: action.payload.socket,
        online: action.payload.online,
      };
    case 'SOCKET_DISCONNECTED':
      return {
        ...state,
        socket: null,
        online: 'disable',
        users: [],
        activeChat: null,
        messages: [],
      };
    case 'GET_ALL_USER':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_ACTIVE_CHAT':
      if (state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    case 'NEW_MESSAGE':
      if (
        state.activeChat === action.payload.to ||
        state.activeChat === action.payload.from
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case 'GET_MESSAGES':
      const messagesDate = action.payload.map((item, index) => {
        const date = timeDateGeneral(item.createdAt)
        if(index === 0 || date !== timeDateGeneral(action.payload[index-1].createdAt)) {
          return { ...item, showDate: true }
        } 
        return { ...item, showDate: false }
      })
      return {
        ...state,
        messages: messagesDate,
      };

    case 'GIVE_OR_REMOVE_LIKE':
      const messages = state.messages.map((message) =>
        message._id === action.payload.messageId
          ? { ...message, likes: action.payload.likes }
          : message
      );
      return {
        ...state,
        messages,
      };

    case 'MESSAGE_TO_DIRECT_CHANNEL':
      return {
        ...state,
        messageToDirectMessage: action.payload,
      };
    case 'MESSAGE_TO_DIRECT_CHANNEL_CURRENT':
      return {
        ...state,
        newMessageCurrent: action.payload,
      };
    case 'MESSAGE_TO_CHANNEL':
      return {
        ...state,
        messageToChannel: action.payload,
      };
    // thread

    case 'GET_MESSAGE_ID':
      return {
        ...state,
        messageId: action.payload,
      };
    case 'NEW_THREAD_MESSAGE':
      if (state.messageId === action.payload.to) {
        const messages = state.messages.map((message) =>
          message._id === action.payload.to
            ? { ...message, thread: [...state.threadMessages, action.payload] }
            : message
        );
        return {
          ...state,
          threadMessages: [...state.threadMessages, action.payload],
          messages,
        };
      } else {
        return state;
      }

    case 'GET_THREAD_MESSAGE_DB':
      return {
        ...state,
        threadMessages: [...action.payload],
      };

    case 'LOGOUT_RESET_THREAD':
      return {
        messageId: '',
        threadMessages: [],
      };

    case 'LOGOUT_RESET_MESSAGE':
      return {
        messages: [],
      };
    default:
      return state;
  }
};
