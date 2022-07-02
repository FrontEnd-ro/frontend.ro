import React from 'react';
import styles from './EventsStats.module.scss';
import {
  StatsCardLayout1,
  StatsCardLayout3,
  StatsCardLayout4,
  StatsCardLayout6,
} from '~/components/PlatformStats';
import Link from '~/components/generic/Link';

function EventsStats() {
  return (
    <div className={styles['events-stats']}>
      <Link className={styles.card1} href="/evenimente">
        <StatsCardLayout6
          counter={4}
          colorText="#663399"
          description="training-uri practice"
          direction="to top left"
          colorGradient1="b4fdfd"
          colorGradient2="a8c6f0"
          background="linear-gradient"
          footer="Contează doar cât de mult exersezi 💕"
        />
      </Link>
      <StatsCardLayout6
        counter={4}
        colorText="#fff"
        background="image"
        className={styles.card2}
        description="traineri pasionați"
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/zoom-call-with-coffee.jpg`}
      />
      <Link className={styles.card3} href="/lectii">
        <StatsCardLayout3
          text1="În total"
          text2="11 ore predate online"
          colorText="#1b1b15"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/hourglass.jpg`}
        />
      </Link>
      <Link className={styles.card4} href="/slides">
        <StatsCardLayout4
          counter1={100}
          counter2={33}
          text1="slide-uri"
          colorText="#1b1b15"
          text2="challenge-uri practice"
          title="Am creat și"
        />
      </Link>
      <StatsCardLayout1
        counter={22}
        colorText="#1b1b15"
        position="bottom"
        className={styles.card5}
        description="Participanți la traininguri"
        src={`${process.env.CLOUDFRONT_PUBLIC}/seo/default-schmoes-seo.jpg`}
      />
    </div>
  );
}

export default EventsStats;
