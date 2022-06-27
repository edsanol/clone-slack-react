import axios from 'axios';
const BASE_URL = process.env.REACT_APP_URL_BACKEND;

export function LikeMessageAction(MessageId) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || '';
      if (!token) {
        return false;
      }

      const response = await axios.post(
        `${BASE_URL}/messages/${MessageId}/like`,
        {},
        {
          headers: {
            'x-token': token,
          },
        }
      );
      if (response.data.ok) {
        dispatch(
          giveOrRemoveLike({
            messageId: MessageId,
            likes: response.data.like.likes,
          })
        );
      }
    } catch (error) {
      console.log(error);
      throw new Error('error');
    }
  };
}
const giveOrRemoveLike = (payload) => ({
  type: 'GIVE_OR_REMOVE_LIKE',
  payload: payload,
});
