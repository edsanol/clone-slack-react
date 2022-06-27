const initialState = {
  user: [],
  users: [],
  changePassword: null,
  resetPassword: null,
  userProfileId: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_USER_ID':
      return {
        ...state,
        user: action.payload,
      };
    case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        user: action.payload,
      };
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        changePassword: action.payload,
      };

    case 'LOGOUT_RESET_USER_REDUCER':
      return {
        user: [],
        users: [],
        changePassword: null,
      };
    case 'RESET_PASSWORD':
      return {
        ...state,
        resetPassword: action.payload,
      };
    case 'GET_USER_ID_PROFILE':
      return {
        ...state,
        userProfileId: action.payload,
      };
    default:
      return state;
  }
};
