import React from 'react';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import SEOTags from '~/components/SEOTags';
import FormattedText from '~/components/FormattedText';

export default function InlineMethod() {
  const title = 'CSS Inline';
  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        description="Utilizarea metodei inline pentru stilizarea paginilor Web"
        url="https://FrontEnd.ro/demo/css/css-inline"
        shareImage="https://frontend.ro/seo/styling-methods.jpg"
      />
      <>
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Prin
            {' '}
            <FormattedText as="strong">metoda inline</FormattedText>
            {' '}
            putem
            aplica stilul unui singur element HTML.
          </p>
          <p>
            Scrierea codului CSS se va face prin adaugarea atributului
            {' '}
            <FormattedText as="strong">style</FormattedText>
            {' '}
            pe elementul căruia
            vrem să-i modificăm stilul:
          </p>
          <DemoPreview>
            <div style={{ background: '#282a36', padding: '1em' }}>
              <h1
                style={{
                  textAlign: 'center',
                  fontSize: '45px',
                  fontFamily: 'sans-serif',
                  color: 'white',
                  textShadow: '2px 2px 0 #000',
                }}
              >
                CSS inline
              </h1>
              <p
                style={{
                  color: '#fff',
                  marginLeft: '50px',
                  fontSize: '25px',
                  fontFamily: 'sans-serif',
                }}
              >
                Observăm că stilurile sunt destul de greu de citit și editat.
              </p>
              <p
                style={{
                  color: '#fff',
                  marginLeft: '50px',
                  fontSize: '27px',
                  fontFamily: 'sans-serif',
                }}
              >
                De aceea recomandăm evitarea
                <span
                  style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: '#9f616a',
                  }}
                >
                  {' '}
                  acestei metode
                  {' '}
                </span>
                .
              </p>
            </div>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<section style="padding: 1em; background-color: #282a36; color: #fff">
  <h1 style="text-align: center; font-size: 45px; font-family: sans-serif; text-shadow: 2px 2px 0 #000;">
    CSS inline
  </h1>
  <p style="margin-left: 50px; font-size: 25px; font-family: sans-serif;">
    Observăm că stilurile sunt destul de greu de citit și editat.
  </p>
  <p style="margin-left: 50px; font-size: 25px; font-family: sans-serif;">
    De aceea recomandăm evitarea 
    <span style="font-size: 30px; font-weight: bold; color: #9f616a;">
    acestei metode
    </span>
  </p>
</section>
            `}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
