import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function JumpLinks() {
  const title = 'Link-uri care duc către o secțiune ale aceleiași pagini (jump links)';

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
            <a href="#Section-further-down">
              Sari la secțiunea de mai jos
            </a>
            <h2 id="Section-further-down">Section further down</h2>
          </DemoPreview>
          <p>
            Foarte utile sunt și link-urile care duc către o secțiune ale
            aceleiași pagini sau așa numitele
            {' '}
            <strong className="formatted">jump links</strong>
            .
          </p>
          <p>
            Deși nu am ajuns la partea de CSS, merită menționat că jump links
            trebuie să beneficieze de
            {' '}
            <a href="/concepts/smooth-scrolling">smooth scrolling</a>
            {' '}
            pentru ca
            userii să aibă o experiență plăcută.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="#Section-further-down"> 
  Sari la secțiunea de mai jos 
</a> 
<h2 id="Section-further-down">Section further down</h2>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
