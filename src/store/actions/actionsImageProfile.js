import { uplodadImageProfile } from '../../helpers/uplodadImageProfile';

export function updateImageAction(file) {
  return async (dispatch) => {
    const fileUrl = await uplodadImageProfile(file);
    dispatch(updateImage(fileUrl));
  };
}

const updateImage = (fileUrl) => ({
  type: 'UPDATE_IMAGE',
  payload: fileUrl,
});
