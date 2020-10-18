import React from 'react';
import styles from './LessonResources.module.scss';

interface Props {
  links: {
    text: string;
    url: string;
  }[];
  className?: string;
}
export default function LessonResources({ links, className }: Props) {
  return (
    <section className={`${styles['lesson-resources']} ${className} relative w-100`}>
      <h3 className="absolute m-0"> Resurse suplimentare </h3>
      <ol className="with--count">
        {links.map(({ text, url }) => (
          <li key={url}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ol>
    </section>
  );
}
