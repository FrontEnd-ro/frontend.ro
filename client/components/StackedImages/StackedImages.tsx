import React, { useState, useMemo, useEffect } from 'react';
import styles from './StackedImages.module.scss';

interface Props {
  images: {
    src: string;
    alt: string;
    href: string;
    // We don't care about width/height because
    // we want just Square images.
  }[];
  className?: string;
  // Index of image to display right now. Defaults to 0.
  currentIndex?: number;
  // How much of rotation can we have in either direction
  // For example, if the value is `5`, then possible rations
  // are between [-5, +5].
  rotationDelta?: number;
}

const StackedImages = ({
  images, currentIndex = 0, className = '', rotationDelta = 25,
}: Props) => {
  // How many of those images to we display at once?
  // This is a performance optimization because the user
  // will most likely not navigate through all of them.
  const DISPLAY_COUNT = 5;
  const imagesToDisplay = images.slice(0, currentIndex + DISPLAY_COUNT);

  const serverSideRotations = getServerSideRotations(images.length, rotationDelta);
  // Generate the list of random rotations to be used on the client
  const clientSideRotations = useMemo(() => {
    // First one is always stright
    const titls = [0, ...getRandomRotations(images.length - 1, rotationDelta)];
    return titls;
  }, [images.length, rotationDelta]);

  // The currently visible one will have no rotation.
  // Thus, we need to keep track of this separately.
  const [rotationsState, setRotationsState] = useState(serverSideRotations);

  useEffect(() => {
    // We specifically update this on the client-side
    // because otherwise we get this SSR error: https://github.com/FrontEnd-ro/frontend.ro/issues/886
    setRotationsState(clientSideRotations);
  }, []);
  useEffect(() => {
    setRotationsState([
      ...clientSideRotations.slice(0, currentIndex),
      0,
      ...clientSideRotations.slice(currentIndex + 1),
    ]);
  }, [currentIndex]);

  return (
    <div className={`${styles.StackedImages} ${className} d-flex align-items-center justify-content-center`}>
      <div className={`${styles['links-wrapper']} relative`}>
        {imagesToDisplay.map((image, index) => (
          <a
            key={image.src}
            href={image.href}
            className={`${styles.link} absolute w-100 h-100`}
            style={{
              zIndex: images.length - index,
              transform: `rotate(${rotationsState[index]}deg)`,
              opacity: currentIndex > index ? '0' : '1',
              pointerEvents: currentIndex > index ? 'none' : 'auto',
              boxShadow: currentIndex === index ? '0 0 1em var(--black)' : '0 0 2px var(--silver)',
            }}
          >
            <img
              alt={image.alt}
              src={image.src}
              className={styles.image}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

/**
 * Generate a list of random numbers inside an interval.
 * @param count Number of elements to generate.
 * @param rotationDelta Size of the interval, on either side of 0.
 * @returns Array<number>
 */
function getRandomRotations(count: number, rotationDelta: number) {
  const max = rotationDelta;
  const min = -rotationDelta;

  return new Array(count).fill('').map((_) => {
    return Math.random() * (max - min) + min;
  });
}

// Initial rotations that will be rendered server-side
// We need this so we can prevent this bug: https://github.com/FrontEnd-ro/frontend.ro/issues/886
function getServerSideRotations(count: number, rotationDelta: number): number[] {
  return new Array(count).fill('').map((_, index) => {
    return index % 2 === 0
      ? -rotationDelta / 2
      : rotationDelta / 2;
  });
}

export default StackedImages;
