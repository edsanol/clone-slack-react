const initialState = {
  users: [],
  activeChat: null,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USER':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
