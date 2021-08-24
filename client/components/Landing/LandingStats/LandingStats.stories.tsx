import React from 'react';
import {
  StatsCardLayout1,
  StatsCardLayout2,
  StatsCardLayout3,
  StatsCardLayout4,
  StatsCardLayout5,
  StatsCardLayout6,
} from '~/components/PlatformStats';
import { Pava } from '~/services/contributors.storybook';

export default {
  title: 'StatsCards',
};

export const StatsCard1 = () => (
  <>
    {/* without position */}
    <StatsCardLayout1
      counter={9}
      colorText="#2980b9"
      description="Contribuitori cu inimă mare"
      className="mb-4"
      src="https://d3tycb976jpudc.cloudfront.net/seo/default-schmoes-seo.jpg"
    />
    {/* with position */}
    <StatsCardLayout1
      counter={11}
      colorText="#1b1b15"
      position="bottom"
      description="Participanți la traininguri"
      src="https://d3tycb976jpudc.cloudfront.net/seo/default-schmoes-seo.jpg"
    />
  </>
);

export const StatsCard2 = () => (
  <>
    {/* with header */}
    <StatsCardLayout2
      counter={5}
      colorText="#A4375B"
      header="Open-Source"
      description="Repo-uri"
      className="mb-4"
      src="https://d3tycb976jpudc.cloudfront.net/public/stats/countries.svg"
    />
    {/* without header */}
    <StatsCardLayout2
      counter={5}
      colorText="#A4375B"
      description="Repo-uri"
      withHeader={false}
      src="https://d3tycb976jpudc.cloudfront.net/public/stats/countries.svg"
    />
  </>
);

export const StatsCard3 = () => (
  <StatsCardLayout3
    text1="Am scris"
    text2="5 lecții"
    colorText="#1b1b15"
    src="https://d3tycb976jpudc.cloudfront.net/public/stats/vintage-typewriter.jpg"
  />
);

export const StatsCard4 = () => (
  <StatsCardLayout4
    counter1={38}
    counter2={33}
    text1="slide-uri"
    colorText="#1b1b15"
    text2="challenge-uri practice"
    title="Am creat și"
  />
);

export const StatsCard5 = () => (
  <>
    {/* with contributors */}
    <StatsCardLayout5
      text1="Fondator"
      text2="de la comunitatea open-source"
      colorText="#fff"
      className="mb-4"
      contributors={[Pava]}
    />
    {/* without contributors */}
    <StatsCardLayout5
      text1="Text 1"
      text2="Text 2"
      colorText="#A4375B"
    />
  </>
);

export const StatsCard6 = () => (
  <>
    {/* with background image and footer */}
    <StatsCardLayout6
      counter={1}
      description="inițiativă open-source"
      footer="pornită din Iași"
      colorText="#fff"
      background="image"
      className="mb-4"
      src="https://d3tycb976jpudc.cloudfront.net/public/stats/palace-of-culture.jpg"
    />
    {/* with background linear-gradient and footer */}
    <StatsCardLayout6
      counter={2}
      colorText="#663399"
      description="training-uri practice"
      direction="to top left"
      colorGradient1="b4fdfd"
      colorGradient2="a8c6f0"
      background="linear-gradient"
      className="mb-4"
      footer="Contează doar cât de mult exersezi 💕"
    />
    {/* without footer */}
    <StatsCardLayout6
      counter={4}
      colorText="#2980b9"
      background="image"
      description="traineri pasionați"
      className="mb-4"
      src="https://d3tycb976jpudc.cloudfront.net/public/stats/pencils.jpg"
    />
  </>
);
