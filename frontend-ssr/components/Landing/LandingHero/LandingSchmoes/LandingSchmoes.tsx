import React from 'react';
import styles from './LandingSchmoes.module.scss';

/** https://joeschmoe.io/ */
export default function LandingSchmoes() {
  const schmoes = [
    'alex',
    'joe',
    'simona',
    'jude',
    'andreea',
    'radu',
    'adam',
    'jaqueline',
    'jacques',
  ];

  return (
    <div className={styles['landing-schmoes']}>
      {schmoes.map((schmoe, index) => (
        <div
          key={schmoe}
          style={{
            transform:
            index > 0
              ? `translateX(-${30 * index}%)${index % 2 === 1 ? '' : ' scaleX(-1)'}`
              : 'scaleX(-1)',

          }}
        >
          <img
            src={`https://joeschmoe.io/api/v1/${schmoe}`}
            alt="joe"
          />
        </div>

      ))}
    </div>
  );
}
