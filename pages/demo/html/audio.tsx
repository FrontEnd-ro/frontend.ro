import React from 'react';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';

export default function Audio() {
  const title = 'Elementul <audio>';
  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        description="Exemplu de utilizare a elementului audio."
        url="https://FrontEnd.ro/demo/html/audio"
        shareImage="https://d3tycb976jpudc.cloudfront.net/seo/html-audio-video.jpg"
      />
      <>
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Exemplu de utilizare a elementului
            {' '}
            <FormattedText as="strong">{'<audio>'}</FormattedText>
            {' '}
            ce specifică mai multe surse:
          </p>
          <DemoPreview>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio style={{ border: '1px solid #000' }} controls>
              <source
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.mp3`}
                type="audio/mpeg"
              />

              <source
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.aac`}
                type="audio/aac"
              />

              <p>
                Browser-ul tău nu suportă fișiere audio.
                Folosește
                {' '}
                <a href={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.mp3`}>acest link</a>
                pentru a-l putea vizualiza.
              </p>
            </audio>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<audio controls>
  <source
    src="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.mp3"
    type="audio/mpeg"
  />

  <source
    src="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.aac"
    type="audio/aac"
  />

  <p>
    Browser-ul tău nu suportă fișiere audio. Folosește
    <a href="${process.env.CLOUDFRONT_PUBLIC} /demo-assets/audio-video/big-buck-bunny-audio.mp3">
      acest link
    </a>
    pentru a-l putea vizualiza.
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
