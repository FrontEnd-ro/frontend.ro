import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function UnorderedLists() {
  const title = 'Liste neordonate';
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
          <p>
            Utilizată cînd un set de elemente poate fi folosite în orice
            ordine, ca în lista de cumpărături de mai jos.
          </p>
          <DemoPreview>
            <ul>
              <li> pâine </li>
              <li> cafea </li>
              <li> lapte </li>
              <li> unt </li>
            </ul>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li> pâine </li>
  <li> cafea </li>
  <li> lapte </li>
  <li> unt </li>
</ul>     
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
