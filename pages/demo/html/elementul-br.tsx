import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';

export default function LineBreak() {
  const title = 'Elementul <br> pentru a adăuga o linie nouă';
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
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Dând
            {' '}
            <FormattedText as="span">Enter</FormattedText>
            {' '}
            într-un paragraf
            nu forțează textul pe o nouă linie. Pentru a obține acest rezultat
            putem crea un nou paragraf, sau să folosim elementul
            {' '}
            <FormattedText as="strong">{'<br>'}</FormattedText>
            .
          </p>
          <DemoPreview>
            <p>
              Azi am codat împreună cu
              <br />
              Alex,
              <br />
              Diana și
              <br />
              Antonia.
            </p>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p>
  Azi am codat împreună cu <br>
  Alex, <br>
  Diana și <br>
  Antonia.
</p>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
