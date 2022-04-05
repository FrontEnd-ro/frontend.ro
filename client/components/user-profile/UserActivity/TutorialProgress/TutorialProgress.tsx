import React from 'react';
import List from '~/components/List';
import { ProgressBar } from '~/components/progress';
import { aggregateTutorialProgress } from '~/services/Utils';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';

import styles from './TutorialProgress.module.scss';

interface Props {
  tutorialProgress: TutorialProgressI;
  title?: string;
  className?: string;
}

const TutorialProgress = ({
  title,
  tutorialProgress,
  className = '',
}: Props) => {
  const aggregatedProgress = aggregateTutorialProgress(tutorialProgress);
  const items = [
    { description: 'Rezolvate', count: aggregatedProgress.done, color: 'var(--green)' },
    { description: 'În progres', count: aggregatedProgress.inProgress, color: 'var(--yellow)' },
    {
      description: 'Neîncepute',
      count: aggregatedProgress.total
        - (aggregatedProgress.done + aggregatedProgress.inProgress),
      color: 'var(--grey)',
    },
  ];

  return (
    <section className={className}>
      {title && (
        <p className="text-2xl mt-0">
          {title}
        </p>
      )}
      <ProgressBar className={styles.ProgressBar} count={aggregatedProgress.total} items={items} />
      <Explanation items={items} />
    </section>
  );
};


interface ExplanationProps {
  items: {
    count: number;
    color: string;
    description: string;
  }[]
}
const Explanation = ({ items }: ExplanationProps) => {
  return (
    <div className={styles.Explanation}>
      <List className="d-flex flex-wrap">
        {items.map((item) => (
          <li className="mr-2 mt-2" key={item.description} style={{ color: item.color }}>
            {item.description}
            :
            {' '}
            {item.count}
          </li>
        ))}
      </List>
    </div>
  );
};

export default TutorialProgress;
