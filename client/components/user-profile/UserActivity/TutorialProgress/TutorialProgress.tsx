import React from 'react';
import List from '~/components/List';
import { ProgressBar } from '~/components/progress';

import styles from './TutorialProgress.module.scss';

interface Props {
  title: string;
  total: number;
  items: {
    count: number;
    color: string;
    description: string;
  }[];
  className?: string;
}

const TutorialProgress = ({ title, total, items, className = "" }: Props) => {
  return (
    <section className={className}>
      <p className="text-2xl mt-0"> {title} </p>
      <ProgressBar className={styles.ProgressBar} count={total} items={items} />
      <Explanation items={items} />
    </section>
  )
}

const Explanation = ({ items }: { items: Props['items'] }) => {
  return (
    <div className={styles.Explanation}>
      <List className="d-flex flex-wrap">
        {items.map((item) => (
          <li className="mr-2 mt-2" key={item.description} style={{ color: item.color }}>
            {item.description}: {item.count}
          </li>
        ))}
      </List>
    </div>
  )
}

export default TutorialProgress;
