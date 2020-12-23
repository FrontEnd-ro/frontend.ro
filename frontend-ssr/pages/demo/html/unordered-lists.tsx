import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function UnorderedLists() {
  const title = ' Liste neordonate cu buline sau fără';
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
            Cu o stilizare potrivită, listele neordonate sunt folosite la
            realizarea
            {' '}
            <em>meniurilor</em>
            {' '}
            paginilor web. Un exemplu putem vedea mai jos:
          </p>
          <DemoPreview>
            <ul style={{ listStyleType: 'disc' }}>
              <li><a href="home.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li><a href="home.html">Home</a></li>
  <li><a href="about.html">About</a></li>
  <li><a href="products.html">Products</a></li>
  <li><a href="services.html">Services</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>       
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
