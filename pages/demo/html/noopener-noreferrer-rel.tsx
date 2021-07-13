import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';

export default function NoopenerNoreferrerRel() {
  const title = 'Atributul rel cu valorile noopener și noreferrer';

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
          <DemoPreview>
            <a
              href="http://frontend.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link-ul se deschide într-un nou tab
            </a>
          </DemoPreview>
          <p>
            Când folosim valoarea _blank, e recomandat să adăugăm un nou atribut
            pentru securitate și anume :
            {' '}
            <FormattedText as="strong">
              rel cu valorile ”noopener noreferrer”.
            </FormattedText>
            {' '}
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="http://website.com" target="_blank" rel="noopener noreferrer">
  Link-ul se deschide într-un nou tab
</a>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
