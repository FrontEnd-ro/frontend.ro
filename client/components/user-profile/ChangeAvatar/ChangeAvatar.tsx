import React, { useState, useRef } from 'react';
import { faCamera, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import { IMAGES_MIME_TYPES } from '~/services/Constants';
import { cropImage, filterFiles, loadImage } from '~/services/utils/FileUtils';
import Button from '~/components/Button';

import UserService from '~/services/User.service';
import { loadInfo } from '~/redux/user/user.actions';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './ChangeAvatar.module.scss';

function ChangeAvatar({ user, dispatch }: ConnectedProps<typeof connector>) {
  const [newAvatar, setNewAvatar] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoadingBlob, setIsLoadingBlob] = useState(false);

  const cropedImage = useRef<Blob>(null);

  const changeAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    if (filterFiles([e.target.files[0]], IMAGES_MIME_TYPES).length === 0) {
      return;
    }

    setIsLoadingBlob(true);

    const imgUrl = URL.createObjectURL(e.target.files[0]);
    cropedImage.current = await cropImage(imgUrl);

    const src = URL.createObjectURL(cropedImage.current);
    await loadImage(src);
    setNewAvatar(src);

    e.target.value = null;
    setIsLoadingBlob(false);
  };

  const cancel = () => setNewAvatar(null);
  const save = async () => {
    setIsUploading(true);
    try {
      const newUserData = await UserService.uploadAvatar(cropedImage.current);
      dispatch(loadInfo(newUserData));
    } catch (err) {
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Oops! Nu am putut încărca avatarul',
      });
    } finally {
      setNewAvatar(null);
      setIsUploading(false);
    }
  };

  return (
    <div className={`${styles['change-avatar']} ${newAvatar ? styles['change-avatar--new'] : ''}`}>
      <label className="relative d-block">
        {!newAvatar && (
          <>
            {!isLoadingBlob && !isUploading && (
            <div className={`${styles.overlay} pin-full d-flex align-items-center justify-content-center`}>
              <FontAwesomeIcon width="48" icon={faCamera} className="text-white" />
            </div>
            )}
            {isLoadingBlob && (
            <div className={`${styles['spinner-overlay']} pin-full d-flex align-items-center justify-content-center`}>
              <FontAwesomeIcon width="48" icon={faSpinner} className="text-white rotate" />
            </div>
            )}
          </>
        )}
        <img src={newAvatar || user.info.avatar} alt={`${user.info.name || user.info.username} avatar`} />
        <input disabled={isUploading} hidden type="file" multiple={false} onChange={changeAvatar} accept={IMAGES_MIME_TYPES.join(',')} />
      </label>
      {newAvatar && (
        <div className={`${styles.controls} d-flex justify-content-between`}>
          <Button variant="light" loading={isUploading} onClick={cancel}> Cancel </Button>
          <Button variant="blue" loading={isUploading} onClick={save}> Save </Button>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(ChangeAvatar);
