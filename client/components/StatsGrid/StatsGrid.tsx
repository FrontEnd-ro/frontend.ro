import React from 'react';
import {
  StatsCardLayout1,
  StatsCardLayout2,
  StatsCardLayout3,
  StatsCardLayout4,
  StatsCardLayout6,
} from '~/components/StatsCards';

import styles from './StatsGrid.module.scss';

function StatsGrid() {
  return (
    <div className={styles.grid}>
      <StatsCardLayout6
        className={styles.card1}
        counter={1}
        description="inițiativă open-source"
        footer="pornită din Iași"
        colorText="#fff"
        background="image"
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/palace-of-culture.jpg`}
      />
      <StatsCardLayout1
        counter={9}
        colorText="#2980b9"
        className={styles.card2}
        description="Contribuitori cu inimă mare"
        src={`${process.env.CLOUDFRONT_PUBLIC}/seo/default-schmoes-seo.jpg`}
      />
      <StatsCardLayout2
        counter={5}
        colorText="#A4375B"
        header="Open-Source"
        description="Repo-uri"
        className={styles.card3}
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/countries.svg`}
      />
      <StatsCardLayout3
        text1="Am scris"
        text2="5 lecții"
        colorText="#1b1b15"
        className={styles.card4}
      />
      <StatsCardLayout6
        counter={2}
        colorText="#663399"
        className={styles.card5}
        description="training-uri practice"
        direction="to top left"
        colorGradient1="b4fdfd"
        colorGradient2="a8c6f0"
        background="linear-gradient"
        footer="Contează doar cât de mult exersezi 💕"
      />
      <StatsCardLayout6
        counter={4}
        colorText="#2980b9"
        background="image"
        className={styles.card6}
        description="traineri pasionați"
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/pencils.jpg`}
      />
      <StatsCardLayout4
        counter1={38}
        counter2={33}
        text1="slide-uri"
        colorText="#1b1b15"
        className={styles.card7}
        text2="challenge-uri practice"
        title="Am creat și"
      />
      <StatsCardLayout1
        counter={11}
        colorText="#fff"
        className={styles.card8}
        description="Participanți la traininguri"
        src={`${process.env.CLOUDFRONT_PUBLIC}/public/stats/coworking.jpg`}
      />
    </div>
  );
}

export default StatsGrid;
