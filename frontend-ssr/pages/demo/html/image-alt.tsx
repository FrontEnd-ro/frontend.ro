import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function BasicImage() {
  const title = 'O imagine care nu a putut fi încărcată';
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
            <img
              src="https://d3tycb976jpudc.cloudfront.net/demo-assets/wrong-image-path.jpg"
              alt="Golden retriever biting blue ball"
            />
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img
  src="https://d3tycb976jpudc.cloudfront.net/demo-assets/wrong-image-path.jpg"
  alt="Golden retriever biting blue ball"
/>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
