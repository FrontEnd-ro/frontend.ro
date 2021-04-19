import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function RelativeUrl() {
  const title = 'URL-uri relative';

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
            <a href="#">About</a>
          </DemoPreview>
          <p>
            Putem avea și URL-uri
            {' '}
            <strong>relative</strong>
            , de obicei folosite
            la realizarea meniurilor paginilor web:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/pages/about.html">About</a>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
