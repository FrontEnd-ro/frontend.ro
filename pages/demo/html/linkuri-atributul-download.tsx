import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function LinksDownloadAttribute() {
  const title = 'Atributul download';

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
            <a href="/files/test.pdf" download>Download PDF</a>
          </DemoPreview>
          <p>
            Împreuna cu atributul
            {' '}
            <strong className="formatted">download</strong>
            , putem instrui
            browser-ul să downloadeze fișierul din cadrul link-ului în loc să îl
            deschidă în pagina curentă:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/files/test.pdf" download>Download PDF</a>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
