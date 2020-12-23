import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function OrderedLists() {
  const title = 'Meniu de navigare a unei pagini web cu nested lists';
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
            Nested lists sunt chiar utile și de cele mai multe ori ele
            reprezintă baza creerii
            {' '}
            <em>meniurilor de navigare</em>
            {' '}
            a paginilor
            web deoarece sunt o bună modalitate de a defini structura ierarhică
            a acestora. Un exemplu de meniu (Opera drop down menu ) arată cam
            așa:
          </p>
          <DemoPreview>
            <ul>
              <li><a href="#"><span>Home</span></a></li>
              <li>
                <a href="#"><span>Products</span></a>
                <ul style={{ marginLeft: '1em' }}>
                  <li>
                    <a href="#"><span>Product 1</span></a>
                    <ul style={{ marginLeft: '1em' }}>
                      <li><a href="#"><span>Sub Product</span></a></li>
                      <li><a href="#"><span>Sub Product</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span>Product 2</span></a>
                    <ul style={{ marginLeft: '1em' }}>
                      <li><a href="#"><span>Sub Product</span></a></li>
                      <li><a href="#"><span>Sub Product</span></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#"><span>About</span></a></li>
              <li><a href="#"><span>Contact</span></a></li>
            </ul>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li><a href='#'><span>Home</span></a></li>
  <li>
      <a href='#'><span>Products</span></a>
      <ul style="margin-left: 1em">
        <li>
            <a href='#'><span>Product 1</span></a>
            <ul style="margin-left: 1em">
              <li><a href='#'><span>Sub Product</span></a></li>
              <li><a href='#'><span>Sub Product</span></a></li>
            </ul>
        </li>
        <li>
            <a href='#'><span>Product 2</span></a>
            <ul style="margin-left: 1em">
              <li><a href='#'><span>Sub Product</span></a></li>
              <li><a href='#'><span>Sub Product</span></a></li>
            </ul>
        </li>
      </ul>
  </li>
  <li><a href='#'><span>About</span></a></li>
  <li><a href='#'><span>Contact</span></a></li>
</ul>    
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
