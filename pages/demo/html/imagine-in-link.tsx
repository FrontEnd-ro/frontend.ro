import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function ImageInsideLink() {
  const title = 'O imagine în interiorul unui link';

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
            <a href="/">
              <img src="/logo.png" alt="Frontend.ro LOGO." />
            </a>
          </DemoPreview>

          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/">
  <img src="/logo.png" alt="Frontend.ro LOGO." />
</a>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
