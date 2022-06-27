const initialState = {
  imageProfile: null,
};

export const updateImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
      return {
        ...state,
        imageProfile: action.payload,
      };
    default:
      return state;
  }
};
