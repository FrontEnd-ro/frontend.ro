import React from 'react';
import Head from 'next/head';

import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import { LessonTip } from '~/components/lessons';

export default function BasicImage() {
  const title = 'Modul obisnuit in care browserele incarca imaginile';

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
            din DevTools si apoi refreshuieste
            pagina.

            Toate imaginile sunt incarcate inca de la inceput, spre deosebire de
            {' '}
            <a href="/demo/html/lazy-image-loading" target="_blank" rel="noreferrer">
              acest demo
            </a>
            {' '}
            unde browserul incarca imaginile doar
            cand ne apropiem de ele.
          </p>
          <DemoPreview>
            <div>
              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/inside-sushi-restaurant.jpg"
                alt="Inside sushi restaurant"
              />
              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/man-in-black-holding-video-camera.jpg"
                alt="Main in black holding video camera"
              />
              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/motivational-quote-on-flat-screen-tv.jpg"
                alt="Motivational quote on flat screen TV"
              />
              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/red-plastic-chairs.jpg"
                alt="Red plastic chairs"
              />

              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/turned-on-black-flat-screen-monitor.jpg"
                alt="Turned-on black flat screen monitor"
              />

              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/two-people-using-a-laptop.jpg"
                alt="Two people using a laptop"
              />

              <img
                loading="lazy"
                style={{ marginBottom: '30em' }}
                src="https://d3tycb976jpudc.cloudfront.net/demo-assets/turned-on-iMac-and-Apple-Magic-Keyboard.jpg"
                alt="Turned-on iMac and Apple Magic Keyboard"
              />

            </div>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<div style="display: flex; flex-flow: row wrap; justify-content: space-between; align-items: flex-start;">
  <img 
    src="https://d3tycb976jpudc.cloudfront.net/demo-assets/body-of-water-and-trees.jpg"
    alt="Body of water and trees" 
    style="width: 45%; margin-bottom: 1em" />

  <img 
    src="https://d3tycb976jpudc.cloudfront.net/demo-assets/alpaca-portrait.jpg"
    alt="Alpaca portrait"
    style="width: 45%; margin-bottom: 1em" />

  <img 
    src="https://d3tycb976jpudc.cloudfront.net/demo-assets/lion-portrait.jpg"
    alt="Lion portrait" 
    style="width: 45%" />

  <img 
    src="https://d3tycb976jpudc.cloudfront.net/demo-assets/snow-capped-mountains.jpg"
    alt="Snow capped mountains" 
    style="width: 45%" />
</div>`}
          />
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
