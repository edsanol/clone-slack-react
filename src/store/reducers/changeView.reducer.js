const initialState = {
  hiddenView: 'hiddenAll',
  hiddenAside: 'showAside',
};

export const changeViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        hiddenView: action.payload,
      };
    case 'CHANGE_VIEW_ASIDE':
      return {
        ...state,
        hiddenAside: action.payload,
      };
    default:
      return state;
  }
};
