const initialState = {
  uid: null,
  loading: true,
  name: null,
  description: null,
  channels: [],
};

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CHANNEL':
      return {
        ...state,
        uid: action.payload.userId,
        name: action.payload.name,
        description: action.payload.description,
        channels: [...state.channels, action.payload.data],
      };
    case 'GET_CHANNELS_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'GET_CHANNELS':
      return {
        ...state,
        channels: action.payload,
        loading: false,
      };
    case 'ADD_USER_TO_CHANNEL':
      return {
        ...state,
        channels: state.channels.map((channel) => {
          if (channel._id === action.payload.channelId) {
            return {
              ...channel,
              users: [...channel.users, action.payload.userId],
            };
          }
          return channel;
        }),
      };
    default:
      return state;
  }
};
