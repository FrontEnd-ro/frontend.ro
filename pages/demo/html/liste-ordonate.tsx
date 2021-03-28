import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function OrderedLists() {
  const title = ' Liste ordonate';
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
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Așa cum sugerează și numele lor, ordinea elementelor din cadrul
            acestora este importantă.
          </p>
          <DemoPreview>
            <ol>
              <li> Cumpără ingredientele necesare </li>
              <li> Amestecă ingredientele </li>
              <li> Pune amestecul într-un vas de gătit </li>
              <li> Coace în cuptor prăjitura timp de o oră </li>
              <li> Scoate prăjitura din cuptor </li>
            </ol>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol>
  <li> Cumpără ingredientele necesare </li>
  <li> Amestecă ingredientele </li>
  <li> Pune amestecul într-un vas de gătit </li>
  <li> Coace în cuptor prăjitura timp de o oră </li>
  <li> Scoate prăjitura din cuptor </li>
</ol>          
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
