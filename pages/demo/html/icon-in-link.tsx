import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function IconInsideLink() {
  const title = 'Doar un icon în interiorul unui link';

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
              {/* <!-- Ascundem icon-ul de assistive technology --> */}
              <svg
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
              {/* <!--Se comporta ca un label ce e ascuns --> */}
              <span style={{ position: 'absolute', opacity: 0 }}>
                Useful link text
              </span>
            </a>
          </DemoPreview>

          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/">
  <!-- Ascundem icon-ul de assistive technology -->
  <svg viewBox="0 0 32 32" width="32px" height="32px" 
  aria-hidden="true" focusable="false">
    <circle cx="16" cy="16" r="16"/>
  </svg>
  <!--Se comporta ca un label ce e ascuns -->
  <span style="position: absolute; opacity: 0">
   Useful link text
  </span>
</a>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
