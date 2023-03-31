import React from 'react';
import List from '~/components/List';
import styles from './LessonResources.module.scss';

interface Props {
  links: {
    text: string;
    href: string;
  }[];
  className?: string;
}
export default function LessonResources({ links, className }: Props) {
  return (
    <section className={`${styles['lesson-resources']} ${className} relative w-100`}>
      <h3 className="absolute m-0"> Resurse suplimentare </h3>
      <List as="ol" variant="count">
        {links.map(({ text, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer">{text}</a>
          </li>
        ))}
      </List>
    </section>
  );
}
