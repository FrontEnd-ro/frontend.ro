import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function RegularLoadingImages() {
  const title = 'Modul obisnuit in care browserele incarca imaginile';

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

            Toate imaginile sunt încărcate încă de la început, spre deosebire de
            {' '}
            <a href="/demo/html/lazy-image-loading" target="_blank" rel="noreferrer">
              acest demo
            </a>
            {' '}
            unde browserul încarcă imaginile doar
            când ne apropiem de ele.
          </p>
          <DemoPreview>
            <div>
              {images.map(({ src, alt }) => (
                <img src={src} alt={alt} />
              ))}

            </div>
          </DemoPreview>
        </Demo>
        <Footer />
      </>
    </>
  );
}
