import React from 'react';
import Link from '~/components/generic/Link';
import {
  StatsCardLayout1,
  StatsCardLayout2,
  StatsCardLayout3,
  StatsCardLayout4,
  StatsCardLayout6,
} from '~/components/PlatformStats';
import { getLessons } from '~/curriculum/Curriculum';
import { GITHUB_ORG_URL, GITHUB_URL } from '~/services/Constants';
import { useTranslation } from '~/services/typesafeNextTranslate';

import styles from './LandingStats.module.scss';

function LandingStats() {
  const { lang } = useTranslation('common');
  const lessonsWritten = getLessons(lang).filter((lesson) => lesson.written);

  return (
    <section className={styles['landing-stats']}>
      <div className={styles.grid}>
        <a className={styles.card1} href={GITHUB_URL} target="_blank" rel="noreferrer">
          <StatsCardLayout6
            counter={1}
            description="inițiativă open-source"
            footer="pornită din Iași"
            colorText="#fff"
            background="image"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/palace-of-culture.jpg`}
          />
        </a>
        <a className={styles.card2} href={`${GITHUB_URL}/graphs/contributors`} target="_blank" rel="noreferrer">
          <StatsCardLayout1
            counter={11}
            colorText="#2980b9"
            description="Contribuitori cu inimă mare"
            src={`${process.env.CLOUDFRONT_PUBLIC}/seo/default-schmoes-seo.jpg`}
          />
        </a>
        <a className={styles.card3} href={GITHUB_ORG_URL} target="_blank" rel="noreferrer">
          <StatsCardLayout2
            counter={5}
            colorText="#A4375B"
            header="Open-Source"
            description="Repo-uri"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/countries.svg`}
          />
        </a>
        <Link prefetch={false} href="/lectii" className={styles.card4}>
          <StatsCardLayout3
            text1="Am scris"
            text2={`${lessonsWritten.length} lecții`}
            colorText="#1b1b15"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/vintage-typewriter.jpg`}
          />
        </Link>
        <Link prefetch={false} href="/evenimente" className={styles.card5}>
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
          colorText="#2980b9"
          background="image"
          className={styles.card6}
          description="traineri pasionați"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/pencils.jpg`}
        />
        <Link prefetch={false} href="/slides" className={styles.card7}>
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
          colorText="#fff"
          className={styles.card8}
          description="Participanți la traininguri"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/coworking.jpg`}
        />
      </div>
    </section>
  );
}

export default LandingStats;
