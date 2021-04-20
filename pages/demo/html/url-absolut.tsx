import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function Link() {
  const title = 'Un simplu mod de a insera un link în pagină';

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
            <a href="https://frontend.ro/"> Frontend.ro </a>
          </DemoPreview>
          <p>
            Avem un link către un URL
            {' '}
            <strong>absolut</strong>
            {' '}
            - adică un URL care conține întreaga adresă
            a unei pagini. Acest tip de URL este deseori întâlnit atunci când un
            website face legătura către un alt website.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="https://frontend.ro/"> Frontend.ro </a>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
