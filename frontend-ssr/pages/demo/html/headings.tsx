import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function MissingImage() {
  const title = 'Titluri (Headings)';
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
        <Header demoPage />
        <Demo title={title}>
          <DemoPreview>
            <h1> Heading #1 </h1>
            <h2> Heading #2 </h2>
            <h3> Heading #3 </h3>
            <h4> Heading #4 </h4>
            <h5> Heading #5 </h5>
            <h6> Heading #6 </h6>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<h1> Heading #1 </h1>
<h2> Heading #2 </h2>
<h3> Heading #3 </h3>
<h4> Heading #4 </h4>
<h5> Heading #5 </h5>
<h6> Heading #6 </h6>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
