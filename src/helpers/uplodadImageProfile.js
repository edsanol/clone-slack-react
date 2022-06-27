export const uplodadImageProfile = async (file) => {
  const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dr2lnjk4b/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'clone-slack-images');
  formData.append('file', file);

  try {
    // const res = await axios.post(cloudinaryURL, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    const res = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      const cloudResponse = await res.json();
      return cloudResponse.secure_url;
    } else {
      throw await res.json();
    }
  } catch (err) {
    throw err;
  }
};
