import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function TitleLink() {
  const title = 'Atributul title ca și link';

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
            <a title="Nu ar trebui să fiu aici" href="/">
              Un simplu exemplu
            </a>
          </DemoPreview>

          <Highlight
            className="my-5"
            language="html"
            code={`
<a title="Nu ar trebui să fiu aici" href="/">
  Un simplu exemplu
</a>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
