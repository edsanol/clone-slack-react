import axios from 'axios';
const BASE_URL = process.env.REACT_APP_URL_BACKEND;

export function createChannelAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/channels`,
        {
          name: data.name,
          description: data.description,
          premium: data.select,
          userId: data.userId,
          workSpaceId: data.workspaceId,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      console.log(response.data);
      dispatch(createChannel(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
const createChannel = (channel) => ({
  type: 'CREATE_CHANNEL',
  payload: channel,
});

export function addUserToChannelAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/channels`,
        {
          channelId: data.channelId,
          userId: data.memberInChannel,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      dispatch(addUserToChannel(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const addUserToChannel = (channel) => ({
  type: 'ADD_USER_TO_CHANNEL',
  payload: channel,
});

export function getChannelsAction() {
  return async (dispatch) => {
    dispatch(getChannelLoading());
    try {
      const response = await axios.get(`${BASE_URL}/channels`);
      dispatch(getChannels(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const getChannelLoading = () => ({
  type: 'GET_CHANNELS_LOADING',
  payload: true,
});

const getChannels = (channels) => ({
  type: 'GET_CHANNELS',
  payload: channels,
});
