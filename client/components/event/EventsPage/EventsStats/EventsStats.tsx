import React from 'react';
import Link from 'next/link';
import styles from './EventsStats.module.scss';
import {
  StatsCardLayout1,
  StatsCardLayout3,
  StatsCardLayout4,
  StatsCardLayout6,
} from '~/components/PlatformStats/v2/StatsCards';

function EventsStats() {
  return (
    <div className={styles['events-stats']}>
      <Link href="/evenimente">
        <a className={styles.card1}>
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
        </a>
      </Link>
      <StatsCardLayout6
        counter={4}
        colorText="#fff"
        background="image"
        className={styles.card2}
        description="traineri pasionați"
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/zoom-call-with-coffee.jpg`}
      />
      <Link href="/lectii">
        <a className={styles.card3}>
          <StatsCardLayout3
            text1="În total"
            text2="11 ore predate online"
            colorText="#1b1b15"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/hourglass.jpg`}
          />
        </a>
      </Link>
      <Link href="/slides">
        <a className={styles.card4}>
          <StatsCardLayout4
            counter1={100}
            counter2={33}
            text1="slide-uri"
            colorText="#1b1b15"
            text2="challenge-uri practice"
            title="Am creat și"
          />
        </a>
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
