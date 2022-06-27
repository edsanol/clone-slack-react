const initialState = {
  uid: null,
  checking: true,
  loggedIn: false,
  name: null,
  email: null,
  image: null,
  description: null,
  workspaceId: null,
  workspace: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WORKSPACE':
      return {
        ...state,
        workspace: action.payload,
      };
    case 'CREATE_WORKSPACE':
      return {
        ...state,
        workspace: [...state.workspace, action.payload],
      };
    case 'ADD_USER_TO_WORKSPACE':
      return {
        ...state,
        workspace: state.workspace.map((workspace) => {
          if (workspace._id === action.payload.workspaceId) {
            return {
              ...workspace,
              users: [...workspace.users, action.payload.userId],
            };
          }
          return workspace;
        }),
      };
    case 'GET_ACTIVE_WORKSPACE':
      return {
        ...state,
        workspaceId: action.payload,
      };
    case 'LOADING_REVALIDATE':
      return {
        ...state,
        checking: action.payload,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        checking: false,
        loggedIn: true,
        uid: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        checking: false,
        loggedIn: true,
        uid: action.payload._id,
        name: action.payload.fullName,
        email: action.payload.email,
      };
    case 'FINISH_CHECKING':
      return {
        ...state,
        checking: false,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        checking: true,
        loggedIn: false,
        uid: null,
        name: null,
        email: null,
        image: null,
        description: null,
        workspaceId: null,
      };

    default:
      return state;
  }
};
