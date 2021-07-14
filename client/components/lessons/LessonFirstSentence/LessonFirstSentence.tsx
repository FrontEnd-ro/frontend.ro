import React, { PropsWithChildren } from 'react';

const LessonFirstSentence = (
  { className = '', children }: PropsWithChildren<{ className?: string }>,
) => (
  <p className={`${className} text-2xl font-light`}>
    {children}
  </p>
);

export default LessonFirstSentence;
