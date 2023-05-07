import React from 'react';
import styles from './ChipCarousel.module.scss';

interface Props {
  rows: (string[])[];

  // Repeat each row horizontally, so there are enough
  // elements on each of them for the animation.
  repeatCount?: number;
  className?: string;
}

const ChipCarousel = ({ rows, repeatCount = 3, className = "" }: Props) => {
  const repeatedRows = rows.map((row) => {
    let result: string[] = [];
    for (let i = 0; i < repeatCount; i++) {
      result = [...result, ...row];
    }

    return result;
  })

  return (
    <div className={`${styles.ChipCarousel} ${className} w-100`}>
      {repeatedRows.map((row, rowIndex) => (
        <div className={`${styles.row} d-flex justify-content-center`} key={rowIndex}>
          {row.map((chip, chipIndex) => (
            <span className={styles.chip} key={chipIndex}> {chip} </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ChipCarousel;
