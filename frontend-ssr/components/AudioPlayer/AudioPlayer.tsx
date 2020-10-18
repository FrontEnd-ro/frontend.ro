import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';

import styles from './AudioPlayer.module.scss';

interface Props {
  title: string;
  src: string;
  className?: string;
}

export default function AudioPlayer({ title, src, className } : Props) {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    ref.current.play();
  };

  return (
    <div className={`${styles['audio-player']} ${className} d-flex align-items-center`}>
      <button type="button" onClick={togglePlay} className="bg-white text-black">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <p title={title} className="text-white">{title}</p>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={ref} src={src} hidden />
    </div>
  );
}
