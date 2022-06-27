import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import '../../assets/styles/components/modals/ModalEditUser.scss';
import { updateUserProfileAction } from '../../store/actions/actionUsers';
import { toast } from 'react-toastify';
import { updateImageAction } from '../../store/actions/actionsImageProfile';

export const ModalEditUser = ({ setOpened }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const { imageProfile } = useSelector((state) => state.updateImageReducer);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
      dispatch(updateImageAction(file));
    }
  }, [file, imageProfile, dispatch]);

  const handleUpdateImageProfile = () => {
    document.querySelector('#imageSelector').click();
  };
  const handleChangeSelectImage = (e) => {
    setFile(e.target.files[0]);
  };

  const { fullName, description, phone, occupation } = useSelector(
    (state) => state.userReducer.user
  );
  const user = useSelector((state) => state.userReducer.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: fullName,
      description: description,
      phone: phone,
      occupation: occupation,
    },
  });

  const onSubmit = async (data) => {
    try {
      let userUpdated;
      if (imageProfile) {
        userUpdated = { ...user, ...data, image: imageProfile };
      } else {
        userUpdated = { ...user, ...data };
      }
      await dispatch(updateUserProfileAction(userUpdated));
      toast.success('Perfil actualizado', {
        position: 'bottom-right',
        theme: 'colored',
      });
      setOpened(false);
    } catch (err) {
      toast.error('Ocurrio un error', {
        position: 'bottom-right',
        theme: 'colored',
      });
      console.log(err);
    }
    // window.location.reload(true);
  };
  return (
    <form className="modal-user-edit" onSubmit={handleSubmit(onSubmit)}>
      {/* <h1 className="title">Edit your profile</h1> */}
      <div className="container-edit-input">
        <div className="container-input containerA">
          <div className="subcontainer-input">
            <label htmlFor="fullName">Fullname</label>
            <input
              data-cy="edit-fullName"
              className="mainForm__form-input"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="add your full name"
              {...register('fullName', {
                required: true,
                pattern: /^[a-z\d A-Z\d]{6,30}$/i,
              })}
            />
            {errors.fullName?.type === 'required' && (
              <p className="input__error">⚠ El campo nombre es requerido</p>
            )}
            {errors.fullName?.type === 'pattern' && (
              <p className="input__error">
                ⚠ Enter full Name of minimum 6 characters and maximum 30
              </p>
            )}
          </div>
          <div className="subcontainer-input">
            <label htmlFor="occupation">Occupation</label>
            <input
              data-cy="edit-occupation"
              type="text"
              name="occupation"
              id="occupation"
              placeholder="Enter your occupation"
              {...register('occupation', {
                pattern: /^[a-z\d A-Z\d]{6,30}$/i,
              })}
            />
            {errors.occupation?.type === 'pattern' && (
              <p className="input__error">
                ⚠ Enter occupation of minimum 6 characters and maximum 30
              </p>
            )}
            <p>You can mention your career or skills here.</p>
          </div>
          <div className="subcontainer-input">
            <label htmlFor="description">Description</label>
            <input
              data-cy="edit-description"
              type="description"
              name="description"
              id="description"
              placeholder="Tell us about you"
              {...register('description', {
                pattern: /^[a-z\d A-Z\d]{6,100}$/i,
              })}
            />
            {errors.description?.type === 'pattern' && (
              <p className="input__error">
                ⚠ Enter description of minimum 6 characters and maximum 100
              </p>
            )}
          </div>
          <div className="subcontainer-input">
            <label htmlFor="phone">Phone</label>
            <input
              data-cy="edit-phone"
              type="text"
              name="phone"
              id="phone"
              placeholder="Add your cell phone"
              {...register('phone', {
                pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              })}
            />
            {errors.phone?.type === 'pattern' && (
              <p className="input__error">⚠ Enter only numbers</p>
            )}
          </div>
        </div>

        <div className="container-submit-image containerB">
          <div>
            <span
              type="button"
              className="span__button-upload"
              onClick={handleUpdateImageProfile}>
              Upload Image
            </span>

            <img
              className="img__upload-image"
              src={user.image}
              alt="edit you profile"
            />
          </div>
          <div className="button-edit">
            <input
              id="imageSelector"
              type="file"
              name="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleChangeSelectImage}
            />
            {!!image && (
              <div className="div__preview-image">
                <p>Previo Image</p>
                <img src={image} alt="upload preview" />
              </div>
            )}
          </div>
        </div>
        {/* <ImageProfileUser /> */}
      </div>
      <footer className="button-footer">
        {image && imageProfile ? (
          <button type="submit" className="button-submit button-save">
            Save Changes
          </button>
        ) : image && !imageProfile ? (
          <p className="button-submit button-nosave">Save Changes</p>
        ) : (
          <button
            data-cy="save-edit-click-event"
            type="submit"
            className="button-submit button-save">
            Save Changes
          </button>
        )}
      </footer>
    </form>
  );
};
