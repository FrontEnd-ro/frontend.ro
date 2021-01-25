import React from 'react';
import Head from 'next/head';

import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonTip } from '~/components/lessons';

export default function LazyLoadingImages() {
  const title = 'Încărcarea imaginilor doar cand avem nevoie de ele';

  const images = [{
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/inside-sushi-restaurant.jpg',
    alt: 'Inside a sushi restaurant',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/man-in-black-holding-video-camera.jpg',
    alt: 'Man in black holding video camera',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/motivational-quote-on-flat-screen-tv.jpg',
    alt: 'Motivational quote on a flat screen',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/red-plastic-chairs.jpg',
    alt: 'Red plastic chairs',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/turned-on-black-flat-screen-monitor.jpg',
    alt: 'Turned-on black flat screen monitor',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/two-people-using-a-laptop.jpg',
    alt: 'Two people using a laptop',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/turned-on-iMac-and-Apple-Magic-Keyboard.jpg',
    alt: 'Turned on iMac and Apple Magic Keyboard',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/eiffel-tower-during-night.jpg',
    alt: 'Eiffel tower during night',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/woman-climbing-down-stairs.jpg',
    alt: 'Woman climbing down stairs',
  },
  {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/orange-fruits-in-white-ceramic-bowl.jpg',
    alt: 'Orange fruits in white ceramic bowl',
  },
  {
    src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/3-red-and-green-apple.jpg',
    alt: '3 Red and green apples',
  }];
  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | DEMO - FrontEnd.ro
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header demoPage />
        <Demo title={title}>
          <p>
            Deschide
            {' '}
            <a href="/intro/devtools" target="_blank" rel="noreferrer">panoul Network</a>
            {' '}
            din DevTools și apoi refreshuiește
            pagina.

            Imaginile sunt încărcate doar când ne apropiem de ele, spre deosebire de
            {' '}
            <a href="/demo/html/regular-image-loading" target="_blank" rel="noreferrer">
              acest demo
            </a>
            {' '}
            unde browserul le încarcă pe toate de la început.
          </p>
          <p>
            {' '}
            Această tehnică se numește
            <strong>Lazy Loading</strong>
          </p>
          <DemoPreview>
            <div>
              {images.map(({ src, alt }) => (
                <img loading="lazy" height="500" src={src} alt={alt} />
              ))}

            </div>
          </DemoPreview>
          {/*
          TODO: add
          <Highlight
            className="my-5"
            language="html"
            code={`
`}
          /> */}
          <LessonTip icon={faQuestionCircle}>
            Atributul
            {' '}
            <strong>style</strong>
            {' '}
            este folosit pentru a stiliza elementele.
            {' '}
            Încă nu am ajuns la acel capitol deci nu-ți fă griji dacă nu înțelegi acel cod.
            <br />
            {' '}
            <br />
            Totuși va trebui să-l pui acolo pentru a obține același rezultat ca mai sus.
          </LessonTip>
        </Demo>
        <Footer />
      </>
    </>
  );
}
