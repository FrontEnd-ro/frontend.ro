import React from 'react';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';

export default function Video() {
  const title = 'Elementul <video>';
  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        description="Exemplu de utilizare a elementului video."
        url="https://FrontEnd.ro/demo/html/video"
        shareImage="https://d3tycb976jpudc.cloudfront.net/seo/html-audio-video.jpg"
      />
      <>
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Exemplu de utilizare a elementului
            {' '}
            <FormattedText as="strong">{'<video>'}</FormattedText>
            {' '}
            ce specifică mai multe surse:
          </p>
          <DemoPreview>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video muted autoPlay controls width="480" height="270">
              <source
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.mp4`}
                type="video/mp4"
              />
              <source
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.avi`}
                type="video/avi"
              />
              <p>
                Browser-ul tău nu suportă fișiere video.
                Folosește
                {' '}
                <a href={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.mp4`}>acest link</a>
                pentru a-l putea vizualiza.
              </p>
            </video>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<video muted autoplay controls width="480" height="270">
  <source
    src="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.mp4"
    type="video/mp4"
  />

  <source
    src="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.avi"
    type="video/x-matroska"
  />

  <p>
    Browser-ul tău nu suportă fișiere video. Folosește
    <a href="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.mp4">
      acest link
    </a>
    pentru a-l putea vizualiza.
  </p>

</video>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
