import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function PhoneNumberLinks() {
  const title = 'Link-uri către numere de telefon';

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
            <a href="tel:+49.157.0156">+49 157 0156</a>
            <a href="tel:+1(555)5309">(555) 5309</a>
          </DemoPreview>
          <p>
            Acestea sunt foarte uzuale mai
            ales cînd navigăm de pe dispozitive mobile, dar nu numai:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
