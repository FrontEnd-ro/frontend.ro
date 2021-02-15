import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function intern() {
  const title = 'Fișier intern';
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
            <div style={{
              textAlign: 'center',
              background: 'rgb(0, 216, 216)',
            }}
            >
              <h1 style={{ color: 'red' }}>My Cat Bob</h1>
              <p style={{
                color: '0000ff',
                fontSize: '22px',
                fontWeight: 'bold',
              }}
              >
                My cat is named Bob. He is a lazy cat.
              </p>
            </div>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
            <head>
            <title>My Cat</title>
            <style>
            div{
              text-align:center;
              background-color: rgb(0, 216, 216);
            }
            h1{ color: red; }
            p{ color: 0000ff;
               font-size: 22px;
               font-weight: bold; }
            </style>
            </head>
            <body>
            <div>
            <h1>My Cat Bob</h1>
            <p>My cat is named Bob. He is a lazy cat.</p>
            </div>
            </body>
            `}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
