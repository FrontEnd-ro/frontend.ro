import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function OrderedLists() {
  const title = 'Liste în interiorul altor liste';
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
            O listă poate conține o altă listă. De ce ar fi util să folosim
            nesting lists? De exemplu dacă avem nevoie de un cuprins care
            conține subsecțiuni:
          </p>
          <DemoPreview>
            <ol style={{ listStyleType: 'decimal' }}>
              <li>
                Capitolul 1
                <ol style={{ listStyleType: 'lower-alpha', marginLeft: '1em' }}>
                  <li>Secțiunea unu </li>
                  <li>Secțiunea doi </li>
                  <li>Secțiunea trei </li>
                </ol>
              </li>
              <li>Capitolul 2 </li>
              <li>Capitolul 3 </li>
            </ol>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol>
  <li>Capitolul 1
    <ol style="list-style-type: lower-alpha; margin-left: 1em">
      <li>Secțiunea unu </li>
      <li>Secțiunea doi </li>
      <li>Secțiunea trei </li>
    </ol>
  </li>
  <li>Capitolul 2 </li>
  <li>Capitolul 3 </li>
</ol>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
