import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function OrderedLists() {
  const title = ' Liste ordonate folosite împreună cu atributul type';
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
            Dacă vrem ca enumerarea elementelor din listă să se faca cu un
            anumit tip de cifră sau cu litere, ne putem folosi de atributul
            <strong> type .</strong>
            {' '}
          </p>
          Acesta acceptă ca valori:
          <ul className="with--bullets">
            <li>
              {' '}
              <strong className="formatted">1</strong>
              {' '}
              – pentru enumerare cu
              {' '}
              cifre arabe;
            </li>
            <li>
              {' '}
              <strong className="formatted">i sau I</strong>
              {' '}
              – pentru enumerare
              cu cifre romane mici, respectiv mari
            </li>
            <li>
              {' '}
              <strong className="formatted">a sau A</strong>
              {' '}
              – pentru enumerare
              cu litere mici, respectiv mari.
            </li>
          </ul>
          <DemoPreview>
            <ol style={{ listStyleType: 'upper-roman' }}>
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
<ol type="I">
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
