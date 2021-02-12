/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function UnorderedLists() {
  const title = 'Elementul <video>';
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
            {'<video>'}
            {' '}
            împreună cu atributele controls, width și height.
          </p>
          <DemoPreview>
            <video controls width="350" height="250">
              <source
                src="/audio-video/fisier-video.mp4"
                type="video/mp4"
              />

              <source
                src="/audio-video/fisier-video.avi"
                type="video/avi"
              />

              <p>Ne pare rău, browserul dvs. nu acceptă videoclipuri încorporate</p>
            </video>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<video controls width="350" height="250">
  <source src="/audio-video/fisier-video.mp4"
    type="video/mp4" />

  <source src="/audio-video/fisier-video.avi"
    type="video/avi" />
    
  <p>Ne pare rău, browserul dvs. nu acceptă videoclipuri încorporate</p>
</video>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
