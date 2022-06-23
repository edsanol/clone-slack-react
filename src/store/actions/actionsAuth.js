import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
const BASE_URL = 'http://localhost:8080';

export function getWorkspaceAction() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }
      const response = await axios.get(`${BASE_URL}/workSpace`, {
        headers: {
          'x-token': token,
        },
      });
      dispatch(getWorkspace(response.data.data));
      console.log(response.data.data);
    } catch (error) {
      // dispatch(getProductsError())
      console.log(error);
    }
  };
}

const getWorkspace = (res) => ({
  type: 'GET_WORKSPACE',
  payload: res,
});

export const createWorkspaceAction = ({name}) => {
  return async () => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }
      const response = await axios.post(
        `${BASE_URL}/workSpace`,
        {
          name
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-token': token,
          },
        }
      );
      console.log(response.data)

    } catch (error) {
      console.log(error)
      toast.error('an error occurred', {
        position: 'top-center',
        theme: 'colored',
      });
    }
  }
}

export function loginUserAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      if (response.data.ok) {
        localStorage.setItem('token', response.data.token);
      }

      dispatch(loginUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const loginUser = (login) => ({
  type: 'LOGIN_USER',
  payload: login,
});

export function registerUserAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/register`,
        {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          workSpaceId: '629a2552587275ec49d069cd',
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      if (response.data.ok) {
        localStorage.setItem('token', response.data.token);
      }

      dispatch(registerUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const registerUser = (register) => ({
  type: 'REGISTER_USER',
  payload: register,
});

export const startChecking = () => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING_REVALIDATE', payload: true });
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }
      const response = await axios.get(`${BASE_URL}/users/renew`, {
        headers: {
          'x-token': token,
        },
      });

      if (response.data.ok) {
        const tokenDecode = jwt_decode(response.data.token);

        dispatch(
          loginUser({
            _id: tokenDecode.uid,
            name: tokenDecode.fullName,
            email: tokenDecode.email,
          })
        );
        localStorage.setItem('token', response.data.token);
      }
    } catch (err) {
      dispatch(finishChecking());
      console.log(err);
    }
    dispatch({ type: 'LOADING_REVALIDATE', payload: false });
  };
};

// const ReloginUser = (login) => ({
//   type: 'RELOGIN_USER',
//   payload: login,
// });

const finishChecking = () => ({
  type: 'FINISH_CHECKING',
});

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
  };
};

const logout = () => ({
  type: 'LOGOUT_USER',
});
