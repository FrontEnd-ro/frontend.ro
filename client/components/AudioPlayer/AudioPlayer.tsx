import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

import styles from './AudioPlayer.module.scss';

interface Props {
  title: string;
  src: string;
  className?: string;
}

export default function AudioPlayer({ title, src, className } : Props) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => { setIsPlaying(true); };
  const onPause = () => { setIsPlaying(false); };

  const togglePlay = () => {
    const SPAN = '[AudioPlayer.togglePlay]';
    if (ref.current === null) {
      console.error(`${SPAN} Expected ref.current to not be null.`);
      return;
    }

    const { paused } = ref.current;

    if (paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const stop = () => {
    const SPAN = '[AudioPlayer.stop]';
    if (ref.current === null) {
      console.error(`${SPAN} Expected ref.current to not be null.`);
      return;
    }

    ref.current.pause();
    ref.current.currentTime = 0;
  };

  useEffect(() => {
    const SPAN = '[AudioPlayer.useEffect]';
    const audioEl = ref.current;
    if (audioEl === null) {
      console.error(`${SPAN} Expected ref.current to not be null.`);
      return;
    }

    audioEl.addEventListener('play', onPlay);
    audioEl.addEventListener('pause', onPause);

    return () => {
      audioEl.removeEventListener('play', onPlay);
      audioEl.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <div className={`${styles['audio-player']} ${className} d-flex align-items-center`}>
      <Button onClick={togglePlay} className={styles['play-button']}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </Button>
      <Button className={`${styles['stop-button']}${isPlaying ? ` ${styles['stop-button--visible']}` : ''}`} onClick={stop}>
        <FontAwesomeIcon icon={faStop} />
      </Button>
      <p title={title} className="text-white">{title}</p>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={ref} src={src} hidden />
    </div>
  );
}
