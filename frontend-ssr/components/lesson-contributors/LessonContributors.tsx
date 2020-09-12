import React from 'react';
import styles from './LessonContributors.module.scss';

interface Contributor {
    name: string;
    avatarSrc: string;
    url: string;
}

interface Props {
  contributors: Contributor[];

  className?: string;
  displayNumber?: number;
}

export default function LessonContributors({ contributors, className = '', displayNumber = 5 } : Props) {
  return (
    <ul className={`${styles['lesson-contributors']} ${className}`}>

      {contributors.slice(0, displayNumber).map((contributor, index) => (
        <li
          className="text-center"
          key={contributor.url}
          style={{
            right: `${index}em`,
            zIndex: index + 1,
          }}
        >
          <a href={contributor.url}>
            <img width="48" height="48" alt={`${contributor.name} avatar`} src={contributor.avatarSrc} />
            <p>
              {contributor.name}
            </p>
          </a>
        </li>
      ))}
      {(contributors.length > displayNumber) && (
      <li style={{
        right: `${displayNumber}em`,
        zIndex: displayNumber + 1,
      }}
      >
        <button type="button" className="btn btn--light">
          +
          {contributors.length - displayNumber}
        </button>
      </li>
      )}
    </ul>
  );
}
