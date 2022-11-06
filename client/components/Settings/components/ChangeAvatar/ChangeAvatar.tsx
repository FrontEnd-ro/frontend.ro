import React, { useState } from 'react';

import Form from '~/components/Form';
import Button from '~/components/Button';
import { UserState } from '~/redux/user/types';
import UserService from '~/services/api/User.service';
import ImagePicker from './ImagePicker/ImagePicker';
import { IMAGES_EXTENSIONS, IMAGES_MIME_TYPES } from '~/services/Constants';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import { squareCrop, filterFiles, loadImage } from '~/services/utils/FileUtils';

interface Props {
  user: UserState;
  onSuccess: (user: UserState) => void;
}

function ChangeAvatar({ user, onSuccess }: Props) {
  const [previewSrc, setPreviewSrc] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const [isParsingFile, setIsParsingFile] = useState(false);

  const parseAvatar = async (file: File) => {
    if (filterFiles([file], IMAGES_MIME_TYPES).length === 0) {
      SweetAlertService.toast({
        timer: 5000,
        type: 'error',
        text: `Formatul fișierului nu este suportat. Încearcă cu un nou fișier de tipul ${IMAGES_EXTENSIONS.join(', ')}`,
      });
      return null;
    }

    const imgUrl = URL.createObjectURL(file);
    const croppedAvatar = await squareCrop(imgUrl);
    return croppedAvatar;
  };

  const previewAvatar = async (file: File) => {
    if (!file) {
      // To get here first upload an image then click
      // the input and press "cancel" in the dialog box
      setPreviewSrc(null);
      return;
    }

    setIsParsingFile(true);

    const avatarBlob = await parseAvatar(file);
    if (!avatarBlob) {
      setPreviewSrc(null);
    }

    if (avatarBlob) {
      const src = URL.createObjectURL(avatarBlob);
      await loadImage(src);

      setPreviewSrc(src);
    }

    setIsParsingFile(false);
  };

  const onSubmit = async ({ avatar }: { avatar: File[] }) => {
    console.log(avatar);
    let shouldResetForm = true;

    setIsChanging(true);
    try {
      const avatarBlob = await parseAvatar(avatar[0]);
      if (!avatarBlob) {
        setPreviewSrc(null);
        return false;
      }

      const newUserData = await UserService.uploadAvatar(avatarBlob);

      SweetAlertService.toast({
        type: 'success',
        text: 'Avatarul a fost schimbat cu succes!',
      });
      onSuccess(newUserData);
      setPreviewSrc(null);
    } catch (err) {
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Oops! Nu am putut actualiza avatarul',
      });
      shouldResetForm = false;
    } finally {
      setIsChanging(false);
    }

    return shouldResetForm;
  };

  return (
    <Form onReset={() => setPreviewSrc(null)} onSubmit={onSubmit}>
      <h3 className="mt-0">Schimbă avatarul</h3>
      <div className="d-flex justify-content-between align-items-center">
        <ImagePicker
          inputName="avatar"
          inputId="avatarInput"
          onChange={previewAvatar}
          loading={isParsingFile}
          src={previewSrc || user.info.avatar}
          alt={`${user.info.name || user.info.username} avatar`}
        />
        <div className="d-flex flex-column">
          <label htmlFor="avatarInput" className="btn btn--light mb-8 text-center">
            Alege un fișier
          </label>
          <Button
            type="submit"
            variant="blue"
            disabled={!previewSrc}
            loading={isChanging}
          >
            Schimbă avatarul
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default ChangeAvatar;
