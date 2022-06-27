const initialState = {
  stateView: true,
  hiddenScroll: false,
};

export const changeStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        ...state,
        stateView: action.payload,
      };
    case 'HIDDEN_SCROLL':
      return {
        ...state,
        hiddenScroll: action.payload,
      };
    default:
      return state;
  }
};
