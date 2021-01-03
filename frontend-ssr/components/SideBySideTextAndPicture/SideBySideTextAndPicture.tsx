import React from 'react';
import { Figure } from '~/shared-types';
import { LessonFigure } from '../lessons';
import SideBySide from '../SideBySide/SideBySide';

interface Props {
  content: {
    text: string
  }[],
  img: Figure
}

export default function SideBySideTextAndPicture({ content, img } : Props) {
  return (
    <SideBySide>
      <ul>
        {content.map(({ text }) => (
          <li key={text}>
            {text}
          </li>
        ))}
      </ul>
      <LessonFigure {...img} />
    </SideBySide>
  );
}
