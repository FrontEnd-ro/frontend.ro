import React from 'react';
import Button from '~/components/Button';
import styles from './LessonContributors.module.scss';

interface Contributor {
  name: string;
  avatar: string;
  url: string;
}

interface Props {
  contributors: Contributor[];

  /**
   * Having two nested <a> elements inside each-other is
   * not valid. Thus, if we want to include this inside
   * another `<a>` element - use the `variant` prop
   * to change the rendering from `<a>` to a `<span>`.
   */
  variant?: 'link' | 'no-link';
  className?: string;
  displayNumber?: number;
}

export default function LessonContributors({
  contributors,
  variant = 'link',
  className = '',
  displayNumber = 5,
}: Props) {
  return (
    <ul className={`${styles['lesson-contributors']} ${className}`}>

      {contributors.slice(0, displayNumber).map((contributor, index, arr) => (
        <li
          className="text-center"
          key={contributor.url}
          style={{
            right: `${index}em`,
            zIndex: arr.length - index,
          }}
        >
          {variant === 'link'
            ? (
              <a href={contributor.url}>
                <img width="48" height="48" alt={`${contributor.name} avatar`} src={contributor.avatar} />
                <p>
                  {contributor.name}
                </p>
              </a>
            )
            : (
              <span>
                <img width="48" height="48" alt={`${contributor.name} avatar`} src={contributor.avatar} />
                <p>
                  {contributor.name}
                </p>
              </span>
            )}

        </li>
      ))}
      {(contributors.length > displayNumber) && (
        <li style={{
          right: `${displayNumber}em`,
          zIndex: displayNumber + 1,
        }}
        >
          <Button variant="light">
            +
            {contributors.length - displayNumber}
          </Button>
        </li>
      )}
    </ul>
  );
}
