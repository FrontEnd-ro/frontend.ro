import React from 'react';
import { SkeletonRect, SkeletonWord } from '~/components/SkeletonScreens';

import styles from './ReadTheLesson.module.scss';

interface Props {
  percentage: number; // 0-100 range
  className?: string;
}

const ReadTheLesson = ({ percentage, className }: Props) => {
  const MOCK_SENTENCES = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor turpis ut condimentum tempor. Donec at consectetur magna.',
    'Quisque hendrerit sollicitudin sem, malesuada sodales lectus. Suspendisse tempus massa nulla, et volutpat nisi tristique nec. Morbi feugiat turpis at euismod lobortis.',
    'usce eget viverra lorem. Integer venenatis nulla eu pulvinar molestie. Nulla sit amet metus sit amet quam porta dictum. Fusce maximus rutrum orci, vitae rhoncus odio aliquam vel.',
    'Etiam convallis nisl nec mauris placerat, vel tempus justo euismod. Suspendisse aliquam semper egestas. Mauris sed ornare sem.',
  ];

  const totalWordCount = MOCK_SENTENCES.reduce((acc, cur) => {
    return acc + cur.split(' ').length;
  }, 0) + 1;

  const lastVisibleWordIndex = Math.round((totalWordCount * percentage) / 100);

  // Given the index of a word inside a sentence, what is the
  // global index value of that word, amongst all sentences.
  const getGlobalWordIndex = (sentenceIndex: number, wordIndex: number) => {
    let result = wordIndex;
    for (let i = 0; i <= sentenceIndex - 1; i += 1) {
      result += MOCK_SENTENCES[i].split(' ').length;
    }

    // Including heading
    return result + 1;
  };

  return (
    <article className={`relative ${styles.ReadTheLesson} ${className}`}>
      <p className="mb-12">
        <SkeletonRect
          withAnimation={false}
          width="200px"
          className={`
            ${styles['skeleton-heading']}
            ${styles['skeleton-element']}
            ${lastVisibleWordIndex > 0 ? styles.visible : ''}
          `}
        />
      </p>
      {MOCK_SENTENCES.map((sentence, sentenceIndex) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <p key={sentenceIndex} className="mb-8">
            {sentence.split(' ').map((word, wordIndex) => {
              const overallIndex = getGlobalWordIndex(sentenceIndex, wordIndex);

              return (
                <SkeletonWord
                  // eslint-disable-next-line react/no-array-index-key
                  key={wordIndex}
                  text={word}
                  withAnimation={false}
                  className={`
                    ${styles.SkeletonWord}
                    ${styles['skeleton-element']}
                    ${overallIndex < lastVisibleWordIndex ? styles.visible : ''}
                  `}
                />
              );
            })}
          </p>
        );
      })}
    </article>
  );
};

export default ReadTheLesson;
