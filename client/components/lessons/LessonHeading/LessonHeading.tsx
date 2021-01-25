import React, { PropsWithChildren } from 'react';
import styles from './LessonHeading.module.scss';

interface Props {
  as: string;
  id: string;
}

export default function LessonHeading({ as, id, children }: PropsWithChildren<Props>) {
  return React.createElement(as, {
    className: styles['lesson-heading'],
    id,
  }, [
    React.createElement('a', {
      href: `#${id}`,
      key: id,
    }, '#'),
    children,
  ]);
}
