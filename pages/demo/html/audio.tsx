/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function UnorderedLists() {
  const title = 'Elementul <audio>';
  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | FrontEnd.ro
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header demoPage />
        <Demo title={title}>
          <p>
            Exemplu de utilizare a elementului
            {' '}
            {'<audio>'}
            {' '}
            împreună cu atributul controls.
          </p>
          <DemoPreview>
            <audio controls>
              <source
                src="/audio-video/fisier-audio.mp3"
                type="audio/mp3"
              />

              <source
                src="/audio-video/fisier-audio.aac"
                type="audio/aac"
              />

              <p>
                Browser-ul tău nu suportă fișierele audio oferite de noi.
                Folosește
                {' '}
                {'<a href=”fișier-audio.mp4”>acest link</a>'}
                {' '}
                în schimb
                pentru a putea vizualiza acesta.
              </p>
            </audio>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<audio controls>
  <source
    src="/audio-video/fisier-audio.mp3"
    type="audio/mp3"
  />

  <source
    src="/audio-video/fisier-audio.aac"
    type="audio/aac"
  />

  <p>
    Browser-ul tău nu suportă fișierele audio oferite de noi.
    Folosește <a href=”fișier-audio.mp4”>acest link</a> în schimb
    pentru a putea vizualiza acesta.
  </p>
</audio>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
