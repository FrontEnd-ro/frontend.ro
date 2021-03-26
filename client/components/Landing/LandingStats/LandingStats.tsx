import React from 'react';
import StatsGrid from '~/components/StatsGrid';

import styles from './LandingStats.module.scss';

function LandingStats() {
  return (
    <section className={styles['landing-stats']}>
      <StatsGrid />
    </section>
  );
}

export default LandingStats;
