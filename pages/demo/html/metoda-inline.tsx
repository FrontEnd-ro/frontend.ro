import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function inline() {
  const title = 'Metoda Inline';
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
            <div style={{ background: '#0000ff' }}>
              <h1 style={{
                textAlign: 'center',
                fontSize: '45px',
                fontFamily: 'sans-serif',
                color: 'red',
                textShadow: '2px 2px 0 #000',
              }}
              >
                Metoda inline
              </h1>
              <p style={{
                color: '#000', marginLeft: '50px', fontSize: '25px', fontFamily: 'sans-serif',
              }}
              >
                Stilurile sunt destul de greu de citit si editat.
              </p>
              <p style={{
                color: '#fff', marginLeft: '50px', fontSize: '27px', fontFamily: 'sans-serif',
              }}
              >
                De aceea recomandăm evitarea
                <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#000' }}> acestei metode </span>
                .
              </p>
            </div>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
            <div style="background-color: #00f;">
            <h1 style="text-align: center; font-size: 45px; font-family: sans-serif; 
                       color: red; text-shadow: 2px 2px 0 #000;">Metoda inline</h1>
            <p style="color: #000; margin-left: 50px; font-size: 25px; 
                      font-family: sans-serif;">Stilurile sunt destul de greu de citit si editat.</p>
            <p style="color: #fff; margin-left: 50px; font-size: 27px; 
                      font-family: sans-serif;">De aceea recomandăm evitarea <span style="font-size: 30px; font-weight: bold; color: #000;">acestei metode</span>.</p>
            </div>
            `}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
