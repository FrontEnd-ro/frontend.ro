import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function OrderedLists() {
  const title = ' Liste ordonate folosite împreună cu atributul start';
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
            Putem opta chiar să enumerăm elementele unei liste ordonate începînd
            de la un anumit număr/literă. Pentru asta ne vom folosi de atributul
            {' '}
            <strong className="formatted">start</strong>
            {' '}
            dînd ca valoare numărul
            de la care vrem sa începem numărătoarea:
          </p>
          <DemoPreview>
            <ol style={{ listStyleType: 'decimal' }} start="2">
              <li>Cumpără ingredientele necesare</li>
              <li>Amestecă ingredientele</li>
              <li>Pune amestecul într-un vas de gătit</li>
              <li>Coace în cuptor prăjitura timp de o oră</li>
              <li>Scoate prăjitura din cuptor</li>
              <li>Las-o la răcit 10 minute</li>
              <li>Servește prăjitura</li>
            </ol>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol start="2">
  <li>Cumpără ingredientele necesare</li>
  <li>Amestecă ingredientele</li>
  <li>Pune amestecul într-un vas de gătit</li>
  <li>Coace în cuptor prăjitura timp de o oră</li>
  <li>Scoate prăjitura din cuptor</li>
  <li>Las-o la răcit 10 minute</li>
  <li>Servește prăjitura</li>
</ol>          
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
