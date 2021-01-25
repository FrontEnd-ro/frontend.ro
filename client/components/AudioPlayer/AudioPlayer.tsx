import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';

import styles from './AudioPlayer.module.scss';

interface Props {
  title: string;
  src: string;
  className?: string;
}

export default function AudioPlayer({ title, src, className } : Props) {
  const ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => { setIsPlaying(true); };
  const onPause = () => { setIsPlaying(false); };

  const togglePlay = () => {
    const { paused } = ref.current;

    if (paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const stop = () => {
    ref.current.pause();
    ref.current.currentTime = 0;
  };

  useEffect(() => {
    ref.current.addEventListener('play', onPlay);
    ref.current.addEventListener('pause', onPause);

    return () => {
      ref.current.removeEventListener('play', onPlay);
      ref.current.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <div className={`${styles['audio-player']} ${className} d-flex align-items-center`}>
      <button type="button" onClick={togglePlay} className="bg-white text-black">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button type="button" className={`${styles['stop-button']}${isPlaying ? ` ${styles['stop-button--visible']}` : ''}`} onClick={stop}>
        <FontAwesomeIcon icon={faStop} />
      </button>
      <p title={title} className="text-white">{title}</p>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={ref} src={src} hidden />
    </div>
  );
}
