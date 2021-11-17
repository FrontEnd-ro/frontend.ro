import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { IMAGES_MIME_TYPES } from '~/services/Constants';

import styles from './ImagePicker.module.scss';

interface Props {
  src: string;
  inputId: string;
  inputName: string;
  onChange: (file: File | null) => void;
  alt?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  showInput?: boolean;
  acceptMimeTypes?: string[];
}

/**
 * Right now this component is used only inside the <ChangeAvatar> component.
 * However, in the future we might move it from here, if we want to re-use it
 * in other components.
 */
const ImagePicker = ({
  src,
  inputId,
  inputName,
  onChange,
  alt = '',
  loading,
  disabled = false,
  className = '',
  showInput = false,
  acceptMimeTypes = IMAGES_MIME_TYPES,
}: Props) => {
  return (
    <label className={`${styles.ImagePicker} ${className} relative d-block`}>
      {!disabled && (
        <>
          {!loading && (
            <span className={`${styles.overlay} pin-full d-flex align-items-center justify-content-center`}>
              <FontAwesomeIcon width="48" icon={faCamera} className="text-white" />
            </span>
          )}
          {loading && (
            <span className={`${styles['spinner-overlay']} pin-full d-flex align-items-center justify-content-center`}>
              <FontAwesomeIcon width="48" icon={faSpinner} className="text-white rotate" />
            </span>
          )}
        </>
      )}
      <img src={src} alt={alt} />
      <input
        id={inputId}
        type="file"
        name={inputName}
        multiple={false}
        hidden={!showInput}
        disabled={disabled || loading}
        accept={acceptMimeTypes.join(',')}
        onChange={(e) => onChange(e.target.files[0])}
      />
    </label>
  );
};

export default ImagePicker;
